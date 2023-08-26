var arr=[];
getHistory();
function getHistory(){
    chrome.history.search({
        text: "",
        startTime: new Date().getTime()-(60*60*24*1000)
    },
    function (historyItems){
        for(let idx of historyItems){
            arr.push(idx.url);
        }
        for(let i=0;i<arr.length;++i){
            document.getElementById("historyTable").innerHTML+=`<tr><td>${arr[i]}</td></tr>`;
        }
    }
    )
}
