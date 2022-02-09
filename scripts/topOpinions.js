class Opinions{
    constructor(name, opinion){
        this.name = name;
        this.opinion = opinion;
    }

    showOpinions(){
        console.log(`${this.name} : ${this.opinion}`)
    }

    createCards(){
        for(i=0;i<restaurants.length; i++){
          const div = document.createElement("div");
          div.setAttribute('class','card')
          document.getElementById("group-cards").appendChild(div)
          const title = document.createElement("h1");
          title.innerHTML =`${restaurants[i].name}`;
          const text = document.createElement("p");
          text.innerHTML = `${restaurants[i].description}`;
          const img = document.createElement("img");
          img.setAttribute('src',`${restaurants[i].image}`)
          const legend = document.createElement("h4");
          legend.innerHTML= 'reservations: 0'
          div.appendChild(title);
          div.appendChild(text);
          div.appendChild(img)
          div.appendChild(legend)
        }}
}

const Opinion1 = new Opinions ('Susan', `A service that seems every day more like a winery, shouting at each other among the waiters, reproaching each other that they have not warned that the coffees were already ready to go to serve, The meter that is tall and shaved, does not pay attention when you ask for more wine or the bill, it gets lost with the tourists and you waiting 20min. It's a shame because I've been going for a long time and the service gets worse every day.`)
const Opinion2 = new Opinions ('John', 'Please improve your attention! Last night we went to dinner and still with food on the plate, an German girl who served us, desperately wanted to take the dishes from the table, even without glasses she left us and did not offer to fill them, when we told her not to take the plates without asking us She responded haughtily and ironic that this was the way of working in the restaurant, she did not apologize, she turned and left')
const Opinion3 = new Opinions ('Emily', `The attention more or less, the waitress very friendly but the owner, should listen better to the customer. The tasting menu leaves a lot to be desired for the price. The menu is chosen by the chef and if you don't like any ingredient, no problem !!!.`)
Opinion1.showOpinions();
Opinion2.showOpinions();
Opinion3.showOpinions();