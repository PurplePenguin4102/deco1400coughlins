//add DOM listener
window.addEventListener("load", setup, false);

//here we grab all the external links on the page
function setup() {
	//here are all the links in images
	var imgLink = document.getElementsByClassName("image_link");
	//and all the links in <a> tags
	var aLink = document.getElementsByClassName("offsite");
	//loop over image and a links, and either grab the Id or Href to pass to the lightbox
	for (i = 0; i < imgLink.length; i++) {
		imgLink[i].onclick = grabId;
	}
	for (i = 0; i < aLink.length; i++) {
		aLink[i].onclick = grabHref;
	}
}

function grabId(event) {
	//prevent the link from going prematurely
	event.preventDefault();
	
	//grab our lightbox
	var lightbox = document.getElementById("offsiteNav");
	var go = document.getElementById("externalLink");
	var cancel = document.getElementById("back");
	
	//display the lightbox
	lightbox.style.display = "inline";
	//if the user made a mistake, kill the lightbox
	cancel.onclick = killBox;
	//we pass the link from the image to the link in the lightbox
	go.href = event.target.id;
}

function grabHref(event) {
	//prevent the link from going prematurely
	event.preventDefault();
	
	//grab our lightbox
	var lightbox = document.getElementById("offsiteNav");
	var go = document.getElementById("externalLink");
	var cancel = document.getElementById("back");
	
	//display the lightbox
	lightbox.style.display = "inline";
	//if the user made a mistake, kill the lightbox
	cancel.onclick = killBox;
	//we pass the link from the image to the link in the lightbox
	go.href = event.target.href;
}

function killBox(event) {
	//grab the lightbox
	var lightbox = document.getElementById("offsiteNav");
	//stop displaying the lightbox
	lightbox.style.display = "none";
}