
import './css/index.css';
console.log('👋 This message is being logged by "renderer.js", included via webpack');




document.addEventListener("DOMContentLoaded",
async ()=>{
    let names = window.api.getNames();
    let div = document.getElementById("test");
    names.map(({name})=> {
        console.log(name)
        div.prepend(name+"\n")
    })
})


