//Modificado por: Rafael Ochôa Mello - 06/04/21
/* (Ajustes):

- Alterada a imp. do constructor
- Alteradas as assinaturas dos Gets'n Sets
    dos atributos nome e data de nasc.
- Re-implementados os métodos de adição e remoção de cap. e autor
*/

import Autor from "./Autor"
import Capitulo from "./Capitulo"

export default class Livro{
    private _titulo: string;
    private _ISBN: string;
    private _autores: Autor[] = [];
    private _capitulos: Capitulo[] = [];
    private _numeroDeCapitulos: number = 0;

    constructor(titulo: string, ISBN: string){
        this._ISBN = ISBN;
        this._titulo = titulo;
    }

    
    public get getCapitulos() : Capitulo[] {
        return this._capitulos;
    }
    
    public set setCapitulos(capitulos: Capitulo[]){
        this._capitulos = capitulos;
    }

    
    public get getAutores() : Autor[] {
        return this._autores;
    }
    
    public set setAutores(autores: Autor[]){
        this._autores = autores;
    }

    
    public get getISBN() : string {
        return this._ISBN;
    }

    
    public set setISBN(ISBN : string) {
        this._ISBN = ISBN;
    }

    //Métodos de Capítulos
    adicionarCapitulo(titulo: string, texto: string): number {
        const nCapitulos = this._capitulos.length;

        this._capitulos.push(new Capitulo(titulo, texto))
        if( nCapitulos >= this._capitulos.length)
            return -1;
        
        this._numeroDeCapitulos++;
        return nCapitulos;
    }

    removerCapitulo(capituloProcurado: Capitulo): number {
        let i = 0;
        
        for (i=0; i <= this._capitulos.length; i++){
            if (this._capitulos[i].equals(capituloProcurado)){
                this._capitulos.splice(i, 1)
                break;
            }
        }
        if (i > this._capitulos.length - 1)
            return -1;
        
        this._numeroDeCapitulos--;
        return i;
    }

    //Métodos de Autor
    adicionarAutor(nome: string, dataDeNascimento: Date): number {
        const nAutores = this._autores.length;

        this._autores.push(new Autor(nome, dataDeNascimento));
        if( nAutores >= this._autores.length )
            return -1;

        return nAutores;
    }

    
    removerAutor(autorProcurado: Autor): number{
        let i = 0;
        
        for (i=0; i <= this._autores.length; i++){
            if (this._autores[i].equals(autorProcurado)){
                this._autores.splice(i, 1)
                break;
            }
        }
        if (i > this._autores.length - 1)
            return -1;
        
        return i;
    }
}