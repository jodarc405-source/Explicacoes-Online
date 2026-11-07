// Caderno 1: Geometria Analítica no Plano e no Espaço (Págs. 62 a 170) - 180 Itens
const EXERCICIOS_GEOMETRIA = [
  {
    "id": "GEO_4_01",
    "manualRef": "Caderno 1, Pág. 68, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "No plano $xOy$, determine a distância euclidiana entre os pontos $A(1, 2)$ e $B(4, 6)$.",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Fórmula da distância no plano: $d(A, B) = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.",
      "Substituindo as coordenadas: $d(A, B) = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = \\sqrt{3^2 + 4^2}$.",
      "$d(A, B) = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_02",
    "manualRef": "Caderno 1, Pág. 74, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Uma circunferência com centro em $C(2, -1)$ passa pelo ponto $P(5, 3)$. A sua equação reduzida é $(x - 2)^2 + (y + 1)^2 = r^2$. Calcule o valor do quadrado do raio ($r^2$).",
    "tipo": "numero",
    "respostaCorreta": 25,
    "passosResolucao": [
      "O raio $r$ é a distância entre o centro $C(2, -1)$ e o ponto $P(5, 3)$ pertencente à circunferência.",
      "$r^2 = (5 - 2)^2 + (3 - (-1))^2 = 3^2 + 4^2 = 9 + 16 = 25$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_03",
    "manualRef": "Caderno 1, Pág. 78, Problema 3",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Considere o segmento de reta $[AB]$ com $A(-3, 8)$ e $B(5, -2)$. Determine a abcissa do ponto médio $M$ de $[AB]$.",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "Coordenadas do ponto médio $M\\left(\\frac{x_A + x_B}{2}, \\frac{y_A + y_B}{2}\\right)$.",
      "Abcissa de $M$: $x_M = \\frac{-3 + 5}{2} = \\frac{2}{2} = 1$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_04",
    "manualRef": "Caderno 1, Pág. 80, Ex. 1",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Considere a reta de equação $y = 3x - 5$. Qual é o declive de qualquer reta perpendicular a esta reta no plano $xOy$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$m = 3$"
      },
      {
        "id": "B",
        "texto": "$m = -3$"
      },
      {
        "id": "C",
        "texto": "$m = -\\frac{1}{3}$"
      },
      {
        "id": "D",
        "texto": "$m = \\frac{1}{3}$"
      }
    ],
    "respostaCorreta": "C",
    "passosResolucao": [
      "Duas retas não verticais com declives $m_1$ e $m_2$ são perpendiculares se e só se $m_1 \\times m_2 = -1$.",
      "Como a reta dada tem declive $m_1 = 3$, o declive perpendicular é $m_2 = -\\frac{1}{3}$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_05",
    "manualRef": "Caderno 1, Pág. 82, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A equação mediadora do segmento $[AB]$, com $A(0, 0)$ e $B(4, 0)$, no plano cartesiano, é da forma $x = k$. Qual é o valor da constante $k$?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "A mediatriz de $[AB]$ é o lugar geométrico dos pontos equidistantes de $A$ e $B$.",
      "Como os pontos têm a mesma ordenada $y = 0$, a mediatriz é uma reta vertical que passa pelo ponto médio: $x = \\frac{0 + 4}{2} = 2$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_06",
    "manualRef": "Caderno 1, Pág. 70, Ex. 3",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual das seguintes condições define o círculo (círculo fechado) centrado na origem com raio 3?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$x^2 + y^2 = 9$"
      },
      {
        "id": "B",
        "texto": "$x^2 + y^2 \\le 9$"
      },
      {
        "id": "C",
        "texto": "$x^2 + y^2 < 3$"
      },
      {
        "id": "D",
        "texto": "$x^2 + y^2 \\le 3$"
      }
    ],
    "respostaCorreta": "B",
    "passosResolucao": [
      "A circunferência é dada pela igualdade $x^2 + y^2 = r^2 = 9$.",
      "O círculo (fronteira e interior) corresponde à desigualdade não estrita $x^2 + y^2 \\le 3^2 = 9$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_07",
    "manualRef": "Caderno 1, Pág. 72, Ex. 6",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Determine a ordenada na origem ($b$) da reta que passa pelo ponto $(2, 7)$ e tem declive $m = 2$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "Equação reduzida da reta: $y = mx + b$.",
      "Substituindo $m = 2$ e $(x, y) = (2, 7)$: $7 = 2(2) + b \\iff 7 = 4 + b \\iff b = 3$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_08",
    "manualRef": "Caderno 1, Pág. 75, Ex. 2",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Considere o triângulo de vértices $O(0, 0)$, $P(6, 0)$ e $Q(0, 8)$. Qual é a área deste triângulo retângulo?",
    "tipo": "numero",
    "respostaCorreta": 24,
    "passosResolucao": [
      "Os catetos assentam nos eixos cartesianos com comprimentos 6 e 8.",
      "$\\text{Área} = \\frac{\\text{base} \\times \\text{altura}}{2} = \\frac{6 \\times 8}{2} = 24$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_09",
    "manualRef": "Caderno 1, Pág. 77, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A circunferência de equação $(x + 4)^2 + (y - 3)^2 = 16$ interseta o eixo $Oy$ em quantos pontos distintos?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Nenhum ponto"
      },
      {
        "id": "B",
        "texto": "Exatamente 1 ponto (tangente)"
      },
      {
        "id": "C",
        "texto": "Exatamente 2 pontos"
      },
      {
        "id": "D",
        "texto": "Infinitos pontos"
      }
    ],
    "respostaCorreta": "B",
    "passosResolucao": [
      "O centro é $C(-4, 3)$ e o raio é $r = \\sqrt{16} = 4$.",
      "A distância do centro ao eixo das ordenadas ($x = 0$) é $|-4 - 0| = 4 = r$.",
      "Como a distância ao eixo é igual ao raio, a circunferência é tangente a $Oy$ num único ponto $(0, 3)$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_10",
    "manualRef": "Caderno 1, Pág. 79, Ex. 5",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Seja $r$ a reta de equação $2x - y + 4 = 0$. Qual é o declive $m$ desta reta?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "Escrevendo na forma reduzida $y = mx + b$:",
      "$2x - y + 4 = 0 \\iff y = 2x + 4$.",
      "O declive é $m = 2$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_11",
    "manualRef": "Caderno 1, Pág. 81, Ex. 3",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Os pontos $A(1, 1)$, $B(5, 1)$ e $C(1, 4)$ formam um triângulo retângulo. Calcule o comprimento da sua hipotenusa $[BC]$.",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Cateto horizontal: $AB = |5 - 1| = 4$.",
      "Cateto vertical: $AC = |4 - 1| = 3$.",
      "Hipotenusa pelo Teorema de Pitágoras: $BC = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_12",
    "manualRef": "Caderno 1, Pág. 83, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é a equação cartesiana da reta horizontal que passa pelo ponto $P(-7, 5)$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$x = -7$"
      },
      {
        "id": "B",
        "texto": "$y = 5$"
      },
      {
        "id": "C",
        "texto": "$y = -7$"
      },
      {
        "id": "D",
        "texto": "$x = 5$"
      }
    ],
    "respostaCorreta": "B",
    "passosResolucao": [
      "Uma reta horizontal no referencial ortonormado tem declive 0 e equação da forma $y = k$.",
      "Como passa por $P(-7, 5)$, a sua ordenada é constante e igual a 5: $y = 5$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_13",
    "manualRef": "Caderno 1, Pág. 84, Ex. 4",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é o centro da circunferência dada pela equação $(x - 5)^2 + (y + 2)^2 = 49$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(5, -2)$"
      },
      {
        "id": "B",
        "texto": "$(-5, 2)$"
      },
      {
        "id": "C",
        "texto": "$(5, 2)$"
      },
      {
        "id": "D",
        "texto": "$(-5, -2)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A equação canónica da circunferência de centro $(x_0, y_0)$ é $(x - x_0)^2 + (y - y_0)^2 = r^2$.",
      "Comparando: $x_0 = 5$ e $y_0 = -2$. Logo, o centro é $(5, -2)$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_14",
    "manualRef": "Caderno 1, Pág. 85, Ex. 1",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "O ponto $P(a, 4)$ pertence à reta de equação $y = 2x - 6$. Determine o valor de $a$.",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Substituindo as coordenadas de $P$ na equação da reta: $4 = 2a - 6$.",
      "$2a = 10 \\iff a = 5$."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_15",
    "manualRef": "Caderno 1, Pág. 85, Ex. 6",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A região definida por $(x - 1)^2 + y^2 \\le 4 \\land y \\ge 0$ representa:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Um semicírculo de raio 2"
      },
      {
        "id": "B",
        "texto": "Um círculo completo de raio 4"
      },
      {
        "id": "C",
        "texto": "Uma coroa circular"
      },
      {
        "id": "D",
        "texto": "Um quadrado no 1.º quadrante"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "$(x - 1)^2 + y^2 \\le 4$ define um círculo fechado de centro $(1, 0)$ e raio $r = 2$.",
      "A conjunção $y \\ge 0$ restringe o círculo ao semiplano superior, resultando num semicírculo."
    ],
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85
  },
  {
    "id": "GEO_4_16",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 78, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine a distância entre a origem $O(0, 0)$ e o ponto $P(-8, 6)$ no plano cartesiano.",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "$d(O, P) = \\sqrt{(-8)^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$."
    ]
  },
  {
    "id": "GEO_4_17",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 79, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o raio da circunferência definida por $x^2 + y^2 = 64$?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "$r = \\sqrt{64} = 8$."
    ]
  },
  {
    "id": "GEO_4_18",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 80, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o ponto médio do segmento $[AB]$ com $A(2, -4)$ e $B(6, 10)$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$M = \\left(\\frac{2 + 6}{2}, \\frac{-4 + 10}{2}\\right) = (4, 3)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(4, 3)$"
      },
      {
        "id": "B",
        "texto": "$(8, 6)$"
      },
      {
        "id": "C",
        "texto": "$(4, 6)$"
      },
      {
        "id": "D",
        "texto": "$(2, 3)$"
      }
    ]
  },
  {
    "id": "GEO_4_19",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 81, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A reta paralela a $y = 4x - 1$ que passa pela origem tem que equação reduzida?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Retas paralelas têm o mesmo declive ($m = 4$). Passando na origem, $b = 0$, logo $y = 4x$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$y = 4x$"
      },
      {
        "id": "B",
        "texto": "$y = -4x$"
      },
      {
        "id": "C",
        "texto": "$y = \\frac{1}{4}x$"
      },
      {
        "id": "D",
        "texto": "$y = 4x + 1$"
      }
    ]
  },
  {
    "id": "GEO_4_20",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 82, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine o declive da reta que passa pelos pontos $A(1, 3)$ e $B(5, 11)$.",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$."
    ]
  },
  {
    "id": "GEO_4_21",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 83, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a equação da circunferência de centro em $(0, 0)$ tangente à reta horizontal $y = 5$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O raio é a distância do centro $(0, 0)$ à reta $y = 5$, que é $r = 5$. Logo, $x^2 + y^2 = 25$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x^2 + y^2 = 25$"
      },
      {
        "id": "B",
        "texto": "$x^2 + y^2 = 5$"
      },
      {
        "id": "C",
        "texto": "$x^2 + y^2 = 10$"
      },
      {
        "id": "D",
        "texto": "$(x - 5)^2 + y^2 = 25$"
      }
    ]
  },
  {
    "id": "GEO_4_22",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 84, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A mediatriz do segmento cujos extremos são $A(-3, 2)$ e $B(7, 2)$ é a reta vertical:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A ordenada é comum ($y = 2$), logo a mediatriz é vertical passando no ponto médio das abcissas: $x = \\frac{-3 + 7}{2} = 2$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x = 2$"
      },
      {
        "id": "B",
        "texto": "$x = 5$"
      },
      {
        "id": "C",
        "texto": "$y = 2$"
      },
      {
        "id": "D",
        "texto": "$x = 0$"
      }
    ]
  },
  {
    "id": "GEO_4_23",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 62, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O ponto $P(3, k)$ pertence à circunferência $x^2 + y^2 = 25$. Sabendo que $k > 0$, determine $k$.",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "$3^2 + k^2 = 25 \\iff 9 + k^2 = 25 \\iff k^2 = 16$. Sendo $k > 0$, $k = 4$."
    ]
  },
  {
    "id": "GEO_4_24",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 63, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "As retas $r: y = 2x + 1$ e $s: y = -\\frac{1}{2}x + 4$ formam entre si um ângulo de:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O produto dos declives é $2 \\times \\left(-\\frac{1}{2}\\right) = -1$, logo são perpendiculares ($90^\\circ$)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$90^\\circ$"
      },
      {
        "id": "B",
        "texto": "$45^\\circ$"
      },
      {
        "id": "C",
        "texto": "$0^\\circ$"
      },
      {
        "id": "D",
        "texto": "$60^\\circ$"
      }
    ]
  },
  {
    "id": "GEO_4_25",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 64, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a ordenada do ponto de interseção da reta $y = 3x - 7$ com o eixo das ordenadas ($x = 0$)?",
    "tipo": "numero",
    "respostaCorreta": -7,
    "passosResolucao": [
      "Para $x = 0$, $y = 3(0) - 7 = -7$."
    ]
  },
  {
    "id": "GEO_4_26",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 65, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O diâmetro de um círculo de área $36\\pi$ é igual a:",
    "tipo": "numero",
    "respostaCorreta": 12,
    "passosResolucao": [
      "$\\pi r^2 = 36\\pi \\implies r = 6$. Diâmetro $= 2r = 12$."
    ]
  },
  {
    "id": "GEO_4_27",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 66, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O conjunto de pontos definido por $(x - 1)^2 + (y - 2)^2 < 9$ representa:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A desigualdade estrita $<$ define o interior aberto do círculo sem a fronteira."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "O interior de um círculo de raio 3"
      },
      {
        "id": "B",
        "texto": "A circunferência de raio 3"
      },
      {
        "id": "C",
        "texto": "O exterior de um círculo"
      },
      {
        "id": "D",
        "texto": "Um círculo fechado"
      }
    ]
  },
  {
    "id": "GEO_4_28",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 67, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine a distância entre os pontos $A(-1, -1)$ e $B(2, 3)$.",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "$d = \\sqrt{(2 - (-1))^2 + (3 - (-1))^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."
    ]
  },
  {
    "id": "GEO_4_29",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 68, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a equação reduzida da reta horizontal que passa pelo ponto $P(9, -4)$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Uma reta horizontal tem equação $y = k$. Como passa por $P(9, -4)$, a equação é $y = -4$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$y = -4$"
      },
      {
        "id": "B",
        "texto": "$x = 9$"
      },
      {
        "id": "C",
        "texto": "$y = 9$"
      },
      {
        "id": "D",
        "texto": "$x = -4$"
      }
    ]
  },
  {
    "id": "GEO_4_30",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 69, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se o ponto $C(2, 3)$ é o centro de uma circunferência de raio 1, o ponto $(2, 4)$ pertence à:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$d(C, (2, 4)) = \\sqrt{(2-2)^2 + (4-3)^2} = 1 = r$, logo pertence à linha da circunferência."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Circunferência"
      },
      {
        "id": "B",
        "texto": "Exterior da circunferência"
      },
      {
        "id": "C",
        "texto": "Interior estrito"
      },
      {
        "id": "D",
        "texto": "Origem"
      }
    ]
  },
  {
    "id": "GEO_4_31",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 70, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a abcissa na origem (zero) da reta de equação $y = 2x - 8$?",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "$2x - 8 = 0 \\iff 2x = 8 \\iff x = 4$."
    ]
  },
  {
    "id": "GEO_4_32",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 71, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a distância da reta $y = 7$ à reta $y = -3$ no plano?",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "A distância entre duas retas horizontais é $|7 - (-3)| = 10$."
    ]
  },
  {
    "id": "GEO_4_33",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 72, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A inequação $x^2 + y^2 \\ge 16$ define:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\|P - O\\|^2 \\ge 16$ define todos os pontos à distância 4 ou superior da origem."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "O exterior e a fronteira da circunferência de raio 4"
      },
      {
        "id": "B",
        "texto": "O interior do círculo"
      },
      {
        "id": "C",
        "texto": "Um setor circular"
      },
      {
        "id": "D",
        "texto": "O semiplano superior"
      }
    ]
  },
  {
    "id": "GEO_4_34",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 73, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O triângulo com vértices $(0, 0)$, $(8, 0)$ e $(0, 6)$ tem que perímetro?",
    "tipo": "numero",
    "respostaCorreta": 24,
    "passosResolucao": [
      "Catetos: 8 e 6. Hipotenusa: $\\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$. Perímetro: $8 + 6 + 10 = 24$."
    ]
  },
  {
    "id": "GEO_4_35",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 74, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A reta $x = 5$ é perpendicular a qual dos eixos cartesianos?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A reta $x = 5$ é vertical, intersetando perpendicularmente o eixo horizontal $Ox$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Eixo das abcissas ($Ox$)"
      },
      {
        "id": "B",
        "texto": "Eixo das ordenadas ($Oy$)"
      }
    ]
  },
  {
    "id": "GEO_4_36",
    "topicoId": "topico_4",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Plano, Distâncias e Círculos",
    "paginaInicio": 62,
    "paginaFim": 85,
    "manualRef": "Caderno 1, Pág. 75, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a área do círculo fechado de equação $(x - 3)^2 + (y + 1)^2 \\le 49$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$r^2 = 49$, logo $\\text{Área} = \\pi r^2 = 49\\pi$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$49\\pi$"
      },
      {
        "id": "B",
        "texto": "$7\\pi$"
      },
      {
        "id": "C",
        "texto": "$14\\pi$"
      },
      {
        "id": "D",
        "texto": "$98\\pi$"
      }
    ]
  },
  {
    "id": "GEO_5_01",
    "manualRef": "Caderno 1, Pág. 90, Ex. 1",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "No espaço tridimensional $Oxyz$, qual é a distância entre a origem $O(0, 0, 0)$ e o ponto $P(2, 3, 6)$?",
    "tipo": "numero",
    "respostaCorreta": 7,
    "passosResolucao": [
      "Fórmula da distância no espaço: $d(O, P) = \\sqrt{x^2 + y^2 + z^2}$.",
      "$d(O, P) = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_02",
    "manualRef": "Caderno 1, Pág. 94, Ex. 3",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Uma esfera é descrita por $(x - 1)^2 + (y + 2)^2 + (z - 4)^2 \\le 16$. Qual é o raio $R$ desta esfera?",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "A equação canónica da esfera sólida é $(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 \\le R^2$.",
      "Como $R^2 = 16$, temos $R = \\sqrt{16} = 4$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_03",
    "manualRef": "Caderno 1, Pág. 96, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "No referencial $Oxyz$, que plano geométrico é definido pela equação $z = 0$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Plano coordenado $xOy$"
      },
      {
        "id": "B",
        "texto": "Plano coordenado $xOz$"
      },
      {
        "id": "C",
        "texto": "Plano coordenado $yOz$"
      },
      {
        "id": "D",
        "texto": "Reta paralela ao eixo $Oz$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Todos os pontos com cota nula ($z = 0$) pertencem ao plano horizontal formado pelos eixos $Ox$ e $Oy$, isto é, o plano $xOy$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_04",
    "manualRef": "Caderno 1, Pág. 98, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Considere os pontos $A(1, 0, 5)$ e $B(3, 4, -1)$. Determine a cota $z$ do ponto médio de $[AB]$.",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "A cota do ponto médio $M$ é $z_M = \\frac{z_A + z_B}{2}$.",
      "$z_M = \\frac{5 + (-1)}{2} = \\frac{4}{2} = 2$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_05",
    "manualRef": "Caderno 1, Pág. 100, Ex. 2",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "O plano mediador do segmento $[AB]$, com $A(0, 2, 0)$ e $B(0, 8, 0)$, tem que equação cartesiana?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$y = 5$"
      },
      {
        "id": "B",
        "texto": "$x = 5$"
      },
      {
        "id": "C",
        "texto": "$z = 5$"
      },
      {
        "id": "D",
        "texto": "$y = 3$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Os pontos $A$ e $B$ situam-se sobre o eixo $Oy$ nas posições $y = 2$ e $y = 8$.",
      "O ponto médio é $(0, 5, 0)$ e o segmento é perpendicular aos planos da forma $y = k$.",
      "Portanto, o plano mediador tem equação $y = 5$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_06",
    "manualRef": "Caderno 1, Pág. 101, Ex. 5",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é a distância do ponto $P(3, -4, 5)$ ao plano coordenado $xOy$?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "A distância de um ponto $(x, y, z)$ ao plano $xOy$ é dada pelo módulo da sua cota: $|z|$.",
      "Para $P(3, -4, 5)$, a distância é $|5| = 5$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_07",
    "manualRef": "Caderno 1, Pág. 102, Ex. 1",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Considere a superfície esférica $(x - 2)^2 + (y - 3)^2 + (z + 1)^2 = 9$. Qual das seguintes afirmações é verdadeira?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "A esfera passa pela origem $(0, 0, 0)$."
      },
      {
        "id": "B",
        "texto": "O ponto $(2, 3, 2)$ pertence à superfície esférica."
      },
      {
        "id": "C",
        "texto": "O centro tem cota $1$."
      },
      {
        "id": "D",
        "texto": "O diâmetro da esfera é 3."
      }
    ],
    "respostaCorreta": "B",
    "passosResolucao": [
      "Substituindo $(2, 3, 2)$: $(2 - 2)^2 + (3 - 3)^2 + (2 + 1)^2 = 0 + 0 + 3^2 = 9$.",
      "Como a equação é satisfeita, o ponto $(2, 3, 2)$ pertence à superfície esférica."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_08",
    "manualRef": "Caderno 1, Pág. 103, Ex. 3",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Qual é a distância entre os pontos $A(1, 2, 3)$ e $B(4, 2, 7)$ no espaço?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "$d(A, B) = \\sqrt{(4 - 1)^2 + (2 - 2)^2 + (7 - 3)^2}$.",
      "$d(A, B) = \\sqrt{3^2 + 0^2 + 4^2} = \\sqrt{9 + 16} = 5$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_09",
    "manualRef": "Caderno 1, Pág. 104, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A equação $x^2 + y^2 + z^2 = 36 \\land z \\ge 0$ define:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Uma semiesfera sólida"
      },
      {
        "id": "B",
        "texto": "Uma superfície semiesférica de raio 6"
      },
      {
        "id": "C",
        "texto": "Um círculo no plano $xOy$"
      },
      {
        "id": "D",
        "texto": "Um cone de revolução"
      }
    ],
    "respostaCorreta": "B",
    "passosResolucao": [
      "A igualdade $x^2 + y^2 + z^2 = 36$ representa uma superfície esférica de centro na origem e raio 6.",
      "Com a restrição $z \\ge 0$, obtemos a metade superior: superfície semiesférica."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_10",
    "manualRef": "Caderno 1, Pág. 104, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Determine o valor de $k$ para que o ponto $A(1, k, 2)$ pertença à superfície esférica $x^2 + y^2 + z^2 = 9$, sabendo que $k > 0$.",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "Substituindo na equação: $1^2 + k^2 + 2^2 = 9 \\iff 1 + k^2 + 4 = 9$.",
      "$k^2 + 5 = 9 \\iff k^2 = 4$. Sendo $k > 0$, $k = 2$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_11",
    "manualRef": "Caderno 1, Pág. 105, Ex. 1",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A projeção ortogonal do ponto $P(-3, 5, 8)$ no plano coordenado $xOy$ é:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(-3, 5, 0)$"
      },
      {
        "id": "B",
        "texto": "$(0, 0, 8)$"
      },
      {
        "id": "C",
        "texto": "$(-3, 0, 8)$"
      },
      {
        "id": "D",
        "texto": "$(0, 5, 8)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Projetar ortogonalmente no plano $xOy$ anula a cota $z$, mantendo a abcissa e a ordenada.",
      "Portanto, a projeção é $(-3, 5, 0)$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_12",
    "manualRef": "Caderno 1, Pág. 105, Ex. 3",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Qual é a distância do ponto $Q(0, 6, 8)$ ao eixo das abcissas ($Ox$)?",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "A distância ao eixo $Ox$ é $\\sqrt{y^2 + z^2}$.",
      "$\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_13",
    "manualRef": "Caderno 1, Pág. 105, Ex. 5",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A condição $x = 2 \\land y = 3$ no referencial tridimensional $Oxyz$ representa:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Um ponto isolado"
      },
      {
        "id": "B",
        "texto": "Uma reta paralela ao eixo $Oz$"
      },
      {
        "id": "C",
        "texto": "Um plano paralelo a $xOy$"
      },
      {
        "id": "D",
        "texto": "O segmento entre 2 e 3"
      }
    ],
    "respostaCorreta": "B",
    "passosResolucao": [
      "A interseção de dois planos perpendiculares aos eixos ($x = 2$ e $y = 3$) é uma reta vertical paralela ao eixo das cotas $Oz$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_14",
    "manualRef": "Caderno 1, Pág. 105, Ex. 7",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Determine o diâmetro da esfera de equação $x^2 + y^2 + z^2 - 4x = 0$.",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "Completando o quadrado em $x$: $(x - 2)^2 - 4 + y^2 + z^2 = 0 \\iff (x - 2)^2 + y^2 + z^2 = 4$.",
      "O raio é $r = \\sqrt{4} = 2$, pelo que o diâmetro é $2r = 4$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_15",
    "manualRef": "Caderno 1, Pág. 105, Ex. 9",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "O simétrico do ponto $P(2, -5, 7)$ em relação à origem das coordenadas é:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(-2, 5, -7)$"
      },
      {
        "id": "B",
        "texto": "$(2, 5, 7)$"
      },
      {
        "id": "C",
        "texto": "$(-2, -5, -7)$"
      },
      {
        "id": "D",
        "texto": "$(2, -5, -7)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A reflexão central pela origem $O(0, 0, 0)$ inverte o sinal de todas as coordenadas:",
      "$(x, y, z) \\mapsto (-x, -y, -z)$. Logo, $(2, -5, 7) \\mapsto (-2, 5, -7)$."
    ],
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105
  },
  {
    "id": "GEO_5_16",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 102, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine a distância da origem $O(0, 0, 0)$ ao ponto $A(1, 2, 2)$ no espaço.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$d = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$."
    ]
  },
  {
    "id": "GEO_5_17",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 103, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a equação cartesiana do plano paralelo a $xOz$ que passa pelo ponto $P(2, -8, 5)$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Planos paralelos ao plano coordenado $xOz$ têm ordenada constante: $y = k$. Logo, $y = -8$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$y = -8$"
      },
      {
        "id": "B",
        "texto": "$x = 2$"
      },
      {
        "id": "C",
        "texto": "$z = 5$"
      },
      {
        "id": "D",
        "texto": "$y = 8$"
      }
    ]
  },
  {
    "id": "GEO_5_18",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 104, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O centro da superfície esférica $(x - 1)^2 + (y + 4)^2 + (z - 7)^2 = 81$ tem que cota $z$?",
    "tipo": "numero",
    "respostaCorreta": 7,
    "passosResolucao": [
      "A cota do centro $C(x_0, y_0, z_0)$ é $z_0 = 7$."
    ]
  },
  {
    "id": "GEO_5_19",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 86, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A reta paralela ao eixo $Oz$ que passa por $P(3, 4, 0)$ é dada pelo sistema:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Uma reta vertical no espaço tem abcissa e ordenada fixas: $x = 3 \\land y = 4$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x = 3 \\land y = 4$"
      },
      {
        "id": "B",
        "texto": "$z = 0$"
      },
      {
        "id": "C",
        "texto": "$x = 3 \\land z = 4$"
      },
      {
        "id": "D",
        "texto": "$y = 4 \\land z = 0$"
      }
    ]
  },
  {
    "id": "GEO_5_20",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 87, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O raio da superfície esférica $x^2 + y^2 + z^2 = 100$ é:",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "$R = \\sqrt{100} = 10$."
    ]
  },
  {
    "id": "GEO_5_21",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 88, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a distância do ponto $P(4, 7, -9)$ ao plano coordenado $xOz$?",
    "tipo": "numero",
    "respostaCorreta": 7,
    "passosResolucao": [
      "A distância ao plano $xOz$ é $|y| = |7| = 7$."
    ]
  },
  {
    "id": "GEO_5_22",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 89, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O ponto médio de $[AB]$, com $A(0, 0, 4)$ e $B(0, 0, 10)$, é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$M = (0, 0, \\frac{4 + 10}{2}) = (0, 0, 7)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(0, 0, 7)$"
      },
      {
        "id": "B",
        "texto": "$(0, 0, 14)$"
      },
      {
        "id": "C",
        "texto": "$(0, 0, 6)$"
      },
      {
        "id": "D",
        "texto": "$(0, 7, 0)$"
      }
    ]
  },
  {
    "id": "GEO_5_23",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 90, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O simétrico do ponto $P(1, 2, 3)$ em relação ao plano $xOy$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A reflexão pelo plano $xOy$ inverte o sinal da cota: $(x, y, z) \\mapsto (x, y, -z)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(1, 2, -3)$"
      },
      {
        "id": "B",
        "texto": "$(-1, -2, 3)$"
      },
      {
        "id": "C",
        "texto": "$(-1, 2, 3)$"
      },
      {
        "id": "D",
        "texto": "$(1, -2, 3)$"
      }
    ]
  },
  {
    "id": "GEO_5_24",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 91, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja a esfera $(x - 2)^2 + y^2 + z^2 \\le 25$. O ponto $(2, 0, 5)$ pertence à:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$(2 - 2)^2 + 0^2 + 5^2 = 25$, logo está exatamente na fronteira."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Superfície esférica (fronteira)"
      },
      {
        "id": "B",
        "texto": "Interior estrito"
      },
      {
        "id": "C",
        "texto": "Exterior"
      }
    ]
  },
  {
    "id": "GEO_5_25",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 92, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a distância entre $A(1, 0, 0)$ e $B(0, 0, 0)$?",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "A distância é simplesmente 1 unidade."
    ]
  },
  {
    "id": "GEO_5_26",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 93, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O plano mediador do segmento de extremos $(0, 0, -2)$ e $(0, 0, 6)$ tem equação:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O segmento está sobre o eixo $Oz$, ponto médio $z = \\frac{-2 + 6}{2} = 2$. Logo, o plano é $z = 2$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$z = 2$"
      },
      {
        "id": "B",
        "texto": "$z = 4$"
      },
      {
        "id": "C",
        "texto": "$x = 2$"
      },
      {
        "id": "D",
        "texto": "$y = 2$"
      }
    ]
  },
  {
    "id": "GEO_5_27",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 94, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O ponto $(0, 5, 0)$ pertence a que eixo coordenado?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Tem abcissa e cota nulas, logo pertence a $Oy$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Eixo das ordenadas ($Oy$)"
      },
      {
        "id": "B",
        "texto": "Eixo das abcissas ($Ox$)"
      },
      {
        "id": "C",
        "texto": "Eixo das cotas ($Oz$)"
      }
    ]
  },
  {
    "id": "GEO_5_28",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 95, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantos eixos coordenados definem o referencial cartesiano no espaço?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "São 3 eixos ortogonais: $Ox$, $Oy$ e $Oz$."
    ]
  },
  {
    "id": "GEO_5_29",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 96, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A equação $y = 0$ no espaço tridimensional representa:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Todos os pontos com ordenada nula formam o plano $xOz$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "O plano coordenado $xOz$"
      },
      {
        "id": "B",
        "texto": "O eixo $Oy$"
      },
      {
        "id": "C",
        "texto": "A origem"
      },
      {
        "id": "D",
        "texto": "O plano $xOy$"
      }
    ]
  },
  {
    "id": "GEO_5_30",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 97, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A distância do ponto $P(2, 3, 4)$ ao eixo $Oz$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A distância de $(x, y, z)$ a $Oz$ é $\\sqrt{x^2 + y^2} = \\sqrt{4 + 9} = \\sqrt{13}$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\sqrt{2^2 + 3^2} = \\sqrt{13}$"
      },
      {
        "id": "B",
        "texto": "4"
      },
      {
        "id": "C",
        "texto": "5"
      },
      {
        "id": "D",
        "texto": "$\\sqrt{29}$"
      }
    ]
  },
  {
    "id": "GEO_5_31",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 98, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o valor de $k$ para que $(0, k, 0)$ diste 5 unidades da origem?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "$\\sqrt{0^2 + k^2 + 0^2} = 5 \\implies |k| = 5$. O valor positivo é 5."
    ]
  },
  {
    "id": "GEO_5_32",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 99, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Uma superfície esférica tem diâmetro 8. Qual é o seu volume?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Raio $R = 4$. Volume $= \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (64) = \\frac{256}{3}\\pi$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\frac{256}{3}\\pi$"
      },
      {
        "id": "B",
        "texto": "$\\{64\\pi\\}$"
      },
      {
        "id": "C",
        "texto": "$32\\pi$"
      },
      {
        "id": "D",
        "texto": "$\\frac{500}{3}\\pi$"
      }
    ]
  },
  {
    "id": "GEO_5_33",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 100, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A interseção da esfera $x^2 + y^2 + z^2 \\le 9$ com o plano $z = 0$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Substituindo $z = 0$, obtém-se $x^2 + y^2 \\le 9$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Um círculo de raio 3 no plano $xOy$"
      },
      {
        "id": "B",
        "texto": "Uma esfera"
      },
      {
        "id": "C",
        "texto": "Um ponto"
      },
      {
        "id": "D",
        "texto": "Vazio"
      }
    ]
  },
  {
    "id": "GEO_5_34",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 101, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O ponto $(2, -3, 0)$ pertence ao plano coordenado:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Como a cota é zero, pertence ao plano $xOy$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$xOy$ (porque $z = 0$)"
      },
      {
        "id": "B",
        "texto": "$yOz$"
      },
      {
        "id": "C",
        "texto": "$xOz$"
      }
    ]
  },
  {
    "id": "GEO_5_35",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 102, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine o centro da esfera de equação $x^2 + (y - 3)^2 + (z + 2)^2 \\le 16$.",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Comparando com a equação canónica, o centro é $(0, 3, -2)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(0, 3, -2)$"
      },
      {
        "id": "B",
        "texto": "$(0, -3, 2)$"
      },
      {
        "id": "C",
        "texto": "$(1, 3, -2)$"
      },
      {
        "id": "D",
        "texto": "$(0, 3, 2)$"
      }
    ]
  },
  {
    "id": "GEO_5_36",
    "topicoId": "topico_5",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Geometria no Espaço e Superfícies Esféricas",
    "paginaInicio": 86,
    "paginaFim": 105,
    "manualRef": "Caderno 1, Pág. 103, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A distância entre $P(1, 1, 1)$ e $Q(2, 3, 3)$ é:",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$d = \\sqrt{(2-1)^2 + (3-1)^2 + (3-1)^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$."
    ]
  },
  {
    "id": "GEO_6_01",
    "manualRef": "Caderno 1, Pág. 110, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Dados os pontos $A(1, -2)$ e $B(4, 2)$, determine a norma do vetor $\\vec{AB}$.",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Coordenadas do vetor: $\\vec{AB} = B - A = (4 - 1, 2 - (-2)) = (3, 4)$.",
      "Norma: $\\|\\vec{AB}\\| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_02",
    "manualRef": "Caderno 1, Pág. 114, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A reta $r$ no espaço tem equação vetorial $(x, y, z) = (1, 2, 3) + k(2, -1, 4), k \\in \\mathbb{R}$. Qual é a ordenada do ponto da reta correspondente a $k = 3$?",
    "tipo": "numero",
    "respostaCorreta": -1,
    "passosResolucao": [
      "Para $k = 3$, calculamos a ordenada: $y = 2 + 3(-1) = 2 - 3 = -1$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_03",
    "manualRef": "Caderno 1, Pág. 116, Ex. 3",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Os vetores $\\vec{u} = (2, -3)$ e $\\vec{v} = (6, k)$ são colineares. Determine o valor de $k$.",
    "tipo": "numero",
    "respostaCorreta": -9,
    "passosResolucao": [
      "Para serem colineares, existe $\\lambda$ tal que $\\vec{v} = \\lambda \\vec{u}$.",
      "$\\lambda = \\frac{6}{2} = 3$, logo $k = 3 \\times (-3) = -9$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_04",
    "manualRef": "Caderno 1, Pág. 118, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Qual dos seguintes vetores é um vetor diretor da reta no plano dada por $2x + 3y - 6 = 0$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\vec{v} = (3, -2)$"
      },
      {
        "id": "B",
        "texto": "$\\vec{v} = (2, 3)$"
      },
      {
        "id": "C",
        "texto": "$\\vec{v} = (-2, 3)$"
      },
      {
        "id": "D",
        "texto": "$\\vec{v} = (3, 2)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A equação reduzida é $3y = -2x + 6 \\iff y = -\\frac{2}{3}x + 2$, logo o declive é $m = -\\frac{2}{3}$.",
      "Um vetor diretor $(v_1, v_2)$ cumpre $\\frac{v_2}{v_1} = -\\frac{2}{3}$. O vetor $(3, -2)$ verifica esta condição."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_05",
    "manualRef": "Caderno 1, Pág. 120, Ex. 1",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Seja $\\vec{u} = (1, 2, -2)$. Calcule a norma do vetor $2\\vec{u}$.",
    "tipo": "numero",
    "respostaCorreta": 6,
    "passosResolucao": [
      "$\\|\\vec{u}\\| = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.",
      "$\\|2\\vec{u}\\| = 2 \\|\\vec{u}\\| = 2 \\times 3 = 6$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_06",
    "manualRef": "Caderno 1, Pág. 121, Ex. 6",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é a equação vetorial da reta no plano que passa por $P(2, -1)$ com vetor diretor $\\vec{r} = (1, 4)$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(x, y) = (2, -1) + k(1, 4), k \\in \\mathbb{R}$"
      },
      {
        "id": "B",
        "texto": "$(x, y) = (1, 4) + k(2, -1), k \\in \\mathbb{R}$"
      },
      {
        "id": "C",
        "texto": "$(x, y) = (2, 1) + k(1, -4), k \\in \\mathbb{R}$"
      },
      {
        "id": "D",
        "texto": "$y = 4x + 2$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A forma canónica da equação vetorial da reta é $P + k\\vec{v}$, logo $(x, y) = (2, -1) + k(1, 4)$ com $k \\in \\mathbb{R}$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_07",
    "manualRef": "Caderno 1, Pág. 122, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Sejam $\\vec{a} = (3, -1)$ e $\\vec{b} = (-2, 5)$. As coordenadas de $\\vec{a} + \\vec{b}$ são:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(1, 4)$"
      },
      {
        "id": "B",
        "texto": "$(5, -6)$"
      },
      {
        "id": "C",
        "texto": "(-6, -5)"
      },
      {
        "id": "D",
        "texto": "$(1, -4)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Adicionando componente a componente: $(3 + (-2), -1 + 5) = (1, 4)$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_08",
    "manualRef": "Caderno 1, Pág. 122, Ex. 5",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A reta $s$ tem equações paramétricas $x = 1 + 2t, y = 3 - t, z = 4 + 3t, t \\in \\mathbb{R}$. Qual é a cota do ponto da reta com abcissa $x = 7$?",
    "tipo": "numero",
    "respostaCorreta": 13,
    "passosResolucao": [
      "Para $x = 7$: $1 + 2t = 7 \\iff 2t = 6 \\iff t = 3$.",
      "Cota correspondente: $z = 4 + 3(3) = 4 + 9 = 13$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_09",
    "manualRef": "Caderno 1, Pág. 123, Ex. 3",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Um vetor unitário (norma igual a 1) na mesma direção e sentido de $\\vec{u} = (0, 0, -4)$ é:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(0, 0, -1)$"
      },
      {
        "id": "B",
        "texto": "$(0, 0, 1)$"
      },
      {
        "id": "C",
        "texto": "$\\left(0, 0, -\\frac{1}{4}\\right)$"
      },
      {
        "id": "D",
        "texto": "$(0, 1, 0)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A norma é $\\|\\vec{u}\\| = 4$. O vetor unitário no mesmo sentido é $\\frac{1}{4}(0, 0, -4) = (0, 0, -1)$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_10",
    "manualRef": "Caderno 1, Pág. 123, Ex. 6",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Qual é a abcissa do ponto de interseção da reta $(x, y) = (2, -4) + k(3, 2)$ com o eixo das ordenadas ($x = 0$)?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Por definição, qualquer ponto no eixo das ordenadas tem abcissa $x = 0$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_11",
    "manualRef": "Caderno 1, Pág. 124, Ex. 1",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Se os pontos $A(2, 3)$, $B(5, 7)$ e $C(k, 11)$ são colineares, qual é o valor de $k$?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "Declive entre $A$ e $B$: $m = \\frac{7 - 3}{5 - 2} = \\frac{4}{3}$.",
      "Declive entre $B$ e $C$: $\\frac{11 - 7}{k - 5} = \\frac{4}{k - 5}$.",
      "Como são colineares: $\\frac{4}{k - 5} = \\frac{4}{3} \\iff k - 5 = 3 \\iff k = 8$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_12",
    "manualRef": "Caderno 1, Pág. 124, Ex. 4",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "O vetor posição do ponto $P$ é $\\vec{OP} = (-2, 7, 1)$. As coordenadas de $P$ são:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(-2, 7, 1)$"
      },
      {
        "id": "B",
        "texto": "$(2, -7, -1)$"
      },
      {
        "id": "C",
        "texto": "$(0, 0, 0)$"
      },
      {
        "id": "D",
        "texto": "$(-2, 1, 7)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "O vetor posição que une a origem $O(0, 0, 0)$ ao ponto $P$ tem exatamente as mesmas componentes que as coordenadas do ponto $P$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_13",
    "manualRef": "Caderno 1, Pág. 125, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Dados $\\vec{u} = (2, -1)$ e $\\vec{v} = (1, 3)$, calcule a ordenada do vetor $3\\vec{u} - \\vec{v}$.",
    "tipo": "numero",
    "respostaCorreta": -6,
    "passosResolucao": [
      "Ordenada: $3(-1) - (3) = -3 - 3 = -6$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_14",
    "manualRef": "Caderno 1, Pág. 125, Ex. 5",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Se $\\vec{u} = (x, 4)$ e $\\|\\vec{u}\\| = 5$ com $x > 0$, determine o valor de $x$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$\\|\\vec{u}\\| = \\sqrt{x^2 + 4^2} = \\sqrt{x^2 + 16} = 5$.",
      "$x^2 + 16 = 25 \\iff x^2 = 9$. Como $x > 0$, temos $x = 3$."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_15",
    "manualRef": "Caderno 1, Pág. 125, Ex. 8",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "As retas $r: (x, y) = (1, 2) + k(2, 4)$ e $s: (x, y) = (0, 1) + t(1, 2)$ são:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Paralelas"
      },
      {
        "id": "B",
        "texto": "Perpendiculares"
      },
      {
        "id": "C",
        "texto": "Coincidentes"
      },
      {
        "id": "D",
        "texto": "Concorrentes oblíquas"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Os vetores diretores são $\\vec{u} = (2, 4)$ e $\\vec{v} = (1, 2)$, com $\\vec{u} = 2\\vec{v}$ (são colineares).",
      "O ponto $(0, 1)$ da reta $s$ não pertence a $r$, logo as retas são estritamente paralelas."
    ],
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125
  },
  {
    "id": "GEO_6_16",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 122, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Sejam $\\vec{u} = (2, -1, 3)$ e $\\vec{v} = (1, 4, -2)$. As coordenadas de $\\vec{u} + \\vec{v}$ são:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$(2+1, -1+4, 3+(-2)) = (3, 3, 1)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(3, 3, 1)$"
      },
      {
        "id": "B",
        "texto": "$(3, -3, 1)$"
      },
      {
        "id": "C",
        "texto": "$(1, -5, 5)$"
      },
      {
        "id": "D",
        "texto": "$(2, 4, -6)$"
      }
    ]
  },
  {
    "id": "GEO_6_17",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 123, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a norma do vetor nulo $\\vec{0}$?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "A norma do vetor nulo é 0."
    ]
  },
  {
    "id": "GEO_6_18",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 124, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O vetor diretor da reta $(x, y) = (1, 5) + k(3, -2)$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O vetor diretor é o vetor que multiplica o parâmetro real $k$: $(3, -2)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\vec{v} = (3, -2)$"
      },
      {
        "id": "B",
        "texto": "$\\vec{v} = (1, 5)$"
      },
      {
        "id": "C",
        "texto": "$\\vec{v} = (-2, 3)$"
      },
      {
        "id": "D",
        "texto": "$\\vec{v} = (4, 3)$"
      }
    ]
  },
  {
    "id": "GEO_6_19",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 106, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\vec{u} = (k, 6)$ é colinear com $\\vec{v} = (2, 3)$, qual é o valor de $k$?",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "$\\frac{6}{3} = 2 \\implies k = 2 \\times 2 = 4$."
    ]
  },
  {
    "id": "GEO_6_20",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 107, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a norma do vetor $\\vec{w} = (-6, 8)$?",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "$\\|\\vec{w}\\| = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = 10$."
    ]
  },
  {
    "id": "GEO_6_21",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 108, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $A(1, 2)$ e $\\vec{u} = (3, -4)$, o ponto $B = A + \\vec{u}$ tem coordenadas:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$(1+3, 2+(-4)) = (4, -2)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(4, -2)$"
      },
      {
        "id": "B",
        "texto": "$(2, -6)$"
      },
      {
        "id": "C",
        "texto": "$(-2, 6)$"
      },
      {
        "id": "D",
        "texto": "$(4, 2)$"
      }
    ]
  },
  {
    "id": "GEO_6_22",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 109, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Dois vetores dizem-se simétricos se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Vetores simétricos verificam $\\vec{u} = -\\vec{v}$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Têm a mesma direção e norma, mas sentidos opostos"
      },
      {
        "id": "B",
        "texto": "Têm normas diferentes"
      },
      {
        "id": "C",
        "texto": "São perpendiculares"
      }
    ]
  },
  {
    "id": "GEO_6_23",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 110, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O vetor unitário com a mesma direção e sentido de $\\vec{v} = (0, 7)$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\frac{1}{7}(0, 7) = (0, 1)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(0, 1)$"
      },
      {
        "id": "B",
        "texto": "$(0, -1)$"
      },
      {
        "id": "C",
        "texto": "$(1, 0)$"
      },
      {
        "id": "D",
        "texto": "$(0, 7)$"
      }
    ]
  },
  {
    "id": "GEO_6_24",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 111, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A reta no espaço que passa por $(1, 0, 2)$ com direção $(0, 1, 0)$ é paralela a que eixo?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O vetor diretor $(0, 1, 0)$ é o vetor unitário do eixo das ordenadas $Oy$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Eixo $Oy$"
      },
      {
        "id": "B",
        "texto": "Eixo $Ox$"
      },
      {
        "id": "C",
        "texto": "Eixo $Oz$"
      }
    ]
  },
  {
    "id": "GEO_6_25",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 112, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Calcule a primeira coordenada do vetor $2\\vec{u} - \\vec{v}$, sendo $\\vec{u} = (5, 1)$ e $\\vec{v} = (3, 4)$.",
    "tipo": "numero",
    "respostaCorreta": 7,
    "passosResolucao": [
      "$2(5) - 3 = 10 - 3 = 7$."
    ]
  },
  {
    "id": "GEO_6_26",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 113, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\vec{AB} = (4, 7)$ e $A(1, 1)$, qual é a ordenada de $B$?",
    "tipo": "numero",
    "respostaCorreta": 8,
    "passosResolucao": [
      "$y_B - 1 = 7 \\iff y_B = 8$."
    ]
  },
  {
    "id": "GEO_6_27",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 114, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O conjunto de equações paramétricas $x = 2 + t, y = 3 - 2t, t \\in \\mathbb{R}$ define:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Equações lineares num único parâmetro $t$ definem uma reta no plano."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Uma reta no plano"
      },
      {
        "id": "B",
        "texto": "Um plano"
      },
      {
        "id": "C",
        "texto": "Uma circunferência"
      }
    ]
  },
  {
    "id": "GEO_6_28",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 115, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Seja $\\vec{u} = (1, 2, 2)$. Qual é a norma de $-3\\vec{u}$?",
    "tipo": "numero",
    "respostaCorreta": 9,
    "passosResolucao": [
      "$\\|\\vec{u}\\| = \\sqrt{1 + 4 + 4} = 3$. $\\|-3\\vec{u}\\| = 3 \\times 3 = 9$."
    ]
  },
  {
    "id": "GEO_6_29",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 116, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o declive da reta com vetor diretor $\\vec{v} = (4, 12)$ no plano?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$m = \\frac{v_2}{v_1} = \\frac{12}{4} = 3$."
    ]
  },
  {
    "id": "GEO_6_30",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 117, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se dois vetores têm a mesma direção, dizem-se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Vetores com a mesma direção são colineares."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Colineares"
      },
      {
        "id": "B",
        "texto": "Ortogonais"
      },
      {
        "id": "C",
        "texto": "Concorrentes"
      }
    ]
  },
  {
    "id": "GEO_6_31",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 118, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o vetor simétrico de $\\vec{u} = (-3, 5, -8)$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$-\\vec{u} = (3, -5, 8)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(3, -5, 8)$"
      },
      {
        "id": "B",
        "texto": "(-3, 5, 8)"
      },
      {
        "id": "C",
        "texto": "$(3, 5, -8)$"
      }
    ]
  },
  {
    "id": "GEO_6_32",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 119, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Para que valor de $t$ o ponto da reta $(x, y) = (1, 2) + t(3, 4)$ tem abcissa 10?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$1 + 3t = 10 \\iff 3t = 9 \\iff t = 3$."
    ]
  },
  {
    "id": "GEO_6_33",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 120, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A norma de qualquer vetor é sempre um número:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A norma é uma distância euclidiana, sendo $\\ge 0$ (igual a zero apenas no vetor nulo)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Real não negativo ($\\ge 0$)"
      },
      {
        "id": "B",
        "texto": "Estritamente positivo"
      },
      {
        "id": "C",
        "texto": "Inteiro"
      }
    ]
  },
  {
    "id": "GEO_6_34",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 121, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $\\vec{u} = (a, b)$, então $\\|\\vec{u}\\|^2$ é igual a:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\|\\vec{u}\\|^2 = (\\sqrt{a^2 + b^2})^2 = a^2 + b^2$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$a^2 + b^2$"
      },
      {
        "id": "B",
        "texto": "$a + b$"
      },
      {
        "id": "C",
        "texto": "$(a + b)^2$"
      }
    ]
  },
  {
    "id": "GEO_6_35",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 122, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine a cota do ponto da reta $(x, y, z) = (0, 1, 4) + k(2, -1, 3)$ correspondente a $k = 2$.",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "$z = 4 + 2(3) = 4 + 6 = 10$."
    ]
  },
  {
    "id": "GEO_6_36",
    "topicoId": "topico_6",
    "dominio": "geometria",
    "temaNome": "Geometria Analítica",
    "subtema": "Vetores e Equação Vetorial da Reta",
    "paginaInicio": 106,
    "paginaFim": 125,
    "manualRef": "Caderno 1, Pág. 123, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A reta que passa por $P(1, 2)$ com vetor diretor $\\vec{v} = (0, 3)$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Como $v_1 = 0$, a abcissa permanece constante: $x = 1$ (vertical)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "A reta vertical $x = 1$"
      },
      {
        "id": "B",
        "texto": "A reta horizontal $y = 2$"
      },
      {
        "id": "C",
        "texto": "A reta $y = 3x$"
      }
    ]
  },
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
