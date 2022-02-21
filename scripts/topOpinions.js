class Opinions {
  constructor(name, opinion) {
    this.name = name;
    this.opinion = opinion;
  }

  createCards() {
    const div = document.createElement("div");
    div.setAttribute("class", "speech");
    document.getElementById("opinions").appendChild(div);
    const title = document.createElement("h1");
    title.innerHTML = `${this.name}`;
    const text = document.createElement("p");
    text.innerHTML = `${this.opinion}`;
    const buttons = document.createElement("div");
    buttons.setAttribute("class", "group_buttons");
    div.appendChild(title);
    div.appendChild(text);
    div.appendChild(buttons);
  }
  creteCardsEditables() {
    const div = document.createElement("div");
    div.setAttribute("class", "speech");
    div.setAttribute("id", `${this.opinion}_${this.name}`);
    document.getElementById("opinions").appendChild(div);
    const title = document.createElement("h1");
    title.innerHTML = `${this.name}`;
    const text = document.createElement("p");
    text.setAttribute("id", "opinion");
    text.innerHTML = `${this.opinion}`;
    const buttons = document.createElement("div");
    buttons.setAttribute("id", "group_buttons");
    const trash_bin = document.createElement("button");
    trash_bin.setAttribute("id", "trash_bin");
    trash_bin.innerHTML = "Delete";
    const button_edit = document.createElement("button");
    button_edit.setAttribute("id", "button_edit");
    button_edit.innerHTML = "Edit";
    const button_accept = document.createElement("button");
    button_accept.setAttribute("id", "button_accept");
    button_accept.innerHTML = "Accept";
    div.appendChild(title);
    div.appendChild(text);
    div.appendChild(buttons);
    buttons.appendChild(trash_bin);
    buttons.appendChild(button_edit);
    buttons.appendChild(button_accept);
  }
}

const peopleOpinion = [
  {
    name: "Susan",
    opinion: `A service that seems every day more like a winery, shouting at each other among the waiters, reproaching each other that they have not warned that the coffees were already ready to go to serve, The meter that is tall and shaved, does not pay attention when you ask for more wine or the bill, it gets lost with the tourists and you waiting 20min. It's a shame because I've been going for a long time and the service gets worse every day.`,
  },
  {
    name: "John",
    opinion:
      "Please improve your attention! Last night we went to dinner and still with food on the plate, an German girl who served us, desperately wanted to take the dishes from the table, even without glasses she left us and did not offer to fill them, when we told her not to take the plates without asking us She responded haughtily and ironic that this was the way of working in the restaurant, she did not apologize, she turned and left",
  },
  {
    name: "Emily",
    opinion: `The attention more or less, the waitress very friendly but the owner, should listen better to the customer. The tasting menu leaves a lot to be desired for the price. The menu is chosen by the chef and if you don't like any ingredient, no problem !!!.`,
  },
];

for (i = 0; i < peopleOpinion.length; i++) {
  let opinion = peopleOpinion[i];
  const values = Object.values(opinion);
  const new_opinion = new Opinions(values[0], values[1]);
  new_opinion.createCards();
}

const form = document.forms[0];

form.addEventListener("submit", submit);
function submit(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries(); // array of entries
  const data = Object.fromEntries(entries);
  const new_opinion = new Opinions(data.name, data.opinion);
  new_opinion.creteCardsEditables();

  document.getElementById("button_edit").addEventListener("click", function () {
    editOpinion();
  });
  document
    .getElementById("button_accept")
    .addEventListener("click", acceptClick);
  document.getElementById("trash_bin").addEventListener("click", deleteClick);

  function editOpinion() {
    console.log(data.opinion);
    const speech = document.getElementById(`${data.opinion}_${data.name}`);
    const input_edit = document.createElement("input");
    input_edit.setAttribute("id", "input_edit");
    input_edit.value = `${data.opinion}`;
    speech.appendChild(input_edit);

    input_edit.addEventListener("input", updateValueOrder);
    document.getElementById("button_edit").remove();

    function updateValueOrder(e) {
      document.getElementById("opinion").textContent = e.target.value;
    }

    document
      .getElementById("button_accept")
      .addEventListener("click", editAccept);
    function editAccept(e) {
      input_edit.remove();
      const new_opinion =peopleOpinion.push({name :data.name, opinion: input_edit.value});
      console.log(peopleOpinion);
    }
  }
  function acceptClick() {
    const new_opinion =peopleOpinion.push({name :data.name, opinion: data.opinion});
    console.log(peopleOpinion);
    const group = document.getElementById("group_buttons");
    group.parentElement.removeChild(group);
  }
  function deleteClick() {
    const speech = document.getElementById(`${data.opinion}_${data.name}`);
    speech.remove();
  }
}
