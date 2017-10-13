console.log("begin2");

const whitelist = [ "careers", "jobs" ];
var links = document.links;

Array.prototype.forEach.call(links, function(link){
	if(isValid(link)){
		updateExtension(link.href);
	}
});

function isValid(link){
	var text = link.textContent;
	return link.href != null && whitelist.includes(text.toLowerCase());
}

function updateExtension(url){
	console.log("here");
	var message = new Object();
	message["career_page"] = url;
	console.log(message);
	chrome.runtime.sendMessage(message);
}