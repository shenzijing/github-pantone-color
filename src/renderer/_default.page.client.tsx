import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';
import '../index.css';
import '../i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export { render };

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  
  // Ensure client-side i18n is initialized with the same language and translations as server-side
  if (window.initialI18nStore && window.initialLanguage) {
    Object.keys(window.initialI18nStore).forEach((lng) => {
      Object.keys(window.initialI18nStore[lng]).forEach((ns) => {
        i18n.addResourceBundle(lng, ns, window.initialI18nStore[lng][ns], true, true);
      });
    });
    await i18n.changeLanguage(window.initialLanguage);
  }

  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <PageShell pageContext={pageContext}>
            <Page {...pageProps} />
          </PageShell>
        </BrowserRouter>
      </I18nextProvider>
    </React.StrictMode>
  );
}