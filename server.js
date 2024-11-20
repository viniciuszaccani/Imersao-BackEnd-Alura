import express from "express"

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gatinho dormindo em uma caixa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Paisagem com um gato",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gato preto em uma noite estrelada",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json()) // Converte o corpo da requisição em formato JSON para um objeto JavaScript.

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

//listando todos os items de posts
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});


function buscaPostId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });

}

//listando um unico item da lista de posts
app.get("/posts/:id", (req, res) => {
    const index = buscaPostId(req.params.id)
    res.status(200).json(posts[index]);
});