import { useState } from "react";
import { Note, DateStr } from "./types";
import { MONTH_NAMES } from "./constants";

interface NotesSectionProps {
  notes: Note[];
  month: number;
  rangeStart: DateStr | null;
  onAddNote: (text: string, type: "month" | "range") => void;
  onDeleteNote: (id: string) => void;
}

export function NotesSection({ notes, month, rangeStart, onAddNote, onDeleteNote }: NotesSectionProps) {
  const [noteTab, setNoteTab] = useState<"month" | "range">("month");
  const [noteInput, setNoteInput] = useState("");

  const visibleNotes = notes.filter(n => noteTab === "month" ? n.date === null : n.date !== null);

  const handleAdd = () => {
    if (!noteInput.trim()) return;
    onAddNote(noteInput, noteTab);
    setNoteInput("");
  };

  return (
    <div className="notes-area p-5 pt-4 flex-1">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Notes</p>
        <div className="flex gap-1">
          <button onClick={() => setNoteTab("month")} className={`text-xs px-2 py-1 rounded-md ${noteTab === "month" ? "bg-blue-600 text-white" : "text-gray-500"}`}>Monthly</button>
          <button onClick={() => setNoteTab("range")} disabled={!rangeStart} className={`text-xs px-2 py-1 rounded-md ${noteTab === "range" ? "bg-blue-600 text-white" : "text-gray-500"} disabled:opacity-40`}>Range</button>
        </div>
      </div>
      <div className="flex gap-2 mb-3">
        <input
          value={noteInput}
          onChange={e => setNoteInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAdd()}
          placeholder="Write a note..."
          className="flex-1 text-xs border dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent text-gray-800 dark:text-gray-100"
        />
        <button onClick={handleAdd} className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium">Add</button>
      </div>
      <div className="space-y-1.5 max-h-[120px] overflow-y-auto pr-1">
        {visibleNotes.map(note => (
          <div key={note.id} className="flex items-start gap-2 bg-yellow-50 dark:bg-gray-800/80 border border-yellow-100 dark:border-gray-700 rounded-lg px-3 py-2 group">
            <span className="flex-1 text-xs text-gray-700 dark:text-gray-300">{note.text}</span>
            <button onClick={() => onDeleteNote(note.id)} className="opacity-0 group-hover:opacity-100 text-red-500 text-xs font-bold">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}