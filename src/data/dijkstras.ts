import { Graph, neighbor } from "../types";

//TODO: Error Handling to be included

export function dijkstra(graph: Graph, start: string, end: string): string[] {
  //1. INITIALIZATION
  //Record keeping track of each of the distance
  //from the start node to each node
  const distances: Record<string, number> = {};

  //Keeps track of the previous node on the node to the shortest path
  const previous: Record<string, string | null> = {};

  //Array containing nodes to be processed (not yet processed)
  const queue: string[] = [];

  //2. INITIALIZATION OF THE DISTANCES AND THE PREVIOUS DISTANCES
  //Loop through all the nodes
  for (const vertex in graph) {
    //Check if the node is in the start node

    if (vertex === start) {
      //initialize the distance to 0 and add the vertex at the beginning of the queue
      distances[vertex] = 0;

      queue.unshift(vertex);
    } else {
      //initialize the distance to infinity and add the vertex at the end of the queue
      distances[vertex] = Infinity;

      queue.push(vertex);
    }

    //set each node as node for each node
    previous[vertex] = null;
  }

  //3. PROCESS EACH NODE
  //Check if we have node to process
  while (queue.length > 0) {
    //Sort everything according to the shortest distance
    //TODO: Improvement: Use a priority queue
    const shortestVertex = queue
      .sort((a, b) => distances[a] - distances[b])
      .shift()!;

    //lets loop in our graph to inject the shortest vertex that we sorted
    for (const neighbor in graph[shortestVertex]) {
      const distance = graph[shortestVertex][neighbor];
      const alt = distances[shortestVertex] + distance;

      //For each neighbor to the shortest vertex to
      //calculate the potential the  new distance through the shortest vertex

      if (alt < distances[neighbor]) {
        //update the distance of the previous node
        distances[neighbor] = alt;
        previous[neighbor] = shortestVertex;
      }
    }
  }
  //4. BACK TRACK TO THE PREVIOUS: TO FIND THE SHORTEST PATH
  const path: string[] = [];

  //Start from the end keep following to the previous until the start node
  let current: string | null = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }
  return path;
}
