
//CRIPTOGRAFIA - coleta e faz a criptografia
function encode(){
    var strg = document.getElementById('input').value;
    var cryp = strg.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
    document.getElementById('output').value = cryp;
    }

//DESCRIPITOGRAFIA - coleta e faz a decodificação
function decode(){
    var strg = document.getElementById('input').value;
    var decodex = strg.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    document.getElementById('output').value = decodex;
    }

//FUNÇÃO PARA COPIAR
function copy(){
    var copyText = document.getElementById('output');
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
    
}
