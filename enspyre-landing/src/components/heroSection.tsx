import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import noiseTexture from "../assets/noise.jpg"; // Add a noise PNG to assets

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        backgroundPosition: "200% center",
        duration: 15,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-between overflow-hidden px-8">
      {/* Left side */}
      <div className="z-10 max-w-lg">
        <h1 className="text-6xl font-extrabold mb-4">ENSPYRE</h1>
        <p className="text-xl mb-6">Inspiring Your Digital Presence</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
      
      {/* Right animated background */}
      <div
        ref={bgRef}
        className="absolute right-0 top-0 h-full w-1/2"
        style={{
          backgroundImage: `
            linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eac9, #ff7e5f),
            url(${noiseTexture})
          `,
          backgroundSize: "400% 400%, cover",
          backgroundBlendMode: "overlay",
          opacity: 0.8,
        }}
      />
    </section>
  );
};

export default HeroSection;
