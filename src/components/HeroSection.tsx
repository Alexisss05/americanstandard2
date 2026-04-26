import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-padel.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Pista de padel moderna con iluminación LED verde"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Premium Padel Experience
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6">
          <span className="text-foreground">Eleva Tu</span>
          <br />
          <span className="text-gradient-lime">Juego</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Descubre las mejores pistas de padel con instalaciones de primer nivel,
          entrenadores profesionales y una comunidad apasionada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base px-10 py-6">
            Reservar Pista
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-10 py-6">
            Conocer Más
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "8+", label: "Pistas" },
            { value: "500+", label: "Miembros" },
            { value: "15+", label: "Entrenadores" },
            { value: "24/7", label: "Acceso" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
