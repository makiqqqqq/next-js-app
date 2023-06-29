import React, { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

const AboutLayout: FC<PropsWithChildren> = ({ children }) => {
  const LINKS = [
    {
      href: '/about/contacts',
      pageName: 'Contacts',
    },
    {
      href: '/about/team',
      pageName: 'Team',
    },
  ];

  return (
    <div>
      <h3>About us</h3>
      <br />
      <ul>
        {LINKS.map((l) => (
          <li key={l.pageName}>
            <Link href={l.href}>{l.pageName}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
