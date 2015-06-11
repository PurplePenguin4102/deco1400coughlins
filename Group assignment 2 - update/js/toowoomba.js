//add the DOM listener
window.addEventListener("load", listenToowoomba, false);

function listenToowoomba() {
	var toowoomba = document.getElementById("toowoomba");
	//if we live in toowoomba we need to change the daddr
	toowoomba.onclick = changeDaddr;
}

function changeDaddr(event) {
	//grab the hidden input daddr
	var daddr = document.getElementById("daddr");
	//change it to the toowoomba office
	daddr.value = "469 Ruthven Street, Toowoomba";

	//submit the form
	var directionForm = document.getElementById("directionForm");
	directionForm.submit();

}