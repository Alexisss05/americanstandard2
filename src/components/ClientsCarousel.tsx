import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import amazon from "@/assets/clients/amazon.png";
import nissan from "@/assets/clients/nissan.png";
import sams from "@/assets/clients/sams.png";
import coppel from "@/assets/clients/coppel.png";
import burgerking from "@/assets/clients/burgerking.png";
import fraiche from "@/assets/clients/fraiche.png";
import nestle from "@/assets/clients/nestle.png";
import ampi from "@/assets/clients/ampi.png";
import benefithub from "@/assets/clients/benefithub.png";

const clients = [
  { name: "Amazon", src: amazon },
  { name: "Nissan", src: nissan },
  { name: "Sam's Club", src: sams },
  { name: "Coppel", src: coppel },
  { name: "Burger King", src: burgerking },
  { name: "Fraiche", src: fraiche },
  { name: "Nestlé", src: nestle },
  { name: "AMPI", src: ampi },
  { name: "BenefitHub", src: benefithub },
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
          <CarouselItem key={c.name} className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
            <div className="h-40 flex items-center justify-center px-4">
              <img
                src={c.src}
                alt={`Logo ${c.name}`}
                loading="lazy"
                className="max-h-32 max-w-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ClientsCarousel;
