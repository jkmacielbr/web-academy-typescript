"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, categoria, preco, status) {
        this._codigo = this.gerarCodigo();
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._status = status;
    }
    gerarCodigo() {
        return Math.floor(Math.random() * 10);
    }
    get getCodigo() {
        return this._codigo;
    }
    get getNome() {
        return this._nome;
    }
    set setNome(nome) {
        this._nome = nome;
    }
    get getCategoria() {
        return this._categoria;
    }
    set setCategoria(categoria) {
        this._categoria = categoria;
    }
    get getPreco() {
        return this._preco;
    }
    set setPreco(preco) {
        this._preco = preco;
    }
    get getStatus() {
        return this._status;
    }
    set setStatus(status) {
        this._status = status;
    }
    isValidaFaixaEtaria(faixaEtaria) {
        return faixaEtaria <= 12;
    }
    adicionar() {
        this.mudarStatus("DISPONIVEL");
        console.log(`Produto ${this._nome}, categoria:
    ${this._categoria}`);
    }
    mudarStatus(status) {
        if (status === "DISPONIVEL") {
            this._status = "DISPONIVEL";
        }
        else {
            this._status = "INDISPONIVEL";
        }
    }
}
exports.Produto = Produto;
