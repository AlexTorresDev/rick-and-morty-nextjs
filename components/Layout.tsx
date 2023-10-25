import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Rick and Morty Next.js</title>
        <link rel="icon" href="/images/rick-and-morty-logo.png" />
      </Head>
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">Rick and Morty</Link>
          <div>
            <Link href="/characters" className="mr-4">Characters</Link>
            <Link href="/episodes" className="mr-4">Episodes</Link>
            <Link href="/locations">Locations</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-grow py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Rick and Morty Next.js</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
