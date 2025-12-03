# 📝 Instruções para Trocar Webhook N8N

## ⚠️ IMPORTANTE: Webhook de Teste vs Produção

Atualmente o formulário está configurado para enviar dados para o **webhook de TESTE**:

```
https://n8n.buscadorlce.online/webhook-test/537ae774-93e1-4f68-84f0-bfc8839df00f
```

## 🔄 Como Trocar para Produção

Quando você aprovar e quiser usar o webhook de **PRODUÇÃO**, siga estes passos:

### Opção 1: Editar o arquivo .env (Recomendado)

1. Abra o arquivo `.env` na raiz do projeto
2. Localize a linha:
   ```
   VITE_N8N_WEBHOOK=https://n8n.buscadorlce.online/webhook-test/537ae774-93e1-4f68-84f0-bfc8839df00f
   ```
3. Remova o `-test` da URL:
   ```
   VITE_N8N_WEBHOOK=https://n8n.buscadorlce.online/webhook/537ae774-93e1-4f68-84f0-bfc8839df00f
   ```
4. Salve o arquivo
5. Reinicie o servidor:
   ```bash
   pnpm dev  # Para desenvolvimento
   # OU
   pnpm build && pnpm start  # Para produção
   ```

### Opção 2: Editar Diretamente no Código

Se preferir, você pode editar diretamente no arquivo do formulário:

1. Abra: `client/src/components/LeadCaptureForm.tsx`
2. Localize a linha 63:
   ```typescript
   const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK || "https://n8n.buscadorlce.online/webhook-test/...";
   ```
3. Altere para:
   ```typescript
   const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK || "https://n8n.buscadorlce.online/webhook/537ae774-93e1-4f68-84f0-bfc8839df00f";
   ```
4. Salve e reinicie o servidor

## ✅ Como Testar se Está Funcionando

### 1. Teste o Webhook Diretamente

Você pode testar o webhook com curl:

```bash
curl -X POST https://n8n.buscadorlce.online/webhook-test/537ae774-93e1-4f68-84f0-bfc8839df00f \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Teste",
    "email": "teste@email.com",
    "whatsapp": "(21) 99999-9999",
    "formacao": "Ensino Superior Completo",
    "cargosInteresse": ["Engenharia de Petróleo"],
    "dificuldades": "Teste de webhook",
    "timestamp": "2025-10-31T20:00:00.000Z",
    "source": "Landing Page Eventos 10 e 11"
  }'
```

### 2. Teste pelo Formulário

1. Acesse a landing page
2. Preencha o formulário completamente
3. Clique em "GARANTIR MINHA VAGA NOS EVENTOS"
4. Verifique no N8N se o webhook recebeu os dados

### 3. Verifique o Console do Navegador

Abra o DevTools (F12) e vá na aba "Network":
- Você verá a requisição POST para o webhook
- Verifique se o status é 200 (sucesso)
- Veja os dados enviados na aba "Payload"

## 📊 Dados Enviados ao Webhook

O formulário envia os seguintes dados em formato JSON:

```json
{
  "nome": "Nome completo do lead",
  "email": "email@exemplo.com",
  "whatsapp": "(21) 99999-9999",
  "formacao": "Ensino Superior Completo",
  "cargosInteresse": [
    "Engenharia de Petróleo",
    "Engenharia de Processamento"
  ],
  "dificuldades": "Texto opcional sobre dificuldades",
  "timestamp": "2025-10-31T20:00:00.000Z",
  "source": "Landing Page Eventos 10 e 11"
}
```

## 🔍 Troubleshooting

### Erro: "Erro ao enviar formulário"

**Possíveis causas:**
1. Webhook offline ou URL incorreta
2. CORS bloqueado pelo N8N
3. Timeout (webhook demorou muito para responder)

**Soluções:**
1. Verifique se o webhook está ativo no N8N
2. Configure CORS no N8N para aceitar requisições do seu domínio
3. Aumente o timeout no N8N

### Webhook não recebe dados

**Verifique:**
1. URL está correta (com ou sem -test)
2. N8N está rodando
3. Workflow está ativado no N8N
4. Não há erros no console do navegador

### Dados chegam incompletos

**Verifique:**
1. Todos os campos obrigatórios foram preenchidos
2. Validação do formulário passou
3. Estrutura JSON está correta

## 🎯 Google Tag Manager

O formulário também envia eventos para o GTM quando submetido com sucesso:

```javascript
{
  event: 'form_submission',
  form_name: 'lead_capture_eventos',
  formacao: 'Ensino Superior Completo',
  num_cargos: 2
}
```

Você pode usar esses eventos para:
- Criar conversões no Google Ads
- Rastrear no Google Analytics
- Disparar pixels do Facebook
- Criar audiências personalizadas

## 📞 Suporte

Se tiver problemas com o webhook:
1. Verifique os logs do N8N
2. Teste com curl primeiro
3. Verifique o console do navegador
4. Entre em contato com suporte técnico

---

**Última atualização:** 31 de Outubro de 2025
