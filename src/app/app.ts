import { Component, effect, inject, signal } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { NgIf, NgFor } from "@angular/common";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { getPlugins } from "../plugins/registry";
import { AuthController } from "../controllers/auth.controller";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgFor,
    TranslateModule,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  auth = inject(AuthController);
  t = inject(TranslateService);
  plugins = getPlugins();
  year = new Date().getFullYear();
  mobileOpen = false;

  constructor() {
    const lang = localStorage.getItem("lang") || "pl";
    this.t.use(lang);
    document.documentElement.lang = lang;
  }

  lang = signal(this.t.currentLang || "pl");

  setLang(code: "pl" | "en") {
    this.t.use(code);
    this.lang.set(code);
    document.documentElement.lang = code;
    localStorage.setItem("lang", code);
  }

  logout() {
    this.auth.logout();
  }
}
