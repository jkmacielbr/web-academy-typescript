interface Livros {
    nome: string;
    preco: number;
    categoria?: string;
}

enum Categoria{
    HEROI = "Heroi",
    GUERRA = "Guerra",
    AJUDA = "Ajuda",
}

const livros1: Livros[] = [
    {
        nome: "A Menina que rouba livros",
        preco: 90.00,
        categoria: Categoria.GUERRA,
    },
    {
        nome: "O vendedor de Sonhos",
        preco: 23.00,
        categoria: Categoria.AJUDA

    },

    {
        nome: "Eu sou o numero 7",
        preco: 78.00,
        categoria: undefined
    }

]

livros1.map((livro) => {
    console.log("Nome do Livro: ", livro.nome);
    console.log("Preco do Livro: ", livro.preco);
    console.log("Categoria do Livro: ", livro.categoria);
})
    
