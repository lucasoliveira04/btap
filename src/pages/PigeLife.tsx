import { FaAndroid } from "react-icons/fa";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import kelly from "../../public/img/pigelife/kelly.png";
import tannery from "../../public/img/pigelife/tannery.webp";
import { useTranslation } from "react-i18next";

export function PigeLife() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-purple-900 via-indigo-800 to-purple-700 text-center py-10">
        <div className="flex flex-row md:flex-row justify-center gap-6 items-center mt-24 md:mt-24 px-4">
          <img
            src={kelly}
            alt="Kelly"
            className="w-20 md:w-24 floating transition-transform hover:scale-110"
          />

          <p className="text-white text-lg md:text-xl font-bold">[ LOGO ]</p>

          <img
            src={tannery}
            alt="Tannery"
            className="w-20 md:w-24 floating transition-transform hover:scale-110"
          />
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-blue-900 to-blue-800 text-white text-center py-6 px-4"
        data-aos="fade-up"
      >
        <p className="text-lg md:text-xl font-semibold">
          {t("pigelife.statusTitle")}
        </p>
        <p className="text-xs md:text-sm font-bold">
          {t("pigelife.statusSubtitle")}
        </p>
      </section>

      <section className="text-center py-6 px-4" data-aos="fade-up">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg text-sm md:text-base">
          <FaAndroid className="text-base md:text-xl" />
          <span>{t("pigelife.tags")}</span>
        </div>
      </section>

      <section
        className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-up"
      >
        <div className="text-black text-sm md:text-base">
          <p className="text-justify leading-relaxed font-quicksand text-2xl ">
            <p
              dangerouslySetInnerHTML={{ __html: t("pigelife.description") }}
            ></p>
          </p>
        </div>

        <div className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] bg-purple-950 border-4 border-orange-400 rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/aaJbxiWNT60?start=20"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="text-center mb-10" data-aos="fade-up">
        <button
          disabled
          className="px-6 py-2 bg-gray-600 text-white rounded-full opacity-50 cursor-not-allowed text-sm md:text-base"
        >
          {t("pigelife.downloadSoon")}
        </button>
      </section>

      <Footer />
    </>
  );
}
