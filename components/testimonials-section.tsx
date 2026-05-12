import { Star } from "lucide-react"

const testimonials = [
  {
    text: "I was blown away when she was done. They keep catching in the light and are so beautiful and make me happy!",
    author: "Nova",
    rating: 5
  },
  {
    text: "Hands down the best place to get a mani/pedi! Sun listens and takes her time to make sure you leave satisfied. I recommend her salon to everyone!",
    author: "Leslee Whitlow",
    rating: 5
  },
  {
    text: "Sun is amazing! She listens to what you're wanting. She is so detailed and makes sure you leave with nails you love. The only way I would go anywhere else is if she quit.",
    author: "Tabitha Fowler",
    rating: 5
  },
  {
    text: "She takes her time and makes sure each nail is absolutely perfect. I get dipping powder and my nails always last 4+ weeks!",
    author: "Jessica Browning",
    rating: 5
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-foreground mb-12">
          What Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border relative">
              {/* Large decorative quotation mark */}
              <div className="absolute top-4 left-6 text-7xl leading-none" style={{ color: '#C9A84C' }}>
                &ldquo;
              </div>
              
              {/* Review Text - with padding for quote mark */}
              <p className="text-foreground leading-relaxed mb-6 pt-8">
                {testimonial.text}
              </p>
              
              {/* Author & Rating */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground mb-2">{testimonial.author}</p>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#C9A84C" className="text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
