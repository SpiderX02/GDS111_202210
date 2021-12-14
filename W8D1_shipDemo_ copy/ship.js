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








//This is the teachers coding, not mine
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
var numAsteroids = 20
var asteroids = []
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0

//utility functions
function randomRange(high, low){
    return Math.random() * (high-low) + low
}

function gameStart(){
    //For Loop to create the instances of Asteroids
    for(var i = 0; i < numAsteroids; i++){
        asteroids[i] = new Asteroid()
    }

    //Create an instance of the PlayerShip
    ship = new PlayerShip()
}
//Constructor Function for Asteroid Class
function Asteroid(){
    this.radius = randomRange(15,2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(10, 5)
    this.color = "white"

    this.drawAsteroid = function(){
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()

    }
}
//Setup Keyboard Event Handlers 
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e){
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
            ship.down = true
        }
    }

    if(gameOver){

        //checking for spacebar
        if(e.keyCode == 32){
            if(currentState == 2){
                //game over screen reatarts game
                currentState = 0
                //resets number of asteroids
                numAsteroids = 20
                //empties asteroids array
                asteroids = []
                //resets score
                score = 0
                gameStart()
                main()
            }
            else{
                //main screen starts game 
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")

            }
            
        }
    }
    
}

function pressKeyUp(e){
    if(!gameOver){
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
            ship.down = false
        } 
    }
    
}

//constructor function
function PlayerShip(){
    this.x = canvas.width/2
    this.y = canvas.height/2
    this.w = 20
    this.h = 20
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 30

    this.drawShip = function(){
       ctx.save()
        ctx.translate(this.x, this.y)
        if(this.up || this.left || this.right){
            ctx.save()
            //Changes the drawing values to animate the flame
            if(this.flamelength == 30){
                this.flamelength = 20
                ctx.fillStyle = "yellow"
            }else{
                
                this.flamelength = 30
                ctx.fillStyle = "orange"
            }
            ctx.beginPath()
            ctx.moveTo(0, this.flamelength)
            ctx.lineTo(5,5)
            ctx.lineTo(-5,5)
            ctx.lineTo(0,this.flamelength)
            ctx.closePath()
            ctx.fill()
            ctx.restore()

        }
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill();
        ctx.restore() 
    }

    this.move = function(){
        this.x += this.vx
        this.y += this.vy

        //bottom boundary of screen
        if(this.y > canvas.height - this.h/2){
            this.y = canvas.height - this.h/2
            this.vy = 0
        }
        //top boundary of screen
        if(this.y < this.h/2){
            this.y = this.h/2
            this.vy = 0
        }

        //right boundary of screen
        if(this.x > canvas.width - this.w/2){
            this.x = canvas.width - this.w/2
            this.vx = 0
        }
        //left boundary of screen
        if(this.x < this.w/2){
            this.x = this.w/2
            this.vx = 0
        }
    }
      
}

//Main Screen
gameStates[0] = function(){
    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2-30)
    ctx.font = "15px Arial"
    ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2 + 20)
    ctx.restore()

}

//Game Screen
gameStates[1] = function(){
    //code for displaying score
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //Vertical 
    if(ship.up){
        ship.vy = -10
    }else{
        ship.vy = 3
    }
    
    //Horizontal Movement
    if(ship.left){
        ship.vx = -3
    }else if(ship.right){
        ship.vx = 3
    }else{
        ship.vx = 0
    }

    //Loops through all asteroids and can check their position
    for(var i = 0; i < asteroids.length; i++){
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX*dX)+(dY*dY))

        if(detectCollision(distance, (ship.h/2 + asteroids[i].radius))){
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()
            
        }


        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) -  canvas.height
        }
        if(!gameOver){
            asteroids[i].y += asteroids[i].vy
            asteroids[i].drawAsteroid()
        }
    }
    if(!gameOver){
        ship.move()
        ship.drawShip()
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())
    }
}

//Game Over
gameStates[2] = function(){
    if(score > highScore){
        //set a new high score
        highScore = score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your high score score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your new high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.fillText("New Record", canvas.width/2, canvas.height/2)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()

    }else{
        //keep same score new high score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()
    }
    
   
}

function main(){
    //clear canvas 
    //shipY-=1
    ctx.clearRect(0,0,canvas.width, canvas.height)

    gameStates[currentState]()

    if(!gameOver){
        timer = requestAnimationFrame(main)
    }
    
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance
}

//Timer for Score
function scoreTimer(){
    if(!gameOver){
        score++
        //using modulus  that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 5 == 0){
            numAsteroids += 5
            console.log(numAsteroids)
        }

        setTimeout(scoreTimer, 1000)
    }


}












//This is my coding \/

//Week 9 - Asteroid Avoidence "shell" build
//set up starting elements (necessary)
var c = document.querySelector('canvas');
var context = c.getContext("2d");
var timer = requestAnimationFrame(main);
var gravity = 1;
var asteroids = new Array();
var numAsteroids = 10;
var gameOver = false;
var score = 0;


function randomRange(high, low){
    return Math.random() * (high-low) + low;
}

//Class for the Asteroids
function Asteroid(){
    this.radius = randomRange(10,2);
    this.x = randomRange(c.width - this.radius, 0 + this.radius);
    this.y = randomRange(c.height - this.radius, 0 + this.radius) - c.height;
    this.vx = randomRange(-5, -10);
    this.vy = randomRange(10,5);
    this.color = "white";

    this.draw = function(){
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
        context.closePath();
        context.fill();
        context.restore();
    }
}

//for loop to create the intances of the asteroids
for(var i = 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid();
}

//Class for the player ship
function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 20;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30;

    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        //this drws the flame behind the ship
        if(this.up == true){
            context.save();
            //adjust the flame length for a flicker effect
            if(this.flamelength == 30){
                this.flamelength = 10;
            }
            else{
                this.flamelength = 30;
            }
            context.fillStyle = "orange";
            context.beginPath();
            context.moveTo(0, this.flamelength);
            context.lineTo(5, 5);
            context.lineTo(-5, 5);
            context.lineTo(0, this.flamelength);
            context.closePath();
            context.fill();
            context.restore();
        }
        context.beginPath();
        
        context.fillStyle = "red";
        context.moveTo(0, -13);
        context.lineTo(10, 10);
        context.lineTo(-10, 10);
        context.lineTo(0, -13);
        context.closePath();
        context.fill();

        context.restore();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        
        //adds boundaries and keeps ship on the screen
        if(this.y > c.height - 20){
            this.y = c.height - 20;
            this.vy = 0;
        }
        //check to see if we are past the top of the canvas
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0;
        }
        //check to see if we are past right 0r left side of canvas
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0;
        }
        //left side
        if(this.x < 0 + 10){
            this.x =  10;
            this.vx = 0;
        }
    }
}

//create the instance of the ship for the game
var ship = new PlayerShip();

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e){
    //console.log("Key Down " + e.keyCode);
    if(e.keyCode === 38){
        ship.up = true;
    }
    if(e.keyCode === 37){
        ship.left = true;
    }
    if(e.keyCode === 39){
        ship.right = true;
    }
    
}

function keyPressUp(e){
    //console.log("Key Up " + e.keyCode);
    if(e.keyCode === 38){
        ship.up = false;
    }
    if(e.keyCode === 37){
        ship.left = false;
    }
    if(e.keyCode === 39){
        ship.right = false;
    }
}


function main(){
    context.clearRect(0,0, c.width, c.height);

    //display score
    context.save();
    
    context.font = "15px Arial"
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30);
    context.restore();

    //ship.vy += gravity;

    if(ship.up == true){
        ship.vy = -10;
    }
    else{
        ship.vy = 3;
    }

    if(ship.left == true){
        ship.vx = -3;
    }
    else if(ship.right == true){
        ship.vx = 3;
    }
    else{
        ship.vx = 0;
    }

    for(var i = 0; i<asteroids.length; i++){
        //using the distance formula to find distance between ship and asteroid
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var dist = Math.sqrt((dX*dX)+(dY*dY));
        
        //checks for collision with asteroid and ends game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
           // console.log("We collided with Asteroid " + i);
            gameOver = true;
            document.removeEventListener('keydown', keyPressDown);
            document.removeEventListener('keyup', keyPressUp);
        }

        //checks to see if asteroid ios off screen
        if(asteroids[i].y > c.height + asteroids[i].radius){
            //reset steroids position off screen 
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius)-c.height;
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius);
        }
        if(gameOver == false){
            asteroids[i].y += asteroids[i].vy;
        }
        asteroids[i].draw();
    }

    ship.draw();
    if(gameOver == false){
      ship.move();  
    }
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }

    timer = requestAnimationFrame(main);
}

function scoreTimer(){
    if(gameOver == false){
        score++;
        //console.log(score);
        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
        }

        setTimeout(scoreTimer,1000);
    }
}
scoreTimer();

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}