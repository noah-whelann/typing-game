import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-between">
      <h1>Welcome to typed!</h1>
      <Link href="/auth/signin">Sign In</Link>
      <Link href="/auth/signup">Get Started</Link>
    </main>
  );
}
