const books = [
  { id: 1, bookName: "harry potter" },
  { id: 2, bookName: "percy jackson" },
  { id: 3, bookName: "matilda" },
];

export function getAllBooks(req, res) {
  try {
    if (!books) throw new Error("no books from server");
    res.send({books, success: true})
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
