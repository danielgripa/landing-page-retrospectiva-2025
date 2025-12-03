# Landing Page PetroBlack Friday Infinita 2029 - CPWS Concursos

## 📋 Requisitos

- **Node.js** 18+ (recomendado: 22.13.0)
- **pnpm** (gerenciador de pacotes)
- **Git** (opcional, para controle de versão)

## 🚀 Instalação e Execução Local

### 1. Instalar dependências

```bash
# Instalar pnpm globalmente (se ainda não tiver)
npm install -g pnpm

# Instalar dependências do projeto
pnpm install
```

### 2. Executar em modo desenvolvimento

```bash
pnpm dev
```

O projeto estará disponível em: **http://localhost:3000**

### 3. Build para produção

```bash
# Gerar build otimizado
pnpm build

# Visualizar build localmente
pnpm preview
```

## 📁 Estrutura do Projeto

```
landing-page-cpws-blackfriday/
├── client/                    # Frontend (React + Vite)
│   ├── public/               # Assets estáticos (imagens, logos)
│   │   ├── logo-cpws-branca.png
│   │   ├── logo-cpws-colorida.png
│   │   ├── wellington-hero.jpg
│   │   ├── wellington-professor.jpg
│   │   ├── fundo-refinaria.jpeg
│   │   ├── aprovados/        # Fotos dos 8 aprovados
│   │   └── noticias/         # Prints de notícias
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx      # Landing page principal
│   │   ├── components/       # Componentes reutilizáveis
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── App.tsx          # Rotas e configuração
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais + tema
│   ├── index.html           # HTML base (com GTM)
│   └── vite.config.ts       # Configuração Vite
├── package.json             # Dependências
├── tailwind.config.ts       # Configuração Tailwind
└── tsconfig.json           # Configuração TypeScript
```

## 🎨 Tecnologias Utilizadas

- **React 19** - Framework frontend
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI modernos
- **Lucide React** - Ícones
- **Wouter** - Roteamento client-side

## 🖼️ Substituindo Imagens

### Imagens que você precisa adicionar/substituir:

1. **Hero Section:**
   - `/client/public/wellington-hero.jpg` - Wellington com uniforme Petrobras
   - `/client/public/fundo-refinaria.jpeg` - Background da hero (já adicionado)

2. **Logos:**
   - `/client/public/logo-cpws-branca.png` - Logo branca (footer)
   - `/client/public/logo-cpws-colorida.png` - Logo colorida (header)

3. **Aprovados (8 fotos):**
   - `/client/public/aprovados/DANILO COSTA.jpeg`
   - `/client/public/aprovados/JOAO PAULO LEAO.jpeg`
   - `/client/public/aprovados/ELIZABETH LACERDA.jpeg`
   - `/client/public/aprovados/Suellen Cristina.jpeg`
   - `/client/public/aprovados/Leticia Cabanas.jpeg`
   - `/client/public/aprovados/Leticia Andrade.jpeg`
   - `/client/public/aprovados/Luis Gustavo Curty.jpeg`
   - `/client/public/aprovados/Guilherme Araujo Alves.jpeg`

4. **Notícias (3 prints):**
   - `/client/public/noticias/noticia1.jpeg`
   - `/client/public/noticias/noticia2.jpeg`
   - `/client/public/noticias/noticia3.jpeg`

### Como adicionar imagens:

```bash
# Copiar suas imagens para a pasta public
cp /caminho/sua-imagem.jpg client/public/

# Ou criar subpastas
mkdir -p client/public/aprovados
cp /caminho/fotos/*.jpeg client/public/aprovados/
```

## 🎬 Adicionando Vídeos

### Placeholders de vídeos que precisam ser substituídos:

1. **VSL Hero** (seção hero, topo da página)
2. **3 Vídeos de Depoimentos** (seção +549 Aprovados)

### Opções para adicionar vídeos:

#### Opção 1: YouTube Embed (Recomendado)

Substitua os placeholders por iframes do YouTube:

```tsx
// Exemplo no Home.tsx
<div className="aspect-video">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/SEU_VIDEO_ID"
    title="VSL Hero"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

#### Opção 2: Vídeo Local

```bash
# Adicionar vídeo na pasta public
cp /caminho/video.mp4 client/public/videos/

# No código (Home.tsx)
<video controls className="w-full">
  <source src="/videos/video.mp4" type="video/mp4" />
</video>
```

## 🔗 Links que Precisam ser Configurados

Edite o arquivo `client/src/pages/Home.tsx` e substitua:

1. **Link do Checkout** (linha ~968):
```tsx
onClick={() => window.open('#', '_blank')}
// Substituir '#' pela URL do seu checkout
```

2. **WhatsApp** (já configurado):
```tsx
const openWhatsApp = () => {
  const message = encodeURIComponent('Olá! Venho da página PetroBlack Friday Infinita e gostaria de tirar algumas dúvidas.');
  window.open(`https://wa.me/5521980298728?text=${message}`, '_blank');
};
```

3. **Links de "Adicionar ao Calendário"** (se implementar):
   - Google Calendar
   - ICS download

## 📊 Google Tag Manager (GTM)

O GTM já está configurado no `client/index.html`:

- **ID:** GTM-NDWD5Q63
- **HEAD:** Script principal
- **BODY:** Noscript fallback

Para testar se está funcionando:
1. Abra o site local
2. Abra DevTools (F12)
3. Vá em "Network" e filtre por "gtm"
4. Deve aparecer requisições para o GTM

## 🎯 Funcionalidades Implementadas

✅ **Responsividade Mobile-First Perfeita**
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Testado em: Mobile (320px+), Tablet (768px+), Desktop (1024px+)

✅ **12 Seções Estratégicas:**
1. Hero com contador regressivo + termômetro vagas
2. Notícias verificadas (edital iminente)
3. Por que investir agora (2025-2029)
4. Não tem curso técnico? (quebra objeção)
5. O que é o Vitalício (até 4 cursos, troca ilimitada)
6. +549 Aprovados (8 depoimentos reais + 3 vídeos)
7. Este curso é para você (5 perfis)
8. Como funciona (4 passos)
9. O que você recebe (6 entregáveis)
10. Breakdown de valor (ancoragem R$ 11.600 → R$ 2.993,50)
11. Oferta/Checkout (Vitalício 50% OFF)
12. FAQ (7 perguntas críticas)

✅ **Elementos Interativos:**
- Barra flutuante inferior (Garantir Vaga + Tirar Dúvidas)
- Contador regressivo animado
- Termômetro de vagas
- Accordion (27 ênfases)
- FAQ expansível
- Scroll suave para seção oferta

✅ **Integrações:**
- WhatsApp direto (5521980298728)
- GTM para tracking
- Botões de checkout

## 🎨 Personalizando Cores

As cores estão definidas em `client/src/index.css`:

```css
:root {
  --cpws-orange: #F39200;
  --cpws-gold: #FFD700;
  --cpws-green: #2C5F4F;
}
```

Para alterar, edite essas variáveis ou use as classes Tailwind:
- `bg-[#F39200]` - Laranja CPWS
- `text-[#FFD700]` - Dourado
- `border-[#F39200]` - Borda laranja

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro: "Port 3000 already in use"
```bash
# Matar processo na porta 3000
npx kill-port 3000

# Ou usar outra porta
pnpm dev --port 3001
```

### Imagens não aparecem
- Verifique se as imagens estão em `client/public/`
- Caminhos devem começar com `/` (ex: `/logo.png`)
- Reinicie o servidor após adicionar novas imagens

### Build falha
```bash
# Verificar erros TypeScript
pnpm tsc --noEmit

# Build com logs detalhados
pnpm build --debug
```

## 📦 Deploy

### Opção 1: Manus (Recomendado)
- Já está configurado no Manus
- Basta clicar em "Publish" no painel

### Opção 2: Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opção 3: Netlify
```bash
# Build
pnpm build

# Upload da pasta client/dist para Netlify
```

### Opção 4: Servidor próprio
```bash
# Build
pnpm build

# Copiar pasta client/dist para servidor
scp -r client/dist/* user@servidor:/var/www/html/
```

## 📝 Checklist Antes de Publicar

- [ ] Substituir TODAS as imagens placeholder
- [ ] Adicionar vídeos (VSL + 3 depoimentos)
- [ ] Configurar link do checkout
- [ ] Testar WhatsApp (número correto)
- [ ] Verificar GTM funcionando
- [ ] Testar em mobile real
- [ ] Revisar textos e valores
- [ ] Testar contador regressivo
- [ ] Verificar termômetro de vagas
- [ ] Testar todos os botões CTA
- [ ] Revisar FAQ (respostas completas)
- [ ] Testar formulário (se houver)

## 🆘 Suporte

- **Email:** suporte@cpwsconcursos.com.br
- **WhatsApp:** (21) 98029-8728
- **Documentação Manus:** https://help.manus.im

## 📄 Licença

© 2024 CPWS Concursos. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela equipe CPWS + Manus AI**

