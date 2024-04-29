import Link from 'next/link';

import { Icons } from '~/components/Icons';
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '~/components/PageHeader';
import { buttonVariants } from '~/components/ui/button';
import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
// import MailPage from '@/app/(app)/examples/mail/page';
// import { Announcement } from '~/components/Announcement';

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        {/* <Announcement /> */}
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open
          Source.
        </PageHeaderDescription>
        <PageActions>
          {/* <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link> */}
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
