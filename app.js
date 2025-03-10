//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    listaDeAmigos.push(nome);
    atualizarLista();
    input.value = '';
}

function atualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    
    for (let amigo of listaDeAmigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaHTML.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];
    
    let resultadoHTML = document.getElementById('resultado');
resultadoHTML.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}
