const secoes = document.querySelectorAll('secao');

// Suponha que você tenha uma variável chamada "categoriaAtiva"
// que contém a categoria atual (por exemplo, "files")

// Remova a classe .active de todas as seções
secoes.forEach(s => s.classList.remove('active'));

// Adicione a classe .active apenas à seção correspondente à categoria ativa
const secaoAtiva = document.getElementById(categoriaAtiva);
if (secaoAtiva) {
    secaoAtiva.classList.add('active');
}
