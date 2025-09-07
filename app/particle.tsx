'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function Particle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsHovering(true);
    });
  }, []);
  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };
  const options: ISourceOptions = useMemo(
    () => ({
      fullscreen: false,
      fpsLimit: 120,
      interactivity: {
        div: {mode: "bounce"}
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
        zIndex:{value: 1
        }
      },
      detectRetina: true,
    }),
    [],
  );
  return (
        <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        />
  );
}
