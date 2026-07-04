/* =============================================================================
   LÓGICA DO SITE — "Vida em Estudo"
   Este arquivo só contém comportamento. Os dados (usuários, aulas, PDFs,
   eventos) ficam todos em dados.js — edite lá, não aqui.
   ============================================================================= */

// Deixa o texto sem acentos e em minúsculo, para usar em id/âncoras.
function slugify(texto){
  return texto
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/* ---------------------------- LOGIN ---------------------------- */
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const u = document.getElementById('user').value.trim();
  const p = document.getElementById('pass').value;

  const encontrado = USUARIOS.find(conta => conta.usuario === u && conta.senha === p);

  if(encontrado){
    loginError.style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app').classList.add('active');
    document.getElementById('display-name').textContent = encontrado.nome;
    document.getElementById('avatar-letter').textContent = encontrado.nome.charAt(0).toUpperCase();
  } else {
    loginError.style.display = 'block';
  }
});

document.getElementById('logout-btn').addEventListener('click', function(){
  document.getElementById('app').classList.remove('active');
  document.getElementById('login-screen').style.display = 'flex';
  loginForm.reset();
});

/* ---------------------------- NAVEGAÇÃO LATERAL ---------------------------- */
const navButtons = document.querySelectorAll('.nav-item');
navButtons.forEach(btn => {
  btn.addEventListener('click', function(){
    navButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + this.dataset.view).classList.add('active');
  });
});

/* ---------------------------- AULAS (por módulo) ---------------------------- */
const aulasContainer = document.getElementById('aulas-container');
const aulasQuickNav = document.getElementById('aulas-quick-nav');
let aulaIndexGlobal = []; // lista simples para o modal encontrar a aula pelo índice

MODULOS_AULAS.forEach((mod, modIndex) => {
  const sectionId = 'aulas-' + slugify(mod.modulo);

  // link de navegação rápida
  const navLink = document.createElement('a');
  navLink.href = '#' + sectionId;
  navLink.textContent = mod.modulo;
  aulasQuickNav.appendChild(navLink);

  // seção do módulo
  const section = document.createElement('div');
  section.className = 'module-section';
  section.id = sectionId;

  let cardsHtml = '';
  mod.aulas.forEach((aula, aulaIndex) => {
    const globalIndex = aulaIndexGlobal.length;
    aulaIndexGlobal.push(aula);
    cardsHtml += `
      <div class="lesson-card">
        <div class="lesson-thumb" data-index="${globalIndex}">
          <span class="lesson-order">Aula ${aulaIndex + 1} de ${mod.aulas.length}</span>
          <div class="lesson-fold"></div>
          <div class="play-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1B2A4A"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="lesson-body">
          <span class="eyebrow">${aula.data}</span>
          <h3>${aula.titulo}</h3>
          <p class="prof">${aula.professor}</p>
          <div class="lesson-meta">
            <span class="tag">${mod.modulo}</span>
            <span>${aula.duracao}</span>
          </div>
        </div>
      </div>
    `;
  });

  section.innerHTML = `
    <div class="module-heading">
      <span class="module-number">Módulo ${String(modIndex + 1).padStart(2, '0')}</span>
      <h3>${mod.modulo}</h3>
      <span class="sub">${mod.subtitulo}</span>
    </div>
    <div class="lessons-grid">${cardsHtml}</div>
  `;
  aulasContainer.appendChild(section);
});

// liga o clique de cada miniatura ao modal, depois que tudo foi criado
document.querySelectorAll('.lesson-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => abrirVideo(Number(thumb.dataset.index)));
});

/* ---------------------------- MODAL DE VÍDEO ---------------------------- */
const modalOverlay = document.getElementById('modal-overlay');
const videoWrap = document.getElementById('video-wrap');

function abrirVideo(i){
  const aula = aulaIndexGlobal[i];
  videoWrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${aula.youtubeId}" title="${aula.titulo}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  document.getElementById('modal-title').textContent = aula.titulo;
  document.getElementById('modal-desc').textContent = aula.descricao + " · " + aula.professor;
  modalOverlay.classList.add('active');
}
document.getElementById('modal-close').addEventListener('click', fecharVideo);
modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) fecharVideo(); });
function fecharVideo(){
  modalOverlay.classList.remove('active');
  videoWrap.innerHTML = '';
}

/* ---------------------------- MATERIAIS (por módulo) ---------------------------- */
const materiaisContainer = document.getElementById('materiais-container');
const materiaisQuickNav = document.getElementById('materiais-quick-nav');

MODULOS_MATERIAIS.forEach((mod, modIndex) => {
  const sectionId = 'materiais-' + slugify(mod.modulo);

  const navLink = document.createElement('a');
  navLink.href = '#' + sectionId;
  navLink.textContent = mod.modulo;
  materiaisQuickNav.appendChild(navLink);

  const section = document.createElement('div');
  section.className = 'module-section';
  section.id = sectionId;

  let rows = '';
  mod.itens.forEach((item, itemIndex) => {
    rows += `
      <div class="material-row">
        <div class="material-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5"/></svg>
        </div>
        <div class="material-info">
          <div class="name">Aula ${itemIndex + 1} de ${mod.itens.length} — ${item.nome}</div>
          <div class="desc">${item.desc}</div>
        </div>
        <a class="material-dl" href="${item.href}" download>Baixar</a>
      </div>
    `;
  });

  section.innerHTML = `
    <div class="module-heading">
      <span class="module-number">Módulo ${String(modIndex + 1).padStart(2, '0')}</span>
      <h3>${mod.modulo}</h3>
    </div>
    ${rows}
  `;
  materiaisContainer.appendChild(section);
});

/* ---------------------------- CALENDÁRIO ---------------------------- */
const mesesPt = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const diasSemana = ["D","S","T","Q","Q","S","S"];
let calDate = new Date();

function formatKey(y, m, d){
  return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}

function renderCalendar(){
  const y = calDate.getFullYear();
  const m = calDate.getMonth();
  document.getElementById('cal-month-label').textContent = `${mesesPt[m]} ${y}`;

  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';
  diasSemana.forEach(d => {
    const el = document.createElement('div');
    el.className = 'dow';
    el.textContent = d;
    grid.appendChild(el);
  });

  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const daysInPrevMonth = new Date(y, m, 0).getDate();
  const today = new Date();
  const eventKeys = EVENTOS.map(e => e.data);

  for(let i = 0; i < firstDay; i++){
    const el = document.createElement('div');
    el.className = 'cal-day muted';
    el.textContent = daysInPrevMonth - firstDay + i + 1;
    grid.appendChild(el);
  }
  for(let d = 1; d <= daysInMonth; d++){
    const el = document.createElement('div');
    el.className = 'cal-day';
    el.textContent = d;
    const key = formatKey(y, m, d);
    if(eventKeys.includes(key)) el.classList.add('event');
    if(d === today.getDate() && m === today.getMonth() && y === today.getFullYear()){
      el.classList.add('today');
    }
    grid.appendChild(el);
  }
}

document.getElementById('cal-prev').addEventListener('click', () => {
  calDate.setMonth(calDate.getMonth() - 1);
  renderCalendar();
});
document.getElementById('cal-next').addEventListener('click', () => {
  calDate.setMonth(calDate.getMonth() + 1);
  renderCalendar();
});
renderCalendar();

/* ---------------------------- LISTA DE EVENTOS ---------------------------- */
const eventsContainer = document.getElementById('events-container');
const mesesAbrev = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];

EVENTOS
  .slice()
  .sort((a,b) => new Date(a.data) - new Date(b.data))
  .forEach(evt => {
    const [y, m, d] = evt.data.split('-').map(Number);
    const el = document.createElement('div');
    el.className = 'event-item';
    el.innerHTML = `<div class="date">${String(d).padStart(2,'0')} ${mesesAbrev[m-1]} ${y}</div><div class="title">${evt.titulo}</div>`;
    eventsContainer.appendChild(el);
  });