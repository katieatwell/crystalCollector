
//Global variables
var randNum;
var total = 0;
var c1;
var c2;
var c3;
var c4;
var win = 0;
var loss = 0;
var compNum;

//randomly generate number with min and max values (so it can be used for computer choice displayed and crystals)
function genNum (randMin, randMax) {
	return [Math.floor(Math.random() * (randMax - randMin) + randMin)];
};

$(document).ready(function() {
//Display computer's choice
function displayNum () {
	compNum = genNum(30,140);
	document.getElementById("compNum").innerHTML = compNum;
};

//Click on each image to add to user total
$(".crystal").click (function() {
	total = parseInt($(this).val()) + total;
	$("#total").html("Crystal Counter: " + total);
	displayScore();
});

//Counters that display wins and losses for user
function displayScore () {

	if (total == compNum) {
		win ++;
		document.getElementById("win").innerHTML = "Wins:" + win;
		reset();
	}

	if (total > compNum) {
		loss ++;
		document.getElementById("loss").innerHTML = "Losses:" + loss;
		reset();
	}
};

//reset game upon each win and loss
function reset () {
	for (i=1; i<=4; i++) {
		$("#c" + i).val(genNum(2,12));
	}
	// genNum();
	displayNum();
	total = 0;
	document.getElementById("total").innerHTML = "Crystal Counter: 0"; 
};

reset();
displayNum ();

});
