import Layout from "@/components/layout";
import NewsletterCta from "@/components/newsletter-cta";
import { getPosts } from "@/lib/wordpress";
import { AnnotationIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

const title = "Stay up-to-date with the next generation of business";
const description =
  "Product comparisons, case studies and courses - we want to help accelerate you to wherever you need to be.";
const url = "https://aaiga.com.au/articles";

const Articles = ({ latestArticle, articles }) => {
  return (
    <Layout>
      <NextSeo title={title} description={description} canonical={url} />

      {/* Latest Article */}
      <div className="pb-16 overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-8 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <AnnotationIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {latestArticle.title}
                </h2>
                <div
                  className="mt-4 text-lg text-gray-500"
                  dangerouslySetInnerHTML={{ __html: latestArticle.excerpt }}
                ></div>
                <div className="mt-6">
                  <Link href={`/articles/${latestArticle.slug}`}>
                    <a className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                      Read now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <div className="w-full h-96 relative lg:absolute lg:right-0 lg:h-full lg:w-full lg:max-w-none">
                <Image
                  className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 object-cover"
                  layout="fill"
                  src={latestArticle.featuredImage.node.mediaItemUrl}
                  alt={latestArticle.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="relative divide-y-2 divide-gray-200 mt-16">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Recent publications
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            We&apos;re committed to assisting as many entrepreneurs as we can.
            The best way we&apos;ve found that we can do this is by writing
            informative, in-depth articles about the state of business.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {articles.map((post) => (
            <div key={post.title}>
              <div>
                {post.categories.edges.map((category) => (
                  <p key={category.node.slug} className="inline-block">
                    <span className="bg-indigo-100 text-indigo-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium">
                      {category.node.name}
                    </span>
                  </p>
                ))}
              </div>
              <a href={`/articles/${post.slug}`} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <div
                  className="mt-3 text-base text-gray-500"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                ></div>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={`/authors/${post.author.node.slug}`}>
                    <span className="sr-only">{post.author.node.name}</span>
                    <div className="h-10 w-10 relative">
                      <Image
                        className="rounded-full"
                        layout="fill"
                        src={post.author.node.avatar.url}
                        alt={post.author.node.name}
                      />
                    </div>
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={`/authors/${post.author.node.slug}`}>
                      {post.author.node.name}
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>
                      {dayjs(post.date).format("MMM DD, YYYY")}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsletterCta />
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getPosts();

  const articles = data.posts.nodes;
  const latestArticle = articles.shift();

  return {
    props: {
      articles,
      latestArticle,
    },
  };
}

export default Articles;
