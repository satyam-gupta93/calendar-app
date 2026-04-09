

"use client";
import { useState, useEffect, useCallback } from "react";
import { Moon, Sun } from "lucide-react"; // npm install lucide-react
import { CalendarState, Note } from "./types";
import { toDateStr, compareDates } from "./utils";
import { Spirals } from "./Spirals";
import { ImagePanel } from "./ImagePanel";
import { CalendarGrid } from "./CalendarGrid";
import { NotesSection } from "./NotesSection";

export default function WallCalendar() {
  const today = new Date();
  const [mounted, setMounted] = useState(false);
  const [flipping, setFlipping] = useState(false);
  
  const [state, setState] = useState<CalendarState>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("wall-calendar-state");
      if (saved) return JSON.parse(saved);
    }
    return {
      year: today.getFullYear(),
      month: today.getMonth(),
      rangeStart: null,
      rangeEnd: null,
      notes: [],
      theme: "light",
    };
  });

  useEffect(() => { setMounted(true); }, []);
  
  useEffect(() => { 
    if (mounted) {
      localStorage.setItem("wall-calendar-state", JSON.stringify(state));
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    }
  }, [state, mounted]);

  const navigate = useCallback((dir: -1 | 1) => {
    if (flipping) return;
    setFlipping(true); // Trigger animation class
    
    setTimeout(() => {
      setState(prev => {
        let m = prev.month + dir;
        let y = prev.year;
        if (m < 0) { m = 11; y--; }
        if (m > 11) { m = 0; y++; }
        return { ...prev, month: m, year: y };
      });
      setFlipping(false); // Remove animation class
    }, 300); // Matches CSS duration
  }, [flipping]);

  const toggleTheme = () => {
    setState(prev => ({ ...prev, theme: prev.theme === "light" ? "dark" : "light" }));
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-[900px]">
       <div className="flex justify-between items-center mb-4 px-2">
          <h1 className="text-xl font-bold dark:text-white transition-colors">Wall Calendar</h1>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm transition-all hover:scale-110"
          >
            {state.theme === "light" ? <Moon size={18} className="text-gray-600" /> : <Sun size={18} className="text-yellow-400" />}
          </button>
       </div>

       <div className={`rounded-lg overflow-hidden bg-white dark:bg-[#1a1a2e] shadow-2xl transition-all duration-300 ${flipping ? "flipping" : ""}`}>
          <Spirals />
          <div className="flex flex-col md:flex-row">
            <ImagePanel 
              month={state.month} 
              year={state.year} 
              onNavigate={navigate} 
              onGoToday={() => setState(s => ({...s, year: today.getFullYear(), month: today.getMonth()}))} 
            />
            <div className="flex-1 flex flex-col">
              <CalendarGrid 
                state={state} 
                onDayClick={(day) => {
                  const ds = toDateStr(state.year, state.month, day);
                  setState(prev => {
                    if (!prev.rangeStart || (prev.rangeStart && prev.rangeEnd)) return { ...prev, rangeStart: ds, rangeEnd: null };
                    if (compareDates(ds, prev.rangeStart) < 0) return { ...prev, rangeStart: ds, rangeEnd: prev.rangeStart };
                    return { ...prev, rangeEnd: ds };
                  });
                }} 
                onClearRange={() => setState(s => ({...s, rangeStart: null, rangeEnd: null}))} 
              />
              <div className="mx-5 border-t border-dashed border-gray-200 dark:border-gray-800" />
              <NotesSection 
                notes={state.notes} 
                month={state.month} 
                rangeStart={state.rangeStart} 
                onAddNote={(text, type) => {
                  const note: Note = { id: Date.now().toString(), date: type === "range" ? state.rangeStart : null, text, createdAt: Date.now() };
                  setState(prev => ({ ...prev, notes: [note, ...prev.notes] }));
                }} 
                onDeleteNote={(id) => setState(s => ({...s, notes: s.notes.filter(n => n.id !== id)}))} 
              />
            </div>
          </div>
       </div>
    </div>
  );
}