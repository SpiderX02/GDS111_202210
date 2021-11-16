//RPS Part 1 Javascript -- W6D1 class

var pics = new Array() //create an empty array

//assign values to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array nme + index gives access to the indiv value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array()

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

//create array holding the button element
//document.querySelectorAll grabs all of one element type
var btn = document.querySelectorAll("button")

//check your stored data in the console!
console.log(btn) //used for testing, requires the dev tools

//make the butttons clickable and runnable ALSO for the game
//add event listeners to each buttton
btn[0].addEventListener("click", function (e) {play(0)})
btn[0].addEventListener("click", function (e) {play(1)})
btn[0].addEventListener("click", function (e) {play(2)})

//arrays that store the player & computer options (one array for each)
//player ID - pId
var pId = new Array("rock_p", "paper_p", "scissors_p")
//pId[1] = "paper_p"
//Computer ID - cID
var cId = new Array("rock_c", "paper_c", "scissors_c")

//create a function that will swap the regular images with the highlighted ones (series 2 pics)
function swap(id, image) {
    //access the image elements by ID from the HTML document
    document.getElementById(id).src = image
}
//play function
function play(id) {
    console.log("play!", id)
    //swap() CALLS the function --> this gets its code to run!
    //values supplied inside of () are passed into the parameter varibles
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])
    //cId
    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])
    //store the game choices to variables (player & comp)
    var p_choice = id
    
    //randomize the computers's choices! math.floor 
    var c_choice = Math.floor(Math.random() * 2.9)
    //swap the starting images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])

    switch(p_choice) {

        case 0://case for when p_choice == 0
            if(c_choice == 0) {//comp is rock
                alert("bloody hell let's call it a DRAW!")
                showResults("Rock!", "Rock!", "It's a DRAW!")
            }
            else if (c_choice == 1) {//comp is paper
                alert("You Lost to the computer")
                showResults("Rock!", "Paper!", "You Lost")
            }
            else {//comp is scissors
                alert("You win with your scissors")
                showResults("Rock!", "Scissors!", "You Win!")
            }
            break

        case 1:
            if(c_choice == 1) {alert("bloody hell let's call it a DRAW!")}
            else if (c_choice == 1) {alert("You Lost to the computer")}
            else {alert("You win with your scissors")}
            break

        case 2:
            if(c_choice == 2) {alert("bloody hell let's call it a DRAW!")}
            else if (c_choice == 0) {alert("You Lost to the computer")}
            else {alert("You win with your scissors")}
            break
    }//end switch statement
}

//function that write the results back to the html page
function showResults(pChoice, cChoice, result) {
    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results
}