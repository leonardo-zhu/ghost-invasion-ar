import { RefObject, useEffect, useState } from "react";
import createGhostScene from "@/lib/createGhostScene";

export const useMindAR = (ref: RefObject<HTMLDivElement | null>) => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

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

      const ghost = createGhostScene(anchor.group, scene, renderer, camera);

      anchor.onTargetFound = () => {
        setVisible(true);
      };
      
      anchor.onTargetLost = () => {
        setVisible(false);
      };

      await mindarThree.start();

      renderer.setAnimationLoop(() => {
        ghost.rotation.y += 0.02;
        renderer.render(scene, camera);
      });
    };

    start().then(() => setLoading(false));

  }, [ref]);

  return {
    loading,
    visible,
  }
};
