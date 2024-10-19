import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';
import '../index.css';
import '../i18n';

export { render };

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <React.StrictMode>
      <BrowserRouter>
        <PageShell pageContext={pageContext}>
          <Page {...pageProps} />
        </PageShell>
      </BrowserRouter>
    </React.StrictMode>
  );
}