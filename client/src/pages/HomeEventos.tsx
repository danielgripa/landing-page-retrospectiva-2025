import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target,
  Phone,
  CheckCircle,
  Zap,
  Award,
  Users,
  Quote,
  Calendar
} from "lucide-react";
import { useEffect, useState } from "react";
import LeadCaptureFormWizard from "@/components/LeadCaptureFormWizard";

export default function HomeEventos() {
  const [showWizard, setShowWizard] = useState(false);
  const [showActionBar, setShowActionBar] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Data alvo: 27 de novembro de 2025 às 19h30 (horário de Brasília - GMT-3)
      const targetDate = new Date('2025-11-27T19:30:00-03:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Calcular imediatamente
    const timer = setInterval(calculateTimeLeft, 1000); // Atualizar a cada segundo

    return () => clearInterval(timer);
  }, []);

  // Controlar visibilidade da barra de ações
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / pageHeight) * 100;
      
      // Mostrar barra apenas se:
      // 1. Wizard não está aberto OU
      // 2. Usuário rolou acima de 50% da página
      if (!showWizard && scrollPercentage > 70 ) {
        setShowActionBar(true);
      } else {
        setShowActionBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar posição inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showWizard]);

  const scrollToForm = () => {
    setShowWizard(true);
    setShowActionBar(false); // Ocultar barra imediatamente ao abrir wizard
    setTimeout(() => {
      document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Venho da página do evento do dia 27 e gostaria de tirar algumas dúvidas.');
    window.open(`https://wa.me/5521979600647?text=${message}`, '_blank');
  };

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
    <div className="min-h-screen bg-black text-white">
      
      {/* TOP BAR com animação no background */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-14 md:h-16 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-b-2 border-[#FFD700] shadow-[0_2px_10px_rgba(255,215,0,0.3)]">
        <div
          className="w-full h-full bg-center bg-cover animate-bg-pan"
          style={{
            backgroundImage: "url('faixadia27.png')",
            backgroundSize: "180% auto",
            backgroundRepeat: "repeat-x"
          }}
        />
      </div>

      {/* BARRA FLUTUANTE INFERIOR */}
      {showActionBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#F39200] to-[#FFD700] p-3 md:p-4 z-50 shadow-2xl transition-all duration-300">
        <div className="container mx-auto flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-sm md:text-base px-4 md:px-8 py-3 md:py-6 shadow-xl"
          >
            <Target className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Garantir Minha Vaga
          </Button>
          <Button 
            onClick={openWhatsApp}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-bold text-sm md:text-base px-4 md:px-8 py-3 md:py-6 border-2 border-white shadow-xl"
          >
            <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Tirar Dúvidas
          </Button>
        </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-20 px-4 pt-20 md:pt-24">
        {/* Background com imagem da refinaria */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(fundo-refinaria.jpeg)',
            opacity: 0.5
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col items-center gap-8 text-center">
            
            {/* Vídeo do YouTube */}
            <div className="mb-6 md:mb-8 w-full max-w-3xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  src="https://www.youtube.com/embed/rjRHeIye6kA?si=UEz75KnzZJmnCggM" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>

            {/* CTA após vídeo */}
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-lg md:text-xl px-10 md:px-14 py-7 md:py-9 shadow-2xl hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transform hover:scale-110 transition-all duration-300 border-2 border-green-400 hover:border-green-300 rounded-xl"
            >
              <Target className="mr-2 h-6 w-6" />
              INSCREVA-SE AGORA
            </Button>
            <p className="text-sm md:text-base text-green-400 font-semibold">
              🔥 Vagas Limitadas - Garanta a Sua!
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge className="bg-[#F39200] text-white px-3 py-1 text-xs md:text-sm">
                <Calendar className="mr-1 h-4 w-4" />
                Evento: 27 de Novembro
              </Badge>
              <Badge className="bg-[#FFD700] text-black px-3 py-1 text-xs md:text-sm font-bold">
                ✅ Especialistas Petrobras/Transpetro
              </Badge>
            </div>

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 max-w-4xl">
              Eventos Exclusivos de Black Friday
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl">
              Participe do <span className="text-[#FFD700] font-bold">evento ao vivo</span> no dia <span className="text-[#F39200] font-bold text-2xl md:text-3xl">27 de novembro</span>
              <br />
              <span className="text-base md:text-lg text-gray-400 mt-2 block">
                Oportunidade única com condições especiais
              </span>
            </p>

            {/* Contador Regressivo */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 md:p-6 rounded-xl shadow-2xl max-w-2xl w-full">
              <p className="text-xs md:text-sm text-white/90 mb-2 md:mb-3 font-semibold">⏰ EVENTOS COMEÇAM EM:</p>
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {[
                  { label: 'Dias', value: timeLeft.days },
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Seg', value: timeLeft.seconds }
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-black/50 rounded-lg p-2 md:p-3 mb-1">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFD700]">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs md:text-sm text-white/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Principal */}
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 shadow-2xl transform hover:scale-105 transition-all"
            >
              <Target className="mr-2 h-6 w-6" />
              INSCREVA-SE AGORA
            </Button>

            <p className="text-sm text-gray-400">
              🔥 Vagas Limitadas - Inscrições Abertas
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO: POR QUE PARTICIPAR */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Por que participar dos <span className="text-[#FFD700]">eventos?</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Oportunidade única de garantir condições especiais de Black Friday
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#F39200] hover:border-[#FFD700] transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-[#F39200] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Acesso Exclusivo</h3>
                <p className="text-gray-300">
                  Evento exclusivo no dia 27 de novembro com conteúdo estratégico para sua aprovação na Petrobras e Transpetro
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#F39200] hover:border-[#FFD700] transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Oportunidade Única</h3>
                <p className="text-gray-300">
                  Condições especiais de Black Friday que não se repetirão. Aproveite o melhor momento para investir no seu futuro
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#F39200] hover:border-[#FFD700] transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-[#F39200] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Especialistas Petrobras</h3>
                <p className="text-gray-300">
                  Aprenda com quem realmente conhece o concurso por dentro. Professores aprovados e experientes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO: FORMULÁRIO DE CAPTURA */}
      {showWizard && (
        <section id="formulario" className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Garanta sua <span className="text-[#FFD700]">vaga agora</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Preencha o formulário abaixo para se inscrever no evento do dia 27 de novembro
              </p>
            </div>

            <LeadCaptureFormWizard />
          </div>
        </section>
      )}

      {/* SEÇÃO: DEPOIMENTOS */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Quem já <span className="text-[#FFD700]">conquistou</span> a aprovação
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Veja o que nossos alunos aprovados têm a dizer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-[#F39200]/30 hover:border-[#FFD700] transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={depoimento.foto} 
                      alt={depoimento.nome}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#FFD700]"
                    />
                    <div>
                      <h4 className="font-bold text-white">{depoimento.nome}</h4>
                      <p className="text-sm text-[#FFD700]">Aprovado {depoimento.ano}</p>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-[#F39200] mb-2" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {depoimento.texto}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto text-center">
          {/* Logo da Campanha */}
          <div className="mb-8 md:mb-10">
            <img 
              src="petroblackfriday.png" 
              alt="Petro Black Friday"
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto"
            />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Não perca essa <span className="text-[#FFD700]">oportunidade!</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Garanta sua vaga no evento do dia <span className="text-[#F39200] font-bold">27 de novembro</span>
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 shadow-2xl transform hover:scale-105 transition-all"
          >
            <Target className="mr-2 h-6 w-6" />
            INSCREVER-SE AGORA
          </Button>
        </div>
      </section>

      {/* Espaçamento para barra flutuante */}
      <div className="h-20 md:h-24"></div>
    </div>
  );
}
