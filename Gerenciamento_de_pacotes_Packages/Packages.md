# Exemplo de alguns Comandos e pacotes úteis no terminal para o Nodejs


- npm init -y -> Cria um arquivo padrão do package.json.
- npm install --save-dev (nome do pacote) -> Esse comando é padrão para instalar um pacote para (devDependencies) ou seja ele vai ser utilizado apenas na hora do desenvolvimento.
- npm install --save-dev prettier -> Esse pacote formata o código com um padrão. (no arquivo package.json colocar a seguinte linha no ("scripts": "format": "prettier --write *.js")) no terminal rodar o seguinte comando (npm run format).
- npm install (nome do pacote) -> Instala o pacote de forma global ou seja um será uma dependencia da aplicação.
- npm install dotenv -> Esse pacote pode ser usado para esconder algumas informações sensiveis da aplicação (no arquivo server/index aonde estão as rotas da aplicação colocar as seguintes linhas de código ( require('dotenv').config(); ) e ( const port = process.env.PORT;  ) tambem precisa ser criado um arquivo chamado (.env) e nesse arquivo acrescentar a palavra PORT= (número da porta desejada) ).
- npm update -> Atualiza todos os pacotes e dependencias da aplicação.