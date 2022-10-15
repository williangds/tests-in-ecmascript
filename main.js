let nomeValor;
const nomeCampo = document.querySelector('#nomeCampo');;
let botao;

document.querySelector('#nomeValor').focus();
botao = document.querySelector('button');

botao.onclick = () => {
    nomeValor = document.querySelector('#nomeValor').value;
    nomeCampo.innerHTML = `meu nome é ${nomeValor}`;
    document.querySelector('#nomeValor').value = '';
    document.querySelector('#nomeValor').focus();
} 