import { Conta } from "./Conta";

export class Cliente {
  private contas: Conta[];

  constructor(private nome: string, private tipo: string) {
    this.contas = [];
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }

  exibirContas(): void {
    console.log(`Cliente: ${this.nome}`);
    console.log('Contas:');
    this.contas.forEach((conta, index) => {
      console.log(`Conta ${index + 1}: ${conta.constructor.name}`);
    });
  }
}
