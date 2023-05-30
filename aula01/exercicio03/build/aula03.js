"use strict";
var Categoria;
(function (Categoria) {
    Categoria["HEROI"] = "Heroi";
    Categoria["GUERRA"] = "Guerra";
    Categoria["AJUDA"] = "Ajuda";
})(Categoria || (Categoria = {}));
const livros1 = [
    {
        nome: "A Menina que rouba livros",
        preco: 90.00,
        categoria: Categoria.GUERRA,
    },
    {
        nome: "clone",
        preco: 23.00,
        categoria: Categoria.AJUDA
    },
    {
        nome: "Eu sou o numero 7",
        preco: 78.00,
        categoria: undefined
    }
];
const upperCase = (livro) => {
    const nome = livro.nome.split(" ");
    livro.nome = nome.length === 1 ? nome[0].toUpperCase() : livro.nome.toLocaleLowerCase();
    return livro;
};
livros1.map((livro) => {
    const atualizaLivro = upperCase(livro);
    console.log("Nome do Livro: ", atualizaLivro.nome);
    console.log("Preco do Livro: ", atualizaLivro.preco);
    console.log("Categoria do Livro: ", atualizaLivro.categoria);
});
