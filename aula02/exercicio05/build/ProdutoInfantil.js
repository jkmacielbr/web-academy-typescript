"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoInfantil = void 0;
const Produto_1 = require("./Produto");
class ProdutoInfantil extends Produto_1.Produto {
    constructor(nome, categoria, preco, status, faixaEtaria) {
        super(nome, categoria, preco, status);
        this.setFaixaEtaria = faixaEtaria;
    }
    verificarFaixaEtaria() {
        if (!this.isValidaFaixaEtaria(this._faixaEtaria)) {
            throw new Error("Faixa etária não aceita");
        }
    }
    get getFaixaEtaria() {
        return this._faixaEtaria;
    }
    set setFaixaEtaria(faixaEtaria) {
        this._faixaEtaria = faixaEtaria;
        this.verificarFaixaEtaria();
    }
}
exports.ProdutoInfantil = ProdutoInfantil;
