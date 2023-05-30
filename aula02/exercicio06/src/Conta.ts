import { Cliente } from "./Cliente";

export abstract class Conta {
  protected saldo: number;

  constructor(protected cliente: Cliente) {
    this.saldo = 0;
  }

  abstract sacar(valor: number): void;

  abstract depositar(valor: number): void;

  protected validarSaldoSuficiente(valor: number): boolean {
    return this.saldo >= valor;
  }
}
