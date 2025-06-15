import { useEffect, useState } from "react";
import jogoDoPato from "../../public/img/pigelife/pigelife.jpg";
import itatiba from "../../public/img/itatiba/itatiba.jpg";
import retrobg from "../../public/img/backgrounds/retrobg.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Jogo do Pato",
      image: jogoDoPato,
      description: "Um jogo casual de reflexos rápidos.",
      url: "/jogo-do-pato",
    },
    {
      title: "Itatiba",
      image: itatiba,
      description: "Explore a cidade de Itatiba em um jogo interativo.",
      url: "/itatiba",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <section
      className="relative text-white h-[90vh] py-16 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${retrobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Conheça os Jogos em que estamos trabalhando
      </h2>

      <div className="flex items-center justify-center gap-10 relative z-10">
        {isMobile && (
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-[#ff6600] hover:bg-[#ff8533] transition cursor-pointer hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <a
          className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] rounded-2xl shadow-xl p-4 flex flex-col items-center text-center border-2 border-[#ff6600] transition-all duration-500 hover:scale-95 bg-black/40 backdrop-blur"
          href={projects[currentIndex].url}
        >
          <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-[#ff9900] mb-4">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        {isMobile && (
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-[#ff6600] hover:bg-[#ff8533] transition cursor-pointer hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </section>
  );
}
