import { Analytics } from '~/components/Analytics';
import { TailwindIndicator } from '~/components/TailwindIndicator';
import { ThemeProvider } from '~/components/ThemeProvider';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { ThemeWrapper } from '~/components/ThemeWrapper';
import { Sonner } from '~/components/ui/sonner';
import { Toaster } from '~/components/ui/toaster';
import { siteConfig } from '~/config/site';
import StyledComponentsRegistry from '~/lib/components/registry';
import { fontSans } from '~/lib/fonts';
import { cn } from '~/lib/utils';

import type { Metadata } from 'next';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning={true}>
    <head />
    <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div vaul-drawer-wrapper="">
          <div className="relative flex min-h-screen flex-col bg-background">
            <div className="flex-1">
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </div>
          </div>
        </div>
        <Analytics />
        <TailwindIndicator />
        <ThemeSwitcher />
        <ThemeWrapper />
        <Sonner />
        <Toaster />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
