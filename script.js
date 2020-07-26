//<==== PLAYER INFORMATION =====>
let player = {
  name: "Player",
  location: "Ascarata",
  health: 100,
  skill: 2,
  money: 10,
  items: [],
  email: "",

  hasHealth: function () {
    if (this.health < 0) {
      this.health = 0;
    }
  }
};

let start = function () {

  output("~Text Based RPG~ <br/><br/+>" +
    "Version: 1.0 - 2020_071620 <br/><br/>" +
    "~Items to be Accomplished~ <br/><br/>Choose Your Occupation <br/>Use the Market for Supplies <br/>Work to Build your Fortune <br>Do Goodwill to improve your Reputation<br/><br/> Now Select the Town of Ascarta Button");

//  player.name = prompt("Welcome ... What is your name?");


  //checks if the user has pressed the 'how to play button'
  let ifPlayerName = function () {
    parent = document.getElementById("container");
    child = document.getElementById("howTo");
    parent.removeChild(child);
  }
  ifPlayerName();
};


//sets variable output to the txt on screen
let output = function (txt) {
  document.getElementById("game").innerHTML = txt;
};

//clears text from game
let clearGameWindow = function () {
  document.getElementById("game").innerHTML = "";
};

addOutput = document.getElementById("game");

//holds player locations visited
let firstAscartaVisit = 0;
//let unlocked_battle = 0;

//<==== PLAYER INFORMATION =====>

//<===== Ascarata ======>
let ascarata = function () {
  //clears the game screen upon visit
  let clearUponVisit = function () {
    addOutput.innerHTML = "";
    player.name = prompt("Welcome ... What is your name?");
    /*
    let temp = prompt('Welcome ' + player.name + '!  Please enter an Email Address!');
    let validEmail = false;
    do {
      var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (regex.test(temp)) {
        validEmail = true;
      }
      else {
        temp = prompt('Welcome ' + player.name + '!  Please enter an Email Address!');
      }
    } while (!validEmail);
   */  
  }
  clearUponVisit();
 

  //runs the first time the player visits 'Ascarata'
  let checkFirstVisit = function () {
    if (firstAscartaVisit === 0) {
      player.money += 20;
      output("You arrive in the peacefull town of Ascarata<br/> " +
        "... <br/> " +
        "Off to the side of the path, is a sack of copper!<br/> You aquired 20 copper coins!<br><br>");

      firstAscartaVisit += 1;
    }
  }
  checkFirstVisit();

  //displays default header text upon visit
  let displayHeaderText = function () {
    addOutput.innerHTML += "You look around the village, it's modest town surrounded by rolling hills. <br/>";
  }
  displayHeaderText();

  if (firstAscartaVisit == 1) {
    //setTimeout(function(){
    //output("What is that!<br><br>")
    // }, 4500); 
    addOutput.innerHTML += "<button style='padding: 2em;' class = 'gameButton' onClick = 'market()'>You find something that sparks your interest...</button> <br/>";
}

  /*
  //displays Occupation button
  occupation = function () {
    if (firstAscartaVisit == 1) {
      document.getElementById("occupationButton").style.display = "inline-block";
      //firstAscartaVisit += 1;
      clearGameWindow();
      output("This town needs a Farmer, a Rancher, a Tavern Keeper, or a Preacher");

     addOutput.innerHTML += ("<br><br> Choose Your Occupation");
    }
  };
*/


  // <================== Market FUNCTIONS ======================>

  //displays Market button
  market = function () {
    if (firstAscartaVisit == 1) {
      document.getElementById("marketButton").style.display = "inline-block";
      firstAscartaVisit += 1;
      clearGameWindow();

      output("While walking through Ascarata, you find an open Market at the town center. <br/>" +
        "there are only a few vendors set up...");

      addOutput.innerHTML += "<br><br>~UPDATE~";

      addOutput.innerHTML += ("<br><br> You unlocked the Market!");
    }

  };
};

let work = function () {
  clearGameWindow();
  let work = document.getElementById("game");
  work.innerHTML = "<div id='work'>" + player.name + " went home to work in the fields with newly purchased items.</div>"
}

// <================== MARKET FUNCTIONS ======================>
let marketArea = function () {
  //sets player location to marketArea
  if (player.location != 'marketArea') {
    player.location = 'marketArea';
  }

  //if player location is set to 'marketArea'  
  console.log(player.location);

  let market = document.getElementById("game");
  const clearMarket = function () { market.innerHTML = ""; }
  clearMarket();

  if (player.location === 'marketArea') {
    let market = document.getElementById("game");
    let items = cornProducts;

    //display money
    market.innerHTML += "<div id ='shopMoney'>Money: " + player.money + "</div><br />";


    //display each ability available
    for (var x in cornProducts) {
      //console.log(player.abilities[x]);
      if (player.items[x] == undefined) {
        market.innerHTML += "   <button onclick='purchase(" + x + ")'style='padding: 0.3em; font-size: 80%; font-family: Monospace;'>" + items[x].name + "<br/> Production Time: " + items[x].productionTime + "<br/>Cost: " + items[x].cost + "</button>";
      }

    }


    //checks if the player own an ability - if so [battle] is unlocked!
    var checkPlayerAbilities = function () {

      if (player.items.length >= 1 && unlocked_battle === 0) {
        document.getElementById("workButton").style.display = "inline-block";

        addOutput.innerHTML += "<br>~UPDATE~<br>";
        addOutput.innerHTML += "<br>After puchasing your materials you should head home to plant the products!<br>";
        // addOutput.innerHTML += "<br>Time to use your new abilities....<br>";
        // add)utput.innerHTML += "<br>You make a note of the arena on your map!<br>";
       // unlocked_battle += 1;
      }
    }
    checkPlayerAbilities();

  };

  //make this here so it appears after the ability list
  game.innerHTML += "<br /><div style='font-size: 80%;' id = 'warning'></div>";
  game.innerHTML += "<br /><div style='color: lime;' id='allGood'></div>";
  //if player selects an ability -> this runs and if player owns it then it displays results
  purchase = function (id) {
    let warning = document.getElementById('warning');
    let allGood = document.getElementById('allGood');
    let shopMoney = document.getElementById('shopMoney');
    //if player owns more than 1 ability - check and see if player already owns the ability

    checkIfOwned = function () {
      for (var x in player.abilities) {
        if (player.abilities[x].id == cornProducts[id].id) {
          //break is here so console doesn't log (can't property undefined);
          return false;
         break;
        }
      }
      return true;
    };
    // checkMoney = function () {
    //   if (player.money < cornProducts[id].cost) {
    //     return false;
    //   }
    //   return true;
    // }


    if (!checkIfOwned()) {

      warning.innerHTML = "You already bought this. " + cornProducts[id].name;
      allGood.innerHTML = "";

    } else if (!CanPurchase(player.money, cornProducts[id].cost)) {
      warning.innerHTML = "Sorry you don't have enough money to purchase " + cornProducts[id].name;
      allGood.innerHTML = "";
    }
    else {
      //displays green text
      allGood.innerHTML = "You purchased " + cornProducts[id].name

      //player.money - ability cost
      player.money -= cornProducts[id].cost;

      //money updates
      shopMoney.innerHTML = "Money : " + player.money;

      //ability bought will push to player abilities
      player.items.push(cornProducts[id]);
    }

    var checkPlayerAbilities = function () {
      
      
      if (player.items.length >= 1 && work === 0) {
        document.getElementById("workButton").style.display = "inline-block";

        addOutput.innerHTML += "<br>~UPDATE~<br>";
        addOutput.innerHTML += "<br>After puchasing your materials you should head home to plant the products!<br>";
        // addOutput.innerHTML += "<br>Time to use your new abilities....<br>";
        // addOutput.innerHTML += "<br>You make a note of the arena on your map!<br>";
        //unlocked_battle += 1;
      }
    }
    checkPlayerAbilities();

  }
}


let CanPurchase = function (playerMoney, cost) {
  if (playerMoney < cost) {
    return false;
  }
  return true;
}



// <================== OCCUPATIONS ==================>
// just playing with a filter function for later use ... 
console.log("Filter test here");
const occupation = ['Farmer', 'Rancher', 'Tavern Keeper', 'Preacher'];
let occupation01;
occupation01 = occupation.filter(occupation => occupation.length <= 10);
console.log(occupation01);

// <============FARMER OCCUPATION ==================>
// Setting Crop Options
const seeds = ['corn', 'beans', 'tobacco'];
const capitalizedSeeds = seeds.map(seed => seed.toUpperCase());
console.log(capitalizedSeeds);

// Cost of seeds
const costs = [2, 3.5, 5];
const displayCosts = costs.map(cost => `$${cost.toFixed(2)}`);
console.log(displayCosts)

// Units of seeds purchased:
// For FUN, this adds one unit of each seed type
const total = costs.reduce((sum, cost) => sum + cost, 0);
console.log(total);

// Create a list, populate it with values, and retrieve at least one value for use in program
const cornSeeds = [
  { name: "Dent Corn", growTime: 2, cost: 1 }, 
  { name: "Sweet Corn", growTime: 1.5, cost: .8 }, 
  { name: "Flint Corn", growTime: 0.5, cost: 2.8 }, 
  { name: "Heirloom Corn", growTime: 5, cost: .3 }, 
 ];

const cornSeedGrow = cornSeeds.map(cornSeed => `${cornSeed.name} takes ${cornSeed.growTime} units to grow.`);

console.log(cornSeedGrow);

// Create a list, populate it with values, and retrieve at least one value for use in program
const cornProducts = [
  { name: "Corn Bread", productionTime: 2, cost: 5 }, //in hours
  { name: "Corn Meal Mush", productionTime: 1.5, cost: 5 }, //in hours
  { name: "Corn Flour", productionTime: 0.5, cost: 5 }, //in hours
  { name: "Corn Liquor", productionTime: 15, cost: 5 }, //in hours
  { name: "Corn Feed", productionTime: 0.25, cost: 5 }, //in hours
];

const cornProdProd = cornProducts.map(cornProd => `${cornProd.name} takes ${cornProd.productionTime} hours to produce.`);

console.log(cornProdProd);

// <======================VENDOR STANDS ========================>
let vendor = ("Farm Supplier", "Equipment Supplier", "Household Supplier")
const purchaseItems = [
  {
    name: 'fertilizer',
    vendor: 0,
    price: 7.50
  },
  {
    name: 'bread',
    vendor: 2,
    price: 1.50
  },
  {
    name: 'pry bar',
    vendor: 1,
    price: 1.10
  },
  {
    name: 'milk',
    vendor: 2,
    price: 0.30
  },
  {
    name: 'eggs',
    vendor: 2,
    price: .20
  },
  {
    name: 'overalls',
    vendor: 2,
    price: 5.00
  },
  {
    name: 'plow blade',
    vendor: 1,
    price: 15.00
  }

];
let farmSupplyTotal;
farmSupplyTotal = purchaseItems
  .filter(total => total.vendor === 0)
  .reduce((sum, total) => sum + total.price, 0);
console.log("Farm Supply Total is : $", farmSupplyTotal);

let equipmentTotal;
equipmentTotal = purchaseItems
  .filter(total => total.vendor === 1)
  .reduce((sum, total) => sum + total.price, 0);
console.log("Equipment Total is : $", equipmentTotal);

let householdSupplyTotal;
householdSupplyTotal = purchaseItems
  .filter(total => total.vendor === 2)
  .reduce((sum, total) => sum + total.price, 0);
console.log("Household Total is : $", householdSupplyTotal);

document.getElementById('game').style.overflow = 'hidden';
