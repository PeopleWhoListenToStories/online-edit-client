import { produce } from 'immer';
import { create } from 'zustand';

import { Style } from '~/types/styles';
import { Theme } from '~/types/themes';

type appConfigType = {
  style: Style['name'];
  theme: Theme['name'];
  radius: number;
};

interface AppState {
  appConfig: appConfigType;
  updateConfig: (params: appConfigType) => void;
}

// 创建状态存储
const useAppStore = create<AppState>((set) => ({
  appConfig: {
    style: 'default',
    theme: 'zinc',
    radius: 0.5,
  },
  //更新config对象
  updateConfig: (configInfo) =>
    set(
      produce((state) => {
        state.appConfig = { ...state.appConfig, ...configInfo };
      }),
    ),
  //更新对象中某个属性
  // updateAge: (age) =>
  //   set(
  //     produce((state) => {
  //       state.userInfo.age = age;
  //     }),
  //   ),
  //更新原始数据类型
  // updateToken: (token) => set({ token }),
}));

export { useAppStore };
export default useAppStore;
