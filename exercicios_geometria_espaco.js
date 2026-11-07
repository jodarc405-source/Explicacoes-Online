// Caderno 1: Geometria no Plano e Espaço Parte 2 (Tópicos 7, 8) - 72 Itens
const EXERCICIOS_GEOMETRIA_ESPACO = [
  {
    "id": "GEO_7_01",
    "manualRef": "Caderno 1, Pág. 130, Ex. 1",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule o produto escalar $\\vec{u} \\cdot \\vec{v}$, sendo $\\vec{u} = (3, -2)$ e $\\vec{v} = (4, 5)$.",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "Fórmula do produto escalar analítico: $\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2$.",
      "$\\vec{u} \\cdot \\vec{v} = 3(4) + (-2)(5) = 12 - 10 = 2$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_02",
    "manualRef": "Caderno 1, Pág. 134, Ex. 3",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Determine o valor de $k$ para o qual os vetores $\\vec{u} = (k, 4)$ e $\\vec{v} = (2, -3)$ são perpendiculares.",
    "tipo": "numero",
    "respostaCorreta": 6,
    "passosResolucao": [
      "Dois vetores são perpendiculares se e só se $\\vec{u} \\cdot \\vec{v} = 0$.",
      "$2k + 4(-3) = 0 \\iff 2k - 12 = 0 \\iff 2k = 12 \\iff k = 6$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_03",
    "manualRef": "Caderno 1, Pág. 136, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Sabendo que $\\|\\vec{u}\\| = 4$, $\\|\\vec{v}\\| = 5$ e o ângulo formado entre eles é de $60^\\circ$, determine $\\vec{u} \\cdot \\vec{v}$.",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "Fórmula geométrica do produto escalar: $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(\\theta)$.",
      "$\\vec{u} \\cdot \\vec{v} = 4 \\times 5 \\times \\cos(60^\\circ) = 20 \\times 0.5 = 10$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_04",
    "manualRef": "Caderno 1, Pág. 138, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Se dois vetores não nulos $\\vec{u}$ e $\\vec{v}$ têm produto escalar negativo ($\\vec{u} \\cdot \\vec{v} < 0$), o ângulo $\\theta$ formado entre eles é:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Agudo ($0^\\circ \\le \\theta < 90^\\circ$)"
      },
      {
        "id": "B",
        "texto": "Reto ($\\theta = 90^\\circ$)"
      },
      {
        "id": "C",
        "texto": "Obtuso ($90^\\circ < \\theta \\le 180^\\circ$)"
      },
      {
        "id": "D",
        "texto": "Nulo ($\\theta = 0^\\circ$)"
      }
    ],
    "respostaCorreta": "C",
    "passosResolucao": [
      "Como $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(\\theta)$, o sinal do produto escalar depende exclusivamente de $\\cos(\\theta)$.",
      "O cosseno é estritamente negativo no segundo quadrante, logo o ângulo é obtuso."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_05",
    "manualRef": "Caderno 1, Pág. 140, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "No espaço $Oxyz$, calcule o produto escalar dos vetores $\\vec{a} = (1, -1, 2)$ e $\\vec{b} = (3, 2, 1)$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$\\vec{a} \\cdot \\vec{b} = (1)(3) + (-1)(2) + (2)(1) = 3 - 2 + 2 = 3$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_06",
    "manualRef": "Caderno 1, Pág. 141, Ex. 3",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Seja $\\vec{u}$ um vetor tal que $\\|\\vec{u}\\| = 7$. Calcule o valor de $\\vec{u} \\cdot \\vec{u}$.",
    "tipo": "numero",
    "respostaCorreta": 49,
    "passosResolucao": [
      "Propriedade fundamental do produto escalar: $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$.",
      "Logo, $\\vec{u} \\cdot \\vec{u} = 7^2 = 49$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_07",
    "manualRef": "Caderno 1, Pág. 142, Ex. 1",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é o valor do cosseno do ângulo entre os vetores $\\vec{u} = (1, 0)$ e $\\vec{v} = (0, 5)$?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$\\vec{u} \\cdot \\vec{v} = 1(0) + 0(5) = 0$.",
      "Como $\\vec{u} \\cdot \\vec{v} = 0$, $\\cos(\\theta) = \\frac{0}{\\|\\vec{u}\\| \\|\\vec{v}\\|} = 0$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_08",
    "manualRef": "Caderno 1, Pág. 142, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Determine o valor de $p$ para que $\\vec{u} = (p, 2, -1)$ e $\\vec{v} = (3, 1, 4)$ sejam ortogonais no espaço.",
    "tipo": "numero",
    "respostaCorreta": -0.67,
    "passosResolucao": [
      "$\\vec{u} \\cdot \\vec{v} = 3p + 2(1) + (-1)(4) = 0 \\iff 3p + 2 - 4 = 0$.",
      "$3p = 2 \\iff p = \\frac{2}{3} \\approx 0.67$ (ou $2/3$)."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_09",
    "manualRef": "Caderno 1, Pág. 143, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual das seguintes afirmações sobre o produto escalar de dois vetores é FALSA?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "É comutativo: $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$"
      },
      {
        "id": "B",
        "texto": "É distributivo: $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w}$"
      },
      {
        "id": "C",
        "texto": "O resultado de $\\vec{u} \\cdot \\vec{v}$ é um vetor"
      },
      {
        "id": "D",
        "texto": "$\\vec{u} \\cdot \\vec{u} \\ge 0$ para qualquer vetor $\\vec{u}$"
      }
    ],
    "respostaCorreta": "C",
    "passosResolucao": [
      "O produto escalar é uma operação cujo resultado é um número real (escalar), e nunca um vetor."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_10",
    "manualRef": "Caderno 1, Pág. 143, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Sejam $\\vec{u}$ e $\\vec{v}$ tais que $\\|\\vec{u}\\| = 3$, $\\|\\vec{v}\\| = 2$ e $\\vec{u} \\cdot \\vec{v} = 6$. Qual é o ângulo $\\theta$ em graus formado por eles?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\|\\vec{v}\\|} = \\frac{6}{3 \\times 2} = \\frac{6}{6} = 1$.",
      "$\\cos(\\theta) = 1 \\implies \\theta = 0^\\circ$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_11",
    "manualRef": "Caderno 1, Pág. 144, Ex. 1",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Calcule $(\\vec{u} + \\vec{v}) \\cdot \\vec{u}$, sabendo que $\\|\\vec{u}\\| = 4$ e $\\vec{u} \\cdot \\vec{v} = 5$.",
    "tipo": "numero",
    "respostaCorreta": 21,
    "passosResolucao": [
      "Pela propriedade distributiva: $(\\vec{u} + \\vec{v}) \\cdot \\vec{u} = \\vec{u} \\cdot \\vec{u} + \\vec{v} \\cdot \\vec{u}$.",
      "$= \\|\\vec{u}\\|^2 + \\vec{u} \\cdot \\vec{v} = 4^2 + 5 = 16 + 5 = 21$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_12",
    "manualRef": "Caderno 1, Pág. 144, Ex. 4",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "No plano, a reta $r$ tem vetor diretor $\\vec{d} = (2, 5)$. Um vetor normal (perpendicular) à reta $r$ pode ser:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\vec{n} = (5, -2)$"
      },
      {
        "id": "B",
        "texto": "$\\vec{n} = (2, 5)$"
      },
      {
        "id": "C",
        "texto": "$\\vec{n} = (-2, -5)$"
      },
      {
        "id": "D",
        "texto": "$\\vec{n} = (4, 10)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Calculando o produto escalar: $\\vec{d} \\cdot \\vec{n} = 2(5) + 5(-2) = 10 - 10 = 0$.",
      "Portanto, $\\vec{n} = (5, -2)$ é ortogonal ao vetor diretor da reta."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_13",
    "manualRef": "Caderno 1, Pág. 145, Ex. 2",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Seja $[AB]$ o diâmetro de uma circunferência e $P$ um ponto qualquer pertencente à circunferência diferente de $A$ e $B$. Qual é o valor de $\\vec{PA} \\cdot \\vec{PB}$?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Qualquer triângulo inscrito numa semicircunferência é retângulo no vértice $P$ oposto ao diâmetro $[AB]$ (Teorema de Tales).",
      "Logo, os vetores $\\vec{PA}$ e $\\vec{PB}$ são perpendiculares, sendo o seu produto escalar nulo: 0."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_14",
    "manualRef": "Caderno 1, Pág. 145, Ex. 5",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Calcule $\\vec{u} \\cdot \\vec{v}$ sabendo que $\\|\\vec{u}\\| = 6$, $\\|\\vec{v}\\| = 2$ e $\\theta = 180^\\circ$.",
    "tipo": "numero",
    "respostaCorreta": -12,
    "passosResolucao": [
      "$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(180^\\circ) = 6 \\times 2 \\times (-1) = -12$."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_15",
    "manualRef": "Caderno 1, Pág. 145, Ex. 7",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Dois vetores $\\vec{u}$ e $\\vec{v}$ dizem-se ortogonais se e só se o ângulo entre eles for de:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$90^\\circ$ (ou $\\frac{\\pi}{2}$ rad)"
      },
      {
        "id": "B",
        "texto": "$0^\\circ$"
      },
      {
        "id": "C",
        "texto": "$45^\\circ$"
      },
      {
        "id": "D",
        "texto": "$180^\\circ$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A ortogonalidade entre dois vetores não nulos corresponde a um ângulo de $90^\\circ$ onde o produto escalar se anula."
    ],
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145
  },
  {
    "id": "GEO_7_16",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 142, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule $\\vec{u} \\cdot \\vec{v}$ sendo $\\vec{u} = (2, 5)$ e $\\vec{v} = (-5, 2)$.",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$\\vec{u} \\cdot \\vec{v} = 2(-5) + 5(2) = -10 + 10 = 0$."
    ]
  },
  {
    "id": "GEO_7_17",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 143, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\vec{u} \\cdot \\vec{v} = 0$ para vetores não nulos, que ângulo formam?",
    "tipo": "numero",
    "respostaCorreta": 90,
    "passosResolucao": [
      "Vetores ortogonais formam um ângulo de $90^\\circ$."
    ]
  },
  {
    "id": "GEO_7_18",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 144, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule o produto escalar de $\\vec{a} = (1, 2, 3)$ por $\\vec{b} = (4, -2, 1)$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$1(4) + 2(-2) + 3(1) = 4 - 4 + 3 = 3$."
    ]
  },
  {
    "id": "GEO_7_19",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 126, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Sabendo que $\\|\\vec{u}\\| = 3$, $\\|\\vec{v}\\| = 4$ e $\\theta = 0^\\circ$, determine $\\vec{u} \\cdot \\vec{v}$.",
    "tipo": "numero",
    "respostaCorreta": 12,
    "passosResolucao": [
      "$3 \\times 4 \\times \\cos(0^\\circ) = 12 \\times 1 = 12$."
    ]
  },
  {
    "id": "GEO_7_20",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 127, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine $k$ para que $(k, 2)$ e $(3, -6)$ sejam perpendiculares.",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "$3k + 2(-6) = 0 \\iff 3k = 12 \\iff k = 4$."
    ]
  },
  {
    "id": "GEO_7_21",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 128, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\vec{u} \\cdot \\vec{u} = 25$, qual é a norma do vetor $\\vec{u}$?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "$\\|\\vec{u}\\| = \\sqrt{25} = 5$."
    ]
  },
  {
    "id": "GEO_7_22",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 129, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O produto escalar de um vetor $\\vec{u}$ pelo vetor nulo $\\vec{0}$ é igual a:",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$\\vec{u} \\cdot \\vec{0} = 0$."
    ]
  },
  {
    "id": "GEO_7_23",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 130, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\theta = 180^\\circ$, o valor de $\\cos(\\theta)$ é:",
    "tipo": "numero",
    "respostaCorreta": -1,
    "passosResolucao": [
      "$\\cos(180^\\circ) = -1$."
    ]
  },
  {
    "id": "GEO_7_24",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 131, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\|\\vec{u}\\| = 6$, $\\|\\vec{v}\\| = 2$ e $\\vec{u} \\cdot \\vec{v} = -6$, qual é o valor de $\\cos(\\theta)$?",
    "tipo": "numero",
    "respostaCorreta": -0.5,
    "passosResolucao": [
      "$\\cos(\\theta) = \\frac{-6}{6 \\times 2} = \\frac{-6}{12} = -0.5$."
    ]
  },
  {
    "id": "GEO_7_25",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 132, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual das seguintes expressões representa o Teorema de Pitágoras vetorial?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Quando $\\vec{u} \\cdot \\vec{v} = 0$, o termo cruzado anula-se, resultando no Teorema de Pitágoras."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\|\\vec{u} + \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 + \\|\\vec{v}\\|^2$ (se $\\vec{u} \\perp \\vec{v}$)"
      },
      {
        "id": "B",
        "texto": "$\\vec{u} \\cdot \\vec{v} = 1$"
      }
    ]
  },
  {
    "id": "GEO_7_26",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 133, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja $\\vec{u} = (1, 1)$ e $\\vec{v} = (1, 0)$. Calcule $\\vec{u} \\cdot \\vec{v}$.",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "$1(1) + 1(0) = 1$."
    ]
  },
  {
    "id": "GEO_7_27",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 134, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O quadrado escalar $(\\vec{u} - \\vec{v})^2$ desenvolve-se como:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Desenvolvimento de quadrado de binómio escalar."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\|\\vec{u}\\|^2 - 2\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$"
      },
      {
        "id": "B",
        "texto": "$\\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2$"
      }
    ]
  },
  {
    "id": "GEO_7_28",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 135, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule $\\vec{u} \\cdot \\vec{v}$ para $\\vec{u} = (3, 0)$ e $\\vec{v} = (5, 0)$.",
    "tipo": "numero",
    "respostaCorreta": 15,
    "passosResolucao": [
      "$3(5) + 0(0) = 15$."
    ]
  },
  {
    "id": "GEO_7_29",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 136, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se dois vetores têm a mesma direção e sentido oposto, o produto escalar é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\cos(180^\\circ) = -1$, logo $\\vec{u} \\cdot \\vec{v} = -\\|\\vec{u}\\| \\|\\vec{v}\\|$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Negativo: $-\\|\\vec{u}\\| \\|\\vec{v}\\|$"
      },
      {
        "id": "B",
        "texto": "Positivo"
      },
      {
        "id": "C",
        "texto": "Nulo"
      }
    ]
  },
  {
    "id": "GEO_7_30",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 137, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine $m$ para que $(m, 3, 1)$ e $(2, -2, 4)$ sejam ortogonais.",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "$2m + 3(-2) + 1(4) = 0 \\iff 2m - 6 + 4 = 0 \\iff 2m = 2 \\iff m = 1$."
    ]
  },
  {
    "id": "GEO_7_31",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 138, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor de $\\vec{u} \\cdot \\vec{v}$ se $\\theta = 90^\\circ$?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$\\cos(90^\\circ) = 0$, logo o produto escalar é 0."
    ]
  },
  {
    "id": "GEO_7_32",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 139, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\|\\vec{u}\\| = 5$ e $\\|\\vec{v}\\| = 5$ com $\\theta = 60^\\circ$, determine $\\vec{u} \\cdot \\vec{v}$.",
    "tipo": "numero",
    "respostaCorreta": 12.5,
    "passosResolucao": [
      "$5 \\times 5 \\times 0.5 = 12.5$."
    ]
  },
  {
    "id": "GEO_7_33",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 140, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A desigualdade de Cauchy-Schwarz para vetores afirma que:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Como $|\\cos(\\theta)| \\le 1$, temos $|\\vec{u} \\cdot \\vec{v}| \\le \\|\\vec{u}\\| \\|\\vec{v}\\|$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$|\\vec{u} \\cdot \\vec{v}| \\le \\|\\vec{u}\\| \\|\\vec{v}\\|$"
      },
      {
        "id": "B",
        "texto": "$|\\vec{u} \\cdot \\vec{v}| \\ge \\|\\vec{u}\\| \\|\\vec{v}\\|$"
      }
    ]
  },
  {
    "id": "GEO_7_34",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 141, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule $\\vec{i} \\cdot \\vec{j}$ no referencial ortonormado plano.",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Os vetores da base canónica são perpendiculares entre si, logo o produto escalar é 0."
    ]
  },
  {
    "id": "GEO_7_35",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 142, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\vec{u} \\cdot \\vec{v} > 0$, o ângulo entre eles é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O cosseno é positivo no 1.º quadrante, logo o ângulo é agudo."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Agudo"
      },
      {
        "id": "B",
        "texto": "Obtuso"
      },
      {
        "id": "C",
        "texto": "Reto"
      }
    ]
  },
  {
    "id": "GEO_7_36",
    "topicoId": "topico_7",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Produto Escalar e Perpendicularidade",
    "paginaInicio": 126,
    "paginaFim": 145,
    "manualRef": "Caderno 1, Pág. 143, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule $(\\vec{u} + \\vec{v}) \\cdot (\\vec{u} - \\vec{v})$ sabendo que $\\|\\vec{u}\\| = 5$ e $\\|\\vec{v}\\| = 3$.",
    "tipo": "numero",
    "respostaCorreta": 16,
    "passosResolucao": [
      "$= \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2 = 5^2 - 3^2 = 25 - 9 = 16$."
    ]
  },
  {
    "id": "GEO_8_01",
    "manualRef": "Caderno 1, Pág. 150, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é um vetor normal ao plano definido pela equação cartesiana $3x - 2y + 5z - 11 = 0$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\vec{n} = (3, -2, 5)$"
      },
      {
        "id": "B",
        "texto": "$\\vec{n} = (3, 2, 5)$"
      },
      {
        "id": "C",
        "texto": "$\\vec{n} = (-2, 5, -11)$"
      },
      {
        "id": "D",
        "texto": "$\\vec{n} = (3, -2, -11)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Na equação geral do plano $Ax + By + Cz + D = 0$, os coeficientes $(A, B, C)$ definem as coordenadas de um vetor perpendicular (normal) ao plano.",
      "Portanto, $\\vec{n} = (3, -2, 5)$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_02",
    "manualRef": "Caderno 1, Pág. 154, Ex. 4",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Determine o termo independente $d$ da equação do plano $2x + y - 3z + d = 0$ que passa pelo ponto $P(1, 4, 2)$.",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Substituindo $P(1, 4, 2)$ na equação do plano: $2(1) + 4 - 3(2) + d = 0$.",
      "$2 + 4 - 6 + d = 0 \\iff 0 + d = 0 \\iff d = 0$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_03",
    "manualRef": "Caderno 1, Pág. 158, Ex. 1",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Os planos $\\alpha: 2x - 4y + z = 1$ e $\\beta: kx - 8y + 2z = 7$ são estritamente paralelos. Determine o valor de $k$.",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "Os vetores normais $\\vec{n}_\\alpha = (2, -4, 1)$ e $\\vec{n}_\\beta = (k, -8, 2)$ têm de ser colineares.",
      "A razão de proporcionalidade é $\\frac{-8}{-4} = 2 = \\frac{2}{1}$, logo $k = 2 \\times 2 = 4$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_04",
    "manualRef": "Caderno 1, Pág. 160, Ex. 3",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é a equação do plano paralelo ao plano $xOy$ que passa pelo ponto $A(4, -5, 6)$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$z = 6$"
      },
      {
        "id": "B",
        "texto": "$x = 4$"
      },
      {
        "id": "C",
        "texto": "$y = -5$"
      },
      {
        "id": "D",
        "texto": "$4x - 5y = 6$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Qualquer plano paralelo ao plano coordenado $xOy$ é caracterizado por ter cota constante: $z = k$.",
      "Como o plano passa por $A(4, -5, 6)$, a cota é $6$, logo $z = 6$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_05",
    "manualRef": "Caderno 1, Pág. 162, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Determine o valor de $m$ para o qual a reta perpendicular ao plano $x - 2y + mz = 5$ tem a direção do vetor $\\vec{v} = (2, -4, 6)$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "O vetor normal ao plano é $\\vec{n} = (1, -2, m)$.",
      "Para ter a mesma direção de $\\vec{v} = (2, -4, 6)$, os vetores devem ser colineares: $(2, -4, 6) = 2(1, -2, m)$.",
      "Logo, $2m = 6 \\iff m = 3$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_06",
    "manualRef": "Caderno 1, Pág. 163, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Qual é a interseção do plano $2x + 3y + 4z = 12$ com o eixo das abcissas ($Ox$)?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(6, 0, 0)$"
      },
      {
        "id": "B",
        "texto": "$(0, 4, 0)$"
      },
      {
        "id": "C",
        "texto": "$(0, 0, 3)$"
      },
      {
        "id": "D",
        "texto": "$(12, 0, 0)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "No eixo $Ox$, temos $y = 0$ e $z = 0$.",
      "Substituindo na equação: $2x + 0 + 0 = 12 \\iff 2x = 12 \\iff x = 6$. O ponto é $(6, 0, 0)$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_07",
    "manualRef": "Caderno 1, Pág. 164, Ex. 1",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Dois planos com vetores normais $\\vec{n}_1 = (1, 2, -1)$ e $\\vec{n}_2 = (3, -1, 1)$ são:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Perpendiculares entre si"
      },
      {
        "id": "B",
        "texto": "Paralelos coincidentes"
      },
      {
        "id": "C",
        "texto": "Paralelos não coincidentes"
      },
      {
        "id": "D",
        "texto": "Oblíquos com ângulo agudo"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Calculamos o produto escalar dos seus vetores normais:",
      "$\\vec{n}_1 \\cdot \\vec{n}_2 = 1(3) + 2(-1) + (-1)(1) = 3 - 2 - 1 = 0$.",
      "Como o produto escalar é nulo, os planos são perpendiculares."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_08",
    "manualRef": "Caderno 1, Pág. 165, Ex. 3",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Considere os pontos $A(2, 0, 0)$ e $B(0, 4, 0)$. Qual é a abcissa do ponto médio de $[AB]$?",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "Abcissa do ponto médio: $x_M = \\frac{2 + 0}{2} = 1$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_09",
    "manualRef": "Caderno 1, Pág. 166, Ex. 4",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A equação $x = 4$ no espaço tridimensional representa:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Um plano paralelo a $yOz$"
      },
      {
        "id": "B",
        "texto": "Uma reta paralela a $Ox$"
      },
      {
        "id": "C",
        "texto": "Um ponto sobre o eixo $Ox$"
      },
      {
        "id": "D",
        "texto": "Um plano perpendicular a $yOz$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "No espaço tridimensional, uma única equação linear em $x$ ($x = k$) define o plano paralelo ao plano coordenado $yOz$ a 4 unidades de distância."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_10",
    "manualRef": "Caderno 1, Pág. 167, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Qual é a distância da origem $O(0, 0, 0)$ ao plano de equação $x = 5$?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "O plano $x = 5$ é paralelo ao plano $yOz$, e a sua distância à origem é simplesmente $|5 - 0| = 5$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_11",
    "manualRef": "Caderno 1, Pág. 168, Ex. 1",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "O ponto $P(1, 2, k)$ pertence ao plano $3x + y - 2z = 1$. Determine o valor de $k$.",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "Substituindo $P$: $3(1) + 2 - 2k = 1 \\iff 5 - 2k = 1$.",
      "$-2k = -4 \\iff k = 2$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_12",
    "manualRef": "Caderno 1, Pág. 168, Ex. 5",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A reta perpendicular ao plano $2x - y + 3z = 7$ que passa pela origem tem como vetor diretor:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\vec{v} = (2, -1, 3)$"
      },
      {
        "id": "B",
        "texto": "$\\vec{v} = (2, 1, 3)$"
      },
      {
        "id": "C",
        "texto": "$\\vec{v} = (1, 2, -1)$"
      },
      {
        "id": "D",
        "texto": "$\\vec{v} = (7, 0, 0)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Uma reta perpendicular a um plano tem por vetor diretor o próprio vetor normal ao plano: $\\vec{n} = (2, -1, 3)$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_13",
    "manualRef": "Caderno 1, Pág. 169, Ex. 3",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Seja $[AB]$ com $A(1, 1, 1)$ e $B(3, 3, 3)$. O plano mediador de $[AB]$ passa pelo ponto médio $M$. Qual é a soma das coordenadas de $M$?",
    "tipo": "numero",
    "respostaCorreta": 6,
    "passosResolucao": [
      "As coordenadas do ponto médio são $M(2, 2, 2)$.",
      "A soma das suas coordenadas é $2 + 2 + 2 = 6$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_14",
    "manualRef": "Caderno 1, Pág. 169, Ex. 6",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A condição $x^2 + y^2 + z^2 \\le 25 \\land z = 0$ define no espaço:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Um círculo fechado de raio 5 no plano $xOy$"
      },
      {
        "id": "B",
        "texto": "Uma circunferência no plano $yOz$"
      },
      {
        "id": "C",
        "texto": "Uma semiesfera sólida"
      },
      {
        "id": "D",
        "texto": "Um segmento de reta"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Substituindo $z = 0$, a inequação torna-se $x^2 + y^2 \\le 25$, o que define um círculo plano de raio 5 no plano horizontal $xOy$."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_15",
    "manualRef": "Caderno 1, Pág. 170, Ex. 4",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Quantos planos distintos passam por três pontos não colineares no espaço?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Exatamente 1 plano"
      },
      {
        "id": "B",
        "texto": "Infinitos planos"
      },
      {
        "id": "C",
        "texto": "Nenhum plano"
      },
      {
        "id": "D",
        "texto": "Exatamente 3 planos"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Axioma fundamental da geometria no espaço: três pontos não colineares determinam um e um só plano (plano único)."
    ],
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170
  },
  {
    "id": "GEO_8_16",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 162, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é um vetor normal ao plano $x - 5y + 2z = 8$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Os coeficientes de $(x, y, z)$ dão as coordenadas do vetor normal: $(1, -5, 2)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\vec{n} = (1, -5, 2)$"
      },
      {
        "id": "B",
        "texto": "$\\vec{n} = (1, 5, 2)$"
      },
      {
        "id": "C",
        "texto": "$\\vec{n} = (8, 0, 0)$"
      }
    ]
  },
  {
    "id": "GEO_8_17",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 163, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine o termo independente $D$ do plano $x + y + z + D = 0$ que passa por $(1, 2, 3)$.",
    "tipo": "numero",
    "respostaCorreta": -6,
    "passosResolucao": [
      "$1 + 2 + 3 + D = 0 \\iff 6 + D = 0 \\iff D = -6$."
    ]
  },
  {
    "id": "GEO_8_18",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 164, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Os planos $2x - y + 3z = 4$ e $4x - 2y + 6z = 1$ são:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Os vetores normais são proporcionais $(4, -2, 6) = 2(2, -1, 3)$, mas os termos independentes não são coincidentes."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Estritamente paralelos"
      },
      {
        "id": "B",
        "texto": "Coincidentes"
      },
      {
        "id": "C",
        "texto": "Perpendiculares"
      }
    ]
  },
  {
    "id": "GEO_8_19",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 165, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A reta perpendicular ao plano $3x + 2y - z = 5$ tem a direção de que vetor?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O vetor diretor da reta perpendicular ao plano é o próprio vetor normal ao plano: $(3, 2, -1)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\vec{v} = (3, 2, -1)$"
      },
      {
        "id": "B",
        "texto": "$\\vec{v} = (5, 0, 0)$"
      },
      {
        "id": "C",
        "texto": "$\\vec{v} = (3, -2, 1)$"
      }
    ]
  },
  {
    "id": "GEO_8_20",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 166, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O plano paralelo a $yOz$ que passa por $(7, 1, -4)$ tem que equação?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Planos paralelos a $yOz$ têm abcissa fixa: $x = 7$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x = 7$"
      },
      {
        "id": "B",
        "texto": "$y = 1$"
      },
      {
        "id": "C",
        "texto": "$z = -4$"
      }
    ]
  },
  {
    "id": "GEO_8_21",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 167, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor de $k$ para que os planos $x + ky + z = 0$ e $2x - 4y + 2z = 5$ sejam perpendiculares?",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "$\\vec{n}_1 \\cdot \\vec{n}_2 = 1(2) + k(-4) + 1(2) = 0 \\iff 4 - 4k = 0 \\iff k = 1$."
    ]
  },
  {
    "id": "GEO_8_22",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 168, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A interseção do plano $x + 2y + 3z = 6$ com o eixo $Oz$ ($x = 0, y = 0$) tem que cota $z$?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$3z = 6 \\iff z = 2$."
    ]
  },
  {
    "id": "GEO_8_23",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 169, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O plano de equação $z = 0$ corresponde a qual dos planos coordenados?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Cota nula define o plano horizontal $xOy$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Plano $xOy$"
      },
      {
        "id": "B",
        "texto": "Plano $xOz$"
      },
      {
        "id": "C",
        "texto": "Plano $yOz$"
      }
    ]
  },
  {
    "id": "GEO_8_24",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 146, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se um plano passa na origem, o seu termo independente $D$ na equação $Ax + By + Cz + D = 0$ é:",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$A(0) + B(0) + C(0) + D = 0 \\implies D = 0$."
    ]
  },
  {
    "id": "GEO_8_25",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 147, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a distância do ponto $(0, 0, 8)$ ao plano $z = 3$?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "A distância é $|8 - 3| = 5$."
    ]
  },
  {
    "id": "GEO_8_26",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 148, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A esfera $(x - 1)^2 + (y - 1)^2 + (z - 1)^2 = 9$ interseta o plano $x = 1$ segundo:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Substituindo $x = 1$, temos $(y - 1)^2 + (z - 1)^2 = 9$, que é uma circunferência de raio 3 no plano."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Uma circunferência de raio 3"
      },
      {
        "id": "B",
        "texto": "Um único ponto"
      },
      {
        "id": "C",
        "texto": "Vazio"
      }
    ]
  },
  {
    "id": "GEO_8_27",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 149, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O plano mediador de $[AB]$ com $A(1, 0, 0)$ e $B(-1, 0, 0)$ tem equação:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O ponto médio é a origem e o vetor normal é $\\vec{AB} = (-2, 0, 0)$, logo o plano é $x = 0$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x = 0$ (plano $yOz$)"
      },
      {
        "id": "B",
        "texto": "$y = 0$"
      },
      {
        "id": "C",
        "texto": "$z = 0$"
      }
    ]
  },
  {
    "id": "GEO_8_28",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 150, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Dois planos com vetores normais não colineares intersetam-se segundo:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Dois planos secantes intersetam-se exatamente numa reta comum."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Uma reta"
      },
      {
        "id": "B",
        "texto": "Um ponto"
      },
      {
        "id": "C",
        "texto": "Um plano"
      }
    ]
  },
  {
    "id": "GEO_8_29",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 151, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor de $p$ para que o ponto $(p, 1, 2)$ pertença ao plano $2x - y + z = 7$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$2p - 1 + 2 = 7 \\iff 2p + 1 = 7 \\iff 2p = 6 \\iff p = 3$."
    ]
  },
  {
    "id": "GEO_8_30",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 152, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A equação $2x = 8$ no espaço tridimensional representa:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "No espaço $Oxyz$, uma equação linear define um plano."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "O plano $x = 4$"
      },
      {
        "id": "B",
        "texto": "A reta $x = 4$"
      },
      {
        "id": "C",
        "texto": "O ponto 4"
      }
    ]
  },
  {
    "id": "GEO_8_31",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 153, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o vetor normal unitário de $z = 5$ com sentido positivo?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O vetor normal a $z = k$ tem direção do eixo $Oz$: $(0, 0, 1)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(0, 0, 1)$"
      },
      {
        "id": "B",
        "texto": "$(0, 1, 0)$"
      },
      {
        "id": "C",
        "texto": "$(1, 0, 0)$"
      }
    ]
  },
  {
    "id": "GEO_8_32",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 154, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\vec{n}_1 = (1, 0, 0)$ e $\\vec{n}_2 = (0, 1, 0)$, os planos correspondentes são:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\vec{n}_1 \\cdot \\vec{n}_2 = 1(0) + 0(1) + 0(0) = 0$, logo são perpendiculares."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Perpendiculares"
      },
      {
        "id": "B",
        "texto": "Paralelos"
      },
      {
        "id": "C",
        "texto": "Coincidentes"
      }
    ]
  },
  {
    "id": "GEO_8_33",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 155, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A distância entre os planos paralelos $x = 2$ e $x = 9$ é:",
    "tipo": "numero",
    "respostaCorreta": 7,
    "passosResolucao": [
      "$|9 - 2| = 7$."
    ]
  },
  {
    "id": "GEO_8_34",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 156, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A condição $x \\ge 0 \\land y \\ge 0 \\land z = 0$ define:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$z = 0$ restringe a figura ao plano $xOy$; as desigualdades definem o 1.º quadrante."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "O 1.º quadrante do plano $xOy$"
      },
      {
        "id": "B",
        "texto": "O 1.º octante do espaço"
      }
    ]
  },
  {
    "id": "GEO_8_35",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 157, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O plano que passa por $(0, 0, 0)$ com vetor normal $(1, 2, 3)$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$1(x - 0) + 2(y - 0) + 3(z - 0) = 0 \\iff x + 2y + 3z = 0$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x + 2y + 3z = 0$"
      },
      {
        "id": "B",
        "texto": "$x + 2y + 3z = 6$"
      }
    ]
  },
  {
    "id": "GEO_8_36",
    "topicoId": "topico_8",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Equações de Planos e Lugares Geométricos",
    "paginaInicio": 146,
    "paginaFim": 170,
    "manualRef": "Caderno 1, Pág. 158, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A interseção do plano $x + y + z = 1$ com o plano $z = 0$ no plano $xOy$ é a reta:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Substituindo $z = 0$ obtém-se $x + y = 1$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x + y = 1$"
      },
      {
        "id": "B",
        "texto": "$x = 1$"
      }
    ]
  }
];
