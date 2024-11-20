import express from "express"
import { listarPosts } from "../controller/postsController.js";

const routes = (app) => {
    app.use(express.json()) // Converte o corpo da requisição em formato JSON para um objeto JavaScript.

    //listando todos os items de posts
    app.get("/posts", listarPosts);

    
}


export default routes;