# 📖 Guia do Usuário - Landing Page Eventos 10 e 11

## Para o Visitante (Lead)

### Como Se Inscrever nos Eventos

1. **Acesse a página** através do link fornecido
2. **Role até o formulário** ou clique em "Garantir Minha Vaga"
3. **Preencha seus dados básicos:**
   - Nome completo
   - E-mail
   - WhatsApp (com DDD)

4. **Selecione sua formação educacional:**
   - Mar
que todas as opções que se aplicam a você
   - Pode selecionar múltiplas opções

5. **Escolha os cargos de seu interesse:**
   - Navegue pelas listas de Nível Técnico e Nível Superior
   - Selecione todos os cargos que você tem interesse em estudar
   - Não há limite de seleções

6. **(Opcional) Conte suas dificuldades:**
   - Campo livre para você compartilhar o que falta para começar a estudar
   - Máximo de 500 caracteres

7. **Clique em "GARANTIR MINHA VAGA NOS EVENTOS"**

8. **Aguarde a confirmação:**
   - Você verá uma mensagem de sucesso
   - Será redirecionado para o WhatsApp para confirmar sua inscrição
   - Receberá informações por e-mail

### Dúvidas?

Se tiver qualquer dúvida, clique no botão **"Tirar Dúvidas"** na parte inferior da página para falar diretamente no WhatsApp.

---

## Para o Administrador (CPWS)

### Como Acessar os Leads Capturados

#### Opção 1: Arquivos Locais (Recomendado)

Os leads são automaticamente salvos em dois formatos na pasta `data/`:

**1. Arquivo JSON (`data/leads.json`)**
- Formato estruturado com todos os dados
- Ideal para análise programática ou importação em sistemas

**2. Arquivo CSV (`data/leads.csv`)**
- Formato de planilha
- Abra diretamente no Excel ou Google Sheets
- Colunas: Timestamp, Nome, Email, WhatsApp, Formação, Cargos de Interesse, Dificuldades

#### Opção 2: API REST

**Listar todos os leads:**
```
GET http://seu-dominio.com/api/leads
```

**Ver estatísticas:**
```
GET http://seu-dominio.com/api/leads/stats
```

Retorna:
- Total de leads capturados
- Formações mais selecionadas
- Cargos mais procurados
- Data do último lead

### Como Analisar os Dados

#### No Excel/Google Sheets

1. Abra o arquivo `data/leads.csv`
2. Use filtros para segmentar por:
   - Formação educacional
   - Cargos de interesse
   - Data de inscrição

3. Crie tabelas dinâmicas para:
   - Contar leads por cargo
   - Identificar formações mais comuns
   - Analisar dificuldades relatadas

#### Insights Importantes

**Formação Educacional:**
- Identifique se seu público é mais técnico ou superior
- Ajuste comunicação e ofertas baseado no perfil

**Cargos de Interesse:**
- Veja quais cursos têm mais demanda
- Priorize produção de conteúdo para cargos populares
- Identifique nichos menos explorados

**Dificuldades Relatadas:**
- Leia os campos opcionais para entender objeções
- Crie conteúdo que responda às dúvidas comuns
- Personalize abordagem de vendas

### Integração com CRM

Para integrar com seu CRM (RD Station, HubSpot, etc.):

1. Use o arquivo CSV para importação manual
2. Ou configure webhook no código (arquivo `server/routes.ts`)
3. Adicione chamada de API do seu CRM após salvar o lead

### Backup dos Dados

**Importante:** Faça backup regular da pasta `data/`

Recomendações:
- Backup diário automático
- Armazene em nuvem (Google Drive, Dropbox)
- Mantenha múltiplas cópias

### Notificações de Novos Leads

Para receber notificações quando um novo lead se inscrever:

**Opção 1: E-mail**
- Configure serviço de e-mail no backend
- Adicione envio de e-mail no endpoint `/api/leads`

**Opção 2: WhatsApp**
- Use API do WhatsApp Business
- Envie notificação automática para seu número

**Opção 3: Telegram**
- Configure bot do Telegram
- Receba mensagem instantânea a cada novo lead

### Monitoramento de Conversão

**Métricas Importantes:**
- Taxa de conversão (visitantes → leads)
- Campos mais preenchidos
- Horários de pico de inscrições
- Dispositivos mais usados (mobile vs desktop)

**Ferramentas Recomendadas:**
- Google Analytics
- Hotjar (heatmaps)
- Facebook Pixel
- Google Tag Manager

### Personalização Pós-Captura

Com os dados capturados, você pode:

1. **Segmentar comunicação:**
   - E-mails personalizados por cargo de interesse
   - WhatsApp com conteúdo relevante

2. **Criar ofertas direcionadas:**
   - Pacotes específicos por formação
   - Descontos para múltiplos cursos

3. **Nutrir leads:**
   - Sequência de e-mails educativos
   - Conteúdo gratuito relacionado aos interesses

### Perguntas Frequentes (Admin)

**Q: Os dados estão seguros?**
A: Sim, os dados são salvos localmente no servidor. Recomendamos adicionar autenticação para endpoints da API em produção.

**Q: Posso exportar para Excel?**
A: Sim, o arquivo CSV pode ser aberto diretamente no Excel.

**Q: Como adiciono mais campos ao formulário?**
A: Edite os arquivos `client/src/components/LeadCaptureForm.tsx` e `server/routes.ts`.

**Q: Posso integrar com meu sistema atual?**
A: Sim, use a API REST ou importe o arquivo CSV.

**Q: Como vejo quantos leads tenho?**
A: Acesse `http://seu-dominio.com/api/leads/stats` ou conte as linhas no CSV.

**Q: Os leads são salvos mesmo se o servidor cair?**
A: Sim, os dados são persistidos em arquivos. Faça backup regular.

### Suporte Técnico

Para ajuda técnica ou dúvidas sobre implementação:
- 📧 E-mail: suporte@cpws.com.br
- 📱 WhatsApp: (21) 97960-0647

---

**Última atualização:** 31 de Outubro de 2025
