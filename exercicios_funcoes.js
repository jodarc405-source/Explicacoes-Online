// Caderno 2: Funções e Gráficos (Págs. 10 a 120)
const EXERCICIOS_FUNCOES = [
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
  },
  {
    "id": "FUNC_11_01",
    "manualRef": "Caderno 2, Pág. 66, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 6,
    "enunciado": "Considere a parábola $y = 2(x - 3)^2 + 5$. Qual é a abcissa do seu vértice?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "Na forma canónica $y = a(x - h)^2 + k$, as coordenadas do vértice são $V(h, k)$.",
      "Aqui $h = 3$ e $k = 5$. Logo, a abcissa do vértice é 3."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_02",
    "manualRef": "Caderno 2, Pág. 70, Ex. 4",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Quantas soluções reais tem a equação $|2x - 6| = 10$?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$2x - 6 = 10 \\iff 2x = 16 \\iff x = 8$.",
      "$2x - 6 = -10 \\iff 2x = -4 \\iff x = -2$.",
      "A equação tem exatamente 2 soluções reais ($x = 8$ e $x = -2$)."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_03",
    "manualRef": "Caderno 2, Pág. 74, Ex. 1",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é a concavidade da parábola dada por $f(x) = -3x^2 + 12x - 7$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Voltada para baixo (porque $a < 0$)"
      },
      {
        "id": "B",
        "texto": "Voltada para cima (porque $a > 0$)"
      },
      {
        "id": "C",
        "texto": "Voltada para a direita"
      },
      {
        "id": "D",
        "texto": "Não tem concavidade"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "O coeficiente do termo quadrático é $a = -3 < 0$, logo a concavidade está voltada para baixo."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_04",
    "manualRef": "Caderno 2, Pág. 78, Ex. 3",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Determine o valor mínimo da função $f(x) = |x - 4| + 3$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "Como o módulo $|x - 4| \\ge 0$, o seu valor mínimo é 0 quando $x = 4$.",
      "Logo, o valor mínimo de $f(x)$ é $0 + 3 = 3$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_05",
    "manualRef": "Caderno 2, Pág. 80, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Para que valores de $x$ se verifica a inequação quadrática $x^2 - 4 \\le 0$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$[-2, 2]$"
      },
      {
        "id": "B",
        "texto": "$]-\\infty, -2] \\cup [2, +\\infty[$"
      },
      {
        "id": "C",
        "texto": "$[0, 2]$"
      },
      {
        "id": "D",
        "texto": "$[-4, 4]$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Os zeros da parábola $y = x^2 - 4$ com concavidade para cima são $x = \\pm 2$.",
      "A parábola é não positiva entre os zeros: $[-2, 2]$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_06",
    "manualRef": "Caderno 2, Pág. 82, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A equação do eixo de simetria da parábola $y = x^2 - 6x + 8$ é:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$x = 3$"
      },
      {
        "id": "B",
        "texto": "$x = 6$"
      },
      {
        "id": "C",
        "texto": "$y = 3$"
      },
      {
        "id": "D",
        "texto": "$x = -3$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "O eixo de simetria passa pela abcissa do vértice: $x_v = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$.",
      "A equação é a reta vertical $x = 3$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_07",
    "manualRef": "Caderno 2, Pág. 83, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Calcule a maior das raízes da equação quadrática $x^2 - 5x + 6 = 0$.",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "Fatorizando: $(x - 2)(x - 3) = 0$. As raízes são 2 e 3. A maior é 3."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_08",
    "manualRef": "Caderno 2, Pág. 84, Ex. 1",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "Quantas soluções reais tem a equação $|x - 5| = -3$?",
    "tipo": "numero",
    "respostaCorreta": 0,
    "passosResolucao": [
      "O valor absoluto de um número real é sempre maior ou igual a zero ($|u| \\ge 0$).",
      "Portanto, nunca pode ser igual a $-3$. Tem 0 soluções."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_09",
    "manualRef": "Caderno 2, Pág. 85, Ex. 3",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A função $f(x) = |x - 2|$ pode ser escrita por ramos como:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$x - 2$ para $x \\ge 2$ e $-(x - 2)$ para $x < 2$"
      },
      {
        "id": "B",
        "texto": "$x - 2$ para todo o $x$"
      },
      {
        "id": "C",
        "texto": "$2 - x$ para todo o $x$"
      },
      {
        "id": "D",
        "texto": "$x + 2$ para $x \\ge 0$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Pela definição de módulo: $|A| = A$ se $A \\ge 0$ e $-A$ se $A < 0$.",
      "Aqui $x - 2 \\ge 0 \\iff x \\ge 2$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_10",
    "manualRef": "Caderno 2, Pág. 86, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Qual é a ordenada do vértice da parábola $y = -x^2 + 4x - 1$?",
    "tipo": "numero",
    "respostaCorreta": 3,
    "passosResolucao": [
      "$x_v = -\\frac{4}{2(-1)} = 2$.",
      "$y_v = -(2)^2 + 4(2) - 1 = -4 + 8 - 1 = 3$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_11",
    "manualRef": "Caderno 2, Pág. 87, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A inequação $|x| < 4$ é equivalente a:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$-4 < x < 4$"
      },
      {
        "id": "B",
        "texto": "$x < 4$"
      },
      {
        "id": "C",
        "texto": "$x > -4$"
      },
      {
        "id": "D",
        "texto": "$x < -4 \\lor x > 4$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Propriedade do módulo: $|x| < k \\iff -k < x < k$ para qualquer $k > 0$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_12",
    "manualRef": "Caderno 2, Pág. 88, Ex. 3",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é a soma das soluções da equação $(x - 1)^2 = 9$?",
    "tipo": "numero",
    "respostaCorreta": 2,
    "passosResolucao": [
      "$x - 1 = 3 \\implies x = 4$.",
      "$x - 1 = -3 \\implies x = -2$.",
      "Soma das soluções: $4 + (-2) = 2$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_13",
    "manualRef": "Caderno 2, Pág. 89, Ex. 1",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "O discriminante $\\Delta$ de uma equação quadrática é nulo ($\\Delta = 0$). Quantos zeros reais distintos tem a correspondente função quadrática?",
    "tipo": "numero",
    "respostaCorreta": 1,
    "passosResolucao": [
      "Quando $\\Delta = b^2 - 4ac = 0$, a equação admite uma única raiz real dupla, significando que a parábola é tangente ao eixo $Ox$ em 1 único ponto."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_14",
    "manualRef": "Caderno 2, Pág. 89, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Qual é o contradomínio da função $f(x) = (x + 1)^2 - 4$?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$[-4, +\\infty[$"
      },
      {
        "id": "B",
        "texto": "$]-\\infty, -4]$"
      },
      {
        "id": "C",
        "texto": "$[-1, +\\infty[$"
      },
      {
        "id": "D",
        "texto": "$\\mathbb{R}$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "A concavidade está voltada para cima ($a = 1 > 0$) e o vértice tem ordenada $k = -4$.",
      "Portanto, o contradomínio é $D'_f = [-4, +\\infty[$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_11_15",
    "manualRef": "Caderno 2, Pág. 90, Ex. 5",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A função $f(x) = |x - 3|$ é decrescente em que intervalo?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$]-\\infty, 3]$"
      },
      {
        "id": "B",
        "texto": "$[3, +\\infty[$"
      },
      {
        "id": "C",
        "texto": "$]-\\infty, 0]$"
      },
      {
        "id": "D",
        "texto": "$[-3, 3]$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Para $x \\le 3$, $f(x) = -(x - 3) = -x + 3$, que é uma reta de declive negativo (estritamente decrescente).",
      "Logo, é decrescente em $]-\\infty, 3]$."
    ],
    "topicoId": "topico_11",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Funções Quadráticas e Função Módulo",
    "paginaInicio": 61,
    "paginaFim": 90
  },
  {
    "id": "FUNC_12_01",
    "manualRef": "Caderno 2, Pág. 96, Ex. 1",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Um agricultor dispõe de 40 metros de vedação para cercar um terreno retangular aproveitando um muro já existente (só precisa vedar 3 lados: dois de largura $x$ e um de comprimento $y$). A área em função de $x$ é dada por $A(x) = x(40 - 2x)$. Determine a largura $x$ que maximiza a área.",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "$A(x) = 40x - 2x^2 = -2x^2 + 40x$. Trata-se de uma parábola com concavidade voltada para baixo.",
      "O valor de $x$ que maximiza a área é a abcissa do vértice: $x_v = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = \\frac{40}{4} = 10$."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_02",
    "manualRef": "Caderno 2, Pág. 100, Ex. 3",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A altura $h$ (em metros) atingida por um projétil após $t$ segundos é dada por $h(t) = -5t^2 + 20t + 25$. Ao fim de quantos segundos o projétil atinge o solo ($h(t) = 0$)?",
    "tipo": "numero",
    "respostaCorreta": 5,
    "passosResolucao": [
      "$-5t^2 + 20t + 25 = 0 \\iff t^2 - 4t - 5 = 0$.",
      "$(t - 5)(t + 1) = 0$. Como o tempo tem de ser positivo ($t \\ge 0$), temos $t = 5$ segundos."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_03",
    "manualRef": "Caderno 2, Pág. 104, Ex. 2",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "O lucro diário $L(x)$ (em centenas de euros) de uma empresa na venda de $x$ aparelhos é modelado por $L(x) = -x^2 + 12x - 11$. Quantos aparelhos devem ser vendidos para obter o lucro máximo?",
    "tipo": "numero",
    "respostaCorreta": 6,
    "passosResolucao": [
      "O máximo da parábola com concavidade para baixo dá-se no vértice: $x_v = -\\frac{12}{2(-1)} = 6$ aparelhos."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_04",
    "manualRef": "Caderno 2, Pág. 106, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "No modelo $h(t) = -5t^2 + 30t$, determine a altura máxima atingida pelo objeto em metros.",
    "tipo": "numero",
    "respostaCorreta": 45,
    "passosResolucao": [
      "Instante do vértice: $t_v = -\\frac{30}{2(-5)} = 3$ segundos.",
      "Altura máxima: $h(3) = -5(3^2) + 30(3) = -45 + 90 = 45$ metros."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_05",
    "manualRef": "Caderno 2, Pág. 110, Ex. 1",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A soma de dois números reais é igual a 20. Qual é o valor máximo que o produto desses dois números pode atingir?",
    "tipo": "numero",
    "respostaCorreta": 100,
    "passosResolucao": [
      "Se $x + y = 20$, então $y = 20 - x$.",
      "O produto é $P(x) = x(20 - x) = -x^2 + 20x$.",
      "O vértice ocorre em $x = 10$, e o produto máximo é $P(10) = 10 \\times 10 = 100$."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_06",
    "manualRef": "Caderno 2, Pág. 112, Ex. 3",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Um retângulo tem perímetro constante de 24 cm. Qual é a forma que o retângulo deve ter para que a sua área seja máxima?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Um quadrado de lado 6 cm"
      },
      {
        "id": "B",
        "texto": "Um retângulo de 2 cm por 10 cm"
      },
      {
        "id": "C",
        "texto": "Um retângulo de 4 cm por 8 cm"
      },
      {
        "id": "D",
        "texto": "Um triângulo equilátero"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Entre todos os retângulos de perímetro fixo, o quadrado é o que maximiza a área.",
      "$\\text{Lado} = \\frac{24}{4} = 6$ cm."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_07",
    "manualRef": "Caderno 2, Pág. 114, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "O custo de produção em euros de $q$ unidades é dado por $C(q) = 2q^2 - 16q + 50$. Qual é o número de unidades $q$ que minimiza o custo?",
    "tipo": "numero",
    "respostaCorreta": 4,
    "passosResolucao": [
      "Como $a = 2 > 0$, o custo mínimo ocorre no vértice:",
      "$q_v = -\\frac{-16}{2(2)} = \\frac{16}{4} = 4$ unidades."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_08",
    "manualRef": "Caderno 2, Pág. 115, Ex. 4",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "A diferença entre dois números reais positivos é 8. Qual é o valor mínimo que o produto desses dois números pode assumir?",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$-16$"
      },
      {
        "id": "B",
        "texto": "$0$"
      },
      {
        "id": "C",
        "texto": "$-64$"
      },
      {
        "id": "D",
        "texto": "Não tem mínimo em $\\mathbb{R}^+$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Se $y - x = 8 \\implies y = x + 8$. O produto $P(x) = x(x + 8) = x^2 + 8x$.",
      "O vértice de $P(x)$ ocorre em $x_v = -4$, com valor $P(-4) = (-4)(4) = -16$."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_09",
    "manualRef": "Caderno 2, Pág. 116, Ex. 1",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A receita obtida na venda de bilhetes a preço $p$ (em euros) é dada por $R(p) = -50p^2 + 1000p$. Qual deve ser o preço do bilhete para maximizar a receita?",
    "tipo": "numero",
    "respostaCorreta": 10,
    "passosResolucao": [
      "$p_v = -\\frac{1000}{2(-50)} = \\frac{1000}{100} = 10$ euros."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_10",
    "manualRef": "Caderno 2, Pág. 117, Ex. 3",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "No modelo quadrático $f(t) = at^2 + bt + c$, com $a < 0$, a função atinge:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Um máximo absoluto no vértice"
      },
      {
        "id": "B",
        "texto": "Um mínimo absoluto no vértice"
      },
      {
        "id": "C",
        "texto": "Um ponto de inflexão"
      },
      {
        "id": "D",
        "texto": "Nenhum extremo"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Quando a concavidade é voltada para baixo ($a < 0$), o vértice é o ponto mais alto do gráfico, constituindo o máximo absoluto."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_11",
    "manualRef": "Caderno 2, Pág. 118, Ex. 2",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "A área de um quadrado de lado $x$ é dada por $A(x) = x^2$. Se o lado aumentar de 3 cm para 5 cm, qual é o aumento da área em cm$^2$?",
    "tipo": "numero",
    "respostaCorreta": 16,
    "passosResolucao": [
      "$A(5) = 5^2 = 25$ e $A(3) = 3^2 = 9$.",
      "Aumento da área: $25 - 9 = 16$ cm$^2$."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_12",
    "manualRef": "Caderno 2, Pág. 118, Ex. 5",
    "origem": "Caderno de Apoio",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "A função $V(t) = 100 - 4t$ representa o volume de água restante num reservatório ao fim de $t$ horas. Ao fim de quantas horas o reservatório fica completamente vazio?",
    "tipo": "numero",
    "respostaCorreta": 25,
    "passosResolucao": [
      "$V(t) = 0 \\iff 100 - 4t = 0 \\iff 4t = 100 \\iff t = 25$ horas."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_13",
    "manualRef": "Caderno 2, Pág. 119, Ex. 1",
    "origem": "Olimpíadas da SPM",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 9,
    "enunciado": "A temperatura $T$ (em $^\\circ$C) de uma sala é dada por $T(h) = -h^2 + 14h - 25$, com $h$ em horas ($2 \\le h \\le 12$). Qual é a temperatura máxima registada?",
    "tipo": "numero",
    "respostaCorreta": 24,
    "passosResolucao": [
      "$h_v = -\\frac{14}{2(-1)} = 7$ horas.",
      "$T(7) = -(7^2) + 14(7) - 25 = -49 + 98 - 25 = 24^\\circ$C."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_14",
    "manualRef": "Caderno 2, Pág. 119, Ex. 4",
    "origem": "Manual Escolar",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 7,
    "enunciado": "Um modelo funcional diz-se estritamente linear quando é da forma:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "$f(x) = mx$ com $m \\ne 0$"
      },
      {
        "id": "B",
        "texto": "$f(x) = ax^2 + bx + c$"
      },
      {
        "id": "C",
        "texto": "$f(x) = \\frac{1}{x}$"
      },
      {
        "id": "D",
        "texto": "$f(x) = \\sqrt{x}$"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Uma função linear expressa proporcionalidade direta e tem a forma $f(x) = mx$ passando pela origem."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  },
  {
    "id": "FUNC_12_15",
    "manualRef": "Caderno 2, Pág. 120, Ex. 6",
    "origem": "Exame Nacional / IAVE",
    "cotacaoValores": 2.5,
    "tempoEstimadoMin": 8,
    "enunciado": "Se a taxa de variação de um modelo é constante em todo o seu domínio, o modelo é necessariamente:",
    "tipo": "escolha_multipla",
    "opcoes": [
      {
        "id": "A",
        "texto": "Uma função afim ($f(x) = mx + b$)"
      },
      {
        "id": "B",
        "texto": "Uma função quadrática"
      },
      {
        "id": "C",
        "texto": "Uma função exponencial"
      },
      {
        "id": "D",
        "texto": "Uma função trigonométrica"
      }
    ],
    "respostaCorreta": "A",
    "passosResolucao": [
      "Apenas as funções afins possuem taxa média de variação estritamente constante e igual ao seu declive $m$ em qualquer intervalo."
    ],
    "topicoId": "topico_12",
    "dominio": "funcoes",
    "temaNome": "Funções e Gráficos",
    "subtema": "Modelos Funcionais e Otimização",
    "paginaInicio": 91,
    "paginaFim": 120
  }
];
