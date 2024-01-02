import express from "express";

//users
const router = express.Router();

router.get("/", async (req, res) => {
  // const users = [
  //   { id: 1, name: 'John Doe' },
  //   { id: 2, name: 'Bob Williams' },
  //   { id: 3, name: 'Shannon Jackson' },
  // ];

  setTimeout(async () => {
    const limit = +req.query.limit || 10;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
    );
    const users = await response.json();

    res.send(`
      <h1 class="text-2xl font-bold my-4">Users</h1>
      <ul>
        ${users.map((user) => `<li>${user.name}</li>`).join("")}
      </ul>
    `);
  }, 1000);
});

export default router;
