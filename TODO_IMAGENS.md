# 📋 TODO - Imagens Pendentes

## ⚠️ Imagens que precisam ser criadas/substituídas

### 1. Logo/Favicon (PRIORITÁRIO)
- **Atual:** `petroblackfriday.png` (contexto Black Friday)
- **Novo:** `logo-retrospectiva-2025.png` ou `cpws-logo.png`
- **Onde usar:**
  - `client/index.html` (linhas 10-11) - favicon e apple-touch-icon
  - Opcionalmente no hero da página
- **Especificações:**
  - Formato: PNG transparente
  - Dimensões: 512x512px (para favicon) ou maior
  - Cores: Verde CPWS + Dourado
  - Estilo: Corporativo, limpo

### 2. Faixa Top Bar (PRIORITÁRIO)
- **Arquivo:** `faixa-retrospectiva-2025.png`
- **Localização:** `client/public/`
- **Onde usar:** `HomeRetrospectiva.tsx` - atualmente comentado, precisa descomentar após criar
- **Especificações:** Ver LISTA_IMAGENS_NECESSARIAS.md

### 3. Background Hero (PRIORITÁRIO)
- **Opção A:** `fundo-industrial-verde.jpg`
- **Opção B:** `fundo-bokeh-dourado.jpg`
- **Localização:** `client/public/`
- **Onde usar:** `HomeRetrospectiva.tsx` linha ~170
- **Atual:** Usando `fundo-refinaria.jpeg` com overlay verde (temporário)
- **Especificações:** Ver LISTA_IMAGENS_NECESSARIAS.md

### 4. Ícones Benefícios (PRIORITÁRIO)
- `icone-clareza.svg` (ou .png)
- `icone-direcao.svg` (ou .png)
- `icone-especialistas.svg` (ou .png)
- **Localização:** `client/public/`
- **Onde usar:** `HomeRetrospectiva.tsx` - atualmente usando ícones do lucide-react
- **Especificações:** Ver LISTA_IMAGENS_NECESSARIAS.md

### 5. Overlay Bokeh (OPCIONAL)
- **Arquivo:** `overlay-bokeh-dourado.png`
- **Localização:** `client/public/`
- **Onde usar:** Classe CSS `.bokeh-overlay` já implementada
- **Especificações:** Ver LISTA_IMAGENS_NECESSARIAS.md

## ✅ Imagens que podem ser mantidas (temporariamente)

- `fundo-refinaria.jpeg` - Sendo usado com overlay verde
- `aprovado-01.jpg` até `aprovado-06.jpg` - Depoimentos (OK)

## 🔧 Como atualizar após criar as imagens

### 1. Adicionar imagens
```bash
# Copiar para a pasta public
cp suas-imagens/* client/public/
```

### 2. Atualizar referências no código

#### Favicon (index.html)
```html
<!-- Linha 10-11 -->
<link rel="icon" type="image/png" href="/logo-retrospectiva-2025.png" />
<link rel="apple-touch-icon" href="/logo-retrospectiva-2025.png" />
```

#### Faixa Top Bar (HomeRetrospectiva.tsx)
```tsx
// Descomentar e atualizar linha ~131
<div
  className="w-full h-full bg-center bg-cover animate-bg-pan"
  style={{
    backgroundImage: "url('faixa-retrospectiva-2025.png')",
    backgroundSize: "180% auto",
    backgroundRepeat: "repeat-x"
  }}
/>
```

#### Background Hero (HomeRetrospectiva.tsx)
```tsx
// Atualizar linha ~170
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url(fundo-industrial-verde.jpg)', // ou fundo-bokeh-dourado.jpg
    opacity: 0.3
  }}
/>
```

#### Ícones Benefícios (HomeRetrospectiva.tsx)
Se usar imagens customizadas em vez dos ícones lucide-react:
```tsx
// Substituir IconComponent por <img>
<img 
  src="icone-clareza.svg" 
  alt="Clareza do Cenário"
  className="h-10 w-10"
/>
```

## 📝 Checklist

- [ ] Criar logo/favicon da Retrospectiva 2025
- [ ] Atualizar favicon no index.html
- [ ] Criar faixa top bar animada
- [ ] Descomentar faixa no HomeRetrospectiva.tsx
- [ ] Criar background hero (escolher opção A ou B)
- [ ] Atualizar background no HomeRetrospectiva.tsx
- [ ] Criar 3 ícones de benefícios
- [ ] (Opcional) Criar overlay bokeh
- [ ] (Opcional) Criar sparkles e linhas circuito
- [ ] Testar em diferentes dispositivos
- [ ] Otimizar tamanho das imagens
- [ ] Fazer commit e push

## 🎨 Referência de Cores

```css
--cpws-gold: #E7BB38;
--cpws-green: #27512D;
--cpws-green-support-1: #6EA773;
--cpws-green-support-2: #7AA867;
--cpws-snow-white: #F6F8F7;
--cpws-holiday-accent: #DB4514;
--cpws-deep-green: #1a3320;
```

## 📞 Dúvidas?

Consulte: `LISTA_IMAGENS_NECESSARIAS.md` para especificações detalhadas de cada imagem.
