import * as THREE from "three";
import { RefObject, useEffect, useState } from "react";
import createGhostScene from "@/lib/createGhostScene";

export const useMindAR = (ref: RefObject<HTMLDivElement | null>) => {
  const [loading, setLoading] = useState(true);

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

      const ghost = createGhostScene(anchor.group, scene);

      anchor.onTargetFound = () => console.log("识别到了 marker 图像！");
      anchor.onTargetLost = () => console.log("marker 图像丢失");

      await mindarThree.start();

      renderer.setAnimationLoop(() => {
        ghost.rotation.y += 0.02;
        renderer.render(scene, camera);
      });

      // 添加点击交互逻辑
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      
      renderer.domElement.addEventListener("click", (event) => {
        console.log('click');

        const bounds = renderer.domElement.getBoundingClientRect();

        pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObject(ghost, true);

        if (intersects.length > 0) {
          alert("你点击了模型！");
        }
      });
    };

    start().then(() => setLoading(false));

  }, [ref]);

  return {
    loading
  }
};
