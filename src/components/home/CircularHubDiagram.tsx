"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { RefreshCw } from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  angleDeg: number;
  description: string;
}

const NODES: NodeData[] = [
  { id: "lab", label: "LAB", angleDeg: -90, description: "Segregated non-hazardous laboratory collection" },
  { id: "use", label: "USE", angleDeg: -18, description: "Standard single-use plastic consumables" },
  { id: "recover", label: "RECOVER", angleDeg: 54, description: "Decontamination and compliant prep" },
  { id: "process", label: "PROCESS", angleDeg: 126, description: "High-grade polymer pellet recycling" },
  { id: "reuse", label: "REUSE", angleDeg: 198, description: "Manufacturing clean circular lab products" },
];

export function CircularHubDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const cx = 300;
  const cy = 300;
  const orbitRadiusInner = 140;
  const orbitRadiusOuter = 205;

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center">
      {/* Header Title */}
      <div className="text-center mb-6 space-y-2">
        <span className="eyebrow block">Hub & Spoke Model</span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#134c2c]">
          Circular Polymer Lifecycle
        </h3>
      </div>

      {/* SVG Container */}
      <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center select-none">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Soft Shadow Filter for Satellite & Center Nodes */}
            <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#134c2c" floodOpacity="0.12" />
            </filter>
            <filter id="nodeShadowHover" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#f88a0d" floodOpacity="0.3" />
            </filter>

            {/* Clockwise rotating dash animation keyframes via SVG CSS */}
            <style>{`
              @keyframes rotateDashClockwise {
                from { stroke-dashoffset: 0; }
                to { stroke-dashoffset: -40; }
              }
              .orbit-ring-animated {
                animation: rotateDashClockwise 8s linear infinite;
              }
              @keyframes slowSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .spin-slow {
                transform-origin: 300px 300px;
                animation: slowSpin 16s linear infinite;
              }
            `}</style>
          </defs>

          {/* 1. Concentric Animated Dashed Orbital Rings (Clockwise rotation) */}
          <circle
            cx={cx}
            cy={cy}
            r={orbitRadiusInner}
            fill="none"
            stroke="#2da021"
            strokeWidth="2"
            strokeDasharray="8 8"
            opacity="0.35"
            className="orbit-ring-animated"
          />
          <circle
            cx={cx}
            cy={cy}
            r={orbitRadiusOuter}
            fill="none"
            stroke="#f88a0d"
            strokeWidth="2"
            strokeDasharray="10 8"
            opacity="0.4"
            className="orbit-ring-animated"
          />

          {/* Clockwise Orbit Direction Chevrons along Outer Ring */}
          {[36, 108, 180, 252, 324].map((deg, idx) => {
            const rad = (deg * Math.PI) / 180;
            const x = cx + orbitRadiusOuter * Math.cos(rad);
            const y = cy + orbitRadiusOuter * Math.sin(rad);
            return (
              <g
                key={`chevron-${idx}`}
                transform={`translate(${x}, ${y}) rotate(${deg + 90})`}
                opacity="0.6"
              >
                <path
                  d="M-5 -4 L0 2 L5 -4"
                  fill="none"
                  stroke="#f88a0d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            );
          })}

          {/* 2. Connecting Straight Lines Radiating from Center Node to Satellite Nodes */}
          {NODES.map((node) => {
            const rad = (node.angleDeg * Math.PI) / 180;
            const nx = cx + orbitRadiusOuter * Math.cos(rad);
            const ny = cy + orbitRadiusOuter * Math.sin(rad);
            const isHovered = hoveredNode === node.id;

            return (
              <line
                key={`line-${node.id}`}
                x1={cx}
                y1={cy}
                x2={nx}
                y2={ny}
                stroke={isHovered ? "#f88a0d" : "#f88a0d"}
                strokeWidth={isHovered ? "3.5" : "2.5"}
                strokeDasharray={isHovered ? "none" : "6 4"}
                opacity={isHovered ? "1" : "0.75"}
                className="transition-all duration-300"
              />
            );
          })}

          {/* 3. Central Node with Spinning Refresh/Cycle Icon */}
          <g filter="url(#nodeShadow)">
            <circle
              cx={cx}
              cy={cy}
              r="46"
              fill="#ffffff"
              stroke="#f88a0d"
              strokeWidth="4"
            />
            {/* Spinning Refresh Icon */}
            <g className="spin-slow">
              <foreignObject x={cx - 20} y={cy - 20} width="40" height="40">
                <div className="w-full h-full flex items-center justify-center text-[#f88a0d]">
                  <RefreshCw size={28} className="stroke-[2.5]" />
                </div>
              </foreignObject>
            </g>
          </g>

          {/* 4. 5 Satellite Nodes ('LAB', 'USE', 'RECOVER', 'PROCESS', 'REUSE') */}
          {NODES.map((node) => {
            const rad = (node.angleDeg * Math.PI) / 180;
            const nx = cx + orbitRadiusOuter * Math.cos(rad);
            const ny = cy + orbitRadiusOuter * Math.sin(rad);
            const isHovered = hoveredNode === node.id;

            return (
              <g
                key={`satellite-${node.id}`}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer group"
                style={{
                  transformOrigin: `${nx}px ${ny}px`,
                  transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: isHovered ? "scale(1.18)" : "scale(1)",
                }}
                filter={isHovered ? "url(#nodeShadowHover)" : "url(#nodeShadow)"}
              >
                {/* Satellite Outer Ring Glow */}
                <circle
                  cx={nx}
                  cy={ny}
                  r="40"
                  fill="#ffffff"
                  stroke={isHovered ? "#f88a0d" : "#134c2c"}
                  strokeWidth={isHovered ? "4" : "3"}
                  className="transition-colors duration-300"
                />

                {/* Node Label Text */}
                <text
                  x={nx}
                  y={ny}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isHovered ? "#f88a0d" : "#134c2c"}
                  className="font-sans font-extrabold text-[13px] tracking-wider transition-colors duration-300 select-none"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Dynamic Hover Description Bar */}
      <div className="mt-4 min-h-[50px] flex items-center justify-center text-center">
        {hoveredNode ? (
          <motion.div
            key={hoveredNode}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 py-2 rounded-full bg-emerald-950/5 border border-emerald-800/10 text-xs font-semibold text-[#134c2c]"
          >
            <span className="text-[#f88a0d] font-bold mr-1.5 uppercase">
              {NODES.find((n) => n.id === hoveredNode)?.label}:
            </span>
            {NODES.find((n) => n.id === hoveredNode)?.description}
          </motion.div>
        ) : (
          <p className="text-xs text-gray-400 font-medium">
            Hover over any satellite node to explore the step details
          </p>
        )}
      </div>
    </div>
  );
}
