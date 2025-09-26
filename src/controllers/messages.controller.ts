import { Injectable, signal } from '@angular/core';

export interface MessageItem {
  id: string;
  from: string;
  subject: string;
  date: string; // ISO
  unread: boolean;
}

@Injectable({ providedIn: 'root' })
export class MessagesController {
  private data = signal<MessageItem[]>([
    { id: 'm1', from: 'Biuro Obsługi', subject: 'Witamy w Panelu Klienta', date: new Date().toISOString(), unread: true },
    { id: 'm2', from: 'Księgowość', subject: 'FV/2025/0002 opłacona', date: new Date(Date.now() - 86400000).toISOString(), unread: false },
    { id: 'm3', from: 'Dział Reklamacji', subject: 'Aktualizacja zgłoszenia C-1001', date: new Date(Date.now() - 2*86400000).toISOString(), unread: true }
  ]);

  list() { return this.data(); }
}
