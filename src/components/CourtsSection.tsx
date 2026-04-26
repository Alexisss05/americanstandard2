import courtsAerial from "@/assets/courts-aerial.jpg";
import { Clock, Wifi, Lightbulb, Shield } from "lucide-react";

const features = [
  { icon: Lightbulb, title: "Iluminación LED", desc: "Sistema inteligente de iluminación profesional" },
  { icon: Clock, title: "Horario Flexible", desc: "Abierto de 7:00 a 23:00, todos los días" },
  { icon: Wifi, title: "Smart Courts", desc: "Sensores y estadísticas en tiempo real" },
  { icon: Shield, title: "Cristal Panorámico", desc: "Vidrio templado de alta resistencia" },
];

const CourtsSection = () => {
  return (
    <section id="courts" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Nuestras Instalaciones
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Pistas de <span className="text-gradient-lime">Clase Mundial</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            8 pistas de padel con la última tecnología, diseñadas para ofrecer la mejor
            experiencia de juego.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{f.title}</h4>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={courtsAerial}
              alt="Vista aérea de pistas de padel iluminadas"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourtsSection;
