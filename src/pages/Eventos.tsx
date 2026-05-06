import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Clock, Users, MonitorSmartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import classroomImg from "@/assets/classroom-1.jpg";

const Eventos = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Eventos" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
            <span className="text-secondary">Eventos</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Participa en nuestras actividades y vive el inglés más allá del aula.
          </p>
        </div>
      </section>

      {/* Domingo de Inglés */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div className="animate-on-scroll slide-left">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img src={classroomImg} alt="Evento" className="w-full h-80 object-cover" loading="lazy" width={1920} height={1080} />
              </div>
            </div>
            <div className="animate-on-scroll slide-right">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="bg-primary p-6 text-center">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-1">
                    Domingo de Inglés Online
                  </h2>
                  <p className="text-primary-foreground/80 text-sm">CLASE COMPLETAMENTE GRATIS</p>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    Te invitamos cordialmente a participar en nuestro evento especial <strong className="text-foreground">"Domingo de Inglés"</strong>, una excelente oportunidad para conocer nuestra metodología de enseñanza.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: Calendar, label: "Fecha", value: "25 de Mayo 2025" },
                      { icon: Clock, label: "Horario", value: "8:00 pm CDMX" },
                      { icon: Users, label: "Niveles", value: "Básico e Intermedio" },
                      { icon: MonitorSmartphone, label: "Modalidad", value: "Online (Meet)" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 bg-muted rounded-lg p-3">
                        <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-[10px] text-muted-foreground">{item.label}</div>
                          <div className="font-semibold text-foreground text-xs">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
                    <Button variant="heroRed" size="lg" className="w-full">Inscríbete Gratis</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eventos;
