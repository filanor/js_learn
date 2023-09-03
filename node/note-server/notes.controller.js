const chalk = require("chalk");
const fs = require("fs/promises");
const path = require("path");

const notesPath = path.join(__dirname, "db.json");

async function addNote(data) {
  const notes = await getNotes(data);
  const note = {
    title: data,
    id: Date.now().toString(),
  };

  notes.push(note);

  await fs.writeFile(notesPath, JSON.stringify(notes));
  console.log(chalk.bgGreen("Note was added!"));
}

async function getNotes() {
  // fs.readFile возвращает строку, поэтому для дальнейшей работы с данными парсим строку используя JSON.parse()
  const notes = await fs.readFile(notesPath, { encoding: "utf8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
  const notes = await getNotes();

  console.log(chalk.bgBlue("Here is the list of notes"));
  notes.forEach((n) => {
    console.log(`${chalk.white(n.id)} - ${chalk.blue(n.title)}`);
  });
}

async function removeNote(id) {
  const notes = await getNotes();
  const newNotes = notes.filter((n) => n.id !== id);
  await fs.writeFile(notesPath, JSON.stringify(newNotes));
  console.log(chalk.green(`Note with id: ${id} was removed!`));
}

async function editNote(id, task) {
  const notes = await getNotes();
  const newNotes = notes.map((n) => (n.id === id ? { ...n, title: task } : n));
  await fs.writeFile(notesPath, JSON.stringify(newNotes));
}

module.exports = { addNote, getNotes, printNotes, removeNote, editNote };
