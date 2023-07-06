import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credential from 'next-auth/providers/credentials';
import { users } from '@/data/users';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
    Credential({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find((user) => user.email === credentials.email);

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
};