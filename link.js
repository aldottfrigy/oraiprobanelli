window.addEventListener('load',init)

function init(){
    document.getElementById("linkek").addEventListener('click',mutat)


}

function mutat(e){
//e.preventDefault();
//console.log("ide");
//console.log(e.target);
//console.log(e.target.tagName);
//console.log(e.target.href);
if(e.target.tagName=='A' && e.shiftKey){
    e.preventDefault();
    console.log(e.target.href);
}

}