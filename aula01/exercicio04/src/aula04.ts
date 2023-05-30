interface Livros {
    nome: string;
    preco: number;
    categoria?: string;
}

interface Autor {
    nome: string;
    livros: Livros[];
}

enum Categoria{
    HEROI = "Heroi",
    GUERRA = "Guerra",
    AJUDA = "Ajuda",
}

type Biblioteca =  Autor | Livros;

const biblioteca: Biblioteca = {
    nome: "Joao",
    livros: [
        {nome: "A menina que roubava livros", preco: 90.00, categoria: Categoria.GUERRA},
        {nome: "clone", preco: 23.00, categoria: Categoria.AJUDA},
        {nome: "Eu sou o numero 7", preco: 79.00, categoria: undefined},
    ],
};

const biblioteca2: Biblioteca = {
    nome: "Maria",
    livros: [
        {nome: "Deus não esta morto", preco: 90.00, categoria: Categoria.AJUDA},
        {nome: "clone", preco: 23.00, categoria: Categoria.AJUDA},
        {nome: "Eu sou o numero 4", preco: 79.00, categoria: Categoria.HEROI},
    ],
};

function imprimir(biblioteca: Biblioteca) {
    if ("livros" in biblioteca) {
      console.log(`Autor: ${biblioteca.nome}`);
      console.log("Livros:");
      biblioteca.livros.map((livro) => {
        console.log(`Nome: ${livro.nome}`);
        console.log(`Preço: ${livro.preco}`)
        console.log(`Categoria: ${livro.categoria}\n`)
        
      });
      console.log();
    }
  }

  imprimir(biblioteca);
  imprimir(biblioteca2);

    
