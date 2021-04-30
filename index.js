import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const cc1 = new ContaCorrente(cliente1, 1001);
const cc2 = new ContaCorrente(cliente2, 1002);

cc1.depositar(1000);
cc2.depositar(1000);
cc1.transferir(200, cc2);

const listaCC = new Array()
listaCC.push(cc1);
listaCC.push(cc2);

console.log(listaCC);

// possibilidades pra ver qnts contas tenho
console.log(ContaCorrente.numDeContas);
console.log(listaCC.length);