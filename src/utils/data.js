import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import PROJECT_IMG_1 from '../assets/images/project-1.png';
import PROJECT_IMG_2 from '../assets/images/project-2.png';
import PROJECT_IMG_3 from '../assets/images/project-3.png';
import PROJECT_IMG_4 from '../assets/images/project-4.png';
import PROJECT_IMG_5 from '../assets/images/project-5.png';
import PROJECT_IMG_6 from '../assets/images/project-6.png';
import PROJECT_IMG_7 from '../assets/images/project-7.png';
import { color } from 'framer-motion';

export const SKILLS_CATEGORYS = [
    { 
        title: "Frontend", 
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",    
        skills: [
            { name: "React", level: 95, color: "bg-blue-500" },
            { name: "TypeScript", level: 90, color: "bg-blue-600" },
            { name: "Next.js", level: 88, color: "bg-gray-800" },
            { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
            { name: "Framer Motion", level: 85, color: "bg-pink-500" },
        ],
    },
    {       

    title: "Backend", 
        icon: Server,
        description: "Building robust and scalable server-side applications",
        skills: [
            { name: "Node.js", level: 90, color: "bg-green-500" },
            { name: "Express.js", level: 85, color: "bg-gray-700" },
            { name: "Python", level: 80, color: "bg-yellow-500" },
            { name: "GraphQL", level: 75, color: "bg-pink-500" },
            { name: "REST APIs", level: 85, color: "bg-blue-500" },
        ],
    },
    { 
        title: "Database",

        icon: Database,
        description: "Designing efficient and reliable data storage solutions",
        skills: [
            { name: "MongoDB", level: 85, color: "bg-green-600" },
            { name: "MangoDB", level: 85, color: "bg-green-600" },
            { name: "Redis", level: 80, color: "bg-red-500" },
            { name: "Prisma", level: 75, color: "bg-blue-400" },
            { name: "Firebase", level: 70, color: "bg-yellow-400" },
        ],
    },
    {

        title: "DevOps",
        icon: Cloud,
        description: "Ensuring smooth deployment and operation of applications",
        skills: [
            { name: "Docker", level: 80, color: "bg-blue-600" },
            { name: "AWS", level: 75, color: "bg-orange-600" },
            { name: "Vercel", level: 85, color: "bg-purple-900" },
            { name: "Git", level: 90, color: "bg-red-700" },
            { name: "CI/CD", level: 70, color: "bg-green-600" },
        ],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Adobe XD",
    "Notion",
    "Slack",

];

// Projects Data 
export const PROJECTS = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
        image: PROJECT_IMG_1,
        technologies: ["React", "Tailwind", "Framer Motion"],
        liverUrl: "#",
        githubUrl: "#",
featured: false,
category: "Fullstack",

    },
    {
        id: 2,
          title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
        image: PROJECT_IMG_2,
        technologies: ["React", "Tailwind", "Framer Motion"],
        liverUrl: "#",
        githubUrl: "#",
featured: false,
category: "Fullstack",
    },
      {
        id: 3,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
        image: PROJECT_IMG_3,
        technologies: ["React", "Tailwind", "Framer Motion"],
        liverUrl: "#",
        githubUrl: "#",
featured: false,
category: "Fullstack",

    },
    {
        id: 4,
          title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
        image: PROJECT_IMG_4,
        technologies: ["React", "Tailwind", "Framer Motion"],
        liverUrl: "#",
        githubUrl: "#",
featured: false,
category: "Fullstack",
    },
      {
        id: 5,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
        image: PROJECT_IMG_5,
        technologies: ["React", "Tailwind", "Framer Motion"],
        liverUrl: "#",
        githubUrl: "#",
featured: false,
category: "Fullstack",

    },
    {
        id: 6,
          title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
        image: PROJECT_IMG_6,
        technologies: ["React", "Tailwind", "Framer Motion"],
        liverUrl: "#",
        githubUrl: "#",
featured: false,
category: "Fullstack",
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2024",
        title: "Full-Stack Developer",
        description: "Joined Tech Solutions as a Full-Stack Developer, working on cutting-edge web applications.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
          year: "2024",
        title: "Full-Stack Developer",
        description: "Joined Tech Solutions as a Full-Stack Developer, working on cutting-edge web applications.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
          year: "2024",
        title: "Full-Stack Developer",
        description: "Joined Tech Solutions as a Full-Stack Developer, working on cutting-edge web applications.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
          year: "2024",
        title: "Full-Stack Developer",
        description: "Joined Tech Solutions as a Full-Stack Developer, working on cutting-edge web applications.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
          year: "2024",
        title: "Full-Stack Developer",
        description: "Joined Tech Solutions as a Full-Stack Developer, working on cutting-edge web applications.",
        icon: Award,
        color: "bg-blue-500",
    },
    {
          year: "2024",
        title: "Full-Stack Developer",
        description: "Joined Tech Solutions as a Full-Stack Developer, working on cutting-edge web applications.",
        icon: Zap,
        color: "bg-blue-500",
    },
];

export const PASSIONS = [
    { 
        icon: Heart,
        title: "User Experience", 
        description: "Crafting intuitive and engaging user experiences."
    },
    { 
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions."
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and bets practices."         
    },
];
export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
       name: "Whatsapp",
        icon: Whatsapp,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    
    {    name: "Email",
        icon: Mail,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
];
export const CONTACT_INFO = [
    {
        icon: MapPin,
        method: "Location",
        value: "Durban, South Africa ",
    },
      {
        icon: Mail,
        method: "Email",
        value: "gomotsomohapi@gmail.com",
    },
      {
        icon: Phone,
        method: "Phone",
        value: "+27(0)82 385 7448",
    },
];