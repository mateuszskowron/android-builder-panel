import { Injectable, signal } from '@angular/core';

export interface PaymentItem {
  id: string;
  method: 'card' | 'transfer' | 'blik';
  amount: number;
  currency: string;
  date: string;
  status: 'success' | 'failed' | 'processing';
}

@Injectable({ providedIn: 'root' })
export class PaymentsController {
  private data = signal<PaymentItem[]>([
    { id: 'p1', method: 'card', amount: 349.0, currency: 'PLN', date: new Date(Date.now() - 86400000).toISOString(), status: 'success' },
    { id: 'p2', method: 'transfer', amount: 980.5, currency: 'PLN', date: new Date(Date.now() - 2*86400000).toISOString(), status: 'failed' },
    { id: 'p3', method: 'blik', amount: 1299.99, currency: 'PLN', date: new Date().toISOString(), status: 'processing' }
  ]);

  list() { return this.data(); }
}
