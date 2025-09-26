import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthController } from "../controllers/auth.controller";

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthController);
  const router = inject(Router);
  if (auth.isAuthenticated()) return true;
  router.navigateByUrl("/login");
  return false;
};
