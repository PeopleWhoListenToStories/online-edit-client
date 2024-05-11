import { produce } from 'immer';
import { create } from 'zustand';

import { Style } from '~/types/styles';
import { Theme } from '~/types/themes';

export type appSettingType = {
  style: Style['name'];
  theme: Theme['name'];
  radius: number;
  max: string; // the maximize APP's id
  focus: string; // the focusing app id
  showAppList: string[]; // the whole opening app list
  minimizeAppList: string[]; // to store the minimized apps' id
};

export type appItemType = {
  id: string;
  title: string;
  width: number;
  height: number;
  img: string;
  content: React.ReactElement;
};

export interface AppState {
  appSetting: appSettingType;
  appList: appItemType[];
  updateAppSetting: (params: appSettingType) => void;
  setAppList: (params: appItemType[]) => void;
  setOpenApp: (id: string) => void;
  setCloseApp: (id: string) => void;
  setMaxApp: (id: string) => void;
  setFocusApp: (id: string) => void;
  addMinimizeApp: (id: string) => void;
  removeMinimizeApp: (id: string) => void;
}

// 创建状态存储
const useAppStore = create<AppState>((set) => ({
  appSetting: {
    style: 'default',
    theme: 'zinc',
    radius: 0.5,
    max: '',
    focus: '', // the focusing app id
    showAppList: [],
    minimizeAppList: [],
  },
  appList: [],
  //更新Setting对象
  updateAppSetting: (data) =>
    set(
      produce((state) => {
        state.appSetting = { ...state.appSetting, ...data };
      }),
    ),
  setAppList: (data) =>
    set(
      produce((state) => {
        state.appList = data;
      }),
    ),
  setOpenApp: (id) =>
    set(
      produce((state) => {
        state.appSetting.showAppList = state.appSetting.showAppList.includes(id)
          ? [...state.appSetting.showAppList]
          : [...state.appSetting.showAppList, id];
      }),
    ),
  setCloseApp: (id) =>
    set(
      produce((state) => {
        state.appSetting.showAppList = state.appSetting.showAppList.filter((appId: string) => appId !== id);
      }),
    ),
  setMaxApp: (id) =>
    set(
      produce((state) => {
        state.appSetting.max = id;
      }),
    ),
  setFocusApp: (id) =>
    set(
      produce((state) => {
        state.appSetting.focus = id;
      }),
    ),
  addMinimizeApp: (id) =>
    set(
      produce((state) => {
        state.appSetting.minimizeAppList = [...state.appSetting.minimizeAppList, id];
      }),
    ),
  removeMinimizeApp: (id) =>
    set(
      produce((state) => {
        state.appSetting.minimizeAppList = state.appSetting.minimizeAppList.filter((appId: string) => appId !== id);
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
