import { Component, computed, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesController } from '../../controllers/messages.controller';

@Component({
  selector: 'app-messages-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [DatePipe],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">{{ 'nav.messages' | translate }}</h1>
      <div class="divide-y">
        <div *ngFor="let m of rows()" class="py-4 flex items-center justify-between">
          <div>
            <div class="text-sm text-slate-500">{{ m.from }} • {{ m.date | date:'short' }}</div>
            <div class="font-medium" [class.font-semibold]="m.unread">{{ m.subject }}</div>
          </div>
          <span *ngIf="m.unread" class="ml-4 inline-flex h-2 w-2 rounded-full bg-[hsl(var(--primary))]" aria-label="unread"></span>
        </div>
      </div>
    </div>
  `,
})
export class MessagesPageComponent {
  private c = inject(MessagesController);
  rows = computed(() => this.c.list());
}
