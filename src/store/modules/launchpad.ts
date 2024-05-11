import { produce } from 'immer';
import { create } from 'zustand';

export interface LaunchpadState {
  showLaunchpad: boolean;
  setShowLaunchpad: (data: boolean) => void;
}

const useLaunchpadStore = create<LaunchpadState>((set) => ({
  showLaunchpad: false,
  setShowLaunchpad: (data) =>
    set(
      produce((state) => {
        state.showLaunchpad = data;
      }),
    ),
}));

export { useLaunchpadStore };
export default useLaunchpadStore;
