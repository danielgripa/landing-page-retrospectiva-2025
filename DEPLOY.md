# 🚀 Guia de Deploy - GitHub Pages

## 📋 Pré-requisitos

- Repositório no GitHub: `danielgripa/landing-page-retrospectiva-2025`
- Domínio customizado: `retrospectiva.cpwsconcursos.com.br`
- Acesso ao painel DNS do domínio

---

## 🔧 Configuração do GitHub Pages

### 1. Ativar GitHub Pages no Repositório

1. Acesse: https://github.com/danielgripa/landing-page-retrospectiva-2025/settings/pages

2. Em **Source**, selecione:
   - Source: `GitHub Actions`

3. O workflow já está configurado em `.github/workflows/deploy.yml`

### 2. Configurar Permissões do Workflow

1. Acesse: https://github.com/danielgripa/landing-page-retrospectiva-2025/settings/actions

2. Em **Workflow permissions**, selecione:
   - ✅ `Read and write permissions`
   - ✅ `Allow GitHub Actions to create and approve pull requests`

3. Clique em **Save**

---

## 🌐 Configuração do Domínio Customizado

### 1. Configurar DNS

No painel DNS do seu provedor (onde está registrado `cpwsconcursos.com.br`), adicione os seguintes registros:

#### Opção A: CNAME (Recomendado)

```
Tipo: CNAME
Nome: retrospectiva
Valor: danielgripa.github.io
TTL: 3600 (ou automático)
```

#### Opção B: A Records (Alternativo)

Se o provedor não suportar CNAME para subdomínio, use A records:

```
Tipo: A
Nome: retrospectiva
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nome: retrospectiva
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nome: retrospectiva
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nome: retrospectiva
Valor: 185.199.111.153
TTL: 3600
```

### 2. Configurar Domínio no GitHub

1. Acesse: https://github.com/danielgripa/landing-page-retrospectiva-2025/settings/pages

2. Em **Custom domain**, digite:
   ```
   retrospectiva.cpwsconcursos.com.br
   ```

3. Clique em **Save**

4. Aguarde a verificação DNS (pode levar alguns minutos)

5. Após verificado, marque:
   - ✅ **Enforce HTTPS** (obrigatório para segurança)

### 3. Verificar CNAME

O arquivo `client/public/CNAME` já está configurado com:
```
retrospectiva.cpwsconcursos.com.br
```

Este arquivo será copiado automaticamente para o diretório `dist` durante o build.

---

## 🔄 Deploy Automático

### Como Funciona

1. **Push para main** → Dispara workflow automaticamente
2. **Workflow executa:**
   - Instala dependências (`pnpm install`)
   - Faz build (`pnpm build`)
   - Faz upload do `dist` para GitHub Pages
   - Deploy automático

3. **Site atualizado** em ~2-5 minutos

### Monitorar Deploy

1. Acesse: https://github.com/danielgripa/landing-page-retrospectiva-2025/actions

2. Veja o status do workflow "Deploy to GitHub Pages"

3. Se houver erro, clique no workflow para ver logs

---

## 🧪 Testar Localmente Antes do Deploy

```bash
# Instalar dependências
pnpm install

# Build de produção
pnpm build

# Testar build localmente
pnpm preview
```

Acesse: http://localhost:4173

---

## ✅ Checklist de Deploy

### Antes do Deploy
- [x] Código atualizado no repositório
- [x] Arquivo CNAME configurado
- [x] Workflow do GitHub Actions criado
- [ ] Imagens necessárias adicionadas (ver TODO_IMAGENS.md)
- [ ] Testado localmente (`pnpm build && pnpm preview`)

### Configuração GitHub
- [ ] GitHub Pages ativado (Source: GitHub Actions)
- [ ] Permissões do workflow configuradas
- [ ] Domínio customizado adicionado
- [ ] HTTPS enforçado

### Configuração DNS
- [ ] Registro CNAME ou A records adicionados
- [ ] DNS propagado (teste: `nslookup retrospectiva.cpwsconcursos.com.br`)

### Pós-Deploy
- [ ] Site acessível em https://retrospectiva.cpwsconcursos.com.br
- [ ] Certificado SSL ativo (cadeado verde)
- [ ] Formulário funcionando
- [ ] GTM tracking funcionando
- [ ] WhatsApp redirecionando corretamente
- [ ] Testado em mobile e desktop

---

## 🔍 Troubleshooting

### Erro: "DNS check failed"

**Solução:**
1. Aguarde propagação DNS (pode levar até 24h)
2. Verifique registros DNS: https://dnschecker.org
3. Teste: `nslookup retrospectiva.cpwsconcursos.com.br`

### Erro: "Workflow failed"

**Solução:**
1. Verifique logs em Actions
2. Confirme permissões do workflow
3. Teste build local: `pnpm build`

### Erro: "404 Not Found"

**Solução:**
1. Verifique se o workflow completou com sucesso
2. Confirme que `dist/` foi gerado corretamente
3. Verifique se CNAME está no `dist/`

### Site não carrega CSS/JS

**Solução:**
1. Verifique `vite.config.ts` - base deve estar correto
2. Para domínio customizado, base deve ser `/`
3. Limpe cache do navegador (Ctrl+Shift+R)

---

## 📊 Monitoramento

### Google Tag Manager
- Container ID: `GTM-TF6PGNDF`
- Verificar em: Google Tag Manager → Preview

### Analytics
- Verificar eventos de conversão
- Monitorar taxa de inscrição

---

## 🔒 Segurança

### HTTPS
- ✅ Sempre use HTTPS (enforçado no GitHub Pages)
- ✅ Certificado SSL gratuito via Let's Encrypt

### Variáveis Sensíveis
- Não commitar API keys ou senhas
- Usar variáveis de ambiente se necessário

---

## 📞 Suporte

### Links Úteis
- **Repositório:** https://github.com/danielgripa/landing-page-retrospectiva-2025
- **GitHub Pages Docs:** https://docs.github.com/pages
- **Custom Domain Docs:** https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

### Contato
- WhatsApp: (21) 97960-0647
- E-mail: contato@cpws.com.br

---

## 🎉 Deploy Completo!

Após seguir todos os passos, seu site estará disponível em:

**https://retrospectiva.cpwsconcursos.com.br**

🚀 Boa sorte com a campanha!
