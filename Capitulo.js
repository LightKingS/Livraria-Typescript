"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************
* Nome:Rafael Ochôa Mello
* Data: 01/04/2021
*
* - Implementação base da classe Capítulos
*
* - O método 'toString()' presente na doc.
*    não precisa ser implementado.
********************************/
var Capitulo = /** @class */ (function () {
    //Os parâmetros do mesmo são opcionais
    function Capitulo(titulo, texto) {
        this._titulo = titulo;
        this._texto = texto;
    }
    Object.defineProperty(Capitulo.prototype, "getTitulo", {
        //Gets'n Sets
        get: function () { return this._titulo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capitulo.prototype, "getTexto", {
        get: function () { return this._texto; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capitulo.prototype, "setTitulo", {
        set: function (titulo) { this._titulo = titulo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capitulo.prototype, "setTexto", {
        set: function (texto) { this._texto = texto; },
        enumerable: false,
        configurable: true
    });
    //Métodos da classe
    Capitulo.prototype.hashCode = function () {
        return (Math.random() * 100 + 1) + Date.now();
    };
    Capitulo.prototype.equals = function (obj) {
        //Realiza um casting do obj genérico para a classe 'Capitulo'
        var capitulo = obj;
        if (this.constructor !== obj.constructor)
            return false;
        else if (this._titulo == undefined && this._texto == undefined)
            return false;
        else if ((this._titulo !== capitulo.getTitulo) && (this._texto !== capitulo.getTexto))
            return false;
        else
            return true;
    };
    return Capitulo;
}());
exports.default = Capitulo;
