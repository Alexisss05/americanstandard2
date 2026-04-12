import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, FileText, Award } from "lucide-react";

const standards = [
  {
    icon: Shield,
    title: "Marco Común Europeo (MCER)",
    desc: "Todos nuestros programas están alineados con el Marco Común Europeo de Referencia para las Lenguas, garantizando estándares internacionales de calidad.",
    levels: ["A1 - Principiante", "A2 - Elemental", "B1 - Intermedio", "B2 - Intermedio Alto", "C1 - Avanzado", "C2 - Maestría"],
  },
  {
    icon: Award,
    title: "Certificaciones Internacionales",
    desc: "Somos centro preparador autorizado para los principales exámenes internacionales de inglés.",
    levels: ["TOEFL iBT", "IELTS Academic & General", "Cambridge (FCE, CAE, CPE)", "TOEIC", "Aptis"],
  },
  {
    icon: FileText,
    title: "Estándares de Competencia Laboral",
    desc: "Nuestros cursos cumplen con los estándares de competencia laboral reconocidos por las principales industrias.",
    levels: ["Comunicación empresarial", "Redacción técnica", "Negociación internacional", "Servicio al cliente", "Presentaciones ejecutivas"],
  },
  {
    icon: CheckCircle,
    title: "Acreditaciones",
    desc: "Contamos con acreditaciones nacionales e internacionales que avalan la calidad de nuestra enseñanza.",
    levels: ["ISO 9001:2015", "Secretaría de Educación", "British Council Partner", "ETS Authorized Center"],
  },
];

const Estandares = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-4 block">Calidad</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Estándares de <span className="text-gradient-blue">Competencias</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Formación respaldada por los más altos estándares nacionales e internacionales.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {standards.map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-8 border border-border hover:border-primary/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.levels.map((level) => (
                    <li key={level} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estandares;
