'use client';

import * as React from 'react';

import { useSelectedLayoutSegment } from 'next/navigation';

import { useAppStore } from '~/store/modules/app';

export function ThemeSwitcher() {
  const { appConfig } = useAppStore();
  const segment = useSelectedLayoutSegment();

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className);
      }
    });

    const theme = segment === 'themes' ? appConfig.theme : null;
    if (theme) {
      return document.body.classList.add(`theme-${theme}`);
    }
  }, [segment, appConfig.theme]);

  return null;
}
