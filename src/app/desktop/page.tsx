'use client';

import { useEffect } from 'react';

import { DockBar } from '~/components/desktop/dock-bar';
import { Launchpad } from '~/components/desktop/launchpad';
import { Terminal } from '~/components/desktop/terminal';
import { TopNavBar } from '~/components/desktop/top-nav-bar';
import { GlobalBackGround } from '~/components/GlobalBackground';
import { useAppStore } from '~/store/modules/app';

export default function IndexPage() {
  const { setAppList } = useAppStore();
  useEffect(() => {
    setAppList([
      {
        id: 'launchpad',
        title: 'Launchpad',
        width: 700,
        height: 500,
        img: '/images/icons/mac_launchpad.png',
        content: <Terminal />,
      },
      {
        id: 'terminal',
        title: 'Terminal',
        width: 700,
        height: 500,
        img: '/images/icons/mac_terminal.png',
        content: <Terminal />,
      },
    ]);
  }, [setAppList]);
  return (
    <div className="w-full h-full relative 1brightness-90">
      <GlobalBackGround>
        <TopNavBar />
        <div className="flex justify-center items-center py-96">hello word</div>
        <Launchpad />
        <DockBar />
      </GlobalBackGround>
    </div>
  );
}
