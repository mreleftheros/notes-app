import note from "./note";

class Ui {
  constructor() {
    this.newBtn = document.getElementById("newBtn");
    this.viewBtn = document.getElementById("viewBtn");
    this.lightBtn = document.getElementById("lightBtn");
    this.notesContainer = document.getElementById("notesContainer");
    this.icons = {
      unlock: "&#x1F513;",
      lock: "&#x1F512;",
      edit: "&#x1F4DD;",
      save: ["&#x2714;", "&#x2705;"],
      delete: "&#x1F5D1;"
    }
  }
  init() {
    this.newBtn.addEventListener("click", () => this.createNote());
  }
  createNote() {
    const divElement = document.createElement("div");
    divElement.classList.add("main__notes-container__note");

    let html = `
      <div class="main__notes-container__note__header">
        <div class="main__notes-container__note__header__tools">
          <button type="button" class="main__notes-container__note__header__tools__btn" id="lockBtn">
            <span class="main__notes-container__note__header__tools__btn__icon">${this.icons.unlock}</span>
          </button>
          <button type="button" class="main__notes-container__note__header__tools__btn" id="editBtn">
            <span class="main__notes-container__note__header__tools__btn__icon">${this.icons.edit}</span>
          </button>
          <button type="button" class="main__notes-container__note__header__tools__btn" id="deleteBtn">
            <span class="main__notes-container__note__header__tools__btn__icon">${this.icons.delete}</span>
          </button>
        </div>
      </div>

      <div class="main__notes-container__note__body">
        <textarea class="main__notes-container__note__body__textarea" spellcheck="false"></textarea>
        <p class="main__notes-container__note__body__text"></p>
      </div>
    `;

    divElement.innerHTML = html;

    this.notesContainer.appendChild(divElement);
  }
}

export default new Ui();