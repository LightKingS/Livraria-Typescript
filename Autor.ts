export default class Autor{
    private _nome: string
    private _dataDeNascimento: Date

    constructor(nome: string, dataDeNascimento){
        this._nome = nome
        this._dataDeNascimento = dataDeNascimento

    }

    public get nome() : string {
    return this._nome
    }

    public set nome(nome: string){
        this._nome = nome
    }

    
    public get dataDeNascimento() : Date {
        return this._dataDeNascimento
    }
    
    public set dataDeNascimento(dataDeNascimento: Date) {
        this._dataDeNascimento = dataDeNascimento
    }

}


