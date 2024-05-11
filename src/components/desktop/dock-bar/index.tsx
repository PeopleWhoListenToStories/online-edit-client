'use client';

import { useMotionValue } from 'framer-motion';

import { DockItem } from './dock-item';

import { useAppStore } from '~/store/modules/app';
import { useDockStore } from '~/store/modules/dock';
import { useLaunchpadStore } from '~/store/modules/launchpad';

export const DockBar = () => {
  const { dockSetting } = useDockStore();
  const { appList, appSetting, setOpenApp } = useAppStore();
  const { setShowLaunchpad } = useLaunchpadStore();

  const mouseX = useMotionValue<number | null>(null);

  const isOpen = (id: string) => {
    return appSetting.showAppList.includes(id);
  };

  return (
    <div
      className={`dock z-10 select-none w-full  fixed left-0 right-0 mx-auto bottom-4 ${appSetting.max ? 'z-0' : 'z-50'} overflow-x-visible`}
    >
      <ul
        className="flex px-2 mx-auto space-x-2 bg-white rounded-none dock max-w-max backdrop-blur-2xl border-1 sm:rounded-xl bg-opacity-20 glass"
        style={{ height: `${(dockSetting.dockSize as number) + 15}px` }}
        onMouseMove={(e) => mouseX.set(e.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        {appList.map((app) => (
          <DockItem
            key={`dock-${app.id}`}
            app={app}
            mouseX={mouseX}
            openApp={setOpenApp}
            isOpen={isOpen}
            setShowLaunchpad={setShowLaunchpad}
            dockSize={dockSetting.dockSize as number}
            dockMag={dockSetting.dockMag as number}
          />
        ))}
      </ul>
    </div>
  );
};
