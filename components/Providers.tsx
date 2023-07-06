'use client'

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export const Providers = ({children}: {children: ReactNode}) => {

  return (
    <SessionProvider>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </SessionProvider>
  )

}