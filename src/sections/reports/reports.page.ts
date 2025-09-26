import { Component, computed, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReportsController } from '../../controllers/reports.controller';

@Component({
  selector: 'app-reports-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [DatePipe],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">{{ 'nav.reports' | translate }}</h1>
      <div class="grid gap-4 md:grid-cols-2">
        <div *ngFor="let r of rows()" class="card p-6 flex flex-col gap-2">
          <div class="text-sm text-slate-500">{{ r.created | date:'mediumDate' }}</div>
          <div class="text-lg font-medium">{{ r.title }}</div>
          <p class="text-slate-600">{{ r.description }}</p>
          <div class="mt-2">
            <button class="btn-primary">{{ 'common.open' | translate }}</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ReportsPageComponent {
  private c = inject(ReportsController);
  rows = computed(() => this.c.list());
}
