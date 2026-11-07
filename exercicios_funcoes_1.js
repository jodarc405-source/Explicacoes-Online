// Caderno 2: Funções e Gráficos Parte 1 (Tópicos 9, 10) - 72 Itens
const EXERCICIOS_FUNCOES_1 = [
  {
    "id": "FUNC_9_01",
    "manualRef": "Caderno 2, Pág. 16, Ex. 1",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere a função $f(x) = \\sqrt{2x - 6}$. Qual é o domínio de definição $D_f$ em $\\mathbb{R}$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$[3, +\\infty[$"
      },
      {
        "id": "B",
        "texto": "$]3, +\\infty[$"
      },
      {
        "id": "C",
        "texto": "$]-\\infty, 3]$"
      },
      {
        "id": "D",
        "texto": "$[0, +\\infty[$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Para raízes quadradas em $\\mathbb{R}$, o radicando tem de ser não negativo: $2x - 6 \\ge 0$.",
      "$2x \\ge 6 \\iff x \\ge 3$. Portanto, $D_f = [3, +\\infty[$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_02",
    "manualRef": "Caderno 2, Pág. 20, Ex. 3",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Seja $g(x) = x^2 - 4x + 3$. Determine a soma dos zeros da função $g$.",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "Os zeros de $g$ são as soluções de $x^2 - 4x + 3 = 0$.",
      "Pelas relações de Viète, a soma dos zeros de $ax^2 + bx + c = 0$ é $-\\frac{b}{a} = -\\frac{-4}{1} = 4$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_03",
    "manualRef": "Caderno 2, Pág. 24, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Uma função $f$ diz-se estritamente crescente num intervalo $I$ se, para quaisquer $x_1, x_2 \\in I$ com $x_1 < x_2$, se verifica:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$f(x_1) < f(x_2)$"
      },
      {
        "id": "B",
        "texto": "$f(x_1) \\le f(x_2)$"
      },
      {
        "id": "C",
        "texto": "$f(x_1) > f(x_2)$"
      },
      {
        "id": "D",
        "texto": "$f(x_1) = f(x_2)$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Por definição formal no 10.º ano, uma função é estritamente crescente se a relação de ordem estrita se preserva nas imagens: $x_1 < x_2 \\implies f(x_1) < f(x_2)$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_04",
    "manualRef": "Caderno 2, Pág. 28, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Considere a função afim $h(x) = -3x + 12$. Qual é a imagem de $x = 5$ por $h$?",
    "tipo": "numero",
    "respostaCorreta": -3,
    "passosResolucao": [
      "$h(5) = -3(5) + 12 = -15 + 12 = -3$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_05",
    "manualRef": "Caderno 2, Pág. 30, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Qual é o domínio da função racional $f(x) = \\frac{2x + 1}{x^2 - 9}$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\mathbb{R} \\setminus \\{-3, 3\\}$"
      },
      {
        "id": "B",
        "texto": "$\\mathbb{R} \\setminus \\{3\\}$"
      },
      {
        "id": "C",
        "texto": "$]-3, 3[$"
      },
      {
        "id": "D",
        "texto": "$\\mathbb{R} \\setminus \\{9\\}$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "O denominador não se pode anular: $x^2 - 9 \\ne 0 \\iff x^2 \\ne 9 \\iff x \\ne \\pm 3$.",
      "Logo, o domínio é $\\mathbb{R} \\setminus \\{-3, 3\\}$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_06",
    "manualRef": "Caderno 2, Pág. 31, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Se o contradomínio de $f$ é $[-2, 6]$, qual é o valor máximo absoluto da função $f$?",
    "tipo": "numero",
    "respostaCorreta": 6,
    "passosResolucao": [
      "O contradomínio reúne todas as imagens possíveis $f(x)$. O maior elemento do intervalo $[-2, 6]$ é 6."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_07",
    "manualRef": "Caderno 2, Pág. 32, Ex. 1",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Dada a função $f(x) = 4 - x^2$, qual é a ordenada na origem (ponto de interseção com o eixo $Oy$)?",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "A ordenada na origem obtém-se calculando $f(0)$: $f(0) = 4 - 0^2 = 4$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_08",
    "manualRef": "Caderno 2, Pág. 32, Ex. 4",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Quantos zeros tem a função $f(x) = x^3 - 4x$ em $\\mathbb{R}$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$x^3 - 4x = 0 \\iff x(x^2 - 4) = 0 \\iff x(x - 2)(x + 2) = 0$.",
      "Os zeros são $x = 0$, $x = 2$ e $x = -2$. Tem 3 zeros distintos."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_09",
    "manualRef": "Caderno 2, Pág. 33, Ex. 3",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Se $f$ é estritamente decrescente em $\\mathbb{R}$ e $f(2) = 5$, qual das seguintes opções é garantidamente verdadeira?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$f(4) < 5$"
      },
      {
        "id": "B",
        "texto": "$f(4) > 5$"
      },
      {
        "id": "C",
        "texto": "$f(0) < 5$"
      },
      {
        "id": "D",
        "texto": "$f(2) = 0$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Sendo decrescente, para $4 > 2$ temos necessariamente $f(4) < f(2) = 5$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_10",
    "manualRef": "Caderno 2, Pág. 33, Ex. 6",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Calcule a taxa média de variação da função $f(x) = x^2 + 1$ no intervalo $[1, 3]$.",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "$\\text{TMV}_{[1, 3]} = \\frac{f(3) - f(1)}{3 - 1}$.",
      "$f(3) = 3^2 + 1 = 10$, $f(1) = 1^2 + 1 = 2$.",
      "$\\text{TMV} = \\frac{10 - 2}{2} = \\frac{8}{2} = 4$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_11",
    "manualRef": "Caderno 2, Pág. 34, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "O gráfico de uma função afim passa pelos pontos $(0, 3)$ e $(2, 7)$. Qual é o declive da reta?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$m = \\frac{7 - 3}{2 - 0} = \\frac{4}{2} = 2$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_12",
    "manualRef": "Caderno 2, Pág. 34, Ex. 5",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é o valor mínimo da função $g(x) = (x - 4)^2 + 5$?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "Como $(x - 4)^2 \\ge 0$ para qualquer $x \\in \\mathbb{R}$, o menor valor possível ocorre quando $(x - 4)^2 = 0$ ($x = 4$).",
      "Nesse ponto, $g(4) = 0 + 5 = 5$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_13",
    "manualRef": "Caderno 2, Pág. 35, Ex. 1",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Se $f(x) = 2x - 1$, determine o valor de $x$ para o qual $f(f(x)) = 9$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$f(f(x)) = 2(2x - 1) - 1 = 4x - 2 - 1 = 4x - 3$.",
      "$4x - 3 = 9 \\iff 4x = 12 \\iff x = 3$."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_14",
    "manualRef": "Caderno 2, Pág. 35, Ex. 3",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual das seguintes funções NÃO tem zeros reais?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$f(x) = x^2 + 4$"
      },
      {
        "id": "B",
        "texto": "$g(x) = x^2 - 4$"
      },
      {
        "id": "C",
        "texto": "$h(x) = x + 4$"
      },
      {
        "id": "D",
        "texto": "$j(x) = 4 - x$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "$x^2 + 4 = 0 \\iff x^2 = -4$, que é impossível em $\\mathbb{R}$ pois o quadrado de um número real é sempre não negativo."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_15",
    "manualRef": "Caderno 2, Pág. 35, Ex. 7",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Seja $f: \\mathbb{R} \\to \\mathbb{R}$ dada por $f(x) = 5$. O gráfico desta função é uma reta:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Horizontal com declive 0"
      },
      {
        "id": "B",
        "texto": "Vertical com declive indefinido"
      },
      {
        "id": "C",
        "texto": "Oblíqua que passa na origem"
      },
      {
        "id": "D",
        "texto": "Com declive igual a 5"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A função constante $f(x) = 5$ tem imagem invariável para qualquer $x$, correspondendo à reta horizontal $y = 5$ com declive 0."
    ],
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35
  },
  {
    "id": "FUNC_9_16",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 26, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o domínio da função $f(x) = \\frac{1}{x - 5}$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O denominador não se pode anular: $x - 5 \\ne 0 \\iff x \\ne 5$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$\\mathbb{R} \\setminus \\{5\\}$"
      },
      {
        "id": "B",
        "texto": "$\\mathbb{R}$"
      },
      {
        "id": "C",
        "texto": "$[5, +\\infty[$"
      },
      {
        "id": "D",
        "texto": "$]-\\infty, 5[$"
      }
    ]
  },
  {
    "id": "FUNC_9_17",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 27, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine a imagem de $x = 4$ pela função $f(x) = 2x^2 - 3x + 1$.",
    "tipo": "numero",
    "respostaCorreta": 21,
    "passosResolucao": [
      "$f(4) = 2(16) - 3(4) + 1 = 32 - 12 + 1 = 21$."
    ]
  },
  {
    "id": "FUNC_9_18",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 28, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f(x) = 3x - 6$, qual é o zero da função?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$3x - 6 = 0 \\iff 3x = 6 \\iff x = 2$."
    ]
  },
  {
    "id": "FUNC_9_19",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 29, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $f(x) = -2x + 7$ é estritamente:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O declive é $m = -2 < 0$, logo a função é estritamente decrescente em $\\mathbb{R}$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Decrescente em $\\mathbb{R}$"
      },
      {
        "id": "B",
        "texto": "Crescente em $\\mathbb{R}$"
      },
      {
        "id": "C",
        "texto": "Constante"
      }
    ]
  },
  {
    "id": "FUNC_9_20",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 30, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O contradomínio de $f(x) = x^2$ em $\\mathbb{R}$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O quadrado de qualquer real é não negativo, assumindo o valor 0 em $x = 0$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[0, +\\infty[$"
      },
      {
        "id": "B",
        "texto": "$\\mathbb{R}$"
      },
      {
        "id": "C",
        "texto": "$]0, +\\infty[$"
      },
      {
        "id": "D",
        "texto": "$[-1, +\\infty[$"
      }
    ]
  },
  {
    "id": "FUNC_9_21",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 31, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f(2) = 10$ e $f(6) = 18$, qual é a taxa média de variação de $f$ no intervalo $[2, 6]$?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$\\text{TMV} = \\frac{18 - 10}{6 - 2} = \\frac{8}{4} = 2$."
    ]
  },
  {
    "id": "FUNC_9_22",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 32, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $g(x) = \\sqrt{x + 7}$ está definida para:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$x + 7 \\ge 0 \\iff x \\ge -7$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$x \\ge -7$"
      },
      {
        "id": "B",
        "texto": "$x > -7$"
      },
      {
        "id": "C",
        "texto": "$x \\le -7$"
      },
      {
        "id": "D",
        "texto": "$x \\ge 0$"
      }
    ]
  },
  {
    "id": "FUNC_9_23",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 33, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Uma função diz-se constante se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Por definição, uma função constante atribui o mesmo valor $c$ a qualquer objeto do domínio."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Todas as imagens são iguais: $f(x) = c$"
      },
      {
        "id": "B",
        "texto": "Passa pela origem"
      },
      {
        "id": "C",
        "texto": "O seu gráfico é uma curva"
      }
    ]
  },
  {
    "id": "FUNC_9_24",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 34, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se o ponto $(3, k)$ pertence ao gráfico de $f(x) = x^2 + 2x$, determine $k$.",
    "tipo": "numero",
    "respostaCorreta": 15,
    "passosResolucao": [
      "$k = f(3) = 3^2 + 2(3) = 9 + 6 = 15$."
    ]
  },
  {
    "id": "FUNC_9_25",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 10, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é o domínio de $h(x) = \\frac{x}{\\sqrt{x - 1}}$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O radicando no denominador tem de ser estritamente positivo: $x - 1 > 0 \\iff x > 1$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$]1, +\\infty[$"
      },
      {
        "id": "B",
        "texto": "$[1, +\\infty[$"
      },
      {
        "id": "C",
        "texto": "$\\mathbb{R} \\setminus \\{1\\}$"
      }
    ]
  },
  {
    "id": "FUNC_9_26",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 11, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Quantos zeros tem a função $f(x) = x^2 - 16$?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$x^2 = 16 \\iff x = \\pm 4$. Tem 2 zeros."
    ]
  },
  {
    "id": "FUNC_9_27",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 12, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O ponto onde o gráfico de qualquer função interseta o eixo $Oy$ tem abcissa igual a:",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "No eixo das ordenadas a abcissa é sempre $x = 0$."
    ]
  },
  {
    "id": "FUNC_9_28",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 13, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f$ é monótona crescente e $a < b$, então:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Uma função crescente preserva a ordem dos elementos."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$f(a) \\le f(b)$"
      },
      {
        "id": "B",
        "texto": "$f(a) > f(b)$"
      },
      {
        "id": "C",
        "texto": "$f(a) = f(b)$"
      }
    ]
  },
  {
    "id": "FUNC_9_29",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 14, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Qual é a imagem da origem por $f(x) = 5x - 9$?",
    "tipo": "numero",
    "respostaCorreta": -9,
    "passosResolucao": [
      "$f(0) = 5(0) - 9 = -9$."
    ]
  },
  {
    "id": "FUNC_9_30",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 15, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f(x) = 2x + 1$, qual é a expressão de $f(x + 1)$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$f(x + 1) = 2(x + 1) + 1 = 2x + 2 + 1 = 2x + 3$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$2x + 3$"
      },
      {
        "id": "B",
        "texto": "$2x + 2$"
      },
      {
        "id": "C",
        "texto": "$2x + 1$"
      }
    ]
  },
  {
    "id": "FUNC_9_31",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 16, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O máximo de uma função $f$ num intervalo $I$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O máximo é a maior imagem $M$ tal que $f(x) \\le M$ para todo $x \\in I$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "O maior valor assumido por $f$ em $I$"
      },
      {
        "id": "B",
        "texto": "O maior valor do domínio"
      }
    ]
  },
  {
    "id": "FUNC_9_32",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 17, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Determine o zero da função afim $f(x) = -4x + 20$.",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "$-4x + 20 = 0 \\iff 4x = 20 \\iff x = 5$."
    ]
  },
  {
    "id": "FUNC_9_33",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 18, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $f(x) = x^2 + 1$ tem contradomínio:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Como $x^2 \\ge 0$, $x^2 + 1 \\ge 1$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[1, +\\infty[$"
      },
      {
        "id": "B",
        "texto": "$[0, +\\infty[$"
      },
      {
        "id": "C",
        "texto": "$\\mathbb{R}$"
      }
    ]
  },
  {
    "id": "FUNC_9_34",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 19, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f(x) = 3$ para todo o $x$, qual é a taxa de variação de $f$?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Funções constantes têm taxa de variação nula: 0."
    ]
  },
  {
    "id": "FUNC_9_35",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 20, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Uma função diz-se injetiva se:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Definição: $x_1 \\ne x_2 \\implies f(x_1) \\ne f(x_2)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Objetos diferentes têm imagens diferentes"
      },
      {
        "id": "B",
        "texto": "Todas as imagens são positivas"
      }
    ]
  },
  {
    "id": "FUNC_9_36",
    "topicoId": "topico_9",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Generalidades sobre Funções e Monotonia",
    "paginaInicio": 10,
    "paginaFim": 35,
    "manualRef": "Caderno 2, Pág. 21, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f(x) = x^3$, o zero da função é:",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "$x^3 = 0 \\iff x = 0$."
    ]
  },
  {
    "id": "FUNC_10_01",
    "manualRef": "Caderno 2, Pág. 40, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $f(x) = x^4 - 2x^2$ é uma função par. Isto significa geometricamente que o seu gráfico é simétrico em relação a que elemento?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Eixo das ordenadas ($Oy$)"
      },
      {
        "id": "B",
        "texto": "Origem do referencial $(0, 0)$"
      },
      {
        "id": "C",
        "texto": "Eixo das abcissas ($Ox$)"
      },
      {
        "id": "D",
        "texto": "Bissetriz dos quadrantes ímpares ($y = x$)"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Por definição, uma função par satisfaz $f(-x) = f(x)$, o que confere ao gráfico simetria axial relativamente ao eixo das ordenadas $Oy$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_02",
    "manualRef": "Caderno 2, Pág. 44, Ex. 4",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "O gráfico de $g(x) = f(x - 3) + 2$ obtém-se a partir do gráfico de $f(x)$ por meio de qual translação?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "3 unidades para a direita e 2 unidades para cima"
      },
      {
        "id": "B",
        "texto": "3 unidades para a esquerda e 2 unidades para cima"
      },
      {
        "id": "C",
        "texto": "3 unidades para a direita e 2 unidades para baixo"
      },
      {
        "id": "D",
        "texto": "3 unidades para a esquerda e 2 unidades para baixo"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "O termo $(x - 3)$ translada o gráfico 3 unidades no sentido positivo do eixo $Ox$ (para a direita).",
      "O termo $+ 2$ translada o gráfico 2 unidades no sentido positivo de $Oy$ (para cima)."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_03",
    "manualRef": "Caderno 2, Pág. 48, Ex. 1",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Se $f$ é uma função ímpar e $f(3) = 7$, qual é o valor de $f(-3)$?",
    "tipo": "numero",
    "respostaCorreta": -7,
    "passosResolucao": [
      "Para uma função ímpar, verifica-se $f(-x) = -f(x)$ para todo o $x \\in D_f$.",
      "Logo, $f(-3) = -f(3) = -7$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_04",
    "manualRef": "Caderno 2, Pág. 50, Ex. 3",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "O gráfico de $y = -f(x)$ obtém-se a partir de $y = f(x)$ através de:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Reflexão relativamente ao eixo $Ox$"
      },
      {
        "id": "B",
        "texto": "Reflexão relativamente ao eixo $Oy$"
      },
      {
        "id": "C",
        "texto": "Reflexão relativamente à origem"
      },
      {
        "id": "D",
        "texto": "Translação vertical de 1 unidade"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A multiplicação por $-1$ no exterior da função inverte o sinal de todas as ordenadas: $(x, y) \\mapsto (x, -y)$.",
      "Isto corresponde a uma reflexão axial pelo eixo das abcissas $Ox$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_05",
    "manualRef": "Caderno 2, Pág. 52, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Se o ponto $P(2, 5)$ pertence ao gráfico de $f$, qual é o ponto garantidamente pertencente ao gráfico de $g(x) = f(x) + 4$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$(2, 9)$"
      },
      {
        "id": "B",
        "texto": "$(6, 5)$"
      },
      {
        "id": "C",
        "texto": "$(2, 1)$"
      },
      {
        "id": "D",
        "texto": "(-2, 5)"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "$g(2) = f(2) + 4 = 5 + 4 = 9$.",
      "O ponto pertencente ao gráfico de $g$ é $(2, 9)$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_06",
    "manualRef": "Caderno 2, Pág. 54, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual das seguintes funções é uma função ÍMPAR?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$f(x) = x^3$"
      },
      {
        "id": "B",
        "texto": "$g(x) = x^2 + 1$"
      },
      {
        "id": "C",
        "texto": "$h(x) = |x|$"
      },
      {
        "id": "D",
        "texto": "$j(x) = x^2 + x$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "$f(-x) = (-x)^3 = -x^3 = -f(x)$. A função cubo é ímpar."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_07",
    "manualRef": "Caderno 2, Pág. 55, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Se o gráfico de $f(x)$ tem zero em $x = 4$, qual é o zero da função $h(x) = f(x + 5)$?",
    "tipo": "numero",
    "respostaCorreta": -1,
    "passosResolucao": [
      "Queremos $h(x) = 0 \\iff f(x + 5) = 0$.",
      "Como $f(4) = 0$, temos $x + 5 = 4 \\iff x = -1$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_08",
    "manualRef": "Caderno 2, Pág. 56, Ex. 1",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Se $f$ é ímpar e está definida em $x = 0$, qual é obrigatoriamente o valor de $f(0)$?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Pela definição de função ímpar: $f(-0) = -f(0) \\iff f(0) = -f(0) \\iff 2f(0) = 0 \\iff f(0) = 0$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_09",
    "manualRef": "Caderno 2, Pág. 57, Ex. 3",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A transformação que leva o gráfico de $y = f(x)$ para $y = f(-x)$ corresponde a:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Reflexão relativamente ao eixo $Oy$"
      },
      {
        "id": "B",
        "texto": "Reflexão relativamente ao eixo $Ox$"
      },
      {
        "id": "C",
        "texto": "Translação horizontal para a esquerda"
      },
      {
        "id": "D",
        "texto": "Dilatação vertical"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A substituição de $x$ por $-x$ reflete o ponto $(x, y)$ para $(-x, y)$, que é a reflexão axial pelo eixo das ordenadas $Oy$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_10",
    "manualRef": "Caderno 2, Pág. 58, Ex. 2",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Seja $D_f = [-4, 6]$. Qual é o domínio da função $g(x) = f(x - 2)$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$[-2, 8]$"
      },
      {
        "id": "B",
        "texto": "$[-6, 4]$"
      },
      {
        "id": "C",
        "texto": "$[-4, 6]$"
      },
      {
        "id": "D",
        "texto": "$[-8, 12]$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Para $g(x)$ estar definida: $-4 \\le x - 2 \\le 6$.",
      "Somando 2 a todos os membros: $-2 \\le x \\le 8$. Portanto, $D_g = [-2, 8]$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_11",
    "manualRef": "Caderno 2, Pág. 58, Ex. 5",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Se o máximo absoluto de $f(x)$ é 10, qual é o máximo absoluto de $p(x) = 3f(x)$?",
    "tipo": "numero",
    "respostaCorreta": 30,
    "passosResolucao": [
      "A dilatação vertical por fator 3 multiplica todas as imagens por 3: $3 \\times 10 = 30$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_12",
    "manualRef": "Caderno 2, Pág. 59, Ex. 1",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "O gráfico de uma função ímpar tem simetria em relação a:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Origem $(0, 0)$ (simetria central)"
      },
      {
        "id": "B",
        "texto": "Eixo das ordenadas"
      },
      {
        "id": "C",
        "texto": "Eixo das abcissas"
      },
      {
        "id": "D",
        "texto": "Reta $y = 1$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Uma função ímpar satisfaz $f(-x) = -f(x)$, o que confere ao gráfico simetria central relativamente à origem das coordenadas."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_13",
    "manualRef": "Caderno 2, Pág. 59, Ex. 4",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Dada a função $f(x) = x^2$, determine a ordenada do vértice da parábola $g(x) = f(x + 3) - 7$.",
    "tipo": "numero",
    "respostaCorreta": -7,
    "passosResolucao": [
      "O vértice de $f(x) = x^2$ é $(0, 0)$.",
      "Com as transformações $x \\mapsto x + 3$ e $-7$, o novo vértice é $(-3, -7)$. A sua ordenada é $-7$."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_14",
    "manualRef": "Caderno 2, Pág. 60, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual das seguintes afirmações sobre $f(x) = |x|$ é verdadeira?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "É uma função par"
      },
      {
        "id": "B",
        "texto": "É uma função ímpar"
      },
      {
        "id": "C",
        "texto": "Não tem extremos"
      },
      {
        "id": "D",
        "texto": "O seu domínio é $[0, +\\infty[$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "$|-x| = |x|$, logo $f(-x) = f(x)$, o que a torna uma função par."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_15",
    "manualRef": "Caderno 2, Pág. 60, Ex. 6",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Seja $f(x)$ estritamente crescente em $\\mathbb{R}$. A função $g(x) = -f(x)$ é:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Estritamente decrescente em $\\mathbb{R}$"
      },
      {
        "id": "B",
        "texto": "Estritamente crescente em $\\mathbb{R}$"
      },
      {
        "id": "C",
        "texto": "Constante"
      },
      {
        "id": "D",
        "texto": "Não monótona"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Multiplicar por $-1$ inverte a relação de desigualdade: $x_1 < x_2 \\implies f(x_1) < f(x_2) \\implies -f(x_1) > -f(x_2)$.",
      "Portanto, $g$ é estritamente decrescente."
    ],
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60
  },
  {
    "id": "FUNC_10_16",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 52, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f$ é par e $f(5) = -8$, qual é o valor de $f(-5)$?",
    "tipo": "numero",
    "respostaCorreta": -8,
    "passosResolucao": [
      "Para uma função par, $f(-x) = f(x)$. Logo, $f(-5) = f(5) = -8$."
    ]
  },
  {
    "id": "FUNC_10_17",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 53, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O gráfico de $y = f(x) - 4$ obtém-se transladando o gráfico de $f$:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Subtrair 4 ao valor da função desloca verticalmente 4 unidades para baixo."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "4 unidades para baixo"
      },
      {
        "id": "B",
        "texto": "4 unidades para cima"
      },
      {
        "id": "C",
        "texto": "4 unidades para a direita"
      }
    ]
  },
  {
    "id": "FUNC_10_18",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 54, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O gráfico de $y = f(x + 2)$ obtém-se transladando o gráfico de $f$:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$x \\mapsto x + 2$ translada 2 unidades no sentido negativo de $Ox$ (para a esquerda)."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "2 unidades para a esquerda"
      },
      {
        "id": "B",
        "texto": "2 unidades para a direita"
      }
    ]
  },
  {
    "id": "FUNC_10_19",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 55, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $f(x) = x^5$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$f(-x) = (-x)^5 = -x^5 = -f(x)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Ímpar"
      },
      {
        "id": "B",
        "texto": "Par"
      },
      {
        "id": "C",
        "texto": "Nem par nem ímpar"
      }
    ]
  },
  {
    "id": "FUNC_10_20",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 56, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O gráfico de $y = 3f(x)$ sofreu uma:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Multiplicar por 3 no exterior dilata verticalmente o gráfico por um fator 3."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Dilatação vertical de fator 3"
      },
      {
        "id": "B",
        "texto": "Contração horizontal"
      },
      {
        "id": "C",
        "texto": "Translação"
      }
    ]
  },
  {
    "id": "FUNC_10_21",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 57, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f$ é ímpar e o ponto $(2, 7)$ pertence ao gráfico, que ponto pertence garantidamente?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Para uma função ímpar, $(x, y) \\in G_f \\implies (-x, -y) \\in G_f$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(-2, -7)$"
      },
      {
        "id": "B",
        "texto": "$(-2, 7)$"
      },
      {
        "id": "C",
        "texto": "$(2, -7)$"
      }
    ]
  },
  {
    "id": "FUNC_10_22",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 58, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $f(x) = x^2 + 5$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$(-x)^2 + 5 = x^2 + 5 = f(x)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Par"
      },
      {
        "id": "B",
        "texto": "Ímpar"
      },
      {
        "id": "C",
        "texto": "Sem paridade"
      }
    ]
  },
  {
    "id": "FUNC_10_23",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 59, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se o contradomínio de $f$ é $[0, 4]$, qual é o contradomínio de $g(x) = f(x) + 3$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Somando 3 a todos os valores: $[0 + 3, 4 + 3] = [3, 7]$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[3, 7]$"
      },
      {
        "id": "B",
        "texto": "$[0, 7]$"
      },
      {
        "id": "C",
        "texto": "$[-3, 1]$"
      }
    ]
  },
  {
    "id": "FUNC_10_24",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 36, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $f(x) = \\cos(x)$ é conhecida por ser:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$\\cos(-x) = \\cos(x)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Par"
      },
      {
        "id": "B",
        "texto": "Ímpar"
      }
    ]
  },
  {
    "id": "FUNC_10_25",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 37, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se o vértice da parábola de $f(x)$ é $(0, 0)$, qual é o vértice de $f(x - 5) + 8$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Translação pelo vetor $(5, 8)$: novo vértice $(5, 8)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$(5, 8)$"
      },
      {
        "id": "B",
        "texto": "$(-5, 8)$"
      },
      {
        "id": "C",
        "texto": "$(5, -8)$"
      }
    ]
  },
  {
    "id": "FUNC_10_26",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 38, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O simétrico de um gráfico relativamente à reta $x = 0$ (eixo $Oy$) corresponde a:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "A reflexão axial por $Oy$ substitui $x$ por $-x$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$y = f(-x)$"
      },
      {
        "id": "B",
        "texto": "$y = -f(x)$"
      }
    ]
  },
  {
    "id": "FUNC_10_27",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 39, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $f(x) = x^3 + x$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$(-x)^3 + (-x) = -(x^3 + x) = -f(x)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Ímpar"
      },
      {
        "id": "B",
        "texto": "Par"
      }
    ]
  },
  {
    "id": "FUNC_10_28",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 40, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se o zero de $f(x)$ é $x = 6$, qual é o zero de $g(x) = f(2x)$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$f(2x) = 0 \\implies 2x = 6 \\implies x = 3$."
    ]
  },
  {
    "id": "FUNC_10_29",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 41, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função constante $f(x) = 0$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$f(-x) = 0 = f(x)$ e $f(-x) = 0 = -f(x)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Simultaneamente par e ímpar"
      },
      {
        "id": "B",
        "texto": "Apenas par"
      },
      {
        "id": "C",
        "texto": "Apenas ímpar"
      }
    ]
  },
  {
    "id": "FUNC_10_30",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 42, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O gráfico de $y = |f(x)|$ obtém-se refletindo para cima da abcissa:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "O módulo torna positivas todas as ordenadas negativas através de reflexão pelo eixo $Ox$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "As partes do gráfico onde $f(x) < 0$"
      },
      {
        "id": "B",
        "texto": "Todo o gráfico"
      }
    ]
  },
  {
    "id": "FUNC_10_31",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 43, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $D_f = [-2, 5]$, qual é o domínio de $y = f(-x)$?",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$-2 \\le -x \\le 5 \\iff -5 \\le x \\le 2$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$[-5, 2]$"
      },
      {
        "id": "B",
        "texto": "$[-2, 5]$"
      }
    ]
  },
  {
    "id": "FUNC_10_32",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 44, Ex. 3",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Uma função com gráfico simétrico em relação à origem satisfaz:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "É a definição de função ímpar."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "$f(-x) = -f(x)$"
      },
      {
        "id": "B",
        "texto": "$f(-x) = f(x)$"
      }
    ]
  },
  {
    "id": "FUNC_10_33",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 45, Ex. 4",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A transformação $y = \\frac{1}{2}f(x)$ é uma:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Reduz todas as distâncias verticais a metade."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Contração vertical de fator $\\frac{1}{2}$"
      },
      {
        "id": "B",
        "texto": "Dilatação vertical"
      }
    ]
  },
  {
    "id": "FUNC_10_34",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 46, Ex. 5",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Se $f(x) = x^4 - 1$, o valor de $f(-2) - f(2)$ é:",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "Sendo par, $f(-2) = f(2)$, logo a diferença é 0."
    ]
  },
  {
    "id": "FUNC_10_35",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 47, Ex. 1",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "O gráfico de $y = -f(-x)$ é simétrico do gráfico de $f$ em relação a:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "Reflexão simultânea por $Ox$ e $Oy$ equivale à rotação de $180^\\circ$ em torno da origem."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Origem $(0, 0)$"
      },
      {
        "id": "B",
        "texto": "Eixo $Ox$"
      },
      {
        "id": "C",
        "texto": "Eixo $Oy$"
      }
    ]
  },
  {
    "id": "FUNC_10_36",
    "topicoId": "topico_10",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Transformações de Gráficos e Paridade",
    "paginaInicio": 36,
    "paginaFim": 60,
    "manualRef": "Caderno 2, Pág. 48, Ex. 2",
    "origem": "CEO Banco Oficial",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "A função $f(x) = x^2 - 3x$ é:",
    "tipo": "escolha_multipla",
    "respostaCorreta": "A",
    "passosResolucao": [
      "$(-x)^2 - 3(-x) = x^2 + 3x$, que é diferente de $f(x)$ e de $-f(x)$."
    ],
    "opcoes": [
      {
        "id": "A",
        "texto": "Nem par nem ímpar"
      },
      {
        "id": "B",
        "texto": "Par"
      },
      {
        "id": "C",
        "texto": "Ímpar"
      }
    ]
  }
];
