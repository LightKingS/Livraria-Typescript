"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = __importDefault(require("./Livro"));
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = prompt_sync_1.default();
var Livros = [];
var option = 0;
while (option != 9) {
    console.log("+================ Produto ==================+");
    console.log("|1. Cadastrar novo livro                    |");
    console.log("|2. Remover livro do acervo                 |");
    console.log("|3. Listar acervo                           |");
    console.log("|4. Resetar livraria                        |");
    console.log("|5. Modificar livro do acervo               |");
    console.log("|6. Listar capitulos de livro               |");
    console.log("|9. Sair                                    |");
    console.log("+===========================================+");
    option = +prompt("Escolha uma ação: ");
    switch (option) {
        case 1:
            cadastrarLivro();
            break;
        case 2:
            removerLivro();
            break;
        case 3:
            listarAcervo();
            break;
        case 4:
            resetarLivraria();
            break;
        case 5:
            modificarLivroDoAcervo();
            break;
        case 6:
            menuListarCapitulos();
            break;
        case 9:
            break;
        default:
            console.log('Opção inválida.');
    }
}
function cadastrarLivro() {
    var i = Livros.length;
    if (i >= 499) {
        console.log("Limite máximo de livros excedido");
        return -1;
    }
    var titulo = prompt("Titulo: ");
    var isbn = prompt("ISBN: ");
    var novoLivro = new Livro_1.default(titulo, isbn);
    cadastrarAutores(novoLivro);
    cadastrarCapitulos(novoLivro);
    Livros.push(novoLivro);
    if (Livros.length > i) {
        return Livros.length;
    }
    else {
        return -1;
    }
}
function cadastrarAutores(novoLivro) {
    var numAutor = +prompt("Digite o número de autores: ");
    for (var i = 0; i < numAutor; i++) {
        var nome = prompt("Nome do autor: ");
        var dataDeNascimento = prompt("Data de Nascimento do autor: (dd/mm/yyyy)");
        var partes = dataDeNascimento.split("/");
        var data = new Date(+partes[1], +partes[0], +partes[2]);
        novoLivro.adicionarAutor(nome, data);
    }
}
function cadastrarCapitulos(novoLivro) {
    var numCap = +prompt("Digite o número de capítulos: ");
    for (var i = 0; i < numCap; i++) {
        var titulo = prompt("Titulo do capítulo: ");
        var texto = prompt("Texto do capítulo:");
        novoLivro.adicionarCapitulo(titulo, texto);
    }
}
function removerLivro() {
    if (Livros.length > 0) {
        console.log("\n+================ Livros - Remover ==================+");
        for (var i = 0; i < Livros.length; i++) {
            console.log("| [" + (i + 1) + "] - Livro: " + Livros[i].getTitulo + " ");
        }
        var menuOpt = -1;
        while (menuOpt < 0 || menuOpt > Livros.length) {
            menuOpt = parseInt(prompt("Digite o id do livro para remover, ou (-1) para sair: "));
            if (menuOpt > 0 && menuOpt <= Livros.length) {
                Livros.splice(menuOpt - 1, 1);
                console.log("Livro removido com sucesso!");
                break;
            }
            else if (menuOpt == -1)
                break;
            else {
                console.log("Id inválido, favor informar novamente.");
                menuOpt = -1;
            }
        }
    }
    else
        console.log("\n\nNão há livros há livros registrados.\n\n");
}
function listarAcervo() {
    if (Livros.length > 0) {
        console.log("\n+================ Livros ==================+");
        for (var i = 0; i < Livros.length; i++) {
            var autores = Livros[i].getAutores;
            console.log("|[" + i + "] - Livro: " + Livros[i].getTitulo + " ");
            console.log("| - Autores: ");
            for (var j = 0; j < autores.length; j++) {
                console.log("| ----- " + autores[j].getNome);
            }
        }
        console.log("+==========================================+");
    }
    else {
        console.log("Não há dados cadastrados.");
    }
    console.log("\n");
}
function resetarLivraria() {
    var removeOpt = -1;
    while (removeOpt <= 0 || removeOpt > 2) {
        console.log("+================ Resetar ==================+");
        console.log("| Tem certeza que deseja resetar livraria?  |");
        console.log("|1. Sim                                     |");
        console.log("|2. Não                                     |");
        console.log("+===========================================+");
        removeOpt = parseInt(prompt("Escolha uma ação: "));
        switch (removeOpt) {
            case 1:
                Livros.splice(0, Livros.length);
                console.log("\nLivraria resetada com sucesso!\n");
                break;
            case 2:
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}
function modificarLivroDoAcervo() {
    var opt = -1;
    while (opt <= 0 || opt > 3) {
        console.log("+=============== Modificar =================+");
        console.log("| Deseja realizar que modificação?          |");
        console.log("|1. Adicionar Capítulos                     |");
        console.log("|2. Adicionar Autores                       |");
        console.log("|3. Sair                                    |");
        console.log("+===========================================+");
        opt = parseInt(prompt("Escolha uma ação: "));
        switch (opt) {
            case 1:
                menuAdicionarCapitulo();
                break;
            case 2:
                menuAdicionarAutor();
                break;
            case 3:
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}
function menuListarCapitulos() {
    if (Livros.length > 0) {
        console.log("\n+================ Livros - Listar Capítulos ==================+");
        for (var i = 0; i < Livros.length; i++) {
            console.log("| [" + (i + 1) + "] - Livro: " + Livros[i].getTitulo + " ");
        }
        var menuOpt = -1;
        while (menuOpt < 0 || menuOpt > Livros.length) {
            menuOpt = parseInt(prompt("Digite o id do livro para ver seu(s) cap\u00EDtulo(s), ou -1 para sair: "));
            if (menuOpt > 0 && menuOpt <= Livros.length) {
                listarCapitulos(Livros[menuOpt - 1]);
            }
            else if (menuOpt == -1)
                break;
            else {
                console.log("Id inválido, favor informar novamente.");
                menuOpt = -1;
            }
        }
    }
    else
        console.log("\n\nNão há livros há livros registrados.\n\n");
}
function listarCapitulos(livro) {
    var capitulos = livro.getCapitulos;
    console.log("+=========================( Capítulos )======================+");
    console.log("| Livro: " + livro.getTitulo + " ");
    for (var i = 0; i < capitulos.length; i++) {
        console.log("| [Cap\u00EDtulo " + (i + 1) + "] : " + capitulos[i].getTitulo + " ");
    }
    console.log("+=============================================================+\n");
}
function menuAdicionarCapitulo() {
    if (Livros.length > 0) {
        console.log("\n+================ Livros - Adicionar cap. ==================+");
        for (var i = 0; i < Livros.length; i++) {
            console.log("| [" + (i + 1) + "] - Livro: " + Livros[i].getTitulo + " ");
        }
        var menuOpt = -1;
        while (menuOpt < 0 || menuOpt > Livros.length) {
            menuOpt = parseInt(prompt("Digite o id do livro para adicionar cap\u00EDtulo(s), ou (-1) para sair: "));
            if (menuOpt > 0 && menuOpt <= Livros.length) {
                adicionarCapituloLivro(Livros[menuOpt - 1]);
            }
            else if (menuOpt == -1)
                break;
            else {
                console.log("Id inválido, favor informar novamente.");
                menuOpt = -1;
            }
        }
    }
    else
        console.log("\n\nNão há livros há livros registrados.\n\n");
}
function adicionarCapituloLivro(livro) {
    var numCap = +prompt("Digite o número de capítulos: ");
    for (var i = 0; i < numCap; i++) {
        var titulo = prompt("Titulo do capítulo: ");
        var texto = prompt("Texto do capítulo:");
        livro.adicionarCapitulo(titulo, texto);
    }
}
function menuAdicionarAutor() {
    if (Livros.length > 0) {
        console.log("\n+================ Livros - Adicionar Autor ==================+");
        for (var i = 0; i < Livros.length; i++) {
            console.log("| [" + (i + 1) + "] - Livro: " + Livros[i].getTitulo + " ");
        }
        var menuOpt = -1;
        while (menuOpt < 0 || menuOpt > Livros.length) {
            menuOpt = parseInt(prompt("Digite o id do livro para adicionar cap\u00EDtulo(s), ou (-1) para sair: "));
            if (menuOpt > 0 && menuOpt <= Livros.length) {
                adicionarAutorLivro(Livros[menuOpt - 1]);
            }
            else if (menuOpt == -1)
                break;
            else {
                console.log("Id inválido, favor informar novamente.");
                menuOpt = -1;
            }
        }
    }
    else
        console.log("\n\nNão há livros há livros registrados.\n\n");
}
function adicionarAutorLivro(livro) {
    var numAutor = +prompt("Digite o número de autores: ");
    for (var i = 0; i < numAutor; i++) {
        var nome = prompt("Nome do autor: ");
        var dataDeNascimento = prompt("Data de Nascimento do autor: (dd/mm/yyyy)");
        var partes = dataDeNascimento.split("/");
        var data = new Date(+partes[1], +partes[0], +partes[2]);
        livro.adicionarAutor(nome, data);
    }
}
