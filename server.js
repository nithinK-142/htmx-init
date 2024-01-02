import express from "express";
import usersRouter from "./routes/users.js";
import testRouter from "./routes/test.js";

const app = express();

// Set static folder
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use("/", usersRouter);
app.use("/", testRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
