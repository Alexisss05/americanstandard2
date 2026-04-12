import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Globe, GraduationCap, Star } from "lucide-react";
import heroImg from "@/assets/hero-padel.jpg";

const stats = [
  { value: "10+", label: "Años de Experiencia" },
  { value: "5,000+", label: "Estudiantes" },
  { value: "50+", label: "Profesores" },
  { value: "98%", label: "Satisfacción" },
];

const features = [
  { icon: BookOpen, title: "Metodología Innovadora", desc: "Aprendizaje dinámico basado en situaciones reales y comunicación efectiva." },
  { icon: Users, title: "Grupos Reducidos", desc: "Máximo 12 alumnos por clase para una atención personalizada." },
  { icon: Award, title: "Certificaciones Oficiales", desc: "Preparación para TOEFL, IELTS, Cambridge y más." },
  { icon: Globe, title: "Profesores Nativos", desc: "Equipo de profesores nativos con amplia experiencia docente." },
  { icon: GraduationCap, title: "Todos los Niveles", desc: "Desde A1 hasta C2, con programas adaptados a cada nivel." },
  { icon: Star, title: "Flexibilidad Total", desc: "Clases presenciales, online y modalidad híbrida." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Estudiantes aprendiendo inglés" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary-foreground text-sm font-medium tracking-widest uppercase">
                Tu futuro comienza aquí
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold leading-[0.95] mb-6 text-primary-foreground">
              Aprende Inglés
              <br />
              <span className="text-primary">Sin Límites</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Cursos de inglés diseñados para impulsar tu carrera y abrir puertas al mundo. Metodología práctica con resultados comprobados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base px-10 py-6">
                Ver Cursos
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-10 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Contáctanos
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-4 block">¿Por qué elegirnos?</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              La Mejor Formación en <span className="text-gradient-blue">Inglés</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combinamos tecnología, experiencia y pasión para ofrecer la mejor experiencia de aprendizaje.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-blue transition-all duration-300 group">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-lg mb-2">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Únete a miles de estudiantes que ya están transformando su futuro con nuestros cursos de inglés.
          </p>
          <Button variant="secondary" size="lg" className="text-base px-10 py-6 font-semibold uppercase tracking-wide">
            Inscríbete Ahora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
