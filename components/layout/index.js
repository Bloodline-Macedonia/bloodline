import Head from 'next/head';
import Link from './link'; // custom link component for active styles
import useTranslation from '../../hooks/useTranslation';

const Layout = ({ children }) => {
  const { t, setLocale, locales } = useTranslation();

  function handleLocaleChange(language) {
    if (!window) {
      return;
    }

    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    setLocale(language);
  }

  return (
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
              <Link href={`/`} activeClassName='active'>
                <a>
                  {t("layout_Home")}
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/signup`} activeClassName='active'>
                <a>
                  {t("layout_Donate")}
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/requests`} activeClassName='active'>
                <a>
                  Requests
                </a>
              </Link>
            </li>
            <li>
              <div className="lang" style={{position: 'absolute', right: '0', top: '0'}}>
                {locales.map((locale) => (
                  <span>
                    <a href={`#${locale}`} key={locale} onClick={() => handleLocaleChange(locale)}>
                      {locale}
                    </a> &nbsp; &nbsp;
                  </span>

                ))}
              </div>
            </li>
          </ul>

        </nav>
      </div>
      {children}
    </>
  )

};

export default Layout;