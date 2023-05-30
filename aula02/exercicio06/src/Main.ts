import { Cliente } from "./Cliente";
import { ContaPessoaFisica } from "./ContaPessoaFisica";
import { ContaPessoaJuridica } from "./ContaPessoaJuridica";


const cliente1 = new Cliente('João', 'Pessoa Física');
const cliente2 = new Cliente('Empresa Da Maria', 'Pessoa Jurídica');


const contaPF1 = new ContaPessoaFisica(cliente1);
const contaPF2 = new ContaPessoaFisica(cliente1);
const contaPJ1 = new ContaPessoaJuridica(cliente2);


cliente1.adicionarConta(contaPF1);
cliente1.adicionarConta(contaPF2);
cliente2.adicionarConta(contaPJ1);


contaPF1.depositar(1000);
contaPF2.depositar(500);
contaPF1.sacar(200);
contaPJ1.depositar(3000);


cliente1.exibirContas();
cliente2.exibirContas();
