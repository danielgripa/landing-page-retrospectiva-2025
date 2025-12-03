# Instruções para Configurar GitHub Pages

## Status Atual

✅ **Repositório criado**: https://github.com/danielgripa/landing-page-evento  
✅ **Código enviado com sucesso**  
✅ **Endpoint de produção configurado**: `https://n8n.buscadorlce.online/webhook/537ae774-93e1-4f68-84f0-bfc8839df00f`  
✅ **Configuração base do Vite ajustada para GitHub Pages**

## Próximos Passos (Configuração Manual)

### 1. Ativar GitHub Pro (Necessário para Repositório Privado)

Para usar GitHub Pages com repositório privado, você precisa ter GitHub Pro:

1. Acesse: https://github.com/settings/billing/plans
2. Faça upgrade para GitHub Pro ($4 USD/mês)
3. Aguarde a confirmação do upgrade

### 2. Configurar GitHub Pages

Após ativar o GitHub Pro:

1. Acesse: https://github.com/danielgripa/landing-page-evento/settings/pages
2. Em **Source**, selecione **GitHub Actions**
3. Clique em **Save**

### 3. Adicionar Workflow do GitHub Actions

Você precisará adicionar manualmente o arquivo de workflow:

1. No repositório, crie o arquivo `.github/workflows/deploy.yml`
2. Cole o conteúdo abaixo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist/public'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. Faça commit do arquivo
4. O GitHub Actions irá automaticamente fazer o build e deploy

### 4. Acessar o Site

Após o deploy ser concluído (leva alguns minutos), seu site estará disponível em:

**https://danielgripa.github.io/landing-page-evento/**

## Verificação

Para verificar o status do deploy:

1. Acesse: https://github.com/danielgripa/landing-page-evento/actions
2. Verifique se o workflow "Deploy to GitHub Pages" está rodando
3. Aguarde a conclusão (ícone verde ✓)

## Troubleshooting

### Se o GitHub Pages não aparecer nas configurações:

- Verifique se você tem GitHub Pro ativo
- Repositórios privados com GitHub Pages só funcionam com plano pago

### Se o workflow falhar:

- Verifique os logs em: https://github.com/danielgripa/landing-page-evento/actions
- Certifique-se de que as permissões do GitHub Actions estão habilitadas em:
  https://github.com/danielgripa/landing-page-evento/settings/actions

### Se o site não carregar corretamente:

- Verifique se o caminho base está correto no `vite.config.ts`
- O caminho base deve ser `/landing-page-evento/` (já configurado)

## Alternativa: Repositório Público (Gratuito)

Se preferir não pagar pelo GitHub Pro, você pode:

1. Tornar o repositório público em: https://github.com/danielgripa/landing-page-evento/settings
2. Role até o final da página
3. Clique em "Change visibility" > "Make public"
4. O GitHub Pages funcionará imediatamente e gratuitamente

**Nota**: Com repositório público, o código-fonte ficará visível para todos, mas o site em si já é público de qualquer forma.

## Suporte

Se tiver dúvidas ou problemas, consulte a documentação oficial:
- GitHub Pages: https://docs.github.com/pages
- GitHub Actions: https://docs.github.com/actions
