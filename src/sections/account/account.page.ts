import { Component, computed, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AccountController } from '../../controllers/account.controller';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [DatePipe],
  template: `
    <div class="container-app py-8" *ngIf="profile(); else none">
      <h1 class="text-2xl font-semibold mb-4">{{ 'nav.account' | translate }}</h1>
      <div class="card p-6 max-w-xl">
        <div class="text-sm text-slate-500">{{ 'account.memberSince' | translate }}: {{ profile()?.memberSince | date:'longDate' }}</div>
        <div class="mt-2 text-lg font-medium">{{ profile()?.name }}</div>
        <div class="text-slate-600">{{ profile()?.email }}</div>
      </div>
    </div>
    <ng-template #none>
      <div class="container-app py-8">Brak danych konta</div>
    </ng-template>
  `,
})
export class AccountPageComponent {
  private c = inject(AccountController);
  profile = computed(() => this.c.profile());
}
