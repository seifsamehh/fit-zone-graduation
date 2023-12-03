import About from "@/components/About";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Rest from "@/components/Rest";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Categories />
      <Gallery />
      <Features />
      <Rest />
      <Footer />
    </main>
  );
}
