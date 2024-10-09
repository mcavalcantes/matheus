export interface Icon {
  BLACK: string;
  WHITE: string, 
}

export interface Skill {
  GROUP: string;
  LIST: string[];
}

export interface Experience {
  TITLE: string;
  SUBTITLE: string;
  START_DATE: string;
  END_DATE: string;
  BULLETS: [string, string, string];
}

export interface Project {
  TITLE: string;
  HREF: string;
  DESCRIPTION: string;
  BULLETS: [string, string, string];
}

export interface Achievement {
  TITLE: string;
  SUBTITLE: string;
  DATE: string;
  DESCRIPTION: string;
}

export interface Social {
  NAME: string;
  HREF: string;
  ICON: Icon;
}
