import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target,
  Phone,
  CheckCircle,
  Lightbulb,
  Compass,
  Users,
  Quote,
  Calendar,
  Clock,
  Video,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import LeadCaptureFormWizard from "@/components/LeadCaptureFormWizard";

export default function HomeRetrospectiva() {
  const [showWizard, setShowWizard] = useState(false);
  const [showActionBar, setShowActionBar] = useState(true);

  const scrollToForm = () => {
    setShowWizard(true);
    setShowActionBar(false);
    setTimeout(() => {
      document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Venho da página da Retrospectiva Petrobras 2025 e gostaria de tirar algumas dúvidas.');
    window.open(`https://wa.me/5521979600647?text=${message}`, '_blank');
  };

  const agenda = [
    {
      data: "10/12",
      horario: "19h30",
      tipo: "LIVE",
      titulo: "Retrospectiva 2025: Parte 1",
      descricao: "12 sinais de que o próximo edital é questão de tempo",
      aoVivo: true
    },
    {
      data: "11/12",
      horario: "20h00",
      tipo: "PLANTÃO",
      titulo: "Plantão de Dúvidas",
      descricao: "Tire suas dúvidas sobre o cenário Petrobras",
      aoVivo: false
    },
    {
      data: "18/12",
      horario: "19h30",
      tipo: "LIVE",
      titulo: "Retrospectiva 2025: Parte 2",
      descricao: "Direcionamento estratégico para 2026",
      aoVivo: true
    },
    {
      data: "19/12",
      horario: "20h00",
      tipo: "PLANTÃO",
      titulo: "Encerramento e Próximos Passos",
      descricao: "Planejamento final e orientações",
      aoVivo: false
    }
  ];

  const beneficios = [
    {
      icone: Lightbulb,
      titulo: "Clareza do Cenário",
      descricao: "Entenda os movimentos da Petrobras e Transpetro em 2025 e o que esperar para 2026"
    },
    {
      icone: Compass,
      titulo: "Direção Antes do Edital",
      descricao: "Saiba exatamente como se preparar e quais áreas focar nos próximos meses"
    },
    {
      icone: Users,
      titulo: "Especialistas CPWS",
      descricao: "Professores com experiência em Petrobras/Transpetro compartilhando insights exclusivos"
    }
  ];

  const depoimentos = [
    {
      nome: "Celso Rocha",
      foto: "aprovado-01.jpg",
      texto: "Eu sempre digo: o CPWS me surpreendeu pela equipe de professores. Eles são incríveis! É uma combinação perfeita de muito conhecimento técnico e uma didática impecável.",
      ano: "2023.2"
    },
    {
      nome: "João Paulo Leão",
      foto: "aprovado-02.jpg",
      texto: "Fiz o CPWS e fui aprovado no concurso da Petrobras! Valeu demais, CPWS! E um abraço especial pro Wellington, que fez toda a diferença!",
      ano: "2023.2"
    },
    {
      nome: "Elizabeth Lacerda",
      foto: "aprovado-03.jpg",
      texto: "Eu fiz o CPWS e fui aprovada no concurso da Petrobras! O curso me deu o direcionamento certo e foi fundamental nessa conquista!",
      ano: "2023.2"
    },
    {
      nome: "Suellen Cristina",
      foto: "aprovado-04.jpg",
      texto: "Meu irmão fez o curso do CPWS, foi aprovado antes de mim e recomendou muito. Eu já trabalhava e estudava, e o CPWS foi essencial para ter a minha aprovação na Petrobras.",
      ano: "2023.2"
    },
    {
      nome: "Letícia Cabanas",
      foto: "aprovado-05.jpg",
      texto: "O curso do CPWS me ajudou muito, especialmente na parte mais técnica, com muitos exercícios e professores atenciosos. Recomendo muito!",
      ano: "2023.2"
    },
    {
      nome: "Letícia Andrade",
      foto: "aprovado-06.jpg",
      texto: "Eu escolhi o CPWS porque queria um curso realmente especializado na Petrobras — e valeu cada segundo! Fui aprovada e recomendo de olhos fechados!",
      ano: "2023.2"
    }
  ];

  return (
    <div className="min-h-screen bg-[#27512D] text-white">
      
      {/* TOP BAR com degradê dourado */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-14 md:h-16 bg-gradient-to-r from-[#E7BB38] via-[#F4D06F] to-[#E7BB38] shadow-lg">
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <div className="flex items-center gap-2 md:gap-4">
            <span className="text-xs md:text-sm font-bold text-[#27512D]">
              Retrospectiva Petrobras 2025 • Lives em Dezembro
            </span>
          </div>
          <Button 
            onClick={scrollToForm}
            size="sm"
            className="bg-[#27512D] hover:bg-[#1a3320] text-white font-bold text-xs md:text-sm px-3 md:px-6 py-2 md:py-3"
          >
            INSCREVER-SE
          </Button>
        </div>
      </div>

      {/* BARRA FLUTUANTE INFERIOR */}
      {showActionBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#E7BB38] to-[#F4D06F] p-3 md:p-4 z-50 shadow-2xl">
          <div className="container mx-auto flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="w-full sm:w-auto bg-[#6EA773] hover:bg-[#27512D] text-white font-bold text-sm md:text-base px-4 md:px-8 py-3 md:py-6 shadow-xl"
            >
              <Target className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Garantir Inscrição
            </Button>
            <Button 
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent hover:bg-[#27512D] text-[#27512D] hover:text-white font-bold text-sm md:text-base px-4 md:px-8 py-3 md:py-6 border-2 border-[#27512D] shadow-xl"
            >
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Tirar Dúvidas
            </Button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-20 px-4 pt-20 md:pt-24">
        {/* Background com overlay verde */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(fundo-refinaria.jpeg)',
            opacity: 0.3
          }}
        />
        
        {/* Overlay gradient verde */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#27512D]/90 via-[#27512D]/95 to-[#27512D]" />
        
        {/* Bokeh dourado sutil */}
        <div className="bokeh-overlay" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col items-center gap-8 text-center">
            
            {/* Vídeo do YouTube */}
            <div className="mb-6 md:mb-8 w-full max-w-3xl mx-auto">
              <div className="relative w-full rounded-lg overflow-hidden shadow-2xl border-4 border-[#E7BB38]" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/rjRHeIye6kA?si=UEz75KnzZJmnCggM" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>

            {/* Título com palavra-chave em dourado */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
              Retrospectiva Petrobras 2025: <span className="text-[#E7BB38]">12 sinais</span> de que o próximo edital é questão de tempo
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl">
              Participe das lives exclusivas em dezembro e entenda o cenário completo para 2026
            </p>

            {/* Chips com datas */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-transparent border-2 border-[#E7BB38] text-[#E7BB38] px-4 py-2 text-sm md:text-base font-bold">
                <Calendar className="mr-2 h-4 w-4" />
                📅 10–11/12
              </Badge>
              <Badge className="bg-transparent border-2 border-[#E7BB38] text-[#E7BB38] px-4 py-2 text-sm md:text-base font-bold">
                <Calendar className="mr-2 h-4 w-4" />
                📅 18–19/12
              </Badge>
              <Badge className="bg-transparent border-2 border-[#E7BB38] text-[#E7BB38] px-4 py-2 text-sm md:text-base font-bold">
                <Video className="mr-2 h-4 w-4" />
                🎥 Ao vivo + plantões
              </Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-[#6EA773] hover:bg-[#7AA867] text-white font-black text-lg md:text-xl px-10 md:px-14 py-7 md:py-9 shadow-2xl hover:shadow-[0_0_30px_rgba(110,167,115,0.6)] transform hover:scale-105 transition-all duration-300 border-2 border-[#E7BB38] rounded-xl"
              >
                <Target className="mr-2 h-6 w-6" />
                INSCREVA-SE AGORA
              </Button>
              <Button 
                onClick={openWhatsApp}
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-[#E7BB38]/20 text-[#E7BB38] font-bold text-lg md:text-xl px-10 md:px-14 py-7 md:py-9 border-2 border-[#E7BB38] shadow-xl rounded-xl"
              >
                <Phone className="mr-2 h-6 w-6" />
                Tirar Dúvidas
              </Button>
            </div>

            <p className="text-sm md:text-base text-[#E7BB38] font-semibold">
              ✨ Vagas Limitadas - Garanta a Sua!
            </p>
          </div>
        </div>
      </section>

      {/* AGENDA SECTION */}
      <section className="py-16 md:py-24 px-4 bg-[#1a3320] relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Agenda de <span className="text-[#E7BB38]">Dezembro</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Participe das lives e plantões exclusivos sobre o cenário Petrobras 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agenda.map((item, index) => (
              <Card 
                key={index}
                className="bg-[#27512D] border-2 border-[#E7BB38]/30 hover:border-[#E7BB38] transition-all duration-300 hover:shadow-[0_0_20px_rgba(231,187,56,0.3)]"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Badge tipo */}
                    <div className="flex items-center justify-between">
                      <Badge className={`${
                        item.tipo === 'LIVE' 
                          ? 'bg-[#E7BB38] text-[#27512D]' 
                          : 'bg-[#6EA773] text-white'
                      } font-bold px-3 py-1`}>
                        {item.tipo}
                      </Badge>
                      {item.aoVivo && (
                        <span className="text-xs font-bold text-[#DB4514] bg-[#DB4514]/20 px-2 py-1 rounded">
                          AO VIVO
                        </span>
                      )}
                    </div>

                    {/* Data e horário */}
                    <div className="flex items-center gap-2 text-[#E7BB38]">
                      <Calendar className="h-5 w-5" />
                      <span className="font-bold text-xl">{item.data}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span className="font-semibold">{item.horario}</span>
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-bold text-white">
                      {item.titulo}
                    </h3>

                    {/* Descrição */}
                    <p className="text-sm text-white/70">
                      {item.descricao}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS SECTION */}
      <section className="py-16 md:py-24 px-4 bg-[#27512D] relative">
        <div className="bokeh-overlay opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Por que <span className="text-[#E7BB38]">participar?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((item, index) => {
              const IconComponent = item.icone;
              return (
                <Card 
                  key={index}
                  className="bg-[#1a3320] border-2 border-[#E7BB38]/20 hover:border-[#E7BB38] transition-all duration-300 hover:shadow-[0_0_20px_rgba(231,187,56,0.2)]"
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E7BB38] to-[#6EA773] flex items-center justify-center">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#E7BB38] mb-4">
                      {item.titulo}
                    </h3>
                    <p className="text-white/80">
                      {item.descricao}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS SECTION */}
      <section className="py-16 md:py-24 px-4 bg-[#1a3320]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Quem confia no <span className="text-[#E7BB38]">CPWS</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80">
              Aprovados que transformaram suas carreiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((depoimento, index) => (
              <Card 
                key={index}
                className="bg-[#27512D] border border-[#E7BB38]/30 hover:shadow-[0_0_15px_rgba(231,187,56,0.2)] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={depoimento.foto} 
                      alt={depoimento.nome}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#E7BB38]"
                    />
                    <div>
                      <h4 className="font-bold text-white">{depoimento.nome}</h4>
                      <p className="text-sm text-[#E7BB38]">Aprovado {depoimento.ano}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-[#E7BB38]/30 mb-2" />
                  <p className="text-white/80 text-sm italic">
                    "{depoimento.texto}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO SECTION */}
      {showWizard && (
        <section id="formulario" className="py-16 md:py-24 px-4 bg-[#27512D]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-[#E7BB38] rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Garanta sua <span className="text-[#E7BB38]">inscrição</span>
                </h2>
                <p className="text-white/80">
                  Preencha os dados abaixo para receber todos os detalhes
                </p>
              </div>
              <LeadCaptureFormWizard />
              <p className="text-center text-sm text-white/60 mt-6">
                Após se inscrever, você será direcionado(a) ao grupo da campanha.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="py-16 md:py-24 px-4 bg-[#1a3320] relative overflow-hidden">
        <div className="bokeh-overlay opacity-30" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Não perca essa <span className="text-[#E7BB38]">oportunidade</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Garanta sua inscrição e receba os lembretes no WhatsApp.
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-[#6EA773] hover:bg-[#7AA867] text-white font-black text-xl px-14 py-9 shadow-2xl hover:shadow-[0_0_30px_rgba(110,167,115,0.6)] transform hover:scale-105 transition-all duration-300 border-2 border-[#E7BB38] rounded-xl"
          >
            <Target className="mr-2 h-6 w-6" />
            INSCREVER-SE AGORA
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 bg-[#27512D] border-t border-[#E7BB38]/30">
        <div className="container mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2025 CPWS - Cursos Preparatórios Wellington Silva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
