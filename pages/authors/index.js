import Layout from "@/components/layout";
import NewsletterCta from "@/components/newsletter-cta";
import { getUsers } from "@/lib/wordpress";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

const title = "Meet our authors";
const description =
  "We're innovators, challengers and doers. We build businesses and startups one day, write about and teach lessons the next.";
const url = "https://aaiga.com.au/authors";

const Authors = ({ authors }) => {
  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url: url,
          type: "website",
          title: title,
          description: description,
        }}
        twitter={{
          site: "@aaiga_au",
          cardType: "summary",
        }}
      />

      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Team
          </h2>
          <p className="text-xl text-gray-500">
            Nulla quam felis, enim faucibus proin velit, ornare id pretium.
            Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat
            eu faucibus vivamus eget bibendum cras.
          </p>
        </div>
        <div className="lg:col-span-2">
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
          >
            {authors.map((author) => (
              <li key={author.name}>
                <Link href={`/authors/${author.slug}`}>
                  <a>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2 h-96 w-full relative">
                        <Image
                          className="object-cover shadow-lg rounded-lg"
                          layout="fill"
                          src={author.avatar.url.replace("s=96", "s=512")}
                          alt="Authors"
                        />
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className="text-slate-900">{author.name}</h3>
                        <p className="text-indigo-600">Author, Editor</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{author.description}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <NewsletterCta />
    </Layout>
  );
};

export async function getStaticProps() {
  const authors = await getUsers();

  return {
    props: {
      authors: authors.nodes,
    },
  };
}

export default Authors;
