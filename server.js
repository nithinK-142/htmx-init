import express from "express";
import usersRouter from "./routes/users.js";
import temperatureRouter from "./routes/temperature.js";
import pollRouter from "./routes/polling.js";
import searchRouter from "./routes/search.js";
import validationRouter from "./routes/validation.js";

const app = express();

// Set static folder
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// routes
app.use("/users", usersRouter);
app.use("/temperature", temperatureRouter);
app.use("/get-weather", pollRouter);
app.use("/search", searchRouter);
app.use("/validate", validationRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
