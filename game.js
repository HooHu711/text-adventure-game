
var readline = require('readline');

var readlineThing = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

readlineThing.question("what is your name ", function(answer){
console.log('Hi there ' + answer + ", welcome to the game!")
readlineThing.close();
})

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

console.log(finalBoss)



//Name
//Race
//Class
//Health
