import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import noiseImage from "../assets/noise.jpg";

const Hero = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(backgroundRef.current, {
      backgroundPosition: "200% 0",
      duration: 20,
      ease: "linear"
    });
  }, []);

  return (
    <section
      ref={backgroundRef}
      className="w-full h-screen relative flex items-center justify-between px-12 py-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
      style={{
        backgroundImage: `url(${noiseImage}), linear-gradient(270deg, #7e22ce, #db2777, #dc2626)`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="max-w-xl text-white font-poppins">
        <h1 className="text-6xl font-extrabold mb-4">ENSPYRE</h1>
        <p className="text-xl mb-8">Inspiring Your Digital Presence</p>
        <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
