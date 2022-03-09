class Opinions {
  constructor(id, name, opinion) {
    this.name = name;
    this.opinion = opinion;
    this.id = id;
  }

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
    div.appendChild(title);
    div.appendChild(text);
    div.appendChild(icon_copy);
    div.appendChild(icon_delete);
    div.appendChild(icon_update);
    this.actionsButtons(this.id, this.opinion);
  }

  actionsButtons(id, opinion) {
    const trash = document.getElementById(`trash_${this.id}`);
    const edit = document.getElementById(`update_${this.id}`);
    const copy = document.getElementById(`copy_${this.id}`);
    trash.addEventListener("click", function () {
      console.log(id);
      const speech = document.getElementById(id);
      const opinionDeleted = peopleOpinion.findIndex((item) => item.id == id);
      speech.remove();
      peopleOpinion.splice(opinionDeleted, 1);
    });
    copy.addEventListener("click", function () {
      console.log(opinion);
      console.log(id)
      debugger
      const copyText = opinion;
      navigator.clipboard.writeText(copyText)
    });
    edit.addEventListener("click", function (e) {
      console.log(opinion);
      e.preventDefault();
      const input_edit = document.createElement("textarea");
      input_edit.setAttribute("id", `input_${this.id}`);
      document.getElementById(id).appendChild(input_edit);
      input_edit.value = opinion;
      const button_accept = document.createElement("button");
      button_accept.setAttribute("class", `button_accept`);
      button_accept.setAttribute("id", `button_${this.id}`);
      button_accept.innerHTML = "Accept";
      document.getElementById(id).appendChild(button_accept);
      button_accept.addEventListener("click", function () {
        opinion = input_edit.value;
        input_edit.remove()
        button_accept.remove()
        const opinionDeleted = peopleOpinion.findIndex((item) => item.id == id);
        console.log(opinionDeleted)
        peopleOpinion[opinionDeleted].opinion = opinion;
        console.log(peopleOpinion)
        document.getElementById(`p_${id}`).innerHTML = opinion;
      });
    });
  }
}

const peopleOpinion = [
  {
    id: "1",
    name: "Susan",
    opinion: `A service that seems every day more like a winery, shouting at each other among the waiters, reproaching each other that they have not warned that the coffees were already ready to go to serve, The meter that is tall and shaved, does not pay attention when you ask for more wine or the bill, it gets lost with the tourists and you waiting 20min. It's a shame because I've been going for a long time and the service gets worse every day.`,
  },
  {
    id: "2",
    name: "John",
    opinion:
      "Please improve your attention! Last night we went to dinner and still with food on the plate, an German girl who served us, desperately wanted to take the dishes from the table, even without glasses she left us and did not offer to fill them, when we told her not to take the plates without asking us She responded haughtily and ironic that this was the way of working in the restaurant, she did not apologize, she turned and left",
  },
  {
    id: "3",
    name: "Emily",
    opinion: `The attention more or less, the waitress very friendly but the owner, should listen better to the customer. The tasting menu leaves a lot to be desired for the price. The menu is chosen by the chef and if you don't like any ingredient, no problem !!!.`,
  },
];

function getPeopleOpinion() {
  for (i = 0; i < peopleOpinion.length; i++) {
    let opinion = peopleOpinion[i];
    const new_opinion = new Opinions(opinion.id, opinion.name, opinion.opinion);
    new_opinion.createCards();
  }
}

getPeopleOpinion();
const form = document.forms[0];

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
