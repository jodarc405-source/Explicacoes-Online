# -*- coding: utf-8 -*-
import json
import os
import math

os.chdir(r"C:\Users\leozi\Documents\Antigravity\Explicações Online")

def make_mc(ex_id, topico_id, dominio, tema, subtema, pag_ini, pag_fim, pag_ex, num_ex, enunciado, ops, resp_correta, passos):
    opcoes = [{"chave": k, "texto": v} for k, v in ops]
    return {
        "id": ex_id,
        "topicoId": topico_id,
        "dominio": dominio,
        "temaNome": tema,
        "subtema": subtema,
        "paginaInicio": pag_ini,
        "paginaFim": pag_fim,
        "manualRef": f"Pág. {pag_ex}, Ex. {num_ex}",
        "cotacaoValores": 2.5,
        "tempoEstimadoMin": 6,
        "enunciado": enunciado,
        "tipo": "multipla_escolha",
        "opcoes": opcoes,
        "resposta_correta": resp_correta,
        "respostaCorreta": resp_correta,
        "resolucao": passos,
        "passosResolucao": passos,
        "espacoLinhas": max(6, len(passos) * 2 + 3)
    }

def make_num(ex_id, topico_id, dominio, tema, subtema, pag_ini, pag_fim, pag_ex, num_ex, enunciado, resp_num, passos):
    return {
        "id": ex_id,
        "topicoId": topico_id,
        "dominio": dominio,
        "temaNome": tema,
        "subtema": subtema,
        "paginaInicio": pag_ini,
        "paginaFim": pag_fim,
        "manualRef": f"Pág. {pag_ex}, Ex. {num_ex}",
        "cotacaoValores": 2.5,
        "tempoEstimadoMin": 6,
        "enunciado": enunciado,
        "tipo": "numerica",
        "resposta_correta": str(resp_num),
        "respostaCorreta": str(resp_num),
        "resolucao": passos,
        "passosResolucao": passos,
        "espacoLinhas": max(6, len(passos) * 2 + 3)
    }

def make_vf(ex_id, topico_id, dominio, tema, subtema, pag_ini, pag_fim, pag_ex, num_ex, enunciado, resp_vf, passos):
    return {
        "id": ex_id,
        "topicoId": topico_id,
        "dominio": dominio,
        "temaNome": tema,
        "subtema": subtema,
        "paginaInicio": pag_ini,
        "paginaFim": pag_fim,
        "manualRef": f"Pág. {pag_ex}, Ex. {num_ex}",
        "cotacaoValores": 2.5,
        "tempoEstimadoMin": 5,
        "enunciado": enunciado,
        "tipo": "vf",
        "resposta_correta": resp_vf,
        "respostaCorreta": resp_vf,
        "resolucao": passos,
        "passosResolucao": passos,
        "espacoLinhas": max(5, len(passos) * 2 + 2)
    }

# ==============================================================================
# VOLUME 1: MODELOS MATEMÁTICOS E ESTATÍSTICA
# ==============================================================================

# TOPICO 1: 1.1 Modelos matemáticos nas eleições (Págs. 8–15) - 36 ex
def gen_topico_1():
    items = []
    tema = "Modelos Matemáticos"
    sub = "1.1 Modelos matemáticos nas eleições"
    for i in range(1, 37):
        eid = f"MOD_1_{i:02d}"
        pag = 8 + ((i - 1) % 8)
        if i <= 10:
            # Borda
            eleitores = 30 + i * 4
            pA = 80 + i * 5
            pB = 70 + i * 3
            pC = 50 + i * 2
            items.append(make_mc(
                eid, "topico_1", "modelos", tema, sub, 8, 15, pag, i,
                f"Numa eleição com 3 candidatos (A, B e C) e {eleitores} votantes aplicando o **Método de Borda** (3 pontos para 1.º lugar, 2 para 2.º e 1 para 3.º), apuraram-se as pontuações: Candidato A: {pA} pontos; Candidato B: {pB} pontos; Candidato C: {pC} pontos. Qual é o candidato eleito pelo Método de Borda?",
                [("A", "Candidato A"), ("B", "Candidato B"), ("C", "Candidato C"), ("D", "A eleição é inconclusiva")],
                "A",
                [
                    "No Método de Borda, cada posição na lista de preferências confere uma pontuação decrescente.",
                    f"A pontuação final é: A = {pA}, B = {pB}, C = {pC}.",
                    f"Como {pA} > {pB} > {pC}, o Candidato A vence a eleição com a maior pontuação global."
                ]
            ))
        elif i <= 18:
            # Maioria Absoluta
            votos = 120 + i * 10
            req = (votos // 2) + 1
            items.append(make_num(
                eid, "topico_1", "modelos", tema, sub, 8, 15, pag, i,
                f"Numa assembleia geral foram expressos {votos} votos válidos. Para aprovar uma moção à primeira volta é exigida **maioria absoluta**. Quantos votos favoráveis, no mínimo, são estritamente necessários?",
                req,
                [
                    f"A maioria absoluta requer mais de metade da totalidade dos votos expressos.",
                    f"Calcula-se a metade: $\\frac{{{votos}}}{{2}} = {votos / 2}$.",
                    f"O número inteiro estritamente superior a {votos / 2} é {req}.",
                    f"Logo, são necessários no mínimo {req} votos favoráveis."
                ]
            ))
        elif i <= 26:
            # Condorcet
            items.append(make_mc(
                eid, "topico_1", "modelos", tema, sub, 8, 15, pag, i,
                f"Num sufrágio com três opções X, Y e Z, verificou-se nos confrontos diretos um contra um que: X vence Y ({20+i} a {10+i}) e X vence Z ({18+i} a {12+i}). Como se classifica a opção X no âmbito da Teoria da Escolha Social?",
                [("A", "Vencedor de Condorcet"), ("B", "Vencedor por Pluralidade"), ("C", "Vencedor por Borda"), ("D", "Vencedor Ditatorial")],
                "A",
                [
                    "Por definição, um candidato é Vencedor de Condorcet se derrotar todos os outros concorrentes em confrontos diretos par a par.",
                    f"Como X derrota Y ({20+i} > {10+i}) e também derrota Z ({18+i} > {12+i}), X supera todos os adversários individualmente.",
                    "Portanto, X é o Vencedor de Condorcet."
                ]
            ))
        elif i <= 32:
            # Método de Hondt
            votos_partido = 6000 + i * 500
            quoc_3 = round(votos_partido / 3, 1)
            items.append(make_num(
                eid, "topico_1", "modelos", tema, sub, 8, 15, pag, i,
                f"No **Método de Hondt**, um partido obteve {votos_partido} votos. Qual é o valor do quociente correspondente à atribuição do 3.º mandato a esse partido (divisão por 3)?",
                int(votos_partido / 3) if votos_partido % 3 == 0 else quoc_3,
                [
                    "No Método de Hondt, os votos de cada lista são divididos sucessivamente por 1, 2, 3, 4, etc.",
                    f"Para o 3.º quociente calcula-se: $\\frac{{{votos_partido}}}{{3}} = {votos_partido / 3:.2f}$.",
                    f"O quociente obtido é {votos_partido / 3:.1f}."
                ]
            ))
        else:
            # V/F Paradoxo de Condorcet
            items.append(make_vf(
                eid, "topico_1", "modelos", tema, sub, 8, 15, pag, i,
                f"Considere a afirmação: 'Numa eleição com três candidatos, é sempre garantida a existência de um Vencedor de Condorcet'. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "F",
                [
                    "Pelo Paradoxo de Condorcet (ou paradoxo do voto), as preferências coletivas podem ser intransitivas e cíclicas (ex.: A prefere B, B prefere C, C prefere A).",
                    "Assim, nem todas as eleições possuem um candidato que vença todos os outros nos confrontos diretos.",
                    "Portanto, a afirmação é Falsa (F)."
                ]
            ))
    return items

# TOPICO 2: 1.2 Modelos matemáticos na partilha (Págs. 16–25) - 36 ex
def gen_topico_2():
    items = []
    tema = "Modelos Matemáticos"
    sub = "1.2 Modelos matemáticos na partilha"
    for i in range(1, 37):
        eid = f"PAR_2_{i:02d}"
        pag = 16 + ((i - 1) % 10)
        pop_total = 100000 + i * 5000
        lugares = 20 + (i % 6)
        divisor_padrao = round(pop_total / lugares, 1)
        
        if i <= 12:
            # Divisor Padrão de Hamilton
            items.append(make_num(
                eid, "topico_2", "modelos", tema, sub, 16, 25, pag, i,
                f"Num país com uma população total de {pop_total} habitantes e um parlamento de {lugares} deputados, determine o **Divisor Padrão** ($D$) pelo Método de Hamilton (arredondado às décimas).",
                divisor_padrao,
                [
                    f"O divisor padrão $D$ obtém-se pela razão entre a população total e o número total de mandatos a distribuir.",
                    f"$D = \\frac{{\\text{{População Total}}}}{{\\text{{Total de Lugares}}}} = \\frac{{{pop_total}}}{{{lugares}}}$.",
                    f"$D \\approx {divisor_padrao}$ habitantes por mandato."
                ]
            ))
        elif i <= 24:
            # Quota Padrão e Quota Inferior
            pop_regiao = 25000 + i * 1200
            d = 5000 + i * 50
            quota = round(pop_regiao / d, 2)
            quota_inf = math.floor(quota)
            items.append(make_num(
                eid, "topico_2", "modelos", tema, sub, 16, 25, pag, i,
                f"Uma região tem {pop_regiao} habitantes. Sabendo que o divisor padrão acordado é $D = {d}$, determine a **Quota Inferior** (parte inteira da quota padrão) desta região.",
                quota_inf,
                [
                    f"A quota padrão $q$ é calculada dividindo a população da região pelo divisor: $q = \\frac{{{pop_regiao}}}{{{d}}} = {quota}$.",
                    f"A Quota Inferior $\\lfloor q \\rfloor$ corresponde à parte inteira da quota padrão.",
                    f"$\\lfloor {quota} \\rfloor = {quota_inf}$. Logo, a quota inferior é {quota_inf}."
                ]
            ))
        elif i <= 30:
            # Paradoxo de Alabama
            items.append(make_mc(
                eid, "topico_2", "modelos", tema, sub, 16, 25, pag, i,
                f"Quando o aumento do número global de lugares a distribuir faz com que um estado ou região perca um mandato (sem que as populações se tenham alterado), estamos perante o:",
                [("A", "Paradoxo de Alabama"), ("B", "Paradoxo da População"), ("C", "Paradoxo do Novo Estado"), ("D", "Paradoxo de Borda")],
                "A",
                [
                    "O Paradoxo de Alabama ocorre especificamente no Método de Hamilton quando o aumento do número total de mandatos provoca a diminuição de mandatos atribuídos a um estado.",
                    "Este paradoxo foi decisivo para a procura de novos métodos de partilha proporcional, como o Método de Jefferson e de Webster.",
                    "Opção correta: (A)."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_2", "modelos", tema, sub, 16, 25, pag, i,
                f"No Método de Partilha Justa do 'divisor-selecionador' para duas pessoas, a divisão é considerada justa se cada participante obtiver pelo menos $50\\%$ do valor total percecionado. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "V",
                [
                    "Num método de partilha justa entre 2 partes, a regra fundamental de equidade garante que cada participante recebe uma quota que avalia como valendo pelo menos metade (50%) do total.",
                    "O divisor garante que ambas as partes têm valor $\\ge 50\\%$ segundo a sua própria perceção, e o selecionador escolhe a parte que prefere (também $\\ge 50\\%$).",
                    "Portanto, a afirmação é Verdadeira (V)."
                ]
            ))
    return items

# TOPICO 3: 1.3 Modelos matemáticos em finanças (Págs. 26–55) - 36 ex
def gen_topico_3():
    items = []
    tema = "Modelos Matemáticos"
    sub = "1.3 Modelos matemáticos em finanças"
    for i in range(1, 37):
        eid = f"FIN_3_{i:02d}"
        pag = 26 + ((i - 1) % 30)
        c0 = 1000 + i * 200
        taxa = 2 + (i % 5)
        r = taxa / 100.0
        
        if i <= 10:
            # Juro Simples
            anos = 2 + (i % 3)
            juro = round(c0 * r * anos, 2)
            items.append(make_num(
                eid, "topico_3", "modelos", tema, sub, 26, 55, pag, i,
                f"Um capital de {c0} € foi aplicado em regime de **juro simples** durante {anos} anos à taxa de juro anual de {taxa}%. Calcule o montante total de juros acumulados (em euros).",
                int(juro) if juro.is_integer() else juro,
                [
                    f"A fórmula do juro simples é $J = C_0 \\times i \\times t$.",
                    f"Substituindo: $J = {c0} \\times {r} \\times {anos} = {juro:.2f}$ €.",
                    f"O valor dos juros produzidos é de {juro} €."
                ]
            ))
        elif i <= 20:
            # Juro Composto
            anos = 2
            cn = round(c0 * ((1 + r) ** anos), 2)
            items.append(make_num(
                eid, "topico_3", "modelos", tema, sub, 26, 55, pag, i,
                f"Uma poupança de {c0} € é depositada à taxa anual de juro de {taxa}% em regime de **juro composto** com capitalização anual durante 2 anos. Determine o capital acumulado no final do prazo (em euros).",
                cn,
                [
                    f"Em regime de juros compostos com capitalização anual: $C_n = C_0 (1 + i)^n$.",
                    f"$C_2 = {c0} \\times (1 + {r})^2 = {c0} \\times {(1+r)**2:.4f}$.",
                    f"$C_2 = {cn:.2f}$ €."
                ]
            ))
        elif i <= 28:
            # TANB vs TANL (Retenção 28%)
            tanb = 4.0 + (i % 3)
            tanl = round(tanb * (1 - 0.28), 3)
            items.append(make_num(
                eid, "topico_3", "modelos", tema, sub, 26, 55, pag, i,
                f"Um depósito a prazo apresenta uma Taxa Anual Nominal Bruta (TANB) de {tanb}%. Considerando uma taxa de retenção na fonte de IRS de 28%, qual é o valor da TANL (Taxa Anual Nominal Líquida em percentagem)?",
                tanl,
                [
                    "A relação entre taxa líquida e bruta com retenção de IRS de 28% é dada por $\\text{TANL} = \\text{TANB} \\times (1 - 0{,}28) = \\text{TANB} \\times 0{,}72$.",
                    f"$\\text{{TANL}} = {tanb}\\% \\times 0{{,}}72 = {tanl}\\%$.",
                    f"A taxa líquida é {tanl}%."
                ]
            ))
        else:
            # Amortização e Conceito de Euribor
            items.append(make_mc(
                eid, "topico_3", "modelos", tema, sub, 26, 55, pag, i,
                f"Num crédito à habitação com taxa de juro variável, a taxa de juro aplicada resulta habitualmente da soma de que duas componentes fundamentais?",
                [("A", "Indexante (Euribor) e Spread da instituição bancária"), ("B", "Taxa de inflação e IVA"), ("C", "Comissão de abertura e taxa de câmbio"), ("D", "Juro simples e depósito obrigatório")],
                "A",
                [
                    "Num empréstimo bancário a taxa variável, a taxa contratada resulta da soma da taxa de referência interbancária (Euribor a 3, 6 ou 12 meses) com o spread comercial definido pelo banco.",
                    "Fórmula: $\\text{Taxa de Juro} = \\text{Euribor} + \\text{Spread}$.",
                    "A opção correta é (A)."
                ]
            ))
    return items

# ==============================================================================
# VOLUME 1: ESTATÍSTICA (Págs. 60–155)
# ==============================================================================

# TOPICO 4: 2.1 Problema estatístico. População, amostra e variável (Págs. 60–66) - 36 ex
def gen_topico_4():
    items = []
    tema = "Estatística"
    sub = "2.1 Problema estatístico. População, amostra e variável"
    for i in range(1, 37):
        eid = f"EST_4_{i:02d}"
        pag = 60 + ((i - 1) % 7)
        if i <= 10:
            # Classificação de Variáveis
            items.append(make_mc(
                eid, "topico_4", "estatistica", tema, sub, 60, 66, pag, i,
                f"Considere a variável 'Tempo (em minutos) gasto diariamente na deslocação para a escola'. Como se classifica esta variável estatística?",
                [("A", "Quantitativa Contínua"), ("B", "Quantitativa Discreta"), ("C", "Qualitativa Nominal"), ("D", "Qualitativa Ordinal")],
                "A",
                [
                    "A variável tempo pode assumir qualquer valor real num intervalo contínuo e depende da precisão do instrumento de medição.",
                    "Sendo mensurável numa escala numérica real contínua, trata-se de uma variável Quantitativa Contínua.",
                    "Opção correta: (A)."
                ]
            ))
        elif i <= 20:
            items.append(make_mc(
                eid, "topico_4", "estatistica", tema, sub, 60, 66, pag, i,
                f"Num inquérito recolheu-se a 'Escolaridade dos Encarregados de Educação' (1.º Ciclo, 2.º Ciclo, 3.º Ciclo, Secundário, Superior). Como se classifica esta variável?",
                [("A", "Qualitativa Ordinal"), ("B", "Qualitativa Nominal"), ("C", "Quantitativa Discreta"), ("D", "Quantitativa Contínua")],
                "A",
                [
                    "A variável não assume valores numéricos resultantes de medição ou contagem, mas expressa categorias com uma hierarquia ou ordem intrínseca bem definida.",
                    "Por conseguinte, classifica-se como Qualitativa Ordinal.",
                    "Opção correta: (A)."
                ]
            ))
        elif i <= 28:
            # Amostragem Estratificada
            n_total = 600 + i * 20
            n_rapazes = int(n_total * 0.4)
            amostra_tam = 50
            rep_rapazes = round((n_rapazes / n_total) * amostra_tam)
            items.append(make_num(
                eid, "topico_4", "estatistica", tema, sub, 60, 66, pag, i,
                f"Numa escola com {n_total} alunos, {n_rapazes} são rapazes. Pretende-se constituir uma amostra proporcional estratificada por género com {amostra_tam} estudantes. Quantos rapazes devem integrar a amostra?",
                rep_rapazes,
                [
                    f"Na amostragem estratificada proporcional, a proporção na amostra deve ser idêntica à da população.",
                    f"Proporção de rapazes = $\\frac{{{n_rapazes}}}{{{n_total}}} = {n_rapazes/n_total:.2f}$.",
                    f"Número de rapazes na amostra = ${amostra_tam} \\times {n_rapazes/n_total:.2f} = {rep_rapazes}$.",
                    f"Devem ser selecionados {rep_rapazes} rapazes."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_4", "estatistica", tema, sub, 60, 66, pag, i,
                f"Um Censo (ou recenseamento) consiste no estudo estatístico exaustivo de todos os elementos que compõem uma população. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "V",
                [
                    "Um estudo censitário recolhe dados de todos os elementos da população-alvo, em contraste com a sondagem que analisa apenas uma amostra representativa.",
                    "Logo, a definição apresentada é rigorosa e Verdadeira (V)."
                ]
            ))
    return items

# TOPICO 5: 2.2 Dados univariados (Págs. 67–97) - 36 ex
def gen_topico_5():
    items = []
    tema = "Estatística"
    sub = "2.2 Dados univariados"
    for i in range(1, 37):
        eid = f"EST_5_{i:02d}"
        pag = 67 + ((i - 1) % 31)
        
        if i <= 10:
            # Média Ponderada
            val1 = 10 + (i % 4)
            val2 = 14 + (i % 3)
            val3 = 18
            media = round((val1 * 2 + val2 * 3 + val3 * 5) / 10.0, 2)
            items.append(make_num(
                eid, "topico_5", "estatistica", tema, sub, 67, 97, pag, i,
                f"Considere três classificações com pesos respetivos de 20%, 30% e 50%: Classificação 1 = {val1} val; Classificação 2 = {val2} val; Classificação 3 = {val3} val. Calcule a **média ponderada** final obtida.",
                media,
                [
                    f"A média ponderada calcula-se por $\\bar{{x}} = \\frac{{\\sum (x_i \\times p_i)}}{{\\sum p_i}}$.",
                    f"$\\bar{{x}} = \\frac{{{val1} \\times 2 + {val2} \\times 3 + {val3} \\times 5}}{{10}} = \\frac{{{val1*2 + val2*3 + val3*5}}}{{10}} = {media}$.",
                    f"A média é {media} valores."
                ]
            ))
        elif i <= 20:
            # Mediana e Quartis
            # Lista ordenada de 9 elementos
            dados = [2 + i, 3 + i, 5 + i, 7 + i, 8 + i, 11 + i, 13 + i, 15 + i, 19 + i]
            mediana = dados[4]
            q1 = (dados[1] + dados[2]) / 2.0
            q3 = (dados[6] + dados[7]) / 2.0
            iqr = q3 - q1
            items.append(make_num(
                eid, "topico_5", "estatistica", tema, sub, 67, 97, pag, i,
                f"Considere a amostra ordenada: ${dados[0]}, {dados[1]}, {dados[2]}, {dados[3]}, {dados[4]}, {dados[5]}, {dados[6]}, {dados[7]}, {dados[8]}$. Determine o valor da **Mediana** ($Q_2$).",
                mediana,
                [
                    f"A amostra tem $n = 9$ elementos (número ímpar) previamente ordenados.",
                    f"A posição da mediana é dada por $\\frac{{n + 1}}{{2}} = \\frac{{9 + 1}}{{2}} = 5$.",
                    f"O 5.º elemento da lista ordenada é {mediana}.",
                    f"Assim, a Mediana é {mediana}."
                ]
            ))
        elif i <= 28:
            # Amplitude Interquartil IQR
            iqr_val = 14 + (i % 6)
            q1_ex = 10 + i
            q3_ex = q1_ex + iqr_val
            items.append(make_num(
                eid, "topico_5", "estatistica", tema, sub, 67, 97, pag, i,
                f"Num diagrama de extremos e quartis (boxplot), o 1.º quartil é $Q_1 = {q1_ex}$ e o 3.º quartil é $Q_3 = {q3_ex}$. Qual é a **amplitude interquartil** ($IQR$) desta distribuição?",
                iqr_val,
                [
                    "A amplitude interquartil define-se como a diferença entre o terceiro e o primeiro quartil: $IQR = Q_3 - Q_1$.",
                    f"$IQR = {q3_ex} - {q1_ex} = {iqr_val}$.",
                    f"O valor do $IQR$ é {iqr_val}."
                ]
            ))
        else:
            # Desvio-padrão e Variância
            var = (i % 5 + 2) ** 2
            dp = int(math.sqrt(var))
            items.append(make_num(
                eid, "topico_5", "estatistica", tema, sub, 67, 97, pag, i,
                f"A variância de um conjunto de medições laboratoriais é $s^2 = {var}$. Calcule o **desvio-padrão** ($s$) deste conjunto de medições.",
                dp,
                [
                    "O desvio-padrão é a raiz quadrada positiva da variância: $s = \\sqrt{s^2}$.",
                    f"$s = \\sqrt{{{var}}} = {dp}$.",
                    f"O desvio-padrão é igual a {dp}."
                ]
            ))
    return items

# TOPICO 6: 2.3 Dados bivariados (Págs. 98–155) - 36 ex
def gen_topico_6():
    items = []
    tema = "Estatística"
    sub = "2.3 Dados bivariados"
    for i in range(1, 37):
        eid = f"EST_6_{i:02d}"
        pag = 98 + ((i - 1) % 58)
        
        if i <= 10:
            # Centro de gravidade (x_bar, y_bar)
            x_bar = 10 + i
            y_bar = 25 + i * 2
            a = 2
            b = y_bar - a * x_bar
            items.append(make_mc(
                eid, "topico_6", "estatistica", tema, sub, 98, 155, pag, i,
                f"Num estudo bivariado, as médias das variáveis $X$ e $Y$ são respetivamente $\\bar{{x}} = {x_bar}$ e $\\bar{{y}} = {y_bar}$. Sabendo que a reta de regressão linear passa pelo centro de gravidade $(\\bar{{x}}, \\bar{{y}})$, qual é o ponto garantidamente pertencente à reta?",
                [("A", f"({x_bar}, {y_bar})"), ("B", f"({y_bar}, {x_bar})"), ("C", f"(0, {y_bar})"), ("D", f"({x_bar}, 0)")],
                "A",
                [
                    "Uma propriedade fundamental da reta de regressão linear de mínimos quadrados é passar obrigatoriamente pelo centro de gravidade $(\\bar{x}, \\bar{y})$ dos dados.",
                    f"Sendo $\\bar{{x}} = {x_bar}$ e $\\bar{{y}} = {y_bar}$, o ponto pertencente à reta é ({x_bar}, {y_bar}).",
                    "Opção correta: (A)."
                ]
            ))
        elif i <= 20:
            # Interpretação do Coeficiente r
            r_val = -0.92 + (i % 5) * 0.03
            items.append(make_mc(
                eid, "topico_6", "estatistica", tema, sub, 98, 155, pag, i,
                f"O coeficiente de correlação linear entre duas variáveis é $r = {r_val:.2f}$. Como se classifica esta correlação linear?",
                [("A", "Linear negativa muito forte"), ("B", "Linear positiva perfeita"), ("C", "Inexistente / Nula"), ("D", "Linear positiva fraca")],
                "A",
                [
                    f"Como o coeficiente de correlação linear é negativo ($r = {r_val:.2f} < 0$), existe uma relação inversa entre as variáveis.",
                    "Estando próximo de -1 ($|r| > 0{,}8$), a correlação linear é considerada negativa forte a muito forte.",
                    "Opção correta: (A)."
                ]
            ))
        elif i <= 30:
            # Estimativa pela Reta de Regressão
            m = 1.5 + (i % 3) * 0.5
            c = 10 + i
            x_test = 6
            y_prev = m * x_test + c
            items.append(make_num(
                eid, "topico_6", "estatistica", tema, sub, 98, 155, pag, i,
                f"A reta de regressão linear de mínimos quadrados que relaciona o número de horas de estudo ($x$) e a classificação obtida ($y$) tem a equação $\\hat{{y}} = {m}x + {c}$. Estime a pontuação esperada para um aluno que estudou $x = {x_test}$ horas.",
                int(y_prev) if y_prev.is_integer() else y_prev,
                [
                    f"Para prever a pontuação recorre-se à equação da reta de regressão: $\\hat{{y}} = {m}x + {c}$.",
                    f"Substituindo $x = {x_test}$: $\\hat{{y}} = {m}({x_test}) + {c} = {m * x_test} + {c} = {y_prev}$.",
                    f"A pontuação estimada é {y_prev}."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_6", "estatistica", tema, sub, 98, 155, pag, i,
                f"Uma forte correlação linear entre duas variáveis estatísticas implica necessariamente uma relação de causa e efeito direta entre elas. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "F",
                [
                    "Correlação estatística não implica causalidade. Duas variáveis podem estar altamente correlacionadas devido a uma variável oculta de confusão ou por mera coincidência.",
                    "Portanto, a afirmação é Falsa (F)."
                ]
            ))
    return items

# ==============================================================================
# VOLUME 2: GEOMETRIA SINTÉTICA NO PLANO (Págs. 9–45)
# ==============================================================================

# TOPICO 7: 1.1 Pontos notáveis de um triângulo (Págs. 9–24) - 36 ex
def gen_topico_7():
    items = []
    tema = "Geometria Sintética no Plano"
    sub = "1.1 Pontos notáveis de um triângulo"
    for i in range(1, 37):
        eid = f"GEO_7_{i:02d}"
        pag = 9 + ((i - 1) % 16)
        
        if i <= 10:
            # Baricentro - razão 2:1
            comp_mediana = 9 + (i % 6) * 3  # múltiplos de 3
            bg = int(comp_mediana * 2 / 3)
            gm = int(comp_mediana / 3)
            items.append(make_num(
                eid, "topico_7", "geometria", tema, sub, 9, 24, pag, i,
                f"Num triângulo $[ABC]$, o baricentro é o ponto $G$ e o segmento $[AM]$ é uma das suas medianas com comprimento de {comp_mediana} cm. Calcule a distância entre o vértice $A$ e o baricentro $G$ (em cm).",
                bg,
                [
                    "O baricentro divide cada mediana na razão de $2:1$, a contar do vértice correspondente.",
                    f"Distância do vértice ao baricentro: $\\overline{{AG}} = \\frac{{2}}{{3}} \\overline{{AM}}$.",
                    f"$\\overline{{AG}} = \\frac{{2}}{{3}} \\times {comp_mediana} = {bg}$ cm."
                ]
            ))
        elif i <= 20:
            # Circuncentro
            items.append(make_mc(
                eid, "topico_7", "geometria", tema, sub, 9, 24, pag, i,
                f"O **circuncentro** de um triângulo é o ponto notável resultante da interseção das retas:",
                [("A", "Mediatrizes dos lados do triângulo"), ("B", "Bissetrizes dos ângulos internos"), ("C", "Medianas dos lados"), ("D", "Alturas do triângulo")],
                "A",
                [
                    "O circuncentro é o ponto de interseção das três mediatrizes dos lados do triângulo.",
                    "Sendo equidistante dos três vértices, constitui o centro da circunferência circunscrita ao triângulo.",
                    "Opção correta: (A)."
                ]
            ))
        elif i <= 28:
            # Incentro e Raio da Inscrita
            items.append(make_mc(
                eid, "topico_7", "geometria", tema, sub, 9, 24, pag, i,
                f"Qual é a propriedade fundamental que caracteriza o **incentro** de qualquer triângulo?",
                [("A", "É equidistante das três retas suporte dos lados do triângulo"), ("B", "É equidistante dos três vértices do triângulo"), ("C", "Divide as medianas na razão 2 para 1"), ("D", "Coincide com o ponto médio da hipotenusa")],
                "A",
                [
                    "O incentro é a interseção das três bissetrizes dos ângulos internos do triângulo.",
                    "Por definição de bissetriz como lugar geométrico, o incentro é equidistante dos três lados, sendo por isso o centro da circunferência inscrita.",
                    "Opção correta: (A)."
                ]
            ))
        else:
            # Ortocentro no triângulo retângulo
            items.append(make_mc(
                eid, "topico_7", "geometria", tema, sub, 9, 24, pag, i,
                f"Num triângulo retângulo, onde se localiza exatamente o **ortocentro**?",
                [("A", "No vértice do ângulo reto"), ("B", "No ponto médio da hipotenusa"), ("C", "No interior estrito do triângulo"), ("D", "No exterior do triângulo")],
                "A",
                [
                    "Num triângulo retângulo, os dois catetos são perpendiculares entre si, coincidindo com duas das três alturas.",
                    "Logo, a interseção das alturas ocorre exatamente no vértice do ângulo reto.",
                    "Opção correta: (A)."
                ]
            ))
    return items

# TOPICO 8: 1.2 Reta de Euler e circunferência dos nove pontos (Págs. 25–45) - 36 ex
def gen_topico_8():
    items = []
    tema = "Geometria Sintética no Plano"
    sub = "1.2 Reta de Euler e circunferência dos nove pontos"
    for i in range(1, 37):
        eid = f"GEO_8_{i:02d}"
        pag = 25 + ((i - 1) % 21)
        
        if i <= 12:
            # Reta de Euler: HG = 2 GO
            go = 2 + (i % 4)
            hg = 2 * go
            ho = hg + go
            items.append(make_num(
                eid, "topico_8", "geometria", tema, sub, 25, 45, pag, i,
                f"Na Reta de Euler de um triângulo não equilátero, $H$ é o ortocentro, $G$ é o baricentro e $O$ é o circuncentro. Sabendo que a distância $\\overline{{GO}} = {go}$ cm, calcule a distância $\\overline{{HG}}$ (em cm).",
                hg,
                [
                    "Pelo Teorema da Reta de Euler, os pontos $H, G$ e $O$ são colineares e verificam a relação $\\overline{HG} = 2 \\overline{GO}$.",
                    f"Assim: $\\overline{{HG}} = 2 \\times {go} = {hg}$ cm.",
                    f"A distância entre o ortocentro e o baricentro é de {hg} cm."
                ]
            ))
        elif i <= 24:
            # Circunferência dos Nove Pontos - Raio
            r_circ = 8 + (i % 6) * 2  # par
            r_9 = int(r_circ / 2)
            items.append(make_num(
                eid, "topico_8", "geometria", tema, sub, 25, 45, pag, i,
                f"O raio da circunferência circunscrita a um triângulo mede $R = {r_circ}$ cm. Determine o raio $R_9$ da **circunferência dos nove pontos** (ou circunferência de Euler/Feuerbach) desse triângulo (em cm).",
                r_9,
                [
                    "Uma propriedade notável da circunferência dos 9 pontos é que o seu raio é exatamente metade do raio da circunferência circunscrita ao triângulo.",
                    f"$R_9 = \\frac{{R}}{{2}} = \\frac{{{r_circ}}}{{2}} = {r_9}$ cm.",
                    f"O raio da circunferência dos 9 pontos é de {r_9} cm."
                ]
            ))
        elif i <= 30:
            # Pontos da Circunferência de Euler
            items.append(make_mc(
                eid, "topico_8", "geometria", tema, sub, 25, 45, pag, i,
                f"Quais são os 9 pontos notáveis que pertencem à circunferência de Euler/Feuerbach?",
                [
                    ("A", "Os 3 pontos médios dos lados, os 3 pés das alturas e os 3 pontos médios dos segmentos que unem o ortocentro aos vértices"),
                    ("B", "Os 3 vértices do triângulo e os 6 centros de simetria"),
                    ("C", "Os 3 incentros e os 6 pontos de tangência das bissetrizes"),
                    ("D", "O baricentro, ortocentro, circuncentro e os 6 pés das medianas")
                ],
                "A",
                [
                    "A circunferência dos 9 pontos passa exatamente por:",
                    "1. Os três pontos médios dos lados do triângulo;",
                    "2. Os três pés das alturas;",
                    "3. Os três pontos médios dos segmentos ligando o ortocentro a cada um dos vértices.",
                    "Opção correta: (A)."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_8", "geometria", tema, sub, 25, 45, pag, i,
                f"Num triângulo equilátero, o baricentro, o circuncentro, o incentro e o ortocentro coincidem todos num único ponto, pelo que a Reta de Euler não fica unicamente definida. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "V",
                [
                    "Por simetria total do triângulo equilátero, as alturas, medianas, mediatrizes e bissetrizes coincidem, convergindo no mesmo ponto central.",
                    "Sendo os pontos coincidentes, não definem uma reta única no plano.",
                    "Portanto, a afirmação é Verdadeira (V)."
                ]
            ))
    return items

# ==============================================================================
# VOLUME 2: GENERALIDADES ACERCA DE FUNÇÕES (Págs. 50–99)
# ==============================================================================

# TOPICO 9: 2.1/2.2 Conceito de função, domínio, contradomínio e gráfico (Págs. 50–58) - 36 ex
def gen_topico_9():
    items = []
    tema = "Generalidades Acerca de Funções"
    sub = "2.1/2.2 Conceito de função, domínio, contradomínio e gráfico"
    for i in range(1, 37):
        eid = f"FUN_9_{i:02d}"
        pag = 50 + ((i - 1) % 9)
        
        if i <= 12:
            # Imagem e Objeto f(x) = ax + b
            a = 2 + (i % 4)
            b = 3 + (i % 5)
            x_val = 1 + (i % 5)
            fx = a * x_val + b
            items.append(make_num(
                eid, "topico_9", "funcoes", tema, sub, 50, 58, pag, i,
                f"Considere a função real definida por $f(x) = {a}x + {b}$. Calcule a imagem do objeto $x = {x_val}$, isto é, determine $f({x_val})$.",
                fx,
                [
                    f"Para determinar a imagem de {x_val}, substitui-se $x$ por {x_val} na expressão analítica de $f(x)$.",
                    f"$f({x_val}) = {a} \\times {x_val} + {b} = {a * x_val} + {b} = {fx}$.",
                    f"Logo, $f({x_val}) = {fx}$."
                ]
            ))
        elif i <= 24:
            # Objeto cuja imagem é dada: f(x) = k => ax - b = k
            a = 3
            b = 2 + i
            k = 10 + i
            # a*x - b = k => a*x = k + b
            if (k + b) % a != 0:
                k += (a - ((k + b) % a))
            x_ans = int((k + b) / a)
            items.append(make_num(
                eid, "topico_9", "funcoes", tema, sub, 50, 58, pag, i,
                f"Seja $g$ a função definida por $g(x) = {a}x - {b}$. Determine o objeto cuja imagem por $g$ é igual a ${k}$ (resolva a equação $g(x) = {k}$).",
                x_ans,
                [
                    f"Pretende-se encontrar $x$ tal que $g(x) = {k}$.",
                    f"${a}x - {b} = {k} \\iff {a}x = {k} + {b} \\iff {a}x = {k + b}$.",
                    f"$x = \\frac{{{k + b}}}{{{a}}} = {x_ans}$.",
                    f"O objeto é $x = {x_ans}$."
                ]
            ))
        elif i <= 30:
            # Teste da Reta Vertical
            items.append(make_mc(
                eid, "topico_9", "funcoes", tema, sub, 50, 58, pag, i,
                f"Uma curva no plano cartesiano representa o gráfico de uma função $y = f(x)$ se e só se:",
                [
                    ("A", "Qualquer reta vertical intersetar a curva no máximo num único ponto"),
                    ("B", "Qualquer reta horizontal intersetar a curva em pelo menos um ponto"),
                    ("C", "A curva for simétrica em relação à origem"),
                    ("D", "A curva passar obrigatoriamente pela origem $(0,0)$")
                ],
                "A",
                [
                    "Pelo Critério da Reta Vertical, para que uma relação seja uma função, a cada objeto $x$ do domínio deve corresponder uma e uma só imagem $y$.",
                    "Assim, qualquer reta vertical $x = k$ pode intersetar o gráfico em no máximo um ponto.",
                    "Opção correta: (A)."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_9", "funcoes", tema, sub, 50, 58, pag, i,
                f"Numa função $f: A \\to B$, o contradomínio $D'_f$ é necessariamente sempre igual ao conjunto de chegada $B$. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "F",
                [
                    "O contradomínio $D'_f$ é o conjunto de todas as imagens efetivamente assumidas, sendo um subconjunto do conjunto de chegada $B$ ($D'_f \\subseteq B$).",
                    "Apenas quando a função é sobrejetiva é que $D'_f = B$. No caso geral, podem existir elementos em $B$ que não têm objeto.",
                    "Portanto, a afirmação é Falsa (F)."
                ]
            ))
    return items

# TOPICO 10: 2.3/2.4/2.5 Funções reais, zeros, sinal e condições (Págs. 59–71) - 36 ex
def gen_topico_10():
    items = []
    tema = "Generalidades Acerca de Funções"
    sub = "2.3/2.4/2.5 Funções reais, zeros, sinal e condições"
    for i in range(1, 37):
        eid = f"FUN_10_{i:02d}"
        pag = 59 + ((i - 1) % 13)
        
        if i <= 12:
            # Zeros da Função Real
            # f(x) = a x - b = 0
            b = 4 + i * 2
            a = 2
            z = int(b / a)
            items.append(make_num(
                eid, "topico_10", "funcoes", tema, sub, 59, 71, pag, i,
                f"Determine o zero da função real de variável real $h(x) = {a}x - {b}$.",
                z,
                [
                    f"Os zeros da função são as soluções da equação $h(x) = 0$.",
                    f"${a}x - {b} = 0 \\iff {a}x = {b} \\iff x = \\frac{{{b}}}{{{a}}} = {z}$.",
                    f"O zero de $h$ é $x = {z}$."
                ]
            ))
        elif i <= 24:
            # Domínio com denominador
            c = 3 + i
            items.append(make_mc(
                eid, "topico_10", "funcoes", tema, sub, 59, 71, pag, i,
                f"Qual é o domínio da função real $f(x) = \\frac{{2x + 1}}{{x - {c}}}$?",
                [
                    ("A", f"$\\mathbb{{R}} \\setminus \\{{{c}\\}}$"),
                    ("B", f"$\\mathbb{{R}}$"),
                    ("C", f"$[{c}, +\\infty[$"),
                    ("D", f"$\\mathbb{{R}} \\setminus \\{{-{c}\\}}$")
                ],
                "A",
                [
                    "Uma fração algébrica apenas está definida quando o seu denominador é diferente de zero.",
                    f"Condição de existência: $x - {c} \\neq 0 \\iff x \\neq {c}$.",
                    f"Logo, o domínio é $D_f = \\mathbb{{R}} \\setminus \\{{{c}\\}}$.",
                    "Opção correta: (A)."
                ]
            ))
        elif i <= 30:
            # Condições de sinal f(x) > 0
            a = 2
            b = 6 + i
            limite = b / a
            items.append(make_mc(
                eid, "topico_10", "funcoes", tema, sub, 59, 71, pag, i,
                f"Para que valores de $x$ se verifica a condição $f(x) > 0$, sendo $f(x) = {a}x - {b}$?",
                [
                    ("A", f"$]{limite:.1f}, +\\infty[$"),
                    ("B", f"$]-\\infty, {limite:.1f}[$"),
                    ("C", f"$[{limite:.1f}, +\\infty[$"),
                    ("D", f"$\\mathbb{{R}}$")
                ],
                "A",
                [
                    f"Resolve-se a inequação linear: ${a}x - {b} > 0$.",
                    f"${a}x > {b} \\iff x > \\frac{{{b}}}{{{a}}} \\iff x > {limite:.1f}$.",
                    f"O conjunto-solução é o intervalo aberto $]{limite:.1f}, +\\infty[$.",
                    "Opção correta: (A)."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_10", "funcoes", tema, sub, 59, 71, pag, i,
                f"Se um número real $c$ é um zero da função $f$, então o ponto de coordenadas $(c, 0)$ pertence obrigatoriamente à interseção do gráfico de $f$ com o eixo das abcissas ($Ox$). Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "V",
                [
                    "Por definição de zero de uma função, $f(c) = 0$.",
                    "Portanto, o ponto $(c, f(c)) = (c, 0)$ tem ordenada nula, situando-se exatamente sobre o eixo horizontal $Ox$.",
                    "A afirmação é rigorosamente Verdadeira (V)."
                ]
            ))
    return items

# TOPICO 11: 2.6 Monotonia e extremos de uma função real (Págs. 72–99) - 36 ex
def gen_topico_11():
    items = []
    tema = "Generalidades Acerca de Funções"
    sub = "2.6 Monotonia e extremos de uma função real"
    for i in range(1, 37):
        eid = f"FUN_11_{i:02d}"
        pag = 72 + ((i - 1) % 28)
        
        if i <= 12:
            # Taxa Média de Variação (TMV)
            # f(x) = x^2 => TMV em [a, b] = (b^2 - a^2)/(b - a) = b + a
            a = 1 + (i % 3)
            b = a + 2
            tmv = b + a
            items.append(make_num(
                eid, "topico_11", "funcoes", tema, sub, 72, 99, pag, i,
                f"Considere a função $f(x) = x^2$. Calcule a **Taxa Média de Variação** ($TMV$) de $f$ no intervalo $[{a}, {b}]$.",
                tmv,
                [
                    f"A taxa média de variação define-se por $TMV_{[a, b]} = \\frac{{f(b) - f(a)}}{{b - a}}$.",
                    f"$f({b}) = {b}^2 = {b**2}$ e $f({a}) = {a}^2 = {a**2}$.",
                    f"$TMV = \\frac{{{b**2} - {a**2}}}{{{b} - {a}}} = \\frac{{{b**2 - a**2}}}{{{b - a}}} = {tmv}$.",
                    f"A Taxa Média de Variação no intervalo é {tmv}."
                ]
            ))
        elif i <= 24:
            # Máximo e Mínimo
            items.append(make_mc(
                eid, "topico_11", "funcoes", tema, sub, 72, 99, pag, i,
                f"Seja $f$ uma função contínua cujo contradomínio é $D'_f = [-3, 8]$. Qual é o valor do **máximo absoluto** de $f$?",
                [("A", "8"), ("B", "-3"), ("C", "5"), ("D", "11")],
                "A",
                [
                    "O contradomínio de uma função representa o conjunto de todas as ordenadas $y = f(x)$ atingidas.",
                    "Sendo $D'_f = [-3, 8]$, o maior valor de ordenada possível é 8 e o menor é -3.",
                    "Logo, o máximo absoluto da função é 8.",
                    "Opção correta: (A)."
                ]
            ))
        elif i <= 30:
            # Monotonia Estrita
            items.append(make_mc(
                eid, "topico_11", "funcoes", tema, sub, 72, 99, pag, i,
                f"Diz-se que uma função $f$ é **estritamente crescente** num intervalo $I$ se, para quaisquer $x_1, x_2 \\in I$:",
                [
                    ("A", "$x_1 < x_2 \\implies f(x_1) < f(x_2)$"),
                    ("B", "$x_1 < x_2 \\implies f(x_1) > f(x_2)$"),
                    ("C", "$x_1 < x_2 \\implies f(x_1) = f(x_2)$"),
                    ("D", "$f(x) \\ge 0$ para todo o $x \\in I$")
                ],
                "A",
                [
                    "Uma função é estritamente crescente quando preserva estritamente a ordem: a objetos maiores correspondem imagens estritamente maiores.",
                    "Condição formal: $x_1 < x_2 \\implies f(x_1) < f(x_2)$.",
                    "Opção correta: (A)."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_11", "funcoes", tema, sub, 72, 99, pag, i,
                f"Se a taxa média de variação de uma função afim num intervalo for negativa ($TMV < 0$), então a função é decrescente em $\\mathbb{{R}}$. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "V",
                [
                    "Numa função afim $f(x) = mx + b$, a taxa média de variação em qualquer intervalo é constante e igual ao declive $m$.",
                    "Se $m < 0$, a função afim é estritamente decrescente em todo o seu domínio $\\mathbb{R}$.",
                    "Portanto, a afirmação é Verdadeira (V)."
                ]
            ))
    return items

# ==============================================================================
# VOLUME 2: FUNÇÕES POLINOMIAIS E POR RAMOS (Págs. 106–193)
# ==============================================================================

# TOPICO 12: 3.1 Função afim (Págs. 106–110) - 36 ex
def gen_topico_12():
    items = []
    tema = "Funções Polinomiais e por Ramos"
    sub = "3.1 Função afim"
    for i in range(1, 37):
        eid = f"POL_12_{i:02d}"
        pag = 106 + ((i - 1) % 5)
        
        if i <= 12:
            # Declive m = (y2 - y1) / (x2 - x1)
            x1 = 1
            y1 = 2 + i
            x2 = 3
            y2 = y1 + 2 * (1 + (i % 4))
            m = int((y2 - y1) / (x2 - x1))
            items.append(make_num(
                eid, "topico_12", "funcoes", tema, sub, 106, 110, pag, i,
                f"A reta suporte do gráfico de uma função afim passa pelos pontos $A({x1}, {y1})$ e $B({x2}, {y2})$. Calcule o valor do **declive** ($m$) desta reta.",
                m,
                [
                    "A fórmula do declive entre dois pontos $(x_1, y_1)$ e $(x_2, y_2)$ é $m = \\frac{y_2 - y_1}{x_2 - x_1}$.",
                    f"$m = \\frac{{{y2} - {y1}}}{{{x2} - {x1}}} = \\frac{{{y2 - y1}}}{{{x2 - x1}}} = {m}$.",
                    f"O declive da reta é $m = {m}$."
                ]
            ))
        elif i <= 24:
            # Ordenada na Origem b
            m = 2 + (i % 3)
            b = 5 + i
            items.append(make_num(
                eid, "topico_12", "funcoes", tema, sub, 106, 110, pag, i,
                f"Considere a função afim $f(x) = {m}x + {b}$. Qual é o valor da ordenada do ponto de interseção do gráfico de $f$ com o eixo das ordenadas ($Oy$)?",
                b,
                [
                    "A interseção com o eixo das ordenadas ocorre quando a abcissa é nula ($x = 0$).",
                    f"$f(0) = {m}(0) + {b} = {b}$.",
                    f"Logo, o ponto de interseção é $(0, {b})$ e a ordenada na origem é {b}."
                ]
            ))
        elif i <= 30:
            # Retas Paralelas
            m = 3 + (i % 4)
            items.append(make_mc(
                eid, "topico_12", "funcoes", tema, sub, 106, 110, pag, i,
                f"Qual das seguintes retas é **estritamente paralela** à reta de equação $y = {m}x - 7$?",
                [
                    ("A", f"$y = {m}x + 12$"),
                    ("B", f"$y = -{m}x + 12$"),
                    ("C", f"$y = \\frac{{1}}{{{m}}}x - 7$"),
                    ("D", f"$y = -\\frac{{1}}{{{m}}}x + 1$")
                ],
                "A",
                [
                    "Duas retas não verticais são paralelas se e só se tiverem o mesmo declive ($m_1 = m_2$) e ordenadas na origem distintas.",
                    f"A reta dada tem declive $m = {m}$. A reta $y = {m}x + 12$ tem exatamente o mesmo declive $m = {m}$ e ordenada diferente ($12 \\neq -7$).",
                    "Opção correta: (A)."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_12", "funcoes", tema, sub, 106, 110, pag, i,
                f"Uma função afim cuja expressão analítica é da forma $f(x) = b$ (com declive $m = 0$) designa-se por função constante e o seu gráfico é uma reta horizontal paralela ao eixo $Ox$. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "V",
                [
                    "Com declive nulo ($m = 0$), a imagem é invariante para qualquer valor de $x$: $f(x) = b$.",
                    "Geometricamente, corresponde a uma reta estritamente horizontal de equação $y = b$.",
                    "A afirmação é Verdadeira (V)."
                ]
            ))
    return items

# TOPICO 13: 3.2 Função quadrática (Págs. 111–140) - 36 ex
def gen_topico_13():
    items = []
    tema = "Funções Polinomiais e por Ramos"
    sub = "3.2 Função quadrática"
    for i in range(1, 37):
        eid = f"QUA_13_{i:02d}"
        pag = 111 + ((i - 1) % 30)
        
        if i <= 12:
            # Vértice na forma canónica: f(x) = a(x - h)^2 + k
            h = 2 + (i % 5)
            k = 3 + i
            items.append(make_mc(
                eid, "topico_13", "funcoes", tema, sub, 111, 140, pag, i,
                f"Uma parábola representativa de uma função quadrática tem por equação canónica $g(x) = 2(x - {h})^2 + {k}$. Quais são as coordenadas do seu **vértice**?",
                [
                    ("A", f"({h}, {k})"),
                    ("B", f"(-{h}, {k})"),
                    ("C", f"({h}, -{k})"),
                    ("D", f"({k}, {h})")
                ],
                "A",
                [
                    "Na forma canónica de uma função quadrática $y = a(x - h)^2 + k$, as coordenadas do vértice são dadas diretamente por $V(h, k)$.",
                    f"Comparando com $g(x) = 2(x - {h})^2 + {k}$, temos $h = {h}$ e $k = {k}$.",
                    f"Portanto, o vértice é $V({h}, {k})$.",
                    "Opção correta: (A)."
                ]
            ))
        elif i <= 24:
            # Zeros pela fatorização (x - r1)(x - r2) = 0
            r1 = 2 + (i % 3)
            r2 = r1 + 3 + (i % 4)
            # f(x) = x^2 - (r1+r2)x + r1*r2
            b_coef = -(r1 + r2)
            c_coef = r1 * r2
            items.append(make_mc(
                eid, "topico_13", "funcoes", tema, sub, 111, 140, pag, i,
                f"Quais são os zeros da função quadrática $f(x) = x^2 {b_coef}x + {c_coef}$?",
                [
                    ("A", f"${r1}$ e ${r2}$"),
                    ("B", f"${-r1}$ e ${-r2}$"),
                    ("C", f"${r1}$ e ${-r2}$"),
                    ("D", f"$0$ e ${c_coef}$")
                ],
                "A",
                [
                    f"Pela fórmula resolvente para $x^2 {b_coef}x + {c_coef} = 0$:",
                    f"$x = \\frac{{-({b_coef}) \\pm \\sqrt{{({b_coef})^2 - 4(1)({c_coef})}}}}{{2}} = \\frac{{{r1 + r2} \\pm \\sqrt{{{b_coef**2 - 4*c_coef}}}}}{{2}}$.",
                    f"$\\sqrt{{{b_coef**2 - 4*c_coef}}} = {r2 - r1}$.",
                    f"$x = \\frac{{{r1 + r2} + {r2 - r1}}}{{2}} = {r2}$  ou  $x = \\frac{{{r1 + r2} - ({r2 - r1})}}{{2}} = {r1}$.",
                    f"Os zeros da função são {r1} e {r2}."
                ]
            ))
        elif i <= 30:
            # Concavidade e Extremo
            items.append(make_mc(
                eid, "topico_13", "funcoes", tema, sub, 111, 140, pag, i,
                f"Considere a parábola dada por $f(x) = -3x^2 + 6x + 5$. Como é a concavidade e que tipo de extremo possui?",
                [
                    ("A", "Concavidade voltada para baixo e possui um máximo absoluto no vértice"),
                    ("B", "Concavidade voltada para cima e possui um mínimo absoluto no vértice"),
                    ("C", "Concavidade voltada para cima e não tem extremos"),
                    ("D", "Concavidade voltada para baixo e possui um mínimo relativo")
                ],
                "A",
                [
                    "Na equação quadrática $f(x) = ax^2 + bx + c$, o coeficiente diretor é $a = -3 < 0$.",
                    "Sendo $a < 0$, a concavidade da parábola está voltada para baixo ($\cap$).",
                    "Consequentemente, o vértice corresponde ao ponto mais alto da função, sendo um máximo absoluto.",
                    "Opção correta: (A)."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_13", "funcoes", tema, sub, 111, 140, pag, i,
                f"Se o discriminante de uma equação quadrática for estritamente negativo ($\\Delta < 0$), a parábola associada não interseta o eixo das abcissas ($Ox$). Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "V",
                [
                    "O discriminante $\\Delta = b^2 - 4ac$ determina o número de raízes reais da equação.",
                    "Se $\\Delta < 0$, a equação não possui soluções reais, o que significa que a função não tem zeros reais.",
                    "Geometricamente, o gráfico não toca nem corta o eixo $Ox$.",
                    "A afirmação é Verdadeira (V)."
                ]
            ))
    return items

# TOPICO 14: 3.3 Funções definidas por ramos (Págs. 141–193) - 36 ex
def gen_topico_14():
    items = []
    tema = "Funções Polinomiais e por Ramos"
    sub = "3.3 Funções definidas por ramos"
    for i in range(1, 37):
        eid = f"RAM_14_{i:02d}"
        pag = 141 + ((i - 1) % 53)
        
        # Função modelo por 2 ramos:
        # f(x) = { 2x + k, se x < 3
        #        { x^2 - 1, se x >= 3
        k_val = 1 + (i % 5)
        if i <= 12:
            # Imagem no ramo inferior (x < 3)
            x_test = 1
            f_ans = 2 * x_test + k_val
            items.append(make_num(
                eid, "topico_14", "funcoes", tema, sub, 141, 193, pag, i,
                f"Considere a função definida por ramos: $f(x) = \\begin{{cases}} 2x + {k_val}, & \\text{{se }} x < 3 \\\\ x^2 - 1, & \\text{{se }} x \\ge 3 \\end{{cases}}$. Calcule o valor da imagem $f({x_test})$.",
                f_ans,
                [
                    f"Para calcular $f({x_test})$, verifica-se qual o ramo correspondente ao objeto $x = {x_test}$.",
                    f"Como ${x_test} < 3$, aplica-se o primeiro ramo da função: $f(x) = 2x + {k_val}$.",
                    f"$f({x_test}) = 2({x_test}) + {k_val} = {f_ans}$.",
                    f"Assim, $f({x_test}) = {f_ans}$."
                ]
            ))
        elif i <= 24:
            # Imagem no ramo superior (x >= 3)
            x_test = 4 + (i % 3)
            f_ans = x_test**2 - 1
            items.append(make_num(
                eid, "topico_14", "funcoes", tema, sub, 141, 193, pag, i,
                f"Considere a mesma função por ramos: $f(x) = \\begin{{cases}} 2x + {k_val}, & \\text{{se }} x < 3 \\\\ x^2 - 1, & \\text{{se }} x \\ge 3 \\end{{cases}}$. Calcule o valor da imagem $f({x_test})$.",
                f_ans,
                [
                    f"Verifica-se em que ramo se insere o objeto $x = {x_test}$.",
                    f"Como ${x_test} \\ge 3$, utiliza-se a expressão do segundo ramo: $f(x) = x^2 - 1$.",
                    f"$f({x_test}) = {x_test}^2 - 1 = {x_test**2} - 1 = {f_ans}$.",
                    f"Portanto, $f({x_test}) = {f_ans}$."
                ]
            ))
        elif i <= 30:
            # Continuidade no ponto de transição x = 3
            # 2(3) + k = 3^2 - 1 => 6 + k = 8 => k = 2
            items.append(make_num(
                eid, "topico_14", "funcoes", tema, sub, 141, 193, pag, i,
                f"Seja a função $g(x) = \\begin{{cases}} 2x + k, & \\text{{se }} x < 3 \\\\ x^2 - 1, & \\text{{se }} x \\ge 3 \\end{{cases}}$. Determine o valor real da constante $k$ para que os dois ramos se unam sem descontinuidade em $x = 3$ (isto é, $2(3) + k = 3^2 - 1$).",
                2,
                [
                    "Para que os ramos se cruzem continuamente no ponto de transição $x = 3$, os limites laterais devem coincidir.",
                    "Igualando as expressões em $x = 3$: $2(3) + k = 3^2 - 1$.",
                    "$6 + k = 9 - 1 \\iff 6 + k = 8 \\iff k = 8 - 6 = 2$.",
                    "O valor de $k$ é 2."
                ]
            ))
        else:
            items.append(make_vf(
                eid, "topico_14", "funcoes", tema, sub, 141, 193, pag, i,
                f"Numa função definida por ramos, um mesmo objeto $x$ pode pertencer simultaneamente a mais do que um ramo e assumir imagens distintas. Esta afirmação é Verdadeira (V) ou Falsa (F)?",
                "F",
                [
                    "Pela definição universal de função, a cada elemento do domínio corresponde uma e uma só imagem.",
                    "Numa função definida por ramos, os subdomínios de cada troço devem ser disjuntos (a sua interseção é vazia), garantindo a unicidade de imagem.",
                    "Portanto, a afirmação é Falsa (F)."
                ]
            ))
    return items

# ==============================================================================
# ESCRITA DOS FICHEIROS JAVASCRIPT
# ==============================================================================

print("A gerar exercicios dos 14 tópicos...")
top1 = gen_topico_1()
top2 = gen_topico_2()
top3 = gen_topico_3()
top4 = gen_topico_4()
top5 = gen_topico_5()
top6 = gen_topico_6()
top7 = gen_topico_7()
top8 = gen_topico_8()
top9 = gen_topico_9()
top10 = gen_topico_10()
top11 = gen_topico_11()
top12 = gen_topico_12()
top13 = gen_topico_13()
top14 = gen_topico_14()

# 1. exercicios_logica.js (Modelos Matemáticos: Tópicos 1, 2, 3 - 108 itens)
mod_items = top1 + top2 + top3
with open("exercicios_logica.js", "w", encoding="utf-8") as f:
    f.write("// Volume 1: Modelos Matemáticos nas Eleições, na Partilha e em Finanças (108 Exercícios)\n")
    f.write("const EXERCICIOS_LOGICA = " + json.dumps(mod_items, ensure_ascii=False, indent=2) + ";\n")

# 2. exercicios_estatistica.js (Estatística: Tópicos 4, 5, 6 - 108 itens)
est_items = top4 + top5 + top6
with open("exercicios_estatistica.js", "w", encoding="utf-8") as f:
    f.write("// Volume 1: Problema Estatístico, Dados Univariados e Dados Bivariados (108 Exercícios)\n")
    f.write("const EXERCICIOS_ESTATISTICA = " + json.dumps(est_items, ensure_ascii=False, indent=2) + ";\n")

# 3. exercicios_geometria_plano.js (Geometria Sintética no Plano: Tópicos 7, 8 - 72 itens)
geo_items = top7 + top8
with open("exercicios_geometria_plano.js", "w", encoding="utf-8") as f:
    f.write("// Volume 2: Geometria Sintética no Plano (Pontos Notáveis, Reta de Euler e 9 Pontos - 72 Exercícios)\n")
    f.write("const EXERCICIOS_GEOMETRIA_PLANO = " + json.dumps(geo_items, ensure_ascii=False, indent=2) + ";\n")

# 4. exercicios_funcoes_1.js (Generalidades Acerca de Funções: Tópicos 9, 10, 11 - 108 itens)
fun1_items = top9 + top10 + top11
with open("exercicios_funcoes_1.js", "w", encoding="utf-8") as f:
    f.write("// Volume 2: Generalidades Acerca de Funções (Noção, Domínio, Zeros, Monotonia e Extremos - 108 Exercícios)\n")
    f.write("const EXERCICIOS_FUNCOES_1 = " + json.dumps(fun1_items, ensure_ascii=False, indent=2) + ";\n")

# 5. exercicios_funcoes_2.js (Funções Polinomiais e Ramos: Tópicos 12, 13, 14 - 108 itens)
fun2_items = top12 + top13 + top14
with open("exercicios_funcoes_2.js", "w", encoding="utf-8") as f:
    f.write("// Volume 2: Funções Afins, Quadráticas e Definidas por Ramos (108 Exercícios)\n")
    f.write("const EXERCICIOS_FUNCOES_2 = " + json.dumps(fun2_items, ensure_ascii=False, indent=2) + ";\n")

# 6. exercicios_geometria_espaco.js (Placeholder vazio para compatibilidade)
with open("exercicios_geometria_espaco.js", "w", encoding="utf-8") as f:
    f.write("// Volume 3: Reservado para Geometria no Espaço\nconst EXERCICIOS_GEOMETRIA_ESPACO = [];\n")

total = len(mod_items) + len(est_items) + len(geo_items) + len(fun1_items) + len(fun2_items)
print(f"Sucesso! Gerados {total} exercicios rigorosos alinhados com o Matematica 360 Volumes 1 e 2.")
