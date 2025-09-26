import { Route } from "@angular/router";

export type PluginId =
  | "home"
  | "cases"
  | "invoices"
  | "calendar"
  | "messages"
  | "documents"
  | "payments"
  | "complaints"
  | "reports"
  | "settings"
  | "account"
  | "integrations"
  | "support";

export interface PluginDef {
  id: PluginId;
  path: string;
  i18nKey: string; // e.g. 'nav.cases'
  icon: string; // material symbol name
  route: Route; // child route under '/'
  order: number;
}
