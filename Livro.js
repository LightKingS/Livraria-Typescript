"use strict";
//Modificado por: Rafael Ochôa Mello - 06/04/21
/* (Ajustes):

- Alterada a imp. do constructor
- Alteradas as assinaturas dos Gets'n Sets
    dos atributos nome e data de nasc.
- Re-implementados os métodos de adição e remoção de cap. e autor
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Autor_1 = __importDefault(require("./Autor"));
var Capitulo_1 = __importDefault(require("./Capitulo"));
var Livro = /** @class */ (function () {
    function Livro(titulo, ISBN) {
        this._autores = [];
        this._capitulos = [];
        this._numeroDeCapitulos = 0;
        this._ISBN = ISBN;
        this._titulo = titulo;
    }
    Object.defineProperty(Livro.prototype, "getCapitulos", {
        get: function () {
            return this._capitulos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "getTitulo", {
        get: function () { return this._titulo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "setCapitulos", {
        set: function (capitulos) {
            this._capitulos = capitulos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "getAutores", {
        get: function () {
            return this._autores;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "setAutores", {
        set: function (autores) {
            this._autores = autores;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "getISBN", {
        get: function () {
            return this._ISBN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "setISBN", {
        set: function (ISBN) {
            this._ISBN = ISBN;
        },
        enumerable: false,
        configurable: true
    });
    //Métodos de Capítulos
    Livro.prototype.adicionarCapitulo = function (titulo, texto) {
        var nCapitulos = this._capitulos.length;
        this._capitulos.push(new Capitulo_1.default(titulo, texto));
        if (nCapitulos >= this._capitulos.length)
            return -1;
        this._numeroDeCapitulos++;
        return nCapitulos;
    };
    Livro.prototype.removerCapitulo = function (capituloProcurado) {
        var i = 0;
        for (i = 0; i <= this._capitulos.length; i++) {
            if (this._capitulos[i].equals(capituloProcurado)) {
                this._capitulos.splice(i, 1);
                break;
            }
        }
        if (i > this._capitulos.length - 1)
            return -1;
        this._numeroDeCapitulos--;
        return i;
    };
    //Métodos de Autor
    Livro.prototype.adicionarAutor = function (nome, dataDeNascimento) {
        var nAutores = this._autores.length;
        this._autores.push(new Autor_1.default(nome, dataDeNascimento));
        if (nAutores >= this._autores.length)
            return -1;
        return nAutores;
    };
    Livro.prototype.removerAutor = function (autorProcurado) {
        var i = 0;
        for (i = 0; i <= this._autores.length; i++) {
            if (this._autores[i].equals(autorProcurado)) {
                this._autores.splice(i, 1);
                break;
            }
        }
        if (i > this._autores.length - 1)
            return -1;
        return i;
    };
    return Livro;
}());
exports.default = Livro;
