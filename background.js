


var url = null;

chrome.browserAction.onClicked.addListener(function(tab) {

  if(url){
    //navigate to careers page
    alert(url);
  }

});


chrome.runtime.onMessage.addListener(

  function(request){
    url = request.career_page;
  }

);

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}