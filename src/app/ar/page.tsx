// src/app/ar/page.tsx
"use client";
import { useEffect, useRef } from "react";

export default function ARPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMindAR = async () => {
      const { MindARThree } = await import("mind-ar/dist/mindar-image-three.prod.js");

      const mindarThree = new MindARThree({
        container: containerRef.current!,
        imageTargetSrc: "/marker.mind", // 我们之后生成这个文件
      });

      const { renderer, scene, camera } = mindarThree;

      const anchor = mindarThree.addAnchor(0); // index 0 对应第一张 marker 图

      // 暂时什么都不加模型，后面用 Three.js 补上
      anchor.group.addEventListener("targetFound", () => {
        console.log("图像识别到了！");
      });

      await mindarThree.start(); // 打开摄像头
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    };

    loadMindAR();
  }, []);

  return (
    <div className="w-full h-screen" ref={containerRef}>
      <p className="absolute top-4 left-4 text-white z-10">AR加载中...</p>
    </div>
  );
}
