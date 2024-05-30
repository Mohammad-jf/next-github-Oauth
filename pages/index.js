import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { status } = useSession();
  const signInHandler = async () => {
    signIn('github');
  };
  const signOutHandler = async () => {
    signOut();
  };
  return (
    <>
      <h1>Next-auth | GitHub</h1>
      
      {status !== 'authenticated' ? (
        <button onClick={signInHandler}>Sign in</button>
      ) : null}

      {status === 'authenticated' ? (
        <>
          <button onClick={signOutHandler}>Sign out</button>
          <Link href='/dashboard'>
            <button>Dashboard</button>
          </Link>
        </>
      ) : null}
    </>
  );
}
