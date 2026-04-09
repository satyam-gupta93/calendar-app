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