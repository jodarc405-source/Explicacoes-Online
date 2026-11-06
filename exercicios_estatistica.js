// Caderno 2: Estatística (Págs. 112 a 160) - 30 Itens
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
  }
];
