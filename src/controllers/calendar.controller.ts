import { Injectable, signal } from "@angular/core";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO date
}

@Injectable({ providedIn: "root" })
export class CalendarController {
  private events = signal<CalendarEvent[]>([
    {
      id: "e1",
      title: "Spotkanie w sprawie umowy",
      date: new Date().toISOString(),
    },
    {
      id: "e2",
      title: "Termin płatności FV/2025/0001",
      date: new Date(Date.now() + 6 * 86400000).toISOString(),
    },
    {
      id: "e3",
      title: "Prezentacja raportu kwartalnego",
      date: new Date(Date.now() + 12 * 86400000).toISOString(),
    },
  ]);

  list() {
    return this.events();
  }
}
