'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@chakra-ui/next-js';
import { Flex } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLInks: NavLink[];
};

const Navigation = ({ navLInks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  const formattedLinks = (links: NavLink[]) => links.map((link) => {
    const isActive = pathname === link.href;
    return {
      ...link,
      isActive
    };
  });

  const logout = () => signOut({ callbackUrl: '/' });

  return (
    <Flex gap={4}>
      {formattedLinks(navLInks).map((link) => {
        return (
          <Link
            href={link.href}
            color='white'
            {...(link.isActive && {
              textDecoration: 'underline',
              color: 'blue.500'
            })}
            key={link.href}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && (
        <Link href='/profile'>Profile</Link>
      )}
      {session?.data ?
        <Link href='#' onClick={logout} color='white'>Sing Out</Link>
        : <Link href='/signin' color='white'>Sign in</Link>
      }
    </Flex>
  );
};

export default Navigation;
