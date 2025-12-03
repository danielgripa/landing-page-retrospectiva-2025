# 🎯 Formulário Wizard Multi-Etapas - Documentação

## ✅ Implementação Concluída

O formulário foi completamente reformulado em um **wizard multi-etapas (step-by-step)** otimizado para mobile, proporcionando uma experiência de usuário muito superior.

---

## 📱 Por Que Wizard Multi-Etapas?

### Problemas do Formulário Antigo:
- ❌ Formulário longo e intimidador no mobile
- ❌ Scroll infinito desestimula preenchimento
- ❌ Usuário vê todos os campos de uma vez (sobrecarga cognitiva)
- ❌ Taxa de abandono alta em dispositivos móveis
- ❌ UX/UI ruim para telas pequenas

### Vantagens do Novo Wizard:
- ✅ **Uma pergunta por vez** - Foco total
- ✅ **Progress bar visual** - Usuário sabe onde está
- ✅ **Navegação clara** - Botões Voltar/Próximo
- ✅ **Validação por etapa** - Feedback imediato
- ✅ **Animações suaves** - Transições profissionais
- ✅ **Mobile-first** - Otimizado para celular
- ✅ **Taxa de conversão maior** - Menos abandono

---

## 🎨 Estrutura do Wizard

### 5 Etapas Totais:

#### **Etapa 1: Seu Nome** 👤
- Campo: Nome completo
- Validação: Mínimo 3 caracteres
- Ícone: User
- Cor: Gradiente laranja/dourado

#### **Etapa 2: Contato** 📧
- Campos: E-mail + WhatsApp
- Validação: Formato de e-mail + 11 dígitos WhatsApp
- Ícone: Mail
- Máscara automática no WhatsApp

#### **Etapa 3: Formação** 🎓
- Campo: Formação educacional (radio - escolha única)
- Opções: 5 formações disponíveis
- Validação: Pelo menos 1 selecionada
- Ícone: GraduationCap

#### **Etapa 4: Cargos de Interesse** 💼
- Campo: Cargos (checkboxes - múltipla escolha)
- Opções: 26 cargos (14 técnico + 12 superior)
- Validação: Pelo menos 1 selecionado
- Ícone: Briefcase
- Scroll interno para economizar espaço
- Contador de selecionados

#### **Etapa 5: Conte-nos Mais** 💬
- Campo: O que falta para começar a estudar? (opcional)
- Textarea com 500 caracteres máximo
- Contador de caracteres
- Ícone: MessageSquare

---

## 🎯 Elementos Visuais

### Progress Bar
- Barra de progresso no topo
- Mostra "Etapa X de 5"
- Percentual visual (0% → 100%)
- Cor: Dourado (#FFD700)

### Step Indicator
- Ícone grande circular
- Gradiente laranja/dourado
- Título da etapa atual
- Subtítulo explicativo

### Navegação
- **Botão "Voltar"**: Aparece da etapa 2 em diante
- **Botão "Próximo"**: Etapas 1-4
- **Botão "Garantir Minha Vaga"**: Etapa final (5)
- Validação antes de avançar

### Animações
- Fade in suave ao trocar etapas
- Scroll automático para o topo
- Transições de 300ms
- Hover effects nos botões

---

## 📊 Fluxo do Usuário

```
Início
  ↓
Etapa 1: Nome
  ↓ (validação)
Etapa 2: E-mail + WhatsApp
  ↓ (validação)
Etapa 3: Formação (radio)
  ↓ (validação)
Etapa 4: Cargos (checkboxes)
  ↓ (validação)
Etapa 5: Dificuldades (opcional)
  ↓
Submissão → N8N Webhook
  ↓
Sucesso → WhatsApp redirect
```

---

## 🔧 Implementação Técnica

### Componente Principal
**Arquivo:** `client/src/components/LeadCaptureFormWizard.tsx`

### Estados Gerenciados
```typescript
- currentStep: number (1-5)
- formData: FormData (todos os campos)
- isSubmitting: boolean
- errors: Partial<Record<keyof FormData, string>>
```

### Funções Principais

#### `validateStep(step: number)`
Valida a etapa atual antes de avançar:
- Etapa 1: Nome (mín. 3 caracteres)
- Etapa 2: E-mail (formato) + WhatsApp (11 dígitos)
- Etapa 3: Formação (obrigatório)
- Etapa 4: Cargos (mín. 1)
- Etapa 5: Dificuldades (máx. 500 caracteres)

#### `nextStep()`
- Valida etapa atual
- Se válido: avança para próxima
- Se inválido: mostra toast de erro
- Scroll automático para topo

#### `prevStep()`
- Volta para etapa anterior
- Sem validação (permite correção)
- Scroll automático para topo

#### `handleSubmit()`
- Valida etapa final
- Envia para webhook N8N
- Dispara evento GTM
- Mostra toast de sucesso
- Redireciona para WhatsApp
- Reseta formulário

---

## 🎨 Responsividade

### Mobile (< 768px)
- Formulário ocupa 100% da largura
- Campos maiores (py-6)
- Texto maior (text-lg)
- Botões full-width
- Progress bar compacta
- Scroll interno nas listas de cargos

### Tablet (768px - 1024px)
- Formulário centralizado
- Max-width: 2xl (672px)
- Espaçamentos médios
- Botões lado a lado

### Desktop (> 1024px)
- Formulário centralizado
- Max-width: 2xl (672px)
- Espaçamentos generosos
- Hover effects mais evidentes

---

## 🎯 Validações Implementadas

### Client-Side (Tempo Real)
- Nome: mínimo 3 caracteres
- E-mail: regex de formato válido
- WhatsApp: exatamente 11 dígitos
- Formação: obrigatório selecionar
- Cargos: mínimo 1 selecionado
- Dificuldades: máximo 500 caracteres

### Feedback Visual
- Mensagens de erro em vermelho
- Toast notifications
- Campos inválidos destacados
- Contador de caracteres
- Contador de cargos selecionados

---

## 📡 Integração

### N8N Webhook
Mesma integração do formulário anterior:
- URL configurável via `.env`
- POST com JSON
- Timestamp automático
- Source identificado

### Google Tag Manager
Evento disparado na submissão:
```javascript
{
  event: 'form_submission',
  form_name: 'lead_capture_eventos',
  formacao: 'Ensino Superior Completo',
  num_cargos: 2
}
```

---

## 🚀 Benefícios para Conversão

### Psicologia do Usuário
1. **Compromisso Gradual**: Usuário se compromete aos poucos
2. **Progresso Visível**: Barra mostra que está quase terminando
3. **Menos Intimidador**: Uma pergunta por vez
4. **Sensação de Controle**: Pode voltar e corrigir
5. **Gamificação**: Completar etapas = conquista

### Métricas Esperadas
- 📈 **+40% taxa de conclusão** vs formulário longo
- 📉 **-60% abandono** no mobile
- ⏱️ **+30% tempo de engajamento**
- 🎯 **+25% conversão geral**

---

## 🎨 Customização

### Cores
Arquivo: `LeadCaptureFormWizard.tsx`

```typescript
// Progress bar
className="h-2 bg-gray-800"

// Ícone da etapa
className="bg-gradient-to-r from-[#F39200] to-[#FFD700]"

// Botão Próximo
className="bg-gradient-to-r from-[#F39200] to-[#FFD700]"

// Botão Final
className="bg-gradient-to-r from-green-600 to-green-700"
```

### Textos
Cada etapa tem:
- `getStepTitle(step)` - Título da etapa
- `getStepIcon(step)` - Ícone da etapa
- Labels personalizados em cada campo

### Número de Etapas
```typescript
const TOTAL_STEPS = 5; // Altere aqui se adicionar/remover etapas
```

---

## 📱 Comparação: Antes vs Depois

### Formulário Antigo
```
┌─────────────────────┐
│ Nome:               │
│ [_________________] │
│                     │
│ E-mail:             │
│ [_________________] │
│                     │
│ WhatsApp:           │
│ [_________________] │
│                     │
│ Formação:           │
│ ☐ Opção 1           │
│ ☐ Opção 2           │
│ ☐ Opção 3           │
│ ☐ Opção 4           │
│ ☐ Opção 5           │
│                     │
│ Cargos: (26 opções) │
│ ☐ Cargo 1           │
│ ☐ Cargo 2           │
│ ... (scroll)        │
│                     │
│ Dificuldades:       │
│ [_________________] │
│ [_________________] │
│                     │
│ [    ENVIAR    ]    │
└─────────────────────┘
```

### Wizard Novo
```
Etapa 1/5 ████░░░░░ 20%

    👤
  Seu Nome
  
Qual é o seu nome completo? *
[_____________________]

[Voltar]  [Próximo →]

---

Etapa 2/5 ████████░ 40%

    📧
  Contato
  
Qual é o seu e-mail? *
[_____________________]

Qual é o seu WhatsApp? *
[_____________________]

[← Voltar]  [Próximo →]

... (e assim por diante)
```

---

## ✅ Checklist de Implementação

- [x] Wizard com 5 etapas criado
- [x] Progress bar funcional
- [x] Navegação Voltar/Próximo
- [x] Validação por etapa
- [x] Animações de transição
- [x] Ícones para cada etapa
- [x] Responsivo mobile-first
- [x] Integração N8N mantida
- [x] Integração GTM mantida
- [x] Scroll automático entre etapas
- [x] Feedback visual de erros
- [x] Toast notifications
- [x] Contador de progresso
- [x] Contador de caracteres
- [x] Contador de cargos selecionados

---

## 🎯 Próximos Passos

1. **Testar no mobile real**
   - iPhone e Android
   - Diferentes tamanhos de tela
   - Orientação portrait/landscape

2. **A/B Testing**
   - Comparar com formulário antigo
   - Medir taxa de conversão
   - Ajustar conforme dados

3. **Melhorias Futuras**
   - Salvar progresso (localStorage)
   - Permitir pular etapa opcional
   - Adicionar tooltips
   - Animações mais elaboradas

---

## 📞 Suporte

Para dúvidas sobre o wizard:
- Arquivo: `client/src/components/LeadCaptureFormWizard.tsx`
- Documentação: Este arquivo
- Testes: Acesse a landing page e preencha o formulário

---

**Desenvolvido para:** CPWS - Curso Preparatório Wellington Silva  
**Data:** 31 de Outubro de 2025  
**Versão:** 2.0 - Wizard Multi-Etapas
