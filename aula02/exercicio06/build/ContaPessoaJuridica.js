"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPessoaJuridica = void 0;
const Conta_1 = require("./Conta");
class ContaPessoaJuridica extends Conta_1.Conta {
    constructor(cliente) {
        super(cliente);
    }
    sacar(valor) {
        if (this.validarSaldoSuficiente(valor)) {
            this.saldo -= valor;
            console.log(`Saque realizado: R$${valor}`);
        }
        else {
            console.log('Saldo insuficiente para realizar o saque.');
        }
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito realizado: R$${valor}`);
    }
}
exports.ContaPessoaJuridica = ContaPessoaJuridica;
