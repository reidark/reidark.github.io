---
published: true
title: Schema.org - Apenas use.
layout: post
tags: [web.ROAD desenvolvimento-web reidark]
categories: [Artigos]
permalink: schema-org-apenas-use
excerpt: Dê significado para o conteúdo.
author: reidark
---

Não importa o que você faz na internet, visto que existem milhares de coisas diferentes por ai. O intuito dela sempre foi um e creio que vai continuar assim por um bom tempo: **informação**. 

O HTML foi feito para entregar informação e conteúdo para qualquer dispositivo, seja ele uma geladeira, um carro, um avião, já que o céu é o limite, haha.
Eu sei que essa ideia parece insana, mas já tem um grupo de estudos e pesquisas especialmente pra isso na W3C. Caso queira, leia isso [aqui](http://www.w3.org/community/autowebplatform/) ;)

### Dando significado para informação

Com a grande vinda do HTML5, as novas tags como *<section>*, *main*, *<aside>*, *<footer>*, *<header>*, *<article>* e muitas outras foram criadas para dar sentido para informação inserida ali dentro. Isso é fortemente conhecido e aplicado com conceitos de **Web Semântica** que é basicamente a web com significado.

Porém, existe um esquema (literalmente) que reforça e ajuda os motores de busca á indexarem melhor o seu conteúdo e informação de uma forma "inteligente", ou, como eu posso dizer, mais humana e legível.

Muitos sites famosos e com grande circulação de pessoas, já utilizam esses métodos, como é o caso do IMDb. Vejamos um exemplo simples e prático quando fazemos uma busca com os dados: "Captain America 2"

![Capitão America 2 - IMDb](../assets/img/capitao-america-2.png "Capitão America 2 - Schema.org (IMBd)")

Nós conseguimos ver uma grande quantidade de informação numa simples busca do Google. Personalizados pelo próprio IMBd, conseguimos ver a classificação do filme pelos usuários, e até ver a quantidade de votos.

### Schema.org

Ok, depois de toda essa explicação, todo mundo fica meio empolgado né? Sim, e é pra ficar mesmo, visto que isso ajuda em total parte de visibilidade para seu site.

Mas a pergunta é: *Como eu aplico isso no meu site?*

E é aqui que entra uma longa jornada de testes e estudos no grande site (feio) do Schema.org.

Pra você ir se familiarizando, faça uma visita ao [Schema.org](https://schema.org/) antes de começarmos algumas explicações.

#### Da onde surgiu?

Esse projeto foi uma junção dos motores de busca: Google, Yahoo, Bing e Yandex para dar significado á uma web melhor. Acabou que isso se tornou um tipo padrão de "web standards" e cada vez mais o pessoal vem adotando esses métodos.

#### No que ele ajuda em meu site?

Antigamente (diga-se antes do HTML5) os motores de busca tinham alguns problemas em capturar o conteúdo do seu site e exibir nas buscas. Os layouts eram basicamente estruturados com *<div>* que **não tem função semântica nenhuma**. Sim, se você ainda estrutura seu site com *<div>* você tá matando o **SEO** do mesmo. Então, esses motores de busca tinham que praticamente "adivinhar" qual era o conteúdo relevante no seu site, o que era um artigo, quem era o autor, entre outros.

#### Serei punido se não usar?

Bem, eu não vou dizer pra você que usar o Schema.org é obrigatório, como se fosse uma lei. Mas, eu fortemente aconselharia você a pensar que sim, uma obrigatoriedade. Entenda, você não precisa dar significado até pro pronto final do seu texto, pelo menos tente dar um significado para qual parte será um artigo, qual parte é um endereço, qual parte é um video importante.

Usando esses conceitos básicos, rapidamente você consegue adaptar sua forma de escrever códigos desse jeito, e quando você menos percebe, já tá estruturando até a cor de fundo (leve na brincaidera, hehe).

### Dando os primeiros passos no Schema.org

Como eu disse mais a cima, o site do Schema.org é *confuso* e um pouco complicado de entender no começo. Primeiramente já vou dizendo que não sou expert nele e que uso 24 horas por dia, mas, sempre me esforço para dar o significado devido, mesmo que seja bem pouco.

Ao entrar no [site do Schema.org](https://schema.org/) nos deparamos com um texto explicativo. Logo em cima vemos 3 menus e uma **ferramenta de busca que usaremos mais que nossa roupa**.

Em [Schemas](https://schema.org/docs/schemas.html) encontramos algumas informações relacionadas a categorias existente e [hierarquia de uso](https://schema.org/Thing). 

Algo legal é: Existem categorias pra tudo quanto é tipo. Sério, pra tudo o que eu procurei colocar informação nos meus sites, eu achei ai. Vai de produtos (e-commerce) até categorias para médicos/medicina.

Você ir navegando por essas categorias até encontrar muitas outras, mas, com toda essa informação, é necessário saber como aplicá-la, certo?

#### Aplicando no código

Depois de navegar um pouquinho pelo site (ou não) está na hora de botar a mão na massa.

Pra deixar o exemplo um pouco mais concreto, digamos que você tenha um blog e nele você poste Artigos. Seu HTML ia ser algo mais ou menos assim (hipótese).

{% highlight html %}

<article>
 <h1>Falando um pouco sobre carros</h1>
 <h2>Qual o preço de um carro hoje?</h2>
 <p>Aliqua an ex sint tempor se nam legam sempiternum, quae qui admodum id lorem, ne 
 qui legam malis eram, qui nam culpa ullamco, sed cillum...</p>
</article>

{% endhighlight %}

Ok, digamos que essa era a estrutura que você tinha para seus artigos. Agora, vamos aplicar os fundamentos do Schema.org:

**Primeiro**: Qual a categoria da sua estrutura? Um **artigo**, certo senhores? Então, nós vamos até o site do [Schema.org](https://schema.org/) e digitamos no formulário de busca: *article*. Isso irá nos retornar uma busca, clique no primeiro, que mostra as [especificações gerais dos artigos](http://schema.org/Article). Nessa tabela um pouco "poluída" nós vemos muita informação, então, nós voltamos ao nosso código e mudamos ele assim:

{% highlight html %}

<article itemscope itemtype="http://schema.org/Article">
 <h1>Falando um pouco sobre carros</h1>
 <h2>Qual o preço de um carro hoje?</h2>
 <p>Aliqua an ex sint tempor se nam legam sempiternum, quae qui admodum id lorem, ne 
 qui legam malis eram, qui nam culpa ullamco, sed cillum...</p>
</article>

{% endhighlight %}

Nota que mudamos a primeira linha, da tag *<article>* e adicionamos mais 2 valores.

**itemscope**: O itemscope interpreta que ali naquela estrutura será separada para as informações presentes no Schema, que ainda não foi definido.

**itemtype**: É aqui que ele dita qual vai ser a informação estruturada de conteúdo. Como vocês podem ver, eu colei dentro das aspas o link para o site do Schema com a URL */Article* no final. Ou seja, os motores de busca interpretam que dentro dessa tag article vai ter informações relevantes sobre artigos . 

Sim, quando a tag é fechada *</article>* leia-se que os valores itemscope e itemtype também são *fechados*.

Resumindo, essas linhas ditam o tipo de informação naquela estrutura (article).

Agora, nós vamos adicionar as propriedades a cada elemento do artigo:

{% highlight html %}

<article itemscope itemtype="http://schema.org/Article">
 <h1 itemprop="name">Falando um pouco sobre carros</h1>
 <h2 itemprop="headline">Qual o preço de um carro hoje?</h2>
 <p itemprop="articleBody">Aliqua an ex sint tempor se nam legam sempiternum, quae qui admodum id lorem, ne 
 qui legam malis eram, qui nam culpa ullamco, sed cillum...</p>
</article>

{% endhighlight %}

Ok, tudo pronto. Nós acabamos de adicionar as propriedades a cada elemento presente dentro do artigo.
Para isso nos adicionamos o valor *itemprop*, que como o nome sugere, a propriedade do item.

Para saber qual propriedade adicionar a cada elemento, você vai usar aquela tabela que abrimos á um tempo atrás, [lembra dela](http://schema.org/Article)?

Pode notar que nessa tabela tem várias propriedades para serem adicionadas dentro do *itemprop* e assim elas dão informação para aquele conteúdo.

**<h1>**: Era aonde continha o título do artigo, por isso foi atribuido para ele a propriedade itemprop *name*.

**<h2>**: Bascaimente um *excerpt* ou um sub-título. Por esse motivo identificamos ele com o itemprop *headline*

**<p>**: Conteúdo do artigo, praticamente todo o corpo do conteúdo. Propriedade itemprop "articleBody".

Lembrando que o itemprop pode ir nas tags mais usadas para um estruturação, como *<span>*, *<a>*, *<strong>* entre outros.

#### Atrelando outros Schemas em um só

Sim, agora começa os *inceptions* de bugar o cérebro. Utilizarei os exemplos usados a cima para mostrar como essa tática é feita, e explicarei depois:

{% highlight html %}

<article itemscope itemtype="http://schema.org/Article">
 <h1 itemprop="name">Falando um pouco sobre carros</h1>
 <h2 itemprop="headline">Qual o preço de um carro hoje?</h2>
 <div itemprop="author" itemscope itemtype="http://schema.org/Person">
    <span itemprop="name">reidark</span>
 </div>
 <p itemprop="articleBody">Aliqua an ex sint tempor se nam legam sempiternum, quae qui admodum id lorem, ne 
 qui legam malis eram, qui nam culpa ullamco, sed cillum...</p>
</article>

{% endhighlight %}

Ok, como podem notar, eu adicionei uma nova div no meio do article com um novo itemprop, porém, acompanhado de um itemscop e itemtype.

Ali eu especifíco quem foi o autor daquele artigo, e ainda mais, adiciono um [itemtype de Person](http://schema.org/Person) naquela div para estruturar dados de pessoa, como nome, data de aniversário, email, endereço ou qualquer outra coisa presente na tabela Person.

Lembrando que, quando aquele div for fechada, os *itemprop* referente ao **itemtype** Person também estão finalizados, voltando aos *itemprop* do Article.

Ou seja, assim eu consigo estruturar dados de um artigo, e dentro desse artigo estruturar os dados do autor desse artigo. Sim, foi exemplo genérico e até bobo, mas é apenas para ilustrar o poder dessa estruturação de informação.

#### Exemplo mais avançado:

{% highlight html %}

<article itemscope itemtype="http://schema.org/Article">
 <h1 itemprop="name">Falando um pouco sobre carros</h1>
 <h2 itemprop="headline">Qual o preço de um carro hoje?</h2>
 <time itemprop="datePublished">30 de Abril de 2014</time>
 <div itemprop="author" itemscope itemtype="http://schema.org/Person">
    <span itemprop="name">reidark</span> (Website: <a href="#" itemprop="url">web.ROAD</a>)
 </div>
 <p itemprop="articleBody">Aliqua an ex sint tempor se nam legam sempiternum, quae qui admodum id lorem, ne 
 qui legam malis eram, qui nam culpa ullamco, sed cillum...</p>
 <span>Refêrencia: <a href="#" itemprop="isBasedOnUrl">Estadão</a></span>
 <span itemprop="keywords">Tags: carros, preços</span>
</article>

{% endhighlight %}

Nesse exemplo, adicionei mais algumas tags e propriedade pra dar um significado melhor, como *time* e um link direcionando para o website do autor. Também foi incrementado as tags e a refênrecia do artigo. Coisa simples, só pra dar um exemplo mais concreto.

#### Formas de testar se estou fazendo certo

O Google disponibilizou uma ferramente bacaníssima para você verificar se seu seus dados estruturados estão corretamente aplicados: [Ferramenta de teste de dados estruturados](http://www.google.com/webmasters/tools/richsnippets). Assim que você entrar no site, clique na aba HTML e cole a parte em que você estruturou com os dados do Schema.org e veja qual é o resultado.

Veja como ficou o meu (utilizei a estruturação do último exemplo):

![Dados estruturados - Schema.org](../assets/img/google-schema-org.png "Google - Schema.org")

### Conclusão

Creio que consegui explicar o mínimo do mínimo do Schema.org, certo? Portando, peço para que faça testes, coloque coisas variadas, teste, faça novamente, até você ir encontrando um caminho mais fácil e que o desenvolvimento do projeto inteiro consiga fluir de uma maneira bacana.

Bons estudos para vocês, e caso queiram, comentem nos comentários aqui em baixo pra gente criar uma discussão gostosa :)

Abraços!
