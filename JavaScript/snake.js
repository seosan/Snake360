var center_x = 400;
var center_y = 250;
var x=300, y=250;
var direction = 10;

var feedx = 0;
var feedy = 0;

var partx = new Array(150);
var party = new Array(150);
partx[0] = x;
party[0] = y;

var keyinput = 0;
var keyvalue;
var timer_move = setInterval(move, 8);
var timer_key;

function init() {
	feed();
}


//control
document.body.onkeydown = function( e ) {
	document.all("maintext").innerHTML="pressed";
    keyinput = 1;
    keyvalue = e.keyCode;

	clearInterval(timer_key);
    timer_key = setInterval(keyPress, 20);
   
};
document.body.onkeyup = function( e ) {
	document.all("maintext").innerHTML="upped";
	keyinput = 0;
	clearInterval(timer_key);
};

function feed() {
	feedx = Math.random()*800;
	feedy = Math.random()*500;
}

function move() {

	for(var i in partx) {
		partx[i] -= Math.cos(direction * Math.PI/180)*1;
		party[i] += Math.sin(direction * Math.PI/180)*1;
	}
	
	checkeat();
	render();

}

function keyPress() {
	if(keyinput)
	{
	 switch(keyvalue) {
	    	case 37 :
	    		turnleft();
	    		break;
	    	case 39 :
	    		turnright();
	    		break;
    	}
	}
}

function turnleft() {
	direction += 5;
}
function turnright() {
	direction -= 5;
}

function checkeat() {
	if(Math.sqrt(Math.pow(partx[0]-feedx)+Math.pow(party[0]-feedy))<10)
		addbody();
}