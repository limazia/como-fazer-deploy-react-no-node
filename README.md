# React com Node.JS: como fazer deploy

Você tem dúvidas de como fazer o deploy de sua aplicação React com Node JS? Nesse artigo simplificamos para você, confira mais.

O React sendo uma biblioteca muito versátil do JavaScript é possível combina-la com várias linguagens, a combinação mais comum entre elas é junto ao Node JS. Nesse tutorial vamos ver como fazer essa integração de uma maneira simples.

### Criação aplicação painel
Primeira é necessário que façamos a criação de uma aplicação node no painel de controle, para que seja criado toda estrutura de pastas do ambiente.

Para isso você pode verificar este [artigo](https://king.host/wiki/artigo/como-criar-uma-aplicacao-nodejs/).

### Requisitos
Antes de fazermos o deploy da aplicação é necessário que instalemos o `express`. Para isso podemos rodar esse comando:

```sh
npm install express
```

### Preparando os arquivos para Deploy
Nesse tutorial, para exemplificar, vamos fazer o deploy da aplicação padrão de quando iniciamos um projeto no React.

Primeiramente vamos ir até a pasta onde se encontra nossa aplicação e rodar o seguinte comando:

```sh
npm run build
```

Esse comando irá gerar uma versão otimizada e pronta para deploy em qualquer ambiente. Quando rodar o comando, pode demorar uns minutos dependendo do tamanho da aplicação para que seja concluído. Após isso a aplicação se encontrará dentro da pasta `build`.

![Pasta build criada dentro da pasta da aplicação.](https://i.imgur.com/WbYqOJJ.png)

### Upload de arquivos

Faça o upload dos arquivos para onde você quer que fique sua aplicação React. No meu caso, irei deixar a pasta build dentro da `apps_nodejs`.

![Pasta build adicionada na pasta da aplicação no servidor.](https://i.imgur.com/kyU2Fr0.png)

### Edição da main.js

Para que possamos fazer um exemplo vamos usar uma main.js padrão com o express para poder iniciar a aplicação.

```sh
const http = require('http');
const express = require('express');
const app = express();

const port = porta_da_aplicação;
app.listen(port)
```

Com esse código nossa aplicação node já deve estar rodando.

### Criação da rota
Agora o que falta é fazermos a rota para que seja puxado o nosso front-end via React.

Então agora vamos criar rotas no express para que ele consiga puxar nossos arquivos que estão na `build`.

Para que façamos isso podemos usar essas 3 linhas de código:

```sh
const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('/', (req, res) => res.sendfile('index.html' , { root : baseDir } ))
```

Nesse caso estamos criando uma rota para que a aplicação React fique na raiz de nosso site, mas caso queira colocá-la em outro caminho é só editar a linha `app.get('rota-desejada')`.

Assim sua aplicação já deve estar no ar. No nosso caso retornará essa página:

![Aplicação padrão react com node rodando.](https://i.imgur.com/gDtS5dD.png)

### Referência

[React com Node.JS: como fazer deploy - King Host](https://king.host/wiki/artigo/fazer-deploy-de-react-com-node-js/)&nbsp;
[How to Render a React App Using an Express Server in Node.js](https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b)&nbsp;
[How You Can Serve React Build Folder From an Express Endpoint](https://javascript.plainenglish.io/how-you-can-serve-react-js-build-folder-from-an-express-end-point-127e236e4d67)
