import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Liam Tabibzadeh",
  EMAIL: "liam@liamtab.dev",
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Fullstack Data Engineer passionate about building robust, end-to-end systems that transform raw data into meaningful insights.",
};


export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/liamtabibzadeh"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/liamtabibzadeh",
  }
];
