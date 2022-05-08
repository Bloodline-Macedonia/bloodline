import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => (
  <>
    <Head>

      {/* Metatags only */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        Bloodline
      </title>
      <meta name="description" content="Blood donation made easy." />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Preview */}
      <meta property="og:url" content="https://bloodlinemacedonia.co/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Libraria Digjitale"
      />
      <meta
        property="og:description"
        content="Burimi më i madh i librave digjitale në gjuhën Shqipe."
      />
      <meta name="twitter:card" content="summary" />
      <meta property="og:image" content="https://i.postimg.cc/G2dtq6bP/logo.png" />
    </Head>
    <div className='navContainer'>
      <nav className='nav'>
        <ul>
          <li>
            <Link href='/'>
              <a>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/signup'>
              <a>
                Sign up
              </a>
            </Link>
          </li>
        </ul>

      </nav>
    </div>
    {children}
  </>
);

export default Layout;