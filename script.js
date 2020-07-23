let start = function() {

  output("~Text Based RPG~ <br/><br/+>" +
    "Version: 1.0 - 2020_071620 <br/><br/>" +
    "~Items to be Accomplished~ <br/><br/>Choose Your Occupation <br/>Use the Market for Supplies <br/>Work to Build your Fortune <br>Do Goodwill to improve your Reputation<br/><br/> Now Select the Town of Ascarta Button");

  //prompts player for their name
  let player = function() {
    player.name = prompt("Welcome ... What is your name?");
  }
  player();
  

    //checks if the user has pressed the 'how to play button'
  let ifPlayerName = function() {
    parent = document.getElementById("container");
    child = document.getElementById("howTo");
    parent.removeChild(child);
  }
  ifPlayerName();
};


//sets variable output to the txt on screen
let output = function(txt) {
  document.getElementById("game").innerHTML = txt;
};

add_output = document.getElementById("game");

//holds player locations visited
let firstAscartaVisit = 0;
let unlocked_battle = 0;

//<==== PLAYER INFORMATION =====>
let player = {
  name: "Unknown",
  location: "ascarata",
  health: 100,
  skill: 2,
  money: 0,
  talents: [],
  
  hasHealth: function () {
    if(this.health < 0){
      this.health = 0;
    }
  }
};

//<==== PLAYER INFORMATION =====>

//<===== Ascarata ======>
let ascarata = function() {
  //clears the game screen upon visit
  let clearUponVisit = function() {
    add_output.innerHTML = "";
  }
  clearUponVisit();

  //runs the first time the player visits 'Ascarata'
  let checkFirstVisit = function() {
    if (firstAscartaVisit === 0) {
      player.money += 20;
      output("You arrive in the peacefull town of Ascarata<br/> " +
        "... <br/> " +
        "Off to the side of the path, is a sack of gold!<br/> You aquired 20 gold!<br><br>");
      
  /*//<--- RAND EVENT ----->
  randEvent = function() {
    const doge = Math.floor(Math.random() * 100);
    return doge;
  };
  let randEvent = randEvent();

  if (firstAscartaVisit == 1) {
    add_output.innerHTML += "<button style='padding: 2em;' class = 'gameButton' onClick = 'marketArea()'>You look around and something sparks your interest...</button> <br/>";

    randEvent = -1;
  } */
      
      firstAscartaVisit += 1;

    }
  }
  checkFirstVisit();
  
  // setTimeout(function(){
  //     output("You aquired 20 gold!<br><br>")
  //      }, 4500); 

  //displays default header text upon visit
  let displayHeaderText = function() {
    add_output.innerHTML += "You look around the village, it's modest town surrounded by rolling hills. <br/>";
  }
  displayHeaderText();

  //<--- RAND EVENT ----->
 randEvent = function() {
    const doge = Math.floor(Math.random() * 100);
    return doge;
  };
  let randEvent = randEvent();

  if (firstAscartaVisit == 1) {
    add_output.innerHTML += "<button style='padding: 2em;' class = 'gameButton' onClick = 'marketArea()'>You look around and something sparks your interest...</button> <br/>";

    randEvent = -1;
  }

  
// <================== Market FUNCTIONS ======================>

//displays Market button
marketArea = function() {

  if (firstAscartaVisit == 1) {
    document.getElementById("marketButton").style.display = "inline-block";
    firstAscartaVisit += 1;
  
  clearGameWindow();

  output("While walking through Ascarata, you find an open Market at the town center. <br/>" +
    "there are only a few vendors set up...");

  add_output.innerHTML += "<br><br>~UPDATE~";

  add_output.innerHTML += ("<br><br> You unlocked the Market!");
  }

};

// <================== MARKET FUNCTIONS ======================>

let marketArea = function () {
  //sets player location to marketArea
  if(player.location != 'marketArea'){
    player.location = 'marketArea';
  }
  
  //if player location is set to 'marketArea'  
  console.log(player.location);
  
  let market = document.getElementById("game");
  const clearMarket = function () {market.innerHTML = "";}
  clearMarket();
  
  if(player.location === 'marketArea'){
    let market = document.getElementById("game");
    let abilities = abilityList;
        
    //display money
    market.innerHTML += "<div id ='shopMoney'>Money: "+player.money+"</div><br />";
    
    
    //display each ability available
    for(var x in abilities){
      console.log(player.abilities[x]);
        if(player.abilities[x] == undefined){
        market.innerHTML += "   <button onclick='purchase("+x+")'style='padding: 0.3em; font-size: 80%; font-family: Monospace;'>"+abilities[x].name+"<br/> Damage: "+abilities[x].power+"<br/>Cost: "+abilities[x].cost+"</button>";
        }
      
    }
      
    //<--- RAND EVENT ----->
  switch (randEvent) {
    case 1, 25, 30, 45, 50, 60, 75, 99:
      add_output.innerHTML += "<br> You found 150 gold...";
      player.money += 150;
      break;
    default:
      add_output.innerHTML += "";
      break;
  }


  //checks if the player own an ability - if so [battle] is unlocked!
  var checkPlayerAbilities = function() {

    if (player.abilities.length >= 1 && unlocked_battle === 0) {
      document.getElementById("battleButton").style.display = "inline-block";

      add_output.innerHTML += "<br>~UPDATE~<br>";
      add_output.innerHTML += "<br>After puchasing your new ability you stumble across an old arena.... I think I hear people inside<br>";
      add_output.innerHTML += "<br>Time to use your new abilities....<br>";
      add_output.innerHTML += "<br>You make a note of the arena on your map!<br>";
      unlocked_battle += 1;
    }
  }
  checkPlayerAbilities();

};
//<===== ARENA ======>

enemies = [
  { id: 0,
    name: "Evil Doggo",
    health: 50,
    power: 4,
    money: 30,
    strength: 1,
    speech: "Bork!"
  },
  
  { id: 1,
    name: "Pharon Loriso",
    health: 900,
    power: 10,
    money: 500,
    strength: 35,
    speech: "MUDA MUDA MUDA MUDA MUDA"
  },
  
  { id: 2,
    name: "Cextra",
    health: 120,
    power: 4,
    money: 25,
    strength: 3,
    speech: "Excuse me i'm lost..."
  },
  
  { id: 3,
    name: "Astra",
    health: 180,
    power: 3,
    money: 50,
    strength: 10,
    speech: "You must be defeated"
  }
];

//<========= BATTLE FUNCTIONS ===============>

var battleWorld = function (enemyID) {
    //checks player if they have less than 1 health, if so health = 0;
    player.hasHealth();
  
    var gameScreen = document.getElementById("game");
    gameScreen.innerHTML = "";
        
    //if user is in Battle
    if(player.inBattle && enemyID != undefined){
        
        userInBattle(enemyID);
        
    } 
    
    //if not in battle
    else {
        
        //creates holding [divs]
        let displaySelectScreen = function () {
            gameScreen.innerHTML += "<div id='select'>SELECT OPPONENT</div>";
            gameScreen.innerHTML += "<br /> <div id='opponentList'></div>"
        };
        displaySelectScreen();
        
        //generates opponent buttons and [inBattle] function
        let generateOpponents = function () {
            let opponentDiv = document.getElementById("opponentList");
            
            for(var i = 0; i<enemies.length; i++){
                opponentDiv.innerHTML += "<br /><br /><button style ='padding: 0.5em; 'onClick = 'inBattle("+enemies[i].id+")' class = 'enemyButtons'>"+enemies[i].name+"<br /> Level: "+enemies[i].health/10+"</button>";
            }
        };
        generateOpponents();
        
        inBattle = function (enemyID) {
            player.inBattle = true;
            
            //sends enemyID to battleworld();
            battleWorld(enemyID);
        
        }
    
        
    };
    
    //USER IN BATTLE
    userInBattle = function(enemyID){
        var gameScreen = document.getElementById("game");
        var enemy = enemies[enemyID];
        
        
        //creates battle screen;
        var displayBattleScreen = function () {
            gameScreen.innerHTML += "_BATTLE MODE_";
            gameScreen.innerHTML += "<div 'abilitiesAvailable'></div>";
        }
        displayBattleScreen();
        
        //display enemy information
        var displayEnemy = function (id) {
            gameScreen.innerHTML += "<br /><br />Fighting: " + enemy.name;
            gameScreen.innerHTML += "<br /><br /><div id = 'enemyHealthBar'></div>";
            gameScreen.innerHTML += "<div id = 'enemyHealth'></div>";
            gameScreen.innerHTML += "<br /> \"" + enemy.speech +"\"";
            
        }
        displayEnemy(enemyID);
        
        //display player information
        var displayPlayerInfo = function () {
            
            var createPlayerHealthBar = function (){
                gameScreen.innerHTML += "<div id = 'playerHealthBar'></div>";
                gameScreen.innerHTML += "player health";
                healthBar = document.getElementById("playerHealthBar");
                if(player.health > 0){
                healthBar.style.width = player.health+'%';
                } else {
                healthBar.style.width = 1 + '%';
                }
                healthBar.style.height = 2+'%';
                healthBar.style.borderRadius = '15px 15px'
                
                healthBar.style.margin = 'auto'
                
                healthBar.style.backgroundColor = 'lime';
                
                healthBar.style.display = 'block';
                
            }
            createPlayerHealthBar();
            
            
        };
        displayPlayerInfo();
        
        //creates [abilities buttons]
        var displayAbilitiesAvailable = function(){
        gameScreen = document.getElementById("game");
        gameScreen.innerHTML += "<br />";
          //creates enemy HealthBar here.... idk why
          var createEnemyHealthBar = function (){
            var enemyHealthBar = document.getElementById('enemyHealthBar');

            enemyHealthBar.style.height = 2+'%';
            enemyHealthBar.style.borderRadius = '15px 15px'

            enemyHealthBar.style.margin = 'auto'

            enemyHealthBar.style.backgroundColor = 'red';

            enemyHealthBar.style.display = 'block';
          }
          createEnemyHealthBar();

        for(var x in player.abilities){
            gameScreen.innerHTML += "  <button style = 'padding: 1em;' onClick = 'updateBattleInformation("+player.abilities[x].id+")'>"+player.abilities[x].name+"<br />Attack Damage: "+player.abilities[x].power+"</button>";
        }

        };
        displayAbilitiesAvailable();
        
        healthBar = {
            length: 50,
        }
        
        currentEnemyInfo = {
            health: enemies[enemyID].health,
            max_health: enemies[enemyID].health,
            power: enemies[enemyID].strength,
            
            money: enemies[enemyID].money,
            strength: enemies[enemyID].strength
        }
        
        //[ability buttons] -> gets the ability information;
        updateBattleInformation = function(abilityID){

            var playerDamage = abilityList[abilityID].power*(player.strength/10);
            var playerHealth = player.health;
            var max_health = currentEnemyInfo.max_health;

            
            var enemyHealth = currentEnemyInfo.health;
            var enemyPower = currentEnemyInfo.power;
            
            enemyHealth -= playerDamage; //updated enemy health
            
            playerHealth -= enemyPower; //updated player health
          
  
            
            //if ENEMY or PLAYER hit 0 health
            if(enemyHealth <= 0){
                playerWin(currentEnemyInfo.money, currentEnemyInfo.strength);
            } 
            else if (playerHealth <= 0){
                player.health = 0;
                playerLost();
            }
            
            
             //<------ ENEMY HEALTH BAR UPDATES -------->
            if(document.getElementById("enemyHealthBar")){
                         document.getElementById("enemyHealthBar").style.maxWidth = '100%';
            document.getElementById("enemyHealthBar").style.width = (enemyHealth/max_health)*100 + "%";
            }
            
            //<------ ENEMY HEALTH BAR UPDATES -------->
            
            
            currentEnemyInfo.health -= playerDamage;
            player.health = playerHealth;

            
            //<------ PLAYER HEALTH BAR UPDATES -------->
            if(playerHealth >= 0 && document.getElementById('playerHealthBar')){
            if(playerHealth){
            document.getElementById('playerHealthBar').style.width = player.health + '%';
            } else{
            document.getElementById('playerHealthBar').style.width = 1 + '%';
            }
            }
            //<------ PLAYER HEALTH BAR UPDATES -------->
            
            
            
            


        }
        
    }
    
    
    //player Win
    
    var playerWin = function (money, strength) {
        document.getElementById("game").innerHTML = "Congratulations you won! <br /> money: " + money + " - strength: " + strength;
        document.getElementById("game").innerHTML += "<br /> <button style='padding: 2em;' onClick = 'battleWorld()'>Return</button>";

   
        player.money += money;
        player.strength += strength;
        
        player.inBattle = false;
    };
    
    //player Lost
    var playerLost = function () {
        gameScreen = "";
      
        document.getElementById("game").innerHTML = "You lost...";
        document.getElementById("game").innerHTML += "<br/ ><button style ='padding: 1em;' onClick = 'battleWorld()'>Return</button>";
        
        player.inBattle =false;
        console.log("You lost");
    }

}

//<========= BATTLE FUNCTIONS ===============>


//STATS button
displayStats = function() {
  clearGameWindow();
  const hold = [];
  for (var i = 0; i < player.abilities.length; i++) {
    hold.push(" " + player.abilities[i].name)
  };

  output(
    "Name: " + player.name + "<br/>" +
    "Strength: " + player.strength + "<br>" +
    "Money: " + player.money + "<br>" +
    "Health: " + player.health + "<br />"+
    "Abilities: " + hold
  );
};

//clears text from game
var clearGameWindow = function() {
  document.getElementById("game").innerHTML = "";
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
        for(var x in player.abilities){
          if(player.abilities[x].id == abilityList[id].id){
            //break is here so console doesn't log (can't property undefined);
            return false;
            break;
          }
        }
        return true;
      };
      checkMoney = function () {
        if(player.money < abilityList[id].cost){
          return false;
        }
        return true;
      }
      
      
      if(!checkIfOwned()){
        
        warning.innerHTML = "Sorry, you already own " + abilityList[id].name;
        allGood.innerHTML = "";
        
      } else if (!checkMoney()) {
        warning.innerHTML = "Sorry you don't have enough money to purchase " + abilityList[id].name;
        allGood.innerHTML = "";
      }
      else {
        //displays green text
        allGood.innerHTML = "You purchased " + abilityList[id].name
    
        //player.money - ability cost
        player.money -= abilityList[id].cost;   
        
        //money updates
        shopMoney.innerHTML = "Money : " + player.money;
      
        //ability bought will push to player abilities
        player.abilities.push(abilityList[id]);
      }
      
      
    }
    
    //creates health Div and everything health display goes here
    var displayHealthShop = function () {
      game.innerHTML += "<div id = 'healthUpdate'>Health: " + player.health + "</div>";
      game.innerHTML += "<br /><div id = 'healShop'></div>";
      var healthDiv = document.getElementById('healShop');
           
      healthDiv.innerHTML += "<button style = 'font-family: monospace; padding: 0.2em;' onclick='buyHealth(25, 5)'>Heal: 25 Health<br />Cost: 5 Money</button>";
      
      healthDiv.innerHTML += "   <button style = 'font-family: monospace; padding: 0.2em;' onclick='buyHealth(50, 10)'>Heal: 50 Health<br />Cost: 10 Money</button>";
      
      healthDiv.innerHTML += "   <button style = 'font-family: monospace; padding: 0.2em;' onclick='buyHealth(100, 30)'>Heal: 100 Health<br />Cost: 30 Money</button>";
      
         if(player.health >= 100){
        document.getElementById('healShop').style.display = "none";
      }
      
    }
    displayHealthShop();
    
    
    
    
  }
  
  //buy health
  buyHealth = function (health, cost) {
      //check if player has max health, or no health
    //located if(player.location === 'theshop')--> first (if);
    
    //so many IF statements :'( just lazy r/n
    
    //if money and doesn't exceed health -> runs
    if((player.health+health) <= 100 && player.money >= cost){
      
      player.health += health;
      player.money -= cost;
      
      
      document.getElementById('allGood').innerHTML = "Health +" + health;
      document.getElementById('healthUpdate').innerHTML = "Health: " + player.health;
      
    }
    //if player has less money or health
    else {
      //less money
      if(player.money < cost){
        document.getElementById('warning').style.color = 'red';
      document.getElementById('warning').innerHTML = "<br />Money: " + player.money + " - purchase something less than " + cost + " money...";
      } 
      //less health
      else{
      document.getElementById('warning').style.color = 'red';
      document.getElementById('warning').innerHTML = "<br />Health: " + player.health + " - purchase something less than " + health + " health...";
      }
    }
    
    }
  
};

// <================== MARKET FUNCTIONS ======================>

// <================== ABILITIES ==================>
let Ability = function(id, name, type, power, staminaCost, cost, text) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.power = power;
  this.staminaCost = staminaCost;
  this.cost = cost;
  this.text = text; 
  
  this.checkStamina = function () {
    if(player.stamina < this.stamina_cost){
      console.log("Sorry you don't have enough power to use this!");
      this.power = 0;
    };
  }
};

abilityList = [
//(ID, name, type, power, stamina_cost, cost, text)
new Ability(0, "Fire Ball", "fire", 10, 3, 15, "You shot a fireball!"),
new Ability(1, "Ice Spear", "ice", 10, 2, 15, "You shot a spear of ice!"),
  new Ability(2, "Rock Fist", "earth", 12, 5, 20, "*rock noises*"),
  new Ability(3, "Spikey Gloves", "item", 20, 10, 40, "*Spikey rubber noises*"),
  new Ability(4, "A Stick", "item", 40, 1, 45, "*wack wack wack*")
  ];


// <================== OCCUPATIONS ==================>
// just playing with a filter function for later use ... 
console.log ("Filter test here");
const occupation = ['Farmer', 'Rancher', 'Tavern Owner', 'Preacher'];
let occupation01;
occupation01 = occupation.filter(occupation => occupation.length <=10);
console.log (occupation01);

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
const cornProducts = [
  {name: "Corn Bread", productionTime: 2}, //in hours
  {name: "Corn Meal Mush", productionTime: 1.5}, //in hours
  {name: "Corn Flour", productionTime: 0.5}, //in hours
  {name: "Corn Liquor", productionTime: 15}, //in hours
  {name: "Corn Feed", productionTime: 0.25}, //in hours
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


/*

TO DO:

  user
    travel [overworld, shop, battle]
      * overworld -
        -as player gets stronger, unlocks new areas.
        -Final area - fight boss (win the game...){user gets a new stat?}
      
      * shop - purchase abilities
        -money count
        -strength count
        
      * battle
        -enemies
          - health
          - abilities
          - strength * abilities
          
        -battle mode
            -conditions(win/lose)
              -if win user gets money + stats
        
    Goal: Functional Javascript Text RPG with HTML (like playable status)

*/

document.getElementById('game').style.overflow = 'hidden';