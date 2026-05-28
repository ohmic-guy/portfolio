import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Certs", id: "certifications" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));

      // Determine active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/96 backdrop-blur-xl border-b border-cyan-500/15 shadow-[0_10px_40px_rgba(0,0,0,0.35)]" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo("hero")}>
            <span className="font-display font-bold text-xl text-cyan-400 neon-glow tracking-widest">ohmic guy</span>
          </div>

          <div className="flex-1 min-w-0 overflow-x-auto overscroll-x-contain pb-1 -mb-1">
            <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap justify-start md:justify-end min-w-max md:min-w-0 md:ml-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-2.5 sm:px-3 py-2 rounded-md text-[0.72rem] sm:text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-cyan-300 bg-cyan-400/10 active-nav-glow"
                      : "text-slate-200 hover:text-cyan-200 hover:bg-white/5"
                  }`}
                  data-testid={`nav-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 neon-glow transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};

export default Navbar;
