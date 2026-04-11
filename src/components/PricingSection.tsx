import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "49",
    period: "/mes",
    features: [
      "Acceso a pistas en horario valle",
      "Reservas hasta 48h antes",
      "Acceso a vestuarios",
      "1 clase grupal/semana",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "89",
    period: "/mes",
    features: [
      "Acceso ilimitado a pistas",
      "Reservas prioritarias",
      "2 clases privadas/mes",
      "Acceso zona fitness",
      "Descuento en Pro Shop",
      "Acceso al club social",
    ],
    popular: true,
  },
  {
    name: "Élite",
    price: "149",
    period: "/mes",
    features: [
      "Todo lo de Premium",
      "4 clases privadas/mes",
      "Análisis de rendimiento",
      "Participación en torneos",
      "Parking VIP",
      "Invitados gratuitos",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Membresías
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Encuentra Tu <span className="text-gradient-lime">Plan Ideal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Planes flexibles adaptados a tu nivel y frecuencia de juego.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-card glow-lime-strong scale-105"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Más Popular
                </span>
              )}
              <h3 className="text-2xl font-heading font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-5xl font-heading font-bold text-primary">€{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                size="lg"
                className="w-full"
              >
                Empezar Ahora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
