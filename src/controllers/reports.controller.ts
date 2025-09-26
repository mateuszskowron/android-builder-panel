import { Injectable, signal } from "@angular/core";

export interface ReportItem {
  id: string;
  title: string;
  description: string;
  created: string;
}

@Injectable({ providedIn: "root" })
export class ReportsController {
  private data = signal<ReportItem[]>([
    {
      id: "rep-q1",
      title: "Raport Q1",
      description: "Podsumowanie pierwszego kwartału",
      created: new Date(Date.now() - 20 * 86400000).toISOString(),
    },
    {
      id: "rep-q2",
      title: "Raport Q2",
      description: "Podsumowanie drugiego kwartału",
      created: new Date(Date.now() - 5 * 86400000).toISOString(),
    },
  ]);

  list() {
    return this.data();
  }
}
