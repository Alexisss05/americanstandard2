import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const courses = [
  {
    name: "Inglés General",
    level: "A1 - C2",
    price: "120",
    period: "/mes",
    features: [
      "4 horas semanales",
      "Grupos de máximo 12 alumnos",
      "Material didáctico incluido",
      "Acceso a plataforma online",
      "Certificado de nivel",
    ],
    popular: false,
  },
  {
    name: "Inglés de Negocios",
    level: "B1 - C2",
    price: "180",
    period: "/mes",
    features: [
      "6 horas semanales",
      "Grupos de máximo 8 alumnos",
      "Casos prácticos empresariales",
      "Simulaciones de negocios",
      "Certificación profesional",
      "Tutoría personalizada",
    ],
    popular: true,
  },
  {
    name: "Preparación Exámenes",
    level: "B2 - C2",
    price: "200",
    period: "/mes",
    features: [
      "8 horas semanales",
      "TOEFL, IELTS, Cambridge",
      "Simulacros de examen",
      "Material oficial incluido",
      "Garantía de resultado",
      "Sesiones individuales",
    ],
    popular: false,
  },
];

const Cursos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-4 block">Formación</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Nuestros <span className="text-gradient-blue">Cursos</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Programas diseñados para cada objetivo. Encuentra el curso que se adapte a tus necesidades.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {courses.map((course) => (
              <div
                key={course.name}
                className={`rounded-2xl p-8 border transition-all duration-300 ${
                  course.popular
                    ? "border-primary bg-card shadow-blue scale-105"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                {course.popular && (
                  <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Más Popular
                  </span>
                )}
                <h3 className="text-2xl font-heading font-bold text-foreground">{course.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">Nivel: {course.level}</p>
                <div className="mb-6">
                  <span className="text-5xl font-heading font-bold text-primary">€{course.price}</span>
                  <span className="text-muted-foreground">{course.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={course.popular ? "hero" : "heroOutline"} size="lg" className="w-full">
                  Inscríbete
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;
