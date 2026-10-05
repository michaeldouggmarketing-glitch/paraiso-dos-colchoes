# Paraíso dos Colchões

Site estático: não exige instalação de dependências nem build. Execute `python3 -m http.server 8080` nesta pasta para revisar.

## Publicação

Importe o diretório em um repositório GitHub e conecte-o à Vercel como projeto estático (preset Other, sem build command, output directory `.`). `vercel.json` inclui cabeçalhos básicos.

## Configuração para o próximo atendimento

- Trocar `STORE_WHATSAPP` em `app.js` pelo número próprio da loja quando confirmado. Até lá, o site usa o WhatsApp da Josy por solicitação do contratante.
- Substituir a foto principal em `assets/casal-castor.webp` apenas por uma foto real autorizada do casal; atualizar suas dimensões e descrição em `index.html`.
- Adicionar fotos e vídeos reais da loja quando enviados. O vídeo de feira fornecido não foi tratado como filmagem da loja.
- Confirmar estoque, preços, condições, horários, garantias e entrega antes de acrescentar tais informações.

## Origem dos produtos

Veja `research/products.json`: origem de cada imagem, fabricante e página consultada. As fotos foram baixadas dos sites oficiais e otimizadas localmente em WebP. A seleção é explicitamente de referências de catálogo, sem confirmação de estoque local.

## Verificação

JavaScript sem dependências; menu móvel, filtro de marcas, links personalizados de WhatsApp, guia de preferências com validação nativa e perguntas frequentes. Movimento reduzido respeitado. As imagens e fontes são locais.
