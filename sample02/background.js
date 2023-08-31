function createTab(){
    chrome.tabs.create({
        url: 'history.html',
        selected: true
    }, tab => {});
}

chrome.runtime.onInstalled.addListener(createTab);
chrome.runtime.onStartup.addListener(createTab);
