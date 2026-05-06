import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const clients = [
  { name: "Amazon", domain: "amazon.com" },
  { name: "Nissan", domain: "nissan.com" },
  { name: "Sam's Club", domain: "samsclub.com" },
  { name: "Coppel", domain: "coppel.com" },
  { name: "Burger King", domain: "bk.com" },
  { name: "Fraiche", domain: "fraiche.mx" },
  { name: "Nestlé", domain: "nestle.com" },
  { name: "AMPI", domain: "ampi.org" },
  { name: "Elektra", domain: "elektra.com.mx" },
  { name: "Walmart", domain: "walmart.com" },
  { name: "Coca-Cola", domain: "coca-cola.com" },
  { name: "BenefitHub", domain: "benefithub.com" },
];

const ClientsCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="-ml-2">
        {clients.map((c) => (
          <CarouselItem key={c.name} className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <div className="bg-white rounded-xl p-4 h-24 flex items-center justify-center card-hover">
              <img
                src={`https://logo.clearbit.com/${c.domain}`}
                alt={`Logo ${c.name}`}
                loading="lazy"
                className="max-h-14 max-w-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector(".fallback-text")) {
                    const span = document.createElement("span");
                    span.className = "fallback-text text-slate-800 font-bold text-sm";
                    span.textContent = c.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ClientsCarousel;
