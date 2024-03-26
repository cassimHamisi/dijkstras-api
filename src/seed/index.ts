import { cities } from "../data";
import { db } from "../model";
import { City } from "../schema";

db.once("open", async () => {
  await City.deleteMany();

  await City.insertMany(cities);

  console.log("Data inserted");
});

process.exit();
