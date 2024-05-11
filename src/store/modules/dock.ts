import { produce } from 'immer';
import { create } from 'zustand';

type dockSettingType = {
  dockSize?: number;
  dockMag?: number;
};

interface DockState {
  dockSetting: dockSettingType;
  updateDockSetting: (params: dockSettingType) => void;
}

const useDockStore = create<DockState>((set) => ({
  dockSetting: {
    dockSize: 50,
    dockMag: 2,
  },
  updateDockSetting: (data) =>
    set(
      produce((state) => {
        state.dockSetting = { ...state.dockSetting, ...data };
      }),
    ),
}));

export { useDockStore };
export default useDockStore;
