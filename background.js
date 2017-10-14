


var career_page_url = null;
var hostname = null;

chrome.tabs.onUpdated.addListener(function(tabid, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    var url = new URL(tab.url);
    if(url.hostname != hostname){
      hostname = url.hostname;
      career_page_url = null;
    }
  }
});

chrome.browserAction.onClicked.addListener(function(tab){
  console.log("click " + career_page_url);
  if(career_page_url){
    navigate(career_page_url);
  }

});

chrome.runtime.onMessage.addListener(function(request){
    career_page_url = request.career_page;
    console.log(career_page_url);
});

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}