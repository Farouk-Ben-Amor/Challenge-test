/* @ts-ignore */
import hand from "./assets/img.png";
/* @ts-ignore */
import tube from "./assets/tube.png";
/* @ts-ignore */
import cloud from "./assets/cloud.png";
/* @ts-ignore */
import microscope from "./assets/microscope.jpg";
/* @ts-ignore */
import castle from "./assets/castle.png";

export interface Subject {
  id: number;
  name: string;
  image: string;
}

export const subjects: Subject[] = [
  { id: 1, name: "Chemie", image: tube },
  { id: 2, name: "Physik", image: hand },
  { id: 3, name: "Mathe", image: hand },
  { id: 4, name: "WAT", image: hand },
  { id: 5, name: "Deutsch", image: hand },
  { id: 6, name: "Geografie", image: hand },
  { id: 7, name: "Sowi", image: hand },
  { id: 8, name: "Psychologie", image: hand },
  { id: 9, name: "Ethik", image: cloud },
  { id: 10, name: "Politik", image: hand },
  { id: 11, name: "Informatik", image: hand },
  { id: 12, name: "Gewi", image: hand },
  { id: 13, name: "Sach", image: hand },
  { id: 14, name: "Geschichte", image: castle },
  { id: 15, name: "Tube", image: tube },
  { id: 16, name: "Biologie", image: microscope },
  { id: 17, name: "Ethik", image: cloud },
  { id: 18, name: "Geschichte", image: castle },
  { id: 19, name: "Physik", image: hand },
  { id: 20, name: "Mathe", image: hand },
  { id: 21, name: "WAT", image: hand },
  { id: 22, name: "Deutsch", image: hand },
  { id: 23, name: "Geografie", image: hand },
  { id: 24, name: "Sowi", image: hand },
  { id: 25, name: "Psychologie", image: hand },
  { id: 26, name: "Politik", image: hand },
  { id: 27, name: "Informatik", image: hand },
  { id: 28, name: "Gewi", image: hand },
  { id: 29, name: "Sach", image: hand },
  { id: 30, name: "Physik", image: hand },
];

export interface Schulart {
  id: number;
  name: string;
}

export const schulartData: Schulart[] = [
  { id: 1, name: "Schulart 1" },
  { id: 2, name: "Schulart 2" },
  { id: 3, name: "Schulart 3" },
  { id: 4, name: "Schulart 4" },
];

export interface Klassenstufe {
  id: number;
  name: string;
}

export const klassenstufeData: Klassenstufe[] = [
  { id: 1, name: "Klassenstufe 1" },
  { id: 2, name: "Klassenstufe 2" },
  { id: 3, name: "Klassenstufe 3" },
];
