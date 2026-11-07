// Caderno 2: Estatística (Págs. 112 a 160) - 72 Itens
const EXERCICIOS_ESTATISTICA = [
  {
    "id": "EST_13_01",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 120, Ex. 3",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "A média aritmética de 4 notas de um aluno é 12 valores. Se a uma 5.ª nota for atribuída a classificação de 17 valores, qual passa a ser a nova média?",
    "tipo": "numero",
    "respostaCorreta": 13,
    "passosResolucao": [
      "Soma: $4 \\times 12 + 17 = 65$. Nova média: $\\frac{65}{5} = 13$."
    ]
  },
  {
    "id": "EST_13_02",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 124 (Exame Adaptado)",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere a amostra ordenada: $2, 4, 7, 9, 11, 15$. Calcule o valor da mediana.",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "Mediana dos 6 termos: $\\frac{7 + 9}{2} = 8$."
    ]
  },
  {
    "id": "EST_13_03",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 128, Ex. 5",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Um teste tem peso $60\\%$ e um projeto peso $40\\%$. Um aluno teve 14 no teste e 18 no projeto. Qual é a classificação média ponderada?",
    "tipo": "numero",
    "respostaCorreta": 15.6,
    "passosResolucao": [
      "$(14 \\times 0.60) + (18 \\times 0.40) = 8.4 + 7.2 = 15.6$."
    ]
  },
  {
    "id": "EST_13_04",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 132, Ex. 8",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Considere o conjunto de dados: $5, 8, 8, 11, 12, 12, 12, 14, 16$. Qual é a moda desta amostra?",
    "tipo": "numero",
    "respostaCorreta": 12,
    "passosResolucao": [
      "O valor 12 repete-se 3 vezes (maior frequência). Moda = 12."
    ]
  },
  {
    "id": "EST_13_05",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 134, Ex. 11",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A soma de 10 dados estatísticos é igual a 150. Qual é a média aritmética desse conjunto?",
    "tipo": "numero",
    "respostaCorreta": 15,
    "passosResolucao": [
      "$\\bar{x} = \\frac{150}{10} = 15$."
    ]
  },
  {
    "id": "EST_13_06",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 135, Ex. 14",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Considere a amostra ordenada $3, 5, x, 11, 14$, com mediana igual a 8. Qual é o valor da observação central $x$?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "Com 5 elementos ordenados, a mediana é o 3.º elemento: $x = 8$."
    ]
  },
  {
    "id": "EST_13_07",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 122, Ex. 4",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "A média das idades de 3 irmãos é 10 anos. Quando nasce um quarto irmão (idade 0), qual passa a ser a média das idades dos 4 irmãos?",
    "tipo": "numero",
    "respostaCorreta": 7.5,
    "passosResolucao": [
      "Soma: $3 \\times 10 + 0 = 30$. Nova média: $\\frac{30}{4} = 7.5$ anos."
    ]
  },
  {
    "id": "EST_13_08",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 126, Ex. 6",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere os números $4, 6, 8, 10, 12$. Se somarmos 3 a cada número, qual é a nova média aritmética?",
    "tipo": "numero",
    "respostaCorreta": 11,
    "passosResolucao": [
      "Média inicial = 8. Somando a constante 3, a nova média é $8 + 3 = 11$."
    ]
  },
  {
    "id": "EST_13_09",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 129, Ex. 9",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Numa turma de 20 alunos, 12 tiveram nota 14 e 8 tiveram nota 16. Calcule a média da turma.",
    "tipo": "numero",
    "respostaCorreta": 14.8,
    "passosResolucao": [
      "$\\bar{x} = \\frac{12 \\times 14 + 8 \\times 16}{20} = \\frac{168 + 128}{20} = \\frac{296}{20} = 14.8$."
    ]
  },
  {
    "id": "EST_13_10",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 131, Ex. 12",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "A amostra $1, 2, 2, 3, 3, 4$ tem duas modas. Trata-se de uma amostra amodal ou bimodal? (Escreva 'amodal' ou 'bimodal').",
    "tipo": "texto",
    "respostaCorreta": "bimodal",
    "passosResolucao": [
      "Como existem 2 valores com a máxima frequência (2 e 3), a distribuição é bimodal."
    ]
  },
  {
    "id": "EST_13_11",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 133, Ex. 15",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Considere os dados $10, 20, 30, 40, 50, 60, 70$. Qual é a mediana?",
    "tipo": "numero",
    "respostaCorreta": 40,
    "passosResolucao": [
      "São 7 observações ordenadas. O elemento central (4.º termo) é 40."
    ]
  },
  {
    "id": "EST_13_12",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 134, Ex. 17",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A mediana de uma amostra é muito afetada ou pouco afetada por valores discrepantes (outliers)? (Escreva 'muito' ou 'pouco').",
    "tipo": "texto",
    "respostaCorreta": "pouco",
    "passosResolucao": [
      "A mediana é uma medida resistente (robusta), sendo pouco afetada por valores extremos."
    ]
  },
  {
    "id": "EST_13_13",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 135, Ex. 19",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere a amostra $5, 5, 5, 5, 5$. Calcule o valor da média aritmética.",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Todos os valores são iguais a 5, logo a média é 5."
    ]
  },
  {
    "id": "EST_13_14",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 135, Ex. 21",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Se a soma dos desvios de uma amostra em relação à sua média for calculada, o resultado é sempre igual a que número?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Pela propriedade fundamental da média aritmética, $\\sum (x_i - \\bar{x}) = 0$."
    ]
  },
  {
    "id": "EST_13_15",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 135, Ex. 23",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se multiplicarmos todas as notas de uma turma por 2, a média das notas fica multiplicada por que número?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "A média é linear: se cada $x_i$ é multiplicado por $k$, a média fica multiplicada por $k = 2$."
    ]
  },
  {
    "id": "EST_13_16",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 128, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule a média aritmética dos números $10, 20, 30$.",
    "tipo": "numero",
    "respostaCorreta": 20,
    "passosResolucao": [
      "$\\frac{10 + 20 + 30}{3} = \\frac{60}{3} = 20$."
    ]
  },
  {
    "id": "EST_13_17",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 129, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere a amostra $4, 4, 7, 9, 9, 9, 12$. Qual é a moda?",
    "tipo": "numero",
    "respostaCorreta": 9,
    "passosResolucao": [
      "O número 9 aparece 3 vezes (frequência máxima). Moda = 9."
    ]
  },
  {
    "id": "EST_13_18",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 130, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a mediana da amostra ordenada $2, 5, 8, 11$?",
    "tipo": "numero",
    "respostaCorreta": 6.5,
    "passosResolucao": [
      "Com 4 elementos, a mediana é a média dos dois centrais: $\\frac{5 + 8}{2} = 6.5$."
    ]
  },
  {
    "id": "EST_13_19",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 131, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se a média de 5 números é 8, qual é a soma de todos os 5 números?",
    "tipo": "numero",
    "respostaCorreta": 40,
    "passosResolucao": [
      "$\\text{Soma} = 5 \\times 8 = 40$."
    ]
  },
  {
    "id": "EST_13_20",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 132, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Três testes têm notas 10, 14 e 18 com pesos iguais. Qual é a média final?",
    "tipo": "numero",
    "respostaCorreta": 14,
    "passosResolucao": [
      "$\\frac{10 + 14 + 18}{3} = \\frac{42}{3} = 14$."
    ]
  },
  {
    "id": "EST_13_21",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 133, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A amostra $1, 3, 5, 7, 9$ tem mediana igual a:",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "O elemento central de 5 elementos ordenados é o 3.º elemento: 5."
    ]
  },
  {
    "id": "EST_13_22",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 134, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se a cada elemento de uma amostra somarmos 4, a média fica:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Pela propriedade da média aritmética, $\\bar{x}_{novo} = \\bar{x} + 4$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Aumentada em 4 unidades"
      },
      {
        "id": "B",
        "texto": "Multiplicada por 4"
      },
      {
        "id": "C",
        "texto": "Inalterada"
      }
    ]
  },
  {
    "id": "EST_13_23",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 112, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Uma amostra com frequências iguais para todos os seus valores distintos diz-se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Se todos os valores têm a mesma frequência, não existe nenhum valor predominante (amodal)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Amodal (sem moda)"
      },
      {
        "id": "B",
        "texto": "Bimodal"
      },
      {
        "id": "C",
        "texto": "Multimodal"
      }
    ]
  },
  {
    "id": "EST_13_24",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 113, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se um aluno teve 12 com peso 2 e 18 com peso 1, qual é a média ponderada?",
    "tipo": "numero",
    "respostaCorreta": 14,
    "passosResolucao": [
      "$\\frac{12(2) + 18(1)}{3} = \\frac{24 + 18}{3} = \\frac{42}{3} = 14$."
    ]
  },
  {
    "id": "EST_13_25",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 114, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a moda de $2, 3, 3, 5, 5, 8$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Tanto o 3 como o 5 surgem 2 vezes, configurando uma distribuição bimodal."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Bimodal com modas 3 e 5"
      },
      {
        "id": "B",
        "texto": "3"
      },
      {
        "id": "C",
        "texto": "5"
      }
    ]
  },
  {
    "id": "EST_13_26",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 115, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A média aritmética de $-5, 0, 5$ é:",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$\\frac{-5 + 0 + 5}{3} = 0$."
    ]
  },
  {
    "id": "EST_13_27",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 116, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se retirarmos o valor extremo $100$ de uma amostra de números em torno de 10, a média:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Retirar um valor muito superior à média provoca o decréscimo da média."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Diminui"
      },
      {
        "id": "B",
        "texto": "Aumenta"
      },
      {
        "id": "C",
        "texto": "Fica igual"
      }
    ]
  },
  {
    "id": "EST_13_28",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 117, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Numa turma de 10 rapazes com média 12 e 10 raparigas com média 16, a média global é:",
    "tipo": "numero",
    "respostaCorreta": 14,
    "passosResolucao": [
      "$\\frac{10(12) + 10(16)}{20} = \\frac{120 + 160}{20} = 14$."
    ]
  },
  {
    "id": "EST_13_29",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 118, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor da mediana da amostra $7, 7, 7, 7, 7$?",
    "tipo": "numero",
    "respostaCorreta": 7,
    "passosResolucao": [
      "Todos os valores são 7, logo a mediana é 7."
    ]
  },
  {
    "id": "EST_13_30",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 119, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se multiplicarmos todos os dados por 5, a média fica:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A média é linear relativamente à multiplicação por escalares."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Multiplicada por 5"
      },
      {
        "id": "B",
        "texto": "Aumentada de 5"
      }
    ]
  },
  {
    "id": "EST_13_31",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 120, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A mediana de uma amostra de 100 dados ordenados é a média aritmética entre que observações?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Para $n = 100$, os termos centrais são a 50.ª e a 51.ª posição."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "A 50.ª e a 51.ª observação"
      },
      {
        "id": "B",
        "texto": "A 49.ª e a 50.ª observação"
      }
    ]
  },
  {
    "id": "EST_13_32",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 121, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule a média dos números $1, 2, 3, 4, 5$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$\\frac{1 + 2 + 3 + 4 + 5}{5} = \\frac{15}{5} = 3$."
    ]
  },
  {
    "id": "EST_13_33",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 122, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A soma dos desvios de todos os dados relativamente à sua média é:",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$\\sum (x_i - \\bar{x}) = 0$ sempre."
    ]
  },
  {
    "id": "EST_13_34",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 123, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Numa distribuição assimétrica à direita com cauda longa, habitualmente:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Os valores elevados na cauda direita puxam a média para valores superiores à mediana."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\text{Média} > \\text{Mediana}$"
      },
      {
        "id": "B",
        "texto": "$\\text{Média} < \\text{Mediana}$"
      }
    ]
  },
  {
    "id": "EST_13_35",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 124, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A nota mediana de um exame foi 13 valores. Isto significa que:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Por definição, a mediana divide a amostra ordenada em duas partes iguais (50% cada)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Pelo menos 50% dos alunos tiveram nota $\\le 13$"
      },
      {
        "id": "B",
        "texto": "A nota mais frequente foi 13"
      }
    ]
  },
  {
    "id": "EST_13_36",
    "topicoId": "topico_13",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Medidas de Localização (Média, Moda, Mediana)",
    "paginaInicio": 112,
    "paginaFim": 135,
    "manualRef": "Caderno 2, Pág. 125, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A média de 3 números é 10. Se dois deles são 8 e 11, qual é o terceiro?",
    "tipo": "numero",
    "respostaCorreta": 11,
    "passosResolucao": [
      "A soma é $3 \\times 10 = 30$. $8 + 11 = 19$. Terceiro número: $30 - 19 = 11$."
    ]
  },
  {
    "id": "EST_14_01",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 142, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Uma amostra tem primeiro quartil $Q_1 = 14$ e terceiro quartil $Q_3 = 29$. Determine o valor da amplitude interquartil ($AIQ$).",
    "tipo": "numero",
    "respostaCorreta": 15,
    "passosResolucao": [
      "$AIQ = Q_3 - Q_1 = 29 - 14 = 15$."
    ]
  },
  {
    "id": "EST_14_02",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 148 (Exame Adaptado)",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Num diagrama de extremos e quartis (boxplot), que percentagem de observações se encontra entre $Q_1$ e $Q_3$? (Indique apenas o número).",
    "tipo": "numero",
    "respostaCorreta": 50,
    "passosResolucao": [
      "$75\\% - 25\\% = 50\\%$."
    ]
  },
  {
    "id": "EST_14_03",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 154, Ex. 6",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Numa amostra estatística, a variância foi calculada em $s^2 = 16$. Determine o valor do desvio-padrão amostral $s$.",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "$s = \\sqrt{16} = 4$."
    ]
  },
  {
    "id": "EST_14_04",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 158, Ex. 9",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Na regra dos boxplots, um valor superior é outlier se ultrapassar $Q_3 + 1.5 \\times AIQ$. Para $Q_3 = 20$ e $AIQ = 6$, qual é esse limite?",
    "tipo": "numero",
    "respostaCorreta": 29,
    "passosResolucao": [
      "$20 + 1.5 \\times 6 = 20 + 9 = 29$."
    ]
  },
  {
    "id": "EST_14_05",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 159, Ex. 12",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Uma amostra de temperaturas tem valor mínimo de $11^\\circ\\text{C}$ e valor máximo de $34^\\circ\\text{C}$. Calcule a amplitude total da amostra.",
    "tipo": "numero",
    "respostaCorreta": 23,
    "passosResolucao": [
      "$34 - 11 = 23$."
    ]
  },
  {
    "id": "EST_14_06",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 160, Ex. 15",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se a todos os dados de uma amostra for somada a constante 5, o desvio-padrão altera-se ou mantém-se? (Escreva 'altera' ou 'mantem').",
    "tipo": "texto",
    "respostaCorreta": "mantem",
    "passosResolucao": [
      "Somar uma constante desloca todos os pontos sem alterar a dispersão. O desvio-padrão mantém-se."
    ]
  },
  {
    "id": "EST_14_07",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 144, Ex. 3",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O segundo quartil $Q_2$ de qualquer distribuição estatística coincide sempre com qual medida de localização? (Escreva 'media', 'mediana' ou 'moda').",
    "tipo": "texto",
    "respostaCorreta": "mediana",
    "passosResolucao": [
      "$Q_2$ divide a amostra a 50%, coincidindo exatamente com a mediana."
    ]
  },
  {
    "id": "EST_14_08",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 146, Ex. 5",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Num conjunto de dados constantes $7, 7, 7, 7, 7$, qual é o valor da variância amostral $s^2$?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Não há qualquer dispersão em dados idênticos, logo a variância é 0."
    ]
  },
  {
    "id": "EST_14_09",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 150, Ex. 8",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Num boxplot, o limite inferior de outliers é $Q_1 - 1.5 \\times AIQ$. Para $Q_1 = 15$ e $AIQ = 4$, qual é esse valor limite?",
    "tipo": "numero",
    "respostaCorreta": 9,
    "passosResolucao": [
      "$15 - 1.5 \\times 4 = 15 - 6 = 9$."
    ]
  },
  {
    "id": "EST_14_10",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 152, Ex. 11",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere a amostra ordenada $2, 4, 6, 8, 10, 12, 14, 16$. O primeiro quartil $Q_1$ corresponde à mediana da primeira metade ($2, 4, 6, 8$). Calcule $Q_1$.",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Mediana de $2, 4, 6, 8$ é $\\frac{4 + 6}{2} = 5$."
    ]
  },
  {
    "id": "EST_14_11",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 155, Ex. 14",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O desvio-padrão de uma amostra pode assumir valores estritamente negativos? ('sim' ou 'nao').",
    "tipo": "texto",
    "respostaCorreta": "nao",
    "passosResolucao": [
      "O desvio-padrão é a raiz quadrada positiva da variância, sendo sempre $s \\ge 0$."
    ]
  },
  {
    "id": "EST_14_12",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 157, Ex. 17",
    "origem": "Exercício de Fixação",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se multiplicarmos todos os dados por 3, o desvio-padrão fica multiplicado por que número?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$s(3X) = |3| \\times s(X) = 3s(X)$."
    ]
  },
  {
    "id": "EST_14_13",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 159, Ex. 20",
    "origem": "Desafio Analítico",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Calcule a amplitude interquartil de uma amostra com $Q_1 = 8.5$ e $Q_3 = 21.5$.",
    "tipo": "numero",
    "respostaCorreta": 13,
    "passosResolucao": [
      "$AIQ = 21.5 - 8.5 = 13$."
    ]
  },
  {
    "id": "EST_14_14",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 160, Ex. 22",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 5,
    "enunciado": "Num boxplot, que percentagem mínima de observações se encontra abaixo do terceiro quartil $Q_3$? (Indique apenas o número).",
    "tipo": "numero",
    "respostaCorreta": 75,
    "passosResolucao": [
      "Por definição de terceiro quartil, 75% dos dados situam-se abaixo de $Q_3$."
    ]
  },
  {
    "id": "EST_14_15",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 160, Ex. 25",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Entre a amplitude total e a amplitude interquartil ($AIQ$), qual das duas é menos sensível a outliers? (Escreva 'total' ou 'interquartil').",
    "tipo": "texto",
    "respostaCorreta": "interquartil",
    "passosResolucao": [
      "A amplitude interquartil ignora os 25% extremos em cada cauda, sendo resistente a outliers."
    ]
  },
  {
    "id": "EST_14_16",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 152, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se a variância amostral de uma variável é $s^2 = 49$, qual é o desvio-padrão $s$?",
    "tipo": "numero",
    "respostaCorreta": 7,
    "passosResolucao": [
      "$s = \\sqrt{49} = 7$."
    ]
  },
  {
    "id": "EST_14_17",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 153, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Num boxplot, a linha vertical no interior da caixa representa:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A barra interior da caixa de um boxplot indica sempre o segundo quartil / mediana."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "A mediana ($Q_2$)"
      },
      {
        "id": "B",
        "texto": "A média"
      },
      {
        "id": "C",
        "texto": "A moda"
      }
    ]
  },
  {
    "id": "EST_14_18",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 154, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $Q_1 = 10$ e $Q_3 = 25$, determine a amplitude interquartil $AIQ$.",
    "tipo": "numero",
    "respostaCorreta": 15,
    "passosResolucao": [
      "$AIQ = 25 - 10 = 15$."
    ]
  },
  {
    "id": "EST_14_19",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 155, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O desvio-padrão de um conjunto de dados constantes $5, 5, 5, 5$ é:",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Como não há variabilidade entre os valores, o desvio-padrão é 0."
    ]
  },
  {
    "id": "EST_14_20",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 156, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A amplitude total de uma amostra com mínimo 4 e máximo 22 é:",
    "tipo": "numero",
    "respostaCorreta": 18,
    "passosResolucao": [
      "$22 - 4 = 18$."
    ]
  },
  {
    "id": "EST_14_21",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 157, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Num boxplot, que percentagem de observações se encontra dentro da caixa (entre $Q_1$ e $Q_3$)?",
    "tipo": "numero",
    "respostaCorreta": 50,
    "passosResolucao": [
      "$75\\% - 25\\% = 50\\%$."
    ]
  },
  {
    "id": "EST_14_22",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 158, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se somarmos 10 a todos os dados de uma amostra, a variância:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A dispersão não varia quando se translada a distribuição por adição de uma constante."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Mantém-se inalterada"
      },
      {
        "id": "B",
        "texto": "Aumenta em 10"
      },
      {
        "id": "C",
        "texto": "Aumenta em 100"
      }
    ]
  },
  {
    "id": "EST_14_23",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 159, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se multiplicarmos todos os dados por 4, o desvio-padrão fica:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$s(4X) = |4|s(X) = 4s(X)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Multiplicado por 4"
      },
      {
        "id": "B",
        "texto": "Multiplicado por 16"
      },
      {
        "id": "C",
        "texto": "Inalterado"
      }
    ]
  },
  {
    "id": "EST_14_24",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 136, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se multiplicarmos todos os dados por 4, a variância fica:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$Var(kX) = k^2 Var(X) = 16 Var(X)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Multiplicada por 16 ($4^2$)"
      },
      {
        "id": "B",
        "texto": "Multiplicada por 4"
      }
    ]
  },
  {
    "id": "EST_14_25",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 137, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O limite superior para identificar outliers à direita no boxplot é dado por:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Critério clássico de Tukey para valores atípicos (outliers)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$Q_3 + 1.5 \\times AIQ$"
      },
      {
        "id": "B",
        "texto": "$Q_3 + 3 \\times AIQ$"
      },
      {
        "id": "C",
        "texto": "$\\text{Máximo} + 1.5$"
      }
    ]
  },
  {
    "id": "EST_14_26",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 138, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Para $Q_1 = 20$ e $AIQ = 8$, qual é o limite inferior de outliers ($Q_1 - 1.5 \\times AIQ$)?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "$20 - 1.5(8) = 20 - 12 = 8$."
    ]
  },
  {
    "id": "EST_14_27",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 139, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O primeiro quartil $Q_1$ deixa abaixo de si que percentagem de dados?",
    "tipo": "numero",
    "respostaCorreta": 25,
    "passosResolucao": [
      "Por definição, $Q_1$ corresponde ao percentil 25 (25%)."
    ]
  },
  {
    "id": "EST_14_28",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 140, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O terceiro quartil $Q_3$ deixa acima de si que percentagem de dados?",
    "tipo": "numero",
    "respostaCorreta": 25,
    "passosResolucao": [
      "Deixa 75% abaixo e os restantes 25% acima."
    ]
  },
  {
    "id": "EST_14_29",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 141, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Entre o desvio-padrão e a amplitude interquartil, qual é mais resistente a valores discrepantes?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O desvio-padrão é fortemente sensível a extremos, enquanto a $AIQ$ é uma medida robusta."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "A amplitude interquartil ($AIQ$)"
      },
      {
        "id": "B",
        "texto": "O desvio-padrão ($s$)"
      }
    ]
  },
  {
    "id": "EST_14_30",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 142, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se os dados são $1, 3, 5$, qual é o desvio do valor $5$ em relação à média ($\\bar{x} = 3$)?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$x_i - \\bar{x} = 5 - 3 = 2$."
    ]
  },
  {
    "id": "EST_14_31",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 143, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor mínimo que o desvio-padrão de uma amostra pode assumir?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "O desvio-padrão é sempre não negativo: $s \\ge 0$ (sendo 0 se todos os dados forem iguais)."
    ]
  },
  {
    "id": "EST_14_32",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 144, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere a amostra $2, 4, 6, 8, 10$. A mediana da amostra é:",
    "tipo": "numero",
    "respostaCorreta": 6,
    "passosResolucao": [
      "O termo do meio é 6."
    ]
  },
  {
    "id": "EST_14_33",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 145, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Num boxplot, os 'bigodes' (whiskers) estendem-se até:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Estendem-se até à observação mais distante que não ultrapasse os limites de outliers."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Aos valores não discrepantes mais extremos"
      },
      {
        "id": "B",
        "texto": "Apenas à média"
      }
    ]
  },
  {
    "id": "EST_14_34",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 146, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $s^2 = 0.64$, o desvio-padrão $s$ é:",
    "tipo": "numero",
    "respostaCorreta": 0.8,
    "passosResolucao": [
      "$s = \\sqrt{0.64} = 0.8$."
    ]
  },
  {
    "id": "EST_14_35",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 147, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se a amplitude total é 30 e o mínimo é 15, qual é o valor máximo?",
    "tipo": "numero",
    "respostaCorreta": 45,
    "passosResolucao": [
      "$\\text{Máximo} = 15 + 30 = 45$."
    ]
  },
  {
    "id": "EST_14_36",
    "topicoId": "topico_14",
    "dominio": "estatistica",
    "temaNome": "Estatística",
    "subtema": "Dispersão, Quartis e Boxplot",
    "paginaInicio": 136,
    "paginaFim": 160,
    "manualRef": "Caderno 2, Pág. 148, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantos quartis dividem a distribuição em quatro partes com igual número de observações?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "São 3 quartis: $Q_1$, $Q_2$ e $Q_3$."
    ]
  }
];
