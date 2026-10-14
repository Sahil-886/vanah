"use client";

import React, { useMemo } from "react";
import {
  createRNG,
  lines,
  curve,
  leaf,
  canopy,
  scallopRow,
  sun,
  bird,
  grassTuft,
  Point,
} from "../../lib/lineart";

export interface HeroSceneProps {
  className?: string;
  fillColor?: string; // Occluder background
  strokeColor?: string;
}

export const HeroScene: React.FC<HeroSceneProps> = ({
  className = "",
  fillColor = "#4D5A4C", // placemat sage
  strokeColor = "#EDE7DA", // line
}) => {
  // Pre-generate static procedural elements with deterministic seeds
  const sceneData = useMemo(() => {
    const rng = createRNG(1984);

    // 1. Ground curve across
    const groundPts: Point[] = [
      [0, 578],
      [200, 576],
      [450, 579],
      [700, 577],
      [950, 578],
      [1200, 576],
      [1450, 579],
      [1600, 578],
    ];
    const groundPath = curve(groundPts, 0.4, rng);

    // Grass tufts
    const grassX = [80, 240, 420, 680, 920, 1150, 1380, 1520];
    const tufts = grassX.map((x) => grassTuft(x, 578));

    // 2. Tree 1 (Big tree on right, behind cottage)
    const tree1Blobs = [
      { cx: 1240, cy: 200, rx: 165, ry: 92 },
      { cx: 1130, cy: 258, rx: 105, ry: 66 },
      { cx: 1350, cy: 246, rx: 115, ry: 76 },
      { cx: 1250, cy: 138, rx: 95, ry: 58 },
    ];
    const tree1Leaves = canopy(tree1Blobs, 210, createRNG(333));
    const tree1Trunk = curve(
      [
        [1240, 578],
        [1245, 450],
        [1240, 320],
        [1235, 230],
      ],
      0.8,
      rng
    );
    const tree1Branch = curve(
      [
        [1240, 360],
        [1170, 310],
        [1120, 270],
      ],
      0.8,
      rng
    );

    // Tree 2 (Smaller on left, kept low)
    const tree2Blobs = [{ cx: 600, cy: 320, rx: 100, ry: 52 }];
    const tree2Leaves = canopy(tree2Blobs, 95, createRNG(555));
    const tree2Trunk = curve(
      [
        [600, 578],
        [605, 480],
        [600, 370],
      ],
      0.7,
      rng
    );

    // 3. Cottage
    // Hip roof: eave y382 from x655 to 1165, ridge y300 from x765 to 1055
    const roofOutlinePts: Point[] = [
      [655, 382],
      [765, 300],
      [1055, 300],
      [1165, 382],
      [655, 382],
    ];
    const roofOutline = lines(roofOutlinePts, 0.4, 20, rng);

    // Mangalore Scallop Tiles: every 11.5px between 300 and 382
    const tileRows: string[] = [];
    for (let y = 312; y <= 380; y += 11.5) {
      const frac = (y - 300) / 82;
      const startX = 765 - frac * (765 - 655);
      const endX = 1055 + frac * (1165 - 1055);
      tileRows.push(scallopRow(startX, endX, y, 14, 5.5));
    }

    // Cottage walls: x700 to 1120, y390 to 578
    const cottageWallPts: Point[] = [
      [700, 382],
      [700, 578],
      [1120, 578],
      [1120, 382],
      [700, 382],
    ];
    const cottageWalls = lines(cottageWallPts, 0.4, 26, rng);

    // Two windows: (x738, y420, 80x96) and (x1002, y420, 80x96)
    const window1Outer = lines(
      [
        [738, 420],
        [818, 420],
        [818, 516],
        [738, 516],
        [738, 420],
      ],
      0.3,
      20,
      rng
    );
    const window1Inner = lines(
      [
        [742, 424],
        [814, 424],
        [814, 512],
        [742, 512],
        [742, 424],
      ],
      0.3,
      20,
      rng
    );
    // Transom at 36% (y455) & Mullion (x778)
    const window1Transom = lines([[742, 455], [814, 455]], 0.2, 20, rng);
    const window1Mullion = lines([[778, 424], [778, 512]], 0.2, 20, rng);

    const window2Outer = lines(
      [
        [1002, 420],
        [1082, 420],
        [1082, 516],
        [1002, 516],
        [1002, 420],
      ],
      0.3,
      20,
      rng
    );
    const window2Inner = lines(
      [
        [1006, 424],
        [1078, 424],
        [1078, 512],
        [1006, 512],
        [1006, 424],
      ],
      0.3,
      20,
      rng
    );
    const window2Transom = lines([[1006, 455], [1078, 455]], 0.2, 20, rng);
    const window2Mullion = lines([[1042, 424], [1042, 512]], 0.2, 20, rng);

    // Arched double-line door: x872 to 948, y440 to 578
    const doorOuter = `M 872 578 L 872 470 A 38 38 0 0 1 948 470 L 948 578 Z`;
    const doorInner = `M 876 578 L 876 472 A 34 34 0 0 1 944 472 L 944 578 Z`;
    const doorPlank1 = lines([[898, 450], [898, 578]], 0.2, 20, rng);
    const doorPlank2 = lines([[922, 450], [922, 578]], 0.2, 20, rng);

    // Door steps
    const step1 = lines([[864, 572], [956, 572], [956, 578], [864, 578], [864, 572]], 0.3, 15, rng);
    const step2 = lines([[856, 575], [964, 575], [964, 578], [856, 578]], 0.3, 15, rng);

    // Wall lamp
    const lamp = lines([[862, 450], [852, 450], [852, 460], [858, 466], [846, 466], [852, 460]], 0.3, 10, rng);

    // 4. Boundary walls & pillars
    // Left wall: x498 to 776, top y522
    const wallLeft = lines(
      [
        [498, 578],
        [498, 522],
        [776, 522],
        [776, 578],
      ],
      0.3,
      20,
      rng
    );
    // Right wall: x1044 to 1322, top y522
    const wallRight = lines(
      [
        [1044, 578],
        [1044, 522],
        [1322, 522],
        [1322, 578],
      ],
      0.3,
      20,
      rng
    );

    // Pots on walls
    const potMaker = (x: number, y: number) => {
      const potBody = lines(
        [
          [x - 8, y],
          [x + 8, y],
          [x + 6, y + 14],
          [x - 6, y + 14],
          [x - 8, y],
        ],
        0.2,
        8,
        rng
      );
      const leaves = [
        leaf(x, y, 10, -Math.PI * 0.5, 0.3, rng),
        leaf(x - 2, y, 9, -Math.PI * 0.7, 0.3, rng),
        leaf(x + 2, y, 9, -Math.PI * 0.3, 0.3, rng),
      ];
      return { potBody, leaves };
    };

    const leftPots = [potMaker(550, 508), potMaker(630, 508), potMaker(710, 508)];
    const rightPots = [potMaker(1110, 508), potMaker(1190, 508), potMaker(1270, 508)];

    // 5. Buddha Fountain (centre x290)
    const fountainBase = lines(
      [
        [240, 578],
        [240, 565],
        [340, 565],
        [340, 578],
      ],
      0.3,
      15,
      rng
    );
    const fountainPedestal = lines(
      [
        [255, 565],
        [262, 500],
        [318, 500],
        [325, 565],
      ],
      0.3,
      15,
      rng
    );
    const fountainBowl = `M 245 500 C 245 530, 335 530, 335 500 Z`;
    // Seated Buddha figure
    const buddhaLegs = `M 268 496 Q 290 502, 312 496 Z`;
    const buddhaTorso = `M 276 496 Q 272 468, 290 460 Q 308 468, 304 496 Z`;
    const buddhaHead = `M 290 446 m -7 0 a 7 7 0 1 0 14 0 a 7 7 0 1 0 -14 0`;
    const buddhaUshnisha = `M 288 438 Q 290 435, 292 438 Z`;

    // Water drips
    const waterDrips = lines([[245, 505], [245, 520]], 0.2, 5, rng) +
      " " + lines([[335, 505], [335, 520]], 0.2, 5, rng);

    // Leaves behind fountain (Banana & Elephant-ear)
    const banana1 = leaf(250, 560, 85, -Math.PI * 0.65, 0.35, rng);
    const banana2 = leaf(330, 560, 90, -Math.PI * 0.38, 0.35, rng);
    const ear1 = leaf(280, 540, 60, -Math.PI * 0.55, 0.45, rng);

    // 6. Pergola (x1340 to 1596)
    const pergolaPostLeft = lines([[1340, 578], [1340, 410]], 0.3, 20, rng);
    const pergolaPostRight = lines([[1580, 578], [1580, 410]], 0.3, 20, rng);
    const pergolaBeam = lines(
      [
        [1320, 410],
        [1600, 410],
        [1600, 418],
        [1320, 418],
        [1320, 410],
      ],
      0.3,
      20,
      rng
    );
    // Rafter ends
    const rafters = [1350, 1390, 1430, 1470, 1510, 1550].map((rx) =>
      lines([[rx, 404], [rx + 12, 404], [rx + 12, 410], [rx, 410], [rx, 404]], 0.2, 8, rng)
    );
    // Bunting catenary
    const buntingLine = curve([[1340, 425], [1460, 445], [1580, 425]], 0.3, rng);
    // Bunting flags
    const flags = [1370, 1400, 1430, 1460, 1490, 1520, 1550].map((fx) => {
      const fy = 425 + 20 * (1 - Math.pow((fx - 1460) / 120, 2));
      return `M ${fx - 6} ${fy} L ${fx + 6} ${fy} L ${fx} ${fy + 10} Z`;
    });

    // Cafe table and chairs
    const tableTop = lines([[1435, 535], [1485, 535]], 0.2, 10, rng);
    const tableLeg = lines([[1460, 535], [1460, 578]], 0.2, 10, rng);
    const chairLeft = lines([[1415, 545], [1430, 545], [1420, 578]], 0.2, 10, rng);
    const chairRight = lines([[1505, 545], [1490, 545], [1500, 578]], 0.2, 10, rng);

    // Vine climbing left post
    const vine = curve(
      [
        [1340, 578],
        [1344, 520],
        [1338, 470],
        [1342, 420],
      ],
      0.6,
      rng
    );

    // 7. Sky: Sun & Birds
    const sunData = sun(1480, 100, 22, 8, 6);
    const birds = [bird(1320, 95, 14), bird(1360, 80, 12)];

    return {
      groundPath,
      tufts,
      tree1Leaves,
      tree1Trunk,
      tree1Branch,
      tree2Leaves,
      tree2Trunk,
      roofOutline,
      tileRows,
      cottageWalls,
      window1Outer,
      window1Inner,
      window1Transom,
      window1Mullion,
      window2Outer,
      window2Inner,
      window2Transom,
      window2Mullion,
      doorOuter,
      doorInner,
      doorPlank1,
      doorPlank2,
      step1,
      step2,
      lamp,
      wallLeft,
      wallRight,
      leftPots,
      rightPots,
      fountainBase,
      fountainPedestal,
      fountainBowl,
      buddhaLegs,
      buddhaTorso,
      buddhaHead,
      buddhaUshnisha,
      waterDrips,
      banana1,
      banana2,
      ear1,
      pergolaPostLeft,
      pergolaPostRight,
      pergolaBeam,
      rafters,
      buntingLine,
      flags,
      tableTop,
      tableLeg,
      chairLeft,
      chairRight,
      vine,
      sunData,
      birds,
    };
  }, []);

  return (
    <svg
      viewBox="0 0 1600 600"
      preserveAspectRatio="xMidYMax meet"
      className={`w-full h-auto overflow-visible select-none pointer-events-none ${className}`}
      style={
        {
          "--fill": fillColor,
          stroke: strokeColor,
          maxWidth: "none",
        } as React.CSSProperties
      }
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      aria-hidden="true"
    >
      {/* GROUP 1: Ground line (0s) */}
      <g className="d" style={{ "--d": "0s", "--t": "1.2s" } as React.CSSProperties}>
        <path d={sceneData.groundPath} pathLength="1" />
        {sceneData.tufts.map((t, idx) => (
          <path key={idx} d={t} pathLength="1" />
        ))}
      </g>

      {/* GROUP 2: Trunks (.25s) */}
      <g className="d" style={{ "--d": "0.25s", "--t": "1.2s" } as React.CSSProperties}>
        <path d={sceneData.tree1Trunk} strokeWidth={2.4} pathLength="1" />
        <path d={sceneData.tree1Branch} strokeWidth={1.8} pathLength="1" />
        <path d={sceneData.tree2Trunk} strokeWidth={2.2} pathLength="1" />
      </g>

      {/* GROUP 3: Cottage Walls & Roof Occluder (.45s) */}
      <g className="d" style={{ "--d": "0.45s", "--t": "1.3s" } as React.CSSProperties}>
        {/* Wall occluder so trees behind are hidden */}
        <polygon points="700,382 700,578 1120,578 1120,382" fill="var(--fill)" stroke="none" />
        <polygon points="655,382 765,300 1055,300 1165,382" fill="var(--fill)" stroke="none" />
        <path d={sceneData.cottageWalls} pathLength="1" />
        <path d={sceneData.roofOutline} strokeWidth={2.2} pathLength="1" />
      </g>

      {/* GROUP 4: Boundary Walls (.7s) */}
      <g className="d" style={{ "--d": "0.7s", "--t": "1.1s" } as React.CSSProperties}>
        {/* Wall occluders */}
        <rect x="498" y="522" width="278" height="56" fill="var(--fill)" stroke="none" />
        <rect x="1044" y="522" width="278" height="56" fill="var(--fill)" stroke="none" />
        <path d={sceneData.wallLeft} pathLength="1" />
        <path d={sceneData.wallRight} pathLength="1" />
        {/* VANAH on right wall */}
        <text
          x="1183"
          y="556"
          fill={strokeColor}
          stroke="none"
          fontFamily="var(--font-sans)"
          fontSize="11"
          letterSpacing="0.28em"
          textAnchor="middle"
        >
          VANAH
        </text>
      </g>

      {/* GROUP 5: Foliage behind Fountain (.8s) */}
      <g className="d" style={{ "--d": "0.8s", "--t": "1s" } as React.CSSProperties}>
        <path d={sceneData.banana1} pathLength="1" />
        <path d={sceneData.banana2} pathLength="1" />
        <path d={sceneData.ear1} pathLength="1" />
      </g>

      {/* GROUP 6: Tree Canopies (.9s) */}
      <g className="d" style={{ "--d": "0.9s", "--t": "1.2s" } as React.CSSProperties}>
        {sceneData.tree1Leaves.map((l, idx) => (
          <path key={`t1-${idx}`} d={l} pathLength="1" strokeWidth={1.3} />
        ))}
        {sceneData.tree2Leaves.map((l, idx) => (
          <path key={`t2-${idx}`} d={l} pathLength="1" strokeWidth={1.3} />
        ))}
      </g>

      {/* GROUP 7: Roof Scallop Tiles (.95s) */}
      <g className="d" style={{ "--d": "0.95s", "--t": "1.1s" } as React.CSSProperties}>
        {sceneData.tileRows.map((r, idx) => (
          <path key={`tile-${idx}`} d={r} pathLength="1" strokeWidth={1.4} />
        ))}
      </g>

      {/* GROUP 8: Pergola & Outdoor Dining (.95s) */}
      <g className="d" style={{ "--d": "0.95s", "--t": "1.1s" } as React.CSSProperties}>
        <path d={sceneData.pergolaPostLeft} strokeWidth={2.2} pathLength="1" />
        <path d={sceneData.pergolaPostRight} strokeWidth={2.2} pathLength="1" />
        <path d={sceneData.pergolaBeam} strokeWidth={2} pathLength="1" />
        {sceneData.rafters.map((raf, idx) => (
          <path key={`raf-${idx}`} d={raf} pathLength="1" />
        ))}
      </g>

      {/* GROUP 9: Buddha Fountain (1.05s) */}
      <g className="d" style={{ "--d": "1.05s", "--t": "1.1s" } as React.CSSProperties}>
        {/* Fountain occluder */}
        <path
          d="M 240 578 L 240 500 C 240 530, 340 530, 340 500 L 340 578 Z"
          fill="var(--fill)"
          stroke="none"
        />
        <path d={sceneData.fountainBase} pathLength="1" />
        <path d={sceneData.fountainPedestal} pathLength="1" />
        <path d={sceneData.fountainBowl} pathLength="1" strokeWidth={2} />
        <path d={sceneData.buddhaLegs} pathLength="1" />
        <path d={sceneData.buddhaTorso} pathLength="1" />
        <path d={sceneData.buddhaHead} pathLength="1" />
        <path d={sceneData.buddhaUshnisha} pathLength="1" />
        <path d={sceneData.waterDrips} pathLength="1" strokeDasharray="3 3" />
      </g>

      {/* GROUP 10: Windows and Arched Door (1.25s) */}
      <g className="d" style={{ "--d": "1.25s", "--t": "1s" } as React.CSSProperties}>
        {/* Window 1 */}
        <path d={sceneData.window1Outer} pathLength="1" />
        <path d={sceneData.window1Inner} pathLength="1" />
        <path d={sceneData.window1Transom} pathLength="1" />
        <path d={sceneData.window1Mullion} pathLength="1" />

        {/* Window 2 */}
        <path d={sceneData.window2Outer} pathLength="1" />
        <path d={sceneData.window2Inner} pathLength="1" />
        <path d={sceneData.window2Transom} pathLength="1" />
        <path d={sceneData.window2Mullion} pathLength="1" />

        {/* Door */}
        <path d={sceneData.doorOuter} pathLength="1" />
        <path d={sceneData.doorInner} pathLength="1" />
        <path d={sceneData.doorPlank1} pathLength="1" />
        <path d={sceneData.doorPlank2} pathLength="1" />
        <circle cx="936" cy="520" r="2.5" fill={strokeColor} />

        {/* Steps & Lamp */}
        <path d={sceneData.step1} pathLength="1" />
        <path d={sceneData.step2} pathLength="1" />
        <path d={sceneData.lamp} pathLength="1" />
      </g>

      {/* GROUP 11: Plant pots on walls (1.45s) */}
      <g className="d" style={{ "--d": "1.45s", "--t": "0.9s" } as React.CSSProperties}>
        {sceneData.leftPots.map((p, idx) => (
          <React.Fragment key={`lp-${idx}`}>
            <path d={p.potBody} pathLength="1" />
            {p.leaves.map((l, lidx) => (
              <path key={lidx} d={l} pathLength="1" />
            ))}
          </React.Fragment>
        ))}
        {sceneData.rightPots.map((p, idx) => (
          <React.Fragment key={`rp-${idx}`}>
            <path d={p.potBody} pathLength="1" />
            {p.leaves.map((l, lidx) => (
              <path key={lidx} d={l} pathLength="1" />
            ))}
          </React.Fragment>
        ))}
      </g>

      {/* GROUP 12: Bunting, Furniture & Vine (1.5s) */}
      <g className="d" style={{ "--d": "1.5s", "--t": "0.9s" } as React.CSSProperties}>
        <path d={sceneData.buntingLine} pathLength="1" />
        {sceneData.flags.map((f, idx) => (
          <path key={`flag-${idx}`} d={f} pathLength="1" fill={fillColor} />
        ))}
        <path d={sceneData.tableTop} pathLength="1" />
        <path d={sceneData.tableLeg} pathLength="1" />
        <path d={sceneData.chairLeft} pathLength="1" />
        <path d={sceneData.chairRight} pathLength="1" />
        <path d={sceneData.vine} pathLength="1" />
      </g>

      {/* GROUP 13: Sun & Birds (1.9s) */}
      <g className="d" style={{ "--d": "1.9s", "--t": "0.8s" } as React.CSSProperties}>
        <circle
          cx={sceneData.sunData.circle.cx}
          cy={sceneData.sunData.circle.cy}
          r={sceneData.sunData.circle.r}
          pathLength="1"
        />
        {sceneData.sunData.rays.map((ray, idx) => (
          <line
            key={`ray-${idx}`}
            x1={ray[0][0]}
            y1={ray[0][1]}
            x2={ray[1][0]}
            y2={ray[1][1]}
            pathLength="1"
          />
        ))}
        {sceneData.birds.map((b, idx) => (
          <path key={`bird-${idx}`} d={b} pathLength="1" />
        ))}
      </g>

      {/* GROUP 14: Painted वनः on wall above door (fades in at 2.2s) */}
      <text
        x="910"
        y="426"
        fill={strokeColor}
        stroke="none"
        fontFamily="var(--font-devanagari)"
        fontSize="30"
        textAnchor="middle"
        className="transition-opacity duration-700 ease-out"
        style={{
          transitionDelay: "2.2s",
        }}
        lang="sa"
      >
        वनः
      </text>
    </svg>
  );
};
