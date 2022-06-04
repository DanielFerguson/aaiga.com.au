import Layout from "@/components/layout";
import NewsletterCta from "@/components/newsletter-cta";
import { getUser, getUsers } from "@/lib/wordpress";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const Author = ({ author, articles, featuredArticle }) => {
  return (
    <Layout>
      <div>
        <div className="space-y-12 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          <div className="md:col-span-1">
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="object-cover shadow-lg rounded-lg w-full"
                  src={author.avatar.url.replace("s=96", "s=512")}
                  alt={author.name}
                />
              </div>
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3>{author.name}</h3>
                <p className="text-indigo-600">Author, Editor</p>
              </div>
              <div className="text-lg">
                <p className="text-gray-500">{author.description}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            {/* Featured Article */}
            <Link href={`/articles/${featuredArticle.node.slug}`}>
              <a>
                <div className="relative">
                  <div className="absolute inset-x-0 bottom-0 h-1/2" />
                  <div>
                    <div className="relative shadow-xl rounded sm:rounded-2xl overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          className="h-full w-full border-2"
                          src={
                            featuredArticle.node.featuredImage.node.mediaItemUrl
                          }
                          layout="fill"
                          objectFit="cover"
                          alt="People working on laptops"
                        />
                        <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                      </div>
                      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                          {featuredArticle.node.title}
                        </h1>
                        <div
                          className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl"
                          dangerouslySetInnerHTML={{
                            __html: featuredArticle.node.excerpt,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/* Other Articles */}
            <div className="grid gap-16 pt-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {articles.map((article) => (
                <div key={article.node.title}>
                  <div>
                    {article.node.categories.edges.map((category) => (
                      <a key={category.node.name} className="inline-block">
                        <span className="bg-indigo-100 text-indigo-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium">
                          {category.node.name}
                        </span>
                      </a>
                    ))}
                  </div>
                  <a
                    href={`/articles/${article.node.slug}`}
                    className="block mt-4"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {article.node.title}
                    </p>
                    <div
                      className="mt-3 text-base text-gray-500"
                      dangerouslySetInnerHTML={{ __html: article.node.excerpt }}
                    ></div>
                  </a>
                  <div className="mt-6 flex items-center">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article.node.date}>
                        {dayjs(article.node.date).format("MMM DD, YYYY")}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>3 min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <NewsletterCta />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const users = await getUsers();

  const paths = users.nodes.map((user) => ({
    params: { slug: user.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const author = await getUser(params.slug);

  const articles = author.posts.edges.sort((a, b) => {
    return new Date(b.node.date) - new Date(a.node.date);
  });

  const featuredArticle = articles.shift();

  return {
    props: {
      author,
      articles,
      featuredArticle,
    },
  };
}

export default Author;
