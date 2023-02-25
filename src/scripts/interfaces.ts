export interface PostInterface {
  id: number;
  title: string;
  content: string;
  author: string;
  publishTime: number;
}

export enum Languages {
  eng,
  rus,
  jap,
}

export enum Themes {
  dark,
  light,
}

export interface SettingsInterface {
  language: Languages;
  theme: Themes;
}
