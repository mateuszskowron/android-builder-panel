import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="container-app py-8">
      <div class="card p-8">
        <h1 class="text-2xl font-semibold mb-2">{{ 'pages.placeholder.headline' | translate: { name: (route.snapshot.data['i18n'] | translate) } }}</h1>
        <p class="text-slate-600">{{ 'pages.placeholder.description' | translate }}</p>
      </div>
    </div>
  `,
})
export class PlaceholderPageComponent {
  route = inject(ActivatedRoute);
}
