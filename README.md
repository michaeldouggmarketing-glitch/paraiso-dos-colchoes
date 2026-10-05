# Paraíso dos Colchões

Landing page estática em português. V3 conduzida pelo código, conforme a referência cinematográfica fixada pelo usuário: Barlow Condensed, petróleo/laranja, foto original do casal e movimento coordenado. Cinema B e sua antiga aprovação são histórico rejeitado; não há comp aprovado para a V3.

## Executar e publicar

Não exige dependências de instalação. Com Node.js disponível:

```sh
npm run build
python3 -m http.server 8080 --directory dist
```

Abra `http://localhost:8080`. `build.mjs` recria `dist` com os quatro arquivos do site e assets permitidos. Documentos, pesquisa, capturas e JSONs de proveniência ficam fora da saída pública. `vercel.json` define `node build.mjs`, saída `dist`, `framework: null`, URLs limpas e cabeçalhos.

Repositório: [michaeldouggmarketing-glitch/paraiso-dos-colchoes](https://github.com/michaeldouggmarketing-glitch/paraiso-dos-colchoes). Produção: [paraiso-dos-colchoes.vercel.app](https://paraiso-dos-colchoes.vercel.app/). Publicação READY e acesso público verificados para o commit `c4f771e2e8a50be4f363e1c83d873e9362261ff9`, deployment `dpl_BkBcdFRq4ucUEHyzgjkBd7Zxerc2`. Estes documentos seguem em commit posterior.

## Conteúdo e assets

WhatsApp provisório da Josy: `5535998290565`, em `app.js` e nos fallbacks de `index.html`. O guia abre uma mensagem preparada; não envia automaticamente. Castor tem prioridade, com Ortobom e Probel. Estoque, preços, número próprio, horários e termos comerciais aguardam confirmação.

Os oito rasters utilizados têm origem registrada em `assets/<arquivo>.webp.json`: foto original `casal-castor`; ambiente de catálogo `castor-ambiente`; produtos oficiais `castor-amazon-gel`, `castor-silver-star`, `castor-red-white`, `ortobom-liberty`, `probel-collin` e `probel-akira`. `research/products.json` guarda fontes de catálogo. O casal/mascote permanece original. O ambiente Castor pode ser renderização/composição e não representa a loja nem comprova fotografia física. O vídeo de feira não é apresentado como filmagem da loja.

Fontes ativas auto-hospedadas: Barlow Condensed 600 e DM Sans 400/500/600/700. Licenças: `assets/barlowcondensed.OFL.txt` e `assets/dmsans.OFL.txt`. Bibliotecas locais: GSAP/ScrollTrigger 3.13.0, com licença nos cabeçalhos, e Lenis 1.3.11 com `assets/vendor/lenis.LICENSE.txt`.

## Interface e verificação

`app.js` controla catálogo, filtros, guia, menu e modelos Castor. `motion.js` coordena GSAP/ScrollTrigger, Lenis em ponteiro fino, luz WebGL, máscaras, parallax e cena final expansiva. Movimento reduzido mantém conteúdo completo e controles.

`DESIGN.md` registra tokens reais; `.impeccable/design.json` contém extensões e cinco exemplos autossuficientes. O surface brief guarda história e composição específicas. Seed atual: `865cbdc4`, direção 4 de 7, fonte degradada após um retry; nenhum quality board externo foi inspecionado. Arquivos históricos são preservados.

Evidência em `.impeccable/review/v3/`: `verification.json` registra fluxos em 1440×1000, 1280×800, 390×844 e 360×800; `fix-verification.json` registra proporções de mídia e separação dos controles. `finish-review.md` e `finish-verdict.md` concluem `disposition: ship` no escopo das duas correções, ambas resolvidas, com 14 capturas finais válidas. Não é uma nova revisão integral nem medição de suavidade temporal por stills.
