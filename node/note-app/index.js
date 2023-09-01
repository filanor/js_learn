const yargs = require("yargs");
const pkg = require("./package.json");
const chalk = require("chalk");
const { addNote, printNotes, removeNote } = require("./notes.controller");

yargs.version(pkg.version);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      discribe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
    // console.log("add note: ", title);
  },
});

yargs.command({
  command: "list",
  discribe: "List all notes",
  async handler() {
    printNotes();
  },
});

yargs.command({
  command: "remove",
  discribe: "remove notes",
  builder: {
    id: {
      type: "string",
      disсribe: "remove's note id",
      demandOption: true,
    },
  },
  handler({ id }) {
    removeNote(id);
  },
});

yargs.parse();
