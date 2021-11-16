//define a variable to acces canvas properties by id name from HTML
var canvas = document.getElementById("canvas")

//define the drawing the context of the element
var ctx = canvas.getContext("2d") //canvas var is the object

//create a new image to eventually add to the canvas (this is instead of using <img> in html doc)
var galaxy = new Image()

//galaxy is now an image object and we can access any of the image attributes (properties) that we might need
galaxy.src = "images/galaxy.jpeg" //we can access .src because galaxy is an image object!

//now, "write" the image to the canvas page! An event must occur for this to happen...
galaxy.onload = function() {
    //drawing an image to the canvas
    //context.drawImage(imgObject, x, y, width, height)
    ctx.drawImage(galaxy, 0, 0, 800, 600)

    //draw a rectangle
    //start with styling choices
    ctx.fillStyle = "rgb(0,0,255)" //The solid fill of the shape
    ctx.stokeStyle = "white"       //The outline color
    ctx.lineWidth = "5"            //Width, in pixels, of the stoke
    //use
    ctx.fillRect(30, 30, 100, 100) //context.firmRect (x, y, width, height)
    ctx.stokeRect(30, 30, 100, 100) //context.strokeRect(x, y, width, height)

    //draw a line

    //first need to move the "drawing cursor" to the starting point (x, y) of the line
    ctx.moveTo(0,0) //Start Postion
    ctx.lineTo(800,600) //End position

    ctx.stoke()

    ctx.moveTO(800,0)
    ctx.lineTo(0,600)

    ctx.stoke()

    ctx.beginPath()
    ctx.arc(400,300,50,0(2 * Math.PI) / false)
    ctx.lineTo(450, 250)
    ctx.closePath()
    ctx.fill()

    //draw irregular shape!
    //set up the styling first!
    ctx.fillStyle = "#55ddef"
    ctx.stokeStyle = "yellow"
    ctx.lineWidth = "2"

    ctx.beginPath()
    ctx.moveTO(650,100)
    ctx.lineTo(700,140)
    ctx.lineTo(675,200)
    ctx.lineTo(625,200)
    ctx.lineTo(600,140)
    ctx.closePath()
    ctx.fill()
    ctx.stoke()

    //draw another image to the canvas
    var mario = new Image()
    //limks to sorce
    mario.src = "images/mario.png"

    mario.onload = function () {
        ctx.drawImage(mario, 600, 300, 40, 80)
    }
}