'use client';

import { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { useDockHoverAnimation } from '~/hooks/useDockHoverAnimation';
import { useLaunchpadStore } from '~/store/modules/launchpad';
import { AppsData } from '~/types/app';

import type { MotionValue } from 'framer-motion';

interface DockItemProps {
  app: AppsData;
  mouseX: MotionValue;
  openApp: (id: string) => void;
  isOpen: (id: string) => boolean;
  setShowLaunchpad: (v: boolean) => void;
  dockSize: number;
  dockMag: number;
}

export const DockItem = ({ app, mouseX, openApp, dockSize, dockMag, isOpen }: DockItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const bannedApp = ['github', 'email'];

  const { width } = useDockHoverAnimation(mouseX, imgRef, dockSize, dockMag);
  const { showLaunchpad, setShowLaunchpad } = useLaunchpadStore();

  const handleClickDockItem = () => {
    if (app.id === 'launchpad') {
      setShowLaunchpad(!showLaunchpad);
    }
    console.log('click dock item');
  };

  useEffect(() => {
    console.log(app, mouseX, openApp, dockSize, dockMag, isOpen);
  }, []);

  return (
    <>
      <li
        id={`dock-${app.id}`}
        onClick={handleClickDockItem}
        className="flex flex-col items-center justify-end mb-1 transition duration-150 ease-in origin-bottom"
      >
        <p className="absolute px-3 py-1 text-sm text-black rounded-md tooltip bg-gray-300/80">{app.title}</p>
        {app.link ? (
          <Link href={app.link} target="_blank" rel="noreferrer">
            <motion.img
              className="w-12 rounded-md appLink"
              ref={imgRef}
              src={app.img}
              alt={app.title}
              title={app.title}
              draggable={false}
              style={{ width, willChange: 'width' }}
            />
          </Link>
        ) : (
          <motion.img
            className="w-12 rounded-md appLink"
            ref={imgRef}
            src={app.img}
            alt={app.title}
            title={app.title}
            draggable={false}
            style={{ width, willChange: 'width' }}
          />
        )}
        <div
          className={`h-1 w-1 m-0 rounded-full bg-white/40 ${isOpen(app.id) || bannedApp.includes(app.id) ? '' : 'invisible'}`}
        />
      </li>
    </>
  );
};
