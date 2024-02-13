let formValidate = document.getElementById("form-validate")
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let teleInput = document.getElementById("teleInput")
let mensagem = document.getElementById("mensagem")
let actionButton = document.getElementById("actionButton")

function validarForm() {
    if (!nameInput.value) {

        alert("nome invalido")

        return;
    }

    else if (!emailInput.value) {
        alert("email invalido")
        return;
    }
    else if (!teleInput.value) {
        alert("numero invalido")
        return;
    }


    alert("campos preencidos corretamente")



}


