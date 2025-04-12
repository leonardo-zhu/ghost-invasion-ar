"use client";
import { useRef } from "react";
import { useMindAR } from "@/hooks/useMindAR";

const ARCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { loading, visible } = useMindAR(containerRef);

  return (
    <div className="w-full h-screen" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {loading && <span>Loading Camera...</span>}
        {visible && (
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
            👻 你来晚了……这里的数据，不该被发现……
          </div>
        )}
      </div>
    </div>
  );
};


export default ARCanvas;
