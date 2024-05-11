'use client';

import * as React from 'react';

import { useSelectedLayoutSegment } from 'next/navigation';

import { useAppStore } from '~/store/modules/app';

export function ThemeSwitcher() {
  const { appSetting } = useAppStore();
  const segment = useSelectedLayoutSegment();

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className);
      }
    });

    const theme = segment === 'themes' ? appSetting.theme : null;
    if (theme) {
      return document.body.classList.add(`theme-${theme}`);
    }
  }, [segment, appSetting.theme]);

  return null;
}
