const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"');
const containerModal = document.querySelector('[data-modal="container"');

function abrirModal(){
    containerModal.classList.add('ativo')
}

function fecharModal(){
    containerModal.classList.remove('ativo')
}

botaoAbrir.addEventListener('click', abrirModal)
botaoFechar.addEventListener('click', fecharModal)