import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  formacao: string;
  cargosInteresse: string[];
  dificuldades: string;
}

const formacoesDisponiveis = [
  "Ensino Médio Completo",
  "Ensino Técnico Completo",
  "Ensino Superior Completo",
  "Ensino Superior em Andamento",
  "Pós-graduação"
];

const cargosNivelTecnico = [
  "Inspeção de Equipamentos e Instalações",
  "Logística de Transportes",
  "Manutenção - Caldeiraria",
  "Manutenção - Elétrica",
  "Manutenção - Instrumentação",
  "Manutenção - Mecânica",
  "Técnico de Operação (Petrobras) e Dutos e Terminais (Transpetro)",
  "Operação de Lastro",
  "Projetos, Construção e Montagem - Elétrica",
  "Projetos, Construção e Montagem - Instrumentação",
  "Projetos, Construção e Montagem - Mecânica",
  "Química de Petróleo",
  "Enfermagem do Trabalho",
  "Segurança do Trabalho",
  "Suprimento de Bens e Serviços - Administração"
];

const cargosNivelSuperior = [
  "Administração",
  "Análise - Comércio e Suprimento",
  "Engenharia Civil",
  "Engenharia de Equipamentos - Elétrica",
  "Engenharia de Equipamentos - Inspeção",
  "Engenharia de Equipamentos - Mecânica",
  "Engenharia de Equipamentos - Terminais e Dutos",
  "Engenharia de Petróleo",
  "Engenharia de Processamento",
  "Engenharia de Segurança do Processo",
  "Engenharia de Produção",
  "Engenharia de Segurança do Trabalho"
];

// Webhook N8N - configurado via .env
// Para produção: remova -test da URL no arquivo .env
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK || "https://n8n.buscadorlce.online/webhook-test/537ae774-93e1-4f68-84f0-bfc8839df00f";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    formacao: "",
    cargosInteresse: [],
    dificuldades: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData({ ...formData, whatsapp: formatted });
  };

  const toggleCargo = (cargo: string) => {
    setFormData(prev => ({
      ...prev,
      cargosInteresse: prev.cargosInteresse.includes(cargo)
        ? prev.cargosInteresse.filter(c => c !== cargo)
        : [...prev.cargosInteresse, cargo]
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nome || formData.nome.trim().length < 3) {
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    const whatsappNumbers = formData.whatsapp.replace(/\D/g, "");
    if (!whatsappNumbers || whatsappNumbers.length !== 11) {
      newErrors.whatsapp = "WhatsApp deve ter 11 dígitos (DDD + número)";
    }

    if (!formData.formacao) {
      newErrors.formacao = "Selecione uma formação";
    }

    if (formData.cargosInteresse.length === 0) {
      newErrors.cargosInteresse = "Selecione pelo menos um cargo de interesse";
    }

    if (formData.dificuldades && formData.dificuldades.length > 500) {
      newErrors.dificuldades = "Máximo de 500 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Por favor, corrija os erros no formulário");
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar para N8N webhook
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Landing Page Eventos 10 e 11"
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      // Enviar evento para GTM - Conversão de Lead
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'generate_lead', // Evento padrão do Google Analytics 4
          event_category: 'Lead',
          event_label: 'Eventos 10 e 11',
          form_name: 'lead_capture_eventos',
          form_type: 'eventos_black_friday',
          lead_type: 'evento_inscricao',
          user_name: formData.nome,
          user_email: formData.email,
          user_phone: '+55' + formData.whatsapp.replace(/\D/g, ''),
          user_formacao: formData.formacao,
          user_cargos: formData.cargosInteresse.join(', '),
          num_cargos: formData.cargosInteresse.length,
          conversion_value: 1, // Valor da conversão (ajustar conforme necessário)
          currency: 'BRL'
        });
        
        // Evento adicional para compatibilidade com Meta Pixel
        window.dataLayer.push({
          event: 'Lead', // Nome do evento para Meta Ads
          content_name: 'Inscrição Eventos 10 e 11',
          content_category: 'Lead Generation',
          value: 1,
          currency: 'BRL'
        });
      }

      toast.success("Inscrição realizada com sucesso! Você receberá as informações dos eventos por e-mail e WhatsApp.");

      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        formacao: "",
        cargosInteresse: [],
        dificuldades: ""
      });

      // Redirecionar para grupo do WhatsApp via Sendflow com fallback
      setTimeout(() => {
        const whatsappUrl = 'https://sndflw.com/i/petroblack-infinito-cpws';
        
        // Tentar abrir em nova aba
        const newWindow = window.open(whatsappUrl, '_blank');
        
        // Detectar se o popup foi bloqueado
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          // Popup bloqueado - mostrar modal com botão manual
          toast.success(
            <div className="flex flex-col gap-3">
              <p className="font-bold">✅ Inscrição confirmada!</p>
              <p>Clique no botão abaixo para entrar no grupo:</p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                📱 Entrar no Grupo do WhatsApp
              </a>
            </div>,
            {
              duration: 10000, // 10 segundos
              position: 'top-center',
            }
          );
          
          // Fallback: redirecionar na mesma aba após 8 segundos se não clicar
          setTimeout(() => {
            if (confirm('Deseja entrar no grupo do WhatsApp agora?')) {
              window.location.href = whatsappUrl;
            }
          }, 8000);
        }
      }, 2000);

    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar inscrição. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border-2 border-[#FFD700] shadow-2xl">
      <CardHeader className="text-center bg-gradient-to-r from-[#F39200] to-[#FFD700] py-6">
        <CardTitle className="text-2xl md:text-3xl font-black text-black">
          🎯 GARANTA SUA VAGA NOS EVENTOS
        </CardTitle>
        <p className="text-sm md:text-base text-black/90 font-semibold mt-2">
          Dias 10 e 11 - Vagas Limitadas
        </p>
      </CardHeader>

      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Dados Básicos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FFD700] flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Dados Básicos
            </h3>

            <div>
              <Label htmlFor="nome" className="text-white">Nome Completo *</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              {errors.nome && <p className="text-red-400 text-sm mt-1">{errors.nome}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-white">E-mail *</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="whatsapp" className="text-white">WhatsApp (com DDD) *</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(21) 99999-9999"
                value={formData.whatsapp}
                onChange={handleWhatsAppChange}
                maxLength={15}
                className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              {errors.whatsapp && <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>}
            </div>
          </div>

          {/* Formação - RADIO BUTTONS (escolha única) */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#FFD700] flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Formação Educacional *
            </h3>
            <p className="text-sm text-gray-400">Selecione sua formação</p>
            
            <RadioGroup value={formData.formacao} onValueChange={(value) => setFormData({ ...formData, formacao: value })}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {formacoesDisponiveis.map((formacao) => (
                  <div key={formacao} className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <RadioGroupItem
                      value={formacao}
                      id={`formacao-${formacao}`}
                      className="border-white/30 text-[#FFD700]"
                    />
                    <Label
                      htmlFor={`formacao-${formacao}`}
                      className="text-sm text-white cursor-pointer flex-1"
                    >
                      {formacao}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
            {errors.formacao && <p className="text-red-400 text-sm">{errors.formacao}</p>}
          </div>

          {/* Cargos de Interesse - CHECKBOXES (múltipla escolha) */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#FFD700] flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Cargos de Interesse *
            </h3>
            <p className="text-sm text-gray-400">Selecione todos os cargos que você tem interesse em estudar</p>
            
            {/* Nível Técnico */}
            <div className="space-y-2">
              <h4 className="text-md font-semibold text-[#F39200]">Nível Técnico</h4>
              <div className="max-h-64 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {cargosNivelTecnico.map((cargo) => (
                  <div key={cargo} className="flex items-center space-x-2 bg-white/5 p-2 rounded hover:bg-white/10 transition-colors">
                    <Checkbox
                      id={`cargo-${cargo}`}
                      checked={formData.cargosInteresse.includes(cargo)}
                      onCheckedChange={() => toggleCargo(cargo)}
                      className="border-white/30 data-[state=checked]:bg-[#F39200] data-[state=checked]:border-[#F39200]"
                    />
                    <Label
                      htmlFor={`cargo-${cargo}`}
                      className="text-sm text-white cursor-pointer flex-1"
                    >
                      {cargo}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Nível Superior */}
            <div className="space-y-2">
              <h4 className="text-md font-semibold text-[#F39200]">Nível Superior</h4>
              <div className="max-h-64 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {cargosNivelSuperior.map((cargo) => (
                  <div key={cargo} className="flex items-center space-x-2 bg-white/5 p-2 rounded hover:bg-white/10 transition-colors">
                    <Checkbox
                      id={`cargo-${cargo}`}
                      checked={formData.cargosInteresse.includes(cargo)}
                      onCheckedChange={() => toggleCargo(cargo)}
                      className="border-white/30 data-[state=checked]:bg-[#F39200] data-[state=checked]:border-[#F39200]"
                    />
                    <Label
                      htmlFor={`cargo-${cargo}`}
                      className="text-sm text-white cursor-pointer flex-1"
                    >
                      {cargo}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            {errors.cargosInteresse && <p className="text-red-400 text-sm">{errors.cargosInteresse}</p>}
          </div>

          {/* Campo Opcional */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-[#FFD700] flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              O que falta para começar a estudar? (Opcional)
            </h3>
            <Textarea
              id="dificuldades"
              placeholder="Conte-nos quais são suas principais dificuldades ou dúvidas..."
              value={formData.dificuldades}
              onChange={(e) => setFormData({ ...formData, dificuldades: e.target.value })}
              maxLength={500}
              rows={4}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
            />
            <p className="text-xs text-gray-400 text-right">
              {formData.dificuldades.length}/500 caracteres
            </p>
            {errors.dificuldades && <p className="text-red-400 text-sm">{errors.dificuldades}</p>}
          </div>

          {/* Botão de Envio */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-lg py-6 shadow-xl transform hover:scale-105 transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                🚀 GARANTIR MINHA VAGA NOS EVENTOS
              </>
            )}
          </Button>

          <p className="text-xs text-center text-gray-400 mt-4">
            Ao se inscrever, você concorda em receber informações sobre os eventos e ofertas especiais, e autoriza o uso de seus dados pessoais (nome, e-mail e telefone) para fins de marketing, comunicação e rastreamento de conversões em plataformas de anúncios, conforme nossa Política de Privacidade.
          </p>
        </form>
      </CardContent>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #F39200;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #FFD700;
        }
      `}</style>
    </Card>
  );
}

// Declaração TypeScript para dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
