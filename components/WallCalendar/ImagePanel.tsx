// import { HERO_IMAGES, MONTH_NAMES } from "./constants";

// interface ImagePanelProps {
//   month: number;
//   year: number;
//   onNavigate: (dir: -1 | 1) => void;
//   onGoToday: () => void;
// }

// export function ImagePanel({ month, year, onNavigate, onGoToday }: ImagePanelProps) {
//   return (
//     <div className="cal-image-panel relative flex-shrink-0 md:w-[340px] h-[240px] md:h-auto overflow-hidden bg-gray-100 dark:bg-gray-800 min-h-[300px]">
//       <img
//         src={HERO_IMAGES[month]}
//         alt={`${MONTH_NAMES[month]} hero`}
//         className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
//         key={HERO_IMAGES[month]}
//       />
//       <div
//         className="absolute bottom-0 right-0 px-6 py-4"
//         style={{
//           background: "linear-gradient(135deg, #1e6fdc 60%, #4a90e2)",
//           clipPath: "polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%)",
//         }}
//       >
//         <p className="text-white text-right leading-none">
//           <span className="text-2xl font-bold block">{year}</span>
//           <span className="text-sm font-semibold uppercase tracking-widest opacity-90">
//             {MONTH_NAMES[month]}
//           </span>
//         </p>
//       </div>

//       <div className="absolute top-3 left-3 flex gap-2">
//         <button onClick={() => onNavigate(-1)} className="w-8 h-8 rounded-full bg-white/80 dark:bg-gray-900/70 hover:bg-white dark:hover:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-200 shadow transition-all backdrop-blur-sm">‹</button>
//         <button onClick={() => onNavigate(1)} className="w-8 h-8 rounded-full bg-white/80 dark:bg-gray-900/70 hover:bg-white dark:hover:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-200 shadow transition-all backdrop-blur-sm">›</button>
//       </div>

//       <button onClick={onGoToday} className="absolute top-3 right-3 text-xs px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-900/70 hover:bg-white dark:hover:bg-gray-900 text-gray-700 dark:text-gray-200 shadow transition-all backdrop-blur-sm font-medium">Today</button>
//     </div>
//   );
// }

import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_IMAGES, MONTH_NAMES } from "./constants";

interface ImagePanelProps {
  month: number;
  year: number;
  onNavigate: (dir: -1 | 1) => void;
  onGoToday: () => void;
}

export function ImagePanel({ month, year, onNavigate, onGoToday }: ImagePanelProps) {
  return (
    <div className="relative flex-shrink-0 md:w-[340px] h-[240px] md:h-auto overflow-hidden bg-gray-100 dark:bg-gray-800 min-h-[300px]">
      <img
        src={HERO_IMAGES[month]}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        key={HERO_IMAGES[month]}
      />
      
      {/* Blue Badge */}
      <div className="absolute bottom-0 right-0 px-6 py-4 bg-blue-600 text-white z-10"
           style={{ clipPath: "polygon(30px 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
        <p className="text-right leading-tight">
          <span className="text-2xl font-bold block">{year}</span>
          <span className="text-sm font-semibold uppercase tracking-widest opacity-90">{MONTH_NAMES[month]}</span>
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-4 left-4 flex gap-2 z-10">
        <button onClick={() => onNavigate(-1)} className="p-2 rounded-full bg-white/90 dark:bg-black/50 hover:bg-white transition-all shadow-md">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => onNavigate(1)} className="p-2 rounded-full bg-white/90 dark:bg-black/50 hover:bg-white transition-all shadow-md">
          <ChevronRight size={18} />
        </button>
      </div>

      <button onClick={onGoToday} className="absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/50 font-bold shadow-md z-10">
        TODAY
      </button>
    </div>
  );
}