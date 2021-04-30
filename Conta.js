export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this.cliente = cliente;
        this.agencia = agencia;
    }

    sacar(valor){
        taxa = 1.1 * valor;
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