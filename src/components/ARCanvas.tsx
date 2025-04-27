// src/components/ARCanvas.tsx
"use client";
import { useRef } from "react";
import { useMindAR } from "@/hooks/useMindAR";

const ARCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { loading } = useMindAR(containerRef);

  return (
    <div className="w-full h-screen" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {loading && <span>Loading Camera...</span>}
      </div>
    </div>
  );
};


export default ARCanvas;
