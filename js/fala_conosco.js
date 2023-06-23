// ---------- CAPTURA DE ELEMENTOS ---------- \\
let labelEmail = document.querySelector("label[for='email']");
let inputEmail = document.querySelector("#email");
let textoAjuda = document.querySelector("#emailTxtAjuda");

// ---------- FUNÇÕES ---------- \\
function validadorEmail(email) {
    let emailValidor =/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailValidor.test(email);
};


// ---------- EVENTOS ---------- \\
inputEmail.addEventListener("focus", (e)=>{
    if (e.target.value == ""){
    labelEmail.classList.add("required");
    }
})


inputEmail.addEventListener("blur", (e)=>{
    if(e.target.value == ""){
        textoAjuda.innerText = "";
        textoAjuda.classList.remove("visible");
    }
})

inputEmail.addEventListener("input", (e)=>{
   emailValue = e.target.value;
   if (validadorEmail(emailValue)){
        inputEmail.classList.remove("error");
        textoAjuda.innerText = "";
        textoAjuda.classList.remove("visible");
   } else {
        inputEmail.classList.add("error");        
        textoAjuda.innerText = "Digite um e-mail valido.";
        textoAjuda.classList.add("visible");
   }

   (!emailValue == "") ? labelEmail.classList.remove("required") : labelEmail.classList.add("required");
})


// ---------- CAPTURA DE ELEMENTOS ---------- \\
let labelMenssagem = document.querySelector("label[for='menssagem']");
let textareaMenssagem = document.querySelector("#menssagem");

textareaMenssagem.addEventListener("focus", (e)=>{
    if (e.target.value == ""){
    labelMenssagem.classList.add("required");
    }
})

textareaMenssagem.addEventListener("input", (e)=>{    
    (!e.target.value == "") ? labelMenssagem.classList.remove("required") : labelMenssagem.classList.add("required");
 })