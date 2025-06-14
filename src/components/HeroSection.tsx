import { useTranslation } from "react-i18next";
import fundo from "../assets/backgrounds/polygon-scatter-haikei.svg";
import { ParticlesBackground } from "./ParticlesBackground";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { t } = useTranslation();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const lines = t("hero.lines", { returnObjects: true });

  return (
    <div className="relative overflow-hidden h-screen">
      <ParticlesBackground />

      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-600/20 animate-gradientMove -z-10" />

      <img
        src={fundo}
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover -z-30"
      />

      <div
        className="flex flex-col items-center justify-center max-w-4xl mx-auto
          min-h-[calc(100vh-120px)] px-6 py-52 text-center relative
          sm:px-8 md:px-12"
      >
        <p className="text-orange-400 uppercase tracking-widest mb-4 font-semibold font-[Space Grotesk] text-sm sm:text-base">
          {t("hero.subtitle")}
        </p>

        <div className="space-y-2">
          {lines.map((line, index) => (
            <h1
              key={index}
              className={`text-white
    text-lg sm:text-2xl md:text-3xl lg:text-4xl
    font-extrabold drop-shadow-md tracking-wide font-[Space Grotesk]
    transition-all duration-700 cursor-default
    ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{
                transitionDelay: `${index * 150}ms`,
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                whiteSpace: "normal",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                lineHeight: "1.2",
                maxWidth: "100%",
              }}
            >
              {line}
            </h1>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 w-full max-w-md mx-auto">
          <button
            className="relative w-full sm:w-auto inline-block px-8 py-3 font-bold text-orange-500 border-2 border-orange-500 overflow-hidden rounded
            hover:text-white transition cursor-pointer hover:bg-orange-500 hover:border-transparent"
          >
            <span className="absolute inset-0 bg-orange-500 scale-x-0 origin-left transition-transform duration-300 ease-out hover:scale-x-100"></span>
            <span className="relative z-10 text-[14px]">
              {t("hero.buttons.order")}
            </span>
          </button>
          <button
            className="relative w-full sm:w-auto inline-block px-8 py-3 font-bold bg-orange-500 text-white border-2 border-orange-500 overflow-hidden rounded
            transition cursor-pointer hover:text-orange-500 hover:bg-transparent hover:border-orange-500"
          >
            <span className="absolute inset-0 bg-orange-500 scale-x-0 origin-left transition-transform duration-300 ease-out hover:scale-x-100"></span>
            <span className="relative z-10">{t("hero.buttons.seeGames")}</span>
          </button>
        </div>
      </div>

      <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientMove {
            background-size: 200% 200%;
            animation: gradientMove 8s ease infinite;
          }
      `}</style>
    </div>
  );
}
