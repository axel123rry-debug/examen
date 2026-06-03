let b=document.getElementById("boton")
let v=document.getElementById("r")
let p=document.getElementById("p")
let contador=0

b.addEventListener("click",suma)

function suma(){
   contador++

   p.textContent=(contador)
}

v.addEventListener("click",volver)

function volver(){
    window.location.href = "/index.html"
}