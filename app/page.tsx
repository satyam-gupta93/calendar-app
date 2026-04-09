// "use client";
// import WallCalendar from "@/components/WallCalendar";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#f0ede8] flex items-center justify-center p-4">
//       <WallCalendar />
//     </main>
//   );
// }

import WallCalendar from "@/components/WallCalendar/index";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0ede8] dark:bg-gray-950 flex items-center justify-center p-4 transition-colors duration-300">

      <div className="w-full flex justify-center">
        <WallCalendar />
      </div>
    </main>
  );
}


