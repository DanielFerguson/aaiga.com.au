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
              slug
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

export async function getUsers() {
  const data = await fetchAPI(
    `
      query GetUsers {
        users {
          nodes {
            slug
          }
        }
      }
    `,
    {}
  );

  return data.users;
}

export async function getUser(slug) {
  const data = await fetchAPI(
    `
      query GetUser($id: ID = "id") {
        user(id: $id, idType: SLUG) {
          avatar {
            url
          }
          description
          name
          posts {
            edges {
              node {
                title
                slug
                tags {
                  edges {
                    node {
                      name
                    }
                  }
                }
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
                excerpt
                date
                categories {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    { id: slug }
  );

  return data.user;
}
