import { useState } from "react";
import brFlag from "../../public/img/countrys/brazil-flag.png";
import usFlag from "../../public/img/countrys/eua-flag.png";
import spanishFlag from "../../public/img/countrys/spanish-flag.png";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    code: "pt",
    label: "Português",
    flag: brFlag,
  });

  const languages = [
    {
      code: "pt",
      label: t("changeSelectedLanguage.brazil"),
      flag: brFlag,
    },
    {
      code: "en",
      label: t("changeSelectedLanguage.english"),
      flag: usFlag,
    },
    {
      code: "es",
      label: t("changeSelectedLanguage.spanish"),
      flag: spanishFlag,
    },
  ];

  const changeLanguage = (lng: string) => {
    setSelected(languages.find((l) => l.code === lng) || selected);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative w-40 text-white font-[Space Grotesk]">
      {/* Botão atual */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2 bg-[#1F2937]/80 backdrop-blur-md p-2 rounded-md border border-orange-500 shadow-sm
          hover:bg-[#1F2937]/90 transition-colors duration-200 w-full
        "
      >
        <img
          src={selected.flag}
          alt=""
          className="w-6 h-4 object-cover rounded-sm border border-gray-300"
        />
        <span className="text-sm">{selected.label}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute left-0 mt-2 w-full bg-[#1F2937]/95 backdrop-blur-md rounded-md shadow-lg border border-orange-500 overflow-hidden z-20
            animate-fadeSlide
          "
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setOpen(false);
              }}
              className="
                flex items-center gap-2 px-3 py-2 cursor-pointer text-sm
                hover:bg-orange-500 hover:text-white transition-colors duration-150
              "
            >
              <img
                src={lang.flag}
                alt=""
                className="w-6 h-4 object-cover rounded-sm border border-gray-300"
              />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}

      <style>
        {`
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeSlide {
            animation: fadeSlide 0.2s ease-out;
          }
        `}
      </style>
    </div>
  );
}
