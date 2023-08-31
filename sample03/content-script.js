for(let idx of document.querySelectorAll("input")){
    idx.addEventListener("change",()=>{
        console.log(idx.value);
    })
}
for(let idx of document.querySelectorAll("textarea")){
    idx.addEventListener("change",()=>{
        console.log(idx.innerHTML);
    })
}