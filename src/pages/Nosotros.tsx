import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutBg from "@/assets/about-bg.jpg";
import standardsBg from "@/assets/standards-bg.jpg";
import { Target, Eye, Award, BookOpen, Shield } from "lucide-react";

const valores = [
  { icon: Award, title: "Excelencia Académica", desc: "Garantizamos resultados excepcionales con un enfoque innovador y docentes calificados." },
  { icon: Shield, title: "Código de Ética Profesional", desc: "Actuamos con integridad, transparencia y responsabilidad en cada interacción." },
  { icon: BookOpen, title: "Adaptación", desc: "Nos ajustamos a las exigencias y metas de nuestros clientes, ofreciendo resultados efectivos de manera eficiente." },
];

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header with bg */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={standardsBg} alt="Nosotros" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            ¿Quiénes <span className="text-secondary">Somos</span>?
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Somos una institución académica que ofrece a los alumnos la posibilidad de estudiar idiomas de forma accesible. Nuestro objetivo es proporcionar clases innovadoras con altos estándares de calidad y English Coaches altamente capacitados.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold mb-3">Misión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Somos una empresa comprometida en impulsar a otras organizaciones a convertirse en empresas bilingües, ofreciendo soluciones lingüísticas personalizadas para la capacitación de su capital humano. Nuestro objetivo es potenciar el crecimiento y la competitividad empresarial a través de programas de idiomas innovadores, impartidos por docentes altamente capacitados y respaldados por herramientas tecnológicas de vanguardia.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold mb-3">Visión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la empresa líder en la formación bilingüe empresarial. Aspiramos a ser reconocidos como el mejor aliado estratégico para las empresas que buscan fortalecer su posición a nivel global, distinguiéndose a través de una comunicación efectiva, un servicio de alta calidad y una atención al cliente excepcional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores with bg */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="Valores" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground text-center mb-8">
            Nuestros <span className="text-secondary">Valores</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 text-center">
                <v.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">{v.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-secondary-foreground italic">
            "Tu actual circunstancia no determina hasta donde puedes llegar, solo te dice por dónde empezar para mejorar tu futuro."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
