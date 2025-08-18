import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
        <header className="py-6 px-6 bg-black border-b border-gray-800">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold tracking-wide text-amber-500">
              Phoenix Creek
            </a>
            <nav className="space-x-6 text-sm text-gray-300">
              <a href="/guide" className="hover:text-white">Guide</a>
              <a href="/gear" className="hover:text-white">Gear</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="py-6 px-6 bg-black border-t border-gray-800 text-center text-sm text-gray-500">
          Produced by Monroe · Phoenix Creek Supply
        </footer>
      </div>
    </>
  );
    }
