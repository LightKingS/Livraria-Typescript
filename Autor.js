"use strict";
//Modificado por: Rafael Ochôa Mello - 06/04/21
/* (Ajustes):

- Alterada a imp. do constructor
- Alteradas as assinaturas dos Gets'n Sets
    dos atributos nome e data de nasc.
- Criado método equals
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Autor = /** @class */ (function () {
    //Define como padrão uma data inválida caso nenhuma seja recebida
    function Autor(nome, dataDeNascimento) {
        if (dataDeNascimento === void 0) { dataDeNascimento = new Date("0000-00-00"); }
        this._nome = nome;
        this._dataDeNascimento = dataDeNascimento;
    }
    Object.defineProperty(Autor.prototype, "getNome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "setNome", {
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "getDataDeNascimento", {
        get: function () {
            return this._dataDeNascimento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "setDataDeNascimento", {
        set: function (dataDeNascimento) {
            this._dataDeNascimento = dataDeNascimento;
        },
        enumerable: false,
        configurable: true
    });
    //Implementação do Equals para ajudar na remolção - Rafael
    Autor.prototype.equals = function (obj) {
        var capitulo = obj;
        if (this.constructor !== obj.constructor)
            return false;
        else if (this._nome == undefined && this._dataDeNascimento == undefined)
            return false;
        else if ((this._nome !== capitulo.getNome) && (this._dataDeNascimento !== capitulo.getDataDeNascimento))
            return false;
        else
            return true;
    };
    return Autor;
}());
exports.default = Autor;
