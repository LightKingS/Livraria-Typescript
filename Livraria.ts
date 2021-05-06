import Livro from "./Livro";
import promptSync from 'prompt-sync';

const prompt = promptSync();
let Livros: Livro[] = [];
let option = 0

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
            cadastrarLivro()
            break;
        case 2:
            removerLivro()
            break;
        case 3:
            listarAcervo()
            break;
        case 4:
            resetarLivraria()
            break;
        case 5:
            modificarLivroDoAcervo()
            break;
        case 6:
            menuListarCapitulos()
            break;
        case 9:
            break;
        default:
            console.log('Opção inválida.')
    }
}

function cadastrarLivro(): number {
    let i = Livros.length
    if (i >= 499) {
        console.log("Limite máximo de livros excedido")
        return -1
    }
    let titulo = prompt("Titulo: ")
    let isbn = prompt("ISBN: ")

    const novoLivro: Livro = new Livro(titulo, isbn);
    cadastrarAutores(novoLivro);
    cadastrarCapitulos(novoLivro);

    Livros.push(novoLivro);

    if (Livros.length > i) {
        return Livros.length
    }
    else {
        return -1
    }
}

function cadastrarAutores(novoLivro: Livro): void {
    let numAutor = +prompt("Digite o número de autores: ")
    for (let i = 0; i < numAutor; i++) {
        let nome = prompt("Nome do autor: ")
        let dataDeNascimento = prompt("Data de Nascimento do autor: (dd/mm/yyyy)")
        let partes = dataDeNascimento.split("/")
        var data = new Date(+partes[1], +partes[0], +partes[2])

        novoLivro.adicionarAutor(nome, data);
    }
}

function cadastrarCapitulos(novoLivro: Livro): void {
    let numCap = +prompt("Digite o número de capítulos: ")
    for (let i = 0; i < numCap; i++) {
        let titulo = prompt("Titulo do capítulo: ")
        let texto = prompt("Texto do capítulo:")

        novoLivro.adicionarCapitulo(titulo, texto);
    }
}

function removerLivro() {
    if (Livros.length > 0) {
        console.log("\n+================ Livros - Remover ==================+");
        for (let i = 0; i < Livros.length; i++) {
            console.log(`| [${i + 1}] - Livro: ${Livros[i].getTitulo} `);
        }

        let menuOpt = -1;
        while (menuOpt < 0 || menuOpt > Livros.length) {
            menuOpt = parseInt(prompt(`Digite o id do livro para remover, ou (-1) para sair: `));
            if (menuOpt > 0 && menuOpt <= Livros.length) {
                Livros.splice(menuOpt-1, 1);
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
        for (let i = 0; i < Livros.length; i++) {
            let autores = Livros[i].getAutores;
            console.log(`|[${i}] - Livro: ${Livros[i].getTitulo} `);
            console.log(`| - Autores: `);
            for (let j = 0; j < autores.length; j++) {
                console.log(`| ----- ${autores[j].getNome}`);
            }
        }
        console.log("+==========================================+");
    }
    else {
        console.log("Não há dados cadastrados.");
    }
    console.log("\n");
}

function resetarLivraria(): void {
    let removeOpt = -1;

    while(removeOpt <= 0 || removeOpt > 2){
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
                console.log('Opção inválida.')
        }
    }
}

function modificarLivroDoAcervo() {
    let opt = -1;

    while(opt <= 0 || opt > 3){
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
                console.log('Opção inválida.')
        }
    }
}

function menuListarCapitulos(): void {
    if (Livros.length > 0) {
        console.log("\n+================ Livros - Listar Capítulos ==================+");

        for (let i = 0; i < Livros.length; i++) {
            console.log(`| [${i + 1}] - Livro: ${Livros[i].getTitulo} `);
        }

        let menuOpt = -1;

        while (menuOpt < 0 || menuOpt > Livros.length) {
            menuOpt = parseInt(prompt(`Digite o id do livro para ver seu(s) capítulo(s), ou -1 para sair: `));
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

function listarCapitulos(livro: Livro): void {
    const capitulos = livro.getCapitulos;
    console.log("+=========================( Capítulos )======================+");
    console.log(`| Livro: ${livro.getTitulo} `);
    for (let i = 0; i < capitulos.length; i++) {
        console.log(`| [Capítulo ${i + 1}] : ${capitulos[i].getTitulo} `);
    }
    console.log("+=============================================================+\n");
}

function menuAdicionarCapitulo(): void {
    if (Livros.length > 0) {
        console.log("\n+================ Livros - Adicionar cap. ==================+");
        for (let i = 0; i < Livros.length; i++) {
            console.log(`| [${i + 1}] - Livro: ${Livros[i].getTitulo} `);
        }

        let menuOpt = -1;

        while (menuOpt < 0 || menuOpt > Livros.length) {
            menuOpt = parseInt(prompt(`Digite o id do livro para adicionar capítulo(s), ou (-1) para sair: `));
            if (menuOpt > 0 && menuOpt <= Livros.length) {
                cadastrarCapitulos(Livros[menuOpt - 1]);
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

function menuAdicionarAutor(): void {
    if (Livros.length > 0) {
        console.log("\n+================ Livros - Adicionar Autor ==================+");
        for (let i = 0; i < Livros.length; i++) {
            console.log(`| [${i + 1}] - Livro: ${Livros[i].getTitulo} `);
        }

        let menuOpt = -1;
        while (menuOpt < 0 || menuOpt > Livros.length) {
            menuOpt = parseInt(prompt(`Digite o id do livro para adicionar capítulo(s), ou (-1) para sair: `));
            if (menuOpt > 0 && menuOpt <= Livros.length) {
                cadastrarAutores(Livros[menuOpt - 1]);
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