import { create } from 'zustand';

interface Configs {
  strings: Record<string, any>;
  settings: any;
  design: any;
}

interface Store {
  configs: Configs;
  setConfigs: (configs: Configs) => void;
}

export const useStore = create<Store>((set) => ({
  configs: { strings: {}, settings: {}, design: {} },
  setConfigs: (configs) => set({ configs }),
}));