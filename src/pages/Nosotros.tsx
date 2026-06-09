import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Shield,
  CheckCircle,
  FileText,
  Award,
  BookOpen,
  Star,
  Zap,
  RefreshCw,
  TrendingUp,
  Lightbulb,
  Globe,
} from "lucide-react";
import standardsBg from "@/assets/standards-bg.jpg";
import corporateImg from "@/assets/corporate.jpg";

const enfoque = [
  {
    icon: Star,
    title: "Calidad",
    desc: "Garantizamos estándares de enseñanza de alto nivel en cada sesión.",
  },
  {
    icon: Zap,
    title: "Flexibilidad",
    desc: "Horarios y modalidades adaptadas a tu ritmo de vida.",
  },
  {
    icon: RefreshCw,
    title: "Adaptación",
    desc: "Nos ajustamos a tus metas y necesidades específicas de aprendizaje.",
  },
  {
    icon: BookOpen,
    title: "Metodología",
    desc: "Método probado que relaciona el inglés con tu lengua materna para un aprendizaje más sólido.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Reales",
    desc: "Enfoque práctico que garantiza avances medibles desde las primeras semanas.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    desc: "Integramos tecnología y recursos modernos para enriquecer la experiencia educativa.",
  },
  {
    icon: Globe,
    title: "Profesores Nativos",
    desc: "Aprende con coaches nativos altamente capacitados para una inmersión real en el idioma.",
  },
];

const standards = [
  {
    icon: FileText,
    title: "Constancias avaladas por la SEP",
    desc: "Nuestros cursos están alineados por la Secretaría de Educación Pública. Nuestros estudiantes reciben una constancia con validez oficial.",
    items: ["Validez oficial", "Respaldo académico", "Desarrollo profesional"],
  },
  {
    icon: Shield,
    title: "Certificaciones CONOCER",
    desc: "Certificaciones de competencias laborales avaladas por CONOCER.",
    items: [
      "Instructor Capacitador",
      "Diseñador de cursos",
      "Desarrollo de cursos en línea",
      "Impartición de cursos en línea en vivo",
    ],
  },
  {
    icon: Award,
    title: "Evaluaciones Oxford",
    desc: "Prueba práctica y 100% en línea que determina tu nivel de inglés según el Marco Común Europeo.",
    items: [
      "Comprensión auditiva",
      "Expresión oral",
      "Uso del idioma",
      "Reconocimiento internacional",
    ],
  },
];

const Nosotros = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={corporateImg}
            alt="Por qué nosotros"
            className="w-full h-full object-cover object-[50%_25%]"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            ¿Por qué <span className="text-secondary">Nosotros</span>?
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-justify">
            Somos una{" "}
            <strong className="text-foreground">
              empresa global enfocada en la capacitación de inglés para empresas
            </strong>
            . Acompañamos a organizaciones de todos los tamaños en su
            transformación hacia entornos bilingües, impulsando la
            competitividad de su capital humano con metodologías probadas,
            certificaciones oficiales y un equipo de English Coaches altamente
            calificados.
          </p>
        </div>
      </section>

      {/* Nuestro Enfoque */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">
              Nuestro <span className="text-primary">Enfoque</span>
            </h2>
            <p className="text-muted-foreground">
              Calidad, flexibilidad y resultados reales para tu aprendizaje
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 stagger-children">
            {enfoque.map((b) => (
              <div
                key={b.title}
                className="animate-on-scroll bg-card rounded-xl p-6 border border-border hover:border-primary/40 card-hover w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {b.title}
                </h3>
                <div className="w-10 h-0.5 bg-primary mb-3 rounded-full" />
                <p className="text-muted-foreground text-base">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estándares de Competencia */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src={standardsBg}
            alt="Estándares"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-5">
              Estándares de <span className="text-secondary">Competencia</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Certificaciones oficiales avaladas por reconocidas instituciones
              que respaldan la calidad de nuestros programas con reconocimiento
              nacional e internacional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-screen-xl mx-auto stagger-children">
            {standards.map((s) => (
              <div
                key={s.title}
                className="animate-on-scroll bg-card rounded-xl p-8 border border-border hover:border-primary/40 card-hover"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {s.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed mb-5 text-justify">
                  {s.desc}
                </p>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-base"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote - red banner */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-heading font-bold text-white italic max-w-3xl mx-auto animate-on-scroll">
            "Estamos comprometidos con la excelencia académica y el crecimiento
            profesional de nuestros estudiantes."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
