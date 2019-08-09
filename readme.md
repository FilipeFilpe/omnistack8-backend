Criação do projeto Node:
    yarn init -y
Instala o Express, que é 
    yarn add express
ODM mongoose
    yarn add mongoose
Para fazer req para apis externas
    yarn add axios
Live reload
    yarn add nodemon -D
    Criar "scripts" no package.js
        "dev": "nodemon src/server.js"
        yarn dev
Permite que api seja utilizada por outras apps
    yarn add cors
Importação de pacotes
    const nomeVariavel = require('nomePacote');