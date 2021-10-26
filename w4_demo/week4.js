//riddles Javascript file

//JS is a scripting language that can change stuff on the HTML page; it is NOT a markup lanuage so it will follow more fundemental logic related to other computer programming styles

//Varibles - varibles store data (information) to be used in the script/program; they are friendly names to refer to info as
//think about varibles as the contact names in your phone: you don't need to remember everyone's number, through the name

//each variables will store the answer to a riddle question
//JS requires vars to be declared as such

var store1 = "Arkham Asylum" //answer to question 1
var store2 = "Bruce Wayne" //answer to question 2
var store3 = "Catwoman" //answer to question 3

//Variable names must be unique! They are also cAsE sEnSiTiVe
//Total != Total != TOTAL

//FUNCTIONS - perform tasks; they have a set of processes assigned to them, and when they are called their tasks are performed

//function below wil talk to HTML DOM (Document Object Model) and get specific elements by their id, then push info to their inner HTML (inbetween the open and close of the tag)

function answer1() {document.getElementById("question1").innerHTML = store1;}

function answer2() {document.getElementById("question2").innerHTML = store2;}

function answer3() {document.getElementById("question3").innerHTML = store3;}