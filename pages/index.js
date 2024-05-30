import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link';

export default function Home() {
  const signInHandler = async () => {
    signIn('github');
  }
  const signOutHandler = async () => {
    signOut();
  }
  return (
    <>
      <h1>Next-auth | GitHub</h1>
      <button onClick={signInHandler}>Sign in</button>
      <button onClick={signOutHandler}>Sign out</button>
      <Link href='/dashboard'>
        <button>Dashboard</button>
      </Link>
    </>
  );
}
