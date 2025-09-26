import { registerPlugin } from './registry';
import { PluginDef } from './plugin.types';
import { Routes } from '@angular/router';

import { CasesPageComponent } from '../sections/cases/cases.page';
import { InvoicesPageComponent } from '../sections/invoices/invoices.page';
import { CalendarPageComponent } from '../sections/calendar/calendar.page';
import { MessagesPageComponent } from '../sections/messages/messages.page';
import { DocumentsPageComponent } from '../sections/documents/documents.page';
import { PaymentsPageComponent } from '../sections/payments/payments.page';
import { ComplaintsPageComponent } from '../sections/complaints/complaints.page';
import { ReportsPageComponent } from '../sections/reports/reports.page';
import { SettingsPageComponent } from '../sections/settings/settings.page';
import { AccountPageComponent } from '../sections/account/account.page';

const defs: PluginDef[] = [
  { id: 'home', path: '', i18nKey: 'nav.home', icon: 'space_dashboard', order: 0, route: { path: '', loadComponent: () => import('../sections/home/home.page').then(m => m.HomePageComponent) } },
  { id: 'cases', path: 'cases', i18nKey: 'nav.cases', icon: 'assignment', order: 1, route: { path: 'cases', component: CasesPageComponent } },
  { id: 'invoices', path: 'invoices', i18nKey: 'nav.invoices', icon: 'receipt_long', order: 2, route: { path: 'invoices', component: InvoicesPageComponent } },
  { id: 'calendar', path: 'calendar', i18nKey: 'nav.calendar', icon: 'calendar_month', order: 3, route: { path: 'calendar', component: CalendarPageComponent } },
  { id: 'messages', path: 'messages', i18nKey: 'nav.messages', icon: 'mail', order: 4, route: { path: 'messages', component: MessagesPageComponent } },
  { id: 'documents', path: 'documents', i18nKey: 'nav.documents', icon: 'description', order: 5, route: { path: 'documents', component: DocumentsPageComponent } },
  { id: 'payments', path: 'payments', i18nKey: 'nav.payments', icon: 'account_balance_wallet', order: 6, route: { path: 'payments', component: PaymentsPageComponent } },
  { id: 'complaints', path: 'complaints', i18nKey: 'nav.complaints', icon: 'report_problem', order: 7, route: { path: 'complaints', component: ComplaintsPageComponent } },
  { id: 'reports', path: 'reports', i18nKey: 'nav.reports', icon: 'monitoring', order: 8, route: { path: 'reports', component: ReportsPageComponent } },
  { id: 'settings', path: 'settings', i18nKey: 'nav.settings', icon: 'settings', order: 9, route: { path: 'settings', component: SettingsPageComponent } },
  { id: 'account', path: 'account', i18nKey: 'nav.account', icon: 'account_circle', order: 10, route: { path: 'account', component: AccountPageComponent } },
  { id: 'integrations', path: 'integrations', i18nKey: 'nav.integrations', icon: 'extension', order: 11, route: { path: 'integrations', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.integrations' } } },
  { id: 'support', path: 'support', i18nKey: 'nav.support', icon: 'support_agent', order: 12, route: { path: 'support', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.support' } } }
];

defs.forEach(registerPlugin);

export const pluginRoutes: Routes = defs.map(d => d.route);
export const pluginDefs = defs;
