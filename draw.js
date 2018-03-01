var c = document.getElementById("svg");
var bstop = document.getElementById("stop");
var bcircle = document.getElementById("circle");
var bsquare = document.getElementById("square");

var requestID = 0;
var r = 0;
var a = 1;

var directionx = Math.floor(Math.random() * 20) - 10;
var directiony = Math.floor(Math.random() * 20) - 10;
var posx = 250;
var posy = 250;

var stopped = false;
var started = false;
var expanding;

var animatec = function(){
	started = true;
	expanding = true;
	stopped = false;
	bstop.innerHTML = "stop";
	animationc(true);
}

var animationc = function(bool){
	pause();
	if (bool){
		r = 0;
	}
    else {
        
    }
	var draw = function(){
		findRadius();
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
        var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c1.setAttribute("cx", 250);
        c1.setAttribute("cy", 250);
        c1.setAttribute("r", r);
        c1.setAttribute("stroke", "#FFFFFF");
        c1.setAttribute("fill", "lightsteelblue");
        svg.appendChild(c1);
	}
    requestID = setInterval(draw, 16);
	draw();
}

var findRadius = function(){
	if (r == 0){
		a = 1;
	}
	else if (r == 250){
		a = -1;
	}
	r += a;
}

var animates = function(){
	started = true;
	expanding = false;
	stopped = false;
	bstop.innerHTML = "stop";
	animations(true);
}

var animations = function(bool){
	pause();
	if (bool){
		directionx = Math.floor(Math.random() * 20) - 10;
		directiony = Math.floor(Math.random() * 20) - 10;
		posx = 250;
		posy = 250;
	}
	var draw = function(){
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
        var r1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        r1.setAttribute("x", posx);
        r1.setAttribute("y", posy);
        r1.setAttribute("width", 20);
        r1.setAttribute("height", 20);
        r1.setAttribute("stroke", "#FFFFFF");
        r1.setAttribute("fill", "lightsteelblue");
        svg.appendChild(r1);
		posx += directionx;
		posy += directiony;
		if (posy <= 0 || posy + 20 >= 500){
			directiony = -1 * directiony;
		}
		if (posx <= 0 || posx + 20 >= 500){
			directionx = -1 * directionx;
		}
	}
    requestID = setInterval(draw, 16);
	draw();
}

var stop = function(){
	if (started){
		if (stopped) {
			restart();
			bstop.innerHTML = "stop";
		}
		else {
			pause();
			bstop.innerHTML = "continue";
		}
		stopped = !stopped;
	}
}

var pause = function(){
	clearInterval(requestID);
}

var restart = function(){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
	if (expanding){
		animationc(false);
	}
	else {
		animations(false);
	}
}

bstop.addEventListener('click', stop);
bcircle.addEventListener('click', animatec);
bsquare.addEventListener('click', animates);