"use client";

import { useEffect, useRef } from "react";
import styles from "./css/game-board.module.css";

const UPDATE_INTERVAL = 2_000;
const FADE_DURATION = 900;
const CELL_SIZE = 23;
const MIN_COLUMNS = 24;
const MIN_ROWS = 18;
const MAX_PIXEL_RATIO = 2;
const ROTATION = (-6 * Math.PI) / 180;
// Matches how Chrome rendered the old 1.5px CSS border, which it floors to whole pixels.
const BORDER_WIDTH = 1;
const BORDER_RADIUS = 5;
const GLOW_BLUR = 10;

type BoardSize = {
  columns: number;
  rows: number;
};

type Layout = {
  cellSize: number;
  gap: number;
  scale: number;
};

type CellStyle = {
  borderColor: string;
  aliveSprite: HTMLCanvasElement;
};

const DESKTOP_LAYOUT: Layout = { cellSize: 17, gap: 6, scale: 1.12 };
const MOBILE_LAYOUT: Layout = { cellSize: 14, gap: 5, scale: 1.3 };

function getBoardSize(width: number, height: number): BoardSize {
  return {
    columns: Math.max(MIN_COLUMNS, Math.ceil(width / CELL_SIZE) + 4),
    rows: Math.max(MIN_ROWS, Math.ceil(height / CELL_SIZE) + 4),
  };
}

function createSeed({ columns, rows }: BoardSize) {
  return Array.from({ length: columns * rows }, (_, index) => {
    const row = Math.floor(index / columns);
    const column = index % columns;
    const pattern = (row * 17 + column * 31 + row * column * 7) % 29;

    return pattern < 8 || (row + column) % 19 === 0;
  });
}

function getNextGeneration(cells: boolean[], { columns, rows }: BoardSize) {
  return cells.map((isAlive, index) => {
    const row = Math.floor(index / columns);
    const column = index % columns;
    let neighbors = 0;

    for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
      for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1) {
        if (rowOffset === 0 && columnOffset === 0) continue;

        const neighborRow = (row + rowOffset + rows) % rows;
        const neighborColumn = (column + columnOffset + columns) % columns;

        if (cells[neighborRow * columns + neighborColumn]) neighbors += 1;
      }
    }

    return neighbors === 3 || (isAlive && neighbors === 2);
  });
}

// Live cells carry a glow, so render one once and copy it for every live cell.
function createCellStyle(cellSize: number, pixelScale: number): CellStyle {
  const rootStyles = getComputedStyle(document.documentElement);
  const color = (name: string) => rootStyles.getPropertyValue(name).trim();
  const aliveSprite = document.createElement("canvas");
  aliveSprite.width = Math.ceil((cellSize + GLOW_BLUR * 2) * pixelScale);
  aliveSprite.height = aliveSprite.width;

  const context = aliveSprite.getContext("2d");
  if (context) {
    context.scale(pixelScale, pixelScale);
    context.fillStyle = color("--accent");
    context.shadowColor = color("--accent-halo");
    // Shadow blur ignores the context's scale, so apply it by hand.
    context.shadowBlur = GLOW_BLUR * pixelScale;
    context.beginPath();
    context.roundRect(GLOW_BLUR, GLOW_BLUR, cellSize, cellSize, BORDER_RADIUS);
    context.fill();
  }

  return { borderColor: color("--accent-soft"), aliveSprite };
}

function startGameOfLife(previousCanvas: HTMLCanvasElement, currentCanvas: HTMLCanvasElement) {
  const previousContext = previousCanvas.getContext("2d");
  const currentContext = currentCanvas.getContext("2d");
  if (!previousContext || !currentContext) return;

  const mobileQuery = window.matchMedia("(max-width: 700px)");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let layout = DESKTOP_LAYOUT;
  let boardSize: BoardSize = { columns: 0, rows: 0 };
  let cells: boolean[] = [];
  let cellStyle: CellStyle;
  let fade: Animation | undefined;

  const drawCells = (context: CanvasRenderingContext2D) => {
    const pitch = layout.cellSize + layout.gap;
    const spriteSize = layout.cellSize + GLOW_BLUR * 2;
    const getX = (index: number) => (index % boardSize.columns) * pitch;
    const getY = (index: number) => Math.floor(index / boardSize.columns) * pitch;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.translate(width / 2, height / 2);
    context.rotate(ROTATION);
    context.scale(layout.scale, layout.scale);
    context.translate(
      -(boardSize.columns * pitch - layout.gap) / 2,
      -(boardSize.rows * pitch - layout.gap) / 2,
    );

    // Stroke outlines as vectors so they stay as crisp as CSS borders once rotated.
    context.beginPath();
    cells.forEach((isAlive, index) => {
      if (isAlive) return;

      context.roundRect(
        getX(index) + BORDER_WIDTH / 2,
        getY(index) + BORDER_WIDTH / 2,
        layout.cellSize - BORDER_WIDTH,
        layout.cellSize - BORDER_WIDTH,
        BORDER_RADIUS - BORDER_WIDTH / 2,
      );
    });
    context.lineWidth = BORDER_WIDTH;
    context.strokeStyle = cellStyle.borderColor;
    context.stroke();

    cells.forEach((isAlive, index) => {
      if (!isAlive) return;

      context.drawImage(
        cellStyle.aliveSprite,
        getX(index) - GLOW_BLUR,
        getY(index) - GLOW_BLUR,
        spriteSize,
        spriteSize,
      );
    });
  };

  // Keep the old frame on the bottom canvas and fade the new one in on top. Only the
  // top canvas's opacity animates, which the browser composites without repainting.
  const showCells = (animate: boolean) => {
    fade?.cancel();
    previousContext.clearRect(0, 0, previousCanvas.width, previousCanvas.height);
    previousContext.drawImage(currentCanvas, 0, 0);
    drawCells(currentContext);

    if (animate && !reducedMotionQuery.matches) {
      fade = currentCanvas.animate({ opacity: [0, 1] }, { duration: FADE_DURATION, easing: "ease" });
    }
  };

  const resize = () => {
    const nextWidth = currentCanvas.clientWidth;
    const nextHeight = currentCanvas.clientHeight;
    const nextPixelRatio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
    const nextLayout = mobileQuery.matches ? MOBILE_LAYOUT : DESKTOP_LAYOUT;

    if (
      nextWidth === width &&
      nextHeight === height &&
      nextPixelRatio === pixelRatio &&
      nextLayout === layout
    ) {
      return;
    }

    width = nextWidth;
    height = nextHeight;
    pixelRatio = nextPixelRatio;
    layout = nextLayout;

    for (const canvas of [previousCanvas, currentCanvas]) {
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
    }

    const nextBoardSize = getBoardSize(width, height);
    if (nextBoardSize.columns !== boardSize.columns || nextBoardSize.rows !== boardSize.rows) {
      boardSize = nextBoardSize;
      cells = createSeed(boardSize);
    }

    cellStyle = createCellStyle(layout.cellSize, pixelRatio * layout.scale);
    showCells(false);
  };

  const changeTheme = () => {
    cellStyle = createCellStyle(layout.cellSize, pixelRatio * layout.scale);
    showCells(true);
  };

  resize();

  const themeObserver = new MutationObserver(changeTheme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  window.addEventListener("resize", resize);

  const intervalId = window.setInterval(() => {
    cells = getNextGeneration(cells, boardSize);
    showCells(true);
  }, UPDATE_INTERVAL);

  return () => {
    window.clearInterval(intervalId);
    window.removeEventListener("resize", resize);
    themeObserver.disconnect();
    fade?.cancel();
  };
}

export function GameBoard() {
  const previousCanvasRef = useRef<HTMLCanvasElement>(null);
  const currentCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!previousCanvasRef.current || !currentCanvasRef.current) return;

    return startGameOfLife(previousCanvasRef.current, currentCanvasRef.current);
  }, []);

  return (
    <div className={styles.background} aria-hidden="true">
      <canvas className={styles.canvas} ref={previousCanvasRef} />
      <canvas className={styles.canvas} ref={currentCanvasRef} />
    </div>
  );
}
