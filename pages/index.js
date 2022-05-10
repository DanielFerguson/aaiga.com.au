import Link from "next/link";
import { NextSeo } from "next-seo";
import { getAuthors, getPosts } from "@/lib/ghost";

export default function Home({ posts, authors }) {
  return (
    <>
      <NextSeo
        title="Aaiga | Accelerate your startup journey"
        description="This example uses more of the available config options."
        canonical="https://aaiga.com.au"
        openGraph={{
          type: "website",
          url: "https://aaiga.com.au",
          title: "Aaiga | Accelerate your startup journey",
          description:
            "This example uses more of the available config options.",
          images: [{ url: "https://aaiga.com.au/aaiga-dark.png" }],
          site_name: "Aaiga",
        }}
        twitter={{
          site: "@aaiga_au",
          cardType: "summary_large_image",
        }}
      />

      <main>
        <h1>Aaiga</h1>
        <h2>Articles</h2>
        <ul>
          {posts.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h2>Authors</h2>
        <ul>
          {authors.map(({ slug, name }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const authors = await getAuthors();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, authors },
  };
}
