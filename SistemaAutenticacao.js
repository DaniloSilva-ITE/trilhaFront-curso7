/*
Ser autenticavel significa que ele tem a propriedade "senha"
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}