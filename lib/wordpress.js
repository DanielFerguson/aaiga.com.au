const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, variables = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getPosts() {
  const data = await fetchAPI(
    `
      query GetArticles {
        posts {
          nodes {
            date
            slug
            title
            excerpt
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            author {
              node {
                slug
                name
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    `,
    {
      variables: {},
    }
  );

  return data;
}

export async function getSinglePost(slug) {
  const data = await fetchAPI(
    `
      query GetArticles($id: ID!) {
        post(id: $id, idType: SLUG) {
          date
          title
          tags {
            edges {
              node {
                name
                slug
              }
            }
          }
          modified
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          excerpt
          content
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    `,
    { id: slug }
  );

  return data;
}
