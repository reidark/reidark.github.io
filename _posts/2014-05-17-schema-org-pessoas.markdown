---
published: true
title: Schema.org 3 - Estruturando dados de pessoas.
layout: post
tags: [web.ROAD, desenvolvimento-web, reidark, schema.org, schema, google]
categories: [Artigos]
permalink: schema-org-pessoas
excerpt: Que tal a gente aprender agora como se estrutura dados para pessoas?
author: reidark
---
Ohoooo, estou de volta amigos! Fiquei um tempo sem postar aqui, mas por favor, não me julguem, estava ocupado com meus outros projetos. Então, vamos direto ao assunto principal do post: **Estruturar dados de pessoas com o Schema.org**.

Pra quem ainda não viu ou não sabe o que é o Schema.org, fiz um *breve* tutorial dele, você pode conferir o post [aqui](http://reidark.github.io/schema-org-apenas-use/).

## Estruturando dados de pessoas

Não sei se você já se deparou com isso em alguma pesquisa por ae, mas não tem problema, eu mostro para vocês o *produto* final, rs:

![Schema.org - Pessoas - Victor Hugo Matias](../assets/img/schema-org-pessoas.png "Schema.org - Pessoas - Victor Hugo Matias")

Essa é uma imagem da *pequena* diferença que uma pesquisa do Google te retorna. Lembrando, nunca pense: *"Nossa, só muda um negocinho na pesquisa do Google, nem vou perder tempo com isso."*. Não se esqueça que verdadeira magia do Schema.org está por trás disso. A função dele é e sempre será dar sentido para aquele informação, que, no nosso caso é um pessoa.

Por exemplo:

{% highlight html %}

    <header>
        <h1>Victor Hugo Matias</h1>
    </header>

{% endhighlight %}

Isso é um nome próprio, certo? Ok, nós sabemos que é um nome próprio aplicado a tag título de maior revelância num HTML (h1). Nisso, nós podemos presumir que provavelmente isso é um perfil, um portfólio ou alguma coisa. **Mas**, nós não sabemos até que ponto o Google ou os outros motores de busca entendem isso como um nome próprio. É por esse motivo que eu devo mostrar á eles que isso é um nome de uma pessoa real:

{% highlight html %}

    <header itemscope itemtype="http://schema.org/Person">
        <h1 itemprop="name">Victor Hugo Matias</h1>
    </header>

{% endhighlight %}

Pronto. Em menos de 10 segundos conseguimos mostrar para a web inteira que aquele título é referente ao nome de uma pessoa. Simples assim, sem mais nem menos. Mas calma, não para por ai, tem **muito mais** coisas.

## Partindo um pouco mais pra complexidade

Ok, nós já sabemos o impacto que isso gera nos motores de busca e na web. Agora, vamos aprender a não estruturar apenas o nome, e sim um perfil de uma pessoa inteiro.

Vamos montar uma estrutura básica para entenderemos como funciona sem o Schema, e depois com o Schema.

{% highlight html %}

    <header>
        <img ssrc="victor.png" alt="Victor Hugo Matias" title="Victor Hugo Matias" />
        <h1>Victor Hugo Matias</h1>
        <h2>Desenvolvedor Web</h2>
    </header>

{% endhighlight %}

Beleza, essa é a estrutura básica que você **deve** ter. Claro, nada é obrigatório, mas use, faz toda diferença. Agora que já temos nossa estrutura montada, vamos aplicar as regras do Schema.org para ele. Primeiro nós entramos no [site do Schema.org](https://schema.org/) e procuramos o que queremos, que, nesse caos é *Person*. Essa busca vai resultar nessa página: (Person - Schema.org)[https://schema.org/Person]. É aqui que vamos tirar toda a informação que precisamos, é so navegar pela tabela e ver como você pode aplicar isso.

Agora, mãos na massa:

{% highlight html %}

    <header itemscope itemtype="https://schema.org/Person">
        <img src="victor.png" alt="Victor Hugo Matias" title="Victor Hugo Matias" itemprop="image" />
        <h1 itemprop="name">Victor Hugo Matias</h1>
        <h2 itemprop="jobTitle">Desenvolvedor Web</h2>
    </header>

{% endhighlight %}

E aqui está nossa estrutura final. Na tag *header* identificamos que a informação ali dentro será referente á de uma pessoa. E então declaramos os *itemprop* pra identificar qual é qual. Na *img* colocamos o de imagem, no *h1* colocamos o de nome e no *h2* colocamos com o que eu trabalho. Feito isso, mostramos aos motores de busca nossa imagem pessoal, nosso nome próprio e até o nome do nosso trabalho.

Da uma olhada em como o Google já tirou essas infos:

![Schema.org - Google - Pessoas](../assets/img/schema-org-victor.png "Schema.org - Google - Pessoas")

## Aplicando isso a um produto final

Agora, está na hora de mostrarmos uma forma muito simples de usar isso como produto final. Usaremos esse exemplo como base num texto para um portfólio, onde você diz algumas coisas sobre você, seu trabalho e afins.

Acompanhe comigo:

{% highlight html %}

    <header itemscope itemtype="https://schema.org/Person">
        <img src="victor.png" alt="Victor Hugo Matias" title="Victor Hugo Matias" itemprop="image" />
        <h1 itemprop="name">Victor Hugo Matias</h1>
        <h2 itemprop="jobTitle">Desenvolvedor Web</h2>
        
        <p>Olá, me chamo <span itemprop="givenName">Victor</span> Hugo <span itemprop="familyName">Matias</span> mas também conhecido como <span itemprop="additionalName">reidark</span>. 
        Sou Desenvolvedor Web na <span itemprop="workLocation">Z3Web</span>. 
        Moro no <strong itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">Brasil</span></strong> e gosto muito de projetos open-source. 
        Você pode entrar em contato comigo pelo número <span itemprop="telephone">0000-0000</span> ou pelo email <span itemprop="email">reikaosdark@gmail.com</span>. Abraços!</p>
    </header>

{% endhighlight %}

Prontinho! Temos o nosso texto extremamente estruturado. Sim, eu *apelei* um pouquinho. Entendam que não é necessário tudo isso, mas é claro, caso vocês tenham essa força de vontade, pode fazer que traz resultado, hehe. Ficou grande, mas olha só o resultado estruturado que nos retornou:

![Schema.org - Google](../assets/img/schema-org-final.png "Schema.org - Google")

Confira essa verificação [aqui](http://www.google.com/webmasters/tools/richsnippets?q=uploaded:8004f99c265f3e5a1f9665362e5cc32c).

## Conclusão

Não preciso nem mostrar mais exemplos pra você começar usar o Schema.org, certo? É uma ferramenta poderosa e relevante. Coloque essa forma de escrever código no seu workflow, assim você já vai adaptando tudo aos dados estruturados do Schema.org e quando você menos ver, já tá tudo certinho :)

Vejo vocês em outro Artigo.

Abraços! :D