import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controller/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

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
    app.use(cors(corsOptions))
    //listando todos os items de posts
    app.get("/posts", listarPosts);     //Rota para buscar todos os posts
    app.post("/posts", postarNovoPost); //Rota para criar um post
    app.post("/upload", upload.single("imagem"), uploadImagem)
    
    app.put("/upload/:id", atualizarNovoPost)

}


export default routes;