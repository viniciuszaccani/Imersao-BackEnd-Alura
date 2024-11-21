import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem} from "../controller/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json()) // Converte o corpo da requisição em formato JSON para um objeto JavaScript.

    //listando todos os items de posts
    app.get("/posts", listarPosts);     //Rota para buscar todos os posts
    app.post("/posts", postarNovoPost); //Rota para criar um post
    app.post("/upload", upload.single("imagem"), uploadImagem)

}


export default routes;