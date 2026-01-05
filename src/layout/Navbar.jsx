import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScrolled);

    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : " bg-transparent py-5 "
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a className="text-xl font-bold tracking-tight hover:text-primary  ">
          GS <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1 ">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface  hover:transition-all "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <Button size="sm" onClick={() => setIsMobileMenuOpen(false)}>
            Contect me
          </Button>
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-stong">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="py-2 text-lg text-muted-foreground hover:text-foreground  "
              >
                {link.label}
              </a>
            ))}
            <Button>Contect me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar
