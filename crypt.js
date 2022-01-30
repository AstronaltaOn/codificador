
/*====================================================
##################  CRIPITOGRAFIA  ###################
======================================================*/

//PREVENT_DEFALT - impede que a página recarregue e o input e output sumam
function encode(){
    const form = document.querySelector('#myForm');
    form.addEventListener('submit', function(event){
    event.preventDefault();
    });

//CRIPTOGRAFIA - coleta e faz a criptografia
    var strg = document.getElementById('input').value;
    var cryp = strg.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');

//VALIDAÇÃO - impede que caracteres indesejados sejam processados
    var re = /[a-z ]/g;
    var found = cryp.match(re);
    if (cryp.length != found.length){
        document.getElementById('output').value = "";
    }else{
        document.getElementById('output').value = cryp;
    }
}
    /*VALIDAÇÃO - 'cryp.length' conta todos os caracteres do input e, 'found.length' 
    conta apenas os caracteres do input que respeitam os parâmetros de validação definidos na var 're'
    se no input o número de char total for diferente do número de char que respeitam a validação
    o input é inválido*/



/*====================================================
#################  DESCRIPITOGRAFIA  #################
======================================================*/

//DESCRIPITOGRAFIA - coleta e faz a decodificação
function decode(){
    var strg = document.getElementById('input').value;
    var decodex = strg.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');

//VALIDAÇÃO - impede que caracteres indesejados sejam processados
    var re = /[a-z ]/g;
    var found = decodex.match(re);
    if (decodex.length != found.length){
        document.getElementById('output').value = "";
    }else{
        document.getElementById('output').value = decodex;
    }
}

//FUNÇÃO PARA COPIAR - copia valor do output
function copy(){
    var copyText = document.getElementById('output');
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
    
}


/*=========================================================
#############     TRECHOS DE CÓDIGO    #################
===========================================================*/

//criptografia - coleta e faz a criptografia - VERSÃO ANTERIOR
/*function encode(){
    var strg = document.getElementById('input').value;
    var cryp = strg.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
    document.getElementById('output').value = cryp;
    }*/