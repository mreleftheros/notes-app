import ui from "./ui";
import { getNotes, updateNotes } from "./storage";

class Note {
  constructor() {
    this.notes = [];
    this.notesIndex = 0;
  }
  init() {
    this.setNotes();

    this.notes.forEach(note => ui.createNote(undefined, note));
  }
  setNotes() {
    // get notes from localStorage
    const notes = getNotes();

    this.notes = [...notes];
  }
  saveNote(text, index) {
    if (index < this.notes.length) {
      this.notes.splice(index, 1, text);
    }
    else {
      this.notes.push(text);
    }

    return updateNotes();
  }
  deleteNote(index) {
    if (index < this.notes.length) {
      this.notes.splice(index, 1);
    }

    return updateNotes();
  }
}

export default new Note();