// src/types/resume.ts

export interface Profile {
  name: string;
  title: string;
  avatar: string | null;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  website?: string;
  location: string;
}

export type SkillGroup = string[];

export interface Skills {
  backend: SkillGroup;
  frontend: SkillGroup;
  database: SkillGroup;
  cloud: SkillGroup;
  agile: SkillGroup;
  tools: SkillGroup;
  softSkills: SkillGroup;
}

export interface Education {
  school: string;
  major: string;
  gpa: string;
}

export interface Project {
  name: string;
  teamSize: string;
  techStack: string;
  responsibilities: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  projects: Project[];
}

export interface Resume {
  profile: Profile;
  careerObjective: string;
  education: Education[];
  skills: Skills;
  experiences: Experience[];
  hobbies: string[];
}
