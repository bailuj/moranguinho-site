// 15 marcos visuais: inclui variações e materiais promocionais, não 15 reboots oficiais.
const eras = {
  "1978": {
    "year": "1978",
    "label": "A sementinha",
    "title": "O visual clássico nasce",
    "short": "O desenho com chapéu enorme e aparência artesanal ganha identidade própria.",
    "description": "A Moranguinho surgiu em cartões desde 1973, mas seu estilo clássico ficou conhecido a partir de 1978. O chapéu grande, o vestido e a paleta de cores quentes formaram a base da personagem amada por gerações.",
    "medium": "Estilo clássico em cartões",
    "compareTitle": "A identidade original",
    "compareText": "Chapéu grande, vestido vermelho e traços suaves.",
    "traits": [
      "Traços artesanais de ilustração infantil",
      "Chapéu marcante, flores e vestido",
      "A base para a identidade clássica que chegou em 1980"
    ],
    "source": "https://x.com/naaragaci/status/1680596757091164163",
    "image": "",
    "sprite": [
      0,
      0
    ],
    "bg": "#f9e5d1"
  },
  "1980": {
    "year": "1980",
    "label": "A clássica",
    "title": "O cheirinho da infância",
    "short": "Cachinhos, avental, chapéu fofinho e a era das bonecas perfumadas.",
    "description": "A Kenner lançou as famosas bonecas perfumadas e a personagem ganhou um especial animado. A roupinha campestre e o chapéu com morangos se tornaram sua marca registrada.",
    "medium": "Bonecas e desenho animado",
    "compareTitle": "A boneca perfumada",
    "compareText": "Cachos de lã, chapéu de morango e meias listradas.",
    "traits": [
      "Chapéu arredondado e avental",
      "Cachos e proporções de boneca",
      "Meias verdes e brancas"
    ],
    "source": "https://www.strawberryshortcake.com/about",
    "image": "https://static.wixstatic.com/media/999c17_d49eaf6777414bb4b1d8b79ddf18ce7d~mv2.png",
    "sprite": null,
    "bg": "#f7d6df"
  },
  "1985": {
    "year": "1985",
    "label": "O fim da primeira leva",
    "title": "Mais laços e detalhes",
    "short": "Uma variação oitentista com laço, vestido delicado e cores suaves.",
    "description": "Nos últimos anos da fase clássica, as roupas, penteados e ilustrações promocionais passaram por ajustes. A versão mostrada no álbum de referências representa essa estética da metade dos anos 80.",
    "medium": "Variação promocional",
    "compareTitle": "Novos detalhes retrô",
    "compareText": "Laço na cabeça e vestidinho de tons suaves.",
    "traits": [
      "Acessórios e laços mais visíveis",
      "Traço clássico ainda delicado",
      "Roupas mais ornamentadas"
    ],
    "source": "https://x.com/naaragaci/status/1680596757091164163",
    "image": "",
    "sprite": [
      2,
      0
    ],
    "bg": "#e8e2f3"
  },
  "1991": {
    "year": "1991",
    "label": "O grande laço",
    "title": "Cachinhos bem noventistas",
    "short": "A THQ trocou o chapéu pelo laço e apostou em um vestido de festa.",
    "description": "A linha de bonecas de 1991 trouxe cachos volumosos, laços e roupinhas diferentes, sem uma série animada própria. Este foi um dos relançamentos visuais mais radicais da Moranguinho.",
    "medium": "Relançamento de brinquedos",
    "compareTitle": "A fase THQ",
    "compareText": "Laço grande, cabelo volumoso e sapatilhas.",
    "traits": [
      "Laço no lugar do chapéu de sempre",
      "Cachos bem definidos e olhos azuis",
      "Traços de moda infantil do início dos anos 90"
    ],
    "source": "https://dollect.net/database/strawberry-shortcake-thq/",
    "image": "",
    "sprite": [
      3,
      0
    ],
    "bg": "#efdae7"
  },
  "2001": {
    "year": "2001",
    "label": "Nos cartões de novo",
    "title": "Um aceno à nostalgia",
    "short": "Traços retrô reaparecem em artes de transição do início dos anos 2000.",
    "description": "Um painel de colecionador identifica este estilo como 2001. Ele é tratado aqui como variação visual documentada por fãs, não como lançamento confirmado de uma nova geração animada.",
    "medium": "Arte de coleção",
    "compareTitle": "A transição retrô",
    "compareText": "Traço de ilustração clássica atualizado.",
    "traits": [
      "Chapéu largo e elementos campestres",
      "Linhas mais limpas que as dos anos 80",
      "Visual de transição entre décadas"
    ],
    "source": "https://x.com/naaragaci/status/1680596757091164163",
    "image": "",
    "sprite": [
      4,
      0
    ],
    "bg": "#e5eddc"
  },
  "2003": {
    "year": "2003",
    "label": "Nova aventura",
    "title": "Jeans e uma mochila de sonhos",
    "short": "Ela aparece com jeans, blusa listrada e um chapéu cheio de personalidade.",
    "description": "Um novo desenho animado modernizou a personagem. As proporções ficaram mais altas, a roupa ganhou jeans e a aventura passou a fazer parte de seu estilo.",
    "medium": "Novo desenho animado",
    "compareTitle": "A aventureira dos anos 2000",
    "compareText": "Jeans, camiseta listrada e chapéu de aba larga.",
    "traits": [
      "Cabelo ruivo mais liso e curto",
      "Blusa de listras e calça jeans",
      "Traço 2D com contornos definidos"
    ],
    "source": "https://www.strawberryshortcake.com/about",
    "image": "https://static.wixstatic.com/media/999c17_a5d2f191824e4495b8460272945dfa94~mv2.png",
    "sprite": null,
    "bg": "#e5eedc"
  },
  "2005": {
    "year": "2005",
    "label": "Mais cor no guarda-roupa",
    "title": "A fase cheia de rosa",
    "short": "Em artes de meados da década, a roupa fica mais rosa e descontraída.",
    "description": "A estética do universo iniciado em 2003 evoluiu também em figurinos e materiais promocionais. O painel de colecionador registra uma variante com tons de rosa e roupa mais casual em 2005.",
    "medium": "Variação de figurino",
    "compareTitle": "Rosa e atitude",
    "compareText": "Cores saturadas, rosa e silhueta juvenil.",
    "traits": [
      "Chapéu rosa mais chamativo",
      "Blusa com estampa e peças coloridas",
      "Visual mais próximo da moda da época"
    ],
    "source": "https://x.com/naaragaci/status/1680596757091164163",
    "image": "",
    "sprite": [
      1,
      1
    ],
    "bg": "#fbdce6"
  },
  "2007": {
    "year": "2007",
    "label": "A personagem cresceu",
    "title": "Um ar mais adolescente",
    "short": "Novas roupas e proporções mais alongadas marcam a fase final dessa geração.",
    "description": "A fase final da série iniciada em 2003 mudou parte do elenco e do design: a Moranguinho ficou mais crescida, com silhueta alongada e roupas modernas.",
    "medium": "Redesenho da série",
    "compareTitle": "A fase adolescente",
    "compareText": "Proporções mais altas, chapéu e roupas modernas.",
    "traits": [
      "Corpo mais alongado",
      "Roupa mais moderna e menos infantil",
      "Continuidade do universo dos anos 2000"
    ],
    "source": "https://strawberryshortcake.fandom.com/wiki/Strawberry_Shortcake_%28character%29",
    "image": "",
    "sprite": [
      2,
      1
    ],
    "bg": "#fbe4d7"
  },
  "2008": {
    "year": "2008",
    "label": "Últimos retoques",
    "title": "Uma despedida dos anos 2000",
    "short": "O visual de fim de fase aparece com cabelos avermelhados e vestido rosa.",
    "description": "Uma variação registrada por colecionadores para o encerramento do ciclo dos anos 2000. Os anos deste álbum indicam referências de artes, e não necessariamente uma nova geração oficial.",
    "medium": "Variação final",
    "compareTitle": "Os últimos retoques",
    "compareText": "Vestido rosa e cabelos vermelhos com estilo mais liso.",
    "traits": [
      "Roupas suaves com referências ao morango",
      "Cabelo ruivo com penteado renovado",
      "Traços da transição para a fase seguinte"
    ],
    "source": "https://x.com/naaragaci/status/1680596757091164163",
    "image": "",
    "sprite": [
      3,
      1
    ],
    "bg": "#f8d5da"
  },
  "2009": {
    "year": "2009",
    "label": "A transformação rosa",
    "title": "O mundo de Tutti Frutti",
    "short": "O cabelo rosa e o chapéu de morango dominam a nova identidade.",
    "description": "Um grande redesenho levou a Moranguinho para Berry Bitty City, com cabelos rosados, modelagem digital e figurino mais moderno. A série Berry Bitty Adventures estreou em 2010.",
    "medium": "Grande relançamento",
    "compareTitle": "A fase Tutti Frutti",
    "compareText": "Cabelos rosa, chapéu de morango e visual 3D.",
    "traits": [
      "Cabelo comprido em tom de rosa",
      "Proporções alongadas",
      "Chapêuzinho que lembra o fruto"
    ],
    "source": "https://www.strawberryshortcake.com/about",
    "image": "https://static.wixstatic.com/media/999c17_62fa56c181354404a42504aa43d06974~mv2.png",
    "sprite": null,
    "bg": "#ffdcca"
  },
  "2018": {
    "year": "2018",
    "label": "Um 3D diferente",
    "title": "Um protótipo muito fofo",
    "short": "Um modelo de apresentação com olhos grandes e uma touca vermelha.",
    "description": "Uma representação em CGI registrada em materiais ligados ao período: o protótipo aparece com olhos grandes e roupas simplificadas. É um visual específico, não uma série principal independente.",
    "medium": "Protótipo visual",
    "compareTitle": "A experiência em 3D",
    "compareText": "Olhos grandes, touca vermelha e rosto infantil.",
    "traits": [
      "Modelagem com cabeça mais arredondada",
      "Olhos grandes e detalhes simplificados",
      "Estética CGI de protótipo"
    ],
    "source": "https://strawberryshortcake.fandom.com/wiki/Strawberry_Shortcake_%28character%29",
    "image": "",
    "sprite": [
      0,
      2
    ],
    "bg": "#e5efe6"
  },
  "2019": {
    "year": "2019",
    "label": "A era digital",
    "title": "Um visual mais arredondado",
    "short": "Outro registro de estética 3D em conteúdo e artes da fase digital.",
    "description": "O álbum de colecionadores identifica esta variação em 2019. Ela aparece aqui como um registro de estilo da época, sem tratá-la como um novo lançamento oficial.",
    "medium": "Variação digital",
    "compareTitle": "O visual digital",
    "compareText": "Rosto arredondado e chapéu vermelho.",
    "traits": [
      "Cabelo rosado e formas suaves",
      "Olhos grandes e expressivos",
      "Volume tridimensional na roupa e no rosto"
    ],
    "source": "https://x.com/naaragaci/status/1680596757091164163",
    "image": "",
    "sprite": [
      1,
      2
    ],
    "bg": "#dfeae6"
  },
  "2021": {
    "year": "2021",
    "label": "Uma nova cidade",
    "title": "A confeiteira dos sonhos",
    "short": "Visual 2D com rosa e verde em uma cidade cheia de novidades.",
    "description": "Berry in the Big City levou a Moranguinho a uma grande cidade, com uma estética 2D moderna e roupas urbanas. O sonho de ser confeiteira tornou-se o centro de suas histórias.",
    "medium": "Nova série em 2D",
    "compareTitle": "Moranguinho na Cidade Grande",
    "compareText": "Visual urbano, cabelo rosa e desenhos mais estilizados.",
    "traits": [
      "Proporções animadas e expressivas",
      "Roupas de cidade e chapéu de morango",
      "Animação 2D com traço moderno"
    ],
    "source": "https://www.strawberryshortcake.com/about",
    "image": "https://static.wixstatic.com/media/999c17_8f19dc77fa2049e781b370bb16982e60~mv2.png",
    "sprite": null,
    "bg": "#e1ecee"
  },
  "2023": {
    "year": "2023",
    "label": "Especiais em 3D",
    "title": "A cidade fica tridimensional",
    "short": "Uma adaptação em computação gráfica para os especiais da fase urbana.",
    "description": "A fase da confeiteira também recebeu especiais em CG. A personagem mantém parte do visual moderno, agora com volume e expressões próprios da animação 3D.",
    "medium": "Especiais em CGI",
    "compareTitle": "A versão 3D da cidade",
    "compareText": "Cabelos rosa, grandes olhos e figurino em CGI.",
    "traits": [
      "Modelagem 3D com formas arredondadas",
      "Referências ao figurino da série de 2021",
      "Expressões faciais mais volumétricas"
    ],
    "source": "https://www.strawberryshortcake.com/about",
    "image": "",
    "sprite": [
      3,
      2
    ],
    "bg": "#e4e2f0"
  },
  "2026": {
    "year": "2026",
    "label": "De volta à origem",
    "title": "A nostalgia ganhou volume!",
    "short": "Cachinhos, chapéu e avental clássicos reinterpretados em 3D.",
    "description": "Em Strawberry Shortcake’s Bake Shop, lançada em outubro de 2026, o universo visual dos anos 80 ganhou uma releitura em computação gráfica. Os cachos ruivos e a roupa campestre retornam com novos detalhes.",
    "medium": "Nova série em CGI",
    "compareTitle": "O clássico reinventado",
    "compareText": "Chapéu vintage, avental e cachinhos no 3D.",
    "traits": [
      "Cachos ruivos modelados em 3D",
      "Vestido, avental e meias listradas",
      "Retorno intencional à identidade clássica"
    ],
    "source": "https://www.wildbrain.com/trade-news/something-sweet-is-baking-wildbrain-s-strawberry-shortcake-returns-home-in-brand-new-series-strawbe",
    "image": "https://static.wixstatic.com/media/4127e9_2cf5589f80bd446fa784e8d7d5538f4a~mv2.png",
    "sprite": null,
    "bg": "#e1edcf"
  }
};
const POSTER = "https://pbs.twimg.com/media/F1Kt1_iWwAImVLR?format=jpg&name=large";
const order = Object.keys(eras).sort((a,b)=>Number(a)-Number(b));
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollEra = () => document.querySelector('#eras').scrollIntoView({behavior:reduceMotion()?'auto':'smooth'});
const posterProbe = new Image();
posterProbe.src = POSTER;
const imageCache = new Map();

// Use uma imagem local, caso exista. Senão, uma referência histórica vinculada à fonte.
function setArt(wrapper, era) {
  if (!wrapper || !era) return;
  wrapper.replaceChildren();
  wrapper.classList.add('historic-media');
  const fallback = document.createElement('div');
  fallback.className = 'original-unavailable';
  fallback.innerHTML = '<span aria-hidden="true">♡</span><strong>Imagem histórica indisponível</strong><small>Você pode inserir o arquivo original na pasta assets/versoes.</small>';
  const ref = document.createElement('a');
  ref.href = era.source;
  ref.target='_blank'; ref.rel='noopener noreferrer'; ref.textContent='Ver referência ↗';
  fallback.appendChild(ref);
  wrapper.appendChild(fallback);
  const img=document.createElement('img');
  img.className='real-era-art';
  img.alt=`Moranguinho em ${era.year} — arte histórica de referência (${era.medium})`;
  img.loading = wrapper.id==='spotlight-art'?'eager':'lazy';
  img.decoding='async';
  let requestToken=Symbol(era.year);
  wrapper._imageToken=requestToken;
  const show=()=>{ if(wrapper._imageToken===requestToken) wrapper.classList.add('has-original'); };
  const unavailable=()=>{if(wrapper._imageToken===requestToken) wrapper.classList.remove('has-original');};
  img.addEventListener('load',show);
  const setRemote=()=>{
    if(era.image) { img.src=era.image; img.onerror=unavailable; return; }
    if(era.sprite) {
      img.remove();
      const sprite=document.createElement('div');
      sprite.className='poster-sprite'; sprite.setAttribute('role','img'); sprite.setAttribute('aria-label',img.alt);
      sprite.style.backgroundImage=`url("${POSTER}")`;
      sprite.style.backgroundPosition=`${era.sprite[0]*25}% ${era.sprite[1]*50}%`;
      const showPoster=()=>{if(wrapper._imageToken!==requestToken)return; wrapper.appendChild(sprite);wrapper.classList.add('has-original');};
      if(posterProbe.complete) { posterProbe.naturalWidth?showPoster():unavailable(); }
      else {posterProbe.addEventListener('load',showPoster,{once:true});posterProbe.addEventListener('error',unavailable,{once:true});}
      return;
    }
    unavailable();
  };
  img.onerror=setRemote;
  wrapper.appendChild(img);
  img.src=`assets/versoes/${era.year}.png`;
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
 document.querySelector('#era-source').href=era.source;
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
selectEra('1978'); updateComparison('a');updateComparison('b');
// A ausência de imagens externas nunca é substituída por desenhos não oficiais.
