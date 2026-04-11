import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import { Instagram } from "lucide-react";

const coaches = [
  {
    name: "Carlos Martínez",
    role: "Head Coach",
    desc: "Ex-jugador profesional con 15 años de experiencia. Especialista en técnica avanzada.",
    image: coach1,
  },
  {
    name: "Laura Fernández",
    role: "Coach Senior",
    desc: "Campeona nacional juvenil. Especialista en iniciación y perfeccionamiento técnico.",
    image: coach2,
  },
];

const CoachesSection = () => {
  return (
    <section id="coaches" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Nuestro Equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Entrenadores <span className="text-gradient-lime">de Élite</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nuestro equipo de profesionales te guiará para alcanzar tu máximo potencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  loading="lazy"
                  width={600}
                  height={750}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-6 -mt-12 relative z-10">
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                  {coach.role}
                </span>
                <h3 className="text-2xl font-heading font-bold text-foreground mt-1">{coach.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{coach.desc}</p>
                <button className="mt-4 text-primary hover:text-lime-glow transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
