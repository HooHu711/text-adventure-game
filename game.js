var game = {
	start: function() {
		var readline = require('readline');

		var readlineThing = readline.createInterface({
		    input: process.stdin,
		    output:process.stdout
		});

		readlineThing.question("what is your name ", function(answer){
		console.log('Hi there ' + answer + ", welcome to the game!")
		readlineThing.question("Choose your class! (Mage, Thief, Warrior)\n", function(answer){
 		chooseClass(answer)
		console.log(Player)
		readlineThing.close()
		})
	})


		

	},
	restart: function(){
		game.start();
	}
}

//console.log("This Game works!");

var Player = {
	Name: "Leo",
	Race: "Human",
	Class: "Warrior",
    Gender: "male",
    Health: 20,
    skill: {
    	1: null,
    	2: null,
    	3: null
    },
    eat: function () {
	if (Player.health == 19){
		health = 20;
	} else if (Player.health == 20) {
		console.log("you are on full health. Stop eating.");
	} else {
		health = healh + 2
		//Name
//Race
//Class
//Health
	

	}
		}

			}

console.log (Player);

var finalBoss = {
	name: "GangsterLifeJunior",
	health: 100,
	skill: {
		attack: function() {

			console.log(" Get rekt scrub,hehehehehehehe :-)")
			Player.health = PLayer.health - 10
		},
		taunt: function() {
			console.log("go home noob");
		}
	}
}
function chooseClass(answer) {
  Player.class = answer;
  Player.skill["1"] = function() {
    console.log("Take this @#%!@#@!#!@!");
    finalBoss.health = finalBoss.health - 10;
  }
  if (Player.class == "Mage") {
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
  } else if (Player.class == "Thief") {
    //Player.health = 10;
    Player.skill["2"] = function() {
      console.log("Stabby stab stab");
      finalBoss.health = finalBoss.health - 20;
    }
    Player.skill["3"] = function() {
      console.log("Eat my arrow");
      finalBoss.health = finalBoss.health - 15;
    }
  } else if (Player.class == "Warrior") {
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
  }
}


game.start()




