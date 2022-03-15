import peopleOpinion from "../data/peopleData.js";
//Class opinions
class Opinions {
  constructor(id, name, opinion) {
    this.name = name;
    this.opinion = opinion;
    this.id = id;
  }
//method to create cards
  createCards() {
    const div = document.createElement("div");
    div.setAttribute("class", "speech");
    div.setAttribute("id", `${this.id}`);
    document.getElementById("opinions").appendChild(div);
    const title = document.createElement("h1");
    title.innerHTML = `${this.name}`;
    const text = document.createElement("p");
    text.setAttribute("id", `p_${this.id}`);
    text.innerHTML = `${this.opinion}`;
    const iconDelete = document.createElement("i");
    iconDelete.setAttribute("class", "fa fa-trash fa-2x");
    iconDelete.setAttribute("id", `trash_${this.id}`);
    const iconCopy = document.createElement("i");
    iconCopy.setAttribute("class", "fas fa-copy fa-2x");
    iconCopy.setAttribute("id", `copy_${this.id}`);
    const iconUpdate = document.createElement("i");
    iconUpdate.setAttribute("class", "fas fa-edit fa-2x");
    iconUpdate.setAttribute("id", `update_${this.id}`);
    const iconPaste = document.createElement("i");
    iconPaste.setAttribute("class", "fa fa-paste fa-2x");
    iconPaste.setAttribute("id", `paste_${this.id}`);
    div.appendChild(title);
    div.appendChild(text);
    div.appendChild(iconCopy);
    div.appendChild(iconDelete);
    div.appendChild(iconUpdate);
    div.appendChild(iconPaste);
    this.actionsButtons(this.id, this.opinion);
  }
//method with the actions of the buttons
  actionsButtons(id, opinion) {
    const trash = document.getElementById(`trash_${this.id}`);
    const edit = document.getElementById(`update_${this.id}`);
    const copy = document.getElementById(`copy_${this.id}`);
    const paste = document.getElementById(`paste_${this.id}`);
//method to delete opinion
    trash.addEventListener("click", function () {
      const speech = document.getElementById(id);
      const opinionDeleted = peopleOpinion.findIndex((item) => item.id == id);
      speech.remove();
      peopleOpinion.splice(opinionDeleted, 1);
    });
//method to copy opinion selected
    copy.addEventListener("click",  function textCopy() {
      const item = peopleOpinion.find((item) => item.id == id);
      sessionStorage.setItem("opinionCopied", item.opinion);
    });
//method to paste the opinion copied
    paste.addEventListener("click", function () {
      const opinionCopied = sessionStorage.getItem("opinionCopied");
      const item = peopleOpinion.find((item) => item.id == id);
      Object.assign(item, { opinion: opinionCopied });
      document.getElementById(`p_${id}`).innerHTML = opinionCopied;
      sessionStorage.removeItem("opinionCopied");
    });
//method to create a textarea to edit the opinion and a button to accept the edition
    edit.addEventListener("click", function () {
      edit.style.display = "none";
      const div = document.getElementById(id);
      const inputEdit = document.createElement("textarea");
      inputEdit.setAttribute("id", `input_${this.id}`);
      div.appendChild(inputEdit);
      inputEdit.value = opinion;
      const buttonAccept = document.createElement("button");
      buttonAccept.setAttribute("class", `buttonAccept`);
      buttonAccept.setAttribute("id", `button_${this.id}`);
      buttonAccept.innerHTML = "Accept";
      div.appendChild(buttonAccept);
      //action to click in order to accept the edited opinion
      buttonAccept.addEventListener("click", function () {
        opinion = inputEdit.value;
        inputEdit.remove();
        buttonAccept.remove();
        const opinionDeleted = peopleOpinion.findIndex((item) => item.id == id);
        peopleOpinion[opinionDeleted].opinion = opinion;
        document.getElementById(`p_${id}`).innerHTML = opinion;
        edit.style.display = "inline";
      });
    });
  }
}
//loop a array to create the cards of opinions using the method of the class Opinion
for (let i = 0; i < peopleOpinion.length; i++) {
  let opinion = peopleOpinion[i];
  const newOpinion = new Opinions(opinion.id, opinion.name, opinion.opinion);
  newOpinion.createCards();
}

const form = document.forms[0];
//get  the data of the form after submited this and create the cards of opinion 
form.addEventListener("submit", submit);
function submit(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries(); // array of entries
  const data = Object.fromEntries(entries);
 //create a random number for the id
  const id = Math.trunc(Math.random() * 1000000);
  data.id = id;
  peopleOpinion.push({ ...data });
  const newOpinion = new Opinions(data.id, data.name, data.opinion);
  newOpinion.createCards();
}
