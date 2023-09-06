let listaProdutos = [];
let idGerador = 1;

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = idGerador++;
    listaProdutos.push(produto);
}

/*function buscarPorId(id){
    for(let produto of listaProdutos){
        if(produto.id === id){
            return produto;
        }
    }
}*/

function buscarPorId(id){
    return listaProdutos.find(function(produto) {
        return(produto.id === id);        
    })
   
    //return listaProdutos.find((produto) => produto.id === id);        

}


function atualizar(id, produto) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            listaProdutos[ind] = produto;
            listaProdutos[ind].id = id;
            return;
        }
    }
}

function deletar(id) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            return listaProdutos.splice(ind,1);
        }
    }
}

function pesquisarPorCategoria(categoria) {
    return listaProdutos.filter(
        (produto) => {
            return produto.categoria === categoria;
        }
    );
}

function pesquisarPorLikeNome(nome) {
    return listaProdutos.filter(
        (produto) => {
            return produto.nome.toUpperCase().includes(nome.toUpperCase());
        }
    )
}

function main() {
    console.log(listar());
    
    const produto1 = new Object();
    produto1.nome = "arroz";
    produto1.categoria = "alimento";
    produto1.preco = 5;
    inserir(produto1);

    const produto2 = {
        nome: "refrigerante",
        categoria: "bebida",
        preco: 8
    };
    inserir(produto2);

    const produto3 = {
        nome: "feijao",
        categoria: "alimento",
        preco: 9
    };
    inserir(produto3);
   
    console.log("Listar: ", listar());

    console.log("Pesquisar pela categoria 'alimento", 
        pesquisarPorCategoria('alimento'));

    console.log("Pesquisar pelo nome like 'E", 
        pesquisarPorLikeNome('E'));
        
    const produtoBuscarId3 = buscarPorId(3);
    console.log("BuscarPorId3: ", produtoBuscarId3);
    
    const produtoBuscarId1 = buscarPorId(1);
    console.log("BuscarPorId1: ",produtoBuscarId1);

    atualizar(2, { 
        nome: "suco", 
        categoria: "bebida", 
        preco: 9.9
    });

    deletar(3);

    console.log("Listar: ", listar());

}

main();