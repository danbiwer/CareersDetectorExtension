


var url = null;


//TODO: fix url being cleared multiple times when page loads
chrome.tabs.onUpdated.addListener(function(tabid, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    console.log("clear");
    url = null;
  }
});

chrome.browserAction.onClicked.addListener(function(tab){
  console.log("click " + url);
  if(url){
    navigate(url);
  }

});

chrome.runtime.onMessage.addListener(function(request){
    url = request.career_page;
    console.log(url);
});

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}