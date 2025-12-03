# Landing Page - Retrospectiva Petrobras 2025

Landing page para campanha de fim de ano (Natal/Ano Novo) da CPWS - Retrospectiva Petrobras 2025.

## 🎯 Objetivo

Página de inscrição para lives e plantões exclusivos sobre o cenário Petrobras 2025, com foco em conversão de leads para grupos do WhatsApp via SendFlow.

## 🎨 Design

### Paleta de Cores

- **CPWS Gold**: `#E7BB38` (25% - títulos, barras, destaques)
- **CPWS Green**: `#27512D` (70% - fundo e grandes áreas)
- **Green Support 1**: `#6EA773`
- **Green Support 2**: `#7AA867`
- **Snow White**: `#F6F8F7`
- **Holiday Accent**: `#DB4514` (5% - "Ao vivo", datas, urgência)
- **Deep Green**: `#1a3320` (backgrounds escuros)

### Mood

"Celebração + seriedade": fim de ano com brilho/dourado, mas ainda corporativo/industrial (Petrobras/Transpetro).

## 📅 Agenda

- **10/12 - 19h30**: LIVE - Retrospectiva 2025: Parte 1
- **11/12 - 20h00**: PLANTÃO - Tire suas dúvidas
- **18/12 - 19h30**: LIVE - Retrospectiva 2025: Parte 2
- **19/12 - 20h00**: PLANTÃO - Encerramento

## 🚀 Tecnologias

- **Framework**: React + TypeScript + Vite
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Routing**: wouter (hash routing)
- **Forms**: React Hook Form
- **Icons**: lucide-react

## 📱 Responsividade

Design **mobile-first** com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

## 📂 Estrutura

```
client/
├── src/
│   ├── pages/
│   │   ├── HomeRetrospectiva.tsx  # Página principal (Natal/Ano Novo)
│   │   ├── HomeEventos.tsx        # Página Black Friday (antiga)
│   │   └── Home.tsx               # Página original
│   ├── components/
│   │   ├── LeadCaptureFormWizard.tsx
│   │   └── ui/                    # Componentes shadcn/ui
│   ├── index.css                  # Estilos globais + paleta
│   └── App.tsx                    # Rotas
└── index.html
```

## 🎯 Rotas

- `/` - Retrospectiva Petrobras 2025 (atual)
- `/blackfriday` - Black Friday (anterior)
- `/original` - Versão original

## 📋 Componentes Principais

### 1. Top Bar
Faixa superior com degradê dourado e CTA de inscrição.

### 2. Hero
Vídeo YouTube + título com palavra-chave em dourado + chips de datas + CTAs.

### 3. Agenda
4 cards com cronograma das lives e plantões.

### 4. Benefícios
3 cards explicando por que participar.

### 5. Depoimentos
Grid 2x3 com aprovados CPWS.

### 6. Formulário
Wizard de captura de leads com integração SendFlow.

### 7. CTA Final
Encerramento com call-to-action principal.

### 8. Barra Fixa Inferior
Sempre visível no mobile com CTAs principais.

## 🖼️ Imagens Necessárias

### Lista de Assets a Desenvolver

1. **Faixa Top Bar** (`faixa-retrospectiva-2025.png`)
   - Dimensões: 2400x120px
   - Degradê dourado com texto repetível
   - Estilo: Moderno, corporativo, fim de ano sutil

2. **Background Hero** (2 opções)
   - **Opção A**: `fundo-industrial-verde.jpg` (1920x1080px)
   - **Opção B**: `fundo-bokeh-dourado.jpg` (1920x1080px)

3. **Ícones Benefícios** (SVG ou PNG 512x512px)
   - `icone-clareza.svg` - Lupa/gráfico/luz
   - `icone-direcao.svg` - Bússola/seta/mapa
   - `icone-especialistas.svg` - Pessoas/certificado/estrela

4. **Overlay Bokeh** (opcional)
   - `overlay-bokeh-dourado.png` (1920x1080px, transparente)

5. **Elementos Decorativos** (opcional)
   - `sparkles-dourado.png` (64x64px, transparente)
   - Linhas circuito em SVG

## 🎨 Diretrizes Visuais

### O que USAR (sutilmente):
- Overlay de luzes/bokeh douradas (opacidade baixa)
- Sparkles/estrelas pequenas
- Linhas finas estilo circuito/contorno
- Brilho dourado discreto em bordas

### O que EVITAR:
- Árvore de Natal
- Papai Noel
- Elementos natalinos óbvios
- Poluição visual

## 📊 Integrações

- **Google Tag Manager**: GTM-TF6PGNDF
- **SendFlow**: Webhook para captura de leads
- **WhatsApp**: Redirecionamento para grupos

## 🔗 Deploy

Configurado para GitHub Pages com hash routing.

## 📝 Notas

- Manter contraste AA para acessibilidade
- Texto dourado apenas sobre fundo verde escuro
- Campos de formulário grandes (tap-friendly)
- Barra fixa inferior sempre visível no mobile

## 👥 Créditos

**CPWS - Cursos Preparatórios Wellington Silva**

© 2025 CPWS. Todos os direitos reservados.
