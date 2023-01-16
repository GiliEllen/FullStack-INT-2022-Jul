import { users } from "./userDB";

const books = [
  { id: 1, bookName: "harry potter" },
  { id: 2, bookName: "percy jackson" },
  { id: 3, bookName: "matilda" },
];

export function getAllUsers(req, res) {
  try {
    res.send({ success: true, users });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = users.find((element) => element.id == id);
    console.log(user);
    res.send({ success: true, user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export function addUser(req, res) {
  try {
    const id = 88;
    const { userName } = req.body;
    users.push({ id, firstName: userName });
    res.send({ success: true, users });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export function getUserBook(req, res) {
  try {
    console.log(req.params)
    const { userId, bookId } = req.params;
    const user = users.find((element) => element.id == userId);
    const book = books.find((element) => element.id == bookId);

    res.send({ user, book, success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export function deleteUser(req, res) {}
