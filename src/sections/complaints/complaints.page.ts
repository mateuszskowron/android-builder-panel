import { Component, computed, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { ComplaintsController } from '../../controllers/complaints.controller';

@Component({
  selector: 'app-complaints-page',
  standalone: true,
  imports: [CommonModule, MatTableModule, TranslateModule],
  providers: [DatePipe],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">{{ 'nav.complaints' | translate }}</h1>
      <div class="card overflow-hidden">
        <table mat-table [dataSource]="rows()" class="w-full">
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">ID</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.id }}</td>
          </ng-container>
          <ng-container matColumnDef="subject">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'cases.subject' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.subject }}</td>
          </ng-container>
          <ng-container matColumnDef="created">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'complaints.created' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.created | date:'medium' }}</td>
          </ng-container>
          <ng-container matColumnDef="status">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'common.status' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ ('complaints.status_' + r.status) | translate }}</td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayed"></tr>
          <tr mat-row *matRowDef="let row; columns: displayed"></tr>
        </table>
      </div>
    </div>
  `,
})
export class ComplaintsPageComponent {
  private c = inject(ComplaintsController);
  rows = computed(() => this.c.list());
  displayed = ['id', 'subject', 'created', 'status'];
}
