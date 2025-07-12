import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-default"}`}>
      <div className="nav-container flex justify-between items-center px-6 py-3">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Enspyre" style={{ width: "48px", height: "48px" }}/>
        </div>
        <div className="flex space-x-6">
          <Link to="gallery" smooth duration={600} className="tab-link" >
            Gallery
          </Link>
          <Link to="contact" smooth duration={600} className="tab-link">
            Contact Us
          </Link>
          <Link to="about" smooth duration={600} className="tab-link">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
