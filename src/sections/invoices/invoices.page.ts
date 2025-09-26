import { Component, computed, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { InvoicesController } from '../../controllers/invoices.controller';

@Component({
  selector: 'app-invoices-page',
  standalone: true,
  imports: [CommonModule, MatTableModule, TranslateModule],
  providers: [CurrencyPipe, DatePipe],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">{{ 'nav.invoices' | translate }}</h1>
      <div class="card overflow-hidden">
        <table mat-table [dataSource]="rows()" class="w-full">
          <ng-container matColumnDef="number">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'common.number' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.number }}</td>
          </ng-container>
          <ng-container matColumnDef="issueDate">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'invoices.issue' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.issueDate | date:'mediumDate' }}</td>
          </ng-container>
          <ng-container matColumnDef="dueDate">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'invoices.due' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.dueDate | date:'mediumDate' }}</td>
          </ng-container>
          <ng-container matColumnDef="amount">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'invoices.amount' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.amount | number:'1.2-2' }} {{ r.currency }}</td>
          </ng-container>
          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'common.status' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">
              <span class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                [class.bg-green-100]="r.status==='paid'" [class.text-green-700]="r.status==='paid'"
                [class.bg-amber-100]="r.status==='pending'" [class.text-amber-700]="r.status==='pending'"
                [class.bg-red-100]="r.status==='overdue'" [class.text-red-700]="r.status==='overdue'">
                {{ ('invoices.status.' + r.status) | translate }}
              </span>
            </td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayed"></tr>
          <tr mat-row *matRowDef="let row; columns: displayed"></tr>
        </table>
      </div>
    </div>
  `,
})
export class InvoicesPageComponent {
  private c = inject(InvoicesController);
  rows = computed(() => this.c.list());
  displayed = ['number', 'issueDate', 'dueDate', 'amount', 'status'];
}
