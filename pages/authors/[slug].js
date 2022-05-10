import { getAuthor, getAuthors } from "@/lib/ghost";
import { NextSeo, ProfilePageJsonLd } from "next-seo";

const AuthorPage = ({ author }) => {
  return (
    <>
      <NextSeo
        title=""
        titleTemplate="%s | Aaiga"
        description=""
        canonical={`https://aaiga.com.au/authors/${author.slug}`}
        openGraph={{
          title: "",
          description: "",
          url: `https://aaiga.com.au/posts/${author.slug}`,
          type: "profile",
          profile: {
            firstName: "First",
            lastName: "Last",
            username: "firstlast123",
            gender: "male",
          },
          images: [{ url: post.feature_image }],
        }}
        twitter={{
          handle: "@thedannyferg",
          site: "@aaiga_au",
          cardType: "summary_large_image",
        }}
      />
      <ProfilePageJsonLd
        lastReviewed="2014-10-01T19:30"
        breadcrumb={[
          {
            position: 1,
            name: "Articles",
            item: "https://example.com/books",
          },
          {
            position: 2,
            name: "Authors",
            item: "https://example.com/books/authors",
          },
        ]}
      />

      <main>
        <h1>{author.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: author.bio }} />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const authors = await getAuthors();

  const paths = authors.map((author) => ({
    params: { slug: author.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const author = await getAuthor(context.params.slug);

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: { author },
  };
}

export default AuthorPage;
