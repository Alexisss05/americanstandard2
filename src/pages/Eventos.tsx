import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import {
  Calendar,
  Clock,
  Users,
  MonitorSmartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import classroomImg from "@/assets/classroom-1.jpg";

const getNextSunday = () => {
  const today = new Date();
  const day = today.getDay();
  const daysUntilSunday = day === 0 ? 7 : 7 - day;
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilSunday);
  return nextSunday.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const BlogGrid = ({ posts }: { posts: any[] }) => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Blog y Noticias
          </h2>
          <p className="text-muted-foreground text-xl mt-2">
            Mantente informado sobre nuestros eventos, actividades y novedades.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-2xl mx-auto items-start">
          {posts.map((post) => {
            const imageUrl =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            return (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-card rounded-2xl border border-border overflow-hidden card-hover cursor-pointer"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={post.title.rendered}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-8">
                  <h3
                    className="text-2xl font-heading font-bold text-secondary mb-3"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className="wp-content text-muted-foreground leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered || post.content.rendered,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-card rounded-2xl border border-border overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {selectedPost._embedded?.["wp:featuredmedia"]?.[0]
                ?.source_url && (
                <img
                  src={selectedPost._embedded["wp:featuredmedia"][0].source_url}
                  alt={selectedPost.title.rendered}
                  className="w-full max-h-[450px] object-contain bg-muted"
                />
              )}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-card/90 hover:bg-card text-foreground rounded-full p-2 border border-border transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <h3
                className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4"
                dangerouslySetInnerHTML={{
                  __html: selectedPost.title.rendered,
                }}
              />
              <div
                className="wp-content text-muted-foreground leading-relaxed text-lg"
                dangerouslySetInnerHTML={{
                  __html: selectedPost.content.rendered,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Eventos = () => {
  useScrollAnimation();
  const [wordpressPosts, setWordpressPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost/wordpress/wp-json/wp/v2/posts?per_page=10&_embed")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setWordpressPosts(data);
      })
      .catch((error) =>
        console.error("Error al cargar publicaciones de WordPress:", error),
      );
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Eventos"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-secondary">Eventos</span>
          </h1>
          <p className="text-muted-foreground text-xl md:text-3xl max-w-2xl mx-auto">
            Participa en nuestras actividades y vive el inglés más allá del
            aula.
          </p>
        </div>
      </section>

      {/* Domingo de Inglés */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            <div className="animate-on-scroll slide-left">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img
                  src={classroomImg}
                  alt="Evento"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div className="animate-on-scroll slide-right">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-6 text-center border-b border-border">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-1">
                    Domingo de Inglés Online
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    CLASE COMPLETAMENTE GRATIS
                  </p>
                </div>
                <div className="p-6 text-justified">
                  <p className="text-muted-foreground leading-relaxed mb-5 text-xl text-center">
                    Te invitamos cordialmente a participar en nuestro evento
                    especial{" "}
                    <strong className="text-foreground">
                      "Domingo de Inglés"
                    </strong>
                    , una excelente oportunidad para conocer nuestra metodología
                    de enseñanza.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      {
                        icon: Calendar,
                        label: "Fecha",
                        value: getNextSunday(),
                      },

                      { icon: Clock, label: "Horario", value: "8:00 pm CDMX" },
                      {
                        icon: Users,
                        label: "Niveles",
                        value: "Básico e Intermedio",
                      },
                      {
                        icon: MonitorSmartphone,
                        label: "Modalidad",
                        value: "Online (Meet)",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 bg-muted rounded-lg p-3"
                      >
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="font-semibold text-foreground text-base">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/525521456414"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="heroRed"
                      size="lg"
                      className="w-full px-12 py-6"
                    >
                      Inscríbete Gratis
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog WordPress */}
      {/*  {wordpressPosts.length > 0 && <BlogGrid posts={wordpressPosts} />}      */}
      <Footer />
    </div>
  );
};

export default Eventos;
