//JS file to create a Ship in the HTML canvas
function Ship() {
    //the 'this' keyword references the current object you are inside of (in th code block) EVERYTHING in Javascript is in object SO when we say 'this' we are talking about Ship()
    this.x = 100 //x-axis coord start posittion
    this.y = 100 //y-axis coord start posittion
    this.color = "black" //outline color
    this.fillStyle = + "orange" //interior color
    //velocity variable for the x and y axis
    this.vx = 0
    this.vy = 0
    //acceleration variables for the x and y axis
    this.ax = 1
    this.ay = 1
    //function "move" that add velocity to the position of the ship
    this.move = function () {
        this.x += this.vx //adds veloccity value to x coord point
        this.y += this.vy //adds veloccity value to y coord point
    }
    //Draw the ship
    this.draw = function() {
        /*//save the currrent state of the canvas
        context.save()
        //move the point of origin 0,0
        context.translate(this.x, this.y)
        //DRAW THE SHIP
        context.lineStyle = this.color
        context.fillStyle = this.fillStyle

        context.beginPath()
        //draw the triangle! (ship)
        context.moveTo(25,0)
        context.lineTo(-25,25)
        context.lineTo(-25,-25)

        context.closePath()
        
        context.stoke()
        context.fill()
        context.restore()
        */
       //images as the ship (X-Wing)
        var imageObj = new Image()
        imageObj.src = "images/NyanCat.png" //PNG FOR TRANSPARENCY
        //Save the current state of the canvas
        context.save()
        //move the point of origin 0,0 to the ship's starting x and y coords
        context.translate(this.x,this.y)
        //draw the image to the canvas context
        //drawImage(image, x coord of the top left corner, y coord of the top left corner, width of image, height of image)
        context.drawImage(imageObj, -100, -50, 200, 100)
        context.restore()


    }//Ship.draw()
}//ship()