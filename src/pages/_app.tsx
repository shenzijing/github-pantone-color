import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import App from '../App';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <App Component={Component} pageProps={pageProps} />;
}

export default appWithTranslation(MyApp);