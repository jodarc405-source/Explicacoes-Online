// Caderno 1: Lógica e Teoria dos Conjuntos (Págs. 10 a 60) - 108 Itens
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
    "id": "LOG_1_16",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 11, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A proposição $(p \\land \\neg p)$ é uma:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$p \\land \\neg p$ é sempre falsa para qualquer valor lógico de $p$.",
      "Uma proposição identicamente falsa é uma contradição."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Contradição"
      },
      {
        "id": "B",
        "texto": "Tautologia"
      },
      {
        "id": "C",
        "texto": "Contingência"
      },
      {
        "id": "D",
        "texto": "Equivalência"
      }
    ]
  },
  {
    "id": "LOG_1_17",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 12, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor lógico de $(\\sqrt{25} = 5) \\land (3^2 = 6)$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "B",
    "passosResolucao": [
      "$\\sqrt{25} = 5$ é V, mas $3^2 = 9 \\ne 6$ é F.",
      "Na conjunção: $V \\land F \\iff F$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Verdadeiro"
      },
      {
        "id": "B",
        "texto": "Falso"
      }
    ]
  },
  {
    "id": "LOG_1_18",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 13, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $p \\implies q$ é falsa, qual é o valor lógico de $p$ e de $q$, respetivamente?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A implicação só é falsa quando a hipótese é verdadeira e a tese é falsa ($V \\implies F$)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$p$ é V e $q$ é F"
      },
      {
        "id": "B",
        "texto": "$p$ é F e $q$ é V"
      },
      {
        "id": "C",
        "texto": "Ambas são V"
      },
      {
        "id": "D",
        "texto": "Ambas são F"
      }
    ]
  },
  {
    "id": "LOG_1_19",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 14, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A negação da proposição 'Hoje chove e faz frio' é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Pelas Leis de De Morgan: $\\neg(p \\land q) \\iff \\neg p \\lor \\neg q$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Hoje não chove ou não faz frio"
      },
      {
        "id": "B",
        "texto": "Hoje não chove e não faz frio"
      },
      {
        "id": "C",
        "texto": "Hoje faz calor e chove"
      },
      {
        "id": "D",
        "texto": "Hoje nem chove nem faz vento"
      }
    ]
  },
  {
    "id": "LOG_1_20",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 15, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantas linhas tem a tabela de verdade de uma fórmula com 3 variáveis proposicionais ($p, q, r$)?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "O número de linhas é dado por $2^n$, onde $n$ é o número de variáveis.",
      "$2^3 = 8$ linhas."
    ]
  },
  {
    "id": "LOG_1_21",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 16, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A proposição contrarecíproca de $p \\implies q$ é dada por:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A contrarecíproca inverte e nega ambos os membros: $\\neg q \\implies \\neg p$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\neg q \\implies \\neg p$"
      },
      {
        "id": "B",
        "texto": "$\\neg p \\implies \\neg q$"
      },
      {
        "id": "C",
        "texto": "$q \\implies p$"
      },
      {
        "id": "D",
        "texto": "$p \\land \\neg q$"
      }
    ]
  },
  {
    "id": "LOG_1_22",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 17, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A proposição $(p \\lor \\neg p)$ é sempre verdadeira. Como se designa?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Uma fórmula proposicional sempre verdadeira é uma tautologia (Princípio do Terceiro Excluído)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Tautologia"
      },
      {
        "id": "B",
        "texto": "Contradição"
      },
      {
        "id": "C",
        "texto": "Antinomia"
      },
      {
        "id": "D",
        "texto": "Paradoxo"
      }
    ]
  },
  {
    "id": "LOG_1_23",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 18, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $p$ é Falsa e $q$ é Falsa, qual é o valor lógico de $\\neg p \\iff q$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\neg p = V$ e $q = F$.",
      "Na equivalência material, $V \\iff F$ é Falso."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Falso"
      },
      {
        "id": "B",
        "texto": "Verdadeiro"
      }
    ]
  },
  {
    "id": "LOG_1_24",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 19, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja $p$ verdadeira. Qual é o valor de $p \\lor q$, sabendo que $q$ é desconhecida?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Na disjunção, basta um membro ser verdadeiro para que a fórmula seja Verdadeira ($V \\lor q \\iff V$)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Verdadeiro"
      },
      {
        "id": "B",
        "texto": "Falso"
      },
      {
        "id": "C",
        "texto": "Indeterminado"
      },
      {
        "id": "D",
        "texto": "Depende de $q$"
      }
    ]
  },
  {
    "id": "LOG_1_25",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 20, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A negação de $p \\implies q$ é logicamente equivalente a:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Como $p \\implies q \\iff \\neg p \\lor q$, a negação é $\\neg(\\neg p \\lor q) \\iff p \\land \\neg q$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$p \\land \\neg q$"
      },
      {
        "id": "B",
        "texto": "$\\neg p \\lor q$"
      },
      {
        "id": "C",
        "texto": "$\\neg p \\implies \\neg q$"
      },
      {
        "id": "D",
        "texto": "$p \\implies \\neg q$"
      }
    ]
  },
  {
    "id": "LOG_1_26",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 21, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual das seguintes operações é a disjunção exclusiva?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A disjunção exclusiva ('ou... ou...') representa-se por $\\dot{\\lor}$ ou $\\oplus$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\dot{\\lor}$ ou $\\oplus$"
      },
      {
        "id": "B",
        "texto": "$\\land$"
      },
      {
        "id": "C",
        "texto": "$\\implies$"
      },
      {
        "id": "D",
        "texto": "$\\iff$"
      }
    ]
  },
  {
    "id": "LOG_1_27",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 22, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se a proposição $A$ tem valor lógico 1 (V) e $B$ tem valor lógico 0 (F), qual é o valor de $(A \\land B) \\lor A$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$(1 \\land 0) \\lor 1 = 0 \\lor 1 = 1$ (Lei da Absorção)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "1 (Verdadeiro)"
      },
      {
        "id": "B",
        "texto": "0 (Falso)"
      }
    ]
  },
  {
    "id": "LOG_1_28",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 23, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a proposição recíproca de 'Se um triângulo é equilátero, então é isósceles'?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A recíproca de $p \\implies q$ é $q \\implies p$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Se um triângulo é isósceles, então é equilátero"
      },
      {
        "id": "B",
        "texto": "Se não é equilátero, não é isósceles"
      },
      {
        "id": "C",
        "texto": "Se não é isósceles, não é equilátero"
      },
      {
        "id": "D",
        "texto": "É equilátero se e só se for isósceles"
      }
    ]
  },
  {
    "id": "LOG_1_29",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 24, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor lógico de $(\\pi > 3) \\implies (2 + 2 = 5)$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\pi > 3$ é Verdadeiro ($3.14159... > 3$). $2 + 2 = 5$ é Falso.",
      "A implicação $V \\implies F$ é Falsa."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Falso"
      },
      {
        "id": "B",
        "texto": "Verdadeiro"
      }
    ]
  },
  {
    "id": "LOG_1_30",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 10, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A dupla negação $\\neg(\\neg p)$ é equivalente a:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Princípio da Dupla Negação: $\\neg(\\neg p) \\iff p$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$p$"
      },
      {
        "id": "B",
        "texto": "$\\neg p$"
      },
      {
        "id": "C",
        "texto": "Tautologia"
      },
      {
        "id": "D",
        "texto": "Contradição"
      }
    ]
  },
  {
    "id": "LOG_1_31",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 11, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantas valorações falsas tem a tabela de verdade de $p \\land q$ (com 2 variáveis)?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "A tabela tem 4 linhas. Apenas a linha $(V, V)$ é verdadeira. As outras 3 linhas são falsas."
    ]
  },
  {
    "id": "LOG_1_32",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 12, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $p \\iff q$ é verdadeira e $p$ é Falsa, qual é o valor lógico de $q$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A equivalência só é verdadeira quando ambos os membros têm o mesmo valor lógico. Logo, $q$ tem de ser Falsa."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Falsa"
      },
      {
        "id": "B",
        "texto": "Verdadeira"
      }
    ]
  },
  {
    "id": "LOG_1_33",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 13, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A propriedade comutativa da conjunção traduz-se por:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A ordem dos fatores na conjunção não altera o resultado: $p \\land q \\iff q \\land p$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$p \\land q \\iff q \\land p$"
      },
      {
        "id": "B",
        "texto": "$p \\land (q \\land r) \\iff (p \\land q) \\land r$"
      },
      {
        "id": "C",
        "texto": "$p \\land p \\iff p$"
      },
      {
        "id": "D",
        "texto": "$p \\land V \\iff p$"
      }
    ]
  },
  {
    "id": "LOG_1_34",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 14, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A negação da disjunção $\\neg(p \\lor q)$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Segunda Lei de De Morgan: a negação do 'ou' é a conjunção das negações."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\neg p \\land \\neg q$"
      },
      {
        "id": "B",
        "texto": "$\\neg p \\lor \\neg q$"
      },
      {
        "id": "C",
        "texto": "$p \\land q$"
      },
      {
        "id": "D",
        "texto": "$\\neg p \\implies q$"
      }
    ]
  },
  {
    "id": "LOG_1_35",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 15, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $p \\implies q$ é verdadeira, podemos garantir que:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Pela contrarecíproca: $\\neg q \\implies \\neg p$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Se $q$ é falsa, então $p$ é falsa"
      },
      {
        "id": "B",
        "texto": "Se $q$ é verdadeira, $p$ é verdadeira"
      },
      {
        "id": "C",
        "texto": "$p$ e $q$ são ambas verdadeiras"
      },
      {
        "id": "D",
        "texto": "Se $p$ é falsa, $q$ é falsa"
      }
    ]
  },
  {
    "id": "LOG_1_36",
    "topicoId": "topico_1",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Lógica Proposicional e Operações",
    "paginaInicio": 10,
    "paginaFim": 25,
    "manualRef": "Caderno 1, Pág. 16, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A expressão $p \\land (p \\lor q)$ simplifica-se para:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Pela Lei da Absorção da Álgebra de Boole, $p \\land (p \\lor q) \\iff p$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$p$"
      },
      {
        "id": "B",
        "texto": "$q$"
      },
      {
        "id": "C",
        "texto": "$p \\lor q$"
      },
      {
        "id": "D",
        "texto": "$V$"
      }
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
    "id": "LOG_2_16",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 28, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A negação da proposição $\\forall x \\in \\mathbb{R}, x^2 \\ge 0$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A negação do quantificador universal $\\forall$ é o existencial $\\exists$ com a condição negada: $x^2 < 0$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\exists x \\in \\mathbb{R}: x^2 < 0$"
      },
      {
        "id": "B",
        "texto": "$\\forall x \\in \\mathbb{R}, x^2 < 0$"
      },
      {
        "id": "C",
        "texto": "$\\exists x \\in \\mathbb{R}: x^2 \\le 0$"
      },
      {
        "id": "D",
        "texto": "$\\forall x \\in \\mathbb{R}, x^2 > 0$"
      }
    ]
  },
  {
    "id": "LOG_2_17",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 29, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor lógico da proposição $\\exists x \\in \\mathbb{R}: x + 5 = 2$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Para $x = -3 \\in \\mathbb{R}$, temos $-3 + 5 = 2$. Como existe pelo menos um elemento, a proposição é Verdadeira."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Verdadeiro"
      },
      {
        "id": "B",
        "texto": "Falso"
      }
    ]
  },
  {
    "id": "LOG_2_18",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 30, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A condição $x^2 + 1 = 0$ em $\\mathbb{R}$ diz-se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$x^2 = -1$ não tem qualquer solução em $\\mathbb{R}$. Logo, a condição é impossível."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Impossível"
      },
      {
        "id": "B",
        "texto": "Universal"
      },
      {
        "id": "C",
        "texto": "Possível não universal"
      },
      {
        "id": "D",
        "texto": "Tautológica"
      }
    ]
  },
  {
    "id": "LOG_2_19",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 31, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A negação de $\\exists x \\in \\mathbb{N}: x < 0$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\neg(\\exists x: P(x)) \\iff \\forall x: \\neg P(x)$. A negação de $x < 0$ é $x \\ge 0$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\forall x \\in \\mathbb{N}, x \\ge 0$"
      },
      {
        "id": "B",
        "texto": "$\\exists x \\in \\mathbb{N}: x \\ge 0$"
      },
      {
        "id": "C",
        "texto": "$\\forall x \\in \\mathbb{N}, x > 0$"
      },
      {
        "id": "D",
        "texto": "$\\forall x \\in \\mathbb{N}, x \\le 0$"
      }
    ]
  },
  {
    "id": "LOG_2_20",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 32, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantas soluções reais tem a equação condição $(x - 3)(x + 7) = 0$?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "Pela Lei do Anulamento do Produto: $x - 3 = 0 \\lor x + 7 = 0 \\implies x = 3 \\lor x = -7$.",
      "Tem 2 soluções."
    ]
  },
  {
    "id": "LOG_2_21",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 33, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja $A(x): x > 4$ e $B(x): x > 1$. Qual das implicações é universalmente verdadeira em $\\mathbb{R}$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Qualquer número estritamente maior que 4 é obrigatoriamente maior que 1."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\forall x \\in \\mathbb{R}, A(x) \\implies B(x)$"
      },
      {
        "id": "B",
        "texto": "$\\forall x \\in \\mathbb{R}, B(x) \\implies A(x)$"
      },
      {
        "id": "C",
        "texto": "$\\forall x \\in \\mathbb{R}, A(x) \\iff B(x)$"
      },
      {
        "id": "D",
        "texto": "Nenhuma"
      }
    ]
  },
  {
    "id": "LOG_2_22",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 34, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A proposição $\\forall x \\in \\mathbb{R}, |x| \\ge 0$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Por definição de módulo de um número real, $|x| \\ge 0$ para todo o $x \\in \\mathbb{R}$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Verdadeira"
      },
      {
        "id": "B",
        "texto": "Falsa"
      }
    ]
  },
  {
    "id": "LOG_2_23",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 35, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o conjunto-solução em $\\mathbb{R}$ da condição $x^2 - 9 = 0$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$x^2 = 9 \\iff x = \\pm 3$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\{-3, 3\\}$"
      },
      {
        "id": "B",
        "texto": "$\\{3\\}$"
      },
      {
        "id": "C",
        "texto": "$[-3, 3]$"
      },
      {
        "id": "D",
        "texto": "$\\{9\\}$"
      }
    ]
  },
  {
    "id": "LOG_2_24",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 36, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A negação de 'Todos os alunos tiveram nota positiva' é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A negação de 'todos' é 'existe pelo menos um que não'."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Pelo menos um aluno não teve nota positiva"
      },
      {
        "id": "B",
        "texto": "Nenhum aluno teve nota positiva"
      },
      {
        "id": "C",
        "texto": "Todos os alunos tiveram nota negativa"
      },
      {
        "id": "D",
        "texto": "A maioria dos alunos reprovou"
      }
    ]
  },
  {
    "id": "LOG_2_25",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 37, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor de $x \\in \\mathbb{N}$ que satisfaz $2x + 1 = 7$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$2x = 6 \\iff x = 3$, que pertence a $\\mathbb{N}$."
    ]
  },
  {
    "id": "LOG_2_26",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 38, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A condição $x = x + 1$ no domínio dos reais é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$x - x = 1 \\iff 0 = 1$, impossível."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Impossível"
      },
      {
        "id": "B",
        "texto": "Universal"
      },
      {
        "id": "C",
        "texto": "Possível"
      },
      {
        "id": "D",
        "texto": "Equivalente a $x = 0$"
      }
    ]
  },
  {
    "id": "LOG_2_27",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 39, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O quantificador existencial $\\exists!$ (com ponto de exclamação) lê-se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O símbolo $\\exists!$ denota unicidade: existe um e um só elemento."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Existe um e um só (existe um único)"
      },
      {
        "id": "B",
        "texto": "Para todo"
      },
      {
        "id": "C",
        "texto": "Existe pelo menos um"
      },
      {
        "id": "D",
        "texto": "Não existe"
      }
    ]
  },
  {
    "id": "LOG_2_28",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 26, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor lógico de $\\forall x \\in \\mathbb{R}, x^2 > 0$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Para $x = 0$, temos $0^2 = 0$, que não é $> 0$. Logo, é Falso."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Falso (contraexemplo: $x = 0$)"
      },
      {
        "id": "B",
        "texto": "Verdadeiro"
      }
    ]
  },
  {
    "id": "LOG_2_29",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 27, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja $P(x): 2x - 4 > 0$. Para que valores de $x$ é a condição verdadeira?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$2x > 4 \\iff x > 2$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x > 2$"
      },
      {
        "id": "B",
        "texto": "$x < 2$"
      },
      {
        "id": "C",
        "texto": "$x > 4$"
      },
      {
        "id": "D",
        "texto": "$x > -2$"
      }
    ]
  },
  {
    "id": "LOG_2_30",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 28, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A proposição $\\exists x \\in \\mathbb{R}: x^2 = 2$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\pm \\sqrt{2}$ são números reais. Logo, a proposição é Verdadeira."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Verdadeira (pois $\\sqrt{2} \\in \\mathbb{R}$)"
      },
      {
        "id": "B",
        "texto": "Falsa (porque $\\sqrt{2}$ é irracional)"
      }
    ]
  },
  {
    "id": "LOG_2_31",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 29, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantos números naturais verificam a condição $x < 5$ em $\\mathbb{N} = \\{1, 2, 3, ...\\}$?",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "Os números são 1, 2, 3 e 4. Total: 4."
    ]
  },
  {
    "id": "LOG_2_32",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 30, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A negação de $\\forall x \\in A, P(x) \\implies Q(x)$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\neg(\\forall x (P \\implies Q)) \\iff \\exists x: \\neg(P \\implies Q) \\iff \\exists x: P(x) \\land \\neg Q(x)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\exists x \\in A: P(x) \\land \\neg Q(x)$"
      },
      {
        "id": "B",
        "texto": "$\\forall x \\in A, \\neg P(x) \\lor Q(x)$"
      },
      {
        "id": "C",
        "texto": "$\\exists x \\in A: \\neg P(x) \\implies \\neg Q(x)$"
      },
      {
        "id": "D",
        "texto": "$\\forall x \\in A, P(x) \\land \\neg Q(x)$"
      }
    ]
  },
  {
    "id": "LOG_2_33",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 31, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A condição $x \\le x$ em $\\mathbb{R}$ diz-se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Verifica-se para todo e qualquer número real, logo é universal."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Universal"
      },
      {
        "id": "B",
        "texto": "Impossível"
      },
      {
        "id": "C",
        "texto": "Possível não universal"
      },
      {
        "id": "D",
        "texto": "Equivalente a $x = 0$"
      }
    ]
  },
  {
    "id": "LOG_2_34",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 32, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A proposição $\\exists x \\in \\mathbb{Q}: x^2 = 2$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\sqrt{2}$ é irracional (não pertence a $\\mathbb{Q}$)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Falsa ($\\sqrt{2}$ não é racional)"
      },
      {
        "id": "B",
        "texto": "Verdadeira"
      }
    ]
  },
  {
    "id": "LOG_2_35",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 33, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Duas condições dizem-se equivalentes num conjunto $U$ se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Por definição, duas condições são equivalentes quando admitem exatamente o mesmo conjunto de soluções."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Têm o mesmo conjunto-solução em $U$"
      },
      {
        "id": "B",
        "texto": "São ambas impossíveis"
      },
      {
        "id": "C",
        "texto": "Têm o mesmo grau"
      },
      {
        "id": "D",
        "texto": "Têm a mesma variável"
      }
    ]
  },
  {
    "id": "LOG_2_36",
    "topicoId": "topico_2",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Condições e Quantificadores",
    "paginaInicio": 26,
    "paginaFim": 40,
    "manualRef": "Caderno 1, Pág. 34, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o conjunto de soluções da condição $x^2 + 4 > 0$ em $\\mathbb{R}$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Como $x^2 \\ge 0$, temos $x^2 + 4 \\ge 4 > 0$ para todo o $x \\in \\mathbb{R}$. Conjunto-solução: $\\mathbb{R}$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\mathbb{R}$"
      },
      {
        "id": "B",
        "texto": "$\\emptyset$"
      },
      {
        "id": "C",
        "texto": "$]2, +\\infty[$"
      },
      {
        "id": "D",
        "texto": "$[-2, 2]$"
      }
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
  },
  {
    "id": "LOG_3_16",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 57, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Sejam $A = [1, 5]$ e $B = [3, 8]$. Qual é a interseção $A \\cap B$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A interseção é o conjunto dos pontos comuns: $[3, 5]$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[3, 5]$"
      },
      {
        "id": "B",
        "texto": "$[1, 8]$"
      },
      {
        "id": "C",
        "texto": "$]3, 5[$"
      },
      {
        "id": "D",
        "texto": "$\\{3, 4, 5\\}$"
      }
    ]
  },
  {
    "id": "LOG_3_17",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 58, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Sejam $A = [1, 5]$ e $B = [3, 8]$. Qual é a reunião $A \\cup B$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A reunião junta todos os elementos: $[1, 8]$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[1, 8]$"
      },
      {
        "id": "B",
        "texto": "$[3, 5]$"
      },
      {
        "id": "C",
        "texto": "$[1, 3]$"
      },
      {
        "id": "D",
        "texto": "$[5, 8]$"
      }
    ]
  },
  {
    "id": "LOG_3_18",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 59, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o complementar em $\\mathbb{R}$ do intervalo $]-\\infty, 4[$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O complementar inverte o sentido e o fecho: $[4, +\\infty[$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[4, +\\infty[$"
      },
      {
        "id": "B",
        "texto": "$]4, +\\infty[$"
      },
      {
        "id": "C",
        "texto": "$]-\\infty, 4]$"
      },
      {
        "id": "D",
        "texto": "$\\{4\\}$"
      }
    ]
  },
  {
    "id": "LOG_3_19",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 41, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantos elementos tem o conjunto das partes $\\mathcal{P}(A)$ de um conjunto com 3 elementos?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "O número de subconjuntos de um conjunto de cardinal $n$ é $2^n$.",
      "$2^3 = 8$."
    ]
  },
  {
    "id": "LOG_3_20",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 42, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $A \\subset B$, então a interseção $A \\cap B$ é igual a:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Se todos os elementos de $A$ pertencem a $B$, os elementos comuns são exatamente os de $A$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$A$"
      },
      {
        "id": "B",
        "texto": "$B$"
      },
      {
        "id": "C",
        "texto": "$\\emptyset$"
      },
      {
        "id": "D",
        "texto": "$A \\cup B$"
      }
    ]
  },
  {
    "id": "LOG_3_21",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 43, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A diferença de conjuntos $A \\setminus B$ define-se por:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "São os elementos que pertencem a $A$ e não pertencem a $B$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\{x: x \\in A \\land x \\notin B\\}$"
      },
      {
        "id": "B",
        "texto": "$\\{x: x \\in A \\lor x \\notin B\\}$"
      },
      {
        "id": "C",
        "texto": "$\\{x: x \\notin A \\land x \\in B\\}$"
      },
      {
        "id": "D",
        "texto": "$\\{x: x \\in A \\cap B\\}$"
      }
    ]
  },
  {
    "id": "LOG_3_22",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 44, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O intervalo $[-2, 7[$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O colchete virado para dentro em $-2$ indica fechado; virado para fora em $7$ indica aberto."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Fechado à esquerda e aberto à direita"
      },
      {
        "id": "B",
        "texto": "Aberto à esquerda e fechado à direita"
      },
      {
        "id": "C",
        "texto": "Totalmente fechado"
      },
      {
        "id": "D",
        "texto": "Totalmente aberto"
      }
    ]
  },
  {
    "id": "LOG_3_23",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 45, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja $A = \\{2, 4, 6\\}$ e $B = \\{1, 2, 3\\}$. Quantos elementos tem $A \\cup B$?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "$A \\cup B = \\{1, 2, 3, 4, 6\\}$. Tem 5 elementos."
    ]
  },
  {
    "id": "LOG_3_24",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 46, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Sejam dois conjuntos disjuntos $A$ e $B$. O valor de $A \\cap B$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Conjuntos disjuntos não têm elementos comuns, logo a interseção é o conjunto vazio."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\emptyset$ (conjunto vazio)"
      },
      {
        "id": "B",
        "texto": "$\\{0\\}$"
      },
      {
        "id": "C",
        "texto": "$\\mathbb{R}$"
      },
      {
        "id": "D",
        "texto": "$A$"
      }
    ]
  },
  {
    "id": "LOG_3_25",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 47, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O conjunto $\\mathbb{R} \\setminus \\mathbb{Q}$ representa os números:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Os números reais não racionais são por definição os números irracionais."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Irracionais"
      },
      {
        "id": "B",
        "texto": "Inteiros"
      },
      {
        "id": "C",
        "texto": "Naturais"
      },
      {
        "id": "D",
        "texto": "Complexos"
      }
    ]
  },
  {
    "id": "LOG_3_26",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 48, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o menor elemento pertencente ao intervalo $[3, 9]$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "Sendo o intervalo fechado em 3, o seu mínimo é 3."
    ]
  },
  {
    "id": "LOG_3_27",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 49, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O conjunto vazio $\\emptyset$ é subconjunto de:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Axioma da Teoria dos Conjuntos: o conjunto vazio é subconjunto de qualquer conjunto ($\\\\emptyset \\subset A$)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Qualquer conjunto"
      },
      {
        "id": "B",
        "texto": "Apenas de si próprio"
      },
      {
        "id": "C",
        "texto": "Apenas de conjuntos infinitos"
      },
      {
        "id": "D",
        "texto": "Apenas de $\\mathbb{R}$"
      }
    ]
  },
  {
    "id": "LOG_3_28",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 50, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $A = [0, 10]$ e $B = ]2, 6[$, qual é o conjunto $A \\setminus B$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Retirando o intervalo aberto $]2, 6[$, os extremos 2 e 6 continuam no conjunto restante: $[0, 2] \\cup [6, 10]$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[0, 2] \\cup [6, 10]$"
      },
      {
        "id": "B",
        "texto": "$[0, 2[ \\cup ]6, 10]$"
      },
      {
        "id": "C",
        "texto": "$]2, 6[$"
      },
      {
        "id": "D",
        "texto": "$[2, 6]$"
      }
    ]
  },
  {
    "id": "LOG_3_29",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 51, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a amplitude do intervalo $[-3, 5]$?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "Amplitude = $b - a = 5 - (-3) = 8$."
    ]
  },
  {
    "id": "LOG_3_30",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 52, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $A \\cap B = A$, então podemos concluir que:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Se a interseção de $A$ com $B$ é o próprio $A$, significa que todos os elementos de $A$ estão contidos em $B$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$A \\subset B$"
      },
      {
        "id": "B",
        "texto": "$B \\subset A$"
      },
      {
        "id": "C",
        "texto": "$A = B$"
      },
      {
        "id": "D",
        "texto": "$A \\cap B = \\emptyset$"
      }
    ]
  },
  {
    "id": "LOG_3_31",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 53, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantos números inteiros pertencem ao intervalo $]-2, 3]$?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Os inteiros são: $-1, 0, 1, 2, 3$. Total: 5 inteiros."
    ]
  },
  {
    "id": "LOG_3_32",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 54, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A reunião de um conjunto com o seu complementar $\\bar{A} \\cup A$ no universo $U$ é igual a:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Qualquer elemento do universo ou pertence a $A$ ou pertence ao seu complementar."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "O universo $U$"
      },
      {
        "id": "B",
        "texto": "$\\emptyset$"
      },
      {
        "id": "C",
        "texto": "$A$"
      },
      {
        "id": "D",
        "texto": "$\\bar{A}$"
      }
    ]
  },
  {
    "id": "LOG_3_33",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 55, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A interseção $A \\cap \\bar{A}$ é igual a:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Nenhum elemento pode pertencer simultaneamente a $A$ e ao complementar de $A$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\emptyset$"
      },
      {
        "id": "B",
        "texto": "$U$"
      },
      {
        "id": "C",
        "texto": "$A$"
      },
      {
        "id": "D",
        "texto": "$\\{0\\}$"
      }
    ]
  },
  {
    "id": "LOG_3_34",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 56, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja $A = \\{x \\in \\mathbb{R}: x^2 \\le 4\\}$. Em forma de intervalo, $A$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$x^2 \\le 4 \\iff |x| \\le 2 \\iff -2 \\le x \\le 2$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[-2, 2]$"
      },
      {
        "id": "B",
        "texto": "$[0, 2]$"
      },
      {
        "id": "C",
        "texto": "$]-\\infty, 2]$"
      },
      {
        "id": "D",
        "texto": "$[-4, 4]$"
      }
    ]
  },
  {
    "id": "LOG_3_35",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 57, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O ponto médio do intervalo $[-4, 10]$ é:",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$M = \\frac{-4 + 10}{2} = \\frac{6}{2} = 3$."
    ]
  },
  {
    "id": "LOG_3_36",
    "topicoId": "topico_3",
    "dominio": "logica",
    "temaNome": "Lógica e Teoria dos Conjuntos",
    "subtema": "Conjuntos e Intervalos de Números Reais",
    "paginaInicio": 41,
    "paginaFim": 60,
    "manualRef": "Caderno 1, Pág. 58, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A lei de De Morgan para conjuntos $\\overline{A \\cup B}$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O complementar da reunião é a interseção dos complementares."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\bar{A} \\cap \\bar{B}$"
      },
      {
        "id": "B",
        "texto": "$\\bar{A} \\cup \\bar{B}$"
      },
      {
        "id": "C",
        "texto": "$\\bar{A} \\setminus B$"
      },
      {
        "id": "D",
        "texto": "$A \\cap B$"
      }
    ]
  }
];
