import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-dvh">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Stats />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}