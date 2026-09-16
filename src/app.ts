// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";

//importar a classe player do arquivo Player.ts

/* Por que Player.ts deve ser importado com a extensão .js?
Porque o TypeScript, quando compila para JavaScript, 
gera arquivos .js. Portanto, ao importar um módulo TypeScript 
em outro arquivo TypeScript, você deve usar a extensão .js 
para que o Node.js consiga localizar o arquivo corretamente.
*/

import { Player } from "./models/Player.js";
import e from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

/* Middleware para permitir que o servidor aceite requisições JSON */
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Cria uma instância da classe Player
const player = new Player("MayazinhaIX", 100, 1); 

// Rota GET para obter informações sobre um player
/* quando um usuário acessar a rota "/player" via GET,
o servidor irá retornar os dados do player e suas informações em formato JSON*/

app.get("/player", (req: Request, res: Response) => {
    res.json({
        message: "Informações do player",
        player: player,
    });
});

// Rota POST para atacar outro player
/* quando um usuário acessar a rota "player/attack" vis POST, 
o servidor irá chamar o método attack() 
do player e retornar a mensagem resultante*/

app.post("/player/attack", (req: Request, res: Response) => {

    /* chama o método attack() do player e armazena a 
    mensagem de ataque (mensagem retornada)*/

    const attackMessage = player.attack();
    res.json({
        message: attackMessage,
    });
});

// Rota POST para causar dano ao player
/* Quando o usuário acessar a rota "/player/demage" via POST,
o servidor irá chamar o método takedemage() 
do player e retornar a mensagem resultante*/

app.post("/player/damage", (req: Request, res: Response) => {
    //Extrair o valor de dano do corpo da requisição
    const { damage } = req.body; 
    // Obtém o valor de dano enviado no corpo da requisição
    const damageMessage = player.takeDamage(damage);
    // Chamar o método takeDamage() do player e armazenar a mensagem de dano (mensagem retornada)
    res.json({
        // Retorna a mensagem de dano, a saúde atual e o nível atual do player
        action: damageMessage,
        // Retorna a saúde atual do player
        currentHealth: player.health,
        // Retorna o nível atual do player
        currentLevel: player.level,
    });
});

//Rota POST para curar o player
/* quando o usuário acessar a rota "/player/heal"
o servidor irá chamar o método healDamage()*/

app.post("/player/heal", (req: Request, res: Response) => {
    // Extrair o valor de cura do corpo da requisição
    const { heal } = req.body;
    // Chamar o método healDamage() do player e armazenar a mensagem de cura (mensagem retornada)
    const healMessage = player.healDamage(heal);
    res.json({
        // Retorna a mensagem de cura, a saúde atual e o nível atual do player
        action: healMessage,
        // Retorna a saúde atual do player
        currentHealth: player.health,
        // Retorna o nível atual do player
        currentLevel: player.level,
    });
});



// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`GET http://localhost:${PORT}/player - Obter informações do player`);
    console.log(`POST http://localhost:${PORT}/player/attack - Atacar o player`);
    console.log(`POST http://localhost:${PORT}/player/damage - Causar dano ao player`);
    console.log(`POST http://localhost:${PORT}/player/heal - Curar o player`);
});