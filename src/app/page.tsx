import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Pricing from "@/components/Pricing";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
    </div>
  );
}
