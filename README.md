# Paraíso dos Colchões

Site estático em português com a direção aprovada **Cinema do descanso** e composição B. Não exige dependências nem build. Para revisar localmente, execute `python3 -m http.server 8080` nesta pasta e abra `http://localhost:8080`.

## Publicação

Repositório: [michaeldouggmarketing-glitch/paraiso-dos-colchoes](https://github.com/michaeldouggmarketing-glitch/paraiso-dos-colchoes). Site público: [paraiso-dos-colchoes.vercel.app](https://paraiso-dos-colchoes.vercel.app/). Projeto Vercel na conta Arlene, com preset Other, sem build command e output directory `.`. `vercel.json` inclui cabeçalhos básicos.

## Atendimento e conteúdo

- `STORE_WHATSAPP` em `app.js` usa provisoriamente o número da Josy `5535998290565`, conforme solicitado. Substituir pelo número próprio da loja quando confirmado; revisar também os links de fallback em `index.html`.
- A foto principal `assets/casal-castor.webp` é a foto real do casal em um evento Castor. Substituir somente por fotografia real autorizada e atualizar dimensões e descrição.
- Castor tem destaque; Ortobom e Probel integram a seleção. `research/products.json` registra fabricante, página e origem de cada imagem oficial, otimizada localmente em WebP. Referências de catálogo não confirmam estoque local.
- Confirmar estoque, preços, condições, horários, garantias e entrega antes de acrescentá-los. O vídeo de feira fornecido não é apresentado como filmagem da loja.

## Interface e movimento

Parkinsans 700 e DM Sans são auto-hospedadas. A abertura usa fotografia real, máscara de entrada e campo de luz WebGL limitado; a cena Castor combina rolagem e controles manuais. Há filtros de marca, inclinação de produtos em ponteiro fino, guia com prévia de tamanho, perguntas frequentes e menu móvel com Escape. A preferência de movimento reduzido apresenta a experiência estática e mantém os controles. O guia abre o WhatsApp com as escolhas; não envia a mensagem automaticamente.

Não há vídeo externo Higgsfield em uso; a conexão de conta está pendente. O workspace Runway consultado não tinha direito a geração de vídeo. O movimento implementado funciona sem essas integrações.

## Documentação e verificação

`DESIGN.md` contém os tokens reais e `.impeccable/design.json` os complementos de movimento, profundidade e componentes. `.impeccable/surface-brief.md` registra a composição autorizada e as substituições de fotografias. A implementação adapta a composição B; não reivindica reprodução pixel a pixel da imagem gerada.

`.impeccable/review/verification.json` registra revisão local em 1440px e 390px: sem erros ou overflow, fontes e imagens carregadas, filtro Castor com três referências, troca de modelo e guia Queen funcionando. Isso não equivale ao gate de plates: seu requisito exclusivo de PNG permanece incompatível com as fontes reais WebP. Nenhum quality board externo foi usado; o seed `c22715a0` teve fonte degradada, seguido pela escolha explícita do usuário.
