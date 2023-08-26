function createContextMenu(){
	chrome.contextMenus.create({
        "id": "get_value", 
        "title": "値を取得",
        "contexts": ["all"]
	});
}
chrome.runtime.onInstalled.addListener(createContextMenu);
chrome.runtime.onStartup.addListener(createContextMenu);

chrome.contextMenus.onClicked.addListener((info,tab)=>{
    console.log("a")
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getValue
    });
})

function getValue(){
    for(let idx of document.querySelectorAll("form input")){
        console.log(`${idx.value}`);
    }
}