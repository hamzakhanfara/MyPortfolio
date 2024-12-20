"use client"
export const Header = () => {
  return <div className="flex justify-center items-center fixed z-10 w-full top-3">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a className="nav-item" href="#hero" onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>Home</a>
      <a className="nav-item hover:text-primary transition-colors" href="#projects" onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>Projects</a>
      <a className="nav-item" href="#about" onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>About</a>
      <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href="#contact" onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>Contact</a>
    </nav>
  </div>;
};
