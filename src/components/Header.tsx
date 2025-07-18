import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../public/img/logobtap.png";
import { MdMenu, MdClose } from "react-icons/md";
import { LanguageSelector } from "./language-selector";

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const headerOps = [
    { label: t("navigation.home"), targetId: "home" },
    { label: t("navigation.about"), targetId: "about" },
    { label: t("navigation.contact"), targetId: "contact" },
  ];

  function scrollToElementById(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleNavigation(id: string) {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      // Espera um pouco para garantir que a home renderizou
      setTimeout(() => scrollToElementById(id), 100);
    } else {
      scrollToElementById(id);
    }
  }

  return (
    <header
      className="
        fixed top-0 left-0 w-full h-[120px] px-4 md:px-8 flex items-center justify-between z-50
        backdrop-blur-md bg-[#0F172A]/70 border-b border-orange-500 shadow-md
      "
    >
      <div className="flex items-center">
        <img src={logo} alt="Btap Logo" className="h-16 md:h-24 w-auto" />
      </div>

      <button
        className="text-white md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <MdClose className="w-8 h-8" />
        ) : (
          <MdMenu className="w-8 h-8" />
        )}
      </button>

      <div
        className={`
          flex-col md:flex-row md:flex md:items-center md:gap-8
          absolute md:static top-[120px] left-0 w-full md:w-auto bg-[#0F172A]/95 md:bg-transparent
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          py-4 md:py-0
          px-8 md:px-0
        `}
      >
        <nav>
          <ul className="flex flex-col md:flex-row md:gap-8 gap-4">
            {headerOps.map((op) => (
              <li key={op.label}>
                <button
                  onClick={() => handleNavigation(op.targetId)}
                  className="
                    text-white text-lg hover:text-orange-400 transition duration-200 font-[Space Grotesk] tracking-wide cursor-pointer
                  "
                >
                  {op.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 md:mt-0">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
