export type DateStr = string; // "YYYY-MM-DD"

export interface Note {
  id: string;
  date: DateStr | null; // null = monthly note
  text: string;
  createdAt: number;
}

export interface CalendarState {
  year: number;
  month: number;
  rangeStart: DateStr | null;
  rangeEnd: DateStr | null;
  notes: Note[];
  theme: "light" | "dark";
}

export const toDateStr = (y: number, m: number, d: number): DateStr => 
  `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

export const parseDate = (s: DateStr): [number, number, number] => {
  const parts = s.split("-");
  return [parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])];
};

export const compareDates = (a: DateStr, b: DateStr): number => a < b ? -1 : a > b ? 1 : 0;

export const buildMonthGrid = (year: number, month: number): (number | null)[] => {
  const firstDay = new Date(year, month, 1).getDay();
  const offset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
};

export const isWeekend = (dayIndex: number): boolean => dayIndex === 5 || dayIndex === 6;