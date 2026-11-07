# -*- coding: utf-8 -*-
import os

os.chdir(r"C:\Users\leozi\Documents\Antigravity\Explicações Online")

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

scripts_to_inline = [
    "banco_topicos.js",
    "exercicios_logica.js",
    "exercicios_geometria_plano.js",
    "exercicios_geometria_espaco.js",
    "exercicios_funcoes_1.js",
    "exercicios_funcoes_2.js",
    "exercicios_estatistica.js",
    "app.js"
]

for s in scripts_to_inline:
    tag = f'<script src="{s}"></script>'
    if os.path.exists(s):
        with open(s, "r", encoding="utf-8") as sf:
            content = sf.read()
        inlined = f"<script>\n{content}\n</script>"
        html = html.replace(tag, inlined)

with open("matematica_standalone.html", "w", encoding="utf-8") as f:
    f.write(html)

print(f"Generated standalone HTML: {len(html)} bytes")
