import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  CheckCircle, 
  Users, 
  BookOpen, 
  Video, 
  Award, 
  Shield, 
  MessageCircle, 
  TrendingUp, 
  Target,
  Briefcase,
  Heart,
  DollarSign,
  ChevronDown,
  Play,
  Download,
  Zap,
  FileText,
  Headphones,
  GraduationCap,
  Rocket,
  Timer,
  ClipboardList,
  Dumbbell,
  HelpCircle,
  Phone,
  Star,
  Quote
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 15,
    minutes: 30,
    seconds: 45
  });

  const [vagasRestantes, setVagasRestantes] = useState(156);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [enfasesOpen, setEnfasesOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Venho da página PetroBlack Friday Infinita e gostaria de tirar algumas dúvidas.');
    window.open(`https://wa.me/5521979600647?text=${message}`, '_blank');
  };

  const enfasesMedio = [
    "Inspeção de Equipamentos e Instalações",
    "Logística de Transportes",
    "Manutenção - Caldeiraria",
    "Manutenção - Elétrica",
    "Manutenção - Instrumentação",
    "Manutenção - Mecânica",
    "Técnico de Operação (Petrobras) e Dutos/Terminais (Transpetro)",
    "Operação de Lastro",
    "PCM - Elétrica",
    "PCM - Instrumentação",
    "PCM - Mecânica",
    "Química de Petróleo",
    "Segurança do Trabalho",
    "Suprimento de Bens e Serviços - Administração"
  ];

  const enfasesSuperior = [
    "Administração",
    "Análise - Comércio e Suprimento",
    "Engenharia Civil",
    "Engenharia de Equipamentos - Elétrica",
    "Engenharia de Equipamentos - Inspeção",
    "Engenharia de Equipamentos - Mecânica",
    "Engenharia de Equipamentos - Terminais e Dutos",
    "Engenharia de Petróleo",
    "Engenharia de Processamento",
    "Geofísica",
    "Geologia",
    "Química de Petróleo"
  ];

  const depoimentos = [
    {
      nome: "Danilo Costa",
      foto: "aprovado-01.jpg",
      texto: "Sem dúvidas, o melhor investimento que já fiz na vida! Conquistei a aprovação na Transpetro e, de quebra, também na Petrobras 2023.2. Sou muito grato! O curso é excelente, o material é completo, e os professores são extremamente dedicados — em especial você, Well. Vamos juntos rumo ao W!",
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
    },
    {
      nome: "Luís Gustavo Curty",
      foto: "aprovado-07.jpg",
      texto: "Fiz o CPWS e fui aprovado no concurso da Petrobras! Valeu demais, CPWS!",
      ano: "2023.2"
    },
    {
      nome: "Guilherme Araújo Alves",
      foto: "aprovado-08.jpg",
      texto: "Fiz o CPWS e fui aprovado no concurso da Petrobras! Valeu demais, CPWS! Gratidão por todo o suporte!",
      ano: "2023.2"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* TOP BAR com animação no background (sem mudar tamanho) */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-14 md:h-16 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-b-2 border-[#FFD700] shadow-[0_2px_10px_rgba(255,215,0,0.3)]">
        <div
          className="w-full h-full bg-center bg-cover animate-bg-pan"
          style={{
            backgroundImage: "url('faixalandpage.png')",
            backgroundSize: "180% auto",   // “estoque” para deslizar
            backgroundRepeat: "repeat-x"   // evita cortes no loop
          }}
        />
      </div>

      {/* BARRA FLUTUANTE INFERIOR */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#F39200] to-[#FFD700] p-3 md:p-4 z-50 shadow-2xl">
        <div className="container mx-auto flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
          <Button 
            onClick={scrollToOffer}
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
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Texto Principal */}
            <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
              
              {/* Logo da Campanha */}
              <div className="flex justify-center lg:justify-start mb-4 md:mb-6">
                <img 
                  src="petroblackfriday.png" 
                  alt="Petro Black Friday Vitalício"
                  className="h-32 md:h-40 lg:h-48 w-auto"
                />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge className="bg-[#F39200] text-white px-3 py-1 text-xs md:text-sm">
                  ✅ Especialistas Petrobras/Transpetro
                </Badge>
                <Badge className="bg-[#FFD700] text-black px-3 py-1 text-xs md:text-sm font-bold">
                  💳 Boleto Parcelado Liberado
                </Badge>
              </div>

              {/* Título */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
                Torne-se Petroleiro até 2029
              </h1>

              {/* Subtítulo */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Somos especialistas em <span className="text-[#FFD700] font-bold">Petrobras e Transpetro</span>.
                <br />
                Oferta Vitalícia com <span className="text-[#F39200] font-bold text-xl md:text-2xl">50% OFF</span>
                <br />
                <span className="text-sm md:text-base text-gray-400">(200 vagas disponíveis)</span>
              </p>

              {/* Contador Regressivo */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 md:p-6 rounded-xl shadow-2xl">
                <p className="text-xs md:text-sm text-white/90 mb-2 md:mb-3 font-semibold">⏰ OFERTA ENCERRA EM:</p>
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

              {/* Termômetro de Vagas */}
              <div className="bg-gray-900/80 p-4 md:p-5 rounded-xl border border-[#F39200]/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs md:text-sm text-gray-300">🔥 Vagas Restantes</span>
                  <span className="text-base md:text-lg font-bold text-[#F39200]">{vagasRestantes}/200</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 md:h-4">
                  <div 
                    className="bg-gradient-to-r from-[#F39200] to-[#FFD700] h-3 md:h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(vagasRestantes / 200) * 100}%` }}
                  />
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                <Button 
                  onClick={scrollToOffer}
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#F39200] to-[#FFD700] hover:from-[#FFD700] hover:to-[#F39200] text-black font-black text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 shadow-2xl transform hover:scale-105 transition-all"
                >
                  🔥 Garantir Vaga 50%
                </Button>
                <Button 
                  onClick={openWhatsApp}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6"
                >
                  💬 WhatsApp
                </Button>
              </div>
            </div>

            {/* Imagem Wellington + Vídeo Placeholder */}
            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <div className="relative">
                {/* Placeholder para VSL (Vídeo de Vendas) */}
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F39200]">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center p-6 md:p-8">
                      <Play className="h-16 w-16 md:h-20 md:w-20 text-[#F39200] mx-auto mb-4" />
                      <p className="text-sm md:text-base text-gray-400 font-semibold">
                        📹 VÍDEO VSL HERO
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 mt-2">
                        (Adicionar vídeo do designer)
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Imagem Wellington sobreposta (opcional) */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#FFD700] overflow-hidden shadow-xl hidden sm:block">
                  <img 
                    src="wellington-hero.jpg" 
                    alt="Wellington - Fundador CPWS"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: AS NOTÍCIAS NÃO MENTEM */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12">
            As Notícias <span className="text-[#FFD700]">Não Mentem...</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { img: "noticia-01.png", alt: "Edital Petrobras Iminente" },
              { img: "noticia-02.png", alt: "Banca Cesgranrio Confirmada" },
              { img: "noticia-03.png", alt: "Investimentos Bilionários" }
            ].map((noticia, idx) => (
              <Card key={idx} className="bg-gray-800 border-[#F39200]/30 hover:border-[#F39200] transition-all overflow-hidden">
                <div className="w-full h-48 md:h-64 bg-gray-900 flex items-center justify-center">
                  <img 
                    src={noticia.img} 
                    alt={noticia.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#F39200] to-[#FFD700] p-6 md:p-8 rounded-2xl text-black text-center">
            <p className="text-base md:text-lg font-bold mb-4">
              📰 Fontes verificadas: G1, InfoMoney, Valor Econômico
            </p>
            <p className="text-xs md:text-sm opacity-80">
              *Concurso público ≠ promessa de emprego. Este é um preparatório especializado.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO: POR QUE AGORA (2025-2029) */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 md:mb-6">
            Por Que <span className="text-[#F39200]">Investir Agora?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            A janela de oportunidade <span className="text-[#FFD700] font-bold">2025-2029</span> é histórica
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: DollarSign,
                numero: "R$ 102 Bilhões",
                titulo: "Investimentos Confirmados",
                desc: "Plano estratégico 2025-2029 prevê expansão massiva"
              },
              {
                icon: Users,
                numero: "Milhares de Vagas",
                titulo: "Contratações Previstas",
                desc: "Reposição + expansão = oportunidade única"
              },
              {
                icon: Award,
                numero: "Cesgranrio até 2028",
                titulo: "Banca Confirmada",
                desc: "Padrão conhecido, conteúdo previsível"
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border-[#F39200]/30 p-6 md:p-8 hover:border-[#F39200] transition-all">
                <CardContent className="p-0 text-center">
                  <div className="bg-[#F39200]/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <item.icon className="h-8 w-8 md:h-10 md:w-10 text-[#F39200]" />
                  </div>
                  <p className="text-2xl md:text-3xl font-black text-[#FFD700] mb-2 md:mb-3">{item.numero}</p>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.titulo}</h3>
                  <p className="text-sm md:text-base text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: NÃO TEM CURSO TÉCNICO? */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-[#F39200]/20 to-[#FFD700]/20 border-2 border-[#F39200] p-6 md:p-10">
            <CardContent className="p-0">
              <div className="text-center mb-6 md:mb-8">
                <HelpCircle className="h-12 w-12 md:h-16 md:w-16 text-[#FFD700] mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
                  Não Fiz Curso Técnico.
                  <br />
                  <span className="text-[#F39200]">Posso Fazer o Concurso?</span>
                </h2>
              </div>

              <div className="bg-green-600 text-white p-6 md:p-8 rounded-xl mb-6 md:mb-8 text-center">
                <p className="text-3xl md:text-5xl font-black mb-2">SIM!</p>
                <p className="text-base md:text-xl">O curso técnico só é exigido na <span className="font-bold">POSSE</span>, não na <span className="font-bold">PROVA</span></p>
              </div>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-[#FFD700] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-base md:text-lg font-bold mb-1 md:mb-2">Você tem MESES (ou até ANOS) entre aprovação e posse</p>
                    <p className="text-sm md:text-base text-gray-300">Tempo suficiente para fazer o curso técnico necessário</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-[#FFD700] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-base md:text-lg font-bold mb-1 md:mb-2">Muitos dos nossos 549 aprovados fizeram técnico DEPOIS</p>
                    <p className="text-sm md:text-base text-gray-300">Estratégia comprovada e validada</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm md:text-base text-gray-300 mb-4">
                  Temos parceiros que podem te ajudar com o curso técnico
                </p>
                <Button 
                  onClick={openWhatsApp}
                  size="lg"
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5"
                >
                  📞 Falar com Consultor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO: O QUE É O VITALÍCIO */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 md:mb-6">
            O Que É o <span className="text-[#FFD700]">Vitalício?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            1 checkout. Até 4 cursos. Acesso para sempre.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Card Explicativo */}
            <Card className="bg-gradient-to-br from-[#F39200]/20 to-[#FFD700]/20 border-2 border-[#F39200] p-6 md:p-8">
              <CardContent className="p-0 space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-[#F39200] text-black font-black text-lg md:text-xl w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Escolha até 4 cursos</h3>
                    <p className="text-sm md:text-base text-gray-300">Entre 26 ênfases disponíveis (nível médio e superior, exceto enfermagem)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-[#F39200] text-black font-black text-lg md:text-xl w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Troque QUANDO QUISER</h3>
                    <p className="text-sm md:text-base text-gray-300">Mudou de ideia? Quer focar em outra ênfase? Sem problema! Troca ilimitada e vitalícia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-[#F39200] text-black font-black text-lg md:text-xl w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Acesso VITALÍCIO</h3>
                    <p className="text-sm md:text-base text-gray-300">Não é "até 2029". É para SEMPRE. Estude no seu ritmo, sem pressa, sem renovação</p>
                  </div>
                </div>

                <div className="bg-[#FFD700]/20 p-4 md:p-6 rounded-xl border border-[#FFD700]/50">
                  <p className="text-sm md:text-base text-center">
                    <span className="font-bold text-[#FFD700]">Meta com data. Acesso sem data.</span><br></br>Nosso plano mira as oportunidades até 2029, mas seu acesso é <strong>vitalício</strong>.
                    <br />
                    <span className="text-xs md:text-sm text-gray-400">Você continua com a CPWS depois disso também.</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Accordion com 26 Ênfases */}
            <Card className="bg-gray-900 border-2 border-[#FFD700]">
              <CardContent className="p-4 md:p-6">
              {/* Botão Ver Ênfases (apenas mobile) */}
              <div className="mt-0">
                <button
                  onClick={() => setEnfasesOpen(!enfasesOpen)}
                  className="md:hidden w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#F39200] to-[#FFD700] rounded-xl text-black font-bold text-base mb-4 hover:opacity-90 transition-all"
                >
                  <span>📚 Ver Todas as 26 Ênfases Disponíveis</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${ enfasesOpen ? 'rotate-180' : '' }`} />
                </button>

                {/* Desktop: sempre aberto | Mobile: accordion */}
                <div className={`${ enfasesOpen ? 'block' : 'hidden' } md:block`}>
                 <div className="space-y-4 md:space-y-6">
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-[#F39200] mb-3 md:mb-4">📘 Nível Médio (14 ênfases)</h4>
                      <ul className="space-y-2">
                        {enfasesMedio.map((enfase, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-gray-300">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                            <span>{enfase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-bold text-[#FFD700] mb-3 md:mb-4">🎓 Nível Superior (12 ênfases)</h4>
                      <ul className="space-y-2">
                        {enfasesSuperior.map((enfase, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-gray-300">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                            <span>{enfase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabela Comparativa */}
          <div className="bg-gray-900 rounded-2xl overflow-visible border-2 border-[#F39200] pt-8 md:pt-10">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Plano Anual */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <h3 className="text-lg md:text-xl font-bold text-center">Plano Anual</h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-xs md:text-sm text-gray-400">Cursos</span>
                      <span className="text-sm md:text-base font-bold">1 curso</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-xs md:text-sm text-gray-400">Troca</span>
                      <span className="text-sm md:text-base">❌ Não</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-xs md:text-sm text-gray-400">Acesso</span>
                      <span className="text-sm md:text-base">1 ano</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-xs md:text-sm text-gray-400">Renovação</span>
                      <span className="text-sm md:text-base">R$ 2000/ano</span>
                    </div>
                    <div className="bg-red-900/30 p-3 rounded-lg mt-4">
                      <p className="text-xs text-gray-400 text-center mb-1">Custo até 2029 (5 anos)</p>
                      <p className="text-xl md:text-2xl font-black text-red-400 text-center">R$ 10.000</p>
                    </div>
                  </CardContent>
                </Card>
                                {/* Plano Vitalício — MELHOR ESCOLHA */}
                <Card className="bg-gradient-to-br from-[#F39200]/20 to-[#FFD700]/20 border-[#FFD700] border-2 relative overflow-visible">
                  {/* Badge saltado pra fora com POP + GLOW */}
                  <div className="absolute -top-7 md:-top-8 left-1/2 -translate-x-1/2 z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[-60%] z-20">
                      <Badge variant="goldPop" className="px-3 py-1 text-xs md:text-sm -rotate-2 animate-pulse-glow">
                        🏆 MELHOR ESCOLHA
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3 pt-10 md:pt-8">
                    <h3 className="text-lg md:text-xl font-bold text-center text-[#FFD700]">Vitalício</h3>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[#FFD700]/30">
                      <span className="text-xs md:text-sm text-gray-400">Cursos</span>
                      <span className="text-sm md:text-base font-bold text-[#FFD700]">Até 4 cursos</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#FFD700]/30">
                      <span className="text-xs md:text-sm text-gray-400">Troca</span>
                      <span className="text-sm md:text-base font-bold text-[#FFD700]">✅ Ajustes quando precisar</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#FFD700]/30">
                      <span className="text-xs md:text-sm text-gray-400">Acesso</span>
                      <span className="text-sm md:text-base font-bold text-[#FFD700]">VITALÍCIO</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#FFD700]/30">
                      <span className="text-xs md:text-sm text-gray-400">Renovação</span>
                      <span className="text-sm md:text-base font-bold text-[#FFD700]">R$ 0 (único)</span>
                    </div>

                    {/* Investimento TOTAL — preço cheio riscado + preço atual */}
                    <div className="bg-green-900/30 p-3 rounded-lg mt-4">
                      <p className="text-xs text-gray-400 text-center mb-1">Investimento TOTAL</p>
                      <div className="text-center">
                        <p className="text-base md:text-lg text-gray-400 line-through leading-tight">
                          R$ 5.987,00
                        </p>
                        <p className="text-2xl md:text-3xl font-black text-green-400 leading-tight">
                          R$ 2.993,50
                        </p>
                      </div>
                      <p className="text-xs text-green-400 text-center mt-2">
                        Economia de R$ 2.993,50
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: +549 APROVADOS (DEPOIMENTOS) */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="bg-[#F39200] text-white px-4 py-2 text-base md:text-lg mb-4">
              🏆 PROVA SOCIAL
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="text-[#FFD700]">+549 Aprovados</span> em 2023
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
              Veja o que dizem quem já conquistou a vaga na Petrobras com a CPWS
            </p>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {depoimentos.map((depoimento, idx) => (
              <Card key={idx} className="bg-gray-900 border-[#F39200]/30 hover:border-[#F39200] transition-all overflow-hidden group">
                <CardContent className="p-0">
                  {/* Foto */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gray-800">
                    <img 
                      src={depoimento.foto} 
                      alt={depoimento.nome}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-600 text-white text-xs">
                        ✅ Aprovado {depoimento.ano}
                      </Badge>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Quote className="h-5 w-5 md:h-6 md:w-6 text-[#F39200]" />
                      <h3 className="font-bold text-base md:text-lg">{depoimento.nome}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-4">
                      {depoimento.texto}
                    </p>
                    <div className="flex gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Placeholder para Vídeos de Depoimentos */}
          {/* SEÇÃO: VÍDEO-DEPOIMENTOS */}
          <div className="mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
              📹 Vídeos de Depoimentos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                "https://www.youtube.com/embed/87HsM0O0O1o?si=B2iAfN8ePAcrIW8V",
                "https://www.youtube.com/embed/7JhlT8SDTE8?si=pME34XrGnw3m5QqT",
                "https://www.youtube.com/embed/r3z3a9DQkEs?si=3TuJ_4XJ0AeDb4Dn"
              ].map((url, idx) => (
                <Card
                  key={idx}
                  className="bg-gray-900 border-[#F39200]/30 overflow-hidden shadow-lg hover:shadow-[#F39200]/30 transition-shadow duration-300"
                >
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={url}
                      title={`Depoimento ${idx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Card>
              ))}
            </div>
          </div>


          {/* Selos de Credibilidade */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: BookOpen, text: "Banco +10k Questões" },
              { icon: Video, text: "Aulas Gravadas" },
              { icon: Users, text: "Mentorias Ao Vivo" },
              { icon: Award, text: "Simulados Cesgranrio" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-[#F39200]/30 rounded-xl p-4 md:p-6 text-center">
                <item.icon className="h-8 w-8 md:h-10 md:w-10 text-[#F39200] mx-auto mb-2 md:mb-3" />
                <p className="text-xs md:text-sm font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: ESTE CURSO É PARA VOCÊ QUE... */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12">
            Este Curso É Para <span className="text-[#F39200]">Você Que...</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: GraduationCap,
                titulo: "Está 'Enferrujado'",
                desc: "Formou há muito tempo e precisa revisar conteúdos básicos"
              },
              {
                icon: Rocket,
                titulo: "Está Começando do Zero",
                desc: "Nunca estudou para concurso e quer um método comprovado"
              },
              {
                icon: Timer,
                titulo: "Tem Pouco Tempo",
                desc: "Trabalha, tem família e precisa de um plano de estudos eficiente"
              },
              {
                icon: ClipboardList,
                titulo: "Não Sabe Montar Cronograma",
                desc: "Quer uma trilha pronta e organizada por especialistas"
              },
              {
                icon: Dumbbell,
                titulo: "Já Estuda Sozinho",
                desc: "Mas quer simulados, questões e mentorias para acelerar"
              }
            ].map((perfil, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border-[#F39200]/30 p-6 md:p-8 hover:border-[#F39200] hover:scale-105 transition-all">
                <CardContent className="p-0 text-center">
                  <div className="bg-[#F39200]/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <perfil.icon className="h-8 w-8 md:h-10 md:w-10 text-[#F39200]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{perfil.titulo}</h3>
                  <p className="text-sm md:text-base text-gray-400">{perfil.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: COMO FUNCIONA */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black" id="como-funciona">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12">
            Como <span className="text-[#FFD700]">Funciona?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                numero: "1",
                titulo: "Ativação do Acesso",
                desc: "Pagamento aprovado, acesso liberado na hora. Entre na plataforma e escolha seus cursos."
              },
              {
                numero: "2",
                titulo: "Escolha até 4 Cursos",
                desc: "Escolha até 2 de nível técnico e 2 de nível superior. Mude quando quiser, quantas vezes quiser."
              },
              {
                numero: "3",
                titulo: "Comece a Estudar",
                desc: "Aulas, simulados, questões, mentorias. Tudo organizado."
              },
              {
                numero: "4",
                titulo: "Suporte Contínuo",
                desc: "Dúvidas? Fale com nosso time. Quer trocar de curso? Faça quando quiser."
              }
            ].map((passo, idx) => (
              <Card key={idx} className="bg-gray-900 border-[#F39200]/30 p-6 md:p-8 hover:border-[#F39200] transition-all">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-[#F39200] to-[#FFD700] text-black font-black text-2xl md:text-3xl w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    {passo.numero}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{passo.titulo}</h3>
                  <p className="text-sm md:text-base text-gray-400">{passo.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm md:text-base text-gray-400 mb-4">
              📞 Precisa de ajuda? Fale com nosso suporte
            </p>
            <Button 
              onClick={openWhatsApp}
              variant="outline"
              className="border-2 border-[#F39200] text-[#F39200] hover:bg-[#F39200] hover:text-black"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO: O QUE VOCÊ RECEBE */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12">
            O Que Você <span className="text-[#FFD700]">Recebe</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: BookOpen,
                titulo: "Trilhas de Estudo Completas",
                desc: "Por cargo e ênfase, com cronograma sugerido até 2029"
              },
              {
                icon: Users,
                titulo: "Mentorias Recorrentes",
                desc: "Encontros ao vivo com aprovados e professores especialistas"
              },
              {
                icon: FileText,
                titulo: "Simulados e Revisões",
                desc: "Simulados pós-edital e revisões intensivas pré-prova"
              },
              {
                icon: MessageCircle,
                titulo: "Comunidade e Suporte",
                desc: "Canal exclusivo + SLA de resposta garantido"
              },
              {
                icon: Zap,
                titulo: "Atualizações de Conteúdo",
                desc: "Novos editais? Mudanças? Você recebe tudo atualizado automaticamente"
              },
              {
                icon: Award,
                titulo: "Certificado de Conclusão",
                desc: "Ao finalizar cada módulo, receba seu certificado digital"
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border-[#F39200]/30 p-6 md:p-8 hover:border-[#F39200] transition-all">
                <CardContent className="p-0">
                  <div className="bg-[#F39200]/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <item.icon className="h-8 w-8 md:h-10 md:w-10 text-[#F39200]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.titulo}</h3>
                  <p className="text-sm md:text-base text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: BREAKDOWN DE VALOR (Recibo comparativo) */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 md:mb-6">
            A Maior <span className="text-[#F39200]">Oferta</span> do Ano
          </h2>
          <p className="text-base md:text-xl text-gray-400 text-center mb-8 md:mb-12">
            Compare renovar todo ano com investir uma única vez
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Sem Vitalício */}
            <Card className="bg-gray-900/80 border border-gray-700">
              <CardHeader className="pb-2">
                <h3 className="text-xl md:text-2xl font-extrabold text-center">Sem Vitalício</h3>
                <p className="text-xs md:text-sm text-center text-gray-400">Renovando planos ano a ano</p>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                {[
                  { item: "2 cursos nível médio", valor: "R$ 3.400" },
                  { item: "2 cursos nível superior", valor: "R$ 4.000" },
                  { item: "Pacote de simulados pós edital", valor: "R$ 600" },
                ].map((l, i) => (
                  <div key={i} className="flex justify-between items-center p-3 md:p-4 bg-gray-800/60 rounded-lg">
                    <span className="text-sm md:text-base text-gray-300">• {l.item}</span>
                    <span className="text-base md:text-lg font-bold text-gray-200">{l.valor}</span>
                  </div>
                ))}

                <div className="border-t border-dashed border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base text-gray-300">Subtotal anual</span>
                    <span className="text-lg md:text-xl font-bold text-gray-200">R$ 8.000</span>
                  </div>
                  <div className="mt-2 p-3 md:p-4 bg-red-900/30 rounded-xl">
                    <p className="text-xs md:text-sm text-red-200/90 text-center">
                      Estudando por <strong>5 anos</strong> até 2029:
                    </p>
                    <p className="text-xl md:text-2xl font-black text-red-300 text-center">
                      R$ 8.000 × 5 = <span className="underline decoration-red-400/70">R$ 40.000</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Com Vitalício */}
            <Card className="bg-gradient-to-br from-[#F39200]/15 to-[#FFD700]/15 border-2 border-[#FFD700] relative overflow-visible">
              {/* Selo “melhor escolha” preso ao card (tortinho) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[45%] z-20">
                <Badge variant="goldPop" className="px-3 py-1 text-xs md:text-sm -rotate-2 animate-pulse-glow">
                  🏆 MELHOR ESCOLHA
                </Badge>
              </div>

              <CardHeader className="pb-2 pt-8">
                <h3 className="text-xl md:text-2xl font-extrabold text-center text-[#FFD700]">Com Vitalício</h3>
                <p className="text-xs md:text-sm text-center text-gray-400">Uma compra, estudo contínuo</p>
              </CardHeader>

              <CardContent className="space-y-3 md:space-y-4">
                {[
                  { item: "2 cursos nível médio", status: "INCLUSO" },
                  { item: "2 cursos nível superior", status: "INCLUSO" },
                  { item: "Pacote de simulados Cesgranrio", status: "INCLUSO" },
                ].map((l, i) => (
                  <div key={i} className="flex justify-between items-center p-3 md:p-4 bg-gray-800/40 rounded-lg">
                    <span className="text-sm md:text-base text-gray-300">✅ {l.item}</span>
                    <span className="text-xs md:text-sm font-bold text-green-300">INCLUSO</span>
                  </div>
                ))}

                <div className="border-t border-dashed border-[#FFD700]/40 pt-4">
                  <p className="text-xs md:text-sm text-gray-400 text-center mb-1">Investimento TOTAL</p>
                  <div className="text-center">
                    <p className="text-base md:text-lg text-gray-400 line-through leading-tight">R$ 5.987,00</p>
                    <p className="text-3xl md:text-4xl font-black text-green-400 leading-tight">R$ 2.993,50</p>
                  </div>
                  <p className="text-xs md:text-sm text-green-300 text-center mt-2">
                    Economia imediata versus renovar ano a ano
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nota editorial (transparência) */}
          <p className="text-[11px] md:text-xs text-gray-500 text-center mt-6">
            Valores ilustrativos para comparação didática. Resultados dependem do plano de estudos e da constância do aluno.
          </p>
        </div>
      </section>


      {/* SEÇÃO: OFERTA (CHECKOUT) */}
      <section className="py-12 md:py-20 px-4 bg-black" id="oferta">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="bg-red-600 text-white px-4 py-2 text-base md:text-lg mb-4 animate-pulse">
              🔥 OFERTA LIMITADA
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              A Maior <span className="text-[#FFD700]">Oferta</span> do Ano
            </h2>
            <p className="text-base md:text-xl text-gray-400">
              Apenas <span className="text-[#F39200] font-bold">{vagasRestantes} vagas</span> restantes
            </p>
          </div>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-4 border-[#F39200] p-6 md:p-10">
            <CardContent className="p-0">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 md:mb-4">
                  Plano <span className="text-[#FFD700]">VITALÍCIO</span>
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  Acesso para sempre • Até 4 cursos • Troca ilimitada
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 md:p-8 rounded-2xl mb-6 md:mb-8">
                <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl text-gray-500 line-through">R$ 5.987</span>
                  <Badge className="bg-red-600 text-white px-3 py-1 text-base md:text-lg">50% OFF</Badge>
                </div>
                <div className="text-center">
                  <p className="text-sm md:text-base text-gray-400 mb-2">12x de</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FFD700] mb-2">R$ 249,46</p>
                  <p className="text-base md:text-lg text-gray-400">ou R$ 2.993,50 à vista</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "✅ Acesso VITALÍCIO (para sempre)",
                  "✅ Escolha até 4 cursos entre 26 ênfases",
                  "✅ Troca ILIMITADA de cursos",
                  "✅ Todas as atualizações incluídas",
                  "✅ Mentorias ao vivo recorrentes",
                  "✅ Simulados + Banco 10k questões",
                  "✅ Suporte prioritário",
                  "✅ Garantia 7 dias (risco zero)"
                ].map((beneficio, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm md:text-base">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 flex-shrink-0" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FFD700]/20 p-4 md:p-6 rounded-xl mb-6 md:mb-8 text-center border border-[#FFD700]/50">
                <p className="text-base md:text-lg font-bold mb-2">
                  🎁 Use o cupom: <span className="text-[#FFD700] text-xl md:text-2xl">PETROBLACKINFINITA</span>
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  (Cupom já aplicado no checkout)
                </p>
              </div>

              <Button 
                onClick={() => window.open('#', '_blank')}
                size="lg"
                className="w-full bg-gradient-to-r from-[#F39200] to-[#FFD700] hover:from-[#FFD700] hover:to-[#F39200] text-black font-black text-base sm:text-lg md:text-xl py-4 sm:py-5 md:py-6 shadow-2xl transform hover:scale-105 transition-all"
              >
                🔒 Garantir Acesso Vitalício
              </Button>

              <p className="text-xs md:text-sm text-center text-gray-500 mt-4">
                🔒 Pagamento 100% seguro • Checkout criptografado
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO: BOLETO PARCELADO */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12">
            💳 <span className="text-[#FFD700]">Boleto Parcelado</span> Liberado
          </h2>

          <Card className="bg-gray-900 border-[#F39200]/30 p-6 md:p-10">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="bg-[#F39200]/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl font-black text-[#F39200]">1</span>
                  </div>
                  <h3 className="font-bold mb-2 text-sm md:text-base">Escolha Boleto</h3>
                  <p className="text-xs md:text-sm text-gray-400">No checkout, selecione "Boleto Parcelado"</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#F39200]/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl font-black text-[#F39200]">2</span>
                  </div>
                  <h3 className="font-bold mb-2 text-sm md:text-base">Parcele em até 12x</h3>
                  <p className="text-xs md:text-sm text-gray-400">Boletos mensais gerados automaticamente</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#F39200]/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl font-black text-[#F39200]">3</span>
                  </div>
                  <h3 className="font-bold mb-2 text-sm md:text-base">Acesso Imediato</h3>
                  <p className="text-xs md:text-sm text-gray-400">Após compensação do 1º boleto (1-3 dias úteis)</p>
                </div>
              </div>

              <div className="bg-[#FFD700]/20 p-4 md:p-6 rounded-xl border border-[#FFD700]/50 text-center">
                <p className="text-sm md:text-base">
                  ⚠️ <span className="font-bold">Importante:</span> Boletos vencem todo dia 10. Atraso pode suspender acesso temporariamente.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO: GARANTIA */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-2 border-green-500 p-6 md:p-10">
            <CardContent className="p-0 text-center">
              <img 
                src="garantia-7-dias.png" 
                alt="7 Dias de Garantia CPWS Concursos"
                className="h-32 w-32 md:h-48 md:w-48 mx-auto mb-4 md:mb-6"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6">
                Garantia <span className="text-green-400">Risco Zero</span>
              </h2>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                Teste o curso por <span className="font-bold text-green-400">7 dias</span>. Se não gostar, devolvemos <span className="font-bold">100% do seu dinheiro</span>. Sem perguntas, sem burocracia.
              </p>
              <div className="bg-black/50 p-4 md:p-6 rounded-xl inline-block">
                <p className="text-sm md:text-base text-gray-400">
                  📧 Basta enviar um email para <span className="text-green-400 font-bold">cpwspreparatorio@gmail.com</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO: FAQ */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12">
            ❓ Perguntas <span className="text-[#FFD700]">Frequentes</span>
          </h2>

          <div className="space-y-3 md:space-y-4">
            {[
              {
                pergunta: "Não consigo investir no Vitalício agora. Quais opções eu tenho?",
                resposta:
                  "Você pode começar pelos cursos regulares (plano anual): Médio por R$ 1.597/ano e Superior por R$ 1.997/ano. É um ticket inicial menor e foca em 1 curso por vez. É útil para orçamento curto, mas não é vitalício e, se você estudar por vários ciclos ou quiser trocar de ênfase com frequência, tende a ser menos vantajoso. Para comparar alternativas, acesse cpwsconcursos.com.br ou fale com nosso time comercial para tirar dúvidas."
              },
              {
                pergunta: "Qual a diferença entre Vitalício e Assinatura Anual?",
                resposta:
                  "No Vitalício você paga uma única vez, tem acesso permanente e pode estudar até 4 ênfases (com ajustes quando precisar). Nos cursos regulares (plano anual), você estuda 1 curso por vez e renova a cada 12 meses: Médio custa R$ 1.597/ano e Superior custa R$ 1.997/ano. Se pretende estudar por mais de um ciclo ou alternar ênfases, o Vitalício costuma oferecer melhor relação custo–benefício."
              },
              {
                pergunta: "Como funciona a escolha dos 4 cursos?",
                resposta:
                  "Após a compra do Vitalício, você escolhe 4 cursos entre as 26 ênfases (nível Médio e Superior), respeitando a regra: 2 de nível Médio e 2 de nível Superior (não é permitido 3/1 ou 4/0). Você pode ajustar essas escolhas ao longo da jornada, sem burocracia."
              },
              {
                pergunta: "Quanto tempo tenho para usar o desconto da Black Friday?",
                resposta:
                  "O desconto fica disponível durante a janela da Black Friday. A oferta pode encerrar antes caso as 200 vagas se esgotem — recomendamos ativar o acesso o quanto antes."
              },
              {
                pergunta: "Como funciona a política de reembolso?",
                resposta: "Você tem 7 dias corridos a partir da data de compra para testar o curso. Se não gostar por QUALQUER motivo, basta enviar um email para suporte@cpwsconcursos.com.br solicitando reembolso. Devolvemos 100% do valor pago, sem perguntas, sem burocracia."
              },
              {
                pergunta: "Qual o prazo de acesso ao curso?",
                resposta: "VITALÍCIO = PARA SEMPRE. Não tem prazo de validade. O lema 'até 2029' é sobre a janela de oportunidade dos concursos (investimentos, vagas, banca confirmada), mas seu acesso ao curso é PERPÉTUO. Você pode estudar no seu ritmo, sem pressa, sem renovação."
              },
              {
                pergunta: "Como funciona o suporte e as mentorias?",
                resposta: "Você tem acesso a: 1) Suporte via email/WhatsApp com SLA de resposta; 2) Mentorias ao vivo recorrentes com aprovados e professores; 3) Comunidade exclusiva de alunos; 4) Atualizações automáticas de conteúdo quando sair novo edital. Tudo incluído no Vitalício, sem custo adicional."
              },
              {
                pergunta: "Não tenho curso técnico. Posso fazer o concurso?",
                resposta: "SIM! O curso técnico só é exigido na POSSE, não na PROVA. Você pode fazer a prova, ser aprovado, e TER MESES (ou até anos) entre a aprovação e a posse para fazer o curso técnico necessário. Muitos dos nossos 549 aprovados fizeram técnico DEPOIS. Temos parceiros que podem te ajudar - fale com um consultor no WhatsApp."
              }
            ].map((faq, idx) => (
              <Card key={idx} className="bg-gray-900 border-[#F39200]/30 hover:border-[#F39200] transition-all">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full p-4 md:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-sm md:text-base lg:text-lg">{faq.pergunta}</span>
                  <ChevronDown className={`h-5 w-5 md:h-6 md:w-6 flex-shrink-0 text-[#F39200] transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen === idx && (
                  <div className="px-4 pb-4 md:px-6 md:pb-6">
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{faq.resposta}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: CTA FINAL */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
            Não Deixe Essa <span className="text-[#F39200]">Oportunidade</span> Passar
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Apenas <span className="text-[#F39200] font-bold">{vagasRestantes} vagas</span> restantes com 50% OFF
          </p>

          <div className="bg-gradient-to-r from-[#F39200] to-[#FFD700] p-6 md:p-10 rounded-3xl mb-8 md:mb-12">
            <p className="text-black text-xl sm:text-2xl md:text-3xl font-black mb-4 md:mb-6">
              🎯 Garantir Vitalício com 50% OFF
            </p>
            <p className="text-black text-base md:text-lg mb-6 md:mb-8">
              Código: <span className="font-black text-xl md:text-2xl">PETROBLACKINFINITA</span>
            </p>
            <Button 
              onClick={scrollToOffer}
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-black text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-2xl transform hover:scale-105 transition-all"
            >
              🎯 Garantir Vitalício 50%
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#FFD700] mb-2">200</p>
              <p className="text-xs md:text-sm text-gray-400">Vagas Totais</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#F39200] mb-2">{vagasRestantes}</p>
              <p className="text-xs md:text-sm text-gray-400">Vagas Restantes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-green-500 mb-2">50%</p>
              <p className="text-xs md:text-sm text-gray-400">Desconto Aplicado</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <img 
            src="logo-cpws-branco.png" 
            alt="CPWS Concursos"
            className="h-8 md:h-12 mx-auto mb-4 md:mb-6"
          />
          <p className="text-xs md:text-sm text-gray-500 mb-2">
            © 2024 CPWS Concursos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">
            CNPJ: 56.150.422/0001-06 | cpwspreparatorio@gmail.com
          </p>
        </div>
      </footer>

      {/* Espaçamento para barra flutuante */}
      <div className="h-20 md:h-24" />
    </div>
  );
}

