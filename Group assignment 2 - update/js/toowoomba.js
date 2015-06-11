//add the DOM listener
window.addEventListener("load", listenDestination, false);

function listenDestination() {
	//grab the buttons
	var toowoomba = document.getElementById("toowoomba");
	var brisbane = document.getElementById("brisbane");

	//if we live in toowoomba we need to change the daddr
	toowoomba.onclick = daddrToowoomba;
	brisbane.onclick = daddrBrisbane;
}

function daddrToowoomba(event) {
	//grab the hidden input daddr
	var daddr = document.getElementById("daddr");
	//change it to the toowoomba office
	daddr.value = "469 Ruthven Street, Toowoomba";

	//submit the form
	var directionForm = document.getElementById("directionForm");
	directionForm.submit();

}

function daddrBrisbane(event) {
	//grab the hidden input daddr
	var daddr = document.getElementById("daddr");
	//change it to the brisbane office
	daddr.value = "10 market street, Brisbane";

	//submit the form
	var directionForm = document.getElementById("directionForm");
	directionForm.submit();
}