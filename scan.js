

const whitelist = [ "careers", "jobs" ];
var links = document.links;

links.forEach(function(link){
	var text = link.textContent.toLowerCase();
	if(isValid(link)){

	}
})

function isValid(link){
	var text = link.textContent;
	return link.href != null && whitelist.includes(text.toLowerCase());
}

function updateExtension(url){
	chrome.runtime.sendMessage({
		career_page: url;
	});
}