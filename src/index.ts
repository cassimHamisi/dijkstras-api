import bodyParser from "body-parser";
import express from "express";
import { db } from "./model";
import { router } from "./routes";
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

//*ROUTES
app.use(router);

// //*live server
db.once("open", () => {
  //Listen to the server running
  app.listen(PORT, () => {
    console.log(`Server is running at address : http://192.168.81.189:${PORT}`);
  });
});
