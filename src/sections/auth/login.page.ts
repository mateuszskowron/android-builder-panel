import { Component, effect, inject, signal } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { AuthController } from "../../controllers/auth.controller";

@Component({
  selector: "app-login-page",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    TranslateModule,
    NgOptimizedImage,
  ],
  template: `
  <a class="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:p-2 focus:bg-white focus:shadow" href="#main">{{ 'app.skip_to_content' | translate }}</a>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <div class="hidden lg:block bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))] p-10 relative overflow-hidden">
      <div class="max-w-lg">
        <h1 class="text-4xl font-bold tracking-tight">{{ 'app.title' | translate }}</h1>
        <p class="mt-4 text-slate-200">{{ 'pages.home.subtitle' | translate }}</p>
      </div>
      <div class="absolute inset-x-0 bottom-0 h-48 mask-gradient pointer-events-none bg-gradient-to-t from-black/20"></div>
    </div>
    <div class="flex items-center justify-center p-6">
      <main id="main" class="w-full max-w-md">
        <div class="card p-8">
          <h2 class="text-2xl font-semibold mb-6">{{ 'auth.login' | translate }}</h2>
          <form [formGroup]="form" (ngSubmit)="submit()" novalidate class="space-y-4">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>{{ 'auth.email' | translate }}</mat-label>
              <input matInput formControlName="email" type="email" required autocomplete="username" />
            </mat-form-field>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>{{ 'auth.password' | translate }}</mat-label>
              <input matInput formControlName="password" type="password" required autocomplete="current-password" />
            </mat-form-field>
            <div class="flex items-center justify-between">
              <mat-checkbox formControlName="remember">{{ 'auth.remember' | translate }}</mat-checkbox>
            </div>
            <button mat-flat-button color="primary" class="w-full" [disabled]="form.invalid">{{ 'auth.sign_in' | translate }}</button>
            <p *ngIf="error()" class="text-sm text-red-600">{{ 'auth.invalid' | translate }}</p>
            <p class="text-xs text-slate-500">demo@panel.app / demo123</p>
          </form>
        </div>
      </main>
    </div>
  </div>
  `,
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthController);
  private router = inject(Router);

  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
    remember: [true],
  });

  error = signal(false);

  submit() {
    const { email, password } = this.form.getRawValue();
    if (this.auth.login(String(email), String(password))) {
      this.error.set(false);
      this.router.navigateByUrl("/");
    } else {
      this.error.set(true);
    }
  }
}
