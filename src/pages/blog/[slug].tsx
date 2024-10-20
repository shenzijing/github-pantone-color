import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';
import blogPosts from '../../data/blogPosts';

export default function BlogPostPage({ post }: { post: any }) {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <BlogPost post={post} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = blogPosts.flatMap((post) =>
    locales!.map((locale) => ({
      params: { slug: post.slug },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};