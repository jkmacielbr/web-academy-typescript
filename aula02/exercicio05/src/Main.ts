
import { ProdutoInfantil } from "./ProdutoInfantil";

const produto1 = new ProdutoInfantil("Talco", "Cuidados Pessoais", 25, "DISPONIVEL", 8);
console.log(`${produto1.getCodigo}`);
console.log(`${produto1.getNome}`);
console.log(`${produto1.getPreco}`);
console.log(`${produto1.getFaixaEtaria}`);
console.log(`${produto1.getStatus}`);
produto1.setFaixaEtaria = 9;
console.log(`${produto1.getFaixaEtaria}`);