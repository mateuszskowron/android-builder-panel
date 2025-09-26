import { Injectable, signal, computed, inject } from "@angular/core";
import { AuthController } from "./auth.controller";

export interface Profile {
  name: string;
  email: string;
  memberSince: string; // ISO
}

@Injectable({ providedIn: "root" })
export class AccountController {
  private auth = inject(AuthController);
  profile = computed<Profile | null>(() => {
    const u = this.auth.user();
    return u
      ? {
          name: u.name,
          email: u.email,
          memberSince: new Date(Date.now() - 200 * 86400000).toISOString(),
        }
      : null;
  });
}
