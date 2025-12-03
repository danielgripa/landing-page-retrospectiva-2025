# Guia Completo: Configuração GTM para Rastreamento de Conversões

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Eventos Implementados](#eventos-implementados)
3. [Configuração no Google Tag Manager](#configuração-no-google-tag-manager)
4. [Configuração Meta Ads (Facebook/Instagram)](#configuração-meta-ads)
5. [Configuração TikTok Ads](#configuração-tiktok-ads)
6. [Configuração Google Ads](#configuração-google-ads)
7. [Testes e Validação](#testes-e-validação)

---

## 🎯 Visão Geral

O código da landing page já está preparado para enviar eventos de conversão para o **Google Tag Manager (GTM)**. Quando um usuário preenche e envia o formulário, dois eventos são disparados automaticamente:

1. **`generate_lead`** - Evento padrão do Google Analytics 4
2. **`Lead`** - Evento compatível com Meta Pixel

Esses eventos contêm todos os dados necessários para rastrear conversões nos gerenciadores de anúncios.

---

## 📊 Eventos Implementados

### Evento 1: `generate_lead` (Google Analytics 4)

```javascript
{
  event: 'generate_lead',
  event_category: 'Lead',
  event_label: 'Eventos 10 e 11',
  form_name: 'lead_capture_eventos',
  form_type: 'eventos_black_friday',
  lead_type: 'evento_inscricao',
  user_name: '[Nome do usuário]',
  user_email: '[Email do usuário]',
  user_phone: '[Telefone sem formatação]',
  user_formacao: '[Formação selecionada]',
  user_cargos: '[Cargos de interesse]',
  num_cargos: [Número de cargos],
  conversion_value: 1,
  currency: 'BRL'
}
```

### Evento 2: `Lead` (Meta Pixel)

```javascript
{
  event: 'Lead',
  content_name: 'Inscrição Eventos 10 e 11',
  content_category: 'Lead Generation',
  value: 1,
  currency: 'BRL'
}
```

---

## 🔧 Configuração no Google Tag Manager

### Passo 1: Criar Variáveis de Camada de Dados

Acesse **Variáveis** → **Nova** → **Variável de Camada de Dados**

Crie as seguintes variáveis:

| Nome da Variável | Nome da Camada de Dados |
|------------------|-------------------------|
| `DL - Event` | `event` |
| `DL - User Email` | `user_email` |
| `DL - User Phone` | `user_phone` |
| `DL - User Name` | `user_name` |
| `DL - Form Name` | `form_name` |
| `DL - Conversion Value` | `conversion_value` |
| `DL - Currency` | `currency` |
| `DL - Lead Type` | `lead_type` |

### Passo 2: Criar Acionador (Trigger)

1. Acesse **Acionadores** → **Novo**
2. Nome: `Trigger - Generate Lead`
3. Tipo: **Evento Personalizado**
4. Nome do evento: `generate_lead`
5. Salve

### Passo 3: Criar Acionador para Meta Pixel

1. Acesse **Acionadores** → **Novo**
2. Nome: `Trigger - Lead (Meta)`
3. Tipo: **Evento Personalizado**
4. Nome do evento: `Lead`
5. Salve

---

## 📘 Configuração Meta Ads (Facebook/Instagram)

### Passo 1: Instalar Meta Pixel (se ainda não instalado)

1. No GTM, acesse **Tags** → **Nova**
2. Nome: `Meta Pixel - Base Code`
3. Tipo de tag: **HTML Personalizado**
4. Cole o código do Meta Pixel:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID_AQUI');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

5. **Acionador:** All Pages
6. Salve

> ⚠️ **Importante:** Substitua `SEU_PIXEL_ID_AQUI` pelo ID real do seu Meta Pixel

### Passo 2: Configurar Evento de Conversão Lead

1. No GTM, acesse **Tags** → **Nova**
2. Nome: `Meta Pixel - Lead Event`
3. Tipo de tag: **HTML Personalizado**
4. Cole o código:

```html
<script>
fbq('track', 'Lead', {
  content_name: '{{DL - Form Name}}',
  content_category: 'Lead Generation',
  value: {{DL - Conversion Value}},
  currency: '{{DL - Currency}}'
});
</script>
```

5. **Acionador:** `Trigger - Lead (Meta)`
6. Salve

### Passo 3: Configurar Conversão Avançada (Opcional, mas recomendado)

Para melhorar a correspondência de conversões, configure os **Parâmetros Avançados**:

```html
<script>
fbq('track', 'Lead', {
  content_name: 'Inscrição Eventos 10 e 11',
  content_category: 'Lead Generation',
  value: {{DL - Conversion Value}},
  currency: '{{DL - Currency}}'
}, {
  em: '{{DL - User Email}}',
  ph: '{{DL - User Phone}}',
  fn: '{{DL - User Name}}'.split(' ')[0],
  ln: '{{DL - User Name}}'.split(' ').slice(1).join(' ')
});
</script>
```

---

## 🎵 Configuração TikTok Ads

### Passo 1: Instalar TikTok Pixel (se ainda não instalado)

1. No GTM, acesse **Tags** → **Nova**
2. Nome: `TikTok Pixel - Base Code`
3. Tipo de tag: **HTML Personalizado**
4. Cole o código do TikTok Pixel:

```html
<!-- TikTok Pixel Code -->
<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
  
  ttq.load('SEU_TIKTOK_PIXEL_ID');
  ttq.page();
}(window, document, 'ttq');
</script>
<!-- End TikTok Pixel Code -->
```

5. **Acionador:** All Pages
6. Salve

> ⚠️ **Importante:** Substitua `SEU_TIKTOK_PIXEL_ID` pelo ID real do seu TikTok Pixel

### Passo 2: Configurar Evento de Conversão Lead

1. No GTM, acesse **Tags** → **Nova**
2. Nome: `TikTok Pixel - Lead Event`
3. Tipo de tag: **HTML Personalizado**
4. Cole o código:

```html
<script>
ttq.track('SubmitForm', {
  content_name: 'Inscrição Eventos 10 e 11',
  content_category: 'Lead Generation',
  value: {{DL - Conversion Value}},
  currency: '{{DL - Currency}}'
});
</script>
```

5. **Acionador:** `Trigger - Generate Lead`
6. Salve

### Passo 3: Configurar Dados Avançados (Opcional)

```html
<script>
ttq.identify({
  email: '{{DL - User Email}}',
  phone_number: '{{DL - User Phone}}'
});

ttq.track('SubmitForm', {
  content_name: 'Inscrição Eventos 10 e 11',
  content_category: 'Lead Generation',
  value: {{DL - Conversion Value}},
  currency: '{{DL - Currency}}'
});
</script>
```

---

## 🔍 Configuração Google Ads

### Passo 1: Criar Tag de Conversão do Google Ads

1. No **Google Ads**, acesse **Ferramentas e Configurações** → **Conversões**
2. Clique em **+ Nova ação de conversão**
3. Selecione **Site**
4. Configure:
   - **Nome:** Lead - Inscrição Eventos 10 e 11
   - **Categoria:** Lead
   - **Valor:** Use valores diferentes para cada conversão → 1
   - **Contagem:** Uma
5. Clique em **Criar e continuar**
6. Selecione **Usar o Google Tag Manager**
7. Copie o **ID de conversão** e o **Rótulo de conversão**

### Passo 2: Configurar Tag no GTM

1. No GTM, acesse **Tags** → **Nova**
2. Nome: `Google Ads - Lead Conversion`
3. Tipo de tag: **Acompanhamento de conversões do Google Ads**
4. Configure:
   - **ID de conversão:** [Cole o ID copiado]
   - **Rótulo de conversão:** [Cole o rótulo copiado]
   - **Valor de conversão:** `{{DL - Conversion Value}}`
   - **Código de moeda:** `{{DL - Currency}}`
5. **Acionador:** `Trigger - Generate Lead`
6. Salve

### Passo 3: Configurar Conversões Avançadas (Recomendado)

Para melhorar a precisão do rastreamento:

1. Na mesma tag, ative **Conversões avançadas**
2. Configure os campos:
   - **Email:** `{{DL - User Email}}`
   - **Telefone:** `{{DL - User Phone}}`
   - **Nome:** `{{DL - User Name}}`

---

## 🧪 Testes e Validação

### 1. Modo de Visualização do GTM

1. No GTM, clique em **Visualizar**
2. Acesse a landing page
3. Preencha e envie o formulário
4. No painel de depuração do GTM, verifique:
   - ✅ O evento `generate_lead` foi disparado
   - ✅ O evento `Lead` foi disparado
   - ✅ Todas as variáveis foram preenchidas corretamente
   - ✅ Todas as tags foram acionadas

### 2. Extensão do Navegador - Meta Pixel Helper

1. Instale a extensão **Meta Pixel Helper** (Chrome)
2. Acesse a landing page
3. Preencha e envie o formulário
4. Verifique se o evento **Lead** aparece na extensão

### 3. Extensão do Navegador - TikTok Pixel Helper

1. Instale a extensão **TikTok Pixel Helper** (Chrome)
2. Acesse a landing page
3. Preencha e envie o formulário
4. Verifique se o evento **SubmitForm** aparece na extensão

### 4. Google Tag Assistant

1. Instale a extensão **Google Tag Assistant** (Chrome)
2. Acesse a landing page
3. Preencha e envie o formulário
4. Verifique se a conversão do Google Ads foi registrada

### 5. Verificação em Tempo Real

#### Meta Ads:
- Acesse **Gerenciador de Eventos** no Meta Business
- Vá em **Teste de Eventos**
- Verifique se o evento **Lead** aparece

#### TikTok Ads:
- Acesse **Gerenciador de Eventos** no TikTok Ads
- Vá em **Teste de Eventos**
- Verifique se o evento **SubmitForm** aparece

#### Google Ads:
- Acesse **Ferramentas e Configurações** → **Conversões**
- Verifique o status da conversão (pode levar até 24h para aparecer)

---

## 📝 Checklist Final

Antes de publicar no GTM, verifique:

- [ ] Todas as variáveis de camada de dados foram criadas
- [ ] Os acionadores `generate_lead` e `Lead` foram criados
- [ ] Meta Pixel base code está instalado (se aplicável)
- [ ] TikTok Pixel base code está instalado (se aplicável)
- [ ] Tags de conversão foram criadas para cada plataforma
- [ ] IDs dos pixels foram substituídos pelos reais
- [ ] Testes foram realizados no modo de visualização
- [ ] Eventos aparecem nas ferramentas de teste das plataformas
- [ ] Container do GTM foi publicado

---

## 🎯 Valores de Conversão

O código está configurado com `conversion_value: 1` por padrão. Para ajustar o valor de cada lead:

1. Edite os arquivos:
   - `client/src/components/LeadCaptureForm.tsx` (linha 177)
   - `client/src/components/LeadCaptureFormWizard.tsx` (linha 213)

2. Altere o valor:
```javascript
conversion_value: 10, // Exemplo: R$ 10 por lead
```

3. Faça commit e deploy da alteração

---

## 🆘 Suporte e Troubleshooting

### Evento não está disparando

1. Verifique se o GTM está instalado corretamente na página
2. Abra o Console do navegador (F12) e procure por erros
3. Verifique se `window.dataLayer` está definido
4. Use o modo de visualização do GTM para debugar

### Conversões não aparecem nas plataformas

1. Aguarde até 24-48h (pode haver delay)
2. Verifique se os IDs dos pixels estão corretos
3. Verifique se as tags estão sendo acionadas no GTM
4. Use as ferramentas de teste de cada plataforma

### Dados não estão sendo capturados

1. Verifique se as variáveis de camada de dados foram criadas corretamente
2. Verifique a nomenclatura exata das variáveis
3. Use o modo de visualização do GTM para ver os valores

---

## 📚 Recursos Adicionais

- [Documentação oficial do GTM](https://support.google.com/tagmanager)
- [Meta Pixel - Guia de Eventos](https://developers.facebook.com/docs/meta-pixel/reference)
- [TikTok Pixel - Documentação](https://ads.tiktok.com/help/article?aid=10000357)
- [Google Ads - Conversões](https://support.google.com/google-ads/answer/6095821)

---

**Última atualização:** 02/11/2025  
**Versão:** 1.0
