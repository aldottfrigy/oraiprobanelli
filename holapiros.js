window.addEventListener('load',init)

function init(){
document.getElementById("meret").addEventListener("keyup",rajzol)
document.getElementById("racs").addEventListener('click',pozicio)
document.getElementById("ujra").addEventListener('click',torol)
}

var randX;
var randY;

function rajzol(){
    torol()
    console.log(this.value)


    const szam=parseInt(this.value);
    //veletlenszam letrehozas
randX=Math.floor(Math.random()*szam)
randY=Math.floor(Math.random()*szam)
console.log("veletlenek:"+randX+" - "+randY)
    let sor;
    let cella;

    for(let i=0;i<szam;i++){
        sor=document.getElementById("racs").insertRow(-1)
        for(let j=0;j<szam;j++){
            cella=sor.insertCell(-1)
            cella.classList.add("alapszin")
        }
    }
}

function torol(){
    szamlalo=0
    document.getElementById("tarolo").innerHTML=""
    let csomopont=document.getElementById("racs")
    while(document.getElementById("racs").hasChildNodes())
   csomopont.removeChild(csomopont.lastChild)

}

function pozicio(e){
console.log(e.target.tagName)
if(e.target.tagName=="TD"){
    var x=e.target.cellIndex
    var y=e.target.parentNode.rowIndex
    console.log("Kattintás helye:"+x+" "+y)
x==randX && y==randY ? e.target.classList.add("piros") : e.target.classList.add("fekete")
if(x!=randX || y!=randY)
szamlalo++;
else
document.getElementById("tarolo").innerHTML="a probalkozasok szama: "+(szamlalo+1);
}
}