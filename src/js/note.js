import ui from "./ui";
import { getNotes } from "./storage";

class Note {
  constructor() {
    this.notes;
    this.notesIndex = 0;
  }
  init() {
    this.setNotes();

    this.notes.forEach(note => ui.createNote(undefined, note));
  }
  setNotes() {
    // get notes or empty array from localStorage
    const notes = getNotes();

    this.notes = [...notes];
  }
}

export default new Note();