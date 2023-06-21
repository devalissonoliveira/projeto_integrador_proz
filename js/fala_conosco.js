// ---------- CAPTURA DE ELEMENTOS ---------- \\
let labelEmail = document.querySelector("label[for='email']");
let inputEmail = document.querySelector("#email");
let textoAjuda = document.querySelector(".textoAjuda");

// ---------- VARIAVEIS DE ESCOPO GLOBAL ---------- \\
let email;
// ---------- FUNÇÕES ---------- \\
function validadorEmail(email) {
    let emailValidor =/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailValidor.test(email);
};

function inputError(email){
    if(validadorEmail(email) == true){
        console.log("email correto");
    } else {
        console.log("errado");
    }
};

// ---------- EVENTOS ---------- \\
inputEmail.addEventListener("input", (e)=>{
   email= e.target.value;
    inputError(email);
})