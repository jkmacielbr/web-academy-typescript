import { Conta } from "./Conta";
import { Cliente } from "./Cliente";

export class ContaPessoaFisica extends Conta {
  constructor(cliente: Cliente) {
    super(cliente);
  }

  sacar(valor: number): void {
    if (this.validarSaldoSuficiente(valor)) {
      this.saldo -= valor;
      console.log(`Saque realizado: R$${valor}`);
    } else {
      console.log('Saldo insuficiente para realizar o saque.');
    }
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito realizado: R$${valor}`);
  }
}
