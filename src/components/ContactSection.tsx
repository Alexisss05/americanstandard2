import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Calle del Deporte 42, Madrid" },
  { icon: Phone, label: "+34 912 345 678" },
  { icon: Mail, label: "info@velopadel.com" },
  { icon: Clock, label: "Lun-Dom: 7:00 - 23:00" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gradient-lime">Únete</span> a la
              <br />Comunidad Velo
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              ¿Listo para empezar tu viaje en el padel? Contáctanos y descubre todo
              lo que Velo Padel Club tiene para ofrecerte.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Asunto"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Tu mensaje..."
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <Button variant="hero" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
