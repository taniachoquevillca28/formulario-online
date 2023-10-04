const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const pass = document.getElementById("passaword")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.node.length <6){
        warnings += 'El nombre no es valido <br>'
    }
})