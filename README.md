# Paraíso dos Colchões

Site estático em português, V4 orientada a produtos e quartos completos, conforme a referência Loja Castor fixada pelo usuário. Preserva petróleo/laranja, Castor em destaque, Ortobom, Probel e foto original do casal em Sobre. V3 foi rejeitada; não existe comp V4 aprovado ou novo QUALITY BAR.

## Executar e publicar

Com Node.js, sem instalação de dependências:

```sh
npm run build
python3 -m http.server 8080 --directory dist
```

Abra `http://localhost:8080`. `npm run build` executa `node build.mjs`, recriando `dist` com `index.html`, `styles.css`, `app.js`, `motion.js` e assets permitidos. Documentos, pesquisa e metadados de proveniência não integram a saída pública. `vercel.json` configura build estático e saída `dist`.

Repositório: [michaeldouggmarketing-glitch/paraiso-dos-colchoes](https://github.com/michaeldouggmarketing-glitch/paraiso-dos-colchoes). Domínio estabelecido: [paraiso-dos-colchoes.vercel.app](https://paraiso-dos-colchoes.vercel.app/). A integração GitHub/Vercel publica automaticamente alterações enviadas à branch de produção e gera a versão estática. Confirme a publicação pelo estado READY do deployment correspondente ao commit enviado.

## Conteúdo e assets

WhatsApp provisório da Josy: `5535998290565`. Guia e ações preparam mensagens para consulta; não enviam automaticamente nem fazem pedidos. Endereço confirmado: Rua Doutor Placidino Brigagão, 1161, Centro, São Sebastião do Paraíso, MG; telefone (35) 3558-1188. Estoque, preços, número próprio, horários e condições comerciais aguardam confirmação.

`research/ambientes-v4.json` é a fonte canônica dos seis modelos, quartos e três características verificadas por modelo: Castor Premium Amazon Gel One Face Pocket, Silver Star Air One Face Pocket, Red & White Double Face D33; Ortobom Liberty; Probel Collin e Akira. Todos usam `assets/<modelo>-room.webp`. Castor/Ortobom têm mídia ambiente oficial; Probel recebeu edição gerada para remover faixas promocionais, divulgada no site. Ambientações e acessórios não comprovam itens incluídos, loja física ou estoque. Foto original `assets/casal-castor.webp` preserva casal/mascote, com contexto de encontro Castor. Rasters antigos de recortes e `castor-ambiente` foram removidos; histórico externo Git conserva versões anteriores. Metadados acompanham assets em arquivos `.webp.json`.

Fontes auto-hospedadas: Barlow Condensed 600 e DM Sans 400/500/600/700, com licenças OFL em assets. GSAP/ScrollTrigger e Lenis são locais, com respectivas licenças.

## Interface e handoff

`app.js` implementa pesquisa, filtro de marca/construção, contagem/estado vazio/reset, três modelos Castor com hotspots específicos, menu/Escape e guia WhatsApp. `motion.js` coordena as 12 regiões, máscaras, profundidade, desenho de molas e feedback de escolhas. Lenis atua no desktop com ponteiro fino. Loops pausam fora da tela/aba; movimento reduzido é completo e estático. Sem JavaScript os seis modelos, fatos, detalhes nativos e contatos permanecem visíveis.

`DESIGN.md` registra tokens atuais; `.impeccable/design.json` (schema 2) registra rampas, extensões e cinco componentes autossuficientes. `.impeccable/surface-brief.md` descreve composição e mecanismos reais. A revisão V4 em `.impeccable/review/v4/finish-review.md` encontrou duas correções locais, já aplicadas: inset largo limitado e WhatsApp integrado ao header. `finish-verdict.md` registra SHIP somente no escopo dessas duas correções, ambas resolvidas. Checks de interação em seis larguras passaram sem erros, imagens quebradas ou overflow. O verdict pontual não substitui a revisão integral anterior; imagens estáticas não certificam suavidade temporal.
