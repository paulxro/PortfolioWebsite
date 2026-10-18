"use client";

import { useEffect, useState } from "react";
import { Cell } from "./cell";
import styles from "./css/game-board.module.css";

const UPDATE_INTERVAL = 2_000;
const CELL_SIZE = 23;
const MIN_COLUMNS = 24;
const MIN_ROWS = 18;

type BoardSize = {
  columns: number;
  rows: number;
};

function getBoardSize(): BoardSize {
  return {
    columns: Math.max(MIN_COLUMNS, Math.ceil(window.innerWidth / CELL_SIZE) + 4),
    rows: Math.max(MIN_ROWS, Math.ceil(window.innerHeight / CELL_SIZE) + 4),
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

export function GameBoard() {
  const [boardSize, setBoardSize] = useState<BoardSize | null>(null);
  const [cells, setCells] = useState<boolean[]>([]);

  useEffect(() => {
    const resizeBoard = () => {
      const nextSize = getBoardSize();
      setBoardSize(nextSize);
      setCells(createSeed(nextSize));
    };

    resizeBoard();
    window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeBoard);
  }, []);

  useEffect(() => {
    if (!boardSize) return;

    const intervalId = window.setInterval(() => {
      setCells((currentCells) => getNextGeneration(currentCells, boardSize));
    }, UPDATE_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [boardSize]);

  if (!boardSize) return null;

  return (
    <div className={styles.background} aria-hidden="true">
      <div
        className={styles.board}
        style={{
          gridTemplateColumns: `repeat(${boardSize.columns}, var(--life-cell-size))`,
        }}
      >
        {cells.map((isAlive, index) => (
          <Cell isAlive={isAlive} key={index} />
        ))}
      </div>
    </div>
  );
}
