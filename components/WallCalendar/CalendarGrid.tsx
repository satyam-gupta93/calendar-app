
import { useState } from "react";
import { CalendarState, DateStr } from "./types";
import { DAY_LABELS, MONTH_NAMES } from "./constants";
import { buildMonthGrid, isWeekend, toDateStr, compareDates, parseDate } from "./utils";

interface CalendarGridProps {
  state: CalendarState;
  onDayClick: (day: number) => void;
  onClearRange: () => void;
}

export function CalendarGrid({ state, onDayClick, onClearRange }: CalendarGridProps) {
  const [hoverDate, setHoverDate] = useState<DateStr | null>(null);
  const grid = buildMonthGrid(state.year, state.month);

  const getPreviewEnd = (): DateStr | null => {
    if (state.rangeStart && !state.rangeEnd && hoverDate) {
      return compareDates(hoverDate, state.rangeStart) >= 0 ? hoverDate : state.rangeStart;
    }
    return state.rangeEnd;
  };

  const getDayClass = (day: number, cellIdx: number): string => {
    const ds = toDateStr(state.year, state.month, day);
    const start = state.rangeStart;
    const end = getPreviewEnd();
    
    let cls = "day-cell flex items-center justify-center text-xs font-medium h-9 w-full relative z-10";

    if (start && end) {
      if (ds === start && ds === end) cls += " day-range-single";
      else if (ds === start) cls += " day-range-start";
      else if (ds === end) cls += " day-range-end";
      else if (compareDates(ds, start) > 0 && compareDates(ds, end) < 0) cls += " day-in-range";
    } else if (start && ds === start) {
      cls += " day-range-single";
    }

    if (!start || (ds !== start && ds !== end)) {
        cls += " text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700";
    }
    
    if (isWeekend(cellIdx % 7)) cls += " !text-red-500";
    return cls;
  };

  return (
    <div className="p-5 pb-2">
      <div className="grid grid-cols-7 mb-2">
        {DAY_LABELS.map((d, i) => (
          <div key={d} className={`text-center text-[10px] font-bold uppercase tracking-widest ${isWeekend(i) ? "text-red-500" : "text-gray-400"}`}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {grid.map((day, i) => (
          <div 
            key={i} 
            className="h-10 flex items-center justify-center"
            onMouseEnter={() => day && setHoverDate(toDateStr(state.year, state.month, day))} 
            onMouseLeave={() => setHoverDate(null)}
          >
            {day ? (
              <div className={getDayClass(day, i)} onClick={() => onDayClick(day)}>
                {day}
              </div>
            ) : <div className="w-full h-full" />}
          </div>
        ))}
      </div>
    </div>
  );
}