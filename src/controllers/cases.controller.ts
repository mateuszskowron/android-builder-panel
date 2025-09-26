import { Injectable, signal } from "@angular/core";

export interface CaseItem {
  id: string;
  subject: string;
  status: "open" | "in_progress" | "closed";
  updatedAt: string; // ISO date
}

@Injectable({ providedIn: "root" })
export class CasesController {
  private data = signal<CaseItem[]>([
    {
      id: "C-1001",
      subject: "Reklamacja dostawy",
      status: "open",
      updatedAt: new Date().toISOString(),
    },
    {
      id: "C-1002",
      subject: "Prośba o ofertę",
      status: "in_progress",
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: "C-1003",
      subject: "Aktualizacja danych firmy",
      status: "closed",
      updatedAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    },
  ]);

  list() {
    return this.data();
  }
}
