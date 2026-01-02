const express = require("express");
const app = express();

app.use(express.json());

let library = [];

// Add Book
app.post("/books", (req, res) => {
  const { id, name, author } = req.body;

  library.push({ id, name, author });
  res.send("Book Added");
});

// View Books
app.get("/books", (req, res) => {
  res.json(library);
});

// Delete Book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  library = library.filter(book => book.id !== id);
  res.send("Book Deleted");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
