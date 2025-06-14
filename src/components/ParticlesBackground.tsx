import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          color: {
            value: "#FFA500", 
          },
          links: {
            color: "#FFA500",
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
      className="absolute inset-0 -z-20"
    />
  );
}
