# RocketSeat-MaratonaDevV3
Repositório da 3ª MaratonaDev da RocketSeat, com o instrutor Mayk Brito.
Start em programação. Compartilhando o básico da programação HTML/CSS/Javascript e Node.js
https://rocketseat.com.br/maratonadev/inscricao/3.0

# Versão Master:
1. Criação de um .html do zero, utilizando o Visual Studio Code
2. Criação de um .css interativo com o .html do zero, utilizando o Visual Studio Code
3. Criação de um stript.js que cria a interação entre: ações do usuário-> .html X .css
4. Criação de um servidor web utilizando o Node.js
   - Configuração dos end-points
   - Configuração do banco de dados (Postgres)
   - Configuração do template-engine (Nunjucks)

# Descubra o caminho para dominar a programação do zero

<span>Temas Abordados:</span><br>
  -Criação de uma página HTML do zero, usando HTML 5, usando e entendendo a estrutura, classes e funcionalidades.<br>
  -Criando e aplicando CSS completo e com design responsivo<br>
  -Entendendo a utilização do Javascript em uma página HTML, usando funções atreladas ao CSS<br>
  -Instalando Node.js e programando seu próprio servidor<br>
  -Criando um formulário que insere novos doadores dentro de um banco de dados<br>
  
  
  
  # Criado o Database e Tabela
  
  1. Instale o Postgres
  2. Crie um database chamado "doe"
  3. Crie uma tabela chamada "donors"<br> `create table donors(id SERIAL PRIMARY KEY, name VARCHAR NOT NULL, email VARCHAR NOT NULL, blood VARCHAR NOT NULL);`
  4. abra o terminal na pasta do projeto e inicialize o servidor<br>`npm start`
  5. Pronto !!! Agora é só acessar o servidor<br>[http://localhost:3000/](http://localhost:3000/)
