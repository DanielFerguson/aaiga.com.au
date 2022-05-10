import { getPost, getPosts } from "@/lib/ghost";
import { NextSeo, ArticleJsonLd } from "next-seo";

const PostPage = ({ post }) => {
  return (
    <>
      <NextSeo
        title={`${post.meta_title} | Aaiga`}
        description={post.meta_description}
        canonical={`https://aaiga.com.au/posts/${post.slug}`}
        openGraph={{
          title: `${post.og_title} | Aaiga`,
          description: post.og_description,
          url: `https://aaiga.com.au/posts/${post.slug}`,
          type: "article",
          article: {
            publishedTime: post.published_at,
            modifiedTime: post.updated_at,
            authors: ["https://aaiga.com.au/authors/danielferguson"],
            tags: ["Tag A", "Tag B", "Tag C"],
          },
          images: [{ url: post.feature_image }],
          site_name: "Aaiga",
        }}
        twitter={{
          handle: "@thedannyferg",
          site: "@aaiga_au",
          cardType: "summary_large_image",
        }}
      />
      <ArticleJsonLd
        url={`https://aaiga.com.au/posts/${post.slug}`}
        title={`${post.meta_title} | Aaiga`}
        images={[post.feature_image]}
        datePublished={post.published_at}
        dateModified={post.updated_at}
        authorName={["Daniel Ferguson"]}
        publisherName="Aaiga"
        publisherLogo="https://aaiga.com.au/aaiga-dark.png"
        description={post.meta_description}
      />

      <main className="prose dark:prose-invert mx-auto py-16">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getPost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default PostPage;
