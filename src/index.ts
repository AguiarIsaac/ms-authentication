import express from "express";
import statusRouter from "./routes/status.router";
import errorHandler from './middlewares/error-handler.middleware';
import usersRoute from "./routes/users.route";

const app = express();

// Confs da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Confs de Rotas
app.use(statusRouter);
app.use(usersRoute);


// Configuração dos Handlers de Erro
app.use(errorHandler);
// Inicialização do server
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});