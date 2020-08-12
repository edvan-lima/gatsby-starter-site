---
title: O que é o GatsbyJS
date: 2010-08-12 14:38:00 # YYYY-MM-DD - H:M:S
author: Anurag Hazra
tags: ['gatsbyjs', 'javascript']
---

Gatsby é um SSG (Static Site Generator) grátis e de código aberto baseado em
React com foco em tornar o desenvolvimento de sites divertido e eficiente. O
Gatsby é um framework que reúne as melhores funcionalidades do React e outras
diversas ferramentas modernas em um mesmo pacote, facilitando a criação de sites
e aplicações web incrivelmente rápidos e poderosos.

Com o Gatsbyjs você pode desenvolver em React e quando fizer o "build" de seu
código ele irá gerar arquivos estáticos que serão acessados pelos usuários. Isto
traz diversas vantagens para seus sites como suporte a SEO, uma velocidade
incrível, sistema de cache, e diversos outros itens que você pode comparar nesta
página. A comunidade do Gatsby oferece diversos plugins e sites
pré-desenvolvidos para que você possa iniciar seu projeto com meio caminho
andado.

## Como o Gatsby funciona

[Let's start simply by installing all the required dependencies first.](https://www.youtube.com/watch?v=htY0pyAbeUU)

## Porque precisei usar Gatsby

Bem, eu estava desenvolvendo um sistema utilizando o create-react-app, porém o
SEO era extremamente necessário neste caso, e só fui descobrir que o CRA não tem
uma boa compatibilidade com o Crawler do Google na hora do deploy, uma tragédia
né? Como o create-react-app trabalha principalmente com CSR (Client Side
Rendering) ele não consegue uma boa indexação pois quando o bot do Google acessa
o site ele teoricamente não "existe" o que dificulta na indexação de algumas
páginas.

Basicamente o fluxo que o crawler estava fazendo era: Acessa o site > O site
solicita informações da API > As informações são dispostas na tela > Indexa a
página > o crawler não visualiza nenhum link ou páginas extras > sai do site,
assim a única página indexada era a home (index), as páginas restantes
simplesmente não existiam para o Google.

Tentei de diversas maneiras fazer o SEO funcionar com CSR, porém não obtive
sucesso. Talvez por falta de experiência ou não há uma forma eficiente até o
momento.

A escolha do Gatsbyjs nessa situação foi para poder aproveitar a vantagem de
SEO, e acabei me beneficiando de diversas outras vantagens dessa ferramenta,
como a oportunidade de trabalhar com tecnologias mais modernas e novas para mim.

O SEO funciona com o Gatsby pois todas as páginas do site já estão criadas no
servidor, sempre que você faz o processo de build no Gatsby ele cria todas as
páginas do site e deixa elas prontas para serem acessadas, com todo o conteúdo
gerado. Então quando o crawler do Google vier em seu site todo o conteúdo estará
disposto para que ele possa ler.

E o melhor de tudo é que você ainda pode usar os recursos do React para popular
ou gerenciar componentes no front-end.

## Gatsby.js ou Next.js

Provavelmente você acabará chegando a esta pergunta.

Um ponto que deve ser compreendido é que o Gatsby precisa rodar uma build para
gerar todas as páginas do site e depois você deixa elas online, super rápidas e
eficientes.

É uma abordagem interessante, mas atente-se a um ponto: E se você quiser
atualizar alguma informação nas páginas geradas? Precisará rodar a build
novamente para atualizar informações dispostas nos elementos.

Uma solução para evitar essa build constante é o client-data-fetching mas isso
faz com que seu site seja um sistema React normal, Axios -> retornar informações
da api -> popula os components. É interessante se algumas páginas utilizarem
desse recurso, porém se todo o site precisa disso você perde algumas
funcionalidades do Gatsby e dependendo de como for estruturado esse fetch o
crawler do Google não conseguirá ler as informações a tempo, e resultará em
perda de SEO.

E esse ponto é crítico caso você precise atualizar muitas ~imagine muiiiiitas~
páginas que já estão geradas e então precisa fazer build novamente, e uma build
muito grande no Gatsby leva alguns minutos...

A comunidade do Gatsby vem discutindo sobre este ponto de gerar build com muitas
páginas, se quiser acompanhar é só acessar a issue no Github

**Useful resources:-**

- [Fonte](https://segredo.dev/o-que-e-o-gatsbyjs/)
