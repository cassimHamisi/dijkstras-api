import { cities, dijkstra } from "../data";
import { City } from "../schema";
import { ICity, Neighbors } from "../types";
import { Request, Response } from "express";

export async function addData(req: Request, res: Response) {
  try {
    // Insert data into database
    await Promise.all(
      cities.map(async (city) => {
        const data = new City({
          name: city.name,
          neighbors: city.neighbors,
        });
        await data.save();
        console.log("Data created successfully:", city.name);
      })
    );

    // Send response after all data is inserted
    res.json("Data added successfully");
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json("Could not insert the data");
  }
}

export async function getCities(req: Request, res: Response) {
  try {
    //get cities from the database
    const cities = await City.find();

    res.json(cities);
  } catch (error) {
    console.error("Error fetching cities", error);
    res.status(500).json("Failed to fetch the cities.");
  }
}

export async function calcShortestPath(req: Request, res: Response) {
  const { startCity, endCity } = req.body;

  //Fetch the cities and draw the graph
  const cities: ICity[] = await City.find();
  const graph: Record<string, Neighbors> = {};

  cities.forEach((city) => {
    graph[city.name] = {};
    city.neighbors.forEach((neighbor) => {
      graph[city.name][neighbor.name] = neighbor.distance;
    });
  });

  //Calculate the shortest path using dijkstra algorithm
  const shortestPath = dijkstra(graph, startCity, endCity);
  res.json({ shortestPath });
}
