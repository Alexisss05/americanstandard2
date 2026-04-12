import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImg from "@/assets/padel-action.jpg";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Misión", desc: "Brindar educación en inglés de alta calidad, accesible y orientada a resultados, que permita a nuestros estudiantes alcanzar sus metas profesionales y personales." },
  { icon: Eye, title: "Visión", desc: "Ser la academia de inglés líder en formación integral, reconocida por la excelencia académica y la innovación en metodologías de enseñanza." },
  { icon: Heart, title: "Valores", desc: "Compromiso, excelencia, innovación, respeto por la diversidad y pasión por la enseñanza son los pilares que guían cada una de nuestras acciones." },
];

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-4 block">Conócenos</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Sobre <span className="text-gradient-blue">Nosotros</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Más de 10 años formando profesionales bilingües con metodología de primer nivel.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-blue">
              <img src={aboutImg} alt="Equipo de English Academy" loading="lazy" className="w-full h-[500px] object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Una Academia con <span className="text-gradient-red">Propósito</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                English Academy nació con la convicción de que aprender inglés no debería ser un lujo, sino una herramienta accesible para todos. Nuestro enfoque se centra en la comunicación real y el desarrollo integral de habilidades.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Contamos con un equipo de más de 50 profesores certificados, instalaciones modernas y una plataforma digital que complementa el aprendizaje presencial. Cada programa está diseñado para maximizar el progreso de nuestros estudiantes.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { value: "10+", label: "Años" },
                  { value: "5,000+", label: "Egresados" },
                  { value: "3", label: "Sedes" },
                ].map((s) => (
                  <div key={s.label} className="border border-border rounded-xl p-4">
                    <div className="text-2xl font-heading font-bold text-primary">{s.value}</div>
                    <div className="text-muted-foreground text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-background rounded-xl p-8 border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
