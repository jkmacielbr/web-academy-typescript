"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this.contas = [];
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    exibirContas() {
        console.log(`Cliente: ${this.nome}`);
        console.log('Contas:');
        this.contas.forEach((conta, index) => {
            console.log(`Conta ${index + 1}: ${conta.constructor.name}`);
        });
    }
}
exports.Cliente = Cliente;
