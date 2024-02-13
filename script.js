let formValidate = document.getElementById("form-validate")
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let teleInput = document.getElementById("teleInput")
let mensagem = document.getElementById("mensagem")
let actionButton = document.getElementById("actionButton")

function validarForm() {
    if (!nameInput.value) {

        mensagem.innerText = " Preencher campo do email ! "
        menssagem.style.color = 'red'
        return;
    }

    else if (!emailInput.value) {
        mensagem.innerText = " Preencher campo do email ! "
        mensagem.style.color = 'red'
        return;
    }
    else if (!teleInput.value) {
        mensagem.innerText = " Preencher campo do telefone ! "
        mensagem.style.color = 'red'
        return;
    }


   
    mensagem.innerText = "Cadastro realizado com sucesso  "
    mensagem.style.color = "green"
   



}


