"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(cliente) {
        this.cliente = cliente;
        this.saldo = 0;
    }
    validarSaldoSuficiente(valor) {
        return this.saldo >= valor;
    }
}
exports.Conta = Conta;
