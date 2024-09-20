const form = document.getElementById('form-agenda');
const nome = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`O Contato ${inputNomeContato.value} já foi inserido`);
    } 
    else if (numeros.includes(inputNumeroTel.value)) {
        alert(`O Número ${inputNumeroTel.value} já se encontra Cadastrado`);
    }
    else {
        nome.push(inputNomeContato.value);
        numeros.push(inputTelefoneContato.value);

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value ='';
    inputTelefoneContato.value ='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

const inputNumeroTel = document.getElementById('telefone-contato');

inputNumeroTel.addEventListener('input', function (e) {
    let tel = e.target.value;

    tel = tel.replace(/\D/g, '');

    if (tel.length > 10) {
        tel = tel.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (tel.length > 5) {
        tel = tel.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (tel.length > 2) {
        tel = tel.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
        tel = tel.replace(/^(\d*)/, '($1');
    }

    e.target.value = tel;
});