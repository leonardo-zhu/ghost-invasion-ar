import { RefObject, useEffect } from "react";
import createScene from "@/lib/createScene";

export const useMindAR = (ref: RefObject<HTMLDivElement | null>) => {

  useEffect(() => {
    const container = ref?.current;

    if (!container) return;

    const start = async () => {
      const { MindARThree } = await import("mind-ar/dist/mindar-image-three.prod.js");

      const mindarThree = new MindARThree({
        container,
        imageTargetSrc: "/marker.mind",
      });

      const { renderer, scene, camera } = mindarThree;
      const anchor = mindarThree.addAnchor(0);

      const cube = createScene(anchor.group, scene);

      anchor.onTargetFound = () => console.log("识别到了 marker 图像！");
      anchor.onTargetLost = () => console.log("marker 图像丢失");

      await mindarThree.start();

      renderer.setAnimationLoop(() => {
        cube.rotation.y += 0.02;
        renderer.render(scene, camera);
      });
    };

    start();
  }, [ref]);
};
