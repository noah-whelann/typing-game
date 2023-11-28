import Image from "next/image";
import logo from "@/app/assets/light-logo.png"
import Link from "next/link";
import './front-page.css';

export default function Home() {
  return (
    <main className="h-screen">
      <div className="left-screen">
      <Image src={ logo } alt='front page logo' className='front-logo'/>
          <p id="slogan-text">Learn to <u>type</u> <em>faster</em>, and <em>just better</em>.</p>
      </div>
        <div className="right-screen">
            <Link href="/auth/signin" className='links' id='front-sign-in'>
              <p className="hover-underline-animation">Sign In</p>
              </Link>
            <Link href="/auth/signup" className='links' id='front-sign-up'>
              <p className="hover-underline-animation">Get Started</p>
              </Link>
            <Link href="/dashboard" className='links' id='play-as-guest'>
              <p className="hover-underline-animation">Play as Guest</p>
              </Link>
        </div>
    </main>
  );
}
