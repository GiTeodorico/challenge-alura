const textArea = document.querySelector('.text_area');
const mensagem = document.querySelector('.mensagem');

function botao_cripto() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
           stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function botao_descrip() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
           stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function botao_copiar()  {
    const mensagem = document.querySelector('.mensagem');
    mensagem.select();
    mensagem.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(mensagem.value);
    alert('Opa! Seu texto foi copiado');
} 
