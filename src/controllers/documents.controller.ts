import { Injectable, signal } from '@angular/core';

export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  sizeKb: number;
  modified: string; // ISO
}

@Injectable({ providedIn: 'root' })
export class DocumentsController {
  private data = signal<DocumentItem[]>([
    { id: 'd1', name: 'Umowa_2025.pdf', type: 'PDF', sizeKb: 842, modified: new Date().toISOString() },
    { id: 'd2', name: 'Specyfikacja.xlsx', type: 'XLSX', sizeKb: 120, modified: new Date(Date.now() - 5*86400000).toISOString() },
    { id: 'd3', name: 'Instrukcja.docx', type: 'DOCX', sizeKb: 356, modified: new Date(Date.now() - 9*86400000).toISOString() }
  ]);

  list() { return this.data(); }
}
