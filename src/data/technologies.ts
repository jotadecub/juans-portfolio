import type { IconType } from "react-icons";

import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiPostgresql,
    SiTailwindcss,
    SiPrisma,
    SiFirebase,
    SiMysql,
    SiGit,
    SiDocker,
    SiHtml5,
    SiCss,
    SiJsonwebtokens,
    SiPostman,
    SiExpress,
    SiFigma,
    SiShadcnui,
    SiChartdotjs,
    SiGooglemaps,
} from "react-icons/si";

type TechnologyDefinition = {
    label: string;
    icon: IconType;
};

const technologies: Record<
    string,
    TechnologyDefinition | undefined
> = {
    react: {
        label: "React",
        icon: SiReact,
    },
    typescript: {
        label: "TypeScript",
        icon: SiTypescript,
    },
    javascript: {
        label: "JavaScript",
        icon: SiJavascript,
    },
    nodejs: {
        label: "Node.js",
        icon: SiNodedotjs,
    },
    postgresql: {
        label: "PostgreSQL",
        icon: SiPostgresql,
    },
    tailwindcss: {
        label: "Tailwind CSS",
        icon: SiTailwindcss,
    },
    prisma: {
        label: "Prisma",
        icon: SiPrisma,
    },
    firebase: {
        label: "Firebase",
        icon: SiFirebase,
    },
    mysql: {
        label: "MySQL",
        icon: SiMysql,
    },
    git: {
        label: "Git",
        icon: SiGit,
    },
    docker: {
        label: "Docker",
        icon: SiDocker,
    },
    html: {
        label: "HTML",
        icon: SiHtml5,
    },
    css: {
        label: "CSS",
        icon: SiCss,
    },
    jsonwebtoken: {
        label: "JWT",
        icon: SiJsonwebtokens,
    },
    postman: {
        label: "Postman",
        icon: SiPostman,
    },
    express: {
        label: "Express.js",
        icon: SiExpress,
    },
    figma: {
        label: "Figma",
        icon: SiFigma,
    },
    shadcnui: {
        label: "Shadcn UI",
        icon: SiShadcnui,
    },
    chartjs: {
        label: "Chart.js",
        icon: SiChartdotjs,
    },
    googlemaps: {
        label: "Google Maps API",
        icon: SiGooglemaps,
    },
};

const aliases: Record<string, string | undefined> = {
    node: "nodejs",
    postgres: "postgresql",
    tailwind: "tailwindcss",
    html5: "html",
    css3: "css",
    googlemapsapi: "googlemaps",
    jwt: "jsonwebtoken",
    chartjs: "chartjs",
    expressjs: "express",
};

function normalizeTechnology(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function getTechnology(
    name: string,
): TechnologyDefinition | undefined {
    const normalizedName = normalizeTechnology(name);
    const key = aliases[normalizedName] ?? normalizedName;

    return technologies[key];
}