'use client';

import { useEffect, useState } from 'react';
// import React, { useContext, useEffect, useState } from 'react';

import { useCurrentTime } from '~/hooks/useCurrentTime';

export const CurrentLocalDate = () => {
  const [timeStrList, setTimeStrList] = useState<Array<string>>([]);
  const { formatDate } = useCurrentTime({ locale: 'zh-cn', format: 'MMMD日 ddd HH:mm:ss' });
  useEffect(() => {
    setTimeStrList(formatDate.split(':') || []);
  }, [formatDate]);
  return (
    <div className="w-[150px] flex justify-center items-center text-xs scale-95 rounded px-2 h-full hover:bg-white hover:bg-opacity-10 transition duration-300 ease-in-out">
      {timeStrList.map((dateTargetStr, index) => {
        return (
          <div key={dateTargetStr} className={index > 0 ? 'w-[18px]' : ''}>
            {index > 0 ? ':' : ''}
            {dateTargetStr}
          </div>
        );
      })}
    </div>
  );
};
