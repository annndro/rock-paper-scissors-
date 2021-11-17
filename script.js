//start game - button
event.preventDefault();
document.getElementById("start").style.display="none";
document.getElementById("start").addEventListener("click",mainGame());

function mainGame(){
//declare & initialize variables
var rounds=3;
var userResult=0;
var PCResult=0;
var userResultTotal=0;
var PCResultTotal=0;
var i=1;
var winner="";
var player_1="PC";
var player_2=prompt("Hello new player! What's your name?");
alert("Welcome to the game, "+player_2+ " ! You have "+rounds+" rounds");

//main loop - rounds

for(i=1;i<=rounds;i++){
alert("ROUND: "+i+", let's go!");
//generate move for player_2
var userChoice=prompt("Do you choose rock, paper or scissors?");
alert("You chose "+userChoice);
//generate move for player_1
var PCChoice=Math.floor(Math.random()*3+1);
	if (PCChoice==1){
		alert("PC chose paper");
	}
	else if(PCChoice==2){
		alert("PC chose rock");
	}
	else{
		alert("PC chose scissors");
	}

	//if user chose rock:
	if (userChoice=="rock"){  
		if (PCChoice==2){  //PC chose rock
			userResult=userResult;
			PCResult=PCResult;
			rounds=rounds+1;
			alert("It's a tie!");
		}
		else if (PCChoice==1){
			userResult=userResult;
			PCResult=PCResult+1;
			rounds=rounds+1;
			alert("You lost this round!");
		}
		else if (PCChoice==3){;
			userResult=userResult+1;
			PCResult=PCResult;
			rounds=rounds+1;
			alert("You win this round! Keep it up:)");
		}
	}
	//if user chose paper:
	if (userChoice=="paper"){  
		if(PCChoice==2){   //PC chose rock
			userResult=userResult+1;
			PCResult=PCResult;
			rounds=rounds+1;
			alert("You win this round! Keep it up:)");
		}
		else if (PCChoice==1){  //PC chose paper
			userResult=userResult;
			PCResult=PCResult;
			rounds=rounds+1;
			alert("It's a tie!");
		}
		else if (PCChoice==3){  //PC chose scissors
			userResult=userResult;
			PCResult=PCResult+1;
			rounds=rounds+1;
			alert("You lost this round!");
		}
	}
	//if user chose scissors:
	if (userChoice=="scissors"){  
		if(PCChoice==2){  //PC chose rock
			userResult=userResult;
			PCResult=PCResult+1;
			rounds=rounds+1;
			alert("You lost this round!");
		}
		else if (PCChoice==1){  //PC chose paper
			userResult=userResult+1;
			PCResult=PCResult;
			rounds=rounds+1;
			alert("You win this round! Keep it up:)");
			}
		else if (PCChoice==3){  //PC chose scissors
			userResult=userResult;
			PCResult=PCResult;
			rounds=rounds+1;
			alert("It's a tie!");
		}
	}
	//error handling
	else if (userChoice!="rock" && userChoice!="paper" && userChoice!="scissors"){
		alert("your move is not valid, try again");
	}
	if (i===3){
		break;
	}
}
//calculate results
userResultTotal = userResultTotal + userResult;
PCResultTotal = PCResultTotal + PCResult;

//determine who is the ultimate winner :)
if (userResultTotal==PCResultTotal){
	winner="Nobody won and nobody lost:)"
}
else if (userResultTotal>PCResultTotal){
	winner=player_2;
}
else {
	winner=player_1;
}	
	
//display results on the website
document.getElementById("initialImage").src="Images/giorgio-trovato-_XTY6lD8jgM-unsplash.jpg";
document.getElementById("yourScore").innerHTML=userResultTotal;
document.getElementById("Pcscore").innerHTML=PCResultTotal;
document.getElementById("winner").innerHTML=winner;
}

	
	
	
