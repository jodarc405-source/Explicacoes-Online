// ==========================================
    // 1. UNIFICAÇÃO DO BANCO DE DADOS
    // ==========================================
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
    // Garantir que no h IDs duplicados caso ambos os ficheiros sejam carregados
    const BANCO_EXERCICIOS_DEDUP = Array.from(new Map(BANCO_EXERCICIOS.map(item => [item.id, item])).values());


    // ==========================================
    // 2. ESTADO DA SESSÃO E CONTROLO DE REPETIÇÃO
    // ==========================================
    const NUMERO_EXERCICIOS = 8;
    let sessaoAtiva = [];
    let respostasUtilizador = {};
    let tempoRestanteSegundos = 3600;
    let intervaloCronometro = null;

    window.addEventListener('DOMContentLoaded', () => {
      atualizarListaTopicos();
      carregarDashboard();
      renderizarMatematica();
    });

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

      if (aba === 'dashboard') carregarDashboard();
      renderizarMatematica();
    }

    // ==========================================
    // 3. SINCRONIZAÇÃO DE CADERNO, TÓPICOS E PÁGINAS
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
      const indexAtual = TOPICOS_MANUAL.findIndex(t => t.id === topicoAtual.id);
      const topicosAnteriores = TOPICOS_MANUAL.slice(0, indexAtual);
      
      const containerResumo = document.getElementById('resumo-estrutura-sessao');
      
      if (topicosAnteriores.length === 0) {
        containerResumo.innerHTML = `
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-circle-info text-indigo-600 text-base"></i>
            <div>
              <strong>Primeiras Páginas do Manual (${topicoAtual.subtema}):</strong> 
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

    // ==========================================
    // 4. ALGORITMO DE SELEÇÃO E CRIAÇÃO DA FICHA
    // ==========================================
    function iniciarSessao() {
      const topicoId = document.getElementById('seletor-topico').value;
      const topicoAtual = TOPICOS_MANUAL.find(t => t.id === topicoId);
      if (!topicoAtual) return;

      const indexAtual = TOPICOS_MANUAL.findIndex(t => t.id === topicoAtual.id);
      const topicosAnteriores = TOPICOS_MANUAL.slice(0, indexAtual);

      // Quantidade de exercícios de revisão de páginas anteriores (máximo 3 de matérias diferentes)
      const numRevisao = Math.min(3, topicosAnteriores.length);
      const numAtuais = 8 - numRevisao;

      // 1. Obter exercícios da Matéria Atual SEM REPETIÇÃO
      let resolvidosGlobal = JSON.parse(localStorage.getItem('mat10_resolvidos_v3') || '[]');
      let poolAtual = BANCO_EXERCICIOS_DEDUP.filter(ex => ex.topicoId === topicoAtual.id);
      
      let naoResolvidosAtual = poolAtual.filter(ex => !resolvidosGlobal.includes(ex.id));

      // Se os inéditos da matéria atual forem inferiores ao necessário, reinicia o ciclo dessa matéria
      if (naoResolvidosAtual.length < numAtuais) {
        const idsDesteTopico = new Set(poolAtual.map(e => e.id));
        resolvidosGlobal = resolvidosGlobal.filter(id => !idsDesteTopico.has(id));
        localStorage.setItem('mat10_resolvidos_v3', JSON.stringify(resolvidosGlobal));
        naoResolvidosAtual = [...poolAtual];
      }

      // Baralhar inéditos e selecionar
      naoResolvidosAtual.sort(() => 0.5 - Math.random());
      const exerciciosAtuais = naoResolvidosAtual.slice(0, numAtuais).map(ex => ({
        ...ex,
        isRevisao: false,
        badgeTexto: `Matéria Atual (Págs. ${ex.paginaInicio}–${ex.paginaFim})`
      }));

      // Registar os exercícios atuais como resolvidos
      exerciciosAtuais.forEach(ex => {
        if (!resolvidosGlobal.includes(ex.id)) resolvidosGlobal.push(ex.id);
      });
      localStorage.setItem('mat10_resolvidos_v3', JSON.stringify(resolvidosGlobal));

      // 2. Selecionar até 3 exercícios de matérias anteriores DISTINTAS e EQUITATIVAS
      let exerciciosRevisao = [];
      if (numRevisao > 0) {
        let contagemTopicos = JSON.parse(localStorage.getItem('mat10_contagem_topicos_revisao') || '{}');

        // Ordenar os tópicos anteriores pelos menos revistos historicamente (empates desempatados aleatoriamente)
        let topicosOrdenados = [...topicosAnteriores].sort((a, b) => {
          const countA = contagemTopicos[a.id] || 0;
          const countB = contagemTopicos[b.id] || 0;
          if (countA === countB) return 0.5 - Math.random();
          return countA - countB;
        });

        // Selecionar os 'numRevisao' tópicos anteriores menos revistos
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
            // Incrementar contador de revisões para equilíbrio estrito
            contagemTopicos[t.id] = (contagemTopicos[t.id] || 0) + 1;
          }
        });

        localStorage.setItem('mat10_contagem_topicos_revisao', JSON.stringify(contagemTopicos));
      }}

      // Juntar os 8 exercícios e baralhar
      sessaoAtiva = [...exerciciosAtuais, ...exerciciosRevisao].sort(() => 0.5 - Math.random());

      // Reset de respostas e cronómetro
      respostasUtilizador = {};
      tempoRestanteSegundos = 3600;

      if (intervaloCronometro) clearInterval(intervaloCronometro);
      intervaloCronometro = setInterval(atualizarCronometro, 1000);

      // Atualizar interface
      document.getElementById('status-sessao').classList.remove('hidden');
      document.getElementById('painel-submissao').classList.remove('hidden');
      document.getElementById('btn-imprimir-enunciado').classList.remove('hidden');
      document.getElementById('btn-imprimir-enunciado').classList.add('flex');
      document.getElementById('progresso-exercicios').textContent = `0/${sessaoAtiva.length}`;

      // Subtítulo da impressão oficial
      document.getElementById('print-subtitulo-materia').textContent = 
        `Tema Principal: ${topicoAtual.temaNome} - ${topicoAtual.subtema} (Págs. ${topicoAtual.paginaInicio} a ${topicoAtual.paginaFim})`;

      renderizarListaExercicios();
    }

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

    function renderizarListaExercicios() {
      const container = document.getElementById('container-exercicios');
      container.innerHTML = '';

      sessaoAtiva.forEach((ex, idx) => {
        const card = document.createElement('div');
        card.className = "bg-white p-5 rounded-2xl shadow-sm border border-slate-200 a4-page-break space-y-4";
        
        const badgeCor = ex.isRevisao 
          ? "bg-amber-100 text-amber-900 border border-amber-300" 
          : "bg-indigo-100 text-indigo-900 border border-indigo-200";

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

          <!-- Campo de Input (Visível no Ecrã) -->
          <div class="campo-input-ecra pt-2 flex items-center gap-3">
            <label class="text-xs font-bold uppercase text-slate-500">A tua resposta final:</label>
            <input 
              type="text" 
              placeholder="Ex: 5, V, 1/2..." 
              id="resp-${ex.id}"
              oninput="registarResposta('${ex.id}', this.value)"
              class="w-48 bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

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
    // 5. AVALIAÇÃO E APRESENTAÇÃO DE RESULTADOS
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
          ...ex,
          respostaDada: dada,
          acertou: acertou
        });
      });

      const notaFinal = Number(cotacaoTotalObtida.toFixed(1));

      guardarHistoricoSessao(notaFinal, certas, sessaoAtiva.length, relatorioSessao);
      apresentarResultadosComResolucao(notaFinal, certas, sessaoAtiva.length, relatorioSessao);
      mudarAba('resultados');
    }

    function apresentarResultadosComResolucao(nota, certas, total, lista) {
      const card = document.getElementById('card-nota');
      let corNota = nota >= 14 ? 'text-emerald-600' : (nota >= 10 ? 'text-amber-600' : 'text-rose-600');

      card.innerHTML = `
        <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Classificação Oficial da Ficha Diária (1 Hora)</div>
        <div class="text-5xl font-black ${corNota}">${nota} <span class="text-2xl text-slate-400">/ 20</span></div>
        <div class="text-sm font-medium text-slate-600">${certas} de ${total} exercícios corretos</div>
      `;

      const containerResolucoes = document.getElementById('lista-resolucoes');
      containerResolucoes.innerHTML = '';

      lista.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = `p-5 rounded-2xl border ${item.acertou ? 'bg-emerald-50/40 border-emerald-300' : 'bg-rose-50/40 border-rose-300'} a4-page-break space-y-3`;

        let passosHtml = item.passosResolucao.map(p => `<li class="math-font leading-relaxed">${p}</li>`).join('');

        const badgeTipo = item.isRevisao 
          ? `<span class="bg-amber-100 text-amber-900 border border-amber-300 text-xs px-2.5 py-0.5 rounded-full font-bold ml-2">Revisão Cumulativa</span>`
          : `<span class="bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs px-2.5 py-0.5 rounded-full font-bold ml-2">Matéria Atual</span>`;

        div.innerHTML = `
          <div class="flex justify-between items-center text-xs border-b pb-2">
            <span class="font-bold uppercase ${item.acertou ? 'text-emerald-700' : 'text-rose-700'}">
              <i class="fa-solid ${item.acertou ? 'fa-circle-check' : 'fa-circle-xmark'} mr-1"></i>
              Item ${idx + 1}: ${item.acertou ? `Cotação Plena (+${item.cotacaoValores} val)` : '0,0 valores'}
              ${badgeTipo}
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
    // 6. HISTÓRICO, DIAGNÓSTICO E DASHBOARD
    // ==========================================
    function guardarHistoricoSessao(nota, certas, total, detalhes) {
      const historico = JSON.parse(localStorage.getItem('mat10_historico') || '[]');
      historico.push({
        data: new Date().toISOString(),
        nota: nota,
        certas: certas,
        total: total,
        horas: 1,
        detalhes: detalhes.map(d => ({ dominio: d.dominio, acertou: d.acertou }))
      });
      localStorage.setItem('mat10_historico', JSON.stringify(historico));
    }

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

    function renderizarGraficoEvolucao(historico) {
      const ctx = document.getElementById('grafico-evolucao').getContext('2d');
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
      const ctx = document.getElementById('grafico-dominio').getContext('2d');
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
        div.innerHTML = `<p class="italic text-slate-400">Gera e submete a primeira ficha diária para emitir recomendações.</p>`;
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