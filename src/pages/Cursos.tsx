<<<<<<< HEAD
const Page = () => {
  return <div className="min-h-screen bg-[#1a2744] text-white p-10">Página en construcción</div>;
};

export default Page;
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import coursesBg from "@/assets/courses-bg.jpg";
import empresasBg from "@/assets/empresas-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import onlineImg from "@/assets/online-class.jpg";
import conversationImg from "@/assets/conversation-club.jpg";
import { GraduationCap, MessageCircle, User, Briefcase, Mail } from "lucide-react";

const levels = [
  { name: "Introducción", desc: "Fundamentos del inglés, vocabulario esencial y estructuras gramaticales básicas para comunicarte en situaciones cotidianas." },
  { name: "Básico", desc: "Desarrollo de comprensión oral y escrita. 3 niveles: Gramática, Estructura, Vocabulario + Club de conversación." },
  { name: "Intermedio", desc: "Fortalecimiento de destrezas en comprensión auditiva y escrita. 3 niveles con enfoque en fluidez y seguridad." },
  { name: "Avanzado", desc: "Perfecciona habilidades para conversaciones sofisticadas, textos complejos, expresiones idiomáticas y modismos." },
];

const programs = [
  { icon: MessageCircle, title: "Clubs de Conversación", desc: "Clubes para todos los niveles con profesores nativos altamente capacitados. ¡Aprende de forma divertida y efectiva!" },
  { icon: User, title: "Clases Privadas", desc: "Aprendizaje personalizado con flexibilidad para diseñar tu propio horario. ¿Mañana o noche? ¡Tú decides!" },
  { icon: Briefcase, title: "Intelligent Business", desc: "Clubes de conversación enfocados en áreas empresariales: contabilidad, recursos humanos, ventas y logística." },
  { icon: Mail, title: "Business Communications", desc: "Desarrolla comunicación en inglés para reuniones, correos profesionales, presentaciones y negociaciones internacionales." },
];

const Cursos = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={coursesBg} alt="Cursos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Servicios <span className="text-secondary">Exclusivos</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Descubre nuestra amplia gama de cursos de inglés diseñados para adaptarse a tu vida. Con horarios flexibles y una variedad de áreas temáticas.
          </p>
        </div>
      </section>

      {/* Método with image */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
                Nuestro Programa: <span className="text-gradient-blue">W.T.T.W</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nuestro método <strong className="text-foreground">Window To The World</strong> se centra en enseñar el idioma relacionándolo con la lengua materna (español), de modo que los estudiantes logren asentar mejor sus bases y funcionamiento para finalmente comenzar a aplicarlo. Lo que nos hace únicos es nuestro enfoque en la inmersión práctica a través de tres clubes de conversación.
              </p>
            </div>
            <div className="animate-on-scroll slide-right">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img src={conversationImg} alt="Programa" className="w-full h-64 object-cover" loading="lazy" width={1920} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={empresasBg} alt="Niveles" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-8 animate-on-scroll">
            <GraduationCap className="w-8 h-8 inline-block mb-1 mr-2 text-secondary" />
            Niveles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {levels.map((level, i) => (
              <div key={level.name} className="animate-on-scroll bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border card-hover">
                <div className="text-secondary font-heading font-bold text-sm mb-2">Fase {i + 1}</div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{level.name}</h3>
                <p className="text-muted-foreground text-sm">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online class image break */}
      <section className="relative h-48">
        <img src={onlineImg} alt="Clase online" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </section>

      {/* Programas */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-8 text-foreground animate-on-scroll">
            Nuestros <span className="text-gradient-blue">Programas</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-children">
            {programs.map((p) => (
              <div key={p.title} className="animate-on-scroll bg-card rounded-xl p-6 border border-border hover:border-primary/50 card-hover">
                <p.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-secondary-foreground mb-4 animate-on-scroll">
            Tu actual circunstancia no determina hasta donde puedes llegar, solo te dice por dónde empezar.
          </p>
          <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="animate-on-scroll">Contáctanos</Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;
>>>>>>> 44c82827c888a260eee1a0af1c8d3abc665f8b6e
