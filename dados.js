/* =============================================================================
   BANCO DE DADOS DO SITE — "Vida em Estudo" (Seminário / EBD)
   -----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar no dia a dia:
     - trocar senha ou nome de alguém        -> seção 1 (USUARIOS)
     - adicionar/trocar um vídeo de aula      -> seção 2 (MODULOS_AULAS)
     - adicionar/trocar um PDF de material    -> seção 3 (MODULOS_MATERIAIS)
     - adicionar um evento no calendário       -> seção 4 (EVENTOS)

   Não é necessário mexer em nenhum outro arquivo (style.css ou script.js)
   para essas tarefas do dia a dia.
   ============================================================================= */


/* -----------------------------------------------------------------------------
   1) USUÁRIOS
   Cada linha é um login válido. Para trocar uma senha, troque o valor de
   "senha". Para adicionar uma nova pessoa, copie uma linha e mude os dados.
   ----------------------------------------------------------------------------- */
const USUARIOS = [
  { usuario: "aluno",     senha: "ebd2026", nome: "Aluno(a)" },
  { usuario: "professor", senha: "prof2026", nome: "Professor(a)" }
];


/* -----------------------------------------------------------------------------
   2) AULAS — organizadas por módulo teológico, na ordem do seminário.
   Cada módulo tem: um nome, uma descrição curta e uma lista de 3 aulas.
   Cada aula tem: título, professor, data, duração e o ID do vídeo do YouTube
   (o ID é o que vem depois de "v=" no link do YouTube).
   Para adicionar uma aula nova, copie um bloco dentro de "aulas".
   Para adicionar um módulo novo, copie um bloco inteiro de módulo.
   ----------------------------------------------------------------------------- */
const MODULOS_AULAS = [
  {
    modulo: "Bibliologia",
    subtitulo: "A doutrina das Escrituras",
    aulas: [
      {
        titulo: "A inspiração e autoridade da Bíblia",
        professor: "Prof. Marcos Vieira",
        data: "07 jun 2026",
        duracao: "42 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Como a Bíblia foi inspirada por Deus e por que ela é a nossa regra de fé."
      },
      {
        titulo: "O cânon das Escrituras",
        professor: "Prof. Marcos Vieira",
        data: "14 jun 2026",
        duracao: "39 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Como os 66 livros da Bíblia foram reconhecidos como Palavra de Deus."
      },
      {
        titulo: "Hermenêutica: princípios de interpretação",
        professor: "Prof. Marcos Vieira",
        data: "21 jun 2026",
        duracao: "45 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Regras básicas para interpretar corretamente qualquer texto bíblico."
      }
    ]
  },
  {
    modulo: "Teologia Propriamente Dita",
    subtitulo: "A doutrina de Deus",
    aulas: [
      {
        titulo: "Os atributos de Deus",
        professor: "Profa. Ana Beatriz",
        data: "28 jun 2026",
        duracao: "40 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Quem Deus é: sua santidade, amor, justiça e demais atributos."
      },
      {
        titulo: "A doutrina da Trindade",
        professor: "Profa. Ana Beatriz",
        data: "05 jul 2026",
        duracao: "44 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Um Deus em três pessoas: Pai, Filho e Espírito Santo."
      },
      {
        titulo: "A soberania e a providência de Deus",
        professor: "Profa. Ana Beatriz",
        data: "12 jul 2026",
        duracao: "37 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Como Deus governa e cuida de toda a criação."
      }
    ]
  },
  {
    modulo: "Cristologia",
    subtitulo: "A doutrina de Cristo",
    aulas: [
      {
        titulo: "A pessoa de Cristo: divindade e humanidade",
        professor: "Prof. Marcos Vieira",
        data: "19 jul 2026",
        duracao: "43 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Como Jesus é plenamente Deus e plenamente homem."
      },
      {
        titulo: "A obra expiatória de Cristo",
        professor: "Prof. Marcos Vieira",
        data: "26 jul 2026",
        duracao: "46 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "O sacrifício de Cristo na cruz e o perdão dos pecados."
      },
      {
        titulo: "A ressurreição e exaltação de Cristo",
        professor: "Prof. Marcos Vieira",
        data: "02 ago 2026",
        duracao: "41 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "A vitória de Cristo sobre a morte e sua glorificação."
      }
    ]
  },
  {
    modulo: "Pneumatologia",
    subtitulo: "A doutrina do Espírito Santo",
    aulas: [
      {
        titulo: "A pessoa do Espírito Santo",
        professor: "Profa. Camila Rocha",
        data: "09 ago 2026",
        duracao: "38 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "O Espírito Santo como pessoa da Trindade, não apenas uma força."
      },
      {
        titulo: "Os dons espirituais",
        professor: "Profa. Camila Rocha",
        data: "16 ago 2026",
        duracao: "42 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Os dons dados pelo Espírito para o serviço na igreja."
      },
      {
        titulo: "O fruto do Espírito na vida cristã",
        professor: "Profa. Camila Rocha",
        data: "23 ago 2026",
        duracao: "40 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Como o caráter de Cristo se forma em nós pelo Espírito."
      }
    ]
  },
  {
    modulo: "Soteriologia",
    subtitulo: "A doutrina da salvação",
    aulas: [
      {
        titulo: "A graça e a eleição",
        professor: "Prof. Marcos Vieira",
        data: "30 ago 2026",
        duracao: "44 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Como a salvação começa pela graça imerecida de Deus."
      },
      {
        titulo: "Justificação pela fé",
        professor: "Prof. Marcos Vieira",
        data: "06 set 2026",
        duracao: "39 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Como somos declarados justos diante de Deus, pela fé em Cristo."
      },
      {
        titulo: "Santificação e perseverança",
        professor: "Prof. Marcos Vieira",
        data: "13 set 2026",
        duracao: "41 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "O processo contínuo de crescimento na santidade cristã."
      }
    ]
  },
  {
    modulo: "Eclesiologia",
    subtitulo: "A doutrina da igreja",
    aulas: [
      {
        titulo: "A natureza e a missão da igreja",
        professor: "Profa. Ana Beatriz",
        data: "20 set 2026",
        duracao: "40 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "O que é a igreja e qual é o seu propósito no mundo."
      },
      {
        titulo: "Os ofícios e ordenanças",
        professor: "Profa. Ana Beatriz",
        data: "27 set 2026",
        duracao: "37 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Pastores e diáconos, batismo e Ceia do Senhor."
      },
      {
        titulo: "A igreja local e a igreja universal",
        professor: "Profa. Ana Beatriz",
        data: "04 out 2026",
        duracao: "38 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "A diferença entre a igreja que reunimos e o Corpo de Cristo como um todo."
      }
    ]
  },
  {
    modulo: "Escatologia",
    subtitulo: "A doutrina das últimas coisas",
    aulas: [
      {
        titulo: "A segunda vinda de Cristo",
        professor: "Prof. Marcos Vieira",
        data: "11 out 2026",
        duracao: "45 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "A promessa do retorno de Jesus e a esperança cristã."
      },
      {
        titulo: "O milênio e os últimos eventos",
        professor: "Prof. Marcos Vieira",
        data: "18 out 2026",
        duracao: "47 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "Uma visão geral das principais interpretações sobre o fim dos tempos."
      },
      {
        titulo: "O juízo final e a eternidade",
        professor: "Prof. Marcos Vieira",
        data: "25 out 2026",
        duracao: "43 min",
        youtubeId: "dQw4w9WgXcQ",
        descricao: "O juízo de Deus e a esperança da vida eterna."
      }
    ]
  }
];


/* -----------------------------------------------------------------------------
   3) MATERIAIS (PDFs) — na mesma ordem e com os mesmos módulos das aulas.
   Troque o "href" de cada item pelo link real do PDF (Google Drive, etc.).
   ----------------------------------------------------------------------------- */
const MODULOS_MATERIAIS = [
  {
    modulo: "Bibliologia",
    itens: [
      { nome: "A inspiração e autoridade da Bíblia", desc: "PDF · 1.1 MB", href: "#" },
      { nome: "O cânon das Escrituras", desc: "PDF · 890 KB", href: "#" },
      { nome: "Hermenêutica: princípios de interpretação", desc: "PDF · 1.3 MB", href: "#" }
    ]
  },
  {
    modulo: "Teologia Propriamente Dita",
    itens: [
      { nome: "Os atributos de Deus", desc: "PDF · 970 KB", href: "#" },
      { nome: "A doutrina da Trindade", desc: "PDF · 1.0 MB", href: "#" },
      { nome: "A soberania e a providência de Deus", desc: "PDF · 860 KB", href: "#" }
    ]
  },
  {
    modulo: "Cristologia",
    itens: [
      { nome: "A pessoa de Cristo: divindade e humanidade", desc: "PDF · 1.2 MB", href: "#" },
      { nome: "A obra expiatória de Cristo", desc: "PDF · 1.1 MB", href: "#" },
      { nome: "A ressurreição e exaltação de Cristo", desc: "PDF · 950 KB", href: "#" }
    ]
  },
  {
    modulo: "Pneumatologia",
    itens: [
      { nome: "A pessoa do Espírito Santo", desc: "PDF · 900 KB", href: "#" },
      { nome: "Os dons espirituais", desc: "PDF · 1.0 MB", href: "#" },
      { nome: "O fruto do Espírito na vida cristã", desc: "PDF · 870 KB", href: "#" }
    ]
  },
  {
    modulo: "Soteriologia",
    itens: [
      { nome: "A graça e a eleição", desc: "PDF · 1.1 MB", href: "#" },
      { nome: "Justificação pela fé", desc: "PDF · 980 KB", href: "#" },
      { nome: "Santificação e perseverança", desc: "PDF · 1.0 MB", href: "#" }
    ]
  },
  {
    modulo: "Eclesiologia",
    itens: [
      { nome: "A natureza e a missão da igreja", desc: "PDF · 900 KB", href: "#" },
      { nome: "Os ofícios e ordenanças", desc: "PDF · 850 KB", href: "#" },
      { nome: "A igreja local e a igreja universal", desc: "PDF · 880 KB", href: "#" }
    ]
  },
  {
    modulo: "Escatologia",
    itens: [
      { nome: "A segunda vinda de Cristo", desc: "PDF · 1.2 MB", href: "#" },
      { nome: "O milênio e os últimos eventos", desc: "PDF · 1.3 MB", href: "#" },
      { nome: "O juízo final e a eternidade", desc: "PDF · 1.0 MB", href: "#" }
    ]
  }
];


/* -----------------------------------------------------------------------------
   4) EVENTOS DO CALENDÁRIO — formato de data "AAAA-MM-DD".
   ----------------------------------------------------------------------------- */
const EVENTOS = [
  { data: "2026-07-05", titulo: "Aula: A doutrina da Trindade" },
  { data: "2026-07-19", titulo: "Aula: A pessoa de Cristo" },
  { data: "2026-07-26", titulo: "Encontro de encerramento do módulo" },
  { data: "2026-08-02", titulo: "Aula: A ressurreição de Cristo" }
];