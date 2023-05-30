"use strict";
const livros1 = [
    {
        nome: "A Menina que rouba livros",
        preco: 90.00,
        categoria: "Guerra",
    },
    {
        nome: "O vendedor de Sonhos",
        preco: 23.00,
        categoria: "ajuda"
    },
    {
        nome: "Eu sou o numero 7",
        preco: 78.00,
        categoria: "Heroi"
    }
];
livros1.map((livro) => {
    console.log("Nome do Livro: ", livro.nome);
    console.log("Preco do Livro: ", livro.preco);
    console.log("Categoria do Livro: ", livro.categoria);
});
