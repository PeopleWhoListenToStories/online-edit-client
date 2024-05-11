import { Suspense } from 'react';

import Image from 'next/image';

import { Battery } from './battery';
import { CurrentLocalDate } from './current-local-date';
import { TopBarItem } from './top-bar-item';

export const TopNavBar = () => {
  const dark = true;

  return (
    <div
      className={`w-full py-1 px-4 top-0 z-50 text-sm backdrop-blur-2xl shadow transition select-none flex items-center justify-between font-medium ${dark ? 'text-white  bg-gray-500/10 ' : 'text-black  bg-gray-100/30'}`}
    >
      <div className="flex justify-center w-[25px] items-center relative">
        <TopBarItem Icon={<Image alt="" width={300} height={300} src={'/images/icons/mac_logo_white.png'} />} />
      </div>
      TopNavBar
      <div className="flex items-center h-[25px]">
        <Suspense fallback={<div>loading...</div>}>
          <Battery />
          <CurrentLocalDate />
        </Suspense>
      </div>
    </div>
  );
};
