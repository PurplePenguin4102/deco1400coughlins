window.addEventListener("load", setup, false);

function setup() {
	var imgLink = document.getElementsByClassName("image_link");
	var aLink = document.getElementsByClassName("offsite");
	for (i = 0; i < imgLink.length; i++) {
		imgLink[i].onclick = grabSrc;
	}
	for (i = 0; i < aLink.length; i++) {
		aLink[i].onclick = grabHref
	}
}

function grabSrc(event) {
	event.preventDefault();
	
	var lightbox = document.getElementById("offsiteNav");
	var go = document.getElementById("externalLink");
	var cancel = document.getElementById("back")
	
	lightbox.style.display = "inline";
	cancel.onclick = killBox
	go.href = event.target.id;
}

function grabHref(event) {
	event.preventDefault();
	
	var lightbox = document.getElementById("offsiteNav");
	var go = document.getElementById("externalLink");
	var cancel = document.getElementById("back")
	
	lightbox.style.display = "inline";
	cancel.onclick = killBox
	go.href = event.target.href;
}

function killBox(event) {
	var lightbox = document.getElementById("offsiteNav");
	lightbox.style.display = "none";
}