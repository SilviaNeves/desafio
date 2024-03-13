let textArea;
let criptografar;
let descriptografar;
let copiar;

function esconderDiv() {
    document.getElementById('some').style.display = 'none';
    document.getElementById('aparece').style.display = 'block';
}

function limparCampo() {
    textArea = document.querySelector('textarea');
    textArea.value = '';
}

function btnEncriptar() {
    textArea = document.querySelector('textarea').value;
    criptografar = textArea.replace(/(a)|(e)|(i)|(o)|(u)/gi, function(match, grupo1, grupo2, grupo3, grupo4, grupo5) {
        if (grupo1) return 'ai';
        if (grupo2) return 'enter';
        if (grupo3) return 'imes';
        if (grupo4) return 'ober';
        if (grupo5) return 'ufat';
    });
    console.log(criptografar);

    esconderDiv();
    limparCampo();
    document.getElementById('mensagem').value = criptografar;
}

function btnDesencriptar() {
    textArea = document.querySelector('textarea').value;
    descriptografar = textArea.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/gi, function(match, grupo1, grupo2, grupo3, grupo4, grupo5) {
        if (grupo1) return 'a';
        if (grupo2) return 'e';
        if (grupo3) return 'i';
        if (grupo4) return 'o';
        if (grupo5) return 'u';
    });
    console.log(descriptografar);

    esconderDiv();
    limparCampo();
    document.getElementById('mensagem').value = descriptografar;
}

function btncopiar() {
    copiar = criptografar
    navigator.clipboard.writeText(criptografar);
}