import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/nprogress.css';
import Router from 'next/router';
import NProgress from 'nprogress';

import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '../i18n/LanguageContext';


NProgress.configure({ ease: 'ease-out', speed: 500 })
Router.events.on('routeChangeStart', () => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
})

Router.events.on('routeChangeError', () => {
  NProgress.done();
  NProgress.configure({ ease: 'ease', speed: 1000 });
})

function Bloodline({ Component, pageProps, router }) {
  return (
    <LanguageProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </LanguageProvider>
  )
}

export default Bloodline;
