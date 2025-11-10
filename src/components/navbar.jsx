import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LEFT = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services", isServices: true },
  { name: "About", href: "/about" }
];

const NAV_RIGHT = [

  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const MEGA_MENU = [
  {
    title: "WEB & APP DEVELOPMENT",
    items: [
      { name: "Mobile APP development", href: "/services/mobile-app" },
      { name: "Business website", href: "/services/business" },
      { name: "E-commerce website", href: "/services/ecommerce" },
      { name: "Web Maintenance", href: "/services/maintenance" },
    ],
  },
  {
    title: "ORGANIC SEARCH",
    items: [
      { name: "SEO services", href: "/services/seo" },
      { name: "Local SEO services", href: "/services/local-seo" },
    ],
  },
  {
    title: "DIGITAL ADVERTISING",
    items: [
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Social Media Management", href: "/services/social-media" },
    ],
  },
  {
    title: "BRANDING SERVICES",
    items: [{ name: "Branding services", href: "/services/branding" }],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaTimeout = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const openMega = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    clearTimeout(megaTimeout.current);
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between lg:justify-center lg:gap-16 h-20">
            {/* Left Navigation (Desktop) */}
            <div className="hidden lg:flex items-center space-x-13">
              {NAV_LEFT.map((link) => {
                if (link.isServices) {
                  return (
                    <div
                      key={link.name}
                      className="relative group"
                      onMouseEnter={openMega}
                      onMouseLeave={closeMega}
                    >
                      <button className="text-gray-800 hover:text-[#e67e22] font-medium inline-flex items-center gap-1 transition-colors duration-200 py-2">
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            megaOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-800 hover:text-[#e67e22] font-medium transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e67e22] group-hover:w-full transition-all duration-300"></span>
                  </a>
                );
              })}
            </div>

            {/* Logo (Center) */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src="/images/main-logo.png"
                  alt="Justdavid_tech Logo"
                  className="h-40 w-auto"
                />
              </a>
            </div>

            {/* Right Navigation (Desktop) */}
            <div className="hidden lg:flex items-center space-x-13">
              {NAV_RIGHT.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-[#e67e22] font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e67e22] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MEGA MENU (Desktop) */}
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          className={`absolute left-0 right-0 top-full transition-all duration-300 transform ${
            megaOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white border-t border-gray-200 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {MEGA_MENU.map((col, index) => (
                  <div
                    key={col.title}
                    className="transform transition-all duration-300"
                    style={{
                      transitionDelay: megaOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    <h4 className="text-sm font-bold text-[#e67e22] mb-4 uppercase tracking-wider">
                      {col.title}
                    </h4>
                    <ul className="space-y-3">
                      {col.items.map((it) => (
                        <li key={it.name}>
                          <a
                            href={it.href}
                            className="group flex items-center text-sm text-gray-700 hover:text-[#e67e22] transition-colors duration-200"
                          >
                            <span className="w-0 h-0.5 bg-[#e67e22] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                            {it.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-in Panel */}
          <div
            className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <img
                  src="/images/main-logo.png"
                  alt="Logo"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-2">
                  {/* Home */}
                  {NAV_LEFT.map((link) => {
                    if (link.isServices) {
                      return (
                        <li key={link.name}>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:text-[#e67e22] py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                mobileServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Services Submenu */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              mobileServicesOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="mt-2 ml-4 pl-4 border-l-2 border-[#e67e22]/30">
                              {MEGA_MENU.map((col) => (
                                <div key={col.title} className="mb-5">
                                  <h5 className="text-xs font-bold text-[#e67e22] mb-3 uppercase tracking-wider">
                                    {col.title}
                                  </h5>
                                  <ul className="space-y-2">
                                    {col.items.map((it) => (
                                      <li key={it.name}>
                                        <a
                                          href={it.href}
                                          className="text-sm text-gray-700 hover:text-[#e67e22] block py-1.5 transition-colors"
                                          onClick={() => setMobileOpen(false)}
                                        >
                                          {it.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </li>
                      );
                    }
                    return null;
                  })}

                  {/* Other Navigation Items */}
                  {NAV_RIGHT.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-800 hover:text-[#e67e22] hover:bg-gray-50 font-semibold block py-3 px-4 rounded-lg transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer CTA */}
              <div className="p-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className="block w-full bg-[#e67e22] text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-[#d35400] transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}