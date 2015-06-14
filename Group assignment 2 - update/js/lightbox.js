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
	var clickOff = document.getElementsByClassName("clickOff");
	
	//display the lightbox
	lightbox.style.display = "inline";
	//if the user made a mistake, kill the lightbox
	cancel.onclick = killBox;
	clickOff[0].onclick = killBox;
	//we pass the link from the image to the link in the lightbox
	var link
	var id = event.target.id
	// read the id and grab the link
	if (id == "dropit") {
		link = "http://www.dropitto.me/coughlin";
	} else if (id == "lawcentral") {
		link = "http://www.lawcentral.com.au/";
	} else if (id == "myob") {
		link = "http://myob.com.au/";
	} else if (id == "ato") {
		link = "https://www.ato.gov.au/";
	} else if (id == "asic") {
		link = "http://asic.gov.au/for-business/renewing-and-maintaining-your-business-name/search-a-business-name/";
	} else if (id == "asx") {
		link = "http://www.asx.com.au/"
	} else if (id == "yellow") {
		link = "https://www.yellowpages.com.au/"
	} else if (id == "godaddy") {
		link = "https://au.godaddy.com/"
	} else if (id == "quicken") {
		link = "http://www.quicken.com/"
	} else if (id == "symantec") {
		link = "http://www.symantec.com/en/au/"
	} 
	go.href = link;
}

function grabHref(event) {
	//prevent the link from going prematurely
	event.preventDefault();
	
	//grab our lightbox
	var lightbox = document.getElementById("offsiteNav");
	var go = document.getElementById("externalLink");
	var cancel = document.getElementById("back");
	var clickOff = document.getElementsByClassName("clickOff");

	//display the lightbox
	lightbox.style.display = "inline";
	//if the user made a mistake, kill the lightbox
	cancel.onclick = killBox;
	clickOff[0].onclick = killBox;
	//we pass the link from the image to the link in the lightbox
	go.href = event.target.href;
}

function killBox(event) {
	console.log(event.target);
	//grab the lightbox
	var lightbox = document.getElementById("offsiteNav");
	//stop displaying the lightbox
	lightbox.style.display = "none";
}