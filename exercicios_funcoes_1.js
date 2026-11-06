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
  }
];
