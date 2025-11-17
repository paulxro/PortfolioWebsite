export interface Project {
    name            : string;
    image           : string;
    skills          : Array<string>;
    desc_points     : Array<string>;
    link            : string;
}

export const projects: Project[] = [
    {
        name: 'Banking Web Application',
        image: '/project_pictures/bank_app.jpg',
        skills: [
            'HTML/CSS', 'JavaScript', 'Python', 'React.JS', 'REST API', 'MongoDB', 'JWT', 'AWS', 'Flask'
        ],
        desc_points: [
            'Built a ReactJS front-end with a Python REST API to simulate core banking workflows.',
            'Implemented JWT-based authentication and stored user data in a distributed MongoDB cluster.'
        ],
        link: 'https://github.com/paulxro/fake_bank_app'
    },
    {
        name: 'Little Computer Compiler (LCC)',
        image: '/project_pictures/lcc_proj.png',
        skills: [
            'C++', 'Compiler', 'Assembly', 'Advanced DSA', 'Makefile'
        ],
        desc_points: [
            'Implemented a compiler for an educational assembly language using ASTs, symbol tables, and dead code elimination.',
            'Verified correctness with a full test suite covering parsing, semantic analysis, and binary generation.'
        ],
        link: 'https://github.com/paulxro/lcc'
    },
    {
        name: 'Stock Trading Application',
        image: '/project_pictures/stock_app.jpg',
        skills: [
            'HTML/CSS', 'JavaScript', 'Python', 'Electron', 'Flask', 'Express.js', 'MongoDB', 'REST API', 'AWS', 'MFA'
        ],
        desc_points: [
            'Developed an Electron desktop app to fetch stock data and analyze trading risk using statistical models.',
            'Integrated a Flask REST API for user and stock data and added TOTP-based multi-factor authentication.'
        ],
        link: 'https://github.com/paulxro/stock_trader_app'
    },
    {
        name: 'Chess Visual Helper',
        image: '/project_pictures/chess_app.png',
        skills: [
            'HTML/CSS', 'JavaScript', 'Chromium', 'REST API', 'Cypress'
        ],
        desc_points: [
            'Developed a TypeScript Chrome extension to assist visually impaired users playing on chess.com.',
            'Captured audio input, mapped moves to a digital board, and built automated tests using Cypress.'
        ],
        link: 'https://www.youtube.com/watch?v=JF8bIIdvLKo'
    },
    {
        name: "KV-Align for Streaming LLM's",
        image: '/project_pictures/kv_align_proj.png',
        skills: [
            'C++', 'AI / LLM', 'Research', 'Latency Critical', 'Multi-threaded', 'Advanced DSA', 'Makefile'
        ],
        desc_points: [
            'Designed a technique that embeds a small predictive model to correct positionally encoded tokens in KV-caches, enabling seamless streaming behavior.',
            'Demonstrated up to a 50% speed-up over KV-cache recomputation with significantly lower perplexity than prior approaches.'
        ],
        link: '/project_pictures/kv_align_file.pdf'
    },
    {
        name: 'DynamicSwap',
        image: '/project_pictures/memory_proj.png',
        skills: [
            'C++', 'Operating Systems', 'Memory Paging', 'Latency Critical', 'Multi-threaded', 'Advanced DSA', 'Makefile', 'Research'
        ],
        desc_points: [
            'Extended the AIFM (Application-Integrated Far Memory) system to reduce remote memory access latency by monitoring system resource behavior.',
            'Used multi-threaded optimizations to reduce tail latency by up to 20,000× on real workloads.'
        ],
        link: '/project_pictures/memory_proj_file.pdf'
    },
    {
        name: 'C Webserver Library',
        image: '/project_pictures/web_server_proj.png',
        skills: [
            'C', 'TCP/UDP', 'DNS', 'Networking', 'Multi-threaded', 'Latency Critical', 'Makefile', 'Operating Systems'
        ],
        desc_points: [
            'Built a C library to handle HTTP/1.x requests, including DNS resolution from root name servers.',
            'Implemented multi-threaded request handling to improve throughput and reduce response time.'
        ],
        link: ''
    },
    {
        name: 'Distributed Computing Interface',
        image: '/project_pictures/distributed_proj.svg',
        skills: [
            'Python', 'TCP/UDP', 'Networking', 'Multi-threaded', 'Latency Critical', 'Distributed Computing'
        ],
        desc_points: [
            'Designed a fault-tolerant distributed job execution system using a worker–manager architecture.',
            'Deployed on AWS EC2 with DNS managed through Route 53, enabling parallel execution of large-scale tasks.'
        ],
        link: ''
    },
    {
        name: 'Inter-Dependent Loop Inversion for LLVM',
        image: '/project_pictures/vectorizer_proj.png',
        skills: [
            'C++', 'Assembly', 'Compiler', 'Latency Critical', 'Multi-threaded', 'Advanced DSA', 'Research'
        ],
        desc_points: [
            'Applied a systematic reordering of inter-dependent nested loops to achieve up to a 20.7× speed-up over LLVM’s auto-vectorizer.',
            'Reduced scalar instruction counts substantially, achieving a 41.2% reduction in dynamic instructions.'
        ],
        link: '/project_pictures/vectorization_file.pdf'
    },
    {
        name: 'Elo-Integrated Evaluation for Chess Engines',
        image: '/project_pictures/chess_elo_proj.png',
        skills: [
            'Python', 'Multi-threaded', 'Research', 'Chess'
        ],
        desc_points: [
            'Designed a new evaluation metric for chess games that accounts for a player’s Elo rating.',
            'Improved prediction accuracy for lower-rated players’ game outcomes by up to 20% compared to Stockfish baselines.'
        ],
        link: '/project_pictures/chess_elo_file.pdf'
    }
];
