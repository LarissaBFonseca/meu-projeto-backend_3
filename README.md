Claro. Aqui está o README sem emojis, mantendo a mesma estrutura e sem os códigos:

# README – Desenvolvimento de API com POO e Persistência

## Descrição

Esta atividade teve como objetivo aprimorar o desenvolvimento de uma API utilizando conceitos de Programação Orientada a Objetos (POO) e persistência de dados em sistema de arquivos.

O projeto foi desenvolvido utilizando como contexto um sistema de RPG, no qual foi criada a classe `Player`, responsável por representar o jogador e armazenar informações como nome, vida e nível. Também foram implementados comportamentos relacionados às ações do jogador, como atacar e receber dano.

Além disso, foi utilizado o módulo nativo File System (`fs`) para permitir que os dados do jogador fossem armazenados em um arquivo JSON, mantendo seu estado mesmo após a reinicialização da aplicação.

---

## Objetivos

* Aplicar conceitos de Programação Orientada a Objetos.
* Criar e utilizar classes e objetos em uma API.
* Trabalhar com atributos e métodos de uma classe.
* Utilizar construtores e instanciação de objetos.
* Implementar persistência de dados utilizando o módulo `fs`.
* Trabalhar com arquivos no formato JSON.
* Realizar serialização e desserialização de dados.
* Criar e testar endpoints de uma API.
* Utilizar o Postman para realizar testes das rotas.
* Versionar o projeto utilizando Git e GitHub.

---

## Sistema de RPG

O projeto utiliza um sistema simples de RPG para demonstrar os conceitos de Programação Orientada a Objetos.

A entidade principal do sistema é o `Player`, que possui informações relacionadas ao jogador, como:

* Nome
* Vida (HP)
* Nível

O jogador também possui comportamentos que podem alterar seu estado durante a execução da aplicação, como realizar um ataque ou receber dano.

---

## Programação Orientada a Objetos

Durante a atividade, foram aplicados conceitos fundamentais de POO.

### Classe

Foi criada a classe `Player`, responsável por definir a estrutura e os comportamentos de um jogador.

### Construtor

O construtor foi utilizado para inicializar os atributos do jogador no momento em que um novo objeto é criado.

### Objeto

A partir da classe `Player`, é possível criar uma instância que representa o jogador dentro da aplicação.

### Métodos

Foram utilizados métodos para representar ações do jogador, como atacar e receber dano, permitindo alterar o estado interno do objeto.

---

## Persistência de Dados

Para evitar que os dados do jogador fossem perdidos quando o servidor fosse reiniciado, foi implementada uma camada de persistência utilizando o módulo nativo `fs` (File System).

Os dados do jogador são armazenados no arquivo:

`./data/player.json`

Dessa forma, as informações podem ser gravadas e recuperadas posteriormente.

### Serialização

A serialização consiste na conversão dos dados do objeto para o formato JSON, permitindo que essas informações sejam armazenadas em um arquivo.

### Desserialização

A desserialização ocorre quando os dados são lidos do arquivo JSON e utilizados novamente para reconstruir o estado do jogador em memória.

---

## Endpoints da API

A API possui rotas responsáveis por consultar e modificar o estado do jogador.

### GET `/player`

Responsável por retornar os dados atuais do jogador, permitindo visualizar seu estado no momento da consulta.

### POST `/player/attack`

Responsável por executar a ação de ataque do jogador por meio do método correspondente da classe `Player`.

### POST `/player/damage`

Responsável por receber uma quantidade de dano enviada na requisição e alterar o estado interno do jogador.

Após a alteração, os dados atualizados são persistidos no arquivo JSON.

---

## Testes com Postman

Os endpoints da API foram testados utilizando o Postman, verificando se as requisições estavam sendo processadas corretamente.

Durante os testes foram realizadas operações para:

* Consultar os dados do jogador.
* Executar uma ação de ataque.
* Aplicar dano ao jogador.
* Verificar a atualização dos dados persistidos.

---

## Execução do Projeto

Para iniciar o servidor, foi utilizado o comando:

`npm run dev`

Após a inicialização, as rotas da API podem ser testadas utilizando o Postman.

---

## Tecnologias e Ferramentas

* Node.js
* TypeScript
* Programação Orientada a Objetos (POO)
* Módulo `fs` (File System)
* JSON
* Postman
* Visual Studio Code
* Git
* GitHub

---

## Resultados Obtidos

Ao final da atividade, foi possível desenvolver uma API utilizando conceitos de Programação Orientada a Objetos e implementar a persistência dos dados do jogador em um arquivo JSON.

Os endpoints foram executados e testados no Postman, permitindo consultar e modificar o estado do jogador. A utilização do sistema de arquivos também garantiu que as informações manipuladas pela API permanecessem armazenadas mesmo após a reinicialização do servidor.

---

## Entrega

Para a entrega da atividade foram realizados:

* Desenvolvimento da API.
* Implementação da classe `Player`.
* Implementação dos métodos de interação do jogador.
* Persistência dos dados utilizando o módulo `fs`.
* Testes dos endpoints utilizando o Postman.
* Commit das alterações.
* Push do projeto para o GitHub.
* Envio do link do repositório no Google Classroom.

---

## Autor

**Larissa Beatriz Lima Fonseca**

Atividade desenvolvida para prática de APIs, Programação Orientada a Objetos, persistência de dados, Node.js, TypeScript e versionamento com Git e GitHub.
