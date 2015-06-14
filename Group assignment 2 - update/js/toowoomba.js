// prototype defaults
var window;
var document;

// prototype functions
var listenDestination, daddrToowoomba, daddrBrisbane;

// prototype class variables
var daddr, directionForm;

//add the DOM listener
window.addEventListener("load", listenDestination, false);

function listenDestination() {
    // prototyping
    "use strict";
    var toowoomba, brisbane;
    //grab the buttons in the form
    toowoomba = document.getElementById("toowoomba");
    brisbane = document.getElementById("brisbane");

    //if we live in toowoomba we need to change the daddr
    toowoomba.onclick = daddrToowoomba;
    brisbane.onclick = daddrBrisbane;
}

function daddrToowoomba() {
    "use strict";
    //grab the hidden input daddr
    daddr = document.getElementById("daddr");
    //change it to the toowoomba office
    daddr.value = "469 Ruthven Street, Toowoomba";

    //submit the form
    directionForm = document.getElementById("directionForm");
    directionForm.submit();

}

function daddrBrisbane() {
    "use strict";
    //grab the hidden input daddr
    daddr = document.getElementById("daddr");
    //change it to the brisbane office
    daddr.value = "10 market street, Brisbane";

    //submit the form
    directionForm = document.getElementById("directionForm");
    directionForm.submit();
}