import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { PageShell } from './PageShell';
import type { PageContextServer } from './types';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'urlPathname', 'lang'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  // Initialize i18next for server-side rendering
  const lang = pageContext.lang || 'en';
  await i18n.changeLanguage(lang);

  const pageHtml = ReactDOMServer.renderToString(
    <I18nextProvider i18n={i18n}>
      <StaticRouter location={pageContext.urlPathname}>
        <PageShell pageContext={pageContext}>
          <Page {...pageProps} />
        </PageShell>
      </StaticRouter>
    </I18nextProvider>
  );

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || i18n.t('pantoneColorsChart');
  const desc = (documentProps && documentProps.description) || i18n.t('pantoneDescription');

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="${lang}">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <script>
          window.initialI18nStore = ${dangerouslySkipEscape(JSON.stringify(i18n.store.data))};
          window.initialLanguage = "${lang}";
        </script>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      lang,
    },
  };
}