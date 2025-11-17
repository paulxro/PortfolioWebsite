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
            'Built ReactJS front-end with Python REST API to simulate core banking workflows.',
            'Secured sessions with JWT authentication and stored user data in a distributed MongoDB cluster.'
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
            'Implemented compiler for educational assembly language, using ASTs, symbol tables, and DCE.',
            'Validated with a full test suite covering parsing, semantic analysis, and binary output.'
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
            'Developed an Electron desktop app to fetch stock data and analyze trading risk with statistical models.',
            'Integrated a Flask REST API for user and stock data and added TOTP-based MFA.'
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
            'Designed TypeScript Chrome Extension to help visually-impaired users play on chess.com',
            'Captured audio input and mapped moves to a digital board; automated testing with Cypress.'
        ],
        link: 'https://www.youtube.com/watch?v=JF8bIIdvLKo'
    },
    {
        name: 'KV-Align for Streaming LLM\'s',
        image: '/project_pictures/kv_align_proj.png',
        skills: [
            'C++', 'AI / LLM', 'Research', 'Latency Critical', 'Multi-threaded', 'Advanced DSA', 'Makefile', 'Research'
        ],
        desc_points: [
            'Designed a new technique to embed a small predictive model to rectify positionally-encoded tokens in KV-Caches, enabling seamless streaming behavior.',
            'KV-Align demonstrates up to a 50% speed-up over KV-Cache recomputation and significantly lower perplexity than prior approaches'
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
            'Built on the AIFM (Application-Integrated Far Memory) system to significantly reduce remote memory access time by monitoring system resources.',
            'Leveraged multi-threaded code to reduce latency up to 20,000x on tangible workloads.'
        ],
        link: '/project_pictures/memory_proj_file.pdf'
    },
    {
        name: 'C Webserver Library',
        image: '/project_pictures/web_server_proj.png',
        skills: [
            'C', 'TCP/UDP', 'DNS', 'Networking', 'Multi-threaded', 'Latency Critical', 'Makefile', 'Operating Systems', 
        ],
        desc_points: [
            'Built library for handling HTTP/1.X requests, including DNS resolution from root name servers.',
            'Supported multi-threaded request handling for improved throughput.'
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
            'Designed fault-tolerant distributed job execution system with worker-manager architecture.',
            'Deployed on AWS EC2 & managed DNS with Route 53, enabling parallel execution of large-scale tasks.'
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
            'Leveraged a systematic re-ordering of inter-dependent nested loop memory access to achieve up to a 20.7x speed-up of LLVM\' auto-vectorization.',
            'Significantly reduced number of scalar instructions, achieving a 41.2% reduction in dynamic instruction counts.'
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
            'Designed a new evaluation metric of chess games as a function of the elo of the player.',
            'Improved accuracy of game advantage (and outcome) of lower-rated players by up to 20% from baseline Stockfish.'
        ],
        link: '/project_pictures/chess_elo_file.pdf'
    }


];