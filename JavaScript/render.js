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


	for(var i in partx)
	drawBody(partx[i],party[i], '#C8A944');
	
	drawBody(feedx, feedy, '#FF0000');
}

function drawBody(x, y, c) {
	ctx.fillStyle=c;
	ctx.arc(x, y, 10, 0, Math.PI*2, true);
	ctx.fill();
}