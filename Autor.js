"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Autor = /** @class */ (function () {
    function Autor(nome, dataDeNascimento) {
        this._nome = nome;
        this._dataDeNascimento = dataDeNascimento;
    }
    Object.defineProperty(Autor.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "dataDeNascimento", {
        get: function () {
            return this._dataDeNascimento;
        },
        set: function (dataDeNascimento) {
            this._dataDeNascimento = dataDeNascimento;
        },
        enumerable: false,
        configurable: true
    });
    return Autor;
}());
exports.default = Autor;
