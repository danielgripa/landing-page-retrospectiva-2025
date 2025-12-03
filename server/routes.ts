import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

interface LeadData {
  nome: string;
  email: string;
  whatsapp: string;
  formacao: string[];
  cargosInteresse: string[];
  dificuldades?: string;
  timestamp: string;
}

// Endpoint para receber dados do formulário
router.post("/api/leads", async (req, res) => {
  try {
    const leadData: LeadData = {
      ...req.body,
      timestamp: new Date().toISOString()
    };

    // Validações básicas
    if (!leadData.nome || leadData.nome.length < 3) {
      return res.status(400).json({ error: "Nome inválido" });
    }

    if (!leadData.email || !leadData.email.includes("@")) {
      return res.status(400).json({ error: "E-mail inválido" });
    }

    if (!leadData.whatsapp) {
      return res.status(400).json({ error: "WhatsApp inválido" });
    }

    if (!leadData.formacao || leadData.formacao.length === 0) {
      return res.status(400).json({ error: "Selecione pelo menos uma formação" });
    }

    if (!leadData.cargosInteresse || leadData.cargosInteresse.length === 0) {
      return res.status(400).json({ error: "Selecione pelo menos um cargo de interesse" });
    }

    // Salvar em arquivo JSON
    const leadsDir = path.join(__dirname, "..", "data");
    const leadsFile = path.join(leadsDir, "leads.json");

    // Criar diretório se não existir
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }

    // Ler leads existentes
    let leads: LeadData[] = [];
    if (fs.existsSync(leadsFile)) {
      const fileContent = fs.readFileSync(leadsFile, "utf-8");
      leads = JSON.parse(fileContent);
    }

    // Adicionar novo lead
    leads.push(leadData);

    // Salvar arquivo
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    // Também salvar em CSV para fácil exportação
    const csvFile = path.join(leadsDir, "leads.csv");
    const csvLine = `"${leadData.timestamp}","${leadData.nome}","${leadData.email}","${leadData.whatsapp}","${leadData.formacao.join("; ")}","${leadData.cargosInteresse.join("; ")}","${leadData.dificuldades || ""}"\n`;
    
    if (!fs.existsSync(csvFile)) {
      const csvHeader = "Timestamp,Nome,Email,WhatsApp,Formação,Cargos de Interesse,Dificuldades\n";
      fs.writeFileSync(csvFile, csvHeader);
    }
    fs.appendFileSync(csvFile, csvLine);

    res.json({ 
      success: true, 
      message: "Lead cadastrado com sucesso!",
      leadId: leads.length
    });

  } catch (error) {
    console.error("Erro ao processar lead:", error);
    res.status(500).json({ error: "Erro ao processar dados" });
  }
});

// Endpoint para listar leads (protegido - adicionar autenticação em produção)
router.get("/api/leads", (req, res) => {
  try {
    const leadsFile = path.join(__dirname, "..", "data", "leads.json");
    
    if (!fs.existsSync(leadsFile)) {
      return res.json({ leads: [], total: 0 });
    }

    const fileContent = fs.readFileSync(leadsFile, "utf-8");
    const leads = JSON.parse(fileContent);

    res.json({ 
      leads, 
      total: leads.length 
    });

  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
});

// Endpoint para estatísticas
router.get("/api/leads/stats", (req, res) => {
  try {
    const leadsFile = path.join(__dirname, "..", "data", "leads.json");
    
    if (!fs.existsSync(leadsFile)) {
      return res.json({ 
        total: 0,
        formacoes: {},
        cargos: {}
      });
    }

    const fileContent = fs.readFileSync(leadsFile, "utf-8");
    const leads: LeadData[] = JSON.parse(fileContent);

    // Contar formações
    const formacoes: Record<string, number> = {};
    leads.forEach(lead => {
      lead.formacao.forEach(f => {
        formacoes[f] = (formacoes[f] || 0) + 1;
      });
    });

    // Contar cargos
    const cargos: Record<string, number> = {};
    leads.forEach(lead => {
      lead.cargosInteresse.forEach(c => {
        cargos[c] = (cargos[c] || 0) + 1;
      });
    });

    res.json({ 
      total: leads.length,
      formacoes,
      cargos,
      ultimoLead: leads[leads.length - 1]?.timestamp
    });

  } catch (error) {
    console.error("Erro ao buscar estatísticas:", error);
    res.status(500).json({ error: "Erro ao buscar estatísticas" });
  }
});

export default router;
