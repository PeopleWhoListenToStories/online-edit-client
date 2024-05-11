import { useState, useEffect } from 'react';

import { dayjs } from '~/lib/day';

interface IProps {
  locale?: string;
  format?: string;
}

interface ResType {
  currentTime: Date;
  formatDate: string;
}

const useCurrentTime = (props?: IProps): ResType => {
  const { locale = 'zh-cn', format = 'MMMD日 ddd HH:mm:ss' } = props || {};
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return { currentTime, formatDate: dayjs(currentTime).locale(locale).format(format) };
};

export { useCurrentTime };
