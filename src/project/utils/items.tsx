export interface Project {
    name  : string;
    image : string;
    skills: Array<string>;
    desc  : string;
}

export const projects: Project[] = [
    {
        name: 'Banking Web Application',
        image: 'none',
        skills: ['HTML/CSS'],
        desc: 'Built ReactJS front-end with Python REST API to simulate core banking workflows.'
    },
    {
        name: 'Banking Web Application',
        image: 'none',
        skills: [],
        desc: 'Built ReactJS front-end with Python REST API to simulate core banking workflows.'
    }

];