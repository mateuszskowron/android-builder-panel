import { PluginDef } from './plugin.types';

const plugins: PluginDef[] = [];

export function registerPlugin(def: PluginDef) {
  plugins.push(def);
  plugins.sort((a, b) => a.order - b.order);
}

export function getPlugins() {
  return plugins;
}
