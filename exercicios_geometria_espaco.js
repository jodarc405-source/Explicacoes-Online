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
  }
];
