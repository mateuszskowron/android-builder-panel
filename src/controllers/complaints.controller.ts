import { Injectable, signal } from '@angular/core';

export interface ComplaintItem {
  id: string;
  subject: string;
  status: 'new' | 'in_review' | 'resolved';
  created: string; // ISO
}

@Injectable({ providedIn: 'root' })
export class ComplaintsController {
  private data = signal<ComplaintItem[]>([
    { id: 'R-2001', subject: 'Uszkodzony produkt', status: 'in_review', created: new Date(Date.now() - 3*86400000).toISOString() },
    { id: 'R-2002', subject: 'Opóźniona dostawa', status: 'resolved', created: new Date(Date.now() - 10*86400000).toISOString() }
  ]);

  list() { return this.data(); }
}
