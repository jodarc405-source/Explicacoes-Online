// Caderno 1: Lógica e Teoria dos Conjuntos (Págs. 10 a 60) - 45 Itens
const EXERCICIOS_LOGICA = [
  {
    "id": "LOG_1_01",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 18, Ex. 3",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Considere as proposições $p$ e $q$, ambas falsas. Indique o valor lógico da proposição $(\\sim p \\land q) \\iff (p \\lor q)$. Escreva apenas 'V' para verdadeiro ou 'F' para falso.",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "$\\sim p \\iff \\text{V}$ pois $p$ é falsa.",
      "$(\\sim p \\land q) \\iff \\text{V} \\land \\text{F} \\iff \\text{F}$.",
      "$(p \\lor q) \\iff \\text{F} \\lor \\text{F} \\iff \\text{F}$.",
      "$\\text{F} \\iff \\text{F}$ tem valor lógico V."
    ]
  },
  {
    "id": "LOG_1_02",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 21 (Exame Adaptado)",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Considere a implicação $p \\implies q$, sabendo que $p$ é verdadeira e a implicação $p \\implies q$ é falsa. Qual é o valor lógico da negação $\\sim q$? (Responda 'V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "$p \\implies q$ só é falsa quando $\\text{V} \\implies \\text{F}$. Logo $q$ é falsa.",
      "Portanto, a negação $\\sim q$ é verdadeira (V)."
    ]
  },
  {
    "id": "LOG_1_03",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 23, Ex. 6",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Pelas Leis de De Morgan, a negação de $(\\sim a \\lor b)$ é equivalente a $(a \\land \\sim b)$. Se a proposição $(a \\land \\sim b)$ for verdadeira, qual é o valor lógico de $b$? ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "F",
    "passosResolucao": [
      "Para $(a \\land \\sim b)$ ser verdadeira, $a \\iff \\text{V}$ e $\\sim b \\iff \\text{V}$.",
      "Se $\\sim b$ é V, então $b$ é falso (F)."
    ]
  },
  {
    "id": "LOG_1_04",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 24, Ex. 8",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Qual é o valor lógico da tautologia $(\\sim p \\lor p)$ para qualquer proposição $p$? Indique 'V' para verdadeiro ou 'F' para falso.",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "Pelo princípio do terceiro excluído, uma proposição ou é verdadeira ou a sua negação é verdadeira.",
      "Assim, $\\sim p \\lor p$ é sempre verdadeira (V)."
    ]
  },
  {
    "id": "LOG_1_05",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 25, Ex. 11",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere a proposição contrarecíproca da implicação $a \\implies b$, que é dada por $\\sim b \\implies \\sim a$. Se $a \\implies b$ é verdadeira, qual é o valor lógico de $\\sim b \\implies \\sim a$? ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "Uma implicação é logicamente equivalente à sua contrarecíproca.",
      "Como a original é V, a contrarecíproca tem valor lógico V."
    ]
  },
  {
    "id": "LOG_1_06",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 25, Ex. 14",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Sabe-se que $p \\iff \\text{V}$ e $q \\iff \\text{F}$. Determine o valor lógico de $\\sim(p \\land \\sim q)$. Escreva 'V' ou 'F'.",
    "tipo": "texto",
    "respostaCorreta": "F",
    "passosResolucao": [
      "$\\sim q \\iff \\text{V}$, logo $p \\land \\sim q \\iff \\text{V} \\land \\text{V} \\iff \\text{V}$.",
      "A negação é $\\sim \\text{V} \\iff \\text{F}$."
    ]
  },
  {
    "id": "LOG_1_07",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 19, Ex. 5",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Sendo $p$ verdadeira e $q$ falsa, qual é o valor lógico da disjunção exclusiva $p \\;\\dot{\\lor}\\; q$? ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "A disjunção exclusiva é verdadeira se e só se exatamente uma das parcelas for verdadeira.",
      "Como $p$ é V e $q$ é F, o valor é V."
    ]
  },
  {
    "id": "LOG_1_08",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 20, Ex. 7",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A proposição $(p \\land q) \\implies p$ é uma tautologia ou contradição? (Escreva 'tautologia' ou 'contradicao').",
    "tipo": "texto",
    "respostaCorreta": "tautologia",
    "passosResolucao": [
      "Se $p \\land q$ é V, então $p$ é V ($\\text{V} \\implies \\text{V} \\iff \\text{V}$). Se é F, a implicação é V.",
      "É sempre verdadeira, logo é uma tautologia."
    ]
  },
  {
    "id": "LOG_1_09",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 22, Ex. 10",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Sabe-se que $(\\sim p \\lor q) \\iff \\text{F}$. Qual é o valor lógico de $p$? ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "Disjunção falsa exige $\\sim p \\iff \\text{F}$ e $q \\iff \\text{F}$.",
      "Se $\\sim p$ é F, então $p$ é verdadeira (V)."
    ]
  },
  {
    "id": "LOG_1_10",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 23, Ex. 12",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantas linhas tem a tabela de verdade de uma proposição com 3 variáveis ($p, q, r$)?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "Fórmula do número de linhas: $2^n = 2^3 = 8$."
    ]
  },
  {
    "id": "LOG_1_11",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 24, Ex. 15",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A absorção $p \\land (p \\lor q)$ simplifica para $p$ ou para $q$? (Escreva 'p' ou 'q').",
    "tipo": "texto",
    "respostaCorreta": "p",
    "passosResolucao": [
      "Pela lei de absorção: $p \\land (p \\lor q) \\iff p$."
    ]
  },
  {
    "id": "LOG_1_12",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 25, Ex. 17",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Qual é o valor lógico da contradição $(p \\land \\sim p)$? ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "F",
    "passosResolucao": [
      "Uma contradição tem sempre valor lógico Falso (F)."
    ]
  },
  {
    "id": "LOG_1_13",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 25, Ex. 19",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Se $p \\iff \\text{F}$ e $q \\iff \\text{F}$, qual é o valor lógico da implicação $p \\implies q$? ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "$\\text{F} \\implies \\text{F} \\iff \\text{V}$."
    ]
  },
  {
    "id": "LOG_1_14",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 25, Ex. 21",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $p \\iff q$ é verdadeira, os valores lógicos de $p$ e $q$ são iguais ou diferentes? (Escreva 'iguais' ou 'diferentes').",
    "tipo": "texto",
    "respostaCorreta": "iguais",
    "passosResolucao": [
      "A equivalência só é verdadeira quando os valores lógicos coincidem."
    ]
  },
  {
    "id": "LOG_1_15",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 25, Ex. 23",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Pelas Leis de De Morgan, a negação de uma conjunção $\\sim(a \\land b)$ transforma-se em conjunção ou disjunção? (Escreva 'conjuncao' ou 'disjuncao').",
    "tipo": "texto",
    "respostaCorreta": "disjuncao",
    "passosResolucao": [
      "$\\sim(a \\land b) \\iff \\sim a \\lor \\sim b$, logo resulta numa disjunção."
    ]
  },
  {
    "id": "LOG_2_01",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 30, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Considere em $\\mathbb{R}$ a proposição $p: \\forall x \\in \\mathbb{R},\\; x^2 + 1 > 0$. Indique o valor lógico da sua negação $\\sim p$ (escreva 'V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "F",
    "passosResolucao": [
      "$x^2 + 1 \\ge 1 > 0$ é universal em $\\mathbb{R}$, logo $p$ é V.",
      "A negação de V é F (Falsa)."
    ]
  },
  {
    "id": "LOG_2_02",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 33 (Teste Intermédio)",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "No conjunto $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$, determine quantos elementos pertencem ao conjunto-solução de $n^2 - 7n + 10 = 0$.",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$n = \\frac{7 \\pm \\sqrt{49 - 40}}{2} = \\frac{7 \\pm 3}{2} \\implies n_1 = 5, n_2 = 2$.",
      "Ambos pertencem a $\\mathbb{N}$, logo são 2 raízes naturais."
    ]
  },
  {
    "id": "LOG_2_03",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 36, Ex. 7",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Determine o menor valor real de $k$ para o qual a condição $x^2 - 6x + k \\ge 0$ é universal em $\\mathbb{R}$.",
    "tipo": "numero",
    "respostaCorreta": 9,
    "passosResolucao": [
      "$\\Delta = (-6)^2 - 4k = 36 - 4k \\le 0 \\iff 4k \\ge 36 \\iff k \\ge 9$. Menor valor = 9."
    ]
  },
  {
    "id": "LOG_2_04",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 38, Ex. 9",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Indique o valor lógico da proposição: $\\exists x \\in \\mathbb{R} : x^2 + 9 = 0$. Escreva 'V' ou 'F'.",
    "tipo": "texto",
    "respostaCorreta": "F",
    "passosResolucao": [
      "$x^2 = -9$ é impossível em $\\mathbb{R}$. Valor lógico: F."
    ]
  },
  {
    "id": "LOG_2_05",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 39, Ex. 12",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere em $\\mathbb{R}$ a proposição $q: \\forall x \\in \\mathbb{R},\\; (x-3)^2 \\ge 0$. Indique o valor lógico de $q$ ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "O quadrado de qualquer número real é não negativo. Logo $q \\iff \\text{V}$."
    ]
  },
  {
    "id": "LOG_2_06",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 40, Ex. 15",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantas raízes inteiras satisfazem a condição $(x^2 - 16)(x - 2) = 0$ em $\\mathbb{Z}$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$x = \\pm 4$ ou $x = 2$. Raízes em $\\mathbb{Z}$: $\\{-4, 2, 4\\}$ (3 raízes)."
    ]
  },
  {
    "id": "LOG_2_07",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 28, Ex. 3",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Qual é a negação lógica da afirmação $\\forall x \\in \\mathbb{R},\\; x > 0$? O quantificador transforma-se em $\\forall$ ou $\\exists$? (Escreva 'para todo' ou 'existe').",
    "tipo": "texto",
    "respostaCorreta": "existe",
    "passosResolucao": [
      "$\\sim(\\forall x, P(x)) \\iff \\exists x : \\sim P(x)$. O quantificador passa a existencial ('existe')."
    ]
  },
  {
    "id": "LOG_2_08",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 31, Ex. 6",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Em $\\mathbb{R}$, a condição $x^2 + 4x + 4 = 0$ é possível, impossível ou universal? (Escreva 'possivel', 'impossivel' ou 'universal').",
    "tipo": "texto",
    "respostaCorreta": "possivel",
    "passosResolucao": [
      "$(x+2)^2 = 0 \\iff x = -2$. Tem solução única, logo é possível (não universal)."
    ]
  },
  {
    "id": "LOG_2_09",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 34, Ex. 9",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Considere a condição $c(x): x^2 - 25 < 0$ em $\\mathbb{Z}$. Quantos números inteiros satisfazem esta condição?",
    "tipo": "numero",
    "respostaCorreta": 9,
    "passosResolucao": [
      "$x^2 < 25 \\iff -5 < x < 5$. Inteiros: $-4, -3, -2, -1, 0, 1, 2, 3, 4$ (9 inteiros)."
    ]
  },
  {
    "id": "LOG_2_10",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 35, Ex. 11",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Indique o valor lógico da proposição: $\\exists x \\in \\mathbb{Q} : x^2 = 2$. ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "F",
    "passosResolucao": [
      "$\\sqrt{2}$ é irracional, não pertencendo a $\\mathbb{Q}$. Valor lógico: F."
    ]
  },
  {
    "id": "LOG_2_11",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 37, Ex. 14",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se a condição $A(x) \\implies B(x)$ é universal, diz-se que $A(x)$ é condição suficiente ou necessária para $B(x)$? (Escreva 'suficiente' ou 'necessaria').",
    "tipo": "texto",
    "respostaCorreta": "suficiente",
    "passosResolucao": [
      "Na implicação $A \\implies B$, o antecedente $A$ é condição suficiente para $B$."
    ]
  },
  {
    "id": "LOG_2_12",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 38, Ex. 16",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Qual é o valor lógico de $\\forall x \\in \\mathbb{R},\\; |x| \\ge 0$? ('V' ou 'F').",
    "tipo": "texto",
    "respostaCorreta": "V",
    "passosResolucao": [
      "Por definição de módulo, o valor absoluto de qualquer número real é sempre $\\ge 0$. Valor lógico: V."
    ]
  },
  {
    "id": "LOG_2_13",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 39, Ex. 18",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Para que valor real de $m$ a equação $(m-3)x = 5$ é uma condição impossível em $\\mathbb{R}$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "Se $m = 3$, fica $0x = 5$, que não tem solução em $\\mathbb{R}$ (condição impossível)."
    ]
  },
  {
    "id": "LOG_2_14",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 40, Ex. 20",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A negação de $x \\ge 7$ é $x < 7$ ou $x \\le 7$? (Escreva '< 7' ou '<= 7').",
    "tipo": "texto",
    "respostaCorreta": "< 7",
    "passosResolucao": [
      "A negação de 'maior ou igual' é estritamente 'menor que': $\\sim(x \\ge 7) \\iff x < 7$."
    ]
  },
  {
    "id": "LOG_2_15",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 40, Ex. 22",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Quantas soluções reais tem a condição $(x-4)^2 + (y-1)^2 = 0$ para o par ordenado $(x, y)$?",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "Sendo soma de quadrados nula, $x-4 = 0$ e $y-1 = 0 \\iff (4, 1)$. Há exatamente 1 solução."
    ]
  },
  {
    "id": "CONJ_3_01",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 48, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Considere os intervalos reais $A = ]-\\infty, 4]$ e $B = ]1, 7[$. Qual é o maior número inteiro pertencente a $A \\cap B$?",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "$A \\cap B = ]1, 4]$. Inteiros: 2, 3, 4. O maior é 4."
    ]
  },
  {
    "id": "CONJ_3_02",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 52 (Exame Adaptado)",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Sejam $A = [-2, 5]$ e $B = [3, 8]$. Quantos números inteiros pertencem à diferença $B \\setminus A$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$B \\setminus A = [3, 8] \\setminus [-2, 5] = ]5, 8]$. Inteiros: 6, 7, 8 (3 números)."
    ]
  },
  {
    "id": "CONJ_3_03",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 56, Ex. 7",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere o conjunto $C = ]-3, 5[$. O complementar em $\\mathbb{R}$ é $]-\\infty, a] \\cup [b, +\\infty[$. Calcule $a + b$.",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$\\mathbb{R} \\setminus ]-3, 5[ = ]-\\infty, -3] \\cup [5, +\\infty[$. $a = -3, b = 5$. Soma = 2."
    ]
  },
  {
    "id": "CONJ_3_04",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 58, Ex. 10",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Quantos números inteiros pertencem à reunião $[-2, 1] \\cup [0, 4]$?",
    "tipo": "numero",
    "respostaCorreta": 7,
    "passosResolucao": [
      "$[-2, 1] \\cup [0, 4] = [-2, 4]$. Inteiros: $-2, -1, 0, 1, 2, 3, 4$ (7 inteiros)."
    ]
  },
  {
    "id": "CONJ_3_05",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 60, Ex. 14",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a amplitude do intervalo $I = [-\\frac{3}{2}, \\frac{7}{2}]$?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Amplitude = $\\frac{7}{2} - (-\\frac{3}{2}) = \\frac{10}{2} = 5$."
    ]
  },
  {
    "id": "CONJ_3_06",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 60, Ex. 18",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Considere $A = ]2, +\\infty[$ e $B = ]-\\infty, 6]$. Qual é o menor número inteiro do conjunto $A \\cap B$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$A \\cap B = ]2, 6]$. Menor inteiro aberto em 2 é 3."
    ]
  },
  {
    "id": "CONJ_3_07",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 44, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Se $A = \\{1, 2, 3\\}$ e $B = \\{3, 4, 5\\}$, quantos elementos tem o produto cartesiano $A \\times B$?",
    "tipo": "numero",
    "respostaCorreta": 9,
    "passosResolucao": [
      "Cardinal do produto cartesiano: $|A| \\times |B| = 3 \\times 3 = 9$ pares ordenados."
    ]
  },
  {
    "id": "CONJ_3_08",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 46, Ex. 5",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Se um conjunto $S$ tem 4 elementos, quantos subconjuntos tem o conjunto das partes $\\mathcal{P}(S)$?",
    "tipo": "numero",
    "respostaCorreta": 16,
    "passosResolucao": [
      "Número de subconjuntos: $2^n = 2^4 = 16$."
    ]
  },
  {
    "id": "CONJ_3_09",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 50, Ex. 8",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja $A = [-4, 6]$. Qual é o ponto médio (centro) do intervalo $A$?",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "Centro = $\\frac{-4 + 6}{2} = \\frac{2}{2} = 1$."
    ]
  },
  {
    "id": "CONJ_3_10",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 53, Ex. 11",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a interseção entre o conjunto dos números irracionais e o conjunto dos racionais $\\mathbb{Q}$? (Escreva 'vazio' ou 'reais').",
    "tipo": "texto",
    "respostaCorreta": "vazio",
    "passosResolucao": [
      "Por definição, nenhum número pode ser simultaneamente racional e irracional. A interseção é o conjunto vazio."
    ]
  },
  {
    "id": "CONJ_3_11",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 55, Ex. 13",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "O conjunto $A = \\{x \\in \\mathbb{R} : |x| < 3\\}$ corresponde ao intervalo $]-k, k[$. Qual é o valor de $k$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$|x| < 3 \\iff -3 < x < 3$. Logo $k = 3$."
    ]
  },
  {
    "id": "CONJ_3_12",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 57, Ex. 15",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantos números primos pertencem ao intervalo $[10, 20]$?",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "Os números primos entre 10 e 20 são: 11, 13, 17, 19 (total de 4)."
    ]
  },
  {
    "id": "CONJ_3_13",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 59, Ex. 19",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $A \\subseteq B$, a interseção $A \\cap B$ é igual ao conjunto $A$ ou ao conjunto $B$? (Escreva 'A' ou 'B').",
    "tipo": "texto",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Se $A$ está contido em $B$, todos os elementos de $A$ estão em $B$, logo $A \\cap B = A$."
    ]
  },
  {
    "id": "CONJ_3_14",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 60, Ex. 21",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Calcule a amplitude do intervalo $J = [-3.5, 4.5]$.",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "Amplitude = $4.5 - (-3.5) = 8$."
    ]
  },
  {
    "id": "CONJ_3_15",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 60, Ex. 24",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "O conjunto $\\mathbb{R}^+$ dos números reais estritamente positivos é representado pelo intervalo $]0, +\\infty[$. O número 0 pertence a este conjunto? ('sim' ou 'nao').",
    "tipo": "texto",
    "respostaCorreta": "nao",
    "passosResolucao": [
      "O intervalo é aberto em 0, e 0 não é positivo nem negativo. Resposta: nao."
    ]
  }
];
