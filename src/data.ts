/* @ts-ignore */
//import hand from "./assets/img.png";
/* @ts-ignore */
//import tube from "./assets/tube.png";
/* @ts-ignore */
//import cloud from "./assets/cloud.png";
/* @ts-ignore */
//import microscope from "./assets/microscope.jpg";
/* @ts-ignore */
//import castle from "./assets/castle.png";

const cloudUrl = "https://res.cloudinary.com/ds0lmlupd/image/upload/f_auto,q_auto/Cloud";
const castleUrl = "https://res.cloudinary.com/ds0lmlupd/image/upload/f_auto,q_auto/Castle";
const microscopeUrl = "https://res.cloudinary.com/ds0lmlupd/image/upload/f_auto,q_auto/Microscope";
const tubeUrl = "https://res.cloudinary.com/ds0lmlupd/image/upload/f_auto,q_auto/Tube";
const handUrl = "https://res.cloudinary.com/ds0lmlupd/image/upload/f_auto,q_auto/Hand";


export interface Subject {
  id: number;
  name: string;
  image: string;
}

export const subjects: Subject[] = [
  { id: 1, name: "Ethik", image: cloudUrl },
  { id: 2, name: "Geschichte", image: castleUrl },
  { id: 3, name: "Biologie", image: microscopeUrl },
  { id: 4, name: "Chemie", image: tubeUrl }, 
  { id: 5, name: "Physik", image: handUrl },
  { id: 6, name: "Politik", image: handUrl },
  { id: 7, name: "Gewi", image: handUrl },
  { id: 8, name: "Mathe", image: handUrl },
  { id: 9, name: "Psychologie", image: handUrl },
  { id: 10, name: "Philosophie", image: handUrl },
  { id: 11, name: "Informatik", image: handUrl },
  { id: 12, name: "Nawi", image: handUrl },
  { id: 13, name: "WAT", image: handUrl },
  { id: 14, name: "Deutsch", image: handUrl },
  { id: 15, name: "Geografie", image: handUrl },
  { id: 16, name: "Recht", image: handUrl },
  { id: 17, name: "Sach", image: handUrl },
  { id: 18, name: "Sowi", image: handUrl },
  
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
