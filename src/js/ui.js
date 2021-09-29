import note from "./note";

class Ui {
  constructor() {
    this.newBtn = document.getElementById("newBtn");
    this.viewBtn = document.getElementById("viewBtn");
    this.lightBtn = document.getElementById("lightBtn");
    this.notesContainer = document.getElementById("notesContainer");
    this.icons = {
      edit: "&#x1F4DD;",
      save: ["&#x2714;", "&#x2705;"],
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

    if (e === undefined) {
      divElement.classList.add("locked");
    }

    text = text || "";

    let html = `
      <div class="main__notes-container__note__header">
        <div class="main__notes-container__note__header__tools">
          <button type="button" class="main__notes-container__note__header__tools__btn" id="editBtn">
            <span class="main__notes-container__note__header__tools__btn__icon">${this.icons.edit}</span>
          </button>
          <button type="button" class="main__notes-container__note__header__tools__btn" id="deleteBtn">
            <span class="main__notes-container__note__header__tools__btn__icon">${this.icons.delete}</span>
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
}

export default new Ui();