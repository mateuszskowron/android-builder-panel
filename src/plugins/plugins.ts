import { registerPlugin } from './registry';
import { PluginDef } from './plugin.types';
import { Routes } from '@angular/router';

// Eagerly import the Cases page; others lazy via loadComponent
import { CasesPageComponent } from '../sections/cases/cases.page';

const defs: PluginDef[] = [
  { id: 'home', path: '', i18nKey: 'nav.home', icon: 'space_dashboard', order: 0, route: { path: '', loadComponent: () => import('../sections/home/home.page').then(m => m.HomePageComponent) } },
  { id: 'cases', path: 'cases', i18nKey: 'nav.cases', icon: 'assignment', order: 1, route: { path: 'cases', component: CasesPageComponent } },
  { id: 'invoices', path: 'invoices', i18nKey: 'nav.invoices', icon: 'receipt_long', order: 2, route: { path: 'invoices', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.invoices' } } },
  { id: 'calendar', path: 'calendar', i18nKey: 'nav.calendar', icon: 'calendar_month', order: 3, route: { path: 'calendar', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.calendar' } } },
  { id: 'messages', path: 'messages', i18nKey: 'nav.messages', icon: 'mail', order: 4, route: { path: 'messages', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.messages' } } },
  { id: 'documents', path: 'documents', i18nKey: 'nav.documents', icon: 'description', order: 5, route: { path: 'documents', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.documents' } } },
  { id: 'payments', path: 'payments', i18nKey: 'nav.payments', icon: 'account_balance_wallet', order: 6, route: { path: 'payments', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.payments' } } },
  { id: 'complaints', path: 'complaints', i18nKey: 'nav.complaints', icon: 'report_problem', order: 7, route: { path: 'complaints', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.complaints' } } },
  { id: 'reports', path: 'reports', i18nKey: 'nav.reports', icon: 'monitoring', order: 8, route: { path: 'reports', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.reports' } } },
  { id: 'settings', path: 'settings', i18nKey: 'nav.settings', icon: 'settings', order: 9, route: { path: 'settings', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.settings' } } },
  { id: 'account', path: 'account', i18nKey: 'nav.account', icon: 'account_circle', order: 10, route: { path: 'account', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.account' } } },
  { id: 'integrations', path: 'integrations', i18nKey: 'nav.integrations', icon: 'extension', order: 11, route: { path: 'integrations', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.integrations' } } },
  { id: 'support', path: 'support', i18nKey: 'nav.support', icon: 'support_agent', order: 12, route: { path: 'support', loadComponent: () => import('../shared/placeholder.page').then(m => m.PlaceholderPageComponent), data: { i18n: 'nav.support' } } }
];

defs.forEach(registerPlugin);

export const pluginRoutes: Routes = defs.map(d => d.route);
export const pluginDefs = defs;
