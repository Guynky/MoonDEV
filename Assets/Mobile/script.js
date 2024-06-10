const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeLink));

document.getElementById('.list').addEventListener('click', function() {
    navigator.vibrate(100); // Vibra por 100 milissegundos
});
