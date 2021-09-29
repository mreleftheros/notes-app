import ui from "./ui";
import { getNotes } from "./storage";

class Note {
  constructor() {
    this.notes;
    this.notesIndex = 0;
  }
  init() {
    this.setNotes();
  }
  setNotes() {
    // get notes or empty array from localStorage
    const notes = getNotes();

    this.notes = [...notes];
    this.notesIndex = notes.length;
  }
}

export default new Note();