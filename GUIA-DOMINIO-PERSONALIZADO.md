# Guia de Configuração do Domínio Personalizado

**Domínio:** petroblack.cpwsconcursos.com.br  
**Hospedagem DNS:** Hostgator  
**GitHub Pages:** danielgripa.github.io/landing-page-evento

---

## 📋 Passo a Passo Completo

### Parte 1: Configuração no GitHub (✅ JÁ FEITO)

O arquivo `CNAME` já foi criado no repositório com o domínio `petroblack.cpwsconcursos.com.br`.

Após o commit e deploy, o GitHub Pages vai reconhecer automaticamente o domínio personalizado.

---

### Parte 2: Configuração DNS na Hostgator (VOCÊ PRECISA FAZER)

#### Passo 1: Acessar o cPanel da Hostgator

1. Acesse o painel da Hostgator: https://www.hostgator.com.br/
2. Faça login com suas credenciais
3. Acesse o **cPanel**

#### Passo 2: Acessar o Editor de Zona DNS

1. No cPanel, procure por **"Zona DNS"** ou **"Editor de Zona"**
2. Clique em **"Editor de Zona DNS"**
3. Selecione o domínio **cpwsconcursos.com.br**

#### Passo 3: Adicionar Registro CNAME

Adicione o seguinte registro:

| Campo | Valor |
|-------|-------|
| **Tipo** | CNAME |
| **Nome** | petroblack |
| **Destino/Valor** | danielgripa.github.io. |
| **TTL** | 14400 (ou deixe o padrão) |

**⚠️ IMPORTANTE:** 
- O nome deve ser apenas `petroblack` (sem o domínio completo)
- O destino deve terminar com ponto: `danielgripa.github.io.`
- Se o sistema adicionar automaticamente o domínio, o resultado final será: `petroblack.cpwsconcursos.com.br`

#### Exemplo Visual:

```
Tipo: CNAME
Nome: petroblack
Aponta para: danielgripa.github.io.
TTL: 14400
```

#### Passo 4: Salvar as Alterações

1. Clique em **"Adicionar Registro"** ou **"Salvar"**
2. Aguarde a confirmação

---

### Parte 3: Configuração no GitHub Pages (VOCÊ PRECISA FAZER)

#### Passo 1: Acessar as Configurações do Repositório

1. Acesse: https://github.com/danielgripa/landing-page-evento
2. Clique em **"Settings"** (Configurações)
3. No menu lateral, clique em **"Pages"**

#### Passo 2: Configurar o Domínio Personalizado

1. Na seção **"Custom domain"** (Domínio personalizado), digite exatamente:
   ```
   petroblack.cpwsconcursos.com.br
   ```
   (sem https://, sem www, apenas o domínio)

2. Clique em **"Save"** (Salvar)

3. Aguarde alguns segundos. O GitHub vai verificar o DNS.

4. Quando aparecer a mensagem de sucesso, marque a opção:
   - ✅ **"Enforce HTTPS"** (Forçar HTTPS)

**⚠️ NOTA:** O HTTPS pode levar de 10 minutos a 24 horas para ser ativado completamente.

---

## ⏱️ Tempo de Propagação

- **Mínimo:** 10-30 minutos
- **Máximo:** 24-48 horas
- **Média:** 2-6 horas

Durante esse período, o site pode ficar inacessível ou mostrar erros. Isso é normal.

---

## ✅ Como Verificar se Funcionou

### Teste 1: Verificar DNS (Após 10-30 minutos)

Abra o terminal/prompt de comando e digite:

```bash
nslookup petroblack.cpwsconcursos.com.br
```

**Resultado esperado:**
```
petroblack.cpwsconcursos.com.br canonical name = danielgripa.github.io
```

### Teste 2: Acessar o Site

Abra o navegador e acesse:
```
http://petroblack.cpwsconcursos.com.br
```

Se funcionar, aguarde mais um pouco para o HTTPS ser ativado, então acesse:
```
https://petroblack.cpwsconcursos.com.br
```

---

## 🔧 Troubleshooting (Resolução de Problemas)

### Problema 1: "DNS_PROBE_FINISHED_NXDOMAIN"

**Causa:** DNS ainda não propagou ou configuração incorreta.

**Solução:**
1. Aguarde mais tempo (até 24h)
2. Verifique se o registro CNAME foi criado corretamente na Hostgator
3. Limpe o cache DNS do seu computador:
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
   - Linux: `sudo systemd-resolve --flush-caches`

### Problema 2: "Certificate Error" ou "Not Secure"

**Causa:** HTTPS ainda não foi provisionado pelo GitHub.

**Solução:**
1. Aguarde até 24 horas
2. Verifique se a opção "Enforce HTTPS" está marcada no GitHub Pages
3. Tente desmarcar e marcar novamente a opção "Enforce HTTPS"

### Problema 3: Página 404 no GitHub

**Causa:** O arquivo CNAME não foi commitado ou o deploy não foi feito.

**Solução:**
1. Verifique se o arquivo `client/public/CNAME` existe no repositório
2. Faça um novo deploy/build
3. Aguarde alguns minutos

### Problema 4: Redirecionamento para danielgripa.github.io

**Causa:** GitHub Pages ainda não reconheceu o domínio personalizado.

**Solução:**
1. Vá em Settings > Pages no GitHub
2. Remova o domínio personalizado
3. Aguarde 1 minuto
4. Adicione novamente o domínio
5. Salve e aguarde

---

## 📱 Atualizar Links nas Campanhas

Após a configuração funcionar, atualize os links em:

- ✅ Meta Ads
- ✅ TikTok Ads
- ✅ Google Ads
- ✅ WhatsApp (Sendflow)
- ✅ Materiais de divulgação

**Novo link:**
```
https://petroblack.cpwsconcursos.com.br
```

---

## 🎯 Benefícios do Domínio Personalizado

1. **Profissionalismo:** URL mais curta e memorável
2. **Confiança:** Domínio próprio transmite mais credibilidade
3. **Branding:** Reforça a marca CPWS
4. **SEO:** Melhor para otimização em buscadores
5. **Rastreamento:** Mais fácil de identificar nas métricas

---

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. **Hostgator:** Abra um ticket no suporte técnico
2. **GitHub:** Consulte a documentação oficial: https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## ✅ Checklist Final

- [ ] Criar registro CNAME na Hostgator
- [ ] Configurar domínio personalizado no GitHub Pages
- [ ] Aguardar propagação DNS (10min - 24h)
- [ ] Ativar "Enforce HTTPS"
- [ ] Testar acesso ao site
- [ ] Atualizar links nas campanhas
- [ ] Atualizar link no Sendflow

**Tempo estimado total:** 30 minutos de configuração + tempo de propagação DNS
