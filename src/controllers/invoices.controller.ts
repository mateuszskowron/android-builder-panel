import { Injectable, signal } from '@angular/core';

export interface InvoiceItem {
  number: string;
  issueDate: string; // ISO
  dueDate: string; // ISO
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'overdue';
}

@Injectable({ providedIn: 'root' })
export class InvoicesController {
  private data = signal<InvoiceItem[]>([
    { number: 'FV/2025/0001', issueDate: new Date().toISOString(), dueDate: new Date(Date.now() + 7*86400000).toISOString(), amount: 1299.99, currency: 'PLN', status: 'pending' },
    { number: 'FV/2025/0002', issueDate: new Date(Date.now() - 14*86400000).toISOString(), dueDate: new Date(Date.now() - 7*86400000).toISOString(), amount: 349.00, currency: 'PLN', status: 'paid' },
    { number: 'FV/2025/0003', issueDate: new Date(Date.now() - 30*86400000).toISOString(), dueDate: new Date(Date.now() - 20*86400000).toISOString(), amount: 980.50, currency: 'PLN', status: 'overdue' }
  ]);

  list() { return this.data(); }
}
