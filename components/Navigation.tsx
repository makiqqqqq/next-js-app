'use client';
import { usePathname } from 'next/navigation';
import { Link } from '@chakra-ui/next-js';
import { Flex } from '@chakra-ui/react';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLInks: NavLink[];
};

const Navigation = ({ navLInks }: Props) => {
  const pathname = usePathname();

  return (
    <Flex gap={4}>
      {navLInks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            href={link.href}
            color="white"
            {...(isActive && {
              textDecoration: 'underline',
              color: 'blue.500'
            })}
            key={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </Flex>
  );
};

export default Navigation;
