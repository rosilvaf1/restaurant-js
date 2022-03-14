import peopleOpinion from "../data/peopleData.js";
//Class to template opinions
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
    const icon_delete = document.createElement("i");
    icon_delete.setAttribute("class", "fa fa-trash fa-2x");
    icon_delete.setAttribute("id", `trash_${this.id}`);
    const icon_copy = document.createElement("i");
    icon_copy.setAttribute("class", "fas fa-copy fa-2x");
    icon_copy.setAttribute("id", `copy_${this.id}`);
    const icon_update = document.createElement("i");
    icon_update.setAttribute("class", "fas fa-edit fa-2x");
    icon_update.setAttribute("id", `update_${this.id}`);
    const icon_paste = document.createElement("i");
    icon_paste.setAttribute("class", "fa fa-paste fa-2x");
    icon_paste.setAttribute("id", `paste_${this.id}`);
    div.appendChild(title);
    div.appendChild(text);
    div.appendChild(icon_copy);
    div.appendChild(icon_delete);
    div.appendChild(icon_update);
    div.appendChild(icon_paste);
    this.actionsButtons(this.id, this.opinion);
  }
//method with the actions of the action of buttons
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
      localStorage.setItem("opinionCopied", item.opinion);
    });
//method to paste the opinion copied
    paste.addEventListener("click", function () {
      const opinionCopied = localStorage.getItem("opinionCopied");
      const item = peopleOpinion.find((item) => item.id == id);
      Object.assign(item, { opinion: opinionCopied });
      document.getElementById(`p_${id}`).innerHTML = opinionCopied;
      localStorage.removeItem("opinionCopied");
    });
//method to create a textarea to edit the opinion and a button to accept the edition
    edit.addEventListener("click", function () {
      edit.style.display = "none";
      const div = document.getElementById(id);
      const input_edit = document.createElement("textarea");
      input_edit.setAttribute("id", `input_${this.id}`);
      div.appendChild(input_edit);
      input_edit.value = opinion;
      const button_accept = document.createElement("button");
      button_accept.setAttribute("class", `button_accept`);
      button_accept.setAttribute("id", `button_${this.id}`);
      button_accept.innerHTML = "Accept";
      div.appendChild(button_accept);
      //action to click in order to accept the edited opinion
      button_accept.addEventListener("click", function () {
        opinion = input_edit.value;
        input_edit.remove();
        button_accept.remove();
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
  const new_opinion = new Opinions(opinion.id, opinion.name, opinion.opinion);
  new_opinion.createCards();
}

const form = document.forms[0];
//get  the data of the form after submited this and create the cards of opinion 
form.addEventListener("submit", submit);
function submit(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries(); // array of entries
  const data = Object.fromEntries(entries);
  const id = Math.trunc(Math.random() * 1000000);
  data.id = id;
  peopleOpinion.push({ ...data });
  const new_opinion = new Opinions(data.id, data.name, data.opinion);
  new_opinion.createCards();
}
