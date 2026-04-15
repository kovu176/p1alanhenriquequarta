

Consultas de CEP API 🚚
API desenvolvida em Node.js para busca de endereços brasileiros a partir do CEP, consumindo o serviço ViaCEP.

🚀 Tecnologias
Node.js (Runtime)

Fastify (Framework Web)

Axios (Cliente HTTP)

🛠️ Como rodar o projeto
Clone o repositório: git clone <url-do-seu-repo>

Instale as dependências: npm install

Inicie o servidor: npm start

Acesse: http://localhost:3000/cep/01001000

🛣️ Endpoints
GET /cep/:cep
Retorna os dados de endereço do CEP informado.

Exemplo de Resposta (200 OK):

JSON
{
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "cidade": "São Paulo",
  "estado": "SP"
}
Erros Comuns:

400 Bad Request: Formato de CEP inválido (deve conter 8 números).

404 Not Found: CEP não existente na base de dados.
