import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './components/Provider';
import { CookiesProvider } from 'next-client-cookies/server';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'TypeED',
    description: 'Type learning game',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <CookiesProvider>
                    {children}
                </CookiesProvider>
            </body>
        </html>
    );
}