import React from 'react';
import Navigation from '@/components/Navigation';

const Header = () => {

  const ROUTES = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/about',
      label: 'About'
    },
    {
      href: '/blog',
      label: 'Blog'
    }
  ];

  console.log(process.env.GOOGLE_CLIENT_ID as string);
  console.log(process.env);

  return (
    <header>
      <Navigation navLInks={ROUTES} />
    </header>
  );
};

export default Header;
