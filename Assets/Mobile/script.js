const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeLink));

document.getElementById('meuBotao').addEventListener('click', function() {
    navigator.vibrate(100); // Vibra por 100 milissegundos
});


if ('vibrate' in navigator) {
    // O dispositivo suporta vibração
} else {
    // O dispositivo não suporta vibração
}
