// ==============================================================================
// CEO - CENTRO DE ESTUDO ONLINE | MATEMÁTICA 10.º ANO
// Sistema de Treino Diário, Avaliação Formativa, Assiduidade Parental e Dashboard
// ==============================================================================

// Constantes Globais Pedagógicas (Preservação Integral)
const DURACAO_SESSAO_SEGUNDOS = 3600; // 60 minutos
const NUMERO_EXERCICIOS = 8;
const PONTOS_POR_EXERCICIO = 2.5;     // 8 * 2.5 = 20.0 valores

// Chaves de Persistência no LocalStorage
const STORAGE_HISTORICO = 'mat10_historico';
const STORAGE_AUTH = 'mat10_auth';
const STORAGE_FALTAS = 'mat10_faltas';

// Estado da Aplicação
let modalidadeSessao = 'diario'; // 'diario' | 'sabado' | 'domingo'
let exerciciosAtuais = [];
let respostasAluno = {};
let segundosRestantes = DURACAO_SESSAO_SEGUNDOS;
let intervaloCronometro = null;
let sessaoEmAndamento = false;

// Recuperação de Faltas
let faltaEmRecuperacaoId = null;

// Variáveis para o Calendário Mensal
let dataCalendarioAtual = new Date();

// ==========================================
// FUNÇÕES DE ACESSO AO BANCO DE EXERCÍCIOS
// (504 Exercícios distribuídos pelos 14 temas)
// ==========================================
function obterTodosExercicios() {
  const todos = [];
  if (typeof EXERCICIOS_LOGICA !== 'undefined' && Array.isArray(EXERCICIOS_LOGICA)) {
    todos.push(...EXERCICIOS_LOGICA);
  }
  if (typeof EXERCICIOS_GEOMETRIA_PLANO !== 'undefined' && Array.isArray(EXERCICIOS_GEOMETRIA_PLANO)) {
    todos.push(...EXERCICIOS_GEOMETRIA_PLANO);
  }
  if (typeof EXERCICIOS_GEOMETRIA_ESPACO !== 'undefined' && Array.isArray(EXERCICIOS_GEOMETRIA_ESPACO)) {
    todos.push(...EXERCICIOS_GEOMETRIA_ESPACO);
  }
  if (typeof EXERCICIOS_FUNCOES_1 !== 'undefined' && Array.isArray(EXERCICIOS_FUNCOES_1)) {
    todos.push(...EXERCICIOS_FUNCOES_1);
  }
  if (typeof EXERCICIOS_FUNCOES_2 !== 'undefined' && Array.isArray(EXERCICIOS_FUNCOES_2)) {
    todos.push(...EXERCICIOS_FUNCOES_2);
  }
  if (typeof EXERCICIOS_ESTATISTICA !== 'undefined' && Array.isArray(EXERCICIOS_ESTATISTICA)) {
    todos.push(...EXERCICIOS_ESTATISTICA);
  }
  return todos;
}

function obterExerciciosPorTopico(topicoId) {
  const todos = obterTodosExercicios();
  return todos.filter(ex => ex.topicoId === topicoId);
}

// ==========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  inicializarAuth();
  sincronizarFaltasComHistorico();
  atualizarListaTopicos();
  carregarDashboard();
  renderizarMatematica();

  // Sugestão automática de fim de semana se for Sábado ou Domingo
  const diaSemanaHoje = new Date().getDay(); // 0 = Dom, 6 = Sáb
  if (diaSemanaHoje === 6) {
    selecionarModalidade('sabado');
  } else if (diaSemanaHoje === 0) {
    selecionarModalidade('domingo');
  } else {
    selecionarModalidade('diario');
  }

  // Se for aluno e já tiver efetuado pelo menos a primeira ficha, verificar faltas
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  const auth = obterConfigAuth();
  if (historico.length > 0 && auth.sessaoAtiva && auth.sessaoAtiva.perfil === 'aluno') {
    setTimeout(verificarFaltasObrigatoriasAluno, 600);
  }
});

// ==========================================
// 1. SISTEMA DE LOGIN & PERFIS INTERLIGADOS
// ==========================================
let loginTabAtiva = 'aluno'; // 'aluno' | 'pais'

function obterConfigAuth() {
  const padrao = {
    username: 'aluno10',
    senhaAluno: 'aluno123',
    senhaPais: 'pais123',
    nomeAluno: 'Aluno do 10.º Ano',
    nomePais: 'Encarregados de Educação',
    sessaoAtiva: { perfil: 'aluno', username: 'aluno10', loginEm: new Date().toISOString() }
  };
  const gravado = localStorage.getItem(STORAGE_AUTH);
  if (!gravado) {
    localStorage.setItem(STORAGE_AUTH, JSON.stringify(padrao));
    return padrao;
  }
  try {
    return JSON.parse(gravado);
  } catch (e) {
    return padrao;
  }
}

function salvarConfigAuth(config) {
  localStorage.setItem(STORAGE_AUTH, JSON.stringify(config));
}

function inicializarAuth() {
  const auth = obterConfigAuth();
  if (!auth.sessaoAtiva) {
    abrirModalLogin('aluno');
  } else {
    atualizarBarraUsuario(auth.sessaoAtiva);
  }
}

function atualizarBarraUsuario(sessao) {
  const container = document.getElementById('badge-perfil-usuario');
  const bannerPais = document.getElementById('banner-aviso-pais');

  if (!container) return;

  if (sessao.perfil === 'aluno') {
    container.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <i class="fa-solid fa-graduation-cap text-amber-300"></i>
      <span class="text-white">Aluno</span>
      <span class="text-[10px] text-indigo-300">(${sessao.username})</span>
    `;
    if (bannerPais) bannerPais.classList.add('hidden');
  } else {
    container.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-amber-400"></span>
      <i class="fa-solid fa-user-shield text-amber-300"></i>
      <span class="text-amber-200">Encarregado de Educação</span>
      <span class="text-[10px] text-indigo-300">(${sessao.username})</span>
    `;
    if (bannerPais) bannerPais.classList.remove('hidden');
  }
}

function abrirModalLogin(perfilInicial = 'aluno') {
  const modal = document.getElementById('modal-login');
  if (modal) modal.classList.remove('hidden');
  selecionarTabLogin(perfilInicial);
  const erro = document.getElementById('login-mensagem-erro');
  if (erro) erro.classList.add('hidden');
  const pass = document.getElementById('login-password');
  if (pass) pass.value = '';
}

function fecharModalLogin() {
  const auth = obterConfigAuth();
  if (auth.sessaoAtiva) {
    const modal = document.getElementById('modal-login');
    if (modal) modal.classList.add('hidden');
  }
}

function selecionarTabLogin(perfil) {
  loginTabAtiva = perfil;
  const tabAluno = document.getElementById('login-tab-aluno');
  const tabPais = document.getElementById('login-tab-pais');
  const labelSenha = document.getElementById('login-label-senha');
  const dicaSenha = document.getElementById('login-dica-senha');
  const textoPriv = document.getElementById('login-texto-privilegios');

  if (perfil === 'aluno') {
    tabAluno.className = 'py-2.5 rounded-xl transition bg-indigo-600 text-white shadow-sm flex items-center justify-center gap-1.5';
    tabPais.className = 'py-2.5 rounded-xl transition text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5';
    labelSenha.textContent = 'Palavra-passe do Aluno';
    dicaSenha.textContent = 'Padrão: aluno123';
    textoPriv.innerHTML = '&bull; <strong>Aluno:</strong> Realizar fichas, ver resoluções, justificar faltas e agendar recuperação.';
  } else {
    tabPais.className = 'py-2.5 rounded-xl transition bg-amber-600 text-white shadow-sm flex items-center justify-center gap-1.5';
    tabAluno.className = 'py-2.5 rounded-xl transition text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5';
    labelSenha.textContent = 'Palavra-passe do Encarregado de Educação';
    dicaSenha.textContent = 'Padrão: pais123';
    textoPriv.innerHTML = '&bull; <strong>Encarregado de Educação:</strong> Acompanhar desempenho, calendário, notas e <u>homologar faltas como Justificadas ou Injustificadas</u>.';
  }
}

function submeterLogin() {
  const auth = obterConfigAuth();
  const userInput = document.getElementById('login-username').value.trim();
  const passInput = document.getElementById('login-password').value.trim();
  const erro = document.getElementById('login-mensagem-erro');

  if (userInput !== auth.username) {
    erro.textContent = `Utilizador não encontrado. O utilizador padrão da família é '${auth.username}'.`;
    erro.classList.remove('hidden');
    return;
  }

  let perfilIdentificado = null;
  if (loginTabAtiva === 'aluno') {
    if (passInput === auth.senhaAluno) {
      perfilIdentificado = 'aluno';
    } else {
      erro.textContent = 'Palavra-passe do Aluno incorreta (padrão: aluno123).';
      erro.classList.remove('hidden');
      return;
    }
  } else {
    if (passInput === auth.senhaPais) {
      perfilIdentificado = 'pais';
    } else {
      erro.textContent = 'Palavra-passe dos Encarregados de Educação incorreta (padrão: pais123).';
      erro.classList.remove('hidden');
      return;
    }
  }

  auth.sessaoAtiva = {
    perfil: perfilIdentificado,
    username: auth.username,
    loginEm: new Date().toISOString()
  };
  salvarConfigAuth(auth);

  atualizarBarraUsuario(auth.sessaoAtiva);
  document.getElementById('modal-login').classList.add('hidden');

  carregarDashboard();

  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  if (historico.length > 0 && perfilIdentificado === 'aluno') {
    setTimeout(verificarFaltasObrigatoriasAluno, 500);
  }
}

function mudarParaPerfilAluno() {
  abrirModalLogin('aluno');
}

// ==========================================
// 2. ALTERAÇÃO DE PALAVRA-PASSE (ALUNO & PAIS)
// ==========================================
function abrirModalAlterarSenha() {
  const auth = obterConfigAuth();
  const modal = document.getElementById('modal-alterar-senha');
  const seletorPerfil = document.getElementById('senha-alvo-perfil');
  const subtitulo = document.getElementById('senha-subtitulo-perfil');
  const msgErro = document.getElementById('senha-msg-erro');
  const msgSucesso = document.getElementById('senha-msg-sucesso');

  if (msgErro) msgErro.classList.add('hidden');
  if (msgSucesso) msgSucesso.classList.add('hidden');

  document.getElementById('senha-atual').value = '';
  document.getElementById('senha-nova').value = '';
  document.getElementById('senha-confirmar').value = '';

  const perfilAtual = auth.sessaoAtiva ? auth.sessaoAtiva.perfil : 'aluno';
  if (subtitulo) {
    subtitulo.textContent = `Conta Comum: ${auth.username} (Sessão Ativa: ${perfilAtual === 'aluno' ? 'Aluno' : 'Encarregado de Educação'})`;
  }

  if (seletorPerfil) {
    seletorPerfil.value = perfilAtual;
  }

  if (modal) modal.classList.remove('hidden');
}

function fecharModalAlterarSenha() {
  const modal = document.getElementById('modal-alterar-senha');
  if (modal) modal.classList.add('hidden');
}

function atualizarFormAlterarSenha() {
  const msgErro = document.getElementById('senha-msg-erro');
  const msgSucesso = document.getElementById('senha-msg-sucesso');
  if (msgErro) msgErro.classList.add('hidden');
  if (msgSucesso) msgSucesso.classList.add('hidden');
}

function submeterAlteracaoSenha() {
  const auth = obterConfigAuth();
  const alvoPerfil = document.getElementById('senha-alvo-perfil').value; // 'aluno' ou 'pais'
  const senhaAtual = document.getElementById('senha-atual').value.trim();
  const senhaNova = document.getElementById('senha-nova').value.trim();
  const senhaConfirmar = document.getElementById('senha-confirmar').value.trim();

  const msgErro = document.getElementById('senha-msg-erro');
  const msgSucesso = document.getElementById('senha-msg-sucesso');
  msgErro.classList.add('hidden');
  msgSucesso.classList.add('hidden');

  // Verificar senha atual
  const perfilAtivo = auth.sessaoAtiva ? auth.sessaoAtiva.perfil : 'aluno';
  const senhaEsperada = (perfilAtivo === 'pais') ? auth.senhaPais : auth.senhaAluno;

  if (senhaAtual !== senhaEsperada) {
    msgErro.textContent = 'A palavra-passe atual inserida está incorreta.';
    msgErro.classList.remove('hidden');
    return;
  }

  // Se for aluno, não pode alterar a senha dos pais!
  if (perfilAtivo === 'aluno' && alvoPerfil === 'pais') {
    msgErro.textContent = 'O Aluno apenas tem permissão para alterar a sua própria palavra-passe.';
    msgErro.classList.remove('hidden');
    return;
  }

  if (senhaNova.length < 4) {
    msgErro.textContent = 'A nova palavra-passe deve conter pelo menos 4 caracteres.';
    msgErro.classList.remove('hidden');
    return;
  }

  if (senhaNova !== senhaConfirmar) {
    msgErro.textContent = 'A confirmação não coincide com a nova palavra-passe.';
    msgErro.classList.remove('hidden');
    return;
  }

  // Salvar a nova palavra-passe
  if (alvoPerfil === 'aluno') {
    auth.senhaAluno = senhaNova;
  } else {
    auth.senhaPais = senhaNova;
  }
  salvarConfigAuth(auth);

  msgSucesso.textContent = `Palavra-passe de ${alvoPerfil === 'aluno' ? 'Aluno' : 'Encarregado de Educação'} alterada com sucesso!`;
  msgSucesso.classList.remove('hidden');

  setTimeout(() => {
    fecharModalAlterarSenha();
  }, 1200);
}

// ==========================================
// 3. DIAS DE ESTUDO & REGISTO DE FALTAS
// ==========================================
// Regime oficial: Segundas (1), Quartas (3), Sextas (5), Sábado (6) e Domingo (0).
// Terças (2) e Quintas (4) são dias de descanso.
function isDiaDeEstudo(dataObj) {
  const diaSem = dataObj.getDay();
  return (diaSem === 1 || diaSem === 3 || diaSem === 5 || diaSem === 6 || diaSem === 0);
}

function obterNomeDiaSemana(dataObj) {
  const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  return dias[dataObj.getDay()];
}

function formatarDataIso(dataObj) {
  const y = dataObj.getFullYear();
  const m = String(dataObj.getMonth() + 1).padStart(2, '0');
  const d = String(dataObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function obterFaltas() {
  const gravado = localStorage.getItem(STORAGE_FALTAS);
  if (!gravado) return [];
  try {
    return JSON.parse(gravado);
  } catch (e) {
    return [];
  }
}

function salvarFaltas(faltas) {
  localStorage.setItem(STORAGE_FALTAS, JSON.stringify(faltas));
}

// REGRA: AS FALTAS INICIAM SÓ DEPOIS DO ALUNO EFETUAR A PRIMEIRA FICHA!
function sincronizarFaltasComHistorico() {
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');

  // Se o aluno ainda não efetuou nenhuma ficha, não há qualquer falta!
  if (historico.length === 0) {
    salvarFaltas([]);
    return;
  }

  // Data da primeira ficha realizada
  const timestamps = historico.map(s => new Date(s.data).getTime());
  const dataPrimeiraFicha = new Date(Math.min(...timestamps));
  dataPrimeiraFicha.setHours(0, 0, 0, 0);

  // As faltas só começam a contar para os dias estritamente posteriores à primeira ficha realizada
  const dataInicioFaltas = new Date(dataPrimeiraFicha);
  dataInicioFaltas.setDate(dataInicioFaltas.getDate() + 1);

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  if (dataInicioFaltas >= hoje) {
    // Ainda não decorreram dias completos de estudo após a primeira ficha
    let faltasValidas = obterFaltas().filter(f => new Date(f.data + 'T00:00:00') >= dataInicioFaltas);
    salvarFaltas(faltasValidas);
    return;
  }

  const datasComFicha = new Set(historico.map(s => s.data.split('T')[0]));
  let faltas = obterFaltas().filter(f => new Date(f.data + 'T00:00:00') >= dataInicioFaltas);

  for (let cursor = new Date(dataInicioFaltas); cursor < hoje; cursor.setDate(cursor.getDate() + 1)) {
    if (isDiaDeEstudo(cursor)) {
      const dataIso = formatarDataIso(cursor);
      const fezFicha = datasComFicha.has(dataIso);

      if (!fezFicha) {
        const faltaExistente = faltas.find(f => f.data === dataIso);
        if (!faltaExistente) {
          faltas.push({
            id: 'falta_' + dataIso,
            data: dataIso,
            diaSemana: obterNomeDiaSemana(cursor),
            justificacaoAluno: null, // pendente de preenchimento obrigatório
            dataRecuperacaoAgendada: null,
            recuperada: false,
            dataRecuperacaoEfetiva: null,
            estadoPais: 'Pendente', // 'Pendente' | 'Justificada' | 'Injustificada'
            parecerPais: '',
            criadaEm: new Date().toISOString()
          });
        }
      }
    }
  }

  // Sincronizar faltas que já foram recuperadas
  historico.forEach(s => {
    if (s.faltaIdRecuperada) {
      const f = faltas.find(item => item.id === s.faltaIdRecuperada);
      if (f) {
        f.recuperada = true;
        f.dataRecuperacaoEfetiva = s.data.split('T')[0];
      }
    }
  });

  faltas.sort((a, b) => b.data.localeCompare(a.data));
  salvarFaltas(faltas);
}

// ==========================================
// 4. OBRIGATORIEDADE DE JUSTIFICAÇÃO (ALUNO)
// ==========================================
function verificarFaltasObrigatoriasAluno() {
  const auth = obterConfigAuth();
  if (!auth.sessaoAtiva || auth.sessaoAtiva.perfil !== 'aluno') return;

  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  if (historico.length === 0) return; // As faltas só iniciam depois da primeira ficha

  const faltas = obterFaltas();
  const faltasSemJustificacao = faltas.filter(f => !f.justificacaoAluno || f.justificacaoAluno.trim() === '');

  const modal = document.getElementById('modal-justificar-faltas');
  const container = document.getElementById('lista-formulario-faltas-pendentes');

  if (faltasSemJustificacao.length === 0) {
    if (modal) modal.classList.add('hidden');
    return;
  }

  // Renderizar o formulário obrigatório
  let html = '';
  const hojeIso = formatarDataIso(new Date());

  faltasSemJustificacao.forEach((f, idx) => {
    html += `
      <div class="p-4 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-bold text-rose-950 text-sm flex items-center gap-1.5">
            <i class="fa-solid fa-calendar-xmark text-rose-600"></i> Falta #${idx + 1}: ${f.diaSemana}, ${f.data}
          </span>
          <span class="text-[10px] uppercase font-bold bg-rose-200 text-rose-900 px-2 py-0.5 rounded-full">Obrigatório</span>
        </div>

        <div class="space-y-1">
          <label class="block text-xs font-bold text-slate-700">1. Porque faltaste à execução da ficha neste dia? *</label>
          <textarea id="justif_motivo_${f.id}" rows="2" placeholder="Explica com rigor o motivo que te impediu de realizar o treino de 60 minutos..." class="w-full p-2.5 bg-white border border-rose-300 rounded-xl text-xs text-slate-800 font-medium focus:ring-2 focus:ring-rose-500 focus:outline-none"></textarea>
        </div>

        <div class="space-y-1">
          <label class="block text-xs font-bold text-slate-700">2. Em que dia vais realizar a ficha a que faltaste? (Compromisso de Recuperação) *</label>
          <input type="date" id="justif_data_${f.id}" min="${hojeIso}" value="${hojeIso}" class="w-full sm:w-64 p-2.5 bg-white border border-rose-300 rounded-xl text-xs text-slate-800 font-bold focus:ring-2 focus:ring-rose-500 focus:outline-none" />
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  modal.classList.remove('hidden');
}

function submeterJustificacoesAluno() {
  const faltas = obterFaltas();
  const faltasSemJustificacao = faltas.filter(f => !f.justificacaoAluno || f.justificacaoAluno.trim() === '');

  for (const f of faltasSemJustificacao) {
    const motivoElem = document.getElementById(`justif_motivo_${f.id}`);
    const dataElem = document.getElementById(`justif_data_${f.id}`);

    if (!motivoElem || !dataElem) continue;

    const motivo = motivoElem.value.trim();
    const dataRecup = dataElem.value;

    if (!motivo || motivo.length < 5) {
      alert(`Por favor, preenche a justificação da falta de ${f.data} com clareza.`);
      motivoElem.focus();
      return;
    }

    if (!dataRecup) {
      alert(`Por favor, indica a data de recuperação para a falta de ${f.data}.`);
      dataElem.focus();
      return;
    }

    f.justificacaoAluno = motivo;
    f.dataRecuperacaoAgendada = dataRecup;
    f.dataJustificacao = new Date().toISOString();
  }

  salvarFaltas(faltas);
  document.getElementById('modal-justificar-faltas').classList.add('hidden');

  alert('Justificações e agendamentos de recuperação submetidos com sucesso!\nOs teus Encarregados de Educação irão agora homologar as tuas faltas.');

  carregarDashboard();
}

// ==========================================
// 5. HOMOLOGAÇÃO PARENTAL DE FALTAS (PAIS)
// ==========================================
function abrirModalParecerPais(faltaId) {
  const auth = obterConfigAuth();
  if (!auth.sessaoAtiva || auth.sessaoAtiva.perfil !== 'pais') {
    alert('Apenas os Encarregados de Educação têm privilégio para homologar faltas como Justificadas ou Injustificadas.');
    return;
  }

  const faltas = obterFaltas();
  const falta = faltas.find(f => f.id === faltaId);
  if (!falta) return;

  document.getElementById('modal-pais-falta-id').value = falta.id;
  document.getElementById('modal-pais-falta-data').innerHTML = `<strong>Data da Falta:</strong> ${falta.diaSemana}, ${falta.data}`;
  document.getElementById('modal-pais-falta-motivo').innerHTML = `<strong>Motivo do Aluno:</strong> "${falta.justificacaoAluno || 'Falta ainda não justificada pelo aluno'}"`;
  document.getElementById('modal-pais-falta-recuperacao').innerHTML = `<strong>Recuperação Agendada:</strong> ${falta.dataRecuperacaoAgendada || 'Não agendada'}`;
  document.getElementById('modal-pais-parecer').value = falta.parecerPais || '';

  document.getElementById('modal-parecer-pais').classList.remove('hidden');
}

function fecharModalParecerPais() {
  document.getElementById('modal-parecer-pais').classList.add('hidden');
}

function confirmarDecisaoPais(decisao) {
  const faltaId = document.getElementById('modal-pais-falta-id').value;
  const parecer = document.getElementById('modal-pais-parecer').value.trim();

  const faltas = obterFaltas();
  const falta = faltas.find(f => f.id === faltaId);
  if (!falta) return;

  falta.estadoPais = decisao; // 'Justificada' ou 'Injustificada'
  falta.parecerPais = parecer;
  falta.dataHomologacaoPais = new Date().toISOString();

  salvarFaltas(faltas);
  fecharModalParecerPais();

  alert(`Falta de ${falta.data} registada como: ${decisao.toUpperCase()}.`);
  carregarDashboard();
}

// ==========================================
// 6. ESCALA DO TIPO DE ALUNO & MÉTRICAS
// ==========================================
function calcularMetricasAssiduidade() {
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  const faltas = obterFaltas();

  const fichasFeitas = historico.length;
  const faltasTotal = faltas.length;
  const faltasJustificadas = faltas.filter(f => f.estadoPais === 'Justificada').length;
  const faltasInjustificadas = faltas.filter(f => f.estadoPais === 'Injustificada').length;
  const faltasRecuperadas = faltas.filter(f => f.recuperada === true).length;
  const faltasPendentes = faltas.filter(f => f.estadoPais === 'Pendente').length;

  const totalDiasEstudoEsperados = fichasFeitas + faltasTotal;

  // Se o aluno ainda não fez nenhuma ficha, está no início da jornada
  if (fichasFeitas === 0) {
    return {
      fichasFeitas: 0,
      faltasTotal: 0,
      faltasJustificadas: 0,
      faltasInjustificadas: 0,
      faltasRecuperadas: 0,
      faltasPendentes: 0,
      totalDiasEstudoEsperados: 0,
      taxaAssiduidade: 100,
      escala: {
        nivel: 'exemplar',
        titulo: 'Aluno Exemplar (Início)',
        icone: 'fa-trophy',
        corTexto: 'text-amber-500',
        corBg: 'bg-amber-50',
        corBorda: 'border-amber-300',
        descricao: 'Pronto para iniciar! Realiza a tua primeira ficha de 60 minutos para inaugurar o teu histórico escolar e a contagem de assiduidade.'
      }
    };
  }

  let taxaAssiduidade = 100;
  if (totalDiasEstudoEsperados > 0) {
    taxaAssiduidade = Math.min(100, Math.round(((fichasFeitas + faltasRecuperadas) / totalDiasEstudoEsperados) * 100));
  }

  let escala = {
    nivel: 'exemplar',
    titulo: 'Aluno Exemplar',
    icone: 'fa-trophy',
    corTexto: 'text-amber-500',
    corBg: 'bg-amber-50',
    corBorda: 'border-amber-300',
    descricao: 'Dedicação Máxima (100% de assiduidade): Cumpre rigorosamente todas as fichas nos dias oficiais de estudo sem faltas. Pontualidade, compromisso e autonomia irrepreensíveis!'
  };

  if (faltasInjustificadas >= 2 || taxaAssiduidade < 60) {
    escala = {
      nivel: 'baldas',
      titulo: 'Aluno Baldas',
      icone: 'fa-triangle-exclamation',
      corTexto: 'text-rose-600',
      corBg: 'bg-rose-50',
      corBorda: 'border-rose-400',
      descricao: 'Atenção Crítica: O aluno tem faltas injustificadas pelos encarregados de educação ou assiduidade abaixo de 60%. Demonstra desleixo ("balda-se aos exercícios"). Requer reposição imediata das fichas!'
    };
  } else if (taxaAssiduidade < 85 || faltasInjustificadas === 1) {
    escala = {
      nivel: 'regular',
      titulo: 'Aluno Regular',
      icone: 'fa-scale-balanced',
      corTexto: 'text-orange-500',
      corBg: 'bg-orange-50',
      corBorda: 'border-orange-300',
      descricao: 'Desempenho Intermédio: O aluno realiza alguns treinos, mas a assiduidade é oscilante e acumula fichas em atraso. Necessita de maior consistência nas segundas, quartas, sextas e fins de semana.'
    };
  } else if (faltasTotal > 0 && faltasInjustificadas === 0) {
    escala = {
      nivel: 'responsavel',
      titulo: 'Aluno Responsável',
      icone: 'fa-medal',
      corTexto: 'text-indigo-600',
      corBg: 'bg-indigo-50',
      corBorda: 'border-indigo-300',
      descricao: 'Bom Compromisso: O aluno cumpre com regularidade a sua rotina e, perante imprevistos, apresenta justificações válidas e assume o compromisso de recuperação das fichas em falta.'
    };
  }

  return {
    fichasFeitas,
    faltasTotal,
    faltasJustificadas,
    faltasInjustificadas,
    faltasRecuperadas,
    faltasPendentes,
    totalDiasEstudoEsperados,
    taxaAssiduidade,
    escala
  };
}

function renderizarEscalaTipoAluno() {
  const container = document.getElementById('card-escala-tipo-aluno');
  if (!container) return;

  const m = calcularMetricasAssiduidade();
  const e = m.escala;

  container.innerHTML = `
    <div class="flex flex-wrap justify-between items-center gap-3 border-b border-slate-100 pb-3">
      <div>
        <h4 class="font-bold text-slate-800 text-base flex items-center gap-2">
          <i class="fa-solid fa-chart-pie text-indigo-600"></i> Escala e Perfil do Aluno (Compromisso &amp; Assiduidade)
        </h4>
        <p class="text-xs text-slate-500">Avaliação do cumprimento dos 5 dias oficiais de estudo (Seg, Qua, Sex, Sáb, Dom) e regularização de faltas.</p>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs font-bold text-slate-500">Taxa de Cumprimento:</span>
        <span class="text-base font-black text-indigo-900 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-200">${m.taxaAssiduidade}%</span>
      </div>
    </div>

    <!-- Destaque do Perfil Atual -->
    <div class="p-4 rounded-2xl border-2 ${e.corBorda} ${e.corBg} flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl ${e.corTexto} border border-slate-200/80">
          <i class="fa-solid ${e.icone}"></i>
        </div>
        <div>
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Classificação Atual do Aluno:</div>
          <div class="text-xl font-black ${e.corTexto}">${e.titulo}</div>
          <p class="text-xs text-slate-700 mt-0.5 max-w-xl">${e.descricao}</p>
        </div>
      </div>
    </div>

    <!-- Barra de Progresso Visual de Assiduidade -->
    <div class="space-y-1.5">
      <div class="flex justify-between text-xs font-bold text-slate-600">
        <span>Assiduidade Global dos Dias de Estudo</span>
        <span>${m.fichasFeitas + m.faltasRecuperadas} de ${Math.max(1, m.totalDiasEstudoEsperados)} sessões cumpridas</span>
      </div>
      <div class="w-full bg-slate-200 rounded-full h-3.5 overflow-hidden p-0.5">
        <div class="bg-gradient-to-r from-indigo-500 to-emerald-500 h-2.5 rounded-full transition-all duration-500" style="width: ${m.taxaAssiduidade}%"></div>
      </div>
    </div>

    <!-- 4 Indicadores Rápidos -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
      <div class="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
        <div class="text-slate-500 font-bold">Fichas Realizadas</div>
        <div class="text-lg font-black text-slate-800">${m.fichasFeitas}</div>
      </div>
      <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
        <div class="text-emerald-800 font-bold">Faltas Recuperadas</div>
        <div class="text-lg font-black text-emerald-700">${m.faltasRecuperadas}</div>
      </div>
      <div class="bg-blue-50 border border-blue-200 p-2.5 rounded-xl">
        <div class="text-blue-800 font-bold">Faltas Justificadas</div>
        <div class="text-lg font-black text-blue-700">${m.faltasJustificadas}</div>
      </div>
      <div class="bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
        <div class="text-rose-800 font-bold">Faltas Injustificadas (Baldas)</div>
        <div class="text-lg font-black text-rose-700">${m.faltasInjustificadas}</div>
      </div>
    </div>
  `;
}

// ==========================================
// 7. REGISTO DE FALTAS & RECUPERAÇÃO
// ==========================================
function renderizarRegistoFaltas() {
  const container = document.getElementById('card-registo-faltas');
  if (!container) return;

  const faltas = obterFaltas();
  const auth = obterConfigAuth();
  const isPais = auth.sessaoAtiva && auth.sessaoAtiva.perfil === 'pais';

  let tabelaHtml = '';

  if (faltas.length === 0) {
    tabelaHtml = `
      <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
        <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
        <span><strong>Excelente!</strong> Não existem faltas registadas. O aluno está a cumprir o calendário de estudo sem interrupções.</span>
      </div>
    `;
  } else {
    tabelaHtml = `
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
              <th class="p-2.5">Data da Falta</th>
              <th class="p-2.5">Motivo (Justificação do Aluno)</th>
              <th class="p-2.5">Recuperação Agendada</th>
              <th class="p-2.5">Estado da Recuperação</th>
              <th class="p-2.5">Decisão dos Pais</th>
              <th class="p-2.5 text-right">Ação</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 font-medium">
    `;

    faltas.forEach(f => {
      let badgeRecuperacao = f.recuperada
        ? `<span class="bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 w-fit"><i class="fa-solid fa-check"></i> Recuperada</span>`
        : `<span class="bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 w-fit"><i class="fa-solid fa-clock"></i> Pendente</span>`;

      let badgePais = '';
      if (f.estadoPais === 'Justificada') {
        badgePais = `<span class="bg-blue-100 text-blue-900 border border-blue-300 px-2 py-0.5 rounded-full font-bold">🟢 Justificada</span>`;
      } else if (f.estadoPais === 'Injustificada') {
        badgePais = `<span class="bg-rose-100 text-rose-900 border border-rose-300 px-2 py-0.5 rounded-full font-black">🔴 Injustificada (Balda)</span>`;
      } else {
        badgePais = `<span class="bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-bold">🟡 Aguarda Parecer</span>`;
      }

      let acaoHtml = '';
      if (isPais) {
        acaoHtml = `
          <button onclick="abrirModalParecerPais('${f.id}')" class="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition flex items-center gap-1 text-[11px] ml-auto">
            <i class="fa-solid fa-gavel"></i> Homologar
          </button>
        `;
      } else {
        if (!f.recuperada) {
          acaoHtml = `
            <button onclick="iniciarRecuperacaoFalta('${f.id}')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition flex items-center gap-1 text-[11px] ml-auto">
              <i class="fa-solid fa-play"></i> Recuperar Agora
            </button>
          `;
        } else {
          acaoHtml = `<span class="text-slate-400 text-[11px]">Concluída</span>`;
        }
      }

      tabelaHtml += `
        <tr class="hover:bg-slate-50 transition">
          <td class="p-2.5 whitespace-nowrap">
            <div class="font-bold text-slate-800">${f.diaSemana}</div>
            <div class="text-[11px] text-slate-500">${f.data}</div>
          </td>
          <td class="p-2.5 max-w-xs">
            <p class="text-slate-700 italic">${f.justificacaoAluno ? `"${f.justificacaoAluno}"` : '<span class="text-rose-500 font-bold">Por justificar</span>'}</p>
            ${f.parecerPais ? `<p class="text-[10px] text-indigo-700 font-semibold mt-0.5">Nota dos Pais: "${f.parecerPais}"</p>` : ''}
          </td>
          <td class="p-2.5 whitespace-nowrap font-bold text-slate-800">
            ${f.dataRecuperacaoAgendada || '--'}
          </td>
          <td class="p-2.5 whitespace-nowrap">
            ${badgeRecuperacao}
          </td>
          <td class="p-2.5 whitespace-nowrap">
            ${badgePais}
          </td>
          <td class="p-2.5 text-right whitespace-nowrap">
            ${acaoHtml}
          </td>
        </tr>
      `;
    });

    tabelaHtml += `
          </tbody>
        </table>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="flex flex-wrap justify-between items-center gap-3 border-b border-slate-100 pb-3">
      <div>
        <h4 class="font-bold text-slate-800 text-base flex items-center gap-2">
          <i class="fa-solid fa-clipboard-user text-indigo-600"></i> Registo e Controlo de Assiduidade e Recuperação de Faltas
        </h4>
        <p class="text-xs text-slate-500">Treinos obrigatórios: <strong>Segundas, Quartas, Sextas, Sábado e Domingo</strong>. As faltas devem ser recuperadas pelo aluno e homologadas pelos pais.</p>
      </div>
      ${isPais ? '<span class="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-xl"><i class="fa-solid fa-user-shield mr-1"></i>Privilégio de Encarregado Ativo</span>' : ''}
    </div>
    ${tabelaHtml}
  `;
}

function iniciarRecuperacaoFalta(faltaId) {
  const faltas = obterFaltas();
  const falta = faltas.find(f => f.id === faltaId);
  if (!falta) return;

  faltaEmRecuperacaoId = falta.id;

  const bannerRecup = document.getElementById('banner-modo-recuperacao');
  const textoRecup = document.getElementById('texto-banner-recuperacao');
  if (bannerRecup && textoRecup) {
    textoRecup.innerHTML = `<strong>A recuperar falta de ${falta.diaSemana}, ${falta.data}:</strong> Resolve esta ficha de 8 exercícios (cotação: 20,0 valores). Ao submeteres, a tua falta ficará regularizada!`;
    bannerRecup.classList.remove('hidden');
  }

  mudarAba('treino');
  iniciarSessao();
}

function cancelarModoRecuperacao() {
  faltaEmRecuperacaoId = null;
  const bannerRecup = document.getElementById('banner-modo-recuperacao');
  if (bannerRecup) bannerRecup.classList.add('hidden');
}

// ==========================================
// 8. CALENDÁRIO MENSAL INTEGRADO
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
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  const faltas = obterFaltas();

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

  // Mapear faltas por dia
  const mapaFaltasPorDia = {};
  faltas.forEach(f => {
    mapaFaltasPorDia[f.data] = f;
  });

  // Dias da semana
  const diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  // Primeiro dia do mês (0 = dom, 1 = seg...)
  const primeiroDiaDoMes = new Date(ano, mes, 1);
  let diaSemanaInicial = primeiroDiaDoMes.getDay();
  diaSemanaInicial = diaSemanaInicial === 0 ? 6 : diaSemanaInicial - 1; // Segunda = 0

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
      <div class="min-h-[85px] p-1.5 rounded-xl border border-slate-100 bg-slate-50/50 text-slate-300 text-xs font-semibold">
        <span>${numDia}</span>
      </div>
    `;
  }

  // Dias do mês atual
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const hojeStr = formatarDataIso(hoje);

  for (let dia = 1; dia <= totalDiasMes; dia++) {
    const dataObj = new Date(ano, mes, dia);
    const dataIso = formatarDataIso(dataObj);

    const isHoje = dataIso === hojeStr;
    const isPassado = dataObj < hoje;
    const eDiaEstudo = isDiaDeEstudo(dataObj);

    const sessoesNesteDia = mapaHistoricoPorDia[dataIso] || [];
    const faltaNesteDia = mapaFaltasPorDia[dataIso];

    let conteudoIcone = '';
    let bordaClasse = isHoje ? 'border-2 border-indigo-500 bg-indigo-50/30' : 'border border-slate-200 bg-white hover:border-indigo-300';

    if (sessoesNesteDia.length > 0) {
      const melhorNota = Math.max(...sessoesNesteDia.map(s => s.nota));

      if (melhorNota >= 18) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-trophy text-amber-500 text-lg drop-shadow-sm"></i>
            <span class="text-[9px] font-black bg-amber-100 text-amber-900 border border-amber-300 px-1 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Ouro)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-amber-400 bg-amber-50/30';
      } else if (melhorNota >= 14) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-medal text-slate-400 text-lg drop-shadow-sm"></i>
            <span class="text-[9px] font-black bg-slate-200 text-slate-800 border border-slate-300 px-1 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Prata)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-slate-300 bg-slate-50';
      } else if (melhorNota >= 10) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-award text-amber-700 text-lg drop-shadow-sm"></i>
            <span class="text-[9px] font-black bg-amber-100/70 text-amber-950 border border-amber-400 px-1 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Bronze)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-amber-500/50 bg-amber-50/20';
      } else if (melhorNota >= 6) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-face-frown text-orange-500 text-lg"></i>
            <span class="text-[9px] font-black bg-orange-100 text-orange-900 border border-orange-300 px-1 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Mau)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-orange-400 bg-orange-50/30';
      } else {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-face-sad-tear text-rose-600 text-lg"></i>
            <span class="text-[9px] font-black bg-rose-100 text-rose-900 border border-rose-300 px-1 py-0.2 rounded-full mt-0.5">
              ${melhorNota} val. (Muito Mau)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-rose-400 bg-rose-50/30';
      }
    } else if (isPassado && eDiaEstudo) {
      if (faltaNesteDia && faltaNesteDia.recuperada) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-clock-rotate-left text-emerald-600 text-base"></i>
            <span class="text-[8px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-1 py-0.2 rounded mt-0.5">
              Recuperada
            </span>
          </div>
        `;
        bordaClasse = 'border border-emerald-300 bg-emerald-50/30';
      } else if (faltaNesteDia && faltaNesteDia.estadoPais === 'Injustificada') {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-circle-xmark text-rose-600 text-base"></i>
            <span class="text-[8px] font-black bg-rose-100 text-rose-900 border border-rose-300 px-1 py-0.2 rounded mt-0.5">
              Balda (Falta)
            </span>
          </div>
        `;
        bordaClasse = 'border-2 border-rose-400 bg-rose-50/40';
      } else if (faltaNesteDia && faltaNesteDia.estadoPais === 'Justificada') {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-file-circle-check text-blue-600 text-base"></i>
            <span class="text-[8px] font-bold bg-blue-100 text-blue-900 border border-blue-300 px-1 py-0.2 rounded mt-0.5">
              Justificada
            </span>
          </div>
        `;
        bordaClasse = 'border border-blue-300 bg-blue-50/30';
      } else if (faltaNesteDia) {
        conteudoIcone = `
          <div class="flex flex-col items-center mt-1">
            <i class="fa-solid fa-triangle-exclamation text-amber-500 text-base"></i>
            <span class="text-[8px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-1 py-0.2 rounded mt-0.5">
              Falta Pendente
            </span>
          </div>
        `;
        bordaClasse = 'border border-amber-300 bg-amber-50/30';
      }
    } else if (isHoje && eDiaEstudo) {
      conteudoIcone = `
        <div class="flex flex-col items-center mt-1">
          <span class="text-[9px] font-bold text-indigo-700 bg-indigo-100/80 px-1.5 py-0.5 rounded-full">
            <i class="fa-solid fa-hourglass-half mr-0.5"></i> Pendente Hoje
          </span>
        </div>
      `;
    }

    const badgeEstudo = eDiaEstudo
      ? `<span class="text-[8px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-1 rounded">Estudo</span>`
      : `<span class="text-[8px] font-medium text-slate-400 bg-slate-100 px-1 rounded">Livre</span>`;

    html += `
      <div onclick="mostrarDetalheDia('${dataIso}')" class="min-h-[85px] p-2 rounded-xl transition cursor-pointer flex flex-col justify-between ${bordaClasse}">
        <div class="flex justify-between items-center text-xs font-bold">
          <span class="${isHoje ? 'bg-indigo-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px]' : 'text-slate-700'}">${dia}</span>
          ${badgeEstudo}
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

function mostrarDetalheDia(dataIso) {
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  const faltas = obterFaltas();

  const sessoesNesteDia = historico.filter(s => s.data.startsWith(dataIso));
  const faltaNesteDia = faltas.find(f => f.data === dataIso);

  const dataObj = new Date(dataIso + 'T00:00:00');
  const nomeDia = obterNomeDiaSemana(dataObj);
  const eDiaEstudo = isDiaDeEstudo(dataObj);

  const div = document.getElementById('detalhe-dia-calendario');

  let sessoesHtml = '';
  if (sessoesNesteDia.length > 0) {
    sessoesHtml = sessoesNesteDia.map((s, idx) => `
      <div class="p-2.5 bg-white border border-indigo-200 rounded-lg flex justify-between items-center text-xs">
        <div>
          <span class="font-bold text-slate-800">Sessão #${idx + 1} (${s.modalidade || 'diário'}):</span>
          <span class="ml-1 text-slate-600">${s.certas}/${s.total} acertos &bull; 60 min</span>
        </div>
        <span class="font-black px-2 py-0.5 rounded ${s.nota >= 14 ? 'bg-emerald-100 text-emerald-800' : (s.nota >= 10 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800')}">
          ${s.nota} / 20 valores
        </span>
      </div>
    `).join('');
  } else {
    sessoesHtml = `<p class="italic text-slate-500">Nenhuma sessão de treino concluída neste dia.</p>`;
  }

  let infoFaltaHtml = '';
  if (faltaNesteDia) {
    infoFaltaHtml = `
      <div class="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs space-y-1">
        <div class="font-bold text-rose-900 flex items-center gap-1.5">
          <i class="fa-solid fa-triangle-exclamation text-rose-600"></i> Falta Registada
        </div>
        <div><strong>Justificação do Aluno:</strong> ${faltaNesteDia.justificacaoAluno || '<span class="text-rose-500">Pendente de justificação</span>'}</div>
        <div><strong>Recuperação Agendada:</strong> ${faltaNesteDia.dataRecuperacaoAgendada || 'Não agendada'}</div>
        <div><strong>Estado da Recuperação:</strong> ${faltaNesteDia.recuperada ? '✅ Recuperada' : '⏳ Pendente'}</div>
        <div><strong>Decisão dos Pais:</strong> <span class="font-bold">${faltaNesteDia.estadoPais}</span> ${faltaNesteDia.parecerPais ? `("${faltaNesteDia.parecerPais}")` : ''}</div>
      </div>
    `;
  }

  div.innerHTML = `
    <div class="flex justify-between items-center border-b border-indigo-200/80 pb-2">
      <div class="font-bold text-indigo-950 text-sm">
        <i class="fa-solid fa-calendar-day text-indigo-600 mr-1.5"></i>
        ${nomeDia}, ${dataIso} &bull; ${eDiaEstudo ? '<span class="text-indigo-600 font-bold">Dia Oficial de Estudo</span>' : '<span class="text-slate-500">Dia de Descanso</span>'}
      </div>
      <button onclick="document.getElementById('detalhe-dia-calendario').classList.add('hidden')" class="text-slate-400 hover:text-slate-700 text-xs font-bold">
        <i class="fa-solid fa-xmark"></i> Fechar
      </button>
    </div>
    <div class="space-y-2 mt-2">
      ${infoFaltaHtml}
      <div class="space-y-1.5">
        <div class="font-bold text-slate-700 text-xs">Fichas Realizadas:</div>
        ${sessoesHtml}
      </div>
    </div>
  `;

  div.classList.remove('hidden');
}

// ==========================================
// 9. NAVEGAÇÃO & CONTROLO DAS ABAS
// ==========================================
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

function selecionarModalidade(modo) {
  modalidadeSessao = modo;
  const btnDiario = document.getElementById('btn-modo-diario');
  const btnSabado = document.getElementById('btn-modo-sabado');
  const btnDomingo = document.getElementById('btn-modo-domingo');
  const banner = document.getElementById('texto-banner-modalidade');

  [btnDiario, btnSabado, btnDomingo].forEach(b => {
    b.className = 'px-4 py-2 rounded-xl border transition flex items-center gap-2 bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200';
  });

  if (modo === 'diario') {
    btnDiario.className = 'px-4 py-2 rounded-xl border transition flex items-center gap-2 bg-indigo-600 text-white border-indigo-700 shadow-sm';
    banner.innerHTML = '<strong>Modo Diário Ativo:</strong> 5 exercícios inéditos da matéria em estudo + 3 exercícios de matérias anteriores rodados equitativamente.';
  } else if (modo === 'sabado') {
    btnSabado.className = 'px-4 py-2 rounded-xl border transition flex items-center gap-2 bg-amber-600 text-white border-amber-700 shadow-sm';
    banner.innerHTML = '<strong>Modo Sábado Ativo (Consolidação Semanal):</strong> Resumo das matérias estudadas durante a semana, priorizando questões onde o aluno teve dúvidas ou erros.';
  } else if (modo === 'domingo') {
    btnDomingo.className = 'px-4 py-2 rounded-xl border transition flex items-center gap-2 bg-purple-600 text-white border-purple-700 shadow-sm';
    banner.innerHTML = '<strong>Modo Domingo Ativo (Revisão & Retificação):</strong> Incide prioritariamente sobre os exercícios errados durante a semana para solidificar o conhecimento antes da nova semana escolar.';
  }

  const topicoSelect = document.getElementById('seletor-topico');
  if (topicoSelect && topicoSelect.value) {
    const topico = TOPICOS_MANUAL.find(t => t.id === topicoSelect.value);
    if (topico) atualizarResumoEstruturaSessao(topico);
  }
}

function atualizarListaTopicos() {
  const cadernoSelecionado = parseInt(document.getElementById('seletor-caderno').value, 10);
  const seletorTopico = document.getElementById('seletor-topico');

  const topicosFiltrados = TOPICOS_MANUAL.filter(t => t.caderno === cadernoSelecionado);

  seletorTopico.innerHTML = '';
  topicosFiltrados.forEach(topico => {
    const opt = document.createElement('option');
    opt.value = topico.id;
    opt.textContent = `${topico.temaNome} - ${topico.subtema} (Págs. ${topico.paginaInicio}–${topico.paginaFim})`;
    seletorTopico.appendChild(opt);
  });

  if (topicosFiltrados.length > 0) {
    seletorTopico.value = topicosFiltrados[0].id;
    atualizarPaginaPorTopico();
  }
}

function atualizarPaginaPorTopico() {
  const topicoId = document.getElementById('seletor-topico').value;
  const topico = TOPICOS_MANUAL.find(t => t.id === topicoId);
  if (!topico) return;

  const inputPagina = document.getElementById('input-pagina-estudada');
  inputPagina.min = topico.paginaInicio;
  inputPagina.max = topico.paginaFim;
  inputPagina.value = topico.paginaInicio;

  document.getElementById('label-intervalo-paginas').textContent = `Págs. ${topico.paginaInicio}–${topico.paginaFim}`;
  atualizarResumoEstruturaSessao(topico);
}

function sincronizarPorNumeroPagina(paginaStr) {
  const pag = parseInt(paginaStr, 10);
  if (isNaN(pag)) return;

  const topicoCorrespondente = TOPICOS_MANUAL.find(t => pag >= t.paginaInicio && pag <= t.paginaFim);
  if (topicoCorrespondente) {
    document.getElementById('seletor-caderno').value = topicoCorrespondente.caderno;
    document.getElementById('seletor-topico').value = topicoCorrespondente.id;
    document.getElementById('label-intervalo-paginas').textContent = `Págs. ${topicoCorrespondente.paginaInicio}–${topicoCorrespondente.paginaFim}`;
    atualizarResumoEstruturaSessao(topicoCorrespondente);
  }
}

function atualizarResumoEstruturaSessao(topicoAtual) {
  const container = document.getElementById('resumo-estrutura-sessao');
  const indexTopico = TOPICOS_MANUAL.findIndex(t => t.id === topicoAtual.id);
  const topicosAnteriores = TOPICOS_MANUAL.slice(0, indexTopico);

  let descricaoComposicao = '';

  if (modalidadeSessao === 'sabado' || modalidadeSessao === 'domingo') {
    const errosSemana = obterErrosSemanaAtual();
    descricaoComposicao = `
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-repeat text-amber-600"></i>
        <span><strong>Ficha de Fim de Semana:</strong> 8 exercícios de consolidação. Detetados <strong>${errosSemana.length}</strong> exercícios errados nesta semana (priorizados para retificação).</span>
      </div>
    `;
  } else if (topicosAnteriores.length === 0) {
    descricaoComposicao = `
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-book-open text-indigo-600"></i>
        <span><strong>Tópico Inicial:</strong> 8 exercícios da matéria selecionada (${topicoAtual.subtema}).</span>
      </div>
    `;
  } else {
    descricaoComposicao = `
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-layer-group text-indigo-600"></i>
        <span><strong>Estrutura Pedagógica:</strong> 5 exercícios inéditos de <em>${topicoAtual.subtema}</em> + 3 de matérias anteriores rodados equitativamente.</span>
      </div>
    `;
  }

  container.innerHTML = `
    ${descricaoComposicao}
    <div class="font-bold text-indigo-700 bg-white/90 border border-indigo-200 px-3 py-1 rounded-lg">
      Cotação: 8 &times; 2,5 = 20,0 valores
    </div>
  `;
}

function obterErrosSemanaAtual() {
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  const agora = new Date();
  const diaSemanaHoje = agora.getDay();
  const diasDesdeSegunda = diaSemanaHoje === 0 ? 6 : diaSemanaHoje - 1;

  const inicioSemana = new Date(agora);
  inicioSemana.setDate(agora.getDate() - diasDesdeSegunda);
  inicioSemana.setHours(0, 0, 0, 0);

  const erros = [];
  historico.forEach(sessao => {
    const dataSessao = new Date(sessao.data);
    if (dataSessao >= inicioSemana) {
      if (sessao.detalhes && Array.isArray(sessao.detalhes)) {
        sessao.detalhes.forEach(d => {
          if (!d.acertou && d.exercicio) {
            erros.push(d.exercicio);
          }
        });
      }
    }
  });

  return erros;
}

function obterExerciciosFeitosSemanaAtual() {
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  const agora = new Date();
  const diaSemanaHoje = agora.getDay();
  const diasDesdeSegunda = diaSemanaHoje === 0 ? 6 : diaSemanaHoje - 1;

  const inicioSemana = new Date(agora);
  inicioSemana.setDate(agora.getDate() - diasDesdeSegunda);
  inicioSemana.setHours(0, 0, 0, 0);

  const feitos = [];
  historico.forEach(sessao => {
    const dataSessao = new Date(sessao.data);
    if (dataSessao >= inicioSemana) {
      if (sessao.detalhes && Array.isArray(sessao.detalhes)) {
        sessao.detalhes.forEach(d => {
          if (d.exercicio) feitos.push(d.exercicio);
        });
      }
    }
  });

  return feitos;
}

// ==========================================
// 10. GERAÇÃO & EXECUÇÃO DO TREINO DE 1 HORA
// ==========================================
function iniciarSessao() {
  const topicoId = document.getElementById('seletor-topico').value;
  const topicoAtual = TOPICOS_MANUAL.find(t => t.id === topicoId);
  if (!topicoAtual) return;

  // Gerar exercícios utilizando o mapeamento central
  if (modalidadeSessao === 'sabado' || modalidadeSessao === 'domingo') {
    exerciciosAtuais = gerarFichaFimDeSemana(modalidadeSessao, topicoAtual);
  } else {
    exerciciosAtuais = gerarFichaDiariaRegular(topicoAtual);
  }

  respostasAluno = {};
  sessaoEmAndamento = true;

  // Atualizar cabeçalho de impressão
  const printSub = document.getElementById('print-subtitulo-materia');
  if (printSub) {
    printSub.textContent = `Matéria Avaliada: ${topicoAtual.temaNome} - ${topicoAtual.subtema} (Modalidade: ${modalidadeSessao.toUpperCase()})`;
  }

  // Cronómetro
  segundosRestantes = DURACAO_SESSAO_SEGUNDOS;
  atualizarCronometro();
  if (intervaloCronometro) clearInterval(intervaloCronometro);
  intervaloCronometro = setInterval(() => {
    segundosRestantes--;
    atualizarCronometro();
    if (segundosRestantes <= 0) {
      clearInterval(intervaloCronometro);
      alert('O tempo de 60 minutos terminou! A tua ficha será submetida para avaliação agora.');
      submeterTreino();
    }
  }, 1000);

  // Exibir componentes
  document.getElementById('status-sessao').classList.remove('hidden');
  document.getElementById('painel-submissao').classList.remove('hidden');
  document.getElementById('btn-imprimir-enunciado').classList.remove('hidden');

  renderizarListaExercicios();
  renderizarMatematica();

  // Scroll suave até aos exercícios
  document.getElementById('status-sessao').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function gerarFichaDiariaRegular(topicoAtual) {
  const indexTopico = TOPICOS_MANUAL.findIndex(t => t.id === topicoAtual.id);
  const topicosAnteriores = TOPICOS_MANUAL.slice(0, indexTopico);

  // Obter o banco do tópico atual (36 exercícios disponíveis)
  const bancoAtual = obterExerciciosPorTopico(topicoAtual.id);
  const exerciciosSelecionados = [];

  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  const idsJaFeitos = new Set();
  historico.forEach(s => {
    if (s.detalhes) s.detalhes.forEach(d => idsJaFeitos.add(d.id));
  });

  const bancoNaoRepetido = bancoAtual.filter(ex => !idsJaFeitos.has(ex.id));
  const poolAtual = bancoNaoRepetido.length >= 5 ? bancoNaoRepetido : bancoAtual;

  // Se for o primeiro tópico
  if (topicosAnteriores.length === 0) {
    const shuffle = [...poolAtual].sort(() => 0.5 - Math.random());
    return shuffle.slice(0, NUMERO_EXERCICIOS);
  }

  // 5 exercícios inéditos da matéria atual
  const shuffleAtual = [...poolAtual].sort(() => 0.5 - Math.random());
  exerciciosSelecionados.push(...shuffleAtual.slice(0, 5));

  // 3 exercícios de matérias anteriores distribuídos equitativamente
  const contagemPorTopico = {};
  topicosAnteriores.forEach(t => { contagemPorTopico[t.id] = 0; });
  historico.forEach(s => {
    if (s.detalhes) {
      s.detalhes.forEach(d => {
        if (contagemPorTopico[d.topicoId] !== undefined) {
          contagemPorTopico[d.topicoId]++;
        }
      });
    }
  });

  const topicosOrdenadosPorMenosUsados = [...topicosAnteriores].sort((a, b) => {
    return contagemPorTopico[a.id] - contagemPorTopico[b.id];
  });

  const topicosParaRevisao = topicosOrdenadosPorMenosUsados.slice(0, 3);
  topicosParaRevisao.forEach(tRev => {
    const bancoRev = obterExerciciosPorTopico(tRev.id);
    if (bancoRev.length > 0) {
      const exRev = bancoRev[Math.floor(Math.random() * bancoRev.length)];
      exerciciosSelecionados.push({
        ...exRev,
        etiquetaRevisao: `Revisão: ${tRev.subtema} (Pág. ${tRev.paginaInicio})`
      });
    }
  });

  // Preencher até 8 se necessário
  while (exerciciosSelecionados.length < NUMERO_EXERCICIOS && poolAtual.length > 0) {
    const extra = poolAtual[Math.floor(Math.random() * poolAtual.length)];
    if (!exerciciosSelecionados.some(e => e.id === extra.id)) {
      exerciciosSelecionados.push(extra);
    } else {
      break;
    }
  }

  return exerciciosSelecionados;
}

function gerarFichaFimDeSemana(modo, topicoAtual) {
  const listaFimDeSemana = [];
  const errosSemana = obterErrosSemanaAtual();
  const feitosSemana = obterExerciciosFeitosSemanaAtual();

  // 1. Prioridade absoluta: exercícios errados durante a semana
  const errosUnicos = [];
  const idsVistos = new Set();
  errosSemana.forEach(ex => {
    if (!idsVistos.has(ex.id)) {
      idsVistos.add(ex.id);
      errosUnicos.push({
        ...ex,
        etiquetaRevisao: `⚠️ Retificação de Erro da Semana (${ex.subtema || 'Consolidação'})`
      });
    }
  });

  listaFimDeSemana.push(...errosUnicos.slice(0, 5));

  // 2. Faltando para 8: exercícios feitos durante a semana para fixação
  if (listaFimDeSemana.length < NUMERO_EXERCICIOS) {
    const restantesSemana = feitosSemana.filter(ex => !idsVistos.has(ex.id));
    const shuffleRestantes = [...restantesSemana].sort(() => 0.5 - Math.random());
    const qtdNecessaria = NUMERO_EXERCICIOS - listaFimDeSemana.length;

    shuffleRestantes.slice(0, qtdNecessaria).forEach(ex => {
      idsVistos.add(ex.id);
      listaFimDeSemana.push({
        ...ex,
        etiquetaRevisao: `Consolidação Semanal: ${ex.subtema || 'Revisão'}`
      });
    });
  }

  // 3. Se ainda faltar, preenche com exercícios da matéria em estudo
  if (listaFimDeSemana.length < NUMERO_EXERCICIOS) {
    const bancoAtual = obterExerciciosPorTopico(topicoAtual.id);
    const pool = bancoAtual.filter(ex => !idsVistos.has(ex.id));
    const qtd = NUMERO_EXERCICIOS - listaFimDeSemana.length;
    pool.slice(0, qtd).forEach(ex => {
      listaFimDeSemana.push(ex);
    });
  }

  return listaFimDeSemana;
}

function atualizarCronometro() {
  const m = Math.floor(segundosRestantes / 60);
  const s = segundosRestantes % 60;
  const texto = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  const elem = document.getElementById('cronometro-sessao');
  if (elem) elem.textContent = texto;
}

// Renderização dos Exercícios com Espaço Amplo para Resolução e Rascunho
function renderizarListaExercicios() {
  const container = document.getElementById('container-exercicios');
  container.innerHTML = '';

  exerciciosAtuais.forEach((ex, idx) => {
    const card = document.createElement('div');
    card.className = 'bg-white p-6 rounded-2xl shadow-sm border border-slate-200 a4-page-break space-y-4';

    const etiqueta = ex.etiquetaRevisao
      ? `<span class="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full">${ex.etiquetaRevisao}</span>`
      : `<span class="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-full">${ex.subtema} (Pág. ${ex.paginaInicio || ex.pagina || '10'})</span>`;

    card.innerHTML = `
      <div class="flex justify-between items-center border-b border-slate-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 bg-indigo-900 text-white rounded-lg flex items-center justify-center font-bold text-xs">${idx + 1}</span>
          ${etiqueta}
        </div>
        <div class="text-xs font-bold text-slate-500">
          Cotação: <span class="text-indigo-600 font-black">2,5 valores</span>
        </div>
      </div>

      <div class="text-sm font-medium text-slate-800 leading-relaxed math-font">
        ${ex.enunciado}
      </div>

      <!-- Campo de Resposta no Ecrã -->
      <div class="campo-input-ecra pt-1">
        ${renderizarOpcoesOuInput(ex)}
      </div>

      <!-- ESPAÇO PARA O ALUNO RESOLVER O EXERCÍCIO NO ECRÃ (Rascunho & Deduções) -->
      <div class="mt-4 pt-3 border-t border-slate-100 space-y-1.5 no-print">
        <div class="flex items-center justify-between text-xs text-slate-600 font-bold">
          <span class="flex items-center gap-1.5">
            <i class="fa-solid fa-pencil text-indigo-600"></i> Espaço de Resolução &amp; Rascunho do Aluno:
          </span>
          <span class="text-[10px] text-slate-400 font-normal">Podes efetuar aqui os teus cálculos intermédios</span>
        </div>
        <textarea id="rascunho_${ex.id}" rows="4" placeholder="✍️ Utiliza este espaço para cálculos, passos intermédios, equações e deduções..." class="w-full p-3 bg-amber-50/20 border border-slate-300 rounded-xl text-xs font-mono text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition resize-y"></textarea>
      </div>

      <!-- Área de Resolução e Cálculos na Impressão A4 (Folha Milimétrica Oficial) -->
      <div class="area-resolucao-impressao grid-papel-resolucao p-3 rounded mt-3">
        <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
          Espaço reservado para cálculos, deduções e justificação formal (Folha Milimétrica Oficial)
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderizarOpcoesOuInput(ex) {
  if (ex.tipo === 'multipla_escolha') {
    return `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        ${ex.opcoes.map(op => `
          <label class="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-300 transition cursor-pointer">
            <input type="radio" name="resposta_${ex.id}" value="${op.chave}" onchange="registarResposta('${ex.id}', '${op.chave}')" class="text-indigo-600 focus:ring-indigo-500" />
            <span class="font-bold text-slate-800">(${op.chave})</span>
            <span class="math-font">${op.texto}</span>
          </label>
        `).join('')}
      </div>
    `;
  } else if (ex.tipo === 'vf') {
    return `
      <div class="flex gap-4 text-xs font-bold">
        <label class="flex items-center gap-2 p-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50 cursor-pointer">
          <input type="radio" name="resposta_${ex.id}" value="V" onchange="registarResposta('${ex.id}', 'V')" /> Verdadeira (V)
        </label>
        <label class="flex items-center gap-2 p-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50 cursor-pointer">
          <input type="radio" name="resposta_${ex.id}" value="F" onchange="registarResposta('${ex.id}', 'F')" /> Falsa (F)
        </label>
      </div>
    `;
  } else {
    return `
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-xs font-bold text-slate-600">Resposta Final:</span>
        <input type="text" placeholder="Ex: 5, -2, 3/4 ou [1, 5]" oninput="registarResposta('${ex.id}', this.value)" class="p-2.5 px-3 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none w-48" />
        <span class="text-[11px] text-slate-400">Insere o valor numérico, fração simplificada ou intervalo.</span>
      </div>
    `;
  }
}

function registarResposta(id, valor) {
  respostasAluno[id] = valor;
  const numRespondidas = Object.keys(respostasAluno).length;
  document.getElementById('progresso-exercicios').textContent = `${numRespondidas}/${NUMERO_EXERCICIOS}`;
}

function imprimirFichaEnunciado() {
  window.print();
}

function imprimirResolucaoCompleta() {
  window.print();
}

// ==========================================
// 11. AVALIAÇÃO FORMAL (0 A 20 VALORES)
// ==========================================
function avaliarResposta(correta, dada, tipo) {
  if (!dada) return false;
  const limpa = str => String(str).trim().toLowerCase().replace(/\s+/g, '');

  if (tipo === 'multipla_escolha' || tipo === 'vf') {
    return limpa(correta) === limpa(dada);
  }

  if (tipo === 'numerica') {
    const valCorreto = resolverFracao(correta);
    const valDado = resolverFracao(dada);
    if (!isNaN(valCorreto) && !isNaN(valDado)) {
      return Math.abs(valCorreto - valDado) < 0.05;
    }
  }

  return limpa(correta) === limpa(dada);
}

function resolverFracao(str) {
  if (!str) return NaN;
  const s = String(str).replace(',', '.').trim();
  if (s.includes('/')) {
    const parts = s.split('/');
    return parseFloat(parts[0]) / parseFloat(parts[1]);
  }
  return parseFloat(s);
}

function submeterTreino() {
  if (intervaloCronometro) clearInterval(intervaloCronometro);
  sessaoEmAndamento = false;

  let certas = 0;
  const detalhes = [];

  exerciciosAtuais.forEach(ex => {
    const respostaDada = respostasAluno[ex.id] || '';
    const acertou = avaliarResposta(ex.resposta_correta, respostaDada, ex.tipo);
    if (acertou) certas++;

    detalhes.push({
      id: ex.id,
      topicoId: ex.topicoId,
      dominio: ex.dominio,
      subtema: ex.subtema,
      enunciado: ex.enunciado,
      respostaDada,
      respostaCorreta: ex.resposta_correta,
      acertou,
      resolucao: ex.resolucao,
      exercicio: ex
    });
  });

  const notaCalculada = parseFloat((certas * PONTOS_POR_EXERCICIO).toFixed(1));

  guardarHistoricoSessao(notaCalculada, certas, NUMERO_EXERCICIOS, detalhes, modalidadeSessao);

  apresentarResultadosComResolucao(notaCalculada, certas, NUMERO_EXERCICIOS, detalhes);
  mudarAba('resultados');

  if (faltaEmRecuperacaoId) {
    alert(`Parabéns! Realizaste a ficha de recuperação com classificação de ${notaCalculada}/20 valores.\nA tua falta foi devidamente regularizada!`);
    cancelarModoRecuperacao();
  }
}

function apresentarResultadosComResolucao(nota, certas, total, lista) {
  const cardNota = document.getElementById('card-nota');
  let corBadge = 'bg-rose-100 text-rose-800 border-rose-300';
  let mensagem = 'Necessitas de rever a matéria e refazer os exercícios errados.';

  if (nota >= 18) {
    corBadge = 'bg-amber-100 text-amber-900 border-amber-300';
    mensagem = 'Excelente! Domínio completo da matéria do programa escolar.';
  } else if (nota >= 14) {
    corBadge = 'bg-emerald-100 text-emerald-900 border-emerald-300';
    mensagem = 'Bom desempenho! Raciocínio matemático sólido e consistente.';
  } else if (nota >= 10) {
    corBadge = 'bg-blue-100 text-blue-900 border-blue-300';
    mensagem = 'Positiva alcançada. Analisa com atenção os passos da resolução.';
  }

  cardNota.innerHTML = `
    <div class="flex items-center gap-4">
      <div class="px-5 py-3 rounded-2xl border-2 ${corBadge} text-center">
        <div class="text-[10px] font-bold uppercase tracking-wider">Classificação Oficial</div>
        <div class="text-3xl font-black">${nota} <span class="text-base font-bold">/ 20</span></div>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 text-base">Desafio de 60 Minutos Concluído</h4>
        <p class="text-xs text-slate-600">${certas} de ${total} exercícios corretos &bull; Cotação: 2,5 val. cada</p>
        <p class="text-xs font-semibold text-indigo-700 mt-1">${mensagem}</p>
      </div>
    </div>
  `;

  const containerResolucao = document.getElementById('lista-resolucoes');
  containerResolucao.innerHTML = '';

  lista.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = `p-5 rounded-2xl border ${item.acertou ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'} space-y-3 a4-page-break`;

    div.innerHTML = `
      <div class="flex justify-between items-center border-b border-slate-200/60 pb-2">
        <span class="font-bold text-xs ${item.acertou ? 'text-emerald-800' : 'text-rose-800'}">
          Exercício #${idx + 1} (${item.subtema}) &bull; ${item.acertou ? '2,5 / 2,5 val.' : '0,0 / 2,5 val.'}
        </span>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${item.acertou ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'}">
          ${item.acertou ? 'Correto' : 'Incorreto'}
        </span>
      </div>

      <div class="text-xs text-slate-700 font-medium math-font">
        ${item.enunciado}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-white/80 p-3 rounded-xl border border-slate-200/80">
        <div><strong>Tua Resposta:</strong> <span class="math-font ${item.acertou ? 'text-emerald-700 font-bold' : 'text-rose-600 font-bold'}">${item.respostaDada || 'Não respondeu'}</span></div>
        <div><strong>Resposta Correta:</strong> <span class="math-font text-emerald-800 font-bold">${item.respostaCorreta}</span></div>
      </div>

      <div class="pt-2 text-xs text-slate-800 space-y-1">
        <div class="font-bold text-slate-700 flex items-center gap-1.5">
          <i class="fa-solid fa-graduation-cap text-indigo-600"></i> Demonstração e Resolução Passo a Passo:
        </div>
        <div class="pl-3 border-l-2 border-indigo-400 space-y-1 text-slate-600 math-font">
          ${item.resolucao.map(passo => `<p>&bull; ${passo}</p>`).join('')}
        </div>
      </div>
    `;

    containerResolucao.appendChild(div);
  });

  renderizarMatematica();
}

function guardarHistoricoSessao(nota, certas, total, detalhes, modalidade) {
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');
  const hoje = new Date().toISOString();

  const novaSessao = {
    id: 'sessao_' + Date.now(),
    data: hoje,
    nota,
    certas,
    total,
    modalidade,
    faltaIdRecuperada: faltaEmRecuperacaoId,
    detalhes
  };

  historico.unshift(novaSessao);
  localStorage.setItem(STORAGE_HISTORICO, JSON.stringify(historico));

  if (faltaEmRecuperacaoId) {
    const faltas = obterFaltas();
    const f = faltas.find(item => item.id === faltaEmRecuperacaoId);
    if (f) {
      f.recuperada = true;
      f.dataRecuperacaoEfetiva = formatarDataIso(new Date());
      salvarFaltas(faltas);
    }
  }

  sincronizarFaltasComHistorico();
}

// ==========================================
// 12. DASHBOARD & DIAGNÓSTICO PEDAGÓGICO
// ==========================================
let chartEvolucao = null;
let chartDominio = null;

function carregarDashboard() {
  const historico = JSON.parse(localStorage.getItem(STORAGE_HISTORICO) || '[]');

  document.getElementById('kpi-horas').textContent = `${historico.length * 1}h`;
  document.getElementById('kpi-total-ex').textContent = `${historico.length * NUMERO_EXERCICIOS}`;

  if (historico.length > 0) {
    const media = (historico.reduce((acc, h) => acc + h.nota, 0) / historico.length).toFixed(1);
    document.getElementById('kpi-media').textContent = `${media} / 20`;
  }

  document.getElementById('kpi-streak').textContent = `${calcularStreak(historico)} dias`;

  renderizarEscalaTipoAluno();
  renderizarRegistoFaltas();

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

function renderizarGraficoEvolucao(historico) {
  const ctx = document.getElementById('grafico-evolucao');
  if (!ctx) return;

  const ultimas = historico.slice(0, 10).reverse();
  const labels = ultimas.map(h => {
    const d = new Date(h.data);
    return `${d.getDate()}/${d.getMonth() + 1}`;
  });
  const dataNotas = ultimas.map(h => h.nota);

  if (chartEvolucao) chartEvolucao.destroy();

  chartEvolucao = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['Sem dados'],
      datasets: [{
        label: 'Nota Oficial (0 a 20)',
        data: dataNotas.length ? dataNotas : [0],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#4f46e5',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { min: 0, max: 20, ticks: { stepSize: 5 } }
      }
    }
  });
}

function renderizarGraficoDominio(historico) {
  const ctx = document.getElementById('grafico-dominio');
  if (!ctx) return;

  const dominios = { logica: { c: 0, t: 0 }, geometria: { c: 0, t: 0 }, funcoes: { c: 0, t: 0 }, estatistica: { c: 0, t: 0 } };

  historico.forEach(s => {
    if (s.detalhes) {
      s.detalhes.forEach(d => {
        if (dominios[d.dominio]) {
          dominios[d.dominio].t++;
          if (d.acertou) dominios[d.dominio].c++;
        }
      });
    }
  });

  const calcPct = d => dominios[d].t > 0 ? Math.round((dominios[d].c / dominios[d].t) * 100) : 0;

  if (chartDominio) chartDominio.destroy();

  chartDominio = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'Lógica e Teoria de Conjuntos',
        'Geometria Analítica',
        'Funções e Gráficos',
        'Estatística'
      ],
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
