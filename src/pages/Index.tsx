import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Award, BookOpen, Shield } from "lucide-react";
import ClientsCarousel from "@/components/ClientsCarousel";
import heroBg from "@/assets/hero-bg.jpg";
import Valores from "@/assets/valores.jpg";
import whoWeAre from "@/assets/whoweare.png";

const valores = [
  {
    icon: Award,
    title: "Excelencia Académica",
    desc: "Garantizamos resultados excepcionales con un enfoque innovador y docentes calificados.",
  },
  {
    icon: Shield,
    title: "Código de Ética Profesional",
    desc: "Actuamos con integridad, transparencia y responsabilidad en cada interacción.",
  },
  {
    icon: BookOpen,
    title: "Adaptación",
    desc: "Nos ajustamos a las exigencias y metas de nuestros clientes, ofreciendo resultados efectivos de manera eficiente.",
  },
];

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/*Hero*/}
      <section className="relative flex items-center overflow-hidden min-h-[680px] md:min-h-screen">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Ciudad moderna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-40 pb-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-normal mb-10 text-white">
            WELCOME TO
            <br />
            <span className="text-secondary">AMERICAN </span>
            <span className="text-primary">STANDARD</span> <br />
            <span className="text-white">CENTRO DE IDIOMAS</span>
          </h1>
          <p className="text-muted-foreground text-2xl font-heading font-semibold max-w-4xl mx-auto mb-10">
            Todo lo que necesitas para aprender un nuevo idioma, <br /> en un
            solo lugar
          </p>
          <a
            href="https://wa.me/525521456414"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="heroRed"
              size="lg"
              className="text-base px-12 py-7"
            >
              Agenda tu Master Class GRATIS
            </Button>
          </a>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { value: "15 mil+", label: "Estudiantes" },
              { value: "100+", label: "Coaches" },
              { value: "10", label: "Programas de Inglés" },
              { value: "100%", label: "En Vivo" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-4xl font-heading font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-10 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">
              ¿Quiénes Somos?
            </h2>
            <br />
            <br />
            <p className="text-muted-foreground text-xl text-justify">
              En American Standard Centro de Idiomas somos una institución
              académica comprometida con brindar una enseñanza de idiomas
              accesible, innovadora y de alta calidad. Contamos con English
              Coaches altamente capacitados y una metodología centrada en el
              aprendizaje práctico y significativo. Nuestro propósito es
              fomentar el gusto por el idioma inglés y contribuir al desarrollo
              social, económico y cultural de México.
            </p>
          </div>
          <br />
          <br />

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div className="animate-on-scroll slide-left">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img
                  src={whoWeAre}
                  alt="businessPeople"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div className="animate-on-scroll slide-right space-y-6">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                    Misión
                  </h3>
                  <p className="text-muted-foreground text-xl leading-relaxed text-justify">
                    Acompañar a personas y empresas en su camino hacia el
                    dominio del inglés mediante programas dinámicos, English
                    Coaches certificados y una experiencia educativa cercana que
                    transforma el aprendizaje en una herramienta real de
                    crecimiento personal y profesional.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                    Visión
                  </h3>
                  <p className="text-muted-foreground text-xl leading-relaxed text-justify">
                    Consolidarnos como un referente nacional en la enseñanza del
                    inglés, reconocidos por la calidad de nuestros coaches, la
                    efectividad de nuestra metodología y nuestro compromiso con
                    abrir nuevas oportunidades a cada estudiante que confía en
                    nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img
            src={Valores}
            alt="Valores"
            className="w-full h-full object-cover object-[40%_50%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-8 animate-on-scroll">
            Nuestros <span className="text-secondary">Valores</span>
          </h1>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {valores.map((v) => (
              <div
                key={v.title}
                className="animate-on-scroll bg-card/80 backdrop-blur-sm rounded-xl p-10 border border-border card-hover text-center"
              >
                <v.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h4 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {v.title}
                </h4>
                <p className="text-muted-foreground text-xl">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes carrusel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 text-foreground animate-on-scroll">
            Empresas que <span className="text-secondary">Confían</span> en
            Nosotros
          </h2>
          <ClientsCarousel />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 gradient-border">
        <div className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mb-4 animate-on-scroll">
              No importa dónde estés ahora, lo importante es hacia dónde decides
              avanzar.
            </h2>
            <a
              href="https://wa.me/525521456414"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="hero"
                size="lg"
                className="text-base px-10 py-7 mt-4 animate-on-scroll"
              >
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
