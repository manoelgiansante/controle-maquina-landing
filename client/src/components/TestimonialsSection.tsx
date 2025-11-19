import { Quote } from "lucide-react";

// Depoimentos reais serão adicionados em breve
const testimonials: Array<{name: string; role: string; content: string; rating: number}> = [];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Produtores reais, resultados reais
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-12 bg-background rounded-lg border border-border">
            <p className="text-lg font-semibold mb-2">
              📈 Em breve: depoimentos de produtores reais
            </p>
            <p className="text-muted-foreground">
              Você é nosso cliente? Entre em contato para compartilhar sua experiência!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </section>
  );
}
