import Autor from "./Autor"
import Capitulo from "./Capitulo"

export class Livro{
    private _titulo: string
    private _ISBN: string
    private _autores: Autor[]
    private _capitulos: Capitulo[]
    private _numeroDeCapitulos: number

    constructor(titulo: string, ISBN: string){
        this._ISBN = ISBN
        this._titulo = titulo
    }

    
    public get capitulos() : Capitulo[] {
        return this._capitulos
    }
    
    public set capitulos(capitulos: Capitulo[]){
        this._capitulos = capitulos
    }

    
    public get autores() : Autor[] {
        return this.autores
    }
    
    public set autores(autores: Autor[]){
        this._autores = autores
    }

    
    public get ISBN() : string {
        return this._ISBN
    }

    
    public set ISBN(ISBN : string) {
        this._ISBN = ISBN;
    }

    adicionarCapitulo(titulo: string, texto: string): number {
        let tamanho1 = this._capitulos.length
        this._capitulos.push(new Capitulo(titulo, texto))
        let tamanho2 = this._capitulos.length
        if (tamanho1 < tamanho2){
            return tamanho1
        } else {
            return -1
        }

    }
    removerCapitulo(capituloProcurado: Capitulo): number {
        let i = 0
        for (i=0;i<=this._capitulos.length;i++){
            if (this._capitulos[i].equals(capituloProcurado)){
                this._capitulos.splice(i, 1)
                return i
            }
        } if (i > this._capitulos.length - 1){
            return -1
        }
    }
    adicionarAutor(nome: string, dataDeNascimento: Date): number {
        let tamanho1 = this._autores.length
        this._autores.push(new Autor(nome, dataDeNascimento))
        let tamanho2 = this._autores.length
        if (tamanho1 < tamanho2){
            return tamanho1
        } else {
            return -1
        }

    }
    removerAutor(autorProcurado: Autor): number{
        let i = 0
        for (i=0;i<=this._autores.length;i++){
            if (this._autores[i].nome == autorProcurado.nome && this._autores[i].dataDeNascimento == autorProcurado.dataDeNascimento){
                this._autores.splice(i, 1)
                return i
            }
        } if (i > this._autores.length - 1){
            return -1
        }
    }
    

}