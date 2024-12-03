const toDoList = {

    usuarios: [

        {
            usersname: 'Felipe Rodrigues',
        }

    ],

    posts: [
        
        {
        id: 1,
        owner: 'Felipe Rodrigues',
        content: 'Primeiro post'

    }
],

};

//CRIAR

function criaPost(dados) {
    toDoList.posts.push({
        id: toDoList.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });


}
criaPost({owner: 'Felipe Rodrigues', content: 'Segundo post'});
criaPost({owner: 'Felipe Rodrigues', content: 'Terceiro post'});
//console.log(toDoList.posts)

//LER

function pegaPost(){

    return toDoList.posts;

}

console.log(pegaPost())

//ATUALIZA

function atualizaPost(id, novoConteudo){
    const postAtualizado = pegaPost().find((post) =>{
        return post.id === id;
    });

    console.log(postAtualizado)
    postAtualizado.content = novoConteudo

}

atualizaPost(1, 'Novo conteúdo do post')
console.log(pegaPost())

//DELETAR

function apagaPost(id){
    const listaPostAtualizado = pegaPost().filter((postAtual) => {
        return postAtual.id !== id;
})

       toDoList.posts = listaPostAtualizado;

}

//apagaPost(1)
//apagaPost(2)
apagaPost(3)
console.log(pegaPost());

