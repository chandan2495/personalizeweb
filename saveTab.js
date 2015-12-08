function getAllTabs(){
var queryInfo = {
    active: false,    
  };

  chrome.tabs.query(queryInfo, function(tabs) {
  	var urls=[];
  	for(var tab=0;tab<tabs.length;tab++){
  		var url={};
  		url.title=tabs[tab].title;
  		url.url=tabs[tab].url;
  		url.icon=tabs[tab].favIconUrl;
  		urls.push(url);  		
  	}
  	console.log(tabs);
  	localStorage.setItem("lastOpenedUrls",JSON.stringify(urls));
  });
}

document.addEventListener('DOMContentLoaded', function() {
	getAllTabs();
});