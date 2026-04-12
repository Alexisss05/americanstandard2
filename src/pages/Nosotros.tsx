import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutBg from "@/assets/about-bg.jpg";
import standardsBg from "@/assets/standards-bg.jpg";
import classroomImg from "@/assets/classroom-1.jpg";
import conversationImg from "@/assets/conversation-club.jpg";
import { Target, Eye, Award, BookOpen, Shield } from "lucide-react";

const valores = [
  { icon: Award, title: "Excelencia Académica", desc: "Garantizamos resultados excepcionales con un enfoque innovador y docentes calificados." },
  { icon: Shield, title: "Código de Ética Profesional", desc: "Actuamos con integridad, transparencia y responsabilidad en cada interacción." },
  { icon: BookOpen, title: "Adaptación", desc: "Nos ajustamos a las exigencias y metas de nuestros clientes, ofreciendo resultados efectivos de manera eficiente." },
];

const Nosotros = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={standardsBg} alt="Nosotros" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
            ¿Quiénes <span className="text-secondary">Somos</span>?
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Somos una institución académica que ofrece a los alumnos la posibilidad de estudiar idiomas de forma accesible. Nuestro objetivo es proporcionar clases innovadoras con altos estándares de calidad y English Coaches altamente capacitados.
          </p>
        </div>
      </section>

      {/* About with image */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="animate-on-scroll slide-left">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img src={classroomImg} alt="Aula" className="w-full h-72 object-cover" loading="lazy" width={1920} height={1080} />
              </div>
            </div>
            <div className="animate-on-scroll slide-right">
              <div className="flex gap-5 mb-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Misión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Somos una empresa comprometida en impulsar a otras organizaciones a convertirse en empresas bilingües, ofreciendo soluciones lingüísticas personalizadas para la capacitación de su capital humano.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Visión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser la empresa líder en la formación bilingüe empresarial. Aspiramos a ser reconocidos como el mejor aliado estratégico para las empresas que buscan fortalecer su posición a nivel global.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-64">
        <img src={conversationImg} alt="Conversación" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </section>

      {/* Valores */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="Valores" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-8 animate-on-scroll">
            Nuestros <span className="text-secondary">Valores</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {valores.map((v) => (
              <div key={v.title} className="animate-on-scroll bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border card-hover text-center">
                <v.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-secondary-foreground italic animate-on-scroll">
            "Tu actual circunstancia no determina hasta donde puedes llegar, solo te dice por dónde empezar para mejorar tu futuro."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
