// src/components/ARCanvas.tsx
"use client";
import { useRef } from "react";
import { useMindAR } from "@/hooks/useMindAR";

const ARCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useMindAR(containerRef);

  return (
    <div className="w-full h-screen" ref={containerRef}>
      <p className="absolute top-4 left-4 z-10">AR加载中…</p>
    </div>
  );
};


export default ARCanvas;
