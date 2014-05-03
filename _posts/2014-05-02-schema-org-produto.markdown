---
published: true
title: Schema.org 2 - Estruturando dados de produtos
layout: post
tags: [schema.org produtos e-commerce]
categories: [Artigos]
permalink: schema-org-produtos
excerpt: Estruturando dados de produtos.
author: reidark
---
É, to aqui novamamente nessa estrada sem fim. Sabe, gostei muito de escrever [sobre o Schema.org](http://reidark.github.io/schema-org-apenas-use/), e creio que vou fazer uma série sobre o mesmo. Me espanta o número de pessoas que ainda não usam essa poderosa (simples) ferramenta. O método de uso é básico e o resultado é extremamente gratificante.

Ok, como **muitas** pessoas estão trabalhando com e-commerce hoje em dia, resolvi postar como estruturar os dados de um produto. Nesse artigo eu pretendo mostrar como você pode colocar significado nas informações, preços, imagens e muitas outras coisas sobre o seu produto, seja qual for o ramo/tipo de venda.

Pra quem tá vendo esse post "de primeira" e não tem ideia do que seja o Schema.org, recomendo ler [esse tutorial](http://reidark.github.io/schema-org-apenas-use/) onde falei a importãncia e mostrei os fundamentos básicos dessa ferramenta. Então, nesse tutorial, não vou abortar muitos termos técnicos e iniciantes, vou ir mais direto no que realmente interessa :)

## Estruturando dados de produtos

Primeiramente, como ficaria uma busca de um produto com dados estruturados? Vamos ver um exemplo básico utilizando os termos de busca "Kindle".

![Schema.org - Produtos](../assets/img/schema-org-produto.png "Schema.org - Produtos")

Nessa imagem a gente consegue ver algumas diferentes, como avaliação dos usuários e os ratings. Mas, irei contar um segredinho, tem como adicionar mais coisas, como preços e afins, e é isso mesmo que a gente vai aprender. Lembrando também que, não é só porque a busca no Google mostra *poucas* coisas diferentes (como nesse exemplo) que o Schema.org não está funcionando devidamente. Ele está, mas "por trás dos panos".

### Começando com uma estrutura básica

Vamos lá, digamos que nosso produto seja um Kindle (um leitor de e-books criado pela Amazon) e precisamos fazer o anúncio devido do mesmo.

Começaremos com uma estrutura básica assim:

{% highlight html %}

    <div>
        <h1>Kindle Paper Write</h1>
        <h2>Kindle com Wifi, bateria longa vida, tela de 6" com alto contraste</h2>
        <img src="kindle.jpg" />
        <p>Valor: <span>R$299.90</span></p>
    </div>

{% endhighlight %}

Acho que essa seria a estrutura mais básica pra um produto (ignorando botões e parentes). Só quero que vocês tenham em mente como mais ou menos ela é para fazermos a estruturação. Ok, com a nosso esqueleto html montado, vamos adicionar as propriedades do Schema.org para produtos.

O processo a gente já sabe, é só entrar no Schema.org e procurar na busca por "product" que ele vai retornar [esse resultado](https://schema.org/Product). Agora vamos botar a mão na massa.

{% highlight html %}

    <div itemscope itemtype="https://schema.org/Product">
        <h1 itemprop="name">Kindle Paper Write</h1>
        <h2 itemprop="description">Kindle com Wifi, bateria longa vida, tela de 6" com alto contraste</h2>
        <img itemprop="image" src="kindle.jpg" />
            <div itemprop="offers" itemscope itemtype="http://schema.org/AggregateOffer">
                <p>Valor: <span itemprop="lowPrice">R$299.90</span></p>
            </div>
    </div>

{% endhighlight %}

Aqui fiz o básico para estruturar o nome, escrição e imagem. Para estruturar o valor, tive que atrelar outro Schema dentro da primeira estrutura (vai se acostumando, produtos exigem bastante essa prática). Nessa estrutura atrelada, ela apresenta uma sub-categoria da principal, que é **ofetas**. A sub-categoria entitulada *AggregateOffer* é para estruturar vários valores referente ao produto, do menor até o maior. Vamos usar ele melhor no próximo exemplo.

Só nessa pequena estruturação, olha a quantidade de dados que o Google conseguiu tirar da minha estrutura:

![Schema.org - Estruturando dados de Produtos](../assets/img/schema-org-produto-exemplo.png "Schema.org - Estruturando dados de Produtos")

Sim, com pequeno trabalho e esforço, já conseguimos *fazer* o Google entender que ali é realmente um produto, e ainda mais, conseguimos mostrar o valor e as informações dele.

### Avançando um pouco mais

Ok, vou mostrar mais um exemplo usando aquela estrutura básica, para termos uma noção mais detalhada. Irei acrescentar mais informação, e agora irei mostrar o rating, valores e mais algumas coisas.

{% highlight html %}

    <div itemscope itemtype="https://schema.org/Product">
        <h1 itemprop="name">Kindle Paper Write</h1>
        <h2 itemprop="description">Kindle com Wifi, bateria longa vida, tela de 6" com alto contraste</h2>
        <img itemprop="image" src="kindle.jpg" />
            <div itemprop="offers" itemscope itemtype="http://schema.org/AggregateOffer">
                <p>De: <span itemprop="lowPrice">R$299.90</span> até: <span itemprop="highPrice">R$599.00</span></p>
            </div>
            <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
                <p><span itemprop="ratingValue">95</span>% recomendações de <span itemprop="bestRating">100</span>%. Total de usuários que recomendaram: <span itemprop="ratingCount">157</span>.</p>
            </div>
            <div itemprop="Review" itemscope itemtype="http://schema.org/Review">
                <p><span itemprop="author">reidark</span> disse: "<span itemprop="review">Adorei o produto, ótima qualidade, estão de parabéns!</span>"</p>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    Avalição de reidark sobre o produto: <span itemprop="ratingValue">5</span> estrelas de <span itemprop="bestRating">5</span>.
                </div>
            </div>
    </div>

{% endhighlight %}

Eita, agora o negócio ficou grande, hein. É, eu exagerei um pouquinho, mas, queria mostrar até onde e até aonde vai essa estruturação de produtos, e, lembrando que, esse ainda foi básico, dá pra aumentar bem mais.

Nesse exemplo eu adicionei o menor valor do produto, e o maior valor, pra isso eu apenas adicionei mais um span com a propriedade *highPrice* dentro da div com o **itemprop** *aAggregateOffer* (linha 5).

Também, como prometido, adicionei a classificação de rating dos usuários, na linha logo abaixo á de cima. Pra isso atrelei o *AggregateRating* que é um type especialmente para isso, colocar **geral** a classificação do produto. Usei 3 spans com 3 valores diferentes. No primeiro span (com o itemprop *ratingValue*) era o total de classificações dos usuários, portanto, denominei na segunda span (itemprop *bestRating*) o valor 100, pra ele entender que 100 é o máximo. Pra finalizar, no terceiro e último span (itemprop *ratingCount*) adicionei 157 dizendo que era o total de classificações de usuários.

No último item atrelado, simulei um *review*(avaliação escrita) de um usuário, com os itemprop *author* e *review* logo na linha abaixo pra dizer **quem** fez o review e **qual** foi a opinião dele. E pra finalizar, adicionei mais uma div de um Schema atrelado como um reviewRating, que significa "avaliação individual" pra simular quantas estrelas ele deu pra aquele produto.

No final, nosso produto ficou com esse visual (pra fazer os testes, utilize [essa ferramenta](http://www.google.com/webmasters/tools/richsnippets)):

![Schema.org - Produto Estrutura final](../assets/img/schema-org-produto-final.png "Schema.org - Produto Estrutura final")

## Conclusão

Bem, espero ter passado a mensagem de como é importante estruturar dados de produtos, principalmente se você tem e-commerce. No começo pode ser um pouco chato, mas depois que você pega a manha, tudo fica mais fácil e bonito.

Voltarei com mais artigos e tutoriais sobre o Schema, fique ligado e avise seus amigos :D

Abraços! 