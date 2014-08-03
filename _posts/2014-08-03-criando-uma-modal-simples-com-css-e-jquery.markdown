---
published: true
title: Criando uma Modal simples com CSS e jQuery.
layout: post
tags: [web.ROAD, desenvolvimento-web, reidark, código, modal, css, jquery, html, css3]
categories: [Artigos]
permalink: criando-uma-modal-simples-com-css-e-jquery
excerpt: Aprenda a criar uma modal charmosa com efeitos e comandos :)
author: reidark
---
Olá pessoas, como vão? Pois bem, resolvi tirar um pouquinho do meu tempo pra explicar como fazer uma Modal simples com CSS(3) e jQuery.

Pra quem quiser verificar como foi o resultado final, é só entrar aqui: [Modal Simples - Codepen.io](http://codepen.io/reidark/full/FEueH/).

## HTML

Ok, vamos dar começo ao tutorial: Primeiramente nós precisamos criar nossa marcação HTML:

{% highlight html %}

<button class="show" aria-haspopup="true">Show Modal</button>

<div class="mask" role="dialog"></div>
<div class="modal" role="alert">
  <button class="close" role="button">X</button>
</div>

{% endhighlight %}

O botão com a classe *show* é para chamarmos a Modal. Você pode colocar a classe/id que quiser, assim como também pode usar qualquer elemento HTML desde que usemos o jQuery para manipular o evento de click, porém, não é recomendado (use um botão ou link mesmo, rsrs).

A div com a classe *mask* é responsável por criar aquela camada de mascará por trás da nossa Modal. Assim como no Facebook e outros sites, essa mascará também é responsável por fechar a modal uma vez que é clicada.

E por último, e mais importante, está nossa div com a classe *modal*, onde criaremos todo o nosso conteúdo, como avisos, formulários, alertas, e coisas do tipo (sintam-se livres). Nesse exemplo, coloquei apenas um botão com a classe *close* que será responsável por fechar nossa Modal.

## CSS

Ok, com nossa marcação HTML pronta, vamos partir para nosso CSS, que será responsável por dar um estilo a toda nossa estrutura, além de ser responsável pelas animações.

Lembrando que **nesse tutorial não colocarei estilo nos botões** (deixarei apenas no exemplo funcionando), já que isso é opicional. Por isso, começaremos colocando o estilo da nossa mascara:

{% highlight css %}

.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 73, 94, 0.8);
  z-index: 50;
  visibility: hidden;
  
  opacity: 0;
  
  transition: 0.7s;
}

{% endhighlight %}

O conjunto da posição fixa, junto com as posições top e left 0, mais a width/left 100% é para fazer a mascará ficar full na página inteira, independente do scroll do usuário. Então, coloquei um background com rgba para identificarmos que existe uma mascará com opacidade no fundo da nossa modal. O *visibility: hidden* é para deixarmos a mascará escondida, e so aparecer quando clicarmos em algo. E por último, a opacidade e a transição é para "adicionarmos" um efeito de fade quando a modal aparecer.

Agora, partiremos para o estilo da nossa Modal em si:

{% highlight css %}

.modal{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  margin-left: -200px;
  margin-top: -150px;
  background: #bdc3c7;
  z-index: 100;
  visibility: hidden;
  
  opacity: 0;
  
  transition: 0.5s ease-out;
  
  transform: translateY(45px);
}

{% endhighlight %}

A nossa Modal também recebe o posição fixa, porém tem um top e left de 50% para ficar posicionada ao centro da nossa tela, porém, ainda não é perfeito. Então, *setamos* uma largura e altura, e depois extraimos metade dessa altura/largura respectivamente com margin-top e margin-left, para centralizarmos perfeitamente nossa modal. Essa tática é usada quando já sabemos o tamanho final do nosso elemento, caso contrário, outras técnicas serão usadas. E, para dar um efeito de fade + movimento (aparecer subindo), usaremos a opacidade e a propriedade transform da CSS3.

A propriedade translateY move um elemento no eixo Y. A vantagem disso é que ele não empurra ou *ocupa* algum espaço. Ele simplesmente move e pronto. Por final, também adicionamos a propriedade transition, para fazer um efeito suave.

**Nota**: A propriedade *visibility* foi adicionada pelo mesmo motivo da mascará.

Então, para finalizar, criaremos a classe responsável pela animação de mostrar e esconder nossa Modal:

{% highlight css %}

.active{
  visibility: visible;
  opacity: 1;
}

.active + .modal{
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

{% endhighlight %}

A classe *active* será adicionada via jQuery. Ela será acrescentada a nossa máscara, e vai alterar a visibility para *visible* e adicionará a opacidade para fazer o efeito de fade. Quando essa classe for adicionada, ela afetará nossa modal (classe .modal) adicionando a opacidade, trocando a visibility, e *setando* o translateY para 0, para dar aquele efeito de movimento de baixo para cima.

No final, nosso CSS vai se parecer mais ou menos com isso:

{% highlight css %}

.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 73, 94, 0.8);
  z-index: 50;
  visibility: hidden;
  
  opacity: 0;
  
  transition: 0.7s;
}

.modal{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  margin-left: -200px;
  margin-top: -150px;
  background: #bdc3c7;
  z-index: 100;
  visibility: hidden;
  
  opacity: 0;
  
  transition: 0.5s ease-out;
  
  transform: translateY(45px);
}

.active{
  visibility: visible;
  opacity: 1;
}

.active + .modal{
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

{% endhighlight %}

## jQuery

Nosso jQuery será simples de tudo. Apenas adicionaremos a classe para exibir a modal, e removeremos a classe quando quisermos fecha-la.

Vamos lá!

{% highlight js %}

$(".show").on("click", function(){
   $(".mask").addClass("active");
});

{% endhighlight %}

Aqui estamos passando a seguinte função: Quando o botão com a classe *show* for clicado, a mascará (classe mask) receberá a classe *active*. A partir daqui nossa Modal já vai estar aparecendo.

Porém, precisamos fazer os eventos para fechar essa Modal. Então usaremos 3 métodos: Clicar em um botão de close, clicar na mascará e quando pressionarmos a tecla ESC.

Primeiro, criaremos a função responsável por fechar a modal:

{% highlight js %}

function closeModal(){
  $(".mask").removeClass("active");
}

{% endhighlight %}

Função simples para remover-mos a classe *active* da nossa mascará.

Funções no JavaScript são responsáveis por se tornarem códigos repetitivos, ou, para ser mais claro, criamos uma função quando usamos o mesmo bloco de código várias vezes. A função closeModal foi criada para fecharmos a nossa modal. Então, vamos usar ela nos nossos eventos.

Evento de click:

{% highlight js %}

$(".close, .mask").on("click", function(){
  closeModal();
});

{% endhighlight %}

Setamos aqui que, quando o botão com a classe *close* ou a máscara (classe mask) forem clicados, a função closeModal será chamada, executando a ação de remover a classe active.

Para finalizarmos, vamos chamar a função closeModal, quando pressionarmos a tecla ESC no teclado:

{% highlight js %}

$(document).keyup(function(e) {
   if (e.keyCode == 27) {
      closeModal();
   }
});

{% endhighlight %}

Passamos para o JS que quando a tecla ESC for pressionada (keycode de número 27) a função closeModal será executada. Simples e fácil.

## Conclusão

É pessoal, acho que é isso. Espero que esse tutorial ajude alguém, e que, é claro, vocês tenham gostado do resultado final!

Caso queira ver novamente a Modal funcionando, é só entrar aqui: [Modal Simples - Codepen.io](http://codepen.io/reidark/full/FEueH/).

Abraços e até a próxima!