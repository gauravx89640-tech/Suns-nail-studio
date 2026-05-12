import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { MenuSection } from "@/components/menu-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AboutSection } from "@/components/about-section"
import { LogoDivider } from "@/components/logo-divider"
import { Gallery } from "@/components/gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <Hero />
      <Services />
      <MenuSection />
      <WhyChooseUs />
      <AboutSection />
      <LogoDivider />
      <Gallery />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
