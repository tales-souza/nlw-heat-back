import "dotenv/config";
import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";




import { router } from "./routes";

const app = express();


const serverHttp = http.createServer(app);
app.use(cors());


const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});




io.on("connection", socket => {
    console.log(`Usuário Conectado no socket`);
});

app.use(express.json());
app.use(router);


app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})




app.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code);

})


export {serverHttp, io }

