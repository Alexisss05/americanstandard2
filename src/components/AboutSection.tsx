import padelAction from "@/assets/padel-action.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden glow-lime">
              <img
                src={padelAction}
                alt="Jugadores de padel en acción"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-2xl hidden lg:block" />
          </div>

          {/* Text */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Más Que Un Club,{" "}
              <span className="text-gradient-lime">Una Comunidad</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En Velo Padel Club creemos que el padel es más que un deporte. Es una forma de vida
              que conecta personas, crea amistades y transforma días ordinarios en experiencias
              extraordinarias.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestras instalaciones de última generación, combinadas con un equipo de entrenadores
              de élite, crean el ambiente perfecto para que jugadores de todos los niveles alcancen
              su máximo potencial.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Pistas Premium", desc: "Cristal panorámico y LED" },
                { title: "Pro Shop", desc: "Equipamiento de élite" },
                { title: "Zona Fitness", desc: "Preparación física completa" },
                { title: "Club Social", desc: "Lounge bar y terraza" },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-primary pl-4">
                  <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
