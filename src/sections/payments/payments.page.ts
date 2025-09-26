import { Component, computed, inject } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { TranslateModule } from "@ngx-translate/core";
import { PaymentsController } from "../../controllers/payments.controller";

@Component({
  selector: "app-payments-page",
  standalone: true,
  imports: [CommonModule, MatTableModule, TranslateModule],
  providers: [DatePipe],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">
        {{ "nav.payments" | translate }}
      </h1>
      <div class="card overflow-hidden">
        <table mat-table [dataSource]="rows()" class="w-full">
          <ng-container matColumnDef="id">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              ID
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.id }}</td>
          </ng-container>
          <ng-container matColumnDef="method">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              {{ "payments.method" | translate }}
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">
              {{ "payments.method_" + r.method | translate }}
            </td>
          </ng-container>
          <ng-container matColumnDef="amount">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              {{ "invoices.amount" | translate }}
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">
              {{ r.amount | number: "1.2-2" }} {{ r.currency }}
            </td>
          </ng-container>
          <ng-container matColumnDef="date">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              {{ "common.date" | translate }}
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">
              {{ r.date | date: "short" }}
            </td>
          </ng-container>
          <ng-container matColumnDef="status">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              {{ "common.status" | translate }}
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">
              {{ "payments.status_" + r.status | translate }}
            </td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayed"></tr>
          <tr mat-row *matRowDef="let row; columns: displayed"></tr>
        </table>
      </div>
    </div>
  `,
})
export class PaymentsPageComponent {
  private c = inject(PaymentsController);
  rows = computed(() => this.c.list());
  displayed = ["id", "method", "amount", "date", "status"];
}
