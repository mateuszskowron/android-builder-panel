import { Component, computed, inject } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { TranslateModule } from "@ngx-translate/core";
import { DocumentsController } from "../../controllers/documents.controller";

@Component({
  selector: "app-documents-page",
  standalone: true,
  imports: [CommonModule, MatTableModule, TranslateModule],
  providers: [DatePipe],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">
        {{ "nav.documents" | translate }}
      </h1>
      <div class="card overflow-hidden">
        <table mat-table [dataSource]="rows()" class="w-full">
          <ng-container matColumnDef="name">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              {{ "documents.name" | translate }}
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.name }}</td>
          </ng-container>
          <ng-container matColumnDef="type">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              {{ "documents.type" | translate }}
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">{{ r.type }}</td>
          </ng-container>
          <ng-container matColumnDef="sizeKb">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              {{ "documents.size" | translate }}
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">
              {{ r.sizeKb }} KB
            </td>
          </ng-container>
          <ng-container matColumnDef="modified">
            <th
              mat-header-cell
              *matHeaderCellDef
              class="px-4 py-3 text-left text-sm font-medium"
            >
              {{ "documents.modified" | translate }}
            </th>
            <td mat-cell *matCellDef="let r" class="px-4 py-3">
              {{ r.modified | date: "short" }}
            </td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayed"></tr>
          <tr mat-row *matRowDef="let row; columns: displayed"></tr>
        </table>
      </div>
    </div>
  `,
})
export class DocumentsPageComponent {
  private c = inject(DocumentsController);
  rows = computed(() => this.c.list());
  displayed = ["name", "type", "sizeKb", "modified"];
}
