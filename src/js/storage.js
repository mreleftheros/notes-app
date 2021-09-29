const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || [];
};

const saveNote = text => {
  const notes = getNotes();

  notes.push(text);

  localStorage.setItem("notes", JSON.stringify(notes));
}

export { getNotes, saveNote };