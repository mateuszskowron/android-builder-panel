import { Component, computed, inject } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { CalendarController } from "../../controllers/calendar.controller";

@Component({
  selector: "app-calendar-page",
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [DatePipe],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">
        {{ "nav.calendar" | translate }}
      </h1>
      <div class="grid gap-4 md:grid-cols-2">
        <div *ngFor="let e of rows()" class="card p-4">
          <div class="text-sm text-slate-500">
            {{ e.date | date: "fullDate" }}
          </div>
          <div class="font-medium">{{ e.title }}</div>
        </div>
      </div>
    </div>
  `,
})
export class CalendarPageComponent {
  private c = inject(CalendarController);
  rows = computed(() => this.c.list());
}
