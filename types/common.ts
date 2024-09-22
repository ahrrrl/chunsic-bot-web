export interface TocItem {
  url: string;
  text: string;
  description: string;
  level: number;
  children?: TocItem[];
}

export interface Heading {
  id: string;
  text: string;
  level: number;
  children?: Heading[];
}
