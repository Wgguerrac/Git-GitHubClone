//Llamando a los objetos.
const btnSubmit = document.querySelector(".boton__btn")
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('boton');
const check = document.querySelector('#check');

//Guardar en el LS
function guardar(valor){
    let user = { usuario: username.value, pass: password.value};
    if (user.usuario == "" || user.pass == "") {
        p.innerHTML = "Los campos no deben de quedar vacios";
        return;
    } else {
        if (valor === "sessionStorage") {
            sessionStorage.setItem("item", JSON.stringify(user));
        }
        if (valor === "localStorage") {
            localStorage.setItem("item", JSON.stringify(user));
        }
    }
    return user;
}

//Recordar los datos desde LS.
function recuperarDatos(datos) {
    if (datos){
       username.value = datos.usuario;
       password.value = datos.pass;
    }
}

recuperarDatos(JSON.parse(localStorage.getItem("item")));


//Guardar en LS en caso de clickear en recordar. Sino se guarda en SS.
btnSubmit.addEventListener('click',(e) => {
    e.preventDefault();
    if(check.checked){
        guardar("localStorage")
    } else {
        guardar("sessionStorage")
    }

})

//Para que figure el dato en consola. 
/*boton.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data);
}) */



//Redirección a otro archivo HTML (cita.hmtl).
boton.addEventListener('click', (a) => {
    a.preventDefault()
    window.location.href = "/HTML/index.html"
   }) 
   



