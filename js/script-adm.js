let senha = document.getElementById("senha");
let login = document.getElementById("login");
let entrar = document.getElementById("btnEntrar");
let erro = document.getElementById("mensagemErro");


let senhaUser = "senai567";
let loginUser = "SilviaFestCantina";

entrar.addEventListener("click", function () {
    event.preventDefault();

    if (senha.value === senhaUser && login.value === loginUser) {
        window.location.href = "area-adm.html";
    } else {
      document.getElementById("mensagemErro").style.display = "block";
      
    }
});

