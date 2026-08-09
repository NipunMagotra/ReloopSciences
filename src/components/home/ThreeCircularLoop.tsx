"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Trash, Sparkles, RefreshCcw, PackageCheck } from "lucide-react";

interface StepData {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  color: string;
  hex: number;
  cssColor: string;
  badgeBg: string;
  iconType: "bin" | "wash" | "recycle" | "box";
  icon: React.ElementType;
}

const STEPS: StepData[] = [
  {
    id: 0,
    stepNumber: "01",
    title: "ReLoop Sciences Bins",
    description: "Segregated collection of non‑hazardous PP",
    color: "orange",
    hex: 0xf88a0d,
    cssColor: "#f88a0d",
    badgeBg: "bg-orange-500",
    iconType: "bin",
    icon: Trash,
  },
  {
    id: 1,
    stepNumber: "02",
    title: "Collection & Washing",
    description: "Clean, compliant material preparation",
    color: "blue",
    hex: 0x0284c7,
    cssColor: "#0284c7",
    badgeBg: "bg-[#0284c7]",
    iconType: "wash",
    icon: Sparkles,
  },
  {
    id: 2,
    stepNumber: "03",
    title: "Recycling",
    description: "High‑quality PP pellets",
    color: "green",
    hex: 0x2da021,
    cssColor: "#2da021",
    badgeBg: "bg-[#2da021]",
    iconType: "recycle",
    icon: RefreshCcw,
  },
  {
    id: 3,
    stepNumber: "04",
    title: "Manufacturing",
    description: "New lab products made from recycled PP",
    color: "purple",
    hex: 0x8b5cf6,
    cssColor: "#8b5cf6",
    badgeBg: "bg-[#8b5cf6]",
    iconType: "box",
    icon: PackageCheck,
  },
];

// Helper to generate custom Earth texture using user's SVG landmass shapes and ocean/land colors (#3344c1 / #7cc133)
function createStyledEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  // 1. Water color (--watercolor: #3344c1)
  ctx.fillStyle = "#3344c1";
  ctx.fillRect(0, 0, 1024, 512);

  // Subtle lat/long grid lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  for (let y = 0; y < 512; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }
  for (let x = 0; x < 1024; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 512);
    ctx.stroke();
  }

  // 2. Landmass color (--landcolor: #7cc133)
  ctx.fillStyle = "#7cc133";

  // SVG continent path definitions from user's custom loader
  const svgPaths = [
    "M29.4,-17.4C33.1,1.8,27.6,16.1,11.5,31.6C-4.7,47,-31.5,63.6,-43,56C-54.5,48.4,-50.7,16.6,-41,-10.9C-31.3,-38.4,-15.6,-61.5,-1.4,-61C12.8,-60.5,25.7,-36.5,29.4,-17.4Z",
    "M31.7,-55.8C40.3,-50,45.9,-39.9,49.7,-29.8C53.5,-19.8,55.5,-9.9,53.1,-1.4C50.6,7.1,43.6,14.1,41.8,27.6C40.1,41.1,43.4,61.1,37.3,67C31.2,72.9,15.6,64.8,1.5,62.2C-12.5,59.5,-25,62.3,-31.8,56.7C-38.5,51.1,-39.4,37.2,-49.3,26.3C-59.1,15.5,-78,7.7,-77.6,0.2C-77.2,-7.2,-57.4,-14.5,-49.3,-28.4C-41.2,-42.4,-44.7,-63,-38.5,-70.1C-32.2,-77.2,-16.1,-70.8,-2.3,-66.9C11.6,-63,23.1,-61.5,31.7,-55.8Z",
    "M30.6,-49.2C42.5,-46.1,57.1,-43.7,67.6,-35.7C78.1,-27.6,84.6,-13.8,80.3,-2.4C76.1,8.9,61.2,17.8,52.5,29.1C43.8,40.3,41.4,53.9,33.7,64C26,74.1,13,80.6,2.2,76.9C-8.6,73.1,-17.3,59,-30.6,52.1C-43.9,45.3,-61.9,45.7,-74.1,38.2C-86.4,30.7,-92.9,15.4,-88.6,2.5C-84.4,-10.5,-69.4,-20.9,-60.7,-34.6C-52.1,-48.3,-49.8,-65.3,-40.7,-70C-31.6,-74.8,-15.8,-67.4,-3.2,-61.8C9.3,-56.1,18.6,-52.3,30.6,-49.2Z",
    "M39.4,-66C48.6,-62.9,51.9,-47.4,52.9,-34.3C53.8,-21.3,52.4,-10.6,54.4,1.1C56.3,12.9,61.7,25.8,57.5,33.2C53.2,40.5,39.3,42.3,28.2,46C17,49.6,8.5,55.1,1.3,52.8C-5.9,50.5,-11.7,40.5,-23.6,37.2C-35.4,34,-53.3,37.5,-62,32.4C-70.7,27.4,-70.4,13.7,-72.4,-1.1C-74.3,-15.9,-78.6,-31.9,-73.3,-43C-68.1,-54.2,-53.3,-60.5,-39.5,-60.9C-25.7,-61.4,-12.9,-56,1.1,-58C15.1,-59.9,30.2,-69.2,39.4,-66Z"
  ];

  // Tile continents across texture map
  const landPositions = [
    { x: 180, y: 150, scale: 1.8 },
    { x: 450, y: 320, scale: 2.2 },
    { x: 720, y: 190, scale: 2.4 },
    { x: 900, y: 350, scale: 1.7 },
    { x: 300, y: 380, scale: 1.5 },
    { x: 600, y: 120, scale: 1.9 },
  ];

  landPositions.forEach((pos, idx) => {
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.scale(pos.scale, pos.scale);
    const path = new Path2D(svgPaths[idx % svgPaths.length]);
    ctx.fill(path);
    ctx.restore();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Icon Sprite Generator (White Disc with Clean Vector Icon)
function createIconSpriteTexture(type: "bin" | "wash" | "recycle" | "box", colorCss: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;

  ctx.clearRect(0, 0, 128, 128);

  ctx.beginPath();
  ctx.arc(64, 64, 48, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0,0,0,0.15)";
  ctx.shadowBlur = 10;
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.strokeStyle = colorCss;
  ctx.fillStyle = colorCss;
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (type === "bin") {
    ctx.beginPath();
    ctx.moveTo(42, 50);
    ctx.lineTo(86, 50);
    ctx.moveTo(48, 50);
    ctx.lineTo(51, 86);
    ctx.lineTo(77, 86);
    ctx.lineTo(80, 50);
    ctx.moveTo(56, 50);
    ctx.lineTo(56, 42);
    ctx.lineTo(72, 42);
    ctx.lineTo(72, 50);
    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(60, 58);
    ctx.lineTo(60, 78);
    ctx.moveTo(68, 58);
    ctx.lineTo(68, 78);
    ctx.stroke();
  } else if (type === "wash") {
    ctx.beginPath();
    ctx.moveTo(64, 34);
    ctx.quadraticCurveTo(64, 64, 94, 64);
    ctx.quadraticCurveTo(64, 64, 64, 94);
    ctx.quadraticCurveTo(64, 64, 34, 64);
    ctx.quadraticCurveTo(64, 64, 64, 34);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(40, 40, 5, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "recycle") {
    ctx.beginPath();
    ctx.arc(64, 64, 25, 0, Math.PI * 1.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(88, 52);
    ctx.lineTo(88, 68);
    ctx.lineTo(72, 68);
    ctx.stroke();
  } else if (type === "box") {
    ctx.strokeRect(42, 44, 44, 40);
    ctx.moveTo(42, 56);
    ctx.lineTo(86, 56);
    ctx.moveTo(64, 56);
    ctx.lineTo(64, 84);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function ThreeCircularLoop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const activeStepRef = useRef<number>(0);
  const targetAngleRef = useRef<number>(0);
  const isInteractingRef = useRef<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 580;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 1.8, 13.5);

    // 2. Renderer Setup with Soft Shadows
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.minPolarAngle = Math.PI / 4;
    controls.minDistance = 8;
    controls.maxDistance = 20;

    controls.addEventListener("start", () => {
      isInteractingRef.current = true;
    });
    controls.addEventListener("end", () => {
      isInteractingRef.current = false;
    });

    // 4. Photorealistic Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(12, 18, 12);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    scene.add(dirLight1);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.8);
    fillLight.position.set(-12, -10, -10);
    scene.add(fillLight);

    const greenPointLight = new THREE.PointLight(0x7cc133, 2.5, 25);
    greenPointLight.position.set(0, 0, 0);
    scene.add(greenPointLight);

    // 5. Central System Group
    const loopGroup = new THREE.Group();
    scene.add(loopGroup);

    // 6. Photorealistic 3D EARTH Globe with User's Custom SVG Landmass & Water colors
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (23.4 * Math.PI) / 180;
    loopGroup.add(earthGroup);

    // Custom Styled Earth Globe Mesh
    const earthGeo = new THREE.SphereGeometry(2.3, 64, 64);
    const earthTexture = createStyledEarthTexture();
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.3,
      metalness: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthMesh.castShadow = true;
    earthMesh.receiveShadow = true;
    earthGroup.add(earthMesh);

    // GREEN GEOMETRIC WIREFRAME GEODESIC CAGE (Fully Encasing Earth)
    const cageGeo = new THREE.IcosahedronGeometry(2.48, 2);
    const cageMat = new THREE.MeshStandardMaterial({
      color: 0x7cc133,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.4,
      emissive: 0x7cc133,
      emissiveIntensity: 0.3,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    earthGroup.add(cageMesh);

    // Atmospheric Glow Halo
    const haloGeo = new THREE.SphereGeometry(2.55, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x3344c1,
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    earthGroup.add(haloMesh);

    // 7. Curved Orbital Path Line
    const ORBIT_RADIUS = 5.2;
    const ringGeo = new THREE.RingGeometry(ORBIT_RADIUS - 0.03, ORBIT_RADIUS + 0.03, 128);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x7cc133,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    loopGroup.add(ringMesh);

    // 8. 4 Orbiting Glossy Planet Spheres with Inset Functional Icons
    const nodesGroup = new THREE.Group();
    loopGroup.add(nodesGroup);

    const nodeMeshes: THREE.Mesh[] = [];

    STEPS.forEach((step, i) => {
      const angle = (i * Math.PI * 2) / STEPS.length;
      const x = Math.cos(angle) * ORBIT_RADIUS;
      const z = Math.sin(angle) * ORBIT_RADIUS;

      // Glossy Planet Sphere
      const nodeGeo = new THREE.SphereGeometry(0.7, 32, 32);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: step.hex,
        roughness: 0.15,
        metalness: 0.2,
        emissive: step.hex,
        emissiveIntensity: 0.35,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, 0, z);
      nodeMesh.castShadow = true;
      nodeMesh.userData = { stepIndex: i };

      // Billboarded 2D Function Icon Sprite centered on Planet
      const iconTexture = createIconSpriteTexture(step.iconType, step.cssColor);
      const spriteMat = new THREE.SpriteMaterial({
        map: iconTexture,
        transparent: true,
        depthTest: false,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.95, 0.95, 1);
      sprite.userData = { stepIndex: i };
      nodeMesh.add(sprite);

      nodesGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);
    });

    // 9. Colorful Particles Along the Orbital Path
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [0xf88a0d, 0x7cc133, 0x0284c7, 0x8b5cf6];

    for (let i = 0; i < particleCount; i++) {
      const pAngle = Math.random() * Math.PI * 2;
      const pRadius = ORBIT_RADIUS + (Math.random() - 0.5) * 0.7;
      const px = Math.cos(pAngle) * pRadius;
      const py = (Math.random() - 0.5) * 0.5;
      const pz = Math.sin(pAngle) * pRadius;

      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;

      const c = palette[i % palette.length];
      const colorObj = new THREE.Color(c);
      colors[i * 3] = colorObj.r;
      colors[i * 3 + 1] = colorObj.g;
      colors[i * 3 + 2] = colorObj.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    loopGroup.add(particles);

    // 10. Raycasting for Direct Planet Clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes, true);

      if (intersects.length > 0) {
        const hitObj = intersects[0].object;
        let stepIdx = hitObj.userData.stepIndex;
        if (stepIdx === undefined && hitObj.parent) {
          stepIdx = hitObj.parent.userData.stepIndex;
        }

        if (stepIdx !== undefined) {
          targetAngleRef.current = -stepIdx * (Math.PI / 2);
          activeStepRef.current = stepIdx;
          setActiveStep(stepIdx);
        }
      }
    };

    renderer.domElement.addEventListener("click", handleCanvasClick);

    // 11. Mouse Wheel Scroll Interaction
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetAngleRef.current += e.deltaY * 0.002;
    };
    renderer.domElement.addEventListener("wheel", handleWheel, { passive: false });

    // 12. Resize Listener
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 580;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 13. Animation Loop
    let animationFrameId: number;
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Automatic Solar Orbit Rotation
      if (!isInteractingRef.current) {
        loopGroup.rotation.y += 0.0035;
      }

      // Earth & Cage Rotation
      earthMesh.rotation.y += 0.004;
      cageMesh.rotation.y += 0.003;
      particles.rotation.y += 0.002;

      // Detect which 3D planet node is closest to the camera (highest Z position in world space)
      let frontmostIdx = 0;
      let maxZ = -Infinity;

      nodeMeshes.forEach((mesh, idx) => {
        mesh.rotation.y += 0.01;
        mesh.getWorldPosition(tempVec);
        if (tempVec.z > maxZ) {
          maxZ = tempVec.z;
          frontmostIdx = idx;
        }

        // Pulse scale based on active frontmost status
        const isFront = frontmostIdx === idx;
        const targetScale = isFront ? 1.35 : 0.95;
        mesh.scale.x += (targetScale - mesh.scale.x) * 0.1;
        mesh.scale.y += (targetScale - mesh.scale.y) * 0.1;
        mesh.scale.z += (targetScale - mesh.scale.z) * 0.1;
      });

      // Dynamically update active step UI card when planet comes to front
      if (frontmostIdx !== activeStepRef.current) {
        activeStepRef.current = frontmostIdx;
        setActiveStep(frontmostIdx);
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("click", handleCanvasClick);
      renderer.domElement.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const currentStep = STEPS[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-[520px] sm:h-[580px] relative rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing select-none border-2 border-emerald-950/15 bg-gradient-to-b from-white/70 via-white/40 to-white/70 backdrop-blur-sm shadow-xl shadow-emerald-950/5"
      >
        {/* Dynamic Active Step Glass Card (Driven by 3D Model Frontmost Node) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-lg pointer-events-auto">
          <div
            className="p-6 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-xl border-2 shadow-2xl transition-all duration-300 flex items-start gap-4"
            style={{ borderColor: currentStep.cssColor }}
          >
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl text-white flex items-center justify-center flex-shrink-0 shadow-lg ${currentStep.badgeBg}`}
            >
              <StepIcon size={26} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-md text-white shadow-xs"
                  style={{ backgroundColor: currentStep.cssColor }}
                >
                  Step {currentStep.stepNumber}
                </span>
                <span className="text-xs font-bold text-gray-400">
                  Active 3D Stage
                </span>
              </div>
              <h4 className="text-xl font-bold text-[#134c2c] mb-1">
                {currentStep.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentStep.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
