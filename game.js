 var readline = require('readline');

var readlineThing = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var game = {
    start: function() {
        initialize();
    },
    restart: function() {
        game.start();
    }
}


function initialize() {
    readlineThing.question("What is your name? ", function(answer) {
        Name(answer);
        console.log('Hi there ' + answer + ", welcome to the game!")
        askClass();
    })
}


function askClass() {
    readlineThing.question("Choose your class: (Mage, Warrior, Thief) ", function(answer) {
        chooseClass(answer);
        askGender();
    })
}

function askGender() {
    readlineThing.question("Choose your gender: ", function(answer) {
        gender(answer);
         readlineThing.close();
      
    })
}

var enemies = {
    finalBoss: {
    name: "Alan",
    health: 100,
    skill: {
        attack: function() {
            console.log("get rekt scrub, mlg 360 no scope");
            Player.health = Player.health - 10;
        },
        taunt: function() {
            console.log("go home noob");
            }
        }
    },
    ogres: {
        name: "Rejected One",
        health: 20,
        skill: {
            attack: function() {
                console.log("get Shrekt")
                Player.health = Player.health - 5;
            },
            ogreFood: function() {
                console.log("Bweakfast")
                enemies.ogre.health = enemies.ogre.health + 2
            }
        }
    }
}
var location = {
   
   town: {
     name: "da village of derp",
        NPC: [], 
        monsters: null
   },
   woods: {
        NPC: [],
        Monsters: enemies.finalBoss

   }
}

var Player = {
    name: "Alan",
    race: "Human",
    class: "Mage",
    gender: "Male",
    health: 20,
    currentLocation: location.town,
    currentEnemy: null,
    skill: {
        1: null,
        2: null,
        3: null
    },
    eat: function() {
        if (Player.health == 19) {
            health = 20;
        } else if (Player.health == 20) {
            console.log("You are on full health. Stop eating.");
        } else {
            health = health + 2;
        }
    }
}

var currentLocation = location.town; 

function Name(answer) {
    Player.name = answer;
}

function gender(answer) {
    Player.gender = answer;
}

function chooseClass(answer) {
    Player.class = answer;
    Player.skill["1"] = function() {
        console.log("Take this @#%!@#@!#!@!");
        finalBoss.health = finalBoss.health - 10;
    }
     if(Player.class.toLowerCase()=="mage") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Eat fire");
            finalBoss.health = finalBoss.health - 20;
        }
        Player.skill["3"] = function() {
            console.log("I haz more health");
            if (Player.health > 10) {
                Player.health = 20;
            } else {
                Player.health = Player.health + 10;

            }
        }
        askGender();
    } else if(Player.class.toLowerCase()=="thief")  {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Stabby stab stab");
            finalBoss.health = finalBoss.health - 20;
        }
        Player.skill["3"] = function() {
            console.log("Eat my arrow");
            finalBoss.health = finalBoss.health - 15;
        }
        askGender();
    } else if(Player.class.toLowerCase()=="warrior") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Shanking intensifies");
            finalBoss.health = finalBoss.health - 10;
            console.log("Shanking intensifies");
            finalBoss.health = finalBoss.health - 10;
        }
        Player.skill["3"] = function() {
            console.log("This skill is a placeholder. It does nothing.");
        }
        askGender();
    } else {
        readlineThing.question("Please enter a valid class: ", function(answer) {
            chooseClass(answer);
        })
    }
}
function wait(ms) {
    var start = new Date().getTime();
    for (var end = start; end < start + ms;) {
        end = new Date().getTime();
        console.log(end)
    }
}


game.start();
