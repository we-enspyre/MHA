import Navbar from "./components/Navbar";
import HeroSection from "./components/heroSection";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        <section id="hero" className="h-screen bg-gray-50 flex items-center justify-center">
        <HeroSection />
        </section>
        <section id="gallery" className="h-screen bg-blue-50 flex items-center justify-center">
          <h2 className="text-3xl">Gallery Section</h2>
        </section>
        <section id="contact" className="h-screen bg-green-50 flex items-center justify-center">
          <h2 className="text-3xl">Contact Section</h2>
        </section>
        <section id="about" className="h-screen bg-yellow-50 flex items-center justify-center">
          <h2 className="text-3xl">About Us Section</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
