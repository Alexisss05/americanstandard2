import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PlayCircle, BookOpen, Video, Users, Headphones, DollarSign, Gift, ArrowRight, Phone, Handshake, FileSignature, Briefcase, FileCheck, ChevronRight, CheckCircle } from "lucide-react";
import empresasBg from "@/assets/empresas-bg.jpg";
import corporateImg from "@/assets/corporate.jpg";

const convenios = [
  {
    icon: Handshake,
    title: "Convenio Standard",
    desc: "Su empresa funge como un canal clave para la difusión de nuestros cursos de inglés entre sus colaboradores. Los beneficios del programa pueden extenderse a familiares y amigos.",
    becas: "Una beca gratuita de 3 meses + una beca adicional por cada 10 estudiantes inscritos.",
    resp: ["La empresa no asume el costo de la colegiatura.", "Los colaboradores se inscriben y pagan de manera individual.", "Reportes mensuales con la lista de inscritos."],
  },
  {
    icon: FileSignature,
    title: "Convenio Vía Nómina",
    desc: "La empresa impulsa el aprendizaje del inglés mediante descuento por nómina. El colaborador autoriza el descuento y no tiene que preocuparse por gestiones de pago.",
    becas: "Una beca de 3 meses gratuita + una beca adicional por cada 10 personas inscritas.",
    resp: ["Cada colaborador autoriza el descuento vía nómina.", "Desglose mensual actualizado de estudiantes inscritos.", "La empresa cubre el IVA."],
  },
  {
    icon: Briefcase,
    title: "Contrato Standard",
    desc: "La empresa brinda capacitación a sus colaboradores mediante asignación a grupos ya establecidos, según nivel y disponibilidad horaria determinados por examen de colocación.",
    becas: "Una beca con todos los gastos cubiertos por cada 10 estudiantes durante la vigencia del contrato.",
    resp: ["La empresa cubre el costo mensual más IVA.", "Reportes mensuales de asistencia y resultados.", "Posibilidad de dar de baja o sustituir estudiantes."],
  },
  {
    icon: FileCheck,
    title: "Contrato Personalizado",
    desc: "Colaboración estratégica con programa diseñado a la medida, ajustado a las necesidades específicas de la organización. Horarios flexibles seleccionados por la empresa.",
    becas: "3 becas gratuitas por cada 20 personas inscritas durante la vigencia del contrato.",
    resp: ["La empresa cubre el costo mensual con factura detallada.", "Horarios de clases seleccionados por la empresa.", "Programa hecho a la medida de la empresa."],
  },
];

const beneficios = [
  { icon: PlayCircle, title: "Master Class Gratuita", desc: "Para que los participantes experimenten nuestra metodología de enseñanza." },
  { icon: BookOpen, title: "Material de Apoyo", desc: "Material gratuito diseñado para reforzar el aprendizaje fuera del aula." },
  { icon: Video, title: "Clases 100% en Vivo", desc: "Mayor interacción y conexión entre el estudiante y el profesor." },
  { icon: Users, title: "Grupos Reducidos", desc: "Atención personalizada para un aprendizaje más efectivo." },
  { icon: Headphones, title: "Clases Grabadas", desc: "Accede a las lecciones en cualquier momento." },
  { icon: DollarSign, title: "Costos Accesibles", desc: "Cursos diseñados para ser accesibles y convenientes." },
];

const Empresas = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={empresasBg} alt="Empresas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-on-scroll slide-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-5 leading-tight">
                Nuestro Objetivo es <span className="text-secondary">Hacer Crecer</span> tu Empresa
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl text-justify">
                Permítenos ser tu aliado en el crecimiento de tu empresa y descubre cómo juntos podemos alcanzar nuevos horizontes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroRed" size="lg">Solicitar Cotización <ArrowRight className="ml-1 w-4 h-4" /></Button>
                </a>
                <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroOutline" size="lg">Hablar con un Asesor</Button>
                </a>
              </div>
            </div>
            <div className="animate-on-scroll slide-right">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img src={corporateImg} alt="Equipo corporativo" className="w-full h-80 object-cover" loading="lazy" width={1920} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convenios y Contratos */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Tipos de Convenios y Contratos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto stagger-children">
            {convenios.map((c) => (
              <div key={c.title} className="animate-on-scroll bg-card rounded-xl p-6 border border-border hover:border-secondary/40 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground">{c.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">{c.desc}</p>

                <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-secondary" />
                    <span className="font-heading font-bold text-white text-sm">Becas</span>
                  </div>
                  <p className="text-muted-foreground text-xs text-justify">{c.becas}</p>
                </div>

                <div>
                  <p className="font-heading font-semibold text-foreground text-sm mb-2">Responsabilidades:</p>
                  <ul className="space-y-2">
                    {c.resp.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="pt-4 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-10 animate-on-scroll">
            Nuestros Beneficios
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto stagger-children">
            {beneficios.map((b) => (
              <div key={b.title} className="animate-on-scroll flex gap-3 bg-card rounded-xl p-4 border border-border card-hover">
                <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm mb-1">{b.title}</h4>
                  <p className="text-muted-foreground text-xs text-justify">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red CTA banner */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-secondary via-secondary to-[#0c2340] p-10 md:p-14 text-center animate-on-scroll glow-red">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground mb-3">
              ¿Te gustaría conocer todos los beneficios que ofrecemos?
            </h2>
            <p className="text-secondary-foreground/90 max-w-2xl mx-auto mb-6 text-sm md:text-base">
              Agenda una videollamada en el día y horario que más te acomode, y descubre cómo nuestros cursos de inglés pueden ayudarte a alcanzar tus metas.
            </p>
            <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold">
                Atención Personalizada <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Phone section */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-2 animate-on-scroll">
            ENSEÑAMOS IDIOMAS
          </p>
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-foreground mb-6 animate-on-scroll">
            CAMBIAMOS VIDAS
          </p>
          <a href="tel:5511770981" className="inline-flex items-center gap-3 text-2xl md:text-3xl font-heading font-bold text-foreground hover:text-secondary transition-colors">
            <Phone className="w-6 h-6 text-secondary" />
            55 1177 0981
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Empresas;
