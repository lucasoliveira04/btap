import React from "react";
import { useTranslation } from "react-i18next";
import { FaTools } from "react-icons/fa";

type ComingSoonProps = {
  logo?: string;
  alt?: string;
  message?: string;
};

export function ComingSoon({ logo, alt = "Logo" }: ComingSoonProps) {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center flex-grow bg-gradient-to-b from-purple-900 via-indigo-800 to-purple-700 text-white px-6 py-16 shadow-lg relative overflow-hidden">
      {logo && (
        <img src={logo} alt={alt} className="w-24 md:w-32 mb-6 animate-pulse" />
      )}

      <FaTools className="text-5xl text-orange-400 mb-4 animate-bounce" />

      <p className="text-3xl md:text-4xl font-bold mb-2 text-center">
        {t("projects.emDesenvolvimento")}
      </p>
      <p className="text-base md:text-lg mb-6 text-center text-gray-300 max-w-lg">
        {t("projects.subTitleDesenvolvimento")}
      </p>

      <button
        disabled
        className="px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full opacity-70 text-white text-sm md:text-base cursor-not-allowed shadow-md"
      >
        {t("projects.emBreve")}
      </button>

      <div className="w-full absolute bottom-0 left-0 overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0,0 C150,100 350,0 500,100 L500,00 L0,0 Z"
            className="fill-purple-800"
          />
        </svg>
      </div>
    </section>
  );
}
