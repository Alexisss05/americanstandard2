import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, CheckCircle, FileText, Award, Globe, Users, Target, Briefcase } from "lucide-react";
import standardsBg from "@/assets/standards-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import corporateImg from "@/assets/corporate.jpg";
import graduationImg from "@/assets/graduation.jpg";

const reasons = [
  { icon: Globe, title: "Presencia Global", desc: "Empresa con enfoque internacional, capacitando a equipos en múltiples sectores." },
  { icon: Briefcase, title: "Especialistas en Empresas", desc: "Programas de inglés diseñados específicamente para el entorno corporativo y de negocios." },
  { icon: Users, title: "Capacitación a Medida", desc: "Adaptamos contenidos, horarios y modalidades a las necesidades reales de tu equipo." },
  { icon: Target, title: "Resultados Medibles", desc: "Reportes de progreso individual y grupal con métricas claras de avance." },
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
    items: ["Instructor Capacitador", "Diseñador de cursos", "Desarrollo de cursos en línea", "Impartición de cursos en línea en vivo"],
  },
  {
    icon: Award,
    title: "Evaluaciones Oxford",
    desc: "Prueba práctica y 100% en línea que determina tu nivel de inglés según el Marco Común Europeo.",
    items: ["Comprensión auditiva", "Expresión oral", "Uso del idioma", "Reconocimiento internacional"],
  },
];

const Nosotros = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={corporateImg} alt="Por qué nosotros" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">Empresa Global</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            ¿Por qué <span className="text-secondary">Nosotros</span>?
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Somos una <strong className="text-foreground">empresa global enfocada en la capacitación de inglés para empresas</strong>. Acompañamos a organizaciones de todos los tamaños en su transformación hacia entornos bilingües, impulsando la competitividad de su capital humano con metodologías probadas, certificaciones oficiales y un equipo de English Coaches altamente calificados.
          </p>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {reasons.map((r) => (
              <div key={r.title} className="animate-on-scroll bg-card rounded-xl p-6 border border-border hover:border-primary/40 card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-48">
        <img src={graduationImg} alt="Graduación" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </section>

      {/* Estándares de Competencia */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={standardsBg} alt="Estándares" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Estándares de <span className="text-secondary">Competencia</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Certificaciones oficiales avaladas por reconocidas instituciones que respaldan la calidad de nuestros programas con reconocimiento nacional e internacional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children">
            {standards.map((s) => (
              <div key={s.title} className="animate-on-scroll bg-card rounded-xl p-6 border border-border hover:border-primary/40 card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="Quote" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-secondary/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-heading font-bold text-secondary-foreground italic max-w-3xl mx-auto animate-on-scroll">
            "Estamos comprometidos con la excelencia académica y el crecimiento profesional de nuestros estudiantes."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
