import note from "./note";
import { saveNote } from "./storage";

class Ui {
  constructor() {
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
  }
  createNote(e, text) {
    const divElement = document.createElement("div");
    divElement.classList.add("main__notes-container__note");
    divElement.setAttribute("data-note", note.notesIndex);
    let index = note.notesIndex + 1;
    note.notesIndex++;
    let icon;

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
    // click edit
    if (e.target.tagName === "SPAN" && e.target.classList.contains("edit")) {
      let note = e.target.parentElement.parentElement.parentElement.parentElement;

      if (note.classList.contains("locked")) {
        note.classList.remove("locked");
        e.target.innerHTML = this.icons.save;
      }
      else {
        let text = note.lastElementChild.firstElementChild.value;
        note.classList.add("locked");
        e.target.innerHTML = this.icons.edit;
        return saveNote(text);
      }
    }
  }
}

export default new Ui();