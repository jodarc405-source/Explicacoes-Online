// ==========================================
// CEO - CENTRO DE ESTUDO ONLINE
// APLICAÇÃO DE TREINO DE MATEMÁTICA 10.º ANO
// ==========================================

// 1. UNIFICAÇÃO E DEDUPLICAÇÃO DO BANCO (504 EXERCÍCIOS / 100 DIAS)
const BANCO_EXERCICIOS = [
  ...(typeof EXERCICIOS_LOGICA !== 'undefined' ? EXERCICIOS_LOGICA : []),
  ...(typeof EXERCICIOS_GEOMETRIA_PLANO !== 'undefined' ? EXERCICIOS_GEOMETRIA_PLANO : []),
  ...(typeof EXERCICIOS_GEOMETRIA_ESPACO !== 'undefined' ? EXERCICIOS_GEOMETRIA_ESPACO : []),
  ...(typeof EXERCICIOS_GEOMETRIA !== 'undefined' ? EXERCICIOS_GEOMETRIA : []),
  ...(typeof EXERCICIOS_FUNCOES_1 !== 'undefined' ? EXERCICIOS_FUNCOES_1 : []),
  ...(typeof EXERCICIOS_FUNCOES_2 !== 'undefined' ? EXERCICIOS_FUNCOES_2 : []),
  ...(typeof EXERCICIOS_FUNCOES !== 'undefined' ? EXERCICIOS_FUNCOES : []),
  ...(typeof EXERCICIOS_ESTATISTICA !== 'undefined' ? EXERCICIOS_ESTATISTICA : [])
];

const BANCO_EXERCICIOS_DEDUP = Array.from(new Map(BANCO_EXERCICIOS.map(item => [item.id, item])).values());

// 2. ESTADO DA SESSÃO, MODALIDADE E CRONÓMETRO
const NUMERO_EXERCICIOS = 8;
let modalidadeAtual = 'diario'; // 'diario' | 'sabado' | 'domingo'
let sessaoAtiva = [];
let respostasUtilizador = {};
let tempoRestanteSegundos = 3600;
let intervaloCronometro = null;

// Variáveis para o Calendário Mensal
let dataCalendarioAtual = new Date();

window.addEventListener('DOMContentLoaded', () => {
  atualizarListaTopicos();
  carregarDashboard();
  renderizarMatematica();
  
  // Sugestão automática de fim de semana se for Sábado ou Domingo
  const diaSemanaHoje = new Date().getDay(); // 0 = Domingo, 6 = Sábado
  if (diaSemanaHoje === 6) {
    selecionarModalidade('sabado');
  } else if (diaSemanaHoje === 0) {
    selecionarModalidade('domingo');
  } else {
    selecionarModalidade('diario');
  }
});

// Navegação entre abas
function mudarAba(aba) {
  ['treino', 'resultados', 'dashboard'].forEach(nome => {
    document.getElementById(`aba-${nome}`).classList.add('hidden');
    const btn = document.getElementById(`nav-btn-${nome}`);
    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow');
    btn.classList.add('text-indigo-200');
  });

  document.getElementById(`aba-${aba}`).classList.remove('hidden');
  const btnAtivo = document.getElementById(`nav-btn-${aba}`);
  btnAtivo.classList.add('bg-indigo-600', 'text-white', 'shadow');
  btnAtivo.classList.remove('text-indigo-200');

  if (aba === 'dashboard') {
    carregarDashboard();
  }
  renderizarMatematica();
}

// ==========================================
// 3. GESTÃO DE MODALIDADES (DIÁRIO / SÁBADO / DOMINGO)
// ==========================================
function selecionarModalidade(modo) {
  modalidadeAtual = modo;
  
  const btnDiario = document.getElementById('btn-modo-diario');
  const btnSabado = document.getElementById('btn-modo-sabado');
  const btnDomingo = document.getElementById('btn-modo-domingo');
  const banner = document.getElementById('texto-banner-modalidade');
  const btnIniciar = document.getElementById('btn-iniciar-sessao');

  [btnDiario, btnSabado, btnDomingo].forEach(b => {
    b.className = "px-4 py-2 rounded-xl border transition flex items-center gap-2 bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200";
  });

  if (modo === 'diario') {
    btnDiario.className = "px-4 py-2 rounded-xl border transition flex items-center gap-2 bg-indigo-600 text-white border-indigo-700 shadow-sm";
    banner.innerHTML = "<strong>Modo Treino Diário (Seg–Sex):</strong> 5 exercícios inéditos da matéria em estudo + 3 exercícios de matérias anteriores rodados equitativamente.";
    btnIniciar.innerHTML = '<i class="fa-solid fa-play"></i> Gerar Ficha Diária de 1 Hora';
  } else if (modo === 'sabado') {
    btnSabado.className = "px-4 py-2 rounded-xl border transition flex items-center gap-2 bg-indigo-600 text-white border-indigo-700 shadow-sm";
    banner.innerHTML = "<strong>Ficha de Sábado (Consolidação Semanal - Parte 1):</strong> Resumo semanal focado prioritariamente na <strong>retificação dos exercícios que o aluno errou durante a semana</strong>, consolidando lacunas.";
    btnIniciar.innerHTML = '<i class="fa-solid fa-play"></i> Gerar Ficha de Sábado (Retificar Erros da Semana)';
  } else if (modo === 'domingo') {
    btnDomingo.className = "px-4 py-2 rounded-xl border transition flex items-center gap-2 bg-amber-600 text-white border-amber-700 shadow-sm";
    banner.innerHTML = "<strong>Ficha de Domingo (Consolidação Semanal - Parte 2):</strong> Revisão global integradora dos temas estudados na semana para solidificar a matéria antes do início da nova semana letiva.";
    btnIniciar.innerHTML = '<i class="fa-solid fa-play"></i> Gerar Ficha de Domingo (Consolidação Semanal)';
  }

  const topicoId = document.getElementById('seletor-topico').value;
  const topicoAtual = TOPICOS_MANUAL.find(t => t.id === topicoId);
  if (topicoAtual) atualizarResumoEstruturaSessao(topicoAtual);
}

// ==========================================
// 4. SINCRONIZAÇÃO DE TÓPICOS E PÁGINAS DO MANUAL
// ==========================================
function atualizarListaTopicos() {
  const cadernoSel = parseInt(document.getElementById('seletor-caderno').value);
  const topicosFiltrados = TOPICOS_MANUAL.filter(t => t.caderno === cadernoSel);
  
  const selectTopico = document.getElementById('seletor-topico');
  selectTopico.innerHTML = '';

  topicosFiltrados.forEach((t, index) => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.textContent = `Págs. ${t.paginaInicio}–${t.paginaFim}: ${t.subtema}`;
    if (index === 0) opt.selected = true;
    selectTopico.appendChild(opt);
  });

  atualizarPaginaPorTopico();
}

function atualizarPaginaPorTopico() {
  const topicoId = document.getElementById('seletor-topico').value;
  const topico = TOPICOS_MANUAL.find(t => t.id === topicoId);
  if (topico) {
    document.getElementById('input-pagina-estudada').value = topico.paginaFim;
    document.getElementById('label-intervalo-paginas').textContent = `Págs. ${topico.paginaInicio}–${topico.paginaFim}`;
    atualizarResumoEstruturaSessao(topico);
  }
}

function sincronizarPorNumeroPagina(paginaStr) {
  const pag = parseInt(paginaStr);
  if (isNaN(pag)) return;

  const cadernoSel = parseInt(document.getElementById('seletor-caderno').value);
  const topicoCorrespondente = TOPICOS_MANUAL.find(t => t.caderno === cadernoSel && pag >= t.paginaInicio && pag <= t.paginaFim);
  
  if (topicoCorrespondente) {
    document.getElementById('seletor-topico').value = topicoCorrespondente.id;
    document.getElementById('label-intervalo-paginas').textContent = `Págs. ${topicoCorrespondente.paginaInicio}–${topicoCorrespondente.paginaFim}`;
    atualizarResumoEstruturaSessao(topicoCorrespondente);
  }
}

function atualizarResumoEstruturaSessao(topicoAtual) {
  const containerResumo = document.getElementById('resumo-estrutura-sessao');

  if (modalidadeAtual === 'sabado' || modalidadeAtual === 'domingo') {
    const errosSemana = obterErrosSemanaAtual();
    const numErros = errosSemana.length;
    const nomeFicha = modalidadeAtual === 'sabado' ? 'Sábado (Parte 1)' : 'Domingo (Parte 2)';
    
    containerResumo.innerHTML = `
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-clock-rotate-left text-amber-600 text-base"></i>
        <div>
          <strong>Ficha de ${nomeFicha}:</strong> 
          Detetados <strong>${numErros} erro(s) registados durante a semana</strong>. A ficha incluirá esses exercícios para retificação imediata e ${Math.max(0, 8 - numErros)} exercícios de consolidação semanal.
        </div>
      </div>
      <div class="font-mono font-bold text-xs bg-amber-100 text-amber-900 px-2.5 py-1 rounded">
        ${Math.min(8, numErros)} Erros a Rever &bull; ${Math.max(0, 8 - numErros)} Consolidação
      </div>
    `;
    return;
  }

  const indexAtual = TOPICOS_MANUAL.findIndex(t => t.id === topicoAtual.id);
  const topicosAnteriores = TOPICOS_MANUAL.slice(0, indexAtual);
  
  if (topicosAnteriores.length === 0) {
    containerResumo.innerHTML = `
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-circle-info text-indigo-600 text-base"></i>
        <div>
          <strong>Primeiras Páginas do Programa (${topicoAtual.subtema}):</strong> 
          Como é o início do estudo, a sessão de 1 hora terá <strong>8 exercícios focados nesta matéria</strong> para consolidação base.
        </div>
      </div>
      <div class="font-mono font-bold text-xs bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded">8 Atuais &bull; 0 Anteriores</div>
    `;
  } else {
    const numAnteriores = Math.min(3, topicosAnteriores.length);
    const numAtuais = 8 - numAnteriores;
    containerResumo.innerHTML = `
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-arrows-rotate text-indigo-600 text-base"></i>
        <div>
          <strong>Distribuição Equitativa da Ficha de Hoje:</strong> 
          <strong>${numAtuais} exercícios</strong> da matéria atual (Págs. ${topicoAtual.paginaInicio}–${topicoAtual.paginaFim}, inéditos) + 
          <strong>${numAnteriores} exercícios de revisão</strong> (cada um de uma matéria anterior diferente, rodados de forma igual ao longo dos dias).
        </div>
      </div>
      <div class="font-mono font-bold text-xs bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded">${numAtuais} Atuais &bull; ${numAnteriores} Revisão</div>
    `;
  }
}

// Obter exercícios errados durante a semana corrente (Segunda a Sexta)
function obterErrosSemanaAtual() {
  const historico = JSON.parse(localStorage.getItem('mat10_historico') || '[]');
  const hoje = new Date();
  
  // Calcular início da semana (segunda-feira 00:00:00)
  const diaSemana = hoje.getDay(); // 0 = dom, 1 = seg...
  const diasDesdeSegunda = diaSemana === 0 ? 6 : diaSemana - 1;
  const segundaFeira = new Date(hoje);
  segundaFeira.setDate(hoje.getDate() - diasDesdeSegunda);
  segundaFeira.setHours(0, 0, 0, 0);

  const idsErros = new Set();
  const listaExerciciosErrados = [];

  historico.forEach(sessao => {
    const dataSessao = new Date(sessao.data);
    if (dataSessao >= segundaFeira && sessao.detalhes) {
      sessao.detalhes.forEach(d => {
        if (d.acertou === false && d.id && !idsErros.has(d.id)) {
          idsErros.add(d.id);
          const objOriginal = BANCO_EXERCICIOS_DEDUP.find(e => e.id === d.id);
          if (objOriginal) {
            listaExerciciosErrados.push({
              ...objOriginal,
              isErroSemanal: true,
              dataErro: dataSessao.toLocaleDateString('pt-PT')
            });
          }
        }
      });
    }
  });

  return listaExerciciosErrados;
}

// Obter todos os exercícios tentados durante a semana corrente
function obterExerciciosFeitosSemanaAtual() {
  const historico = JSON.parse(localStorage.getItem('mat10_historico') || '[]');
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  const diasDesdeSegunda = diaSemana === 0 ? 6 : diaSemana - 1;
  const segundaFeira = new Date(hoje);
  segundaFeira.setDate(hoje.getDate() - diasDesdeSegunda);
  segundaFeira.setHours(0, 0, 0, 0);

  const idsFeitos = new Set();
  const lista = [];

  historico.forEach(sessao => {
    const dataSessao = new Date(sessao.data);
    if (dataSessao >= segundaFeira && sessao.detalhes) {
      sessao.detalhes.forEach(d => {
        if (d.id && !idsFeitos.has(d.id)) {
          idsFeitos.add(d.id);
          const objOriginal = BANCO_EXERCICIOS_DEDUP.find(e => e.id === d.id);
          if (objOriginal) lista.push(objOriginal);
        }
      });
    }
  });

  return lista;
}

// ==========================================
// 5. ALGORITMO DE CRIAÇÃO DA FICHA
// ==========================================
function iniciarSessao() {
  const topicoId = document.getElementById('seletor-topico').value;
  const topicoAtual = TOPICOS_MANUAL.find(t => t.id === topicoId);
  if (!topicoAtual) return;

  if (modalidadeAtual === 'sabado' || modalidadeAtual === 'domingo') {
    gerarFichaFimDeSemana(modalidadeAtual, topicoAtual);
  } else {
    gerarFichaDiariaRegular(topicoAtual);
  }

  // Reset de respostas e cronómetro de 60 minutos
  respostasUtilizador = {};
  tempoRestanteSegundos = 3600;

  if (intervaloCronometro) clearInterval(intervaloCronometro);
  intervaloCronometro = setInterval(atualizarCronometro, 1000);

  // Interface
  document.getElementById('status-sessao').classList.remove('hidden');
  document.getElementById('painel-submissao').classList.remove('hidden');
  document.getElementById('btn-imprimir-enunciado').classList.remove('hidden');
  document.getElementById('btn-imprimir-enunciado').classList.add('flex');
  document.getElementById('progresso-exercicios').textContent = `0/${sessaoAtiva.length}`;

  const tituloImpressao = modalidadeAtual === 'sabado'
    ? 'Ficha de Sábado (Consolidação e Retificação de Erros da Semana)'
    : (modalidadeAtual === 'domingo' ? 'Ficha de Domingo (Consolidação Semanal Integradora)' : `Tema Principal: ${topicoAtual.temaNome} - ${topicoAtual.subtema}`);

  document.getElementById('print-subtitulo-materia').textContent = 
    `${tituloImpressao} (Págs. ${topicoAtual.paginaInicio} a ${topicoAtual.paginaFim})`;

  renderizarListaExercicios();
}

// Geração da Ficha Diária (Segunda a Sexta) com Banco de 504 Itens
function gerarFichaDiariaRegular(topicoAtual) {
  const indexAtual = TOPICOS_MANUAL.findIndex(t => t.id === topicoAtual.id);
  const topicosAnteriores = TOPICOS_MANUAL.slice(0, indexAtual);

  const numRevisao = Math.min(3, topicosAnteriores.length);
  const numAtuais = 8 - numRevisao;

  // 1. Obter exercícios da Matéria Atual SEM REPETIÇÃO
  let resolvidosGlobal = JSON.parse(localStorage.getItem('mat10_resolvidos_v3') || '[]');
  let poolAtual = BANCO_EXERCICIOS_DEDUP.filter(ex => ex.topicoId === topicoAtual.id);
  let naoResolvidosAtual = poolAtual.filter(ex => !resolvidosGlobal.includes(ex.id));

  // Se esgotar os inéditos do tópico (cada tópico tem 36 itens), renova o ciclo desse tópico
  if (naoResolvidosAtual.length < numAtuais) {
    const idsDesteTopico = new Set(poolAtual.map(e => e.id));
    resolvidosGlobal = resolvidosGlobal.filter(id => !idsDesteTopico.has(id));
    localStorage.setItem('mat10_resolvidos_v3', JSON.stringify(resolvidosGlobal));
    naoResolvidosAtual = [...poolAtual];
  }

  naoResolvidosAtual.sort(() => 0.5 - Math.random());
  const exerciciosAtuais = naoResolvidosAtual.slice(0, numAtuais).map(ex => ({
    ...ex,
    isRevisao: false,
    badgeTexto: `Matéria Atual (Págs. ${ex.paginaInicio}–${ex.paginaFim})`
  }));

  exerciciosAtuais.forEach(ex => {
    if (!resolvidosGlobal.includes(ex.id)) resolvidosGlobal.push(ex.id);
  });
  localStorage.setItem('mat10_resolvidos_v3', JSON.stringify(resolvidosGlobal));

  // 2. Selecionar até 3 exercícios de matérias anteriores DISTINTAS e EQUITATIVAS
  let exerciciosRevisao = [];
  if (numRevisao > 0) {
    let contagemTopicos = JSON.parse(localStorage.getItem('mat10_contagem_topicos_revisao') || '{}');

    let topicosOrdenados = [...topicosAnteriores].sort((a, b) => {
      const countA = contagemTopicos[a.id] || 0;
      const countB = contagemTopicos[b.id] || 0;
      if (countA === countB) return 0.5 - Math.random();
      return countA - countB;
    });

    const topicosEscolhidosParaRevisao = topicosOrdenados.slice(0, numRevisao);

    topicosEscolhidosParaRevisao.forEach(t => {
      const poolTopico = BANCO_EXERCICIOS_DEDUP.filter(ex => ex.topicoId === t.id);
      if (poolTopico.length > 0) {
        const exSorteado = poolTopico[Math.floor(Math.random() * poolTopico.length)];
        exerciciosRevisao.push({
          ...exSorteado,
          isRevisao: true,
          badgeTexto: `Revisão Cumulativa (Págs. ${exSorteado.paginaInicio}–${exSorteado.paginaFim})`
        });
        contagemTopicos[t.id] = (contagemTopicos[t.id] || 0) + 1;
      }
    });

    localStorage.setItem('mat10_contagem_topicos_revisao', JSON.stringify(contagemTopicos));
  }

  sessaoAtiva = [...exerciciosAtuais, ...exerciciosRevisao].sort(() => 0.5 - Math.random());
}

// Geração da Ficha de Fim de Semana (Sábado / Domingo)
function gerarFichaFimDeSemana(modo, topicoAtual) {
  const errosSemana = obterErrosSemanaAtual();
  const feitosSemana = obterExerciciosFeitosSemanaAtual();
  
  let selecionados = [];

  // 1. Prioridade máxima: Exercícios errados na semana
  errosSemana.sort(() => 0.5 - Math.random());
  const errosParaFicha = errosSemana.slice(0, 8).map(ex => ({
    ...ex,
    isRevisao: true,
    badgeTexto: `⚠️ Retificação de Erro da Semana (${ex.subtema})`
  }));
  selecionados.push(...errosParaFicha);

  // 2. Se faltarem exercícios para perfazer 8:
  if (selecionados.length < 8) {
    const idsJaSelecionados = new Set(selecionados.map(e => e.id));
    
    // Complementar com exercícios praticados durante a semana
    const feitosRestantes = feitosSemana.filter(e => !idsJaSelecionados.has(e.id));
    feitosRestantes.sort(() => 0.5 - Math.random());
    
    while (selecionados.length < 8 && feitosRestantes.length > 0) {
      const ex = feitosRestantes.pop();
      idsJaSelecionados.add(ex.id);
      selecionados.push({
        ...ex,
        isRevisao: true,
        badgeTexto: `Consolidação da Matéria da Semana (${ex.subtema})`
      });
    }
  }

  // 3. Se ainda faltar (ex: semana começou agora ou sem dados suficientes):
  if (selecionados.length < 8) {
    const idsJaSelecionados = new Set(selecionados.map(e => e.id));
    const poolTopico = BANCO_EXERCICIOS_DEDUP.filter(e => e.topicoId === topicoAtual.id && !idsJaSelecionados.has(e.id));
    poolTopico.sort(() => 0.5 - Math.random());

    while (selecionados.length < 8 && poolTopico.length > 0) {
      const ex = poolTopico.pop();
      selecionados.push({
        ...ex,
        isRevisao: false,
        badgeTexto: `Consolidação: ${ex.subtema}`
      });
    }
  }

  sessaoAtiva = selecionados.sort(() => 0.5 - Math.random());
}

// Cronómetro decrescente de 60 minutos
function atualizarCronometro() {
  if (tempoRestanteSegundos <= 0) {
    clearInterval(intervaloCronometro);
    alert('Terminaram os 60 minutos de estudo. Submissão automática da ficha.');
    submeterTreino();
    return;
  }
  tempoRestanteSegundos--;
  const min = Math.floor(tempoRestanteSegundos / 60);
  const seg = tempoRestanteSegundos % 60;
  document.getElementById('cronometro-sessao').textContent = 
    `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
}

// Renderização dos cartões de exercícios
function renderizarListaExercicios() {
  const container = document.getElementById('container-exercicios');
  container.innerHTML = '';

  sessaoAtiva.forEach((ex, idx) => {
    const card = document.createElement('div');
    card.className = "bg-white p-5 rounded-2xl shadow-sm border border-slate-200 a4-page-break space-y-4";
    
    let badgeCor = "bg-indigo-100 text-indigo-900 border border-indigo-200";
    if (ex.badgeTexto && ex.badgeTexto.includes('⚠️')) {
      badgeCor = "bg-rose-100 text-rose-900 border border-rose-300";
    } else if (ex.isRevisao) {
      badgeCor = "bg-amber-100 text-amber-900 border border-amber-300";
    }

    card.innerHTML = `
      <div class="flex flex-wrap justify-between items-center border-b border-slate-200 pb-2 gap-2">
        <div class="flex items-center gap-2">
          <span class="bg-indigo-900 text-white text-xs font-bold px-2 py-0.5 rounded">
            Item ${idx + 1}
          </span>
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeCor}">
            ${ex.badgeTexto}
          </span>
          <span class="text-xs font-semibold text-slate-600 hidden sm:inline">&bull; ${ex.subtema}</span>
        </div>
        <div class="text-xs font-bold text-slate-500">
          Cotação: ${ex.cotacaoValores} val. &nbsp;|&nbsp; Ref: ${ex.manualRef}
        </div>
      </div>

      <div class="text-slate-900 text-base leading-relaxed math-font py-1">
        ${ex.enunciado}
      </div>

      <!-- Seletor de Escolha Múltipla se aplicável -->
      ${renderizarOpcoesOuInput(ex)}

      <!-- Área Milimétrica de Resolução (Visível exclusivamente na impressão A4) -->
      <div class="area-resolucao-impressao rounded p-3">
        <div class="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">
          Espaço reservado à demonstração, cálculos e resposta do Item ${idx + 1}:
        </div>
        <div class="w-full h-36 grid-papel-resolucao rounded"></div>
      </div>
    `;
    container.appendChild(card);
  });

  renderizarMatematica();
}

function renderizarOpcoesOuInput(ex) {
  if (ex.tipo === 'escolha_multipla' && ex.opcoes && ex.opcoes.length > 0) {
    const opcoesHtml = ex.opcoes.map(op => `
      <label class="flex items-center gap-2 p-2 rounded-xl border border-slate-200 hover:bg-indigo-50/50 cursor-pointer text-sm">
        <input type="radio" name="opcao-${ex.id}" value="${op.id}" onchange="registarResposta('${ex.id}', '${op.id}')" class="text-indigo-600 focus:ring-indigo-500" />
        <span class="font-bold text-slate-700">${op.id})</span>
        <span class="math-font text-slate-800">${op.texto}</span>
      </label>
    `).join('');

    return `
      <div class="campo-input-ecra pt-2 space-y-2">
        <div class="text-xs font-bold uppercase text-slate-500">Opções de resposta:</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${opcoesHtml}
        </div>
      </div>
    `;
  }

  return `
    <div class="campo-input-ecra pt-2 flex items-center gap-3">
      <label class="text-xs font-bold uppercase text-slate-500">A tua resposta final:</label>
      <input 
        type="text" 
        placeholder="Ex: 5, -2, 3/4..." 
        id="resp-${ex.id}"
        oninput="registarResposta('${ex.id}', this.value)"
        class="w-48 bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
    </div>
  `;
}

function registarResposta(id, valor) {
  respostasUtilizador[id] = valor.trim();
  const respondidas = Object.values(respostasUtilizador).filter(v => v !== '').length;
  document.getElementById('progresso-exercicios').textContent = `${respondidas}/${sessaoAtiva.length}`;
}

function imprimirFichaEnunciado() {
  window.print();
}

function imprimirResolucaoCompleta() {
  window.print();
}

// ==========================================
// 6. AVALIAÇÃO E APRESENTAÇÃO DE RESULTADOS
// ==========================================
function avaliarResposta(correta, dada, tipo) {
  if (!dada) return false;
  const dLimpa = dada.toLowerCase().replace(/\s+/g, '');
  const cLimpa = String(correta).toLowerCase().replace(/\s+/g, '');

  if (dLimpa === cLimpa) return true;

  if (tipo === 'numero') {
    const valDada = resolverFracao(dLimpa);
    const valCorreta = Number(correta);
    if (!isNaN(valDada) && Math.abs(valDada - valCorreta) < 0.05) return true;
  }
  return false;
}

function resolverFracao(str) {
  if (str.includes('/')) {
    const partes = str.split('/');
    return parseFloat(partes[0]) / parseFloat(partes[1]);
  }
  return parseFloat(str.replace(',', '.'));
}

function submeterTreino() {
  if (intervaloCronometro) clearInterval(intervaloCronometro);

  let cotacaoTotalObtida = 0;
  let certas = 0;
  const relatorioSessao = [];

  sessaoAtiva.forEach(ex => {
    const dada = respostasUtilizador[ex.id] || "";
    const acertou = avaliarResposta(ex.respostaCorreta, dada, ex.tipo);
    
    if (acertou) {
      certas++;
      cotacaoTotalObtida += ex.cotacaoValores;
    }

    relatorioSessao.push({
      id: ex.id,
      enunciado: ex.enunciado,
      manualRef: ex.manualRef,
      subtema: ex.subtema,
      dominio: ex.dominio,
      cotacaoValores: ex.cotacaoValores,
      respostaCorreta: ex.respostaCorreta,
      passosResolucao: ex.passosResolucao,
      respostaDada: dada,
      acertou: acertou,
      isRevisao: ex.isRevisao
    });
  });

  const notaFinal = Number(cotacaoTotalObtida.toFixed(1));

  guardarHistoricoSessao(notaFinal, certas, sessaoAtiva.length, relatorioSessao, modalidadeAtual);
  apresentarResultadosComResolucao(notaFinal, certas, sessaoAtiva.length, relatorioSessao);
  mudarAba('resultados');
}

function apresentarResultadosComResolucao(nota, certas, total, lista) {
  const card = document.getElementById('card-nota');
  let corNota = nota >= 14 ? 'text-emerald-600' : (nota >= 10 ? 'text-amber-600' : 'text-rose-600');
  
  let medalhaTexto = "";
  if (nota >= 18) medalhaTexto = "🥇 Desempenho Ouro (Excelente!)";
  else if (nota >= 14) medalhaTexto = "🥈 Desempenho Prata (Muito Bom)";
  else if (nota >= 10) medalhaTexto = "🥉 Desempenho Bronze (Suficiente)";
  else if (nota >= 6) medalhaTexto = "⚠️ Desempenho Insuficiente (Mau)";
  else medalhaTexto = "🛑 Desempenho Crítico (Muito Mau)";

  card.innerHTML = `
    <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Classificação Oficial da Ficha Diária (1 Hora)</div>
    <div class="text-5xl font-black ${corNota}">${nota} <span class="text-2xl text-slate-400">/ 20</span></div>
    <div class="text-sm font-bold text-slate-700 mt-1">${medalhaTexto}</div>
    <div class="text-xs font-medium text-slate-500">${certas} de ${total} exercícios corretos</div>
  `;

  const containerResolucoes = document.getElementById('lista-resolucoes');
  containerResolucoes.innerHTML = '';

  lista.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = `p-5 rounded-2xl border ${item.acertou ? 'bg-emerald-50/40 border-emerald-300' : 'bg-rose-50/40 border-rose-300'} a4-page-break space-y-3`;

    let passosHtml = item.passosResolucao.map(p => `<li class="math-font leading-relaxed">${p}</li>`).join('');

    div.innerHTML = `
      <div class="flex justify-between items-center text-xs border-b pb-2">
        <span class="font-bold uppercase ${item.acertou ? 'text-emerald-700' : 'text-rose-700'}">
          <i class="fa-solid ${item.acertou ? 'fa-circle-check' : 'fa-circle-xmark'} mr-1"></i>
          Item ${idx + 1}: ${item.acertou ? `Cotação Plena (+${item.cotacaoValores} val)` : '0,0 valores'}
        </span>
        <span class="text-slate-500 font-semibold">${item.manualRef}</span>
      </div>

      <div class="text-slate-900 font-medium math-font text-sm">
        ${item.enunciado}
      </div>

      <div class="text-xs flex gap-6 bg-white/80 p-2.5 rounded-xl border border-slate-200">
        <div><span class="text-slate-500 font-bold uppercase">Resposta submetida:</span> <span class="font-mono font-bold">${item.respostaDada || '(em branco)'}</span></div>
        <div><span class="text-slate-500 font-bold uppercase">Solução matemática:</span> <span class="font-mono font-bold text-indigo-700">${item.respostaCorreta}</span></div>
      </div>

      <div>
        <div class="text-xs font-bold uppercase text-slate-700 mb-1.5 flex items-center gap-1.5">
          <i class="fa-solid fa-graduation-cap text-indigo-600"></i> Demonstração Analítica Passo a Passo:
        </div>
        <ol class="list-decimal list-inside text-xs text-slate-800 space-y-1.5 bg-white p-3.5 rounded-xl border border-slate-200">
          ${passosHtml}
        </ol>
      </div>
    `;
    containerResolucoes.appendChild(div);
  });

  renderizarMatematica();
}

// ==========================================
// 7. HISTÓRICO E PERSISTÊNCIA LOCALSTORAGE
// ==========================================
function guardarHistoricoSessao(nota, certas, total, detalhes, modalidade) {
  const historico = JSON.parse(localStorage.getItem('mat10_historico') || '[]');
  historico.push({
    data: new Date().toISOString(),
    nota: nota,
    certas: certas,
    total: total,
    horas: 1,
    modalidade: modalidade || 'diario',
    detalhes: detalhes
  });
  localStorage.setItem('mat10_historico', JSON.stringify(historico));
}

// ==========================================
// 8. DASHBOARD, GRÁFICOS E CALENDÁRIO MENSAL
// ==========================================
let chartEvolucao = null;
let chartDominio = null;

function carregarDashboard() {
  const historico = JSON.parse(localStorage.getItem('mat10_historico') || '[]');

  document.getElementById('kpi-horas').textContent = `${historico.length * 1}h`;
  document.getElementById('kpi-total-ex').textContent = `${historico.length * NUMERO_EXERCICIOS}`;

  if (historico.length > 0) {
    const media = (historico.reduce((acc, h) => acc + h.nota, 0) / historico.length).toFixed(1);
    document.getElementById('kpi-media').textContent = `${media} / 20`;
  }

  document.getElementById('kpi-streak').textContent = `${calcularStreak(historico)} dias`;

  renderizarCalendario();
  renderizarGraficoEvolucao(historico);
  renderizarGraficoDominio(historico);
  gerarDiagnostico(historico);
}

function calcularStreak(historico) {
  if (historico.length === 0) return 0;
  const datas = [...new Set(historico.map(h => h.data.split('T')[0]))].sort().reverse();
  let streak = 0;
  let hoje = new Date();
  for (let i = 0; i < datas.length; i++) {
    let d = new Date(datas[i]);
    let diff = Math.floor((hoje - d) / (1000 * 60 * 60 * 24));
    if (diff === streak || diff === streak + 1) streak++;
    else break;
  }
  return streak;
}

// ==========================================
// CALENDÁRIO MENSAL COM OS 5 ÍCONES OFICIAIS
// ==========================================
const NOMES_MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

function mudarMesCalendario(offset) {
  dataCalendarioAtual.setMonth(dataCalendarioAtual.getMonth() + offset);
  renderizarCalendario();
}

function irParaHojeCalendario() {
  dataCalendarioAtual = new Date();
  renderizarCalendario();
}

function renderizarCalendario() {
  const historico = JSON.parse(localStorage.getItem('mat10_historico') || '[]');
  
  const ano = dataCalendarioAtual.getFullYear();
  const mes = dataCalendarioAtual.getMonth();

  document.getElementById('label-mes-ano-calendario').textContent = `${NOMES_MESES[mes]} ${ano}`;

  // Mapear histórico por dia (formato YYYY-MM-DD)
  const mapaHistoricoPorDia = {};
  historico.forEach(item => {
    const dStr = item.data.split('T')[0];
    if (!mapaHistoricoPorDia[dStr]) {
      mapaHistoricoPorDia[dStr] = [];
    }
    mapaHistoricoPorDia[dStr].push(item);
  });

  // Dias da semana
  const diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  
  // Primeiro dia do mês (0 = dom, 1 = seg...)
  const primeiroDiaDoMes = new Date(ano, mes, 1);
  let diaSemanaInicial = primeiroDiaDoMes.getDay(); // 0 a 6
  diaSemanaInicial = diaSemanaInicial === 0 ? 6 : diaSemanaInicial - 1; // ajustar para Segunda = 0

  const totalDiasMes = new Date(ano, mes + 1, 0).getDate();
  const totalDiasMesAnterior = new Date(ano, mes, 0).getDate();

  const container = document.getElementById('grelha-calendario-container');
  
  let html = `
    <div class="min-w-[650px]">
      <div class="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
        ${diasSemana.map(d => `<div class="py-1">${d}</div>`).join('')}
      </div>
      <div class="grid grid-cols-7 gap-2">
  `;

  // Dias do mês anterior
  for (let i = diaSemanaInicial - 1; i >= 0; i--) {
    const numDia = totalDiasMesAnterior - i;
    html += `
      <div class="min-h-[75px] p-1.5 rounded-xl border border-slate-100 bg-slate-50/50 text-slate-300 text-xs font-semibold">
        <span>${numDia}</span>
      </div>
    `;
  }

  // Dias do mês atual
  const hoje = new Date();
  const hojeStr = hoje.toISOString().split('T')[0];

  for (let dia = 1; dia <= totalDiasMes; dia++) {
    const mesFormatado = String(mes + 1).padStart(2, '0');
    const diaFormatado = String(dia).padStart(2, '0');
    const dataIso = `${ano}-${mesFormatado}-${diaFormatado}`;
    
    const isHoje = dataIso === hojeStr;
    const sessoesNesteDia = mapaHistoricoPorDia[dataIso] || [];
    
    let conteudoIcone = '';
    let bordaClasse = isHoje ? 'border-2 border-indigo-500 bg-indigo-50/30' : 'border border-slate-200 bg-white hover:border-indigo-300';

    if (sessoesNesteDia.length > 0) {
      // Obter a melhor nota do dia
      const melhorNota = Math.max(...sessoesNesteDia.map(s => s.nota));
      
      // Ícones conforme especificado:
      // Ouro: 18 a 20 | Prata: 14 a 17 | Bronze: 10 a 13 | Mau: 6 a 9 | Muito Mau: 0 a 5
      if (melhorNota >= 18) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-trophy text-amber-500 text-xl drop-shadow-sm"></i>
            <span class="text-[9px] font-black bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Ouro)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-amber-400 bg-amber-50/30';
      } else if (melhorNota >= 14) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-medal text-slate-400 text-xl drop-shadow-sm"></i>
            <span class="text-[9px] font-black bg-slate-200 text-slate-800 border border-slate-300 px-1.5 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Prata)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-slate-300 bg-slate-50';
      } else if (melhorNota >= 10) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-award text-amber-700 text-xl drop-shadow-sm"></i>
            <span class="text-[9px] font-black bg-amber-100/70 text-amber-950 border border-amber-400 px-1.5 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Bronze)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-amber-500/50 bg-amber-50/20';
      } else if (melhorNota >= 6) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-face-frown text-orange-500 text-xl"></i>
            <span class="text-[9px] font-black bg-orange-100 text-orange-900 border border-orange-300 px-1.5 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Mau)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-orange-400 bg-orange-50/30';
      } else {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-face-sad-tear text-rose-600 text-xl"></i>
            <span class="text-[9px] font-black bg-rose-100 text-rose-900 border border-rose-300 px-1.5 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Muito Mau)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-rose-400 bg-rose-50/30';
      }
    }

    html += `
      <div onclick="mostrarDetalheDia('${dataIso}')" class="min-h-[75px] p-2 rounded-xl transition cursor-pointer flex flex-col justify-between ${bordaClasse}">
        <div class="flex justify-between items-center text-xs font-bold">
          <span class="${isHoje ? 'bg-indigo-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px]' : 'text-slate-700'}">${dia}</span>
          ${sessoesNesteDia.length > 1 ? `<span class="text-[9px] text-slate-400">${sessoesNesteDia.length}x</span>` : ''}
        </div>
        ${conteudoIcone}
      </div>
    `;
  }

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// Mostrar caixa de resumo ao clicar no dia do calendário
function mostrarDetalheDia(dataIso) {
  const historico = JSON.parse(localStorage.getItem('mat10_historico') || '[]');
  const sessoesNesteDia = historico.filter(s => s.data.startsWith(dataIso));
  const div = document.getElementById('detalhe-dia-calendario');

  if (sessoesNesteDia.length === 0) {
    div.classList.remove('hidden');
    div.innerHTML = `
      <div class="flex justify-between items-center">
        <div><strong>Data: ${dataIso}</strong> &bull; Nenhum treino realizado neste dia.</div>
        <button onclick="document.getElementById('detalhe-dia-calendario').classList.add('hidden')" class="text-slate-400 hover:text-slate-600 font-bold">&times;</button>
      </div>
    `;
    return;
  }

  const partes = sessoesNesteDia.map((s, i) => {
    let medalha = "Muito Mau (0 a 5)";
    if (s.nota >= 18) medalha = "🥇 Ouro (18 a 20)";
    else if (s.nota >= 14) medalha = "🥈 Prata (14 a 17)";
    else if (s.nota >= 10) medalha = "🥉 Bronze (10 a 13)";
    else if (s.nota >= 6) medalha = "⚠️ Mau (6 a 9)";

    const modoTexto = s.modalidade === 'sabado' ? 'Ficha de Sábado' : (s.modalidade === 'domingo' ? 'Ficha de Domingo' : 'Treino Diário');

    return `
      <div class="bg-white p-2.5 rounded-lg border border-indigo-100 flex justify-between items-center">
        <div>
          <span class="font-bold text-slate-800">Ficha #${i + 1} (${modoTexto}):</span> 
          Classificação de <strong class="text-indigo-700 text-sm">${s.nota} / 20</strong> (${s.certas}/${s.total} acertos).
        </div>
        <span class="font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">${medalha}</span>
      </div>
    `;
  }).join('');

  div.classList.remove('hidden');
  div.innerHTML = `
    <div class="flex justify-between items-center border-b border-indigo-200 pb-1 mb-2">
      <div class="font-bold text-indigo-950">Atividade Realizada em ${dataIso}:</div>
      <button onclick="document.getElementById('detalhe-dia-calendario').classList.add('hidden')" class="text-slate-400 hover:text-slate-600 font-bold">&times;</button>
    </div>
    <div class="space-y-1.5">${partes}</div>
  `;
}

// Gráficos do Chart.js
function renderizarGraficoEvolucao(historico) {
  const canvas = document.getElementById('grafico-evolucao');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (chartEvolucao) chartEvolucao.destroy();

  const labels = historico.map((_, i) => `Ficha ${i+1}`);
  const notas = historico.map(h => h.nota);

  chartEvolucao = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['Sem dados'],
      datasets: [{
        label: 'Classificação (0 a 20)',
        data: notas.length ? notas : [0],
        borderColor: '#4338ca',
        backgroundColor: 'rgba(67, 56, 202, 0.1)',
        fill: true,
        tension: 0.25,
        borderWidth: 2,
        pointBackgroundColor: '#4338ca'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { min: 0, max: 20, grid: { color: '#f1f5f9' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderizarGraficoDominio(historico) {
  const canvas = document.getElementById('grafico-dominio');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (chartDominio) chartDominio.destroy();

  const stats = { logica: { t: 0, c: 0 }, geometria: { t: 0, c: 0 }, funcoes: { t: 0, c: 0 }, estatistica: { t: 0, c: 0 } };

  historico.forEach(h => {
    h.detalhes?.forEach(d => {
      if (stats[d.dominio]) {
        stats[d.dominio].t++;
        if (d.acertou) stats[d.dominio].c++;
      }
    });
  });

  const calcPct = (k) => stats[k].t > 0 ? Math.round((stats[k].c / stats[k].t) * 100) : 0;

  chartDominio = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Lógica e Conjuntos', 'Geometria Analítica', 'Funções & Gráficos', 'Estatística'],
      datasets: [{
        label: 'Taxa de Acerto (%)',
        data: [calcPct('logica'), calcPct('geometria'), calcPct('funcoes'), calcPct('estatistica')],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: '#10b981',
        pointBackgroundColor: '#10b981',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { r: { min: 0, max: 100, ticks: { stepSize: 25 } } }
    }
  });
}

function gerarDiagnostico(historico) {
  const div = document.getElementById('lista-diagnostico');
  if (historico.length === 0) {
    div.innerHTML = `<p class="italic text-slate-400">Gera e submete a primeira ficha diária para emitir recomendações personalizadas.</p>`;
    return;
  }
  const media = (historico.reduce((acc, h) => acc + h.nota, 0) / historico.length);
  div.innerHTML = media >= 14
    ? `<div class="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200"><strong>Desempenho Muito Bom:</strong> O aluno demonstra rigor de cálculo e autonomia na resolução dentro dos 60 minutos. Recomenda-se avançar para o próximo bloco de páginas do manual escolar.</div>`
    : `<div class="p-3 bg-amber-50 text-amber-800 rounded-xl border border-amber-200"><strong>Atenção ao Raciocínio Formal:</strong> Média de ${media.toFixed(1)} valores. Consulta a resolução impressa e revê os exercícios assinalados nas páginas correspondentes do manual.</div>`;
}

function renderizarMatematica() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}
