document.addEventListener('DOMContentLoaded', function() {
	var lastOpenedUrls=localStorage.getItem("lastOpenedUrls");
	var showTabs=document.getElementById("showTabs");
	showTabs.innerHTML=lastOpenedUrls;
});