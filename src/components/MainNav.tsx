'use client';

import * as React from 'react';

import Link from 'next/link';

import { Icons } from '~/components/Icons';
import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
import { NavItem } from '~/types/nav';
// import { usePathname } from 'next/navigation';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  // const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {items?.length ? (
          <nav className="flex gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      'flex items-center text-sm font-medium text-muted-foreground',
                      item.disabled && 'cursor-not-allowed opacity-80',
                    )}
                  >
                    {item.title}
                  </Link>
                ),
            )}
          </nav>
        ) : null}
        {/* <Link
          href="/docs"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/components') ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Components
        </Link>
        <Link
          href="/themes"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/themes') ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Themes
        </Link>
        <Link
          href="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples') ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Examples
        </Link>
        <Link
          href="/blocks"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/blocks') ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Blocks
        </Link> */}
      </nav>
    </div>
  );
}
