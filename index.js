import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cc1 = new ContaCorrente(cliente1, 1001);
cc1.depositar(500);
cc1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
cc1.sacar(10);

// const continha = new Conta(50, cliente1, 1001);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
// console.log(contaPoupanca);
// console.log(cc1);

/* Guia para starta projeto com modulo
npm init
ai só da enter all
acabamos de cria o package.json
vai no package.json e coloca "type": "module",
*/