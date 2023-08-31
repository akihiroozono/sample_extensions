var arr=[];

getHistory();
function getHistory(){
    chrome.history.search({
        text: "",
        startTime: new Date().getTime()-(60*60*24*1000)
    },
    function (historyItems){
        for(let idx of historyItems){
            arr.push(idx);
        }
        for(let i=0;i<arr.length;++i){
            document.getElementById("historyTable").innerHTML+=`<tr><td><img width="16px" height="16px" src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=16&url=${arr[i].url}"><td>${arr[i].lastVisitTime}</td></td><td>${arr[i].title}</td><td><a href="${arr[i].url}" target="_blank">${arr[i].url}</a></td></tr>`;
        }
    }
    )
}