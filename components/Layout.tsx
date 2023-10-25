import Head from 'next/head';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Rick and Morty Next.js</title>
        <link rel="icon" href="/images/rick-and-morty-logo.png" />
      </Head>
      <header className="bg-gray-800 text-white">
        <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-8">
          <Link href="/" className="text-2xl font-bold">Rick and Morty</Link>
          <div>
            <Link href="/characters" className="mr-4">Personajes</Link>
            <Link href="/episodes" className="mr-4">Episodios</Link>
            <Link href="/locations">Ubicaciones</Link>
          </div>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto flex-grow p-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p>Rick and Morty Next.js</p>
        </div>
      </footer>
    </div>
  );
};
