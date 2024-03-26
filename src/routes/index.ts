import { Router } from "express";
import * as Controllers from "../controllers";

const router = Router();

// Route to add data to database
router.get("/add-data", Controllers.addData);

//get all the cities
router.get("/cities", Controllers.getCities);

//a post to calculate path
router.post("/calc-path", Controllers.calcShortestPath);

export { router };
