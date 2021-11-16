//start by declaring known varibles with starting vaulues
//varible: data stoarge device; friendly name for info

var totalAmmo = 600 //ammo cache value
var maxAmmo = 600 //hun capacity for ammo

//below ensure the current gun capacity  for ammo is full before we start
var currentAmmo = maxAmmo

//shoot function -- handles updating the current ammo on screen (so as button is clicked, current ammo goes down -1)
function shoot() {
    if (currentAmmo > 0) {
        //currentAmmo = currentAmmo - 1 
        currentAmmo--
    updatescreen()
    
    document.getElementById("gun").play();

    document.getElementById("gun")
    currentAmmo


}//if ends here
}//shoot() END

function updatescreen() {
    document.getElementById("total-ammo").innerHTML ="" + totalAmmo
    document.getElementById("current-ammo").innerHTML ="" + currentAmmo
}//updatescreen close

function getDiff(a,b) {
    var c = a - b

    return c
}//getdiff CLOSE

function reload() {
    var difference = getDiff(maxAmmo, currentAmmo)
    
    if (difference > 0 && totalAmmo != 0) {
        document.getElementById("reload").play();
    }
    
    if(totalAmmo >= difference) {
        currentAmmo += difference
        totalAmmo -= difference
    }

    else {//when the "if" condition is FALSE, the "else" runs
        currentAmmo += totalAmmo
        totalAmmo -= totalAmmo //totalAmmo = 0
    }

    updatescreen()
}//reload END
        

