//JS file that runs the game and connects the functionality of ship.js and controls.js to the html

var canvas
var context
//variable for the animation timer
var timer

var ship //the ship!

var friction //slows down velocity

//function to ready the canvas and starting postioning of the ship
$(document).ready(function(e) {
    //assign the canvas element to the canvas var
    canvas = $("#canvas")//jQuery version of document.getElementById("#canvas")
    context = canvas.get(0).getContext("2d")

    ship = new Ship() //ship() was defined in ship.js
    //friction and power
    friction = 0.95
    ship.power = 1
    timer = setInterval("animate();", 33) //33 frames per second?
})//end of ready()

//Let's do stuff!
function animate() {
    context.clearRect(0,0, canvas.width(), canvas.height())
    //check to see if the keyCode values are up or down
    if(up) { //if the current value of 'up' is TRUE
        //when up key is TRUE (which means we are pressing the key down)
        ship.vy -= ship.ax * ship.power
        //line 39 same as: ship.vy = ship.vy - (ship.ax * ship.power)
        //ship's velocity of y axisis lowered by its current acceleration and power
    }

    if(down) {
        ship.vy += ship.ax * ship.power
    }

    if(right) {
        ship.vx += ship.ax * ship.power
    }

    if(left) {
        ship.vx -= ship.ax * ship.power
    }
    //apply friction to the velocity -- realistic slow down, speed increases are never constent
    ship.vx *= friction
    ship.vy *= friction
    //move and redraw the ship! .functions() are from ship.js [ship()]
    ship.move()
    ship.draw()

    if(ship.x > canvas.width() + 25) {
        //if the current ship x coord is greater than (beyond) the canvas width + 25 (size of the ship)
        //move ship x coord t
        ship.x = -25
    }
    //If ship leaves left edge of canvas, returns at right edge
    if(ship.y > canvas.height()+ 25) {
        ship.y = -25
    }

    if(ship.x<0-25) {
        ship.x = 825
    }

    if(ship.y<0-25) {
        ship.y = 825
    }
}// close of animate()