"use strict"
const initPizzas = {
  pizzas: [{
      id: 0,
      name: "Пицца с баклажанами",
      price: "269 грн",
      calories: 1024,
      img: "img/1.jpeg",
      made: "Сыр Моцарелла, соус Маринара, соус Барбекю, помидор, лук репчатый, соль, сахар, петрушка"
    },
    {
      id: 1,
      name: "Пицца Охотничья XXL",
      price: "249 грн",
      calories: "1888 ккал",
      img: "img/2.jpeg",
      made: "Охотничьи колбаски, молочные колбаски, соус BBQ, соус маринара, петрушка, соус песто"
    }, {
      id: 2,
      name: "Пицца Охотничья",
      price: "120 грн",
      calories: "1899 ккал",
      img: "img/3.jpeg",
      made: "Охотничьи колбаски, молочные колбаски, соус BBQ, соус маринара, петрушка"
    }, {
      id: 3,
      name: "Карбонара метровая",
      price: "329 грн",
      calories: "1395 ккал",
      img: "img/4.jpeg",
      made: "Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, помидоры черри"
    }, {
      id: 4,
      name: "Американо метровая",
      price: "329 грн",
      calories: "1001 ккал",
      img: "img/5.jpeg",
      made: "Соус BBQ, соус маринара, сыр моцарелла, горчица, лук конфитюр, кукуруза, перец болгарский"
    }, {
      id: 5,
      name: "Маргарита",
      price: "85 грн",
      calories: "1155 ккал",
      img: "img/6.jpeg",
      made: "Соус маринара, помидоры, сыр моцарелла, соус песто"
    }, {
      id: 6,
      name: "Карбонара",
      price: "159 грн",
      calories: "1781 ккал",
      img: "img/7.jpeg",
      made: "Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, помидоры черри"
    }, {
      id: 7,
      name: "Полло",
      price: "129 грн",
      calories: "1569 ккал",
      img: "img/8.jpeg",
      made: "Сыр моцарелла, соус маринара, соус ВВQ, чеснок, ананас, филе куриное sous-vide, перец болгарский"
    }, {
      id: 8,
      name: "Гурмео",
      price: "165 грн",
      calories: "1781 ккал",
      img: "img/9.jpeg",
      made: "Соус BBQ, филе куриное sous-vide, ветчина, шампиньоны, лук репчатый, петрушка"
    }, {
      id: 9,
      name: "Четыре сыра",
      price: "145 грн",
      calories: "1816 ккал",
      img: "img/10.jpeg",
      made: "Сливочный соус, сыр моцарелла, сыр дор-блю, сыр чеддер, груша, сыр пармезан, орех грецкий"
    }, {
      id: 10,
      name: "Американо",
      price: "149 грн",
      calories: "1870 ккал",
      img: "img/11.jpeg",
      made: "Соус BBQ, соус маринара, сыр моцарелла, горчица, конфитюр из лука, кукуруза, перец болгарский"
    }, {
      id: 11,
      name: "Кальцоне",
      price: "115 грн",
      calories: "1627 ккал",
      img: "img/12.jpeg",
      made: "Соус маринара, сыр моцарелла, шампиньоны, сыр дор-блю, помидоры, ветчина, соус песто"
    }, {
      id: 12,
      name: "Баварская",
      price: "139 грн",
      calories: "1172 ккал",
      img: "img/13.jpeg",
      made: "Сыр моцарелла, соус маринара, колбаски мюнхенские, горчица, лук репчатый, лук зеленый"
    }, {
      id: 13,
      name: "Диабло",
      price: "159 грн",
      calories: "1177 ккал",
      img: "img/14.jpeg",
      made: "Сыр моцарелла, пепперони, перец чили, перец болгарский, лук репчатый, соус ВВQ, соус чили, петрушка"
    }, {
      id: 14,
      name: "Овощная",
      price: "89 грн",
      calories: "1947 ккал",
      img: "img/15.jpeg",
      made: "Баклажан, вешенки, перец болгарский, помидоры, соус песто, соус маринара"
    }, {
      id: 15,
      name: "Баварская метровая",
      price: "309 грн",
      calories: "1447 ккал",
      img: "img/16.jpeg",
      made: "Сыр моцарелла, соус маринара, колбаски мюнхенские, горчица, лук репчатый, лук зеленый"
    }, {
      id: 16,
      name: "Берлускони метровая",
      price: "289 грн",
      calories: "1954 ккал",
      img: "img/17.jpeg",
      made: "Сливочный соус из белых грибов, сыр моцарелла, соус чесночный, масло трюфельное, петрушка"
    }, {
      id: 17,
      name: "Гурмео метровая",
      price: "319 грн",
      calories: "1334 ккал",
      img: "img/18.jpeg",
      made: "Соус BBQ, филе куриное sous-vide, ветчина, шампиньоны, лук репчатый, петрушка"
    }
  ]

};
let initAdditionalArrays = (pizzasArg) => {
  pizzasArg.names = pizzasArg.pizzas.map((value) => value.name);
  pizzasArg.prices = pizzasArg.pizzas.map((value) => value.price);
  pizzasArg.calories = pizzasArg.pizzas.map((value) => value.calories);
  pizzasArg.imgs = pizzasArg.pizzas.map((value) => value.img);
  pizzasArg.mades = pizzasArg.pizzas.map((value) => value.made);

};
let curPizzas = {
  pizzas: [],
  names: [],
  prices: [],
  calories: [],
  imgs: [],
  mades: [],
};
let madePricesAndCalories = {
  "ананас": {
    price: 23,
    calories: 171
  },
  "баклажан": {
    price: 36,
    calories: 132
  },
  "ветчина": {
    price: 23,
    calories: 146
  },
  "вешенки": {
    price: 23,
    calories: 173
  },
  "горчица": {
    price: 35,
    calories: 140
  },
  "грудинка": {
    price: 34,
    calories: 160
  },
  "груша": {
    price: 20,
    calories: 121
  },
  "колбаски мюнхенские": {
    price: 23,
    calories: 103
  },
  "конфитюр из лука": {
    price: 37,
    calories: 136
  },
  "кукуруза": {
    price: 39,
    calories: 156
  },
  "лук зеленый": {
    price: 36,
    calories: 140
  },
  "лук конфитюр": {
    price: 20,
    calories: 181
  },
  "лук репчатый": {
    price: 26,
    calories: 170
  },
  "масло трюфельное": {
    price: 39,
    calories: 190
  },
  "молочные колбаски": {
    price: 34,
    calories: 151
  },
  "орех грецкий": {
    price: 31,
    calories: 180
  },
  "охотничьи колбаски": {
    price: 25,
    calories: 193
  },
  "пармезан": {
    price: 22,
    calories: 123
  },
  "пепперони": {
    price: 35,
    calories: 181
  },
  "перец болгарский": {
    price: 36,
    calories: 141
  },
  "перец чили": {
    price: 36,
    calories: 184
  },
  "петрушка": {
    price: 28,
    calories: 183
  },
  "помидор": {
    price: 38,
    calories: 124
  },
  "помидоры черри": {
    price: 37,
    calories: 147
  },
  "помидоры": {
    price: 31,
    calories: 159
  },
  "сахар": {
    price: 20,
    calories: 163
  },
  "сливочный соус из белых грибов": {
    price: 29,
    calories: 136
  },
  "сливочный соус": {
    price: 29,
    calories: 145
  },
  "соль": {
    price: 23,
    calories: 137
  },
  "соус bbq": {
    price: 23,
    calories: 179
  },
  "соус барбекю": {
    price: 22,
    calories: 156
  },
  "соус ввq": {
    price: 22,
    calories: 170
  },
  "соус чили": {
    price: 22,
    calories: 121
  },
  "соус маринара": {
    price: 33,
    calories: 105
  },
  "соус песто": {
    price: 26,
    calories: 166
  },
  "соус чесночный": {
    price: 35,
    calories: 108
  },
  "сыр дор-блю": {
    price: 23,
    calories: 193
  },
  "сыр моцарелла": {
    price: 36,
    calories: 114
  },
  "сыр пармезан": {
    price: 20,
    calories: 169
  },
  "сыр чеддер": {
    price: 35,
    calories: 187
  },
  "филе куриное sous-vide": {
    price: 28,
    calories: 130
  },
  "чеснок": {
    price: 21,
    calories: 182
  },
  "шампиньоны": {
    price: 29,
    calories: 116
  }
};
initAdditionalArrays(initPizzas);
let newPrices = [];
let newCalories = [];

initPizzas.mades.forEach((value, index) => {
  let calories = 0;
  let price = 0;
  value.split(", ").forEach((madePart) => {
    if (madePricesAndCalories[madePart.toLowerCase()]) {
      price += madePricesAndCalories[madePart.toLowerCase()].price;
      calories += madePricesAndCalories[madePart.toLowerCase()].calories;
    }
  })
  newPrices.push(price + 50 + " грн");
  newCalories.push(calories + 100 + " ккал");
});
initPizzas.prices = newPrices;
initPizzas.calories = newCalories;
initPizzas.pizzas.forEach((value, index) => {
  value.price = newPrices[index];
  value.calories = newCalories[index];
});
let showElements = (containerClass, hasPizzaCont = null,
  elemClass, hasPizzaPic = null, pizzasArg = initPizzas) => {
  if (curPizzas.pizzas[0] && pizzasArg === initPizzas && hasPizzaPic) {
    pizzasArg = curPizzas;
  } else {
    curPizzas = {
      pizzas: [],
      names: [],
      prices: [],
      calories: [],
      imgs: [],
      mades: [],
    };
  }
  let pizzaPic;
  let pizzaCont;
  let pizzaMade;
  if (hasPizzaPic) {
    if (document.querySelector(".filterContainerHidden"))
      document.querySelector(".filterContainerHidden")
      .setAttribute("class", "filterContainer");
    if (document.querySelector(".sortContainerHidden"))
      document.querySelector(".sortContainerHidden")
      .setAttribute("class", "sortContainer")
  } else if (!hasPizzaPic) {
    if (document.querySelector(".filterContainer"))
      document.querySelector(".filterContainer")
      .setAttribute("class", "filterContainerHidden");
    if (document.querySelector(".sortContainerHidden"))
      document.querySelector(".sortContainerHidden")
      .setAttribute("class", "sortContainer")
  }
  let elem = document.getElementById("container");
  if (elem)
    elem.parentNode.removeChild(elem);
  let container = document.createElement("div");
  container.setAttribute("class", containerClass);
  container.setAttribute("id", "container");
  container.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON")
      if (e.target.getAttribute("class") === "btn madeBtnConfirm") {
        e.target.setAttribute("class", "btn madeBtnConfirm hide");
        e.target.parentNode.querySelector(".change")
          .setAttribute("class", "btn change");
        e.target.parentNode.querySelector(".btnbuy")
          .setAttribute("class", "btn btnbuy");
        let madeBtns = e.target.parentNode.parentNode
          .querySelector(".madeConts");
        let changedMade = document.createElement("p");
        changedMade.setAttribute("class", "pizzaMade");
        changedMade.innerText = "";
        [].forEach.call(madeBtns.childNodes, (value) => {
          if (value.getAttribute("class") !== "strikethrough madeBtn")
            changedMade.innerText += value.innerText + ", ";
        })
        changedMade.innerText = changedMade.innerText.charAt(0)
          .toUpperCase() + changedMade.innerText.slice(1, -2);
        e.target.parentNode.parentNode.querySelector(".pizzaInsideGrid")
          .replaceChild(changedMade, e.target.parentNode.parentNode.querySelector(".madeConts"));
        let changedPizzaIndex = pizzasArg.names.indexOf(e.target.parentNode
          .parentNode.querySelector(".pizzaName").innerText);
        pizzasArg.calories[changedPizzaIndex] = e.target.parentNode
          .parentNode.querySelector(".pizzaCalories").innerText;
        pizzasArg.pizzas[changedPizzaIndex].calories = e.target
          .parentNode.parentNode.querySelector(".pizzaCalories").innerText;
        pizzasArg.prices[changedPizzaIndex] = e.target.parentNode
          .parentNode.querySelector(".pizzaPrice").innerText;
        pizzasArg.pizzas[changedPizzaIndex].price = e.target.parentNode
          .parentNode.querySelector(".pizzaPrice").innerText;

        pizzasArg.mades[changedPizzaIndex] = changedMade.innerText;
        pizzasArg.pizzas[changedPizzaIndex].made = changedMade.innerText;
      }
    else if (e.target.getAttribute("class") === "btn change") {
      e.target.parentNode.querySelector(".madeBtnConfirm")
        .setAttribute("class", "btn madeBtnConfirm");
      e.target.parentNode.querySelector(".btnbuy")
        .setAttribute("class", "btn btnbuy hide");
      e.target.setAttribute("class", "btn change hide");
      let pizzaMade = e.target.parentNode.parentNode
        .querySelector(".pizzaMade").innerText;
      let arrayMade = pizzaMade.split(",");
      let madeBtns = document.createElement("div");
      madeBtns.setAttribute("class", "madeConts" + " pizzaMade");
      arrayMade.forEach((value) => {
        let btnDelete = document.createElement("button");
        btnDelete.setAttribute("class", "madeBtn");
        btnDelete.innerText = value;
        btnDelete.addEventListener("click", (e) => {
          if (e.target.getAttribute("class") !== "strikethrough madeBtn") {
            e.target.setAttribute("class", "strikethrough madeBtn");
            e.target.parentNode.parentNode.querySelector(".pizzaCalories")
              .innerText = parseInt(e.target.parentNode.parentNode
                .querySelector(".pizzaCalories").innerText) -
              madePricesAndCalories[e.target.innerText.toLowerCase()]
              .calories + " ккал";
            e.target.parentNode.parentNode.querySelector(".pizzaPrice")
              .innerText = parseInt(e.target.parentNode.parentNode
                .querySelector(".pizzaPrice").innerText) -
              madePricesAndCalories[e.target.innerText.toLowerCase()]
              .price + " грн";
          } else {
            e.target.setAttribute("class", "madeBtn");
            e.target.parentNode.parentNode.querySelector(".pizzaCalories")
              .innerText = parseInt(e.target.parentNode.parentNode
                .querySelector(".pizzaCalories").innerText) +
              madePricesAndCalories[e.target.innerText.toLowerCase()]
              .calories + " ккал";
            e.target.parentNode.parentNode.querySelector(".pizzaPrice")
              .innerText = parseInt(e.target.parentNode.parentNode
                .querySelector(".pizzaPrice").innerText) +
              madePricesAndCalories[e.target.innerText.toLowerCase()]
              .price + " грн";
          }
        })
        madeBtns.appendChild(btnDelete);
      })
      e.target.parentNode.parentNode.querySelector(".pizzaInsideGrid").replaceChild(madeBtns, e.target.parentNode.parentNode.querySelector(".pizzaMade"));
    } else if (e.target.getAttribute("class") === "btn btnbuy") {
      let pizzaAddedToCart = {
        name: e.target.parentNode.parentNode.querySelector(".pizzaName").innerText,
        img: e.target.parentNode.parentNode.querySelector("img").src,
        made: e.target.parentNode.parentNode.querySelector(".pizzaMade").innerText,
        calories: e.target.parentNode.parentNode.querySelector(".pizzaCalories").innerText,
        price: e.target.parentNode.parentNode.querySelector(".pizzaPrice").innerText,
        //amount:1,
      };
      let cart;
      if (!localStorage.getItem("cart")) {
        cart = {
          pizzas: [],
        };
      } else {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      //cart.pizzas.filter((value)=>{
      //  return value.name == pizzaAddedToCart 
      //}

      cart.pizzas.push(pizzaAddedToCart);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.querySelector(".badgeNumber p ").innerText =
        parseInt(document.querySelector(".badgeNumber p ").innerText) + 1;

    }
  })
  for (let i = 0; i < pizzasArg.pizzas.length; i++) {
    if (hasPizzaCont) {
      pizzaCont = document.createElement("div");
      pizzaCont.setAttribute("style", "display:flex")
      let logo = document.createElement("img");
      logo.setAttribute("src",
        "https://static.vecteezy.com/system/resources/previews/000/069/322/large_2x/vector-pizza-logo.jpg");
      logo.setAttribute("class", "logo");
      pizzaCont.appendChild(logo);
    }
    let pizza = document.createElement("div");
    pizza.setAttribute("class", elemClass + " wow fadeInUp");
    let pizzaInside = document.createElement("div");
    if (hasPizzaPic) {
      pizzaPic = document.createElement("img");
      pizzaPic.setAttribute("src", pizzasArg.imgs[i]);
      pizzaPic.setAttribute("width", '100%');
      pizzaPic.setAttribute("alt", pizzasArg.names[i]);
    }
    let pizzaName = document.createElement("h2");
    pizzaName.setAttribute("class", "pizzaName");
    let nameText = document.createTextNode(pizzasArg.names[i]);
    pizzaName.appendChild(nameText);
    if (hasPizzaPic) {
      pizzaMade = document.createElement("p");
      pizzaMade.setAttribute("class", "pizzaMade");
      let madeText = document.createTextNode(pizzasArg.mades[i]);
      pizzaMade.appendChild(madeText);
    }
    let pizzaCalories = document.createElement("h4");
    pizzaCalories.setAttribute("class", "pizzaCalories");
    let down = document.createElement("div");
    if (containerClass == "pizzas")
      down.setAttribute("class", "priceAndCaloriesGrid");
    let caloriesText = document.createTextNode(pizzasArg.calories[i]);
    pizzaCalories.appendChild(caloriesText);
    let pizzaPrice = document.createElement("h4");
    pizzaPrice.setAttribute("class", "pizzaPrice");
    let priceText = document.createTextNode(pizzasArg.prices[i]);
    pizzaPrice.appendChild(priceText);
    down.appendChild(pizzaCalories);
    down.appendChild(pizzaPrice);
    if (hasPizzaPic) {
      pizzaInside.setAttribute('class', "pizzaInsideGrid")
      pizzaInside.appendChild(pizzaPic);
    }
    pizzaInside.appendChild(pizzaName);
    if (hasPizzaPic) {
      pizzaInside.appendChild(pizzaMade);
    }
    pizzaInside.appendChild(down);
    pizza.appendChild(pizzaInside);
    if (hasPizzaCont) {
      pizzaCont.appendChild(pizza);
      container.appendChild(pizzaCont);
    }
    if (hasPizzaPic) {
      let buttonContainer = document.createElement("div");
      buttonContainer.setAttribute("class", "pizzaButtonContainer");
      let buttonBuy = document.createElement("button");
      buttonBuy.innerText = "Добавить в корзину";
      buttonBuy.setAttribute("class", "btn btnbuy");
      let buttonChange = document.createElement("button");
      buttonChange.innerText = "Изменить";
      buttonChange.setAttribute("class", "btn change");
      let btnConfirm = document.createElement("button");
      btnConfirm.setAttribute("class", "btn madeBtnConfirm hide");
      btnConfirm.innerText = "Готово";
      buttonContainer.appendChild(buttonChange);
      buttonContainer.appendChild(buttonBuy);
      buttonContainer.appendChild(btnConfirm);

      pizza.appendChild(buttonContainer);
      container.appendChild(pizza);
    }
  }
  if (!document.querySelector(`.${containerClass}`))
    document.querySelector(".headerLeft").after(container);
}

function displayGrid() {
  showElements("pizzas", false, "pizza", true);
}

function displayList() {
  showElements("pizzasList", true, "pizzaListItem", false);
}

function sortPizzas(order, way) {
  let pizzasCopy;
  if (!curPizzas.pizzas[0]) {
    pizzasCopy = [...initPizzas.pizzas];
  } else {
    pizzasCopy = [...curPizzas.pizzas];
  }
  if (order && way) {
    pizzasCopy.sort((pizzaA, pizzaB) => parseInt(pizzaA.price) -
      parseInt(pizzaB.price))
  } else if (!order && way) {
    pizzasCopy.sort((pizzaA, pizzaB) => parseInt(pizzaB.price) -
      parseInt(pizzaA.price))
  } else if (order && !way) {
    pizzasCopy.sort((pizzaA, pizzaB) => parseInt(pizzaA.calories) -
      parseInt(pizzaB.calories))
  } else if (!order && !way) {
    pizzasCopy.sort((pizzaA, pizzaB) => parseInt(pizzaB.calories) -
      parseInt(pizzaA.calories))
  }
  curPizzas = {
    pizzas: pizzasCopy,
  }
  initAdditionalArrays(curPizzas);
  if (!document.querySelector(".pizzasList")) {
    initArgs();
  } else {
    initArgs(curPizzas);
  }
}

function filterPizzas() {
  let selectedFilters = [].map.call(document.getElementsByClassName("filterValues"), (value) => value.value);
  let filteredPizzas = [];
  let arrayFlags = [];
  for (let i = 0; i < initPizzas.pizzas.length; i++) {
    arrayFlags = [];
    selectedFilters.forEach(() => {
      arrayFlags.push(false);
    })
    for (let y = 0; y < selectedFilters.length; y++) {
      if (~initPizzas.mades[i].toLowerCase().indexOf(selectedFilters[y].toLowerCase()) || selectedFilters[y] === "") {
        arrayFlags[y] = true;
      }
    }
    if (arrayFlags.reduce((prev, curr) => prev && curr, true)) {
      filteredPizzas.push(initPizzas.pizzas[i]);
    }
  }

  if (filteredPizzas.length === 0) {
    wrongFilter(false);
  } else {
    wrongFilter(true);

    curPizzas.pizzas = [...filteredPizzas];
    initAdditionalArrays(curPizzas);
    initArgs();
  }
}
let wrongFilter = (flag) => {
  if (!flag) {
    if (!document.querySelector(".divWrongFilter")) {
      let divWrongFilter = document.createElement("div");
      divWrongFilter.setAttribute("class", "divWrongFilter")
      divWrongFilter.innerHTML = "<h2>Пиццы с такими ингрединтами не найдено :(</h2>";
      document.querySelector(".pizzas").after(divWrongFilter);
    } else {
      document.querySelector(".divWrongFilter").setAttribute("class", "divWrongFilter");
    }
    document.querySelector(".pizzas").setAttribute("class", "pizzas hide");

  }
  else{
    document.querySelector(".pizzas").setAttribute("class", "pizzas");
    if(document.querySelector(".divWrongFilter"))
    document.querySelector(".divWrongFilter").setAttribute("class", "divWrongFilter hide");

  }
}
let initArgs = (...rest) => {
  let arg1 = document.getElementById("container").getAttribute("class");
  let arg2 = arg1 !== "pizzas";
  let check = document.getElementById("container").querySelector(".pizza");
  let arg3;
  arg3 = check ? "pizza" : "pizzaListItem";
  showElements(arg1, arg2, arg3, !arg2, ...rest);
}
window.onload = function () {
  let filterContainer = document.createElement("div");
  filterContainer.innerHTML = `<div class="filterContainerHidden">
  <div class="filterInputs">
    <label>Введите значение:</label>
    <select class="filterValues"></select>
    <label >Введите значение:</label>
    <select class="filterValues"></select>
    <label >Введите значение:</label>
    <select class="filterValues "></select>
    <label >Введите значение:</label>
    <select class="filterValues "></select>
    <label >Введите значение:</label>
    <select class="filterValues "></select>
    <label >Введите значение:</label>
    <select class="filterValues" ></select>
  </div>
  <div class="filterRight">
    <h2>Фильтр</h2>
  </div>
</div>`;
  let btns = `<button class="btn cartCont">

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
  y="0px" viewBox="0 0 19.25 19.25" style="enable-background:new 0 0 19.25 19.25;" xml:space="preserve">

  <g>
    <g id="Layer_1_107_">
      <g>
        <path style="fill:white;" d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461
      C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124
      c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112
      c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075
      c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7
      C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2
      h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z
       M13.25,9.625v-2h3.418l-0.285,2H13.25z" />
        <circle style="fill:white;" cx="6.75" cy="17.125" r="1.5" />
        <circle style="fill:white;" cx="15.75" cy="17.125" r="1.5" />
      </g>
    </g>
  </g>
</svg>
<div class="badgeNumber">
  <p>0</p>
</div>
</button>
<button class="btn addPizza">
<h2>+</h2>
</button>`;

  let divBtns = document.createElement("div");
  divBtns.innerHTML = btns;
  document.querySelector(".headerLeft").before(divBtns);
  document.querySelector(".headerLeft").after(filterContainer);
  let sortContainer = document.createElement("div");
  sortContainer.innerHTML = `<div class="sortContainerHidden">
  <h2>Сорт</h2>
  <div class="sortContainerBtns">
    <button class="btn list wow fadeInRight" onclick="sortPizzas(true,true)">
    Дешевые</button>
    <button class="btn list wow fadeInRight" onclick="sortPizzas(false,true)">
    Дорогие</button>
    <button class="btn list wow fadeInRight" onclick="sortPizzas(true,false)">
    Не каллорийные</button>
    <button class="btn list wow fadeInRight" onclick="sortPizzas(false,false)">
    Каллорийные</button>
  </div>
</div>`;
  if (localStorage.getItem("cart")) {
    document.querySelector(".badgeNumber p ").innerText =
      JSON.parse(localStorage.getItem("cart")).pizzas.length;
  }
  document.querySelector(".headerLeft").after(sortContainer);
  if (localStorage.getItem("email") === "2000raketa@gmail.com") {
    reloadAll();
  }
  bindSelects();

  document.querySelector(".addPizza").addEventListener("click", (e) => {
    document.querySelector(".addPizza").setAttribute("class", "btn addPizza hide");
    if (document.querySelector(".cartContainer")) {
      document.querySelector(".cartContainer").remove();
      document.querySelector(".cartCont").setAttribute("class", "btn cartCont");
    }
    let addPizzaContainer = document.createElement("div");
    addPizzaContainer.setAttribute("class", "addPizzaContainer");
    let addPizzaContainerHeader = document.createElement("h2");
    addPizzaContainerHeader.setAttribute("class", "addPizzaContainerHeader");
    addPizzaContainerHeader.innerText = "Добавить пиццу";
    let addPizzaContainerLeft = document.createElement("div");
    addPizzaContainerLeft.setAttribute("class", "addPizzaContainerLeft");
    let btnCloseAdd = document.createElement("button");
    btnCloseAdd.setAttribute("class", "btn btnCloseAdd");
    btnCloseAdd.innerHTML = "<h2>x</h2>";
    btnCloseAdd.addEventListener("click", () => {
      document.querySelector(".addPizza").setAttribute("class", "btn addPizza");
      document.querySelector(".addPizzaContainer").remove();
    })
    let addedPizzaImgDiv = document.createElement("div");
    let addedPizzaImg = document.createElement("img");
    addedPizzaImg.setAttribute("src", "img/new.jpg");
    addedPizzaImg.setAttribute("width", "80%");
    addedPizzaImg.setAttribute("class", "addedPizzaImg");

    addedPizzaImgDiv.setAttribute("class", "addedPizzaImgDiv");
    addedPizzaImgDiv.appendChild(addedPizzaImg);
    let addedPizzaNameInput = document.createElement("input");
    addedPizzaNameInput.setAttribute("type", "text");
    addedPizzaNameInput.setAttribute("placeholder", "Новая пицца " + initPizzas.pizzas.length);
    addedPizzaNameInput.setAttribute("class", "addedPizzaNameInput");
    let addedPizzaName = document.createElement("label");
    addedPizzaName.setAttribute("class", "addedPizzaName");
    addedPizzaName.innerText = "Название пиццы";
    let addedPizzaMade = document.createElement("div");
    addedPizzaMade.setAttribute("class", "addedPizzaMade");
    let uniqueShortMade = initPizzas.mades.join(", ").split(", ").map((value) =>
      value.toLowerCase()).filter((value, index, arr) => {
      if (value !== " " && value != "")
        return !~arr.indexOf(value.toLowerCase(), index + 1);
    }).sort();
    uniqueShortMade.forEach((value) => {
      let addedPizzaDivMade = document.createElement("div");
      addedPizzaDivMade.setAttribute("class", "addedPizzaDivMade");
      let addedPizzaLabelMade = document.createElement("label");
      addedPizzaLabelMade.innerText = value;
      let addedPizzaCheckboxMade = document.createElement("input");
      addedPizzaCheckboxMade.setAttribute("type", "checkbox");
      addedPizzaCheckboxMade.setAttribute("value", value);
      addedPizzaCheckboxMade.setAttribute("class", "addedPizzaCheckboxMade");
      addedPizzaDivMade.appendChild(addedPizzaCheckboxMade);
      addedPizzaDivMade.appendChild(addedPizzaLabelMade);
      addedPizzaMade.appendChild(addedPizzaDivMade);
    })
    addedPizzaMade.addEventListener("click", (e) => {
      if (e.target.nodeName === "INPUT") {
        let changeCalories = document.querySelector(".addPizzaCalories");
        let changePrice = document.querySelector(".addPizzaPrice");
        if (e.target.checked) {
          changeCalories.innerText = parseInt(changeCalories.innerText) +
            madePricesAndCalories[e.target.value].calories + " ккал";
          changePrice.innerText = parseInt(changePrice.innerText) +
            madePricesAndCalories[e.target.value].price + " грн";
        } else {
          changeCalories.innerText = parseInt(changeCalories.innerText) -
            madePricesAndCalories[e.target.value].calories + " ккал";
          changePrice.innerText = parseInt(changePrice.innerText) -
            madePricesAndCalories[e.target.value].price + " грн";
        }
      }
    })
    addPizzaContainerLeft.appendChild(btnCloseAdd);
    addPizzaContainerLeft.appendChild(addedPizzaImgDiv);
    let addPizzaContainerNameAndMade = document.createElement("div");
    addPizzaContainerNameAndMade.setAttribute("class", "addPizzaContainerNameAndMade");
    addPizzaContainerNameAndMade.appendChild(addedPizzaName);
    addPizzaContainerNameAndMade.appendChild(addedPizzaNameInput);
    addPizzaContainerNameAndMade.appendChild(addedPizzaMade);
    let addPizzaContainerRight = document.createElement("div");
    addPizzaContainerRight.setAttribute("class", "addPizzaContainerRight");
    let addPizzaCaloriesAndPrice = document.createElement("div");
    addPizzaCaloriesAndPrice.setAttribute("class", "addPizzaCaloriesAndPrice");
    let addPizzaCalories = document.createElement("h4");
    addPizzaCalories.innerText = "100 ккал";
    addPizzaCalories.setAttribute("class", "addPizzaCalories");
    let addPizzaPrice = document.createElement("h4");
    addPizzaPrice.innerText = "50 грн";
    addPizzaPrice.setAttribute("class", "addPizzaPrice");
    let addPizzaButton = document.createElement("button");
    addPizzaButton.setAttribute("class", "btn addPizzaBtn");
    addPizzaButton.innerText = "Добавить пиццу";
    addPizzaButton.addEventListener("click", (e) => {
      let addedPizzaNameValue;
      let addedPizzaMadeValue = "";
      let addedPizzaImgValue;
      let addedPizzaPriceValue;
      let addedPizzaCaloriesValue;

      if (document.querySelector(".addedPizzaNameInput").value == "")
        addedPizzaNameValue = "Новая пицца " + initPizzas.pizzas.length;
      else
        addedPizzaNameValue = document.querySelector(".addedPizzaNameInput")
        .value;
      if ([].filter.call(document.querySelectorAll(".addedPizzaCheckboxMade"), (node) => node.checked)[0]) {
        let madepizza = [].filter.call(document
          .querySelectorAll(".addedPizzaCheckboxMade"), (node) => node
          .checked).map((node) => node.value).join(", ")
        addedPizzaMadeValue = madepizza.charAt(0).toUpperCase() + madepizza.slice(1);
      } else {

      }
      //if (document.querySelector(".addedPizzaImgInput").value) {
      //  addedPizzaImgValue = document.querySelector(".addedPizzaImgInput").value;
      //} else {
      addedPizzaImgValue = "img/new.jpg";
      //}
      localStorage.setItem("email", "2000raketa@gmail.com");
      addedPizzaCaloriesValue = document.querySelector(".addPizzaCalories").innerText;
      addedPizzaPriceValue = document.querySelector(".addPizzaPrice").innerText;
      localStorage.setItem(initPizzas.pizzas.length, JSON.stringify({
        id: initPizzas.pizzas.length,
        name: addedPizzaNameValue,
        price: addedPizzaPriceValue,
        calories: addedPizzaCaloriesValue,
        img: addedPizzaImgValue,
        made: addedPizzaMadeValue,
      }));
      reloadPizzas();
      document.querySelector(".addPizza").setAttribute("class", "btn addPizza");
      document.querySelector(".addPizzaContainer").remove();
    });
    addPizzaCaloriesAndPrice.appendChild(addPizzaCalories);
    addPizzaCaloriesAndPrice.appendChild(addPizzaPrice);
    addPizzaContainerRight.appendChild(addPizzaContainerNameAndMade);

    let addPizzaContainerAfterHeader = document.createElement("div");
    addPizzaContainerAfterHeader.setAttribute("class", "addPizzaContainerAfterHeader");
    addPizzaContainerAfterHeader.appendChild(addPizzaContainerLeft);
    addPizzaContainerAfterHeader.appendChild(addPizzaContainerRight);
    addPizzaContainer.appendChild(addPizzaContainerHeader);
    addPizzaContainer.appendChild(addPizzaContainerAfterHeader);
    addPizzaContainer.appendChild(addPizzaCaloriesAndPrice);
    addPizzaContainer.appendChild(addPizzaButton);
    if (!document.querySelector(".addPizzaContainer"))
      document.querySelector(".addPizza").after(addPizzaContainer);
  })
  document.querySelector(".cartCont").addEventListener("click", (e) => {
    document.querySelector(".cartCont").setAttribute("class", "btn cartCont hide");
    if (document.querySelector(".addPizzaContainer")) {
      document.querySelector(".addPizza").setAttribute("class", "btn addPizza");
      document.querySelector(".addPizzaContainer").remove();
    }
    let cartContainer = document.createElement("div");
    cartContainer.setAttribute("class", "cartContainer");
    let cartContainerHeader = document.createElement("h2");
    cartContainerHeader.setAttribute("class", "cartContainerHeader");
    cartContainerHeader.innerText = "Корзина";
    let btnCloseCart = document.createElement("button");
    btnCloseCart.setAttribute("class", "btn btnCloseAdd");
    btnCloseCart.innerHTML = "<h2>x</h2>";
    btnCloseCart.addEventListener("click", () => {
      document.querySelector(".cartCont").setAttribute("class", "btn cartCont");
      document.querySelector(".cartContainer").remove();
    })
    let cartContainerAfterHeader = document.createElement("div");
    cartContainerAfterHeader.setAttribute("class", "cartContainerAfterHeader");
    let cartContainerPizzas = document.createElement("div");
    let cartPizzasCaloriesAndPrice = document.createElement("div");
    cartPizzasCaloriesAndPrice.setAttribute("class", "cartPizzasCaloriesAndPrice");
    let cartPizzasCalories = document.createElement("h4");
    cartPizzasCalories.innerText = "0 ккал";
    cartPizzasCalories.setAttribute("class", "cartPizzasCalories");
    let cartPizzasPrice = document.createElement("h4");
    cartPizzasPrice.setAttribute("class", "cartPizzasPrice");
    cartPizzasPrice.innerText = "0 грн";
    if (localStorage.getItem("cart")) {
      cartContainerPizzas.setAttribute("class", "cartContainerPizzas");
      let cartPizzasValues = JSON.parse(localStorage.getItem("cart")).pizzas;
      cartPizzasValues.forEach((value, index, array) => {
        let cartPizza = document.createElement("div");
        cartPizza.setAttribute("class", "cartPizza");
        let cartPizzaName = document.createElement("h3");
        cartPizzaName.setAttribute("class", "cartPizzaName");
        cartPizzaName.innerText = value.name;
        let cartPizzaMade = document.createElement("p");
        cartPizzaMade.setAttribute("class", "cartPizzaMade");
        cartPizzaMade.innerText = value.made;
        let cartPizzaCalories = document.createElement("h4");
        cartPizzaCalories.setAttribute("class", "cartPizzaCalories");
        cartPizzaCalories.innerText = value.calories;
        let cartPizzaPrice = document.createElement("h4");
        cartPizzaPrice.setAttribute("class", "cartPizzaPrice");
        cartPizzaPrice.innerText = value.price;
        //let cartPizzaAmountDiv = document.createElement("div");
        //cartPizzaAmountDiv.setAttribute("class","cartPizzaAmountDiv");
        //let cartPizzaIncreaseAmount = document.createElement("button");
        //cartPizzaIncreaseAmount.setAttribute("class","btn cartPizzaIncreaseAmount");
        //cartPizzaIncreaseAmount.innerText = "+";
        //let cartPizzaAmount = document.createElement("h4");
        //cartPizzaAmount.setAttribute("class","cartPizzaAmount");
        //cartPizzaAmount.innerText = array.filter(cartPizza => isEqual(cartPizza,value)) .length;
        //let cartPizzaDecreaseAmount = document.createElement("button");
        //cartPizzaDecreaseAmount.setAttribute("class","btn cartPizzaDecreaseAmount");
        //cartPizzaDecreaseAmount.innerText = "-";
        //cartPizzaAmountDiv.appendChild(cartPizzaDecreaseAmount);
        //cartPizzaAmountDiv.appendChild(cartPizzaAmount);
        //cartPizzaAmountDiv.appendChild(cartPizzaIncreaseAmount)
        let cartPizzaNoImgDiv = document.createElement("div");
        cartPizzaNoImgDiv.setAttribute("class", "cartPizzaNoImgDiv");
        let cartPizzaImg = document.createElement("img");
        cartPizzaImg.setAttribute("class", "cartPizzaImg");
        cartPizzaImg.setAttribute("src", value.img);
        cartPizzasPrice.innerText = (parseInt(cartPizzasPrice.innerText) + parseInt(value.price)) + " грн";
        cartPizzasCalories.innerText = (parseInt(cartPizzasCalories.innerText) + parseInt(value.calories)) + " ккал";
        cartPizza.appendChild(cartPizzaImg);
        cartPizzaNoImgDiv.appendChild(cartPizzaName);
        cartPizzaNoImgDiv.appendChild(cartPizzaMade);
        cartPizzaNoImgDiv.appendChild(cartPizzaCalories);
        cartPizzaNoImgDiv.appendChild(cartPizzaPrice);
        //cartPizzaNoImgDiv.appendChild(cartPizzaAmountDiv);
        cartPizza.appendChild(cartPizzaNoImgDiv);
        cartContainerPizzas.appendChild(cartPizza);
      });
    }
    cartContainer.appendChild(btnCloseCart);
    cartContainer.appendChild(cartContainerHeader);
    if (localStorage.getItem("cart")) {
      cartContainerAfterHeader.appendChild(cartContainerPizzas);
    }
    cartContainer.appendChild(cartContainerAfterHeader);
    let cartPayDiv = document.createElement("div");
    cartPayDiv.setAttribute("class", "cartPayDiv");
    let cartPayButton = document.createElement("button");
    cartPayButton.setAttribute("class", "btn cartPayButton");
    cartPayButton.innerText = "Оплатить";
    cartPayButton.addEventListener("click", () => {
      if (document.querySelector(".cartPizzasCalories").innerText !== "0 ккал")
        alert("Оплата совершена");
      else {
        alert("Вы ничего не добавили в корзину.");

      }
      localStorage.removeItem("cart");
      document.querySelector(".badgeNumber p ").innerText = 0;
      document.querySelector(".cartContainer").remove();
      document.querySelector(".cartCont").setAttribute("class", "btn cartCont");

    });
    cartPizzasCaloriesAndPrice.appendChild(cartPizzasCalories);
    cartPizzasCaloriesAndPrice.appendChild(cartPizzasPrice);
    cartPayDiv.appendChild(cartPizzasCaloriesAndPrice);
    cartPayDiv.appendChild(cartPayButton);
    cartContainer.appendChild(cartPayDiv);

    if (!document.querySelector(".cartContainer"))
      document.querySelector(".cartCont").after(cartContainer);
  })
}

function reloadPizzas() {
  if (localStorage.getItem(initPizzas.pizzas.length) !== "email" &&
    localStorage.getItem(initPizzas.pizzas.length) !== "cart")
    initPizzas.pizzas.push(JSON.parse(localStorage.getItem(initPizzas.pizzas.length)));
  initAdditionalArrays(initPizzas);
  if (document.querySelector(".pizzasList"))
    displayList();
  else if (document.querySelector(".pizzas")) {
    displayGrid();
  }
}

function reloadAll() {
  Object.keys(localStorage).forEach(value => {
    if (value !== "email" && value !== "cart")
      initPizzas.pizzas.push(JSON.parse(localStorage.getItem(value)))
  });
  initAdditionalArrays(initPizzas);
}

function bindSelects() {
  let uniqueShortMade = initPizzas.mades.join(", ").split(", ").map((value) =>
    value.toLowerCase()).filter((value, index, arr) => !~arr.indexOf(value
    .toLowerCase(), index + 1)).sort();
  let option;
  [].forEach.call(document.getElementsByClassName("filterValues"), (value) => {
    let emptyFilterValue = document.createElement("option");
    emptyFilterValue.innerText = "";
    value.appendChild(emptyFilterValue);
    uniqueShortMade.forEach((uniqueMadeValue) => {
      option = document.createElement("option");
      option.innerText = uniqueMadeValue.charAt(0).toUpperCase() +
        uniqueMadeValue.slice(1);
      value.appendChild(option);
    })
    value.addEventListener("change", (e) => {
      filterPizzas();
    })
  })
}