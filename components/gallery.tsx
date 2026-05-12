import Image from "next/image"

const galleryImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1733489727_3517089208193474908_49563268918_1-2STaRtvAi5BcSM4xSeEJwls1kCHxIm.jpg", alt: "Delicate nail art" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1755475484_3701519101424376676_49563268918_1-8CDqrMudmM5RO1UlYqOI1ZCTE9FP0G.jpg", alt: "Gold and blue nails" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1757324337_3717028407315148201_49563268918_1-Nfwv3HufkqXaPJFfuCydsdnKclsErN.jpeg", alt: "Artistic nail design" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1759199509_3732758488956205647_49563268918_1-kZVcDp4UxRncYccl8FHNk4EqomHNxm.jpeg", alt: "Colorful nail art" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1733322824_3515689121961663019_49563268918_1-lsFNRsTLQwDddbeW5a5kBdEh99mHnt.jpg", alt: "Cream nails with accents" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1755475516_3701519375756974352_49563268918_1-tCmeiZr2LSRgrY1UbkQZ3hyDyxB6iG.jpg", alt: "Glitter nail art" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1733489727_3517089208193474908_49563268918_1-2STaRtvAi5BcSM4xSeEJwls1kCHxIm.jpg", alt: "Delicate nail art" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1755475484_3701519101424376676_49563268918_1-8CDqrMudmM5RO1UlYqOI1ZCTE9FP0G.jpg", alt: "Gold and blue nails" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1757324379_3717028764334333613_49563268918_1-T1HLKBjgps5WhsArNS9tWInUlM7Yaa.jpeg", alt: "Floral nail art" },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Work
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Gallery - Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] w-64 md:w-72 shrink-0 rounded-2xl overflow-hidden snap-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Follow Link */}
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/sunniertoday/?__d=1%3Futm_source%3Dig_embed" className="text-accent font-medium hover:text-[#B8922E] transition-colors">
            Follow @sunniertoday →
          </a>
        </div>
      </div>
    </section>
  )
}
