import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Loader2, CheckCircle, ArrowRight, ArrowLeft, User, GraduationCap, Briefcase, MessageSquare } from "lucide-react";

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

// Lista unificada de cargos com prefixo e cor
const todosOsCargos = [
  // Nível Técnico
  { nome: "Inspeção de Equipamentos e Instalações", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Logística de Transportes", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Manutenção - Caldeiraria", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Manutenção - Elétrica", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Manutenção - Instrumentação", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Manutenção - Mecânica", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Técnico de Operação (Petrobras) e Dutos e Terminais (Transpetro)", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Operação de Lastro", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Projetos, Construção e Montagem - Elétrica", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Projetos, Construção e Montagem - Instrumentação", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Projetos, Construção e Montagem - Mecânica", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Química de Petróleo", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Enfermagem do Trabalho", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Segurança do Trabalho", nivel: "Técnico", cor: "text-blue-400" },
  { nome: "Suprimento de Bens e Serviços - Administração", nivel: "Técnico", cor: "text-blue-400" },
  // Nível Superior
  { nome: "Administração", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Análise - Comércio e Suprimento", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia Civil", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Equipamentos - Elétrica", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Equipamentos - Inspeção", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Equipamentos - Mecânica", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Equipamentos - Terminais e Dutos", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Petróleo", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Processamento", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Segurança do Processo", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Produção", nivel: "Superior", cor: "text-purple-400" },
  { nome: "Engenharia de Segurança do Trabalho", nivel: "Superior", cor: "text-purple-400" }
];

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK || "https://n8n.buscadorlce.online/webhook-test/537ae774-93e1-4f68-84f0-bfc8839df00f";

const TOTAL_STEPS = 4;

export default function LeadCaptureFormWizard() {
  const [currentStep, setCurrentStep] = useState(1);
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
  const [hasScrolledToForm, setHasScrolledToForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const formCardRef = useRef<HTMLDivElement>(null);

  // Scroll inteligente: apenas na primeira vez (etapa 1)
  useEffect(() => {
    if (currentStep === 1 && !hasScrolledToForm && formCardRef.current) {
      formCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHasScrolledToForm(true);
    }
  }, [currentStep, hasScrolledToForm]);

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

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    switch (step) {
      case 1:
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
        break;

      case 2:
        if (!formData.formacao) {
          newErrors.formacao = "Selecione uma formação";
        }
        break;

      case 3:
        if (formData.cargosInteresse.length === 0) {
          newErrors.cargosInteresse = "Selecione pelo menos um cargo de interesse";
        }
        break;

      case 4:
        if (formData.dificuldades && formData.dificuldades.length > 500) {
          newErrors.dificuldades = "Máximo de 500 caracteres";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      toast.error("Por favor, corrija os erros antes de continuar");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
      toast.error("Por favor, corrija os erros no formulário");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Landing Page Retrospectiva Petrobras 2025"
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
          event_label: 'Retrospectiva Petrobras 2025',
          form_name: 'lead_capture_retrospectiva_wizard',
          form_type: 'retrospectiva_dezembro',
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
          content_name: 'Inscrição Retrospectiva Petrobras 2025',
          content_category: 'Lead Generation',
          value: 1,
          currency: 'BRL'
        });
      }

      // Marcar formulário como enviado e mostrar modal
      setFormSubmitted(true);
      setShowSuccessModal(true);

      // Redirecionar para grupo do WhatsApp via Sendflow IMEDIATAMENTE
      const whatsappUrl = 'https://sndflw.com/i/petroblack-infinito-cpws';
      
      // Tentar abrir em nova aba
      const newWindow = window.open(whatsappUrl, '_blank');
      
      // Detectar se o popup foi bloqueado
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Popup bloqueado - o modal já está visível com o botão
        console.log('Popup bloqueado - modal já visível');
      }

    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar inscrição. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <User className="h-6 w-6" />;
      case 2: return <GraduationCap className="h-6 w-6" />;
      case 3: return <Briefcase className="h-6 w-6" />;
      case 4: return <MessageSquare className="h-6 w-6" />;
      default: return <CheckCircle className="h-6 w-6" />;
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return "Seus Dados";
      case 2: return "Formação";
      case 3: return "Cargos de Interesse";
      case 4: return "Conte-nos Mais";
      default: return "";
    }
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;

  return (
    <>
      {/* Modal de Sucesso Centralizado */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
          <Card className="w-full max-w-md mx-4 bg-gradient-to-br from-green-900 to-green-800 border-2 border-green-500 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <CheckCircle className="w-20 h-20 mx-auto text-green-400" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">
                ✅ Inscrição Confirmada!
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Você receberá as informações dos eventos por e-mail e WhatsApp.
              </p>
              <p className="text-base text-white/80 mb-8">
                Clique no botão abaixo para entrar no grupo do WhatsApp:
              </p>
              <a
                href="https://sndflw.com/i/petroblack-infinito-cpws"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
              >
                📱 Entrar no Grupo do WhatsApp
              </a>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  setFormSubmitted(false);
                  setFormData({
                    nome: "",
                    email: "",
                    whatsapp: "",
                    formacao: "",
                    cargosInteresse: [],
                    dificuldades: ""
                  });
                  setCurrentStep(1);
                  setHasScrolledToForm(false);
                }}
                className="mt-4 text-white/60 hover:text-white text-sm underline"
              >
                Fechar
              </button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Formulário - Ocultar quando submetido */}
      {!formSubmitted && (
        <Card ref={formCardRef} className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-black border-2 border-[#FFD700] shadow-2xl">
      <CardHeader className="text-center bg-gradient-to-r from-[#F39200] to-[#FFD700] py-3">
        <CardTitle className="text-xl md:text-2xl font-black text-black">
          🎯 GARANTA SUA VAGA NOS EVENTOS
        </CardTitle>
        <p className="text-xs md:text-sm text-black/90 font-semibold mt-1">
          Dia 27/11 - Vagas Limitadas
        </p>
      </CardHeader>

      <CardContent className="p-6 md:p-8">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Etapa {currentStep} de {TOTAL_STEPS}</span>
            <span className="text-sm text-[#FFD700] font-bold">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-800" />
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#F39200] to-[#FFD700]">
            {getStepIcon(currentStep)}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {getStepTitle(currentStep)}
            </h3>
            <p className="text-sm text-gray-400">Preencha as informações abaixo</p>
          </div>
        </div>

        {/* Step Content - Altura reduzida no mobile */}
        <div className="min-h-[280px] md:min-h-[400px]">
          
          {/* STEP 1: Nome, Email e WhatsApp */}
          {currentStep === 1 && (
            <div className="space-y-4 md:space-y-6 animate-fadeIn">
              <div>
                <Label htmlFor="nome" className="text-white text-sm md:text-lg">Nome Completo *</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-base py-4 md:py-6"
                  autoFocus
                />
                {errors.nome && <p className="text-red-400 text-sm mt-1">{errors.nome}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-white text-sm md:text-lg">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-base py-4 md:py-6"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-white text-sm md:text-lg">WhatsApp (com DDD) *</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(21) 99999-9999"
                  value={formData.whatsapp}
                  onChange={handleWhatsAppChange}
                  maxLength={15}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-base py-4 md:py-6"
                />
                {errors.whatsapp && <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>}
              </div>
            </div>
          )}

          {/* STEP 2: Formação */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <Label className="text-white text-sm md:text-lg">Qual é a sua formação educacional? *</Label>
              <RadioGroup value={formData.formacao} onValueChange={(value) => setFormData({ ...formData, formacao: value })}>
                <div className="space-y-2 md:space-y-3 mt-4">
                  {formacoesDisponiveis.map((formacao) => (
                    <div key={formacao} className="flex items-center space-x-3 bg-white/5 p-3 md:p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                      <RadioGroupItem
                        value={formacao}
                        id={`formacao-${formacao}`}
                        className="border-white/30 text-[#FFD700]"
                      />
                      <Label
                        htmlFor={`formacao-${formacao}`}
                        className="text-sm md:text-base text-white cursor-pointer flex-1"
                      >
                        {formacao}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              {errors.formacao && <p className="text-red-400 text-sm mt-2">{errors.formacao}</p>}
            </div>
          )}

          {/* STEP 3: Cargos de Interesse - Altura reduzida no mobile */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <Label className="text-white text-sm md:text-lg">Quais cargos você tem interesse em estudar? *</Label>
              <p className="text-xs md:text-sm text-gray-400 mb-3">Selecione todos que se aplicam</p>
              
              <div className="space-y-2">
                {/* Legenda */}
                <div className="flex gap-3 md:gap-4 mb-2 md:mb-3 text-xs md:text-sm">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-blue-400 rounded"></span>
                    <span className="text-gray-400">Nível Técnico</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-purple-400 rounded"></span>
                    <span className="text-gray-400">Nível Superior</span>
                  </span>
                </div>

                {/* Lista unificada - altura reduzida no mobile */}
                <div className="max-h-[220px] md:max-h-[400px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {todosOsCargos.map((cargo) => (
                    <div key={cargo.nome} className="flex items-start space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded hover:bg-white/10 transition-colors">
                      <Checkbox
                        id={`cargo-${cargo.nome}`}
                        checked={formData.cargosInteresse.includes(cargo.nome)}
                        onCheckedChange={() => toggleCargo(cargo.nome)}
                        className="border-white/30 data-[state=checked]:bg-[#F39200] data-[state=checked]:border-[#F39200] mt-0.5"
                      />
                      <Label
                        htmlFor={`cargo-${cargo.nome}`}
                        className="text-xs md:text-sm text-white cursor-pointer flex-1 leading-relaxed"
                      >
                        <span className={`font-semibold ${cargo.cor}`}>[{cargo.nivel}]</span> {cargo.nome}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {formData.cargosInteresse.length > 0 && (
                <p className="text-xs md:text-sm text-[#FFD700] mt-3">
                  ✓ {formData.cargosInteresse.length} cargo(s) selecionado(s)
                </p>
              )}
              {errors.cargosInteresse && <p className="text-red-400 text-sm mt-2">{errors.cargosInteresse}</p>}
            </div>
          )}

          {/* STEP 4: Campo Opcional */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <Label htmlFor="dificuldades" className="text-white text-sm md:text-lg">
                O que falta para você começar a estudar? (Opcional)
              </Label>
              <p className="text-xs md:text-sm text-gray-400">
                Conte-nos suas principais dificuldades ou dúvidas. Isso nos ajudará a personalizar sua experiência.
              </p>
              <Textarea
                id="dificuldades"
                placeholder="Ex: Falta de tempo, não sei por onde começar, dificuldade em manter foco..."
                value={formData.dificuldades}
                onChange={(e) => setFormData({ ...formData, dificuldades: e.target.value })}
                maxLength={500}
                rows={5}
                className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm md:text-base resize-none"
                autoFocus
              />
              <p className="text-xs text-gray-400 text-right">
                {formData.dificuldades.length}/500 caracteres
              </p>
              {errors.dificuldades && <p className="text-red-400 text-sm">{errors.dificuldades}</p>}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className="w-full sm:flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 py-5 md:py-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Voltar
            </Button>
          )}

          {currentStep < TOTAL_STEPS ? (
            <Button
              type="button"
              onClick={nextStep}
              className="w-full sm:flex-1 bg-gradient-to-r from-[#F39200] to-[#FFD700] hover:from-[#FFD700] hover:to-[#F39200] text-black font-bold py-5 md:py-6"
            >
              Próximo
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full sm:flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black py-5 md:py-6 text-sm md:text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Garantir Minha Vaga
                </>
              )}
            </Button>
          )}
        </div>

        <p className="text-xs text-center text-gray-400 mt-4 md:mt-6">
          Ao se inscrever, você concorda em receber informações sobre os eventos e ofertas especiais, e autoriza o uso de seus dados pessoais (nome, e-mail e telefone) para fins de marketing, comunicação e rastreamento de conversões em plataformas de anúncios, conforme nossa Política de Privacidade.
        </p>
      </CardContent>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #F39200;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #FFD700;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </Card>
      )}
    </>
  );
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}
