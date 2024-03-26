import { Document } from "mongoose";

export interface neighbor {
  name: string;
  distance: number;
}

export interface ICity extends Document {
  name: string;
  neighbors: neighbor[];
}

export interface City {
  name: string;
  neighbors: neighbor[];
}

export type Graph = Record<string, Neighbors>;

//Interface for the dijkstra algorithm
export interface Neighbors {
  [name: string]: number;
}
