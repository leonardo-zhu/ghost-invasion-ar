"use client";
import { FC, memo, RefObject } from "react";

interface Props {
  loading: boolean;
  containerRef: RefObject<HTMLDivElement | null>;
}

const ARCanvas: FC<Props> = ({ loading, containerRef }) => {

  return (
    <div className="w-full h-screen" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {loading && <span>Loading Camera...</span>}
      </div>
    </div>
  );
};


export default memo(ARCanvas);
