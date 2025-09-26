import { Injectable, signal } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthController {
  private readonly key = 'app_auth_user';
  user = signal<User | null>(null);

  constructor() {
    const raw = localStorage.getItem(this.key);
    if (raw) this.user.set(JSON.parse(raw));
  }

  login(email: string, password: string) {
    // Mock check
    if (email.toLowerCase() === 'demo@panel.app' && password === 'demo123') {
      const u: User = { id: 'u1', name: 'Demo User', email };
      this.user.set(u);
      localStorage.setItem(this.key, JSON.stringify(u));
      return true;
    }
    return false;
  }

  logout() {
    this.user.set(null);
    localStorage.removeItem(this.key);
  }

  isAuthenticated() { return !!this.user(); }
}
