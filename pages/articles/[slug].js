import { getPosts, getSinglePost } from "@/lib/wordpress";
import { NextSeo } from "next-seo";
import Layout from "@/components/layout";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import * as dayjs from "dayjs";
import NewsletterCta from "@/components/newsletter-cta";

const PostPage = ({ article }) => {
  const url = `https://aaiga.com.au/articles/${article.slug}`;

  const pages = [
    { name: "Articles", href: "/articles", current: false },
    { name: article.title, href: "#", current: true },
  ];

  return (
    <Layout>
      <NextSeo
        title={article.title}
        description={article.excerpt}
        canonical={url}
        openGraph={{
          url: url,
          type: "article",
          title: article.title,
          description: article.excerpt,
          article: {
            publishedTime: article.date,
            modifiedTime: article.date,
            authors: [
              `https://aaiga.com.au/authors/${article.author.node.slug}`,
            ],
            tags: article.tags.edges.map((tag) => tag.node.name),
          },
          images: [
            {
              url: article.featuredImage.node.mediaItemUrl,
              width: 800,
              height: 500,
              alt: article.title,
            },
          ],
        }}
        twitter={{
          site: "@aaiga_au",
          cardType: "summary",
        }}
      />

      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div>
          <div className="relative shadow-xl rounded sm:rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src={article.featuredImage.node.mediaItemUrl}
                layout="fill"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                {article.title}
              </h1>
              <div
                className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl"
                dangerouslySetInnerHTML={{ __html: article.excerpt }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <Breadcrumbs pages={pages} />
        <div className="flex items-center mt-6">
          <div className="ml-3 md:ml-0 md:mr-3 md:text-right order-last md:order-first">
            <p className="text-sm font-medium text-gray-900">
              <a
                href={`/authors/${article.author.node.slug}`}
                className="hover:underline"
              >
                {article.author.node.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <span>3 min read</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={article.date}>
                {dayjs(article.date).format("MMM DD, YYYY")}
              </time>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a href={`/authors/${article.author.node.slug}`}>
              <span className="sr-only">{article.author.node.name}</span>
              <div className="w-10 h-10 relative">
                <Image
                  className="rounded-full"
                  layout="fill"
                  src={article.author.node.avatar.url}
                  alt={article.author.node.name}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className="prose lg:prose-lg mx-auto mt-16"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <NewsletterCta />
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await getPosts();

  const paths = data.posts.nodes.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await getSinglePost(params.slug);

  return {
    props: {
      article: data.post,
    },
  };
}

export default PostPage;
