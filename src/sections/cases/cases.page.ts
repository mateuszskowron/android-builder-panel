import { Component, computed, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CasesController } from '../../controllers/cases.controller';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cases-page',
  standalone: true,
  imports: [CommonModule, MatTableModule, TranslateModule],
  providers: [DatePipe],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">{{ 'pages.cases.title' | translate }}</h1>
      <div class="card overflow-hidden">
        <table mat-table [dataSource]="rows()" class="w-full">
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'pages.cases.id' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.id }}</td>
          </ng-container>
          <ng-container matColumnDef="subject">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'pages.cases.subject' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.subject }}</td>
          </ng-container>
          <ng-container matColumnDef="updatedAt">
            <th mat-header-cell *matHeaderCellDef class="px-4 py-3 text-left text-sm font-medium">{{ 'pages.cases.updated' | translate }}</th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.updatedAt | date:'medium' }}</td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayed"></tr>
          <tr mat-row *matRowDef="let row; columns: displayed"></tr>
        </table>
      </div>
    </div>
  `,
})
export class CasesPageComponent {
  private c = inject(CasesController);
  rows = computed(() => this.c.list());
  displayed = ['id', 'subject', 'updatedAt'];
}
