export class Conta{
    // Construtor
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // SET
    set cliente(novoValor){
        if(novoValor instanceof Cliente)
            this._cliente = novoValor;
    }

    // GET
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Funcoes
    sacar(valor){
        let taxa = 1;

        return this._sacar(valor, taxa);        
    }

    // metodo privado generico
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;

        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor > 0) this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}