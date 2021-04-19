"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Autor_1 = require("./Autor");
var Capitulo_1 = require("./Capitulo");
var Livro = /** @class */ (function () {
    function Livro(titulo, ISBN) {
        this._ISBN = ISBN;
        this._titulo = titulo;
    }
    Object.defineProperty(Livro.prototype, "capitulos", {
        get: function () {
            return this._capitulos;
        },
        set: function (capitulos) {
            this._capitulos = capitulos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "autores", {
        get: function () {
            return this.autores;
        },
        set: function (autores) {
            this._autores = autores;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "ISBN", {
        get: function () {
            return this._ISBN;
        },
        set: function (ISBN) {
            this._ISBN = ISBN;
        },
        enumerable: false,
        configurable: true
    });
    Livro.prototype.adicionarCapitulo = function (titulo, texto) {
        var tamanho1 = this._capitulos.length;
        this._capitulos.push(new Capitulo_1.default(titulo, texto));
        var tamanho2 = this._capitulos.length;
        if (tamanho1 < tamanho2) {
            return tamanho1;
        }
        else {
            return -1;
        }
    };
    Livro.prototype.removerCapitulo = function (capituloProcurado) {
        var i = 0;
        for (i = 0; i <= this._capitulos.length; i++) {
            if (this._capitulos[i].equals(capituloProcurado)) {
                this._capitulos.splice(i, 1);
                return i;
            }
        }
        if (i > this._capitulos.length - 1) {
            return -1;
        }
    };
    Livro.prototype.adicionarAutor = function (nome, dataDeNascimento) {
        var tamanho1 = this._autores.length;
        this._autores.push(new Autor_1.default(nome, dataDeNascimento));
        var tamanho2 = this._autores.length;
        if (tamanho1 < tamanho2) {
            return tamanho1;
        }
        else {
            return -1;
        }
    };
    Livro.prototype.removerAutor = function (autorProcurado) {
        var i = 0;
        for (i = 0; i <= this._autores.length; i++) {
            if (this._autores[i].nome == autorProcurado.nome && this._autores[i].dataDeNascimento == autorProcurado.dataDeNascimento) {
                this._autores.splice(i, 1);
                return i;
            }
        }
        if (i > this._autores.length - 1) {
            return -1;
        }
    };
    return Livro;
}());
exports.Livro = Livro;
