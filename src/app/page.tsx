import Analytics from "@/Sections/Analytics";
import Footer from "@/Sections/Footer";
import Hero from "@/Sections/Hero";
import Letterpad from "@/Sections/Letterpad";
import Navbar from "@/Sections/Navbar";
import Purchase from "@/Sections/Purchase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Letterpad />
      <Purchase />
      <Footer />
    </>
  );
}
