import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { PageShell } from './PageShell';
import type { PageContextServer } from './types';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'urlPathname'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <StaticRouter location={pageContext.urlPathname}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </StaticRouter>
  );

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'Pantone Colors Chart';
  const desc = (documentProps && documentProps.description) || 'Explore the complete Pantone color chart with codes and swatches';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some custom pageContext here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}