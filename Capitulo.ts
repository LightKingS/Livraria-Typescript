/******************************
* Nome:Rafael Ochôa Mello
* Data: 01/04/2021
*
* - Implementação base da classe Capítulos
*
* - O método 'toString()' presente na doc.
*    não precisa ser implementado.
********************************/
export default class Capitulo {
    private _titulo: string;
    private _texto: string;

    //Os parâmetros do mesmo são opcionais
    constructor( titulo: string = '', texto: string = '' ){
        this._titulo = titulo;
        this._texto = texto;
    }

    //Gets'n Sets
    get getTitulo(){ return this._titulo; }
    get getTexto(){ return this._texto; }

    set setTitulo( titulo: string ) { this._titulo = titulo; }
    set setTexto( texto: string ) { this._texto = texto; }

    //Métodos da classe
    public hashCode(): number{
        return (Math.random() * 100 + 1) + Date.now();
    }

    public equals(obj: object): boolean{
        const capitulo = obj as Capitulo;

        if( this.constructor !== obj.constructor )
            return false;
        else if(this._titulo == undefined &&  this._texto == undefined)
            return false;
        else if((this._titulo !== capitulo.getTitulo) && ( this._texto !== capitulo.getTexto) )
            return false;
        else
            return true;        
    }
}