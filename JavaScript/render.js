var width = 800;
var height = 500;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function clears() {
	ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
}
function render() {
	clears();

	for(var i = 0; i<length*(30-speed*10); i++) {
		if(Math.floor(i%(30-speed*10))==0) drawBody(partx[i],party[i]);
	}

	ctx.closePath();
	drawBody(feedx, feedy);
}

function drawBody(x, y) {
	ctx.fillStyle='#FF00FF';
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2, true);
	ctx.fill();
}