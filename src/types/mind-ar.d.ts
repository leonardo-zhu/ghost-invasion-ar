declare module 'mind-ar/dist/mindar-image-three.prod.js' {
  import * as THREE from 'three';

  interface MindARThreeConfig {
    container: HTMLElement;
    imageTargetSrc: string;
    maxTrack?: number;
    filterMinCF?: number;
    filterBeta?: number;
    warmupTolerance?: number;
    missTolerance?: number;
    backend?: 'wasm' | 'webgl';
  }

  interface MindARAnchor {
    group: THREE.Group;
    onTargetFound: () => void;
    onTargetLost: () => void;
    onTargetUpdate: () => void;
  }

  interface StartResult {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
  }

  export class MindARThree {
    constructor(config: MindARThreeConfig);

    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;

    start(): Promise<StartResult>;
    stop(): Promise<void>;

    addAnchor(index: number): {
      group: THREE.Group;
      onTargetFound?: () => void;
      onTargetLost?: () => void;
    };
  }
}
