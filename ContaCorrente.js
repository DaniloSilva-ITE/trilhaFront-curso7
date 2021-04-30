import {Cliente} from "./Cliente.js"

export class ContaCorrente{
    static numDeContas = 0;

    // https://github.com/tc39/proposal-class-fields#private-fields
    // atributo privado padrão node coloca #nomeVar
    // atributo privado padrão js coloca _nomeVar

    set cliente(novoValor){
        if(novoValor instanceof Cliente)
            this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numDeContas++;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0) this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}