import { Injectable, signal } from "@angular/core";

export interface AppSettings {
  language: "pl" | "en";
  darkMode: boolean;
  notifications: boolean;
}

@Injectable({ providedIn: "root" })
export class SettingsController {
  private readonly key = "app_settings";
  settings = signal<AppSettings>({
    language: (localStorage.getItem("lang") as "pl" | "en") || "pl",
    darkMode: false,
    notifications: true,
  });

  constructor() {
    const raw = localStorage.getItem(this.key);
    if (raw) this.settings.set(JSON.parse(raw));
  }

  update(next: Partial<AppSettings>) {
    this.settings.set({ ...this.settings(), ...next });
    localStorage.setItem(this.key, JSON.stringify(this.settings()));
  }
}
