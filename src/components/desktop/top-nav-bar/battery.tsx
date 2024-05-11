'use client';
import React, { useEffect, useState } from 'react';

import { cn } from '~/lib/utils';

interface BatteryInfo {
  level: number;
  charging: boolean;
  setBattery: () => void;
}

declare global {
  interface Navigator {
    getBattery(): Promise<BatteryInfo>;
  }
}

export const Battery = () => {
  const dark = true;
  const [battery, setBattery] = useState<{ level: number; charging: boolean }>({
    level: 0,
    charging: false,
  });
  useEffect(() => {
    const navigator: Navigator = window.navigator;
    navigator.getBattery().then((battery: BatteryInfo) => {
      setBattery({
        level: battery.level,
        charging: battery.charging,
      });
    });
  }, []);

  return (
    <div className="flex items-center justify-end space-x-1">
      <div className="relative w-5 h-3 bg-gray-300 rounded-full">
        <div
          className={cn(
            'absolute bottom-0 left-0 h-full ',
            dark ? 'bg-white' : 'bg-black/40',
            battery.charging && 'bg-green-400',
          )}
          style={{ width: `${Math.floor(16 * battery.level)}px` }}
        ></div>
      </div>
      <svg
        className="w-3 h-3 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
      <div className="text-xs scale-95">{`${battery.level * 100}%`}</div>
    </div>
  );
};
