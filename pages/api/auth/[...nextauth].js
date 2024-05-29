import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
