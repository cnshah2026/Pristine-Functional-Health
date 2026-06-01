"use client";

import { type ComponentType, useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import type { LiquidEtherProps } from "@/components/LiquidEther";

const lightSage = ["#F0FFF7", "#D7EFE4", "#B7D4C6", "#E2D6AF"];
const darkSage = ["#28453A", "#4F806D", "#91C8AD", "#DFF4E9"];

function useCanRunLiquidEffect() {
  const [canRun, setCanRun] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setCanRun(desktop.matches && !reducedMotion.matches);
    update();

    desktop.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      desktop.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return canRun;
}

export function HeroLiquidEther() {
  const { theme } = useTheme();
  const canRunLiquidEffect = useCanRunLiquidEffect();
  const [LiquidEther, setLiquidEther] =
    useState<ComponentType<LiquidEtherProps> | null>(null);
  const colors = theme === "dark" ? darkSage : lightSage;

  useEffect(() => {
    if (!canRunLiquidEffect || LiquidEther) return;

    let active = true;
    import("@/components/LiquidEther").then((mod) => {
      if (active) setLiquidEther(() => mod.default);
    });

    return () => {
      active = false;
    };
  }, [LiquidEther, canRunLiquidEffect]);

  if (!canRunLiquidEffect || !LiquidEther) return null;

  return (
    <LiquidEther
      key={theme}
      colors={colors}
      mouseForce={12}
      cursorSize={84}
      isViscous
      viscous={22}
      iterationsViscous={14}
      iterationsPoisson={14}
      resolution={0.32}
      isBounce={false}
      autoDemo
      autoSpeed={0.34}
      autoIntensity={1.45}
      takeoverDuration={0.25}
      autoResumeDelay={1400}
      autoRampDuration={0.6}
    />
  );
}
