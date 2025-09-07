'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { Particle } from "./particle";
import Home from "./home";

export default function Location() {
  return (
    <>
    <Home/>
    <Particle children={undefined}/>
    </>
  );
}
