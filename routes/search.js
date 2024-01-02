import express from "express";

const router = express.Router();

// search
const contacts = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Doe", email: "jane@example.com" },
  { name: "Alice Smith", email: "alice@example.com" },
  { name: "Bob Williams", email: "bob@example.com" },
  { name: "Mary Harris", email: "mary@example.com" },
  { name: "David Mitchell", email: "david@example.com" },
];

router.post("/", (req, res) => {
  const searchTerm = req.body.search.toLowerCase();

  if (!searchTerm) return res.send("<tr></tr>");

  const searchResults = contacts.filter((contact) => {
    const name = contact.name.toLowerCase();
    const email = contact.email.toLowerCase();

    return name.includes(searchTerm) || email.includes(searchTerm);
  });

  setTimeout(() => {
    const searchResultHtml = searchResults
      .map(
        (contact) => `
      <tr>
        <td><div class="my-4 p-2">${contact.name}</div></td>
        <td><div class="my-4 p-2">${contact.email}</div></td>
      </tr>
    `
      )
      .join("");

    res.send(searchResultHtml);
  }, 1000);
});

// api
router.post("/api", async (req, res) => {
  const searchTerm = req.body.search.toLowerCase();

  if (!searchTerm) return res.send("<tr></tr>");

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const contacts = await response.json();

  const searchResults = contacts.filter((contact) => {
    const name = contact.name.toLowerCase();
    const email = contact.email.toLowerCase();

    return name.includes(searchTerm) || email.includes(searchTerm);
  });

  setTimeout(() => {
    const searchResultHtml = searchResults
      .map(
        (contact) => `
      <tr>
        <td><div class="my-4 p-2">${contact.name}</div></td>
        <td><div class="my-4 p-2">${contact.email}</div></td>
      </tr>
    `
      )
      .join("");

    res.send(searchResultHtml);
  }, 1000);
});

export default router;
