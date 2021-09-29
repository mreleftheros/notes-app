import note from "./note";

class Ui {
  constructor() {
    this.main = document.getElementById("main");
    this.newBtn = document.getElementById("newBtn");
    this.lightBtn = document.getElementById("lightBtn");
    this.notesContainer = document.getElementById("notesContainer");
    this.icons = {
      edit: "&#x1F4DD;",
      save: "&#x2714;",
      delete: "&#x1F5D1;"
    }
  }
  init() {
    this.newBtn.addEventListener("click", e => this.createNote(e, undefined));
    this.notesContainer.addEventListener("click", e => this.handleNotesContainerClick(e));
    this.lightBtn.addEventListener("click", () => this.toggleLight());
  }
  createNote(e, text) {
    const divElement = document.createElement("div");
    divElement.classList.add("main__notes-container__note");
    divElement.setAttribute("data-note", note.notesIndex);
    let index = note.notesIndex + 1;
    note.notesIndex++;
    let icon;
    let randomDeg = Math.floor((Math.random() - .5) * 10);
    divElement.style.transform = `rotate(${randomDeg}deg`;

    if (e === undefined) {
      divElement.classList.add("locked");
      icon = this.icons.edit;
    }
    else {
      icon = this.icons.save;
    }

    text = text || "";

    let html = `
      <div class="main__notes-container__note__header">
        <h2 class="main__notes-container__note__header__title">Note ${index}</h2>
        <div class="main__notes-container__note__header__tools">
          <button type="button" class="main__notes-container__note__header__tools__btn" id="editBtn">
            <span class="main__notes-container__note__header__tools__btn__icon edit">${icon}</span>
          </button>
          <button type="button" class="main__notes-container__note__header__tools__btn" id="deleteBtn">
            <span class="main__notes-container__note__header__tools__btn__icon delete">${this.icons.delete}</span>
          </button>
        </div>
      </div>

      <div class="main__notes-container__note__body">
        <textarea class="main__notes-container__note__body__textarea" spellcheck="false">${text}</textarea>
        <p class="main__notes-container__note__body__text">${text}</p>
      </div>
    `;

    divElement.innerHTML = html;

    this.notesContainer.appendChild(divElement);
  }
  handleNotesContainerClick(e) {
    let noteElement = e.target.parentElement.parentElement.parentElement.parentElement;
    let index = noteElement.getAttribute("data-note");

    // click edit
    if (e.target.tagName === "SPAN" && e.target.classList.contains("edit")) {
      if (noteElement.classList.contains("locked")) { // edit
        noteElement.classList.remove("locked");
        e.target.innerHTML = this.icons.save;
      }
      else { // save
        let text = noteElement.lastElementChild.firstElementChild.value;
        let paragraph = noteElement.lastElementChild.lastElementChild;
        paragraph.innerText = text;
        noteElement.classList.add("locked");
        e.target.innerHTML = this.icons.edit;
        return note.saveNote(text, index);
      }
    }

    // click delete
    if (e.target.tagName === "SPAN" && e.target.classList.contains("delete")) {
      note.deleteNote(index);
      noteElement.remove();
    }
  }
  toggleLight() {
    this.main.classList.toggle("dark");
  }
}

export default new Ui();