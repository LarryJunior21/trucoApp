import { Router } from "express";
import Actions from "./app/controller/Actions";
var json = require("./app/assets/rules.json");
const routes = Router();

// Middleware
routes.use((req, res, next) => {
  const date = new Date();
  console.log(
    "Path:",
    req.url,
    "at",
    date.toLocaleDateString(),
    date.toLocaleTimeString()
  );
  next();
});

routes.get("/rules", (request, response) => {
  response.status(200).send(json);
});

routes.post("/draw", (request, response) => {
  const number: Number = request.body?.quantity;
  if (number && typeof number === "number") {
    if (number < 41) {
      const card = Actions.drawCard(number);
      response.status(200).send(card);
    } else {
      response.status(400).send("The quantity must be less than 40");
    }
  } else {
    response
      .status(400)
      .send(
        "A number type bigger than 0 must be provided as the quantity parameter."
      );
  }
});

export default routes;
