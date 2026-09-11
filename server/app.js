require("dotenv").config();
const http = require("http");

// Criação do servidor HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
});

// Criar uma rota para a raiz do servidor
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.write("Bem-vindo ao servidor!");
    res.end();
  }
});

// Inicia o servidor
server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}/`);
});
