'use client';

import { cn } from '~/lib/utils';
import { useAppStore } from '~/store/modules/app';

interface ThemeWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string;
}

export function ThemeWrapper({ defaultTheme, children, className }: ThemeWrapperProps) {
  const { appConfig } = useAppStore();

  return (
    <div
      className={cn(`theme-${defaultTheme || appConfig.theme}`, 'w-full', className)}
      style={
        {
          '--radius': `${defaultTheme ? 0.5 : appConfig.radius}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
