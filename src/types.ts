export interface ProjectFeature {
  t: string;
  d: string;
}

export interface ProjectShots {
  thumb: string;
  main: string;
  gallery: string[];
  mobile: string;
}

export interface Project {
  id: string;
  no: string;
  title: string;
  alias?: string;
  category: string;
  group: 'commerce' | 'interactive' | 'creative';
  year: string;
  role: string;
  status: string;
  stack: string[];
  live: string;
  sfx: string;
  sfxEn: string;
  tagline: string;
  summary: string;
  challenge: string;
  approach: string;
  features: ProjectFeature[];
  shots: ProjectShots;
}

export interface SkillItem {
  n: string;
  jp: string;
  d: string;
  i: 'react' | 'next' | 'three' | 'ts' | 'js' | 'node' | 'python' | 'motion' | 'css';
  used: string[];
}

export interface SiteConfig {
  name: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  mailSubject: string;
  mailBody: string;
  waText: string;
}
