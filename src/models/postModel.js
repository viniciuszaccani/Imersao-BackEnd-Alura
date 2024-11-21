import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão armazenada em uma variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts(){
    const db = conexao.db("imersao-instabytes"); // nome do banco de dados criado no Atlas
    const colecao = db.collection("posts");
    return colecao.find().toArray();            //find busca a lista
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);   //insertOne insere o post
}