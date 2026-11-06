const EXERCICIOS_FUNCOES_2 = [
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
