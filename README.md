<h1 align="center">Devices Manager Web + API</h1>

Estrutura do Projeto
=================
<!--ts-->
   * [Sobre](#sobre)
   * [Web](#web)
   * [API](#api)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pré-requisitos)
      * [Intruções](#instruções)
   * [Autor](#autor)
<!--te-->

Sobre
=================
Desafio para Desenvolvedor Web FullStack

Web
=================
Site para consultar a Aplicação Web:
*Não finalizado, portanto não foi implementado*

API
=================
Site para consultar a API:
http://ec2-18-212-254-181.compute-1.amazonaws.com:3333/api-docs/


Como usar
=================

### Pré-requisitos
```bash
# instalar o node 

# instalar o docker

# instalar o docker-compose


```

### 🎲 Instruções

```bash

# Primeito Clone este repositório
$ git clone <https://github.com/ismaelsilva/desafio-um.git>

# Segundo dê um checkout na branch do main
$ git checkout main

# Terceiro dê um pull para atualizar a branch
$ git pull

# Acesse a pasta do projeto no terminal
$ cd desafio-um/

# para o app web
$ cd web
$ npm install
$ ng serve

# para a api
$ cd api
$ npm install ou yarn
$ docker-compose up --force-recreate 
$ npm typeorm migration:run ou yarn typeorm migration:run
$ docker-compose stop
$ docker-compose start

# Abra o navegador da web na seguinte url: localhost:3333/api-docs

```

Autor
=================
   - Ismael Silva

