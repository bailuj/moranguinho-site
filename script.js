// Linha do tempo: 15 visuais selecionados. Nem todo ano representa uma nova geração oficial.
const eras = {
  "1973": {
    "year": "1973",
    "label": "Os primeiros cartões",
    "title": "Onde a doçura começou",
    "short": "Chapéu castanho estampado, flor amarela e vestido vermelho de bolinhas: um visual de ilustração vintage.",
    "description": "A personagem apareceu em cartões da American Greetings em 1973. Na imagem desta coleção, ela tem um chapéu marrom com moranguinhos, cabelos castanhos compridos, vestido vermelho pontilhado e uma flor amarela ao lado. É uma estética de desenho artesanal, anterior às famosas bonecas dos anos 80.",
    "medium": "Primeiros cartões e ilustrações",
    "compareTitle": "A sementinha da história",
    "compareText": "Chapéu marrom estampado, vestido de bolinhas e flor amarela.",
    "traits": [
      "Cabelos castanhos longos e traço de cartão ilustrado",
      "Chapéu castanho com estampas e vestido de bolinhas",
      "Cores terrosas e uma grande flor amarela"
    ],
    "bg": "#f9e5d1"
  },
  "1980": {
    "year": "1980",
    "label": "A clássica dos anos 80",
    "title": "O cheirinho que virou memória",
    "short": "Chapéu rosa volumoso, cachinhos avermelhados e a inseparável gatinha: a era das bonecas perfumadas.",
    "description": "Em 1980, a Kenner lançou as bonecas com cheirinho de frutas e estreou o primeiro especial animado. Nesta imagem, a Moranguinho veste um grande chapéu rosa estampado, saia vermelha com avental, meias verdes listradas e segura a gatinha Custard. É a silhueta campestre mais reconhecível da fase clássica.",
    "medium": "Bonecas perfumadas e animação",
    "compareTitle": "A Moranguinho clássica",
    "compareText": "Chapéu rosa com morangos, cachinhos, avental e meias listradas.",
    "traits": [
      "Cachinhos ruivos e enorme chapéu rosa estampado",
      "Avental, vestido vermelho e meias verdes listradas",
      "A gatinha Custard nos braços"
    ],
    "bg": "#f7d6df"
  },
  "1985": {
    "year": "1985",
    "label": "Um laço diferente",
    "title": "Franja, laço e vestidinho rosa",
    "short": "Cabelo ruivo liso na altura do queixo, laço rosa gigante e vestido delicado: uma variação dos anos 80.",
    "description": "O arquivo escolhido para 1985 mostra uma variação bem diferente da bonequinha de 1980: cabelo ruivo curto e liso, franja reta, laço grande no alto da cabeça e vestido rosa com babados. Aqui, 1985 identifica o visual selecionado para o álbum, não uma nova geração oficial da franquia.",
    "medium": "Variação ilustrada dos anos 80",
    "compareTitle": "O laço cor-de-rosa",
    "compareText": "Franja reta, cabelo curto, laço alto e vestido rosa.",
    "traits": [
      "Cabelo liso, ruivo e curto com franja",
      "Laço grande substituindo o chapéu",
      "Vestido rosa com detalhes brancos e meias listradas"
    ],
    "bg": "#e8e2f3"
  },
  "1991": {
    "year": "1991",
    "label": "O relançamento THQ",
    "title": "Cachinhos e um laço de bolinhas",
    "short": "Cabelos ruivos muito cacheados, laço rosa com bolinhas e vestido de festa.",
    "description": "Em 1991, a THQ apresentou uma nova linha de bonecas da Moranguinho. A arte escolhida destaca os cabelos ruivos volumosos, os olhos azuis, um enorme laço rosa de bolinhas e o vestido rodado, também rosa. Foi um relançamento de brinquedos, não uma nova série animada.",
    "medium": "Linha de bonecas THQ",
    "compareTitle": "A Moranguinho dos cachinhos",
    "compareText": "Cachos fartos, laço de bolinhas e vestido rosa rodado.",
    "traits": [
      "Cachos ruivos muito volumosos e olhos azuis",
      "Laço rosa grande com bolinhas brancas e flor",
      "Vestido de festa e sapatos delicados"
    ],
    "bg": "#efdae7"
  },
  "2001": {
    "year": "2001",
    "label": "Um toque campestre",
    "title": "Cartas, morangos e uma gatinha",
    "short": "Chapéu de aba larga, laço verde e vestido estampado ao lado de uma caixa de correio.",
    "description": "A imagem que você escolheu para 2001 traz uma Moranguinho de aparência campestre: chapéu rosa com fita verde, cabelo ruivo, roupa com saia de detalhes verdes e uma caixa de correio com morangos. O ano é usado para identificar esta arte na coleção; não indica, por si só, a estreia de uma nova série.",
    "medium": "Ilustração de transição",
    "compareTitle": "O correio dos morangos",
    "compareText": "Chapéu largo com laço verde, vestido estampado e caixa de correio.",
    "traits": [
      "Chapéu largo de tons rosa com laço verde",
      "Vestido e avental com detalhes geométricos",
      "Cenário com gatinha e correspondência"
    ],
    "bg": "#e5eddc"
  },
  "2003": {
    "year": "2003",
    "label": "Uma nova aventura",
    "title": "Jeans, livro e mochila",
    "short": "Chapéu rosa de aba enorme, cabelos ruivos mais curtos, jeans e uma mochila.",
    "description": "O relançamento de 2003 trouxe novas animações e um guarda-roupa mais próximo da moda infantil da época. Nesta imagem, a Moranguinho segura um livro, usa calça jeans larga, blusa listrada, mochila rosa e um chapéu de aba grande. Seu traço é mais definido, sem perder as cores de morango.",
    "medium": "Relançamento da animação",
    "compareTitle": "A aventureira de jeans",
    "compareText": "Livro, mochila rosa, calça jeans e chapéu largo.",
    "traits": [
      "Cabelo ruivo curto com mechas viradas",
      "Blusa de listras, calça jeans e mochila",
      "Chapéu rosa largo com detalhes verdes"
    ],
    "bg": "#e5eedc"
  },
  "2005": {
    "year": "2005",
    "label": "Mais cor e movimento",
    "title": "Boné rosa e saia jeans",
    "short": "Um look juvenil com cabelo avermelhado, blusa listrada, saia azul e acessórios rosa.",
    "description": "Na imagem marcada como 2005, a Moranguinho aparece com boné rosa, cabelos avermelhados ondulados, blusa listrada de várias cores e saia jeans azul. É uma variação de figurino da fase iniciada em 2003, e não o começo de uma geração independente.",
    "medium": "Variação de figurino dos anos 2000",
    "compareTitle": "A fase da saia jeans",
    "compareText": "Boné rosa, cabelos ondulados, blusa listrada e saia azul.",
    "traits": [
      "Boné de aba curta e cabelo ondulado",
      "Blusa listrada multicolorida com bolsa",
      "Saia jeans e tênis rosa"
    ],
    "bg": "#fbdce6"
  },
  "2007": {
    "year": "2007",
    "label": "Um visual mais crescido",
    "title": "Listras, jeans e atitude",
    "short": "Cabelo vinho na altura dos ombros, chapéu florido, camisa listrada e calça jeans.",
    "description": "O desenho selecionado para 2007 mostra proporções mais alongadas e um estilo adolescente: chapéu claro com detalhes de morangos, cabelos vermelho-escuros, camisa de mangas compridas e jeans com bolsos laterais. É uma das variações do período de reformulação visual da série dos anos 2000.",
    "medium": "Redesenho da fase de 2003",
    "compareTitle": "Uma silhueta alongada",
    "compareText": "Cabelo vermelho-escuro, camiseta listrada e jeans de bolsos.",
    "traits": [
      "Corpo mais alto e cabelo vinho mais comprido",
      "Camisa de listras delicadas e calça jeans",
      "Chapéu claro com estampa de morangos"
    ],
    "bg": "#fbe4d7"
  },
  "2008": {
    "year": "2008",
    "label": "Moda do fim da década",
    "title": "Casaco rosa e tênis coloridos",
    "short": "Cabelos ruivos ondulados, shorts brancos, casaco rosa e acessórios esportivos.",
    "description": "Nesta arte identificada como 2008, a Moranguinho usa chapéu rosa, casaco curto de tom forte, shorts claros, tênis e uma bolsa a tiracolo. O visual é mais urbano e esportivo que o das primeiras versões dos anos 2000. A data marca a variação ilustrada, não necessariamente um novo lançamento.",
    "medium": "Variação visual do fim dos anos 2000",
    "compareTitle": "O look esportivo",
    "compareText": "Casaco rosa, shorts claros, tênis altos e bolsa lateral.",
    "traits": [
      "Cabelo ruivo alaranjado e ondulado",
      "Casaco rosa, shorts brancos e acessórios",
      "Tênis coloridos e chapéu floral"
    ],
    "bg": "#f8d5da"
  },
  "2009": {
    "year": "2009",
    "label": "Uma nova geração",
    "title": "O chapéu virou um morango!",
    "short": "Cabelo rosa comprido, rosto tridimensional e chapéu em forma de morango.",
    "description": "O redesenho de 2009 preparou o universo de Berry Bitty Adventures, cuja série estreou em 2010. A imagem mostra a personagem em computação gráfica, com cabelo rosa longo, chapéu que parece um morango, vestido rosa de bolinhas e meias verdes e brancas.",
    "medium": "Redesenho 3D de 2009–2010",
    "compareTitle": "A Moranguinho de Tutti Frutti",
    "compareText": "Cabelos rosa longos, chapéu em forma de fruta e visual 3D.",
    "traits": [
      "Cabelo longo em tom de rosa",
      "Chapéu tridimensional que imita um morango",
      "Vestido rosa de bolinhas e meias verdes listradas"
    ],
    "bg": "#ffdcca"
  },
  "2018": {
    "year": "2018",
    "label": "Uma variação ilustrada",
    "title": "A Moranguinho sentada no fruto",
    "short": "Desenho 2D com cabelo rosa, chapéu de morango e expressão delicada.",
    "description": "A imagem escolhida para 2018 é uma ilustração em 2D, não um modelo 3D: a Moranguinho aparece sentada sobre um morango gigante, com cabelo rosa comprido, chapéu vermelho arredondado e meias listradas. A data serve para organizar esta representação na coleção pessoal.",
    "medium": "Arte 2D de coleção",
    "compareTitle": "Sentada no morango",
    "compareText": "Ilustração 2D, cabelo rosa comprido e morango gigante.",
    "traits": [
      "Traço bidimensional com olhos verdes grandes",
      "Chapéu vermelho, cabelos rosa e roupa pontilhada",
      "Morango gigante usado como assento"
    ],
    "bg": "#e5efe6"
  },
  "2019": {
    "year": "2019",
    "label": "Uma experiência em CGI",
    "title": "Cabelo rosa curto e boina vermelha",
    "short": "Visual 3D de rosto arredondado, cabelo rosa mais curto e roupa branca.",
    "description": "A representação usada para 2019 tem modelagem tridimensional, olhos grandes, cabelo rosa curto e uma touca vermelha pontilhada. Ela veste blusa branca, meias verdes listradas e tênis vermelhos. Esta é uma variação visual presente no álbum, sem afirmar que houve uma nova série oficial nesse ano.",
    "medium": "Representação em computação gráfica",
    "compareTitle": "A boina vermelha em 3D",
    "compareText": "Cabelo rosa curto, touca vermelha e roupa branca em CGI.",
    "traits": [
      "Modelagem 3D e olhos grandes",
      "Cabelo rosa na altura do queixo",
      "Touca vermelha pontilhada e roupas claras"
    ],
    "bg": "#dfeae6"
  },
  "2021": {
    "year": "2021",
    "label": "Moranguinho na Cidade Grande",
    "title": "Uma confeiteira cheia de sonhos",
    "short": "Traço 2D moderno, cabelo rosa liso, chapéu de morango e look urbano.",
    "description": "A série Berry in the Big City estreou em 2021 e levou a Moranguinho para a cidade, onde ela sonha em crescer como confeiteira. A personagem aparece em animação 2D com cabelo rosa comprido, jaqueta azul, vestido branco com detalhe de morango e tênis vermelhos.",
    "medium": "Série urbana em animação 2D",
    "compareTitle": "A confeiteira da cidade",
    "compareText": "Cabelo rosa, jaqueta azul, vestido branco e tênis.",
    "traits": [
      "Traço 2D com olhos verdes expressivos",
      "Jaqueta azul sobre roupa clara com morango",
      "Chapéu rosa e tênis vermelhos"
    ],
    "bg": "#e1ecee"
  },
  "2023": {
    "year": "2023",
    "label": "A cidade em 3D",
    "title": "A confeiteira ganhou volume",
    "short": "A Moranguinho da Cidade Grande recriada em CGI com avental e tigela de morangos.",
    "description": "Em 2023, o universo de Berry in the Big City também ganhou especiais animados em computação gráfica. Nesta imagem, a Moranguinho tem cabelos rosa, boné texturizado, avental claro e segura uma tigela com morangos. É a releitura 3D do estilo urbano apresentado em 2021.",
    "medium": "Especiais em CGI",
    "compareTitle": "A cidade tridimensional",
    "compareText": "Cabelo rosa, avental, boné texturizado e tigela de frutas em 3D.",
    "traits": [
      "Rosto e cabelos tridimensionais",
      "Touca rosa texturizada e avental claro",
      "Tigela de morangos e roupa de confeitaria"
    ],
    "bg": "#e4e2f0"
  },
  "2026": {
    "year": "2026",
    "label": "O clássico reinventado",
    "title": "Os cachinhos estão de volta!",
    "short": "Modelagem 3D com cachinhos ruivos, chapéu rosa grande e vestido campestre.",
    "description": "Em outubro de 2026 estreou Strawberry Shortcake’s Bake Shop, série em CGI inspirada diretamente no visual clássico dos anos 80. A imagem mostra cachinhos ruivos, chapéu rosa com morangos, vestido vermelho e avental claro com losangos verdes: uma homenagem explícita às origens.",
    "medium": "Nova série 3D inspirada nos anos 80",
    "compareTitle": "A nostalgia em 3D",
    "compareText": "Cachos ruivos, chapéu rosa, avental e meias listradas.",
    "traits": [
      "Cachos ruivos volumosos e olhos verdes",
      "Chapéu rosa grande com estampa de morangos",
      "Vestido vermelho, avental e meias verdes listradas"
    ],
    "bg": "#e1edcf"
  }
};

const order = Object.keys(eras).sort((a,b)=>Number(a)-Number(b));
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollEra = () => document.querySelector('#eras').scrollIntoView({behavior:reduceMotion()?'auto':'smooth'});

// O álbum utiliza somente os arquivos locais enviados pela colecionadora.
function setArt(wrapper, era) {
  if (!wrapper || !era) return;
  wrapper.replaceChildren();
  wrapper.classList.add('historic-media');
  wrapper.classList.remove('has-original');
  const fallback = document.createElement('div');
  fallback.className = 'original-unavailable';
  fallback.innerHTML = '<span aria-hidden="true">♡</span><strong>Imagem não encontrada</strong><small>Confira o arquivo assets/versoes/' + era.year + '.png.</small>';
  wrapper.appendChild(fallback);
  const img = document.createElement('img');
  img.className = 'real-era-art';
  img.alt = `Moranguinho em ${era.year}: ${era.compareText}`;
  img.loading = (wrapper.id === 'spotlight-art') ? 'eager' : 'lazy';
  img.decoding = 'async';
  const token = Symbol(era.year);
  wrapper._imageToken = token;
  img.addEventListener('load', () => {
    if (wrapper._imageToken === token) wrapper.classList.add('has-original');
  });
  img.addEventListener('error', () => {
    if (wrapper._imageToken === token) wrapper.classList.remove('has-original');
  });
  wrapper.appendChild(img);
  img.src = `assets/versoes/${era.year}.png`;
}

const spotlight=document.querySelector('.spotlight');
const panel=document.querySelector('#era-panel');
const yearTabs=Array.from(document.querySelectorAll('.year-tab'));
function selectEra(year, shouldFocus=false) {
 const era=eras[year]; if(!era)return;
 document.querySelector('#era-label').textContent=era.label;
 document.querySelector('#era-year').textContent=era.year;
 document.querySelector('#era-title').textContent=era.title;
 document.querySelector('#era-description').textContent=era.description;
 document.querySelector('#era-medium').textContent=era.medium;
 document.querySelector('#era-traits').replaceChildren(...era.traits.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));
 
 spotlight.style.setProperty('--era-bg',era.bg);
 setArt(document.querySelector('#spotlight-art'),era);
 yearTabs.forEach(tab=>{const active=tab.dataset.year===year;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
 panel.setAttribute('aria-labelledby',`tab-${year}`);
 if(shouldFocus)document.querySelector(`#tab-${year}`).focus();
}
yearTabs.forEach((tab,index)=>{
 tab.addEventListener('click',()=>selectEra(tab.dataset.year));
 tab.addEventListener('keydown',event=>{
  let next=index;if(event.key==='ArrowRight')next=(index+1)%yearTabs.length;
  else if(event.key==='ArrowLeft')next=(index-1+yearTabs.length)%yearTabs.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=yearTabs.length-1;
  else return;
  event.preventDefault();selectEra(yearTabs[next].dataset.year,true);
  yearTabs[next].scrollIntoView({behavior:reduceMotion()?'auto':'smooth',block:'nearest',inline:'center'});
 });
});
document.querySelectorAll('[data-go-year]').forEach(button=>button.addEventListener('click',()=>{selectEra(button.dataset.goYear);scrollEra();}));
function updateComparison(side) {
 const era=eras[document.querySelector(`#compare-${side}`).value];
 setArt(document.querySelector(`#compare-art-${side}`),era);
 document.querySelector(`#compare-title-${side}`).textContent=era.compareTitle;
 document.querySelector(`#compare-description-${side}`).textContent=era.compareText;
}
['a','b'].forEach(side=>document.querySelector(`#compare-${side}`).addEventListener('change',()=>updateComparison(side)));
let quizYear='1980';
document.querySelectorAll('[data-quiz]').forEach(button=>{
 button.addEventListener('click',()=>{
  quizYear=button.dataset.quiz;
  const era=eras[quizYear];
  document.querySelector('#quiz-result-title').textContent=`Seu estilo combina com ${era.year}: ${era.title} 🍓`;
  document.querySelector('#quiz-result-text').textContent=era.short;
  document.querySelector('#quiz-result').hidden=false;
  document.querySelectorAll('[data-quiz]').forEach(b=>{b.classList.toggle('chosen',b===button);b.setAttribute('aria-pressed',String(b===button));});
 });
});
document.querySelector('#quiz-view-era').addEventListener('click',()=>{selectEra(quizYear);scrollEra();});
const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav');
function closeMenu(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu de navegação');}
toggle.addEventListener('click',()=>{const opening=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(opening));toggle.setAttribute('aria-label',opening?'Fechar menu de navegação':'Abrir menu de navegação');nav.classList.toggle('is-open',opening);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelectorAll('a[href="#topo"]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,left:0,behavior:reduceMotion()?'auto':'smooth'});closeMenu();}));
document.querySelectorAll('[data-art-year]').forEach(w=>setArt(w,eras[w.dataset.artYear]));
selectEra('1973'); updateComparison('a');updateComparison('b');
// As 15 imagens do álbum são carregadas apenas da pasta local.
