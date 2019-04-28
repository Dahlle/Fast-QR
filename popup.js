document.getElementById("Convert").addEventListener("click", function(){
    var query = { active: true, currentWindow: true };
    function callback(tabs) {
        var currentTab = tabs[0];   
        var imgURL=("https://api.qrserver.com/v1/create-qr-code/?data=" + currentTab.url + "&size=150x150");
        document.getElementById("qrimage").src=imgURL;
    } 
    chrome.tabs.query(query, callback);
}, false);
    
    