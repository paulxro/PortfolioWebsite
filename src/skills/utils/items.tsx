export const Proficiency = {
    FAMILIAR    : "Familiar",
    COMFORTABLE : "Comfortable",
    PROFICIENT  : "Proficient",
} as const;

export const SkillType = {
    LANGUAGE    : "Language",
    FRAMEWORK   : "Framework",
    CLOUD       : "Cloud",
    DATABASE    : "Database",
} as const;

export type SkillType   = typeof SkillType  [keyof typeof SkillType  ];
export type Proficiency = typeof Proficiency[keyof typeof Proficiency];

export interface Skill {
    name    : string;
    level   : Proficiency;
    icon    : string;
}

export const skills: Skill[] = [
    { name: "C"                 ,   level: Proficiency.PROFICIENT , icon: "ri-code-box-line"     },
    { name: "C++"               ,   level: Proficiency.PROFICIENT , icon: "ri-code-box-line"     },
    { name: "Python"            ,   level: Proficiency.PROFICIENT , icon: "ri-terminal-box-line" },
    { name: "JavaScript"        ,   level: Proficiency.PROFICIENT , icon: "ri-javascript-line"   },
    { name: "TypeScript"        ,   level: Proficiency.PROFICIENT , icon: "ri-javascript-line"   },
    { name: "Java"              ,   level: Proficiency.COMFORTABLE, icon: "ri-cup-line"          },
    { name: "HTML"              ,   level: Proficiency.PROFICIENT , icon: "ri-code-s-slash-line" },
    { name: "CSS"               ,   level: Proficiency.PROFICIENT , icon: "ri-code-s-slash-line" },
    { name: "React.js"          ,   level: Proficiency.PROFICIENT , icon: "ri-reactjs-line"      },
    { name: "Express.js"        ,   level: Proficiency.COMFORTABLE, icon: "ri-road-map-line"     },
    { name: "Vue.js"            ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
    { name: "Django"            ,   level: Proficiency.COMFORTABLE, icon: "ri-server-line"       },
    { name: "PostgreSQL"        ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
    { name: "Flask"             ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
    { name: "Spring Boot"       ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         }, 
    { name: "AWS (EC2)"         ,   level: Proficiency.COMFORTABLE, icon: "ri-cloud-line"        },
    { name: "AWS (Route 53)"    ,   level: Proficiency.COMFORTABLE, icon: "ri-cloud-line"        },
    { name: "MongoDB"           ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
    { name: "Github"            ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
    { name: "Gitlab"            ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
    { name: "Cypress"           ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
    { name: "Bash"              ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
    { name: "Pytest"            ,   level: Proficiency.PROFICIENT , icon: "ri-leaf-line"         },
];
