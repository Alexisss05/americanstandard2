import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "English Conversation Club",
    date: "Todos los viernes",
    time: "18:00 - 20:00",
    location: "Sede Principal",
    desc: "Practica tu inglés en un ambiente relajado con hablantes nativos. Todos los niveles bienvenidos.",
    tag: "Semanal",
  },
  {
    title: "Workshop: Business Presentations",
    date: "15 de Mayo, 2026",
    time: "10:00 - 14:00",
    location: "Sala de Conferencias",
    desc: "Aprende a realizar presentaciones profesionales en inglés con confianza y claridad.",
    tag: "Taller",
  },
  {
    title: "Simulacro TOEFL",
    date: "22 de Mayo, 2026",
    time: "09:00 - 13:00",
    location: "Aula Digital",
    desc: "Examen simulado completo con corrección y retroalimentación personalizada.",
    tag: "Examen",
  },
  {
    title: "Cultural Exchange Night",
    date: "5 de Junio, 2026",
    time: "19:00 - 22:00",
    location: "Terraza",
    desc: "Noche de intercambio cultural con estudiantes internacionales. Comida, música y mucha diversión.",
    tag: "Social",
  },
];

const Eventos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-4 block">Comunidad</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Próximos <span className="text-gradient-blue">Eventos</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Participa en nuestras actividades y vive el inglés más allá del aula.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.title} className="bg-card rounded-xl p-8 border border-border hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                      {event.tag}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{event.desc}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {event.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {event.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {event.location}</span>
                    </div>
                  </div>
                  <Button variant="heroOutline" size="lg" className="shrink-0">
                    Inscríbete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eventos;
