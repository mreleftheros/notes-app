import note from "./note";
import ui from "./ui";

// initializes app
const init = () => {
  ui.init();
  note.init();
};

document.addEventListener("DOMContentLoaded", init);