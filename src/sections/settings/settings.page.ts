import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SettingsController } from '../../controllers/settings.controller';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSlideToggleModule, MatFormFieldModule, MatSelectModule, MatButtonModule, TranslateModule],
  template: `
    <div class="container-app py-8">
      <h1 class="text-2xl font-semibold mb-4">{{ 'nav.settings' | translate }}</h1>
      <div class="card p-6 max-w-xl">
        <form [formGroup]="form" (ngSubmit)="save()" class="space-y-4">
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>{{ 'settings.language' | translate }}</mat-label>
            <mat-select formControlName="language">
              <mat-option value="pl">Polski</mat-option>
              <mat-option value="en">English</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-slide-toggle formControlName="darkMode">{{ 'settings.dark' | translate }}</mat-slide-toggle>
          <mat-slide-toggle formControlName="notifications">{{ 'settings.notifications' | translate }}</mat-slide-toggle>

          <button mat-flat-button color="primary">{{ 'settings.save' | translate }}</button>
        </form>
      </div>
    </div>
  `,
})
export class SettingsPageComponent {
  private fb = inject(FormBuilder);
  private s = inject(SettingsController);
  private t = inject(TranslateService);

  form = this.fb.group({
    language: [this.s.settings().language],
    darkMode: [this.s.settings().darkMode],
    notifications: [this.s.settings().notifications]
  });

  save() {
    const v = this.form.getRawValue();
    this.s.update(v);
    this.t.use(v.language as 'pl'|'en');
    document.documentElement.lang = v.language as 'pl'|'en';
    localStorage.setItem('lang', v.language as string);
  }
}
