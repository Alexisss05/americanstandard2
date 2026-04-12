import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Video, DollarSign, PlayCircle, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import coursesBg from "@/assets/courses-bg.jpg";
import classroomImg from "@/assets/classroom-1.jpg";
import conversationImg from "@/assets/conversation-club.jpg";
import graduationImg from "@/assets/graduation.jpg";

const benefits = [
  { icon: PlayCircle, title: "Master Class Gratuita", desc: "Experimenta directamente nuestra metodología de enseñanza sin costo." },
  { icon: BookOpen, title: "Material de Apoyo", desc: "Material totalmente gratuito diseñado para reforzar el aprendizaje fuera del aula." },
  { icon: Video, title: "Clases 100% en Vivo", desc: "Clases en tiempo real para una mayor interacción y experiencia personalizada." },
  { icon: Users, title: "Grupos Reducidos", desc: "Atención personalizada con grupos pequeños para un aprendizaje más efectivo." },
  { icon: Headphones, title: "Clases Grabadas", desc: "Accede a las lecciones en cualquier momento para repasar cuando lo necesites." },
  { icon: DollarSign, title: "Costos Accesibles", desc: "Cursos de inglés accesibles y convenientes para que todos puedan aprender." },
];

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Ciudad moderna" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-16 text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 animate-pulse-glow">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Centro de Idiomas</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4 text-foreground">
            WELCOME TO<br />
            <span className="text-secondary">AMERICAN STANDARD CDI</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Todo lo que necesitas para aprender un nuevo idioma, en un solo lugar
          </p>
          <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
            <Button variant="heroRed" size="lg" className="text-base px-10 py-6">
              Agenda tu Master Class GRATIS
            </Button>
          </a>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Estudiantes" },
              { value: "10+", label: "Coaches" },
              { value: "4", label: "Niveles" },
              { value: "100%", label: "En Vivo" },
            ].map((stat) => (
              <div key={stat.label} className="text-center animate-on-scroll">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Quiénes somos? with image */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
                ¿<span className="text-gradient-blue">Quiénes Somos</span>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                En <strong className="text-foreground">American Standard Centro de Idiomas</strong> somos una institución académica comprometida con brindar una enseñanza de idiomas accesible, innovadora y de alta calidad. Contamos con English Coaches altamente capacitados y una metodología centrada en el aprendizaje práctico y significativo.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Nuestro propósito es fomentar el gusto por el idioma inglés y contribuir al desarrollo social, económico y cultural de México.
              </p>
            </div>
            <div className="animate-on-scroll slide-right">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img src={classroomImg} alt="Aula de clases" className="w-full h-80 object-cover" loading="lazy" width={1920} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué nosotros? */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="Aula" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-on-scroll">
            ¿Por Qué <span className="text-secondary">Nosotros</span>?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 animate-on-scroll">
            Certificaciones oficiales avaladas por la SEP, CONOCER y OXFORD que respaldan la calidad de nuestros programas con reconocimiento nacional e internacional.
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center stagger-children">
            {["SEP", "CONOCER", "OXFORD"].map((cert) => (
              <div key={cert} className="animate-on-scroll scale-up bg-card/80 backdrop-blur-sm rounded-xl px-8 py-5 border border-border hover:border-primary/40 card-hover">
                <span className="text-foreground font-heading font-bold text-xl">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3 animate-on-scroll text-foreground">
            Nuestros <span className="text-gradient-blue">Beneficios</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 animate-on-scroll">Servicio, calidad, costos accesibles y rápido aprendizaje</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {benefits.map((b) => (
              <div key={b.title} className="animate-on-scroll bg-card rounded-xl p-6 border border-border hover:border-primary/50 card-hover group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{b.title}</h4>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation club image section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={conversationImg} alt="Club de conversación" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-on-scroll">
              Método <span className="text-secondary">Window To The World</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 animate-on-scroll">
              Nuestro método W.T.T.W se centra en enseñar el idioma relacionándolo con la lengua materna, de modo que los estudiantes logren asentar mejor sus bases para comenzar a aplicarlo. Lo que nos hace únicos es nuestro enfoque en la inmersión práctica a través de tres clubes de conversación.
            </p>
            <p className="text-muted-foreground/70 text-sm animate-on-scroll">
              Al completar el curso, serás capaz de desenvolverte en inglés con fluidez excepcional, dominando la comunicación oral, lectura y escritura de manera impecable.
            </p>
          </div>
        </div>
      </section>

      {/* Costos */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground animate-on-scroll">
            Nuestros <span className="text-gradient-red">Costos</span>
          </h2>
          <div className="animate-on-scroll scale-up bg-background rounded-2xl p-8 border border-border max-w-md mx-auto glow-blue">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Pesos Mexicanos Mensuales</p>
            <div className="text-6xl font-heading font-bold text-primary mb-4 animate-float">$1,500</div>
            <p className="text-muted-foreground text-sm mb-6">
              ¡Tenemos promociones especiales en nuestros cursos diseñadas para ti!
            </p>
            <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full">Atención Personalizada</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Graduation / Clientes */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={graduationImg} alt="Graduación" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-foreground animate-on-scroll">
            Nuestros <span className="text-gradient-blue">Clientes</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 items-center stagger-children">
            {["Elektra", "Walmart", "Coca-Cola", "Nissan", "Coppel", "Burger King", "Nestlé", "BenefitHub"].map((name) => (
              <div key={name} className="animate-on-scroll bg-card/60 backdrop-blur-sm rounded-lg px-6 py-3 border border-border card-hover">
                <span className="text-foreground font-heading font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 gradient-border">
        <div className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4 animate-on-scroll">
              No importa dónde estés ahora, lo importante es hacia dónde decides avanzar.
            </h2>
            <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-10 py-6 mt-4 animate-on-scroll">
                Atención Personalizada
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
