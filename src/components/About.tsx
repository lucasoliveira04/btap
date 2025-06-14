import { useTranslation } from "react-i18next";
import aboutBody from "../assets/backgrounds/layered-waves-haikei.png";
import ceoPhoto from "../assets/team/ceo.png";
import ctoPhoto from "../assets/team/cto.png";

const highlightedWords = [
  // PT
  "INCLUSIVIDADE",
  "EMPATIA",
  "INOVAÇÃO",
  "TRANSPARÊNCIA",
  "RESPONSABILIDADE",
  "AMIZADE",
  "VISÃO",
  "SINERGIA",
  "PAIXÃO",
  "DIFERENÇA",
  "PROPÓSITO",
  "INCLUSIVA",
  "ACESSÍVEL",
  "ALEGRIA",
  "MISSÃO",
  "DIVERSÃO",
  "PERTENCIMENTO",
  "UNIR",
  "JORNADA",

  // ES
  "INCLUSIVIDAD",
  "EMPATÍA",
  "INNOVACIÓN",
  "TRANSPARENCIA",
  "RESPONSABILIDAD",
  "AMISTAD",
  "VISIÓN",
  "SINERGIA",
  "PASIÓN",
  "DIFERENCIA",
  "PROPÓSITO",
  "INCLUSIVA",
  "ACCESIBLE",
  "ALEGRÍA",
  "MISIÓN",
  "DIVERSIÓN",
  "PERTENENCIA",
  "UNIR",
  "VIAJE",

  // EN
  "INCLUSIVITY",
  "EMPATHY",
  "INNOVATION",
  "TRANSPARENCY",
  "RESPONSIBILITY",
  "FRIENDSHIP",
  "VISION",
  "SYNERGY",
  "PASSION",
  "DIFFERENCE",
  "PURPOSE",
  "INCLUSIVE",
  "ACCESSIBLE",
  "JOY",
  "MISSION",
  "FUN",
  "BELONGING",
  "UNITE",
  "JOURNEY",
];

function highlightText(text: string, words: string[]) {
  const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
  return text.replace(
    regex,
    (match) => `<span class="text-yellow-400 font-bold">${match}</span>`
  );
}

export function About() {
  const { t } = useTranslation();

  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${aboutBody})` }}
    >
      <div className="relative z-10 px-6 md:px-16 py-20 max-w-5xl mx-auto space-y-16">
        <h1 className="text-4xl font-poppins text-center text-yellow-400">
          {t("about.title")}
        </h1>

        {/* Grid de parágrafos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-bold">
          {/* Parágrafo 1 */}
          <p
            className="text-lg leading-relaxed font-poppins md:text-left max-w-prose"
            dangerouslySetInnerHTML={{
              __html: highlightText(t("about.paragraph1"), highlightedWords),
            }}
          />

          {/* Parágrafo 2 */}
          <p
            className="text-lg leading-relaxed font-poppins md:text-right max-w-prose"
            dangerouslySetInnerHTML={{
              __html: highlightText(t("about.paragraph2"), highlightedWords),
            }}
          />

          {/* Parágrafo 3 */}
          <p
            className="text-lg leading-relaxed font-poppins max-w-prose md:col-span-2"
            dangerouslySetInnerHTML={{
              __html: highlightText(t("about.paragraph3"), highlightedWords),
            }}
          />

          {/* Seção de Valores */}
          <div className="flex justify-center items-center border-t-2 border-yellow-400 pt-8 md:col-span-2">
            <div className="text-center max-w-prose md:col-span-2">
              <h2 className="text-2xl font-poppins text-yellow-300 mb-4">
                {t("about.valuesTitle")}
              </h2>

              <p
                className="text-lg leading-relaxed font-poppins"
                dangerouslySetInnerHTML={{
                  __html: highlightText(
                    t("about.valueInclusivity"),
                    highlightedWords
                  ),
                }}
              />

              <p
                className="text-lg leading-relaxed font-poppins"
                dangerouslySetInnerHTML={{
                  __html: highlightText(
                    t("about.valueEmpathy"),
                    highlightedWords
                  ),
                }}
              />

              <p
                className="text-lg leading-relaxed font-poppins"
                dangerouslySetInnerHTML={{
                  __html: highlightText(
                    t("about.valueInnovation"),
                    highlightedWords
                  ),
                }}
              />

              <p
                className="text-lg leading-relaxed font-poppins"
                dangerouslySetInnerHTML={{
                  __html: highlightText(
                    t("about.valueTransparency"),
                    highlightedWords
                  ),
                }}
              />

              <p
                className="text-lg leading-relaxed font-poppins"
                dangerouslySetInnerHTML={{
                  __html: highlightText(
                    t("about.valueResponsibility"),
                    highlightedWords
                  ),
                }}
              />
            </div>
          </div>
        </div>

        {/* Seção dos Líderes */}
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-16">
          {/* CEO */}
          <div className="flex flex-col items-center max-w-xs text-center">
            <img
              src={ceoPhoto}
              alt="CEO"
              className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-yellow-400"
              draggable="false"
            />
            <h3 className="text-xl font-semibold font-poppins text-yellow-400">
              Thiago de Castro
            </h3>
            <p className="text-lg font-poppins">CEO</p>
          </div>

          {/* Linha vertical */}
          <div className="hidden md:block w-px h-40 bg-yellow-400"></div>

          {/* CTO */}
          <div className="flex flex-col items-center max-w-xs text-center">
            <img
              src={ctoPhoto}
              alt="CTO"
              className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-yellow-400"
              draggable="false"
            />
            <h3 className="text-xl font-semibold font-poppins text-yellow-400">
              Luis Eduardo Pedro
            </h3>
            <p className="text-lg font-poppins">CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
