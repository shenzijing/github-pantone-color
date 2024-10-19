import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

export type PageProps = {};

export type PageContext = PageContextBuiltIn<Page> & {
  pageProps: PageProps;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

export type PageContextServer = PageContext;
export type PageContextClient = PageContext;

type Page = (pageProps: PageProps) => React.ReactElement;