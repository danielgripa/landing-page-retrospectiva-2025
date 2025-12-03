# 📊 Instruções do Google Tag Manager (GTM)

## ✅ GTM Já Instalado

O Google Tag Manager já está instalado e configurado na landing page!

## 🔧 Configuração Atual

**ID do GTM:** `GTM-NDWD5Q63` (configurado no arquivo `.env`)

O código do GTM está instalado em dois lugares no `client/index.html`:

1. **No `<head>`** - Script principal do GTM
2. **No `<body>`** - Fallback noscript para quando JavaScript está desabilitado

## 🎯 Como Trocar o ID do GTM

Se você quiser usar seu próprio container do GTM:

### Passo 1: Obter seu ID do GTM

1. Acesse [Google Tag Manager](https://tagmanager.google.com/)
2. Crie um novo container ou use um existente
3. Copie o ID do container (formato: `GTM-XXXXXXX`)

### Passo 2: Configurar no Projeto

Edite o arquivo `.env` na raiz do projeto:

```env
# Substitua pelo seu ID
VITE_GTM_ID=GTM-SEU-ID-AQUI
```

### Passo 3: Reiniciar o Servidor

```bash
pnpm dev  # Desenvolvimento
# OU
pnpm build && pnpm start  # Produção
```

## 📡 Eventos Enviados ao GTM

O formulário envia automaticamente eventos para o dataLayer quando submetido:

### Evento: `form_submission`

```javascript
window.dataLayer.push({
  event: 'form_submission',
  form_name: 'lead_capture_eventos',
  formacao: 'Ensino Superior Completo',  // Formação selecionada
  num_cargos: 2  // Quantidade de cargos selecionados
});
```

## 🎨 Como Usar os Eventos no GTM

### 1. Criar Trigger (Acionador)

No GTM, crie um novo acionador:

- **Tipo:** Evento personalizado
- **Nome do evento:** `form_submission`
- **Condição:** `form_name` igual a `lead_capture_eventos`

### 2. Criar Tags

Com esse acionador, você pode criar tags para:

#### Google Analytics 4 (GA4)

```
Tipo: Google Analytics: Evento GA4
Nome do evento: lead_captured
Parâmetros:
  - formacao: {{dlv - formacao}}
  - num_cargos: {{dlv - num_cargos}}
```

#### Google Ads Conversion

```
Tipo: Google Ads Conversion Tracking
ID de conversão: SEU-ID
Rótulo de conversão: SEU-ROTULO
```

#### Facebook Pixel

```
Tipo: Facebook Pixel
Evento: Lead
Parâmetros personalizados:
  - formacao: {{dlv - formacao}}
  - num_cargos: {{dlv - num_cargos}}
```

#### LinkedIn Insight Tag

```
Tipo: LinkedIn Insight Tag
Evento: lead_generated
```

### 3. Criar Variáveis do DataLayer

Para usar os dados do evento, crie variáveis:

**Variável 1: Formação**
- Tipo: Variável da camada de dados
- Nome da variável: `dlv - formacao`
- Nome da variável da camada de dados: `formacao`

**Variável 2: Número de Cargos**
- Tipo: Variável da camada de dados
- Nome da variável: `dlv - num_cargos`
- Nome da variável da camada de dados: `num_cargos`

## 🧪 Como Testar o GTM

### Modo de Visualização (Preview)

1. No GTM, clique em **"Visualizar"**
2. Digite a URL da sua landing page
3. Preencha e envie o formulário
4. Verifique se o evento `form_submission` aparece no debugger
5. Confirme que as tags foram disparadas

### Google Tag Assistant

1. Instale a extensão [Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Ative o Tag Assistant
3. Recarregue a página
4. Preencha e envie o formulário
5. Verifique se o GTM container foi carregado
6. Confirme que os eventos foram enviados

### Console do Navegador

Abra o DevTools (F12) e digite:

```javascript
// Ver todos os eventos enviados
console.log(window.dataLayer);

// Ver apenas eventos de formulário
window.dataLayer.filter(e => e.event === 'form_submission');
```

## 📊 Exemplos de Uso

### 1. Rastrear Conversões no Google Ads

Use o evento `form_submission` como conversão:
- Cada lead capturado = 1 conversão
- Valor da conversão: defina conforme seu LTV

### 2. Criar Audiências no Google Analytics

Crie segmentos baseados em:
- Formação educacional
- Número de cargos de interesse
- Leads que preencheram o campo opcional

### 3. Remarketing no Facebook

Crie públicos personalizados:
- Pessoas que submeteram o formulário
- Segmente por formação
- Exclua quem já comprou

### 4. Otimizar Campanhas

Analise:
- Qual formação converte mais
- Quantos cargos os leads selecionam em média
- Taxa de preenchimento do campo opcional

## 🔍 Troubleshooting

### GTM não carrega

**Verifique:**
1. ID do GTM está correto no `.env`
2. Servidor foi reiniciado após alterar `.env`
3. Não há bloqueadores de ads/scripts
4. Console do navegador não mostra erros

### Eventos não aparecem no dataLayer

**Verifique:**
1. Formulário foi submetido com sucesso
2. Não há erros no console
3. `window.dataLayer` existe
4. Código do formulário não foi alterado

### Tags não disparam

**Verifique:**
1. Acionador está configurado corretamente
2. Container do GTM foi publicado
3. Modo de visualização mostra o evento
4. Tags estão ativas (não pausadas)

## 📈 Métricas Recomendadas

Com o GTM configurado, acompanhe:

1. **Taxa de conversão do formulário**
   - Visualizações da página / Submissões

2. **Formação mais comum**
   - Qual perfil educacional predomina

3. **Média de cargos selecionados**
   - Interesse amplo ou focado

4. **Taxa de preenchimento do campo opcional**
   - Engajamento com a pergunta aberta

5. **Tempo até conversão**
   - Quanto tempo na página antes de converter

## 🎯 Próximos Passos

1. **Configure suas tags** no GTM
2. **Publique o container**
3. **Teste em modo de visualização**
4. **Monitore os dados** no Google Analytics
5. **Otimize campanhas** baseado nos insights

## 📞 Suporte

Para dúvidas sobre GTM:
- [Documentação oficial do GTM](https://support.google.com/tagmanager)
- [Google Analytics Help](https://support.google.com/analytics)
- Suporte técnico: contato@cpws.com.br

---

**Última atualização:** 31 de Outubro de 2025
