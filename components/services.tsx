import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Acrylic",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1757324379_3717028764334333613_49563268918_1-T1HLKBjgps5WhsArNS9tWInUlM7Yaa.jpeg",
  },
  {
    title: "Manicure & Pedicure",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1733489727_3517089208193474908_49563268918_1-2STaRtvAi5BcSM4xSeEJwls1kCHxIm.jpg",
  },
  {
    title: "Nail Art",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1755475484_3701519101424376676_49563268918_1-8CDqrMudmM5RO1UlYqOI1ZCTE9FP0G.jpg",
  },
]

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

export function Services() {
  return (
    <section id="services" className="bg-card py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-center mb-12">
          <span className="font-serif text-5xl md:text-6xl font-bold text-foreground">Popular</span>
          <span className="font-serif text-5xl md:text-6xl font-light ml-3 text-foreground">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link href={bookingUrl} className="text-accent font-medium hover:text-[#B8922E] transition-colors">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  )
}
