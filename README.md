# Restauração de Faróis Vila Andrade (nome provisório)

Site institucional de uma empresa de restauração de faróis na Vila Andrade, São Paulo - SP.
HTML/CSS/JS estático, sem build. Mesma estrutura dos outros sites da AROE, em tema escuro com âmbar
(a luz do farol) como acento.

```bash
npx --yes serve . -l 6490
```

## ATENÇÃO: o nome da empresa é provisório

O repositório se chama `jumane`, mas **"Jumanne" não é o nome da empresa**: é "terça-feira" em suaíli, o rótulo do
dia da semana que o WhatsApp mostrou no print (o mesmo rótulo apareceu no print de outro cliente). O perfil
só mostra o número de telefone. Por decisão do Leandro, o site usa a marca provisória
**"Restauração de Faróis Vila Andrade"** (serviço + bairro).

Quando souber o nome real, trocar "Restauração de Faróis Vila Andrade" em `index.html` (title, JSON-LD,
`aria-label` da marca, rodapé) e o texto do `.brand-mark` no header e no footer.

## Estrutura

```
index.html
assets/
  css/styles.css          derivado do site da AL Carretas, com as regras próprias no fim do arquivo
  js/main.js              menu mobile, formulário -> WhatsApp, FAQ, reveal ao rolar, ano do rodapé
  fonts/phosphor/         ícones Phosphor (woff2 local, licença MIT)
  img/favicon.svg
```

Sem fotos nem logo: o hero tem um "antes e depois" de farol desenhado em CSS.

## Dados usados (fonte: perfil do WhatsApp Business)

| Campo | Valor |
|---|---|
| Descrição | "Manter os faróis restaurados é a união perfeita entre cuidado estético, economia e responsabilidade no trânsito." |
| WhatsApp / telefone | (11) 98446-1680 (`wa.me/5511984461680`, constante `WA` no `main.js`) |
| Endereço | R. Joaquim Roseira, 217 - Vila Andrade, São Paulo - SP, 05749-290 |
| Horário | Terça-feira, 07:00 às 11:00 (único dia visível no print) |

## Confirmar com o cliente

- **Nome da empresa** (ver acima) e logo.
- **Horário dos outros dias:** o print só mostra terça, das 7h às 11h. O site diz "outros dias: consulte".
- **Processo:** as etapas (remoção da camada oxidada, polimento, proteção) são o processo usual de restauração
  de faróis. Confirmar como a empresa faz e se dá garantia.
- **Outros serviços:** o perfil só fala de faróis. Se fazem lanternas, polimento, vitrificação etc., dá para
  acrescentar.
- **Atendimento no local do cliente?** Não informado.
- **Fotos de antes e depois reais:** é o que mais vende esse serviço. Trocar a ilustração do hero quando tiver.

## Depoimentos

Não foram incluídos, para não publicar avaliações inventadas.

Fontes: Saira e Barlow (Google Fonts, OFL).
