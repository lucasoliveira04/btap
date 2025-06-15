import { useTranslation } from "react-i18next";
import fundo from "../../public/img/backgrounds/layered-waves-haikei (3).png";
import { ContactForm } from "./ContactForm";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  const { t } = useTranslation();
  const socialLinks = [
    {
      icon: <FaFacebook className="w-6 h-6" />,
      url: "https://www.facebook.com/people/BTap-Studio/61565291252872/?sk=about",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/company/btap",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      url: "https://www.instagram.com/btapstudio",
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
      url: "https://www.youtube.com/@btapstudio",
    },
  ];

  return (
    <footer className="relative text-white">
      <div className="relative w-full overflow-hidden">
        <img
          src={fundo}
          alt="Fundo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-orange-400">
            {t("contactForm.entreContato")}
          </h2>
          {window.location.pathname === "/" && <ContactForm />}

          <div className="w-[80%] h-1 bg-orange-400 rounded-full"></div>

          <div className="flex flex-col md:flex-row md:justify-evenly md:items-center w-full gap-6 text-center font-poppins">
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div>
              <a
                href="mailto:contact@btapstudio.com"
                className="block text-sm md:text-base text-orange-300 hover:text-white"
              >
                contact@btapstudio.com
              </a>
            </div>

            <div>
              <p className="text-gray-300 text-sm md:text-base">
                © {new Date().getFullYear()} BTap Studio. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
