import note from "./note";

const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || [];
};

const updateNotes = () => {
  return localStorage.setItem("notes", JSON.stringify(note.notes));
}

export { getNotes, updateNotes };