const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || [];
};