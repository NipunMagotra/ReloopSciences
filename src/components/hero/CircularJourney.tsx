"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface NodeData {
  label: string;
}

const NODES: NodeData[] = [
  { label: "LAB" },
  { label: "USE" },
  { label: "RECOVER" },
  { label: "PROCESS" },
  { label: "REUSE" },
];

const CENTER = 250;
const NODE_RADIUS = 170;
const NODE_CIRCLE_RADIUS = 35;
const INNER_RING_RADIUS = 60;
const DOT_RADIUS = NODE_RADIUS - NODE_CIRCLE_RADIUS; // 135

// Trail particles behind each node (angle offsets in degrees, behind the node)
const TRAIL_PARTICLES = [
  { angleBehind: 6, radius: NODE_RADIUS, size: 2.5, opacity: 0.35 },
  { angleBehind: 13, radius: NODE_RADIUS, size: 2, opacity: 0.2 },
  { angleBehind: 21, radius: NODE_RADIUS, size: 1.5, opacity: 0.1 },
];

// Pre-compute static node positions (in the rotating coordinate frame)
const NODE_POSITIONS = NODES.map((_, i) => {
  const angleDeg = i * 72 - 90;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    cx: CENTER + Math.cos(rad) * NODE_RADIUS,
    cy: CENTER + Math.sin(rad) * NODE_RADIUS,
  };
});

export function CircularJourney() {
  const orbitGroupRef = useRef<SVGGElement>(null);
  const counterRotateRefs = useRef<(SVGGElement | null)[]>([]);
  const centerIconRef = useRef<SVGGElement>(null);
  const trailRefs = useRef<(SVGCircleElement | null)[]>([]);

  const setCounterRef = useCallback(
    (el: SVGGElement | null, i: number) => {
      counterRotateRefs.current[i] = el;
    },
    []
  );

  const setTrailRef = useCallback(
    (el: SVGCircleElement | null, i: number) => {
      trailRefs.current[i] = el;
    },
    []
  );

  useEffect(() => {
    let orbitAngle = 0;
    let centerAngle = 0;
    let rafId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min(time - lastTime, 50); // cap delta to avoid jumps
      lastTime = time;

      // Orbit: full rotation in 30 seconds
      orbitAngle = (orbitAngle + (delta / 30000) * 360) % 360;
      // Center icon: full rotation in 4 seconds
      centerAngle = (centerAngle + (delta / 4000) * 360) % 360;

      // Rotate the entire orbit group using SVG native transform
      if (orbitGroupRef.current) {
        orbitGroupRef.current.setAttribute(
          "transform",
          `rotate(${orbitAngle}, ${CENTER}, ${CENTER})`
        );
      }

      // Counter-rotate each node to keep text upright
      counterRotateRefs.current.forEach((ref, i) => {
        if (ref) {
          const { cx, cy } = NODE_POSITIONS[i];
          ref.setAttribute(
            "transform",
            `rotate(${-orbitAngle}, ${cx}, ${cy})`
          );
        }
      });

      // Spin center icon
      if (centerIconRef.current) {
        centerIconRef.current.setAttribute(
          "transform",
          `rotate(${centerAngle}, ${CENTER}, ${CENTER})`
        );
      }

      // Update trailing particles
      trailRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const nodeIndex = Math.floor(idx / TRAIL_PARTICLES.length);
        const particleIndex = idx % TRAIL_PARTICLES.length;
        const particle = TRAIL_PARTICLES[particleIndex];

        // Node base angle + orbit rotation - trail offset
        const baseAngle = nodeIndex * 72 - 90 + orbitAngle;
        const trailAngle = baseAngle - particle.angleBehind;
        const rad = (trailAngle * Math.PI) / 180;

        const px = CENTER + Math.cos(rad) * particle.radius;
        const py = CENTER + Math.sin(rad) * particle.radius;

        ref.setAttribute("cx", String(px));
        ref.setAttribute("cy", String(py));
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="w-full max-w-[460px] lg:max-w-[480px] mx-auto bg-[#fcfbf9] p-5 sm:p-6 rounded-3xl border border-stone-200/60 shadow-sm flex items-center justify-center overflow-hidden">
      <svg
        viewBox="-40 -40 580 580"
        className="w-full h-auto select-none"
        aria-label="Circular process diagram: Lab, Use, Recover, Process, Reuse"
        role="img"
      >
        <defs>
          {/* Soft drop shadow for white node circles */}
          <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="6"
              floodColor="#134c2c"
              floodOpacity="0.08"
            />
          </filter>

          {/* Soft drop shadow for center ring */}
          <filter
            id="centerShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="5"
              floodColor="#f88a0d"
              floodOpacity="0.15"
            />
          </filter>

          {/* Glow filter for the orbital path */}
          <filter
            id="orbitPathGlow"
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
          >
            <feGaussianBlur stdDeviation="2" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial gradient for center pulsing glow */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff5ea" stopOpacity="1" />
            <stop offset="55%" stopColor="#fff5ea" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff5ea" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ═══════════════════════════════════════════════ */}
        {/* 1. BACKGROUND RINGS                            */}
        {/* ═══════════════════════════════════════════════ */}

        {/* Outermost dashed ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="215"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Inner solid ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="195"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Orbital track (dashed, shows where planets travel) */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={NODE_RADIUS}
          fill="none"
          stroke="#f88a0d"
          strokeWidth="1"
          strokeDasharray="6 8"
          opacity="0.18"
        />

        {/* Chevron direction indicators between the rings */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angleDeg = i * 72 - 54;
          const rad = (angleDeg * Math.PI) / 180;
          const cx = CENTER + Math.cos(rad) * 205;
          const cy = CENTER + Math.sin(rad) * 205;
          const arrowAngle = angleDeg + 90;

          return (
            <g
              key={`chevron-${i}`}
              transform={`translate(${cx}, ${cy}) rotate(${arrowAngle})`}
              opacity="0.6"
            >
              <path
                d="M -5 -4 L 0 4 L 5 -4"
                fill="none"
                stroke="#f88a0d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════ */}
        {/* 2. CENTRAL CORE (The "Sun")                    */}
        {/* ═══════════════════════════════════════════════ */}

        {/* Pulsing glow halo */}
        <circle cx={CENTER} cy={CENTER} r="105" fill="url(#centerGlow)">
          <animate
            attributeName="r"
            values="98;108;98"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Inner ring with white fill & orange stroke */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={INNER_RING_RADIUS}
          fill="#ffffff"
          stroke="#f88a0d"
          strokeWidth="2.5"
          filter="url(#centerShadow)"
        />

        {/* Rotating refresh-arrows icon */}
        <g ref={centerIconRef}>
          <g transform={`translate(${CENTER - 16}, ${CENTER - 16})`}>
            <path
              d="M28 16a12 12 0 0 0-12-12 13 13 0 0 0-9 3.6L3 11"
              fill="none"
              stroke="#f88a0d"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 4v7h7"
              fill="none"
              stroke="#f88a0d"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16a12 12 0 0 0 12 12 13 13 0 0 0 9-3.6L29 21"
              fill="none"
              stroke="#f88a0d"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 28h8v-7"
              fill="none"
              stroke="#f88a0d"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* ═══════════════════════════════════════════════ */}
        {/* 3. TRAILING PARTICLES (rendered behind nodes)   */}
        {/* ═══════════════════════════════════════════════ */}
        {NODES.map((_, nodeIdx) =>
          TRAIL_PARTICLES.map((particle, pIdx) => {
            // Initial positions (will be updated by rAF)
            const baseAngle = nodeIdx * 72 - 90 - particle.angleBehind;
            const rad = (baseAngle * Math.PI) / 180;
            const px = CENTER + Math.cos(rad) * particle.radius;
            const py = CENTER + Math.sin(rad) * particle.radius;
            const refIdx = nodeIdx * TRAIL_PARTICLES.length + pIdx;

            return (
              <circle
                key={`trail-${nodeIdx}-${pIdx}`}
                ref={(el) => setTrailRef(el, refIdx)}
                cx={px}
                cy={py}
                r={particle.size}
                fill="#f88a0d"
                opacity={particle.opacity}
              />
            );
          })
        )}

        {/* ═══════════════════════════════════════════════ */}
        {/* 4. PLANETARY ORBIT SYSTEM                       */}
        {/* ═══════════════════════════════════════════════ */}
        <g ref={orbitGroupRef}>
          {/* Connecting spokes (rendered behind nodes) */}
          {NODES.map((_, i) => {
            const angleDeg = i * 72 - 90;
            const rad = (angleDeg * Math.PI) / 180;
            const dotX = CENTER + Math.cos(rad) * DOT_RADIUS;
            const dotY = CENTER + Math.sin(rad) * DOT_RADIUS;
            const innerX = CENTER + Math.cos(rad) * INNER_RING_RADIUS;
            const innerY = CENTER + Math.sin(rad) * INNER_RING_RADIUS;

            return (
              <line
                key={`spoke-${i}`}
                x1={dotX}
                y1={dotY}
                x2={innerX}
                y2={innerY}
                stroke="#f88a0d"
                strokeWidth="1.5"
                opacity="0.5"
                strokeLinecap="round"
              />
            );
          })}

          {/* The 5 orbiting nodes ("planets") */}
          {NODES.map((node, i) => {
            const angleDeg = i * 72 - 90;
            const rad = (angleDeg * Math.PI) / 180;
            const cx = CENTER + Math.cos(rad) * NODE_RADIUS;
            const cy = CENTER + Math.sin(rad) * NODE_RADIUS;
            const dotX = CENTER + Math.cos(rad) * DOT_RADIUS;
            const dotY = CENTER + Math.sin(rad) * DOT_RADIUS;

            return (
              <g key={node.label}>
                {/* Counter-rotation group keeps text upright as orbit spins */}
                <g ref={(el) => setCounterRef(el, i)}>
                  {/* Subtle pulsing halo around each node */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={NODE_CIRCLE_RADIUS + 5}
                    fill="none"
                    stroke="#f88a0d"
                    strokeWidth="1"
                    opacity="0.12"
                  >
                    <animate
                      attributeName="r"
                      values={`${NODE_CIRCLE_RADIUS + 3};${NODE_CIRCLE_RADIUS + 8};${NODE_CIRCLE_RADIUS + 3}`}
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin={`${i * 0.5}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0.08;0.2;0.08"
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin={`${i * 0.5}s`}
                    />
                  </circle>

                  {/* White node circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={NODE_CIRCLE_RADIUS}
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                    filter="url(#nodeShadow)"
                  />

                  {/* Node label */}
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#134c2c"
                    fontSize="11"
                    fontWeight="800"
                    letterSpacing="0.08em"
                    fontFamily="var(--font-sans), system-ui, sans-serif"
                    className="select-none"
                  >
                    {node.label}
                  </text>
                </g>

                {/* Orange connection dot (stays in rotating frame) */}
                <circle cx={dotX} cy={dotY} r="3.5" fill="#f88a0d">
                  <animate
                    attributeName="r"
                    values="3;4.5;3"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.4}s`}
                  />
                </circle>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
