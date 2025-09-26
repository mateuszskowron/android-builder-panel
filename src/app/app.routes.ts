import { Routes } from "@angular/router";
import { pluginRoutes } from "../plugins/plugins";
import { LoginPageComponent } from "../sections/auth/login.page";
import { authGuard } from "./auth.guard";

export const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  {
    path: "",
    canActivate: [authGuard],
    children: [...pluginRoutes],
  },
  { path: "**", redirectTo: "" },
];
