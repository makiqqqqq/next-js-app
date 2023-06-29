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

  return (
    <header>
      <Navigation navLInks={ROUTES} />
    </header>
  );
};

export default Header;
