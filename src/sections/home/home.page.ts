import { Component, inject } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="container-app py-8">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="card p-6">
          <h2 class="text-xl font-semibold">
            {{ "pages.home.welcome" | translate }}
          </h2>
          <p class="mt-2 text-slate-600">
            {{ "pages.home.subtitle" | translate }}
          </p>
        </div>
        <div class="card p-6">
          <h3 class="text-lg font-medium mb-2">WCAG AA</h3>
          <p class="text-slate-600">
            Kontrast, focus-visible, tekst alternatywny i nawigacja klawiaturą
            są obsługiwane w całej aplikacji.
          </p>
        </div>
      </div>
    </div>
  `,
})
export class HomePageComponent {}
