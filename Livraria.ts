import Autor from "./Autor";
import Capitulo from "./Capitulo";
import { Livro } from "./Livro";

let Livros = []

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
            listarCapitulos()
            break;
        case 9:
            break;
        default:
            console.log('Opção inválida.')
    }
}


function cadastrarLivro(): number{
    let i = Livros.length
    if (i >= 499){
        console.log("Limite máximo de livros excedido")
        return -1
    }
    let titulo = prompt("Titulo: ")
    let isbn = prompt("ISBN: ")
    cadastrarAutores()
    cadastrarCapitulos()

    Livros.push(new Livro(titulo,isbn))
    if (Livros.length > i){
        return Livros.length
    } else {
        return -1
    }
}

function cadastrarAutores(){
    let numAutor = +prompt("Digite o número de autores: ")
    for (let i=0;i<numAutor;i++){
        let nome = prompt("Nome do autor: ")
        let dataDeNascimento = prompt("Data de Nascimento do autor: (dd/mm/yyyy)")
        let partes = dataDeNascimento.split("/")
        var data = new Date(+partes[1],+partes[0],+partes[2])
        
        new Autor(nome, data)
    }
}

function cadastrarCapitulos(){
    let numCap = +prompt("Digite o número de capítulos: ")
    for (let i=0;i<numCap;i++){
        let titulo = prompt("Titulo do capítulo: ")
        let texto = prompt("Texto do capítulo:")
        
        new Capitulo(titulo,texto)
    }
}

function removerLivro() {
    throw new Error("Function not implemented.");
}

function listarAcervo() {
    throw new Error("Function not implemented.");
}

function resetarLivraria() {
    throw new Error("Function not implemented.");
}

function modificarLivroDoAcervo() {
    throw new Error("Function not implemented.");
}

function listarCapitulos() {
    throw new Error("Function not implemented.");
}

