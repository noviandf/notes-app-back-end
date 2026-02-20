//frontend use this command docker run --rm -p 8080:8080 dicodingacademy/notes-app-frontend:v1

import express from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0";

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
