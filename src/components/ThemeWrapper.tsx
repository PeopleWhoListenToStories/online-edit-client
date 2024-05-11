'use client';

import { cn } from '~/lib/utils';
import { useAppStore } from '~/store/modules/app';

interface ThemeWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string;
}

export function ThemeWrapper({ defaultTheme, children, className }: ThemeWrapperProps) {
  const { appSetting } = useAppStore();

  return (
    <div
      className={cn(`theme-${defaultTheme || appSetting.theme}`, 'w-full', className)}
      style={
        {
          '--radius': `${defaultTheme ? 0.5 : appSetting.radius}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
