import { createClient } from 'tinacms/dist/client';

function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
const NieuwsPartsFragmentDoc = gql`
    fragment NieuwsParts on Nieuws {
  __typename
  layout
  title
  date
  soort
  thumbnail
  trailer
  slug
  draft
  tags
  body
}
    `;
const ReviewsPartsFragmentDoc = gql`
    fragment ReviewsParts on Reviews {
  __typename
  title
  date
  schrijver
  soort
  thumbnail
  poster
  summary
  slug
  rating
  tags
  featured
  trailer
  body
}
    `;
const NieuwsDocument = gql`
    query nieuws($relativePath: String!) {
  nieuws(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NieuwsParts
  }
}
    ${NieuwsPartsFragmentDoc}`;
const NieuwsConnectionDocument = gql`
    query nieuwsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NieuwsFilter) {
  nieuwsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NieuwsParts
      }
    }
  }
}
    ${NieuwsPartsFragmentDoc}`;
const ReviewsDocument = gql`
    query reviews($relativePath: String!) {
  reviews(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ReviewsParts
  }
}
    ${ReviewsPartsFragmentDoc}`;
const ReviewsConnectionDocument = gql`
    query reviewsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ReviewsFilter) {
  reviewsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ReviewsParts
      }
    }
  }
}
    ${ReviewsPartsFragmentDoc}`;
function getSdk(requester) {
  return {
    nieuws(variables, options) {
      return requester(NieuwsDocument, variables, options);
    },
    nieuwsConnection(variables, options) {
      return requester(NieuwsConnectionDocument, variables, options);
    },
    reviews(variables, options) {
      return requester(ReviewsDocument, variables, options);
    },
    reviewsConnection(variables, options) {
      return requester(ReviewsConnectionDocument, variables, options);
    }
  };
}
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

const client = createClient({ cacheDir: "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/tina/__generated__/.cache/1768586429173", url: "https://content.tinajs.io/1.6/content/68f4665d-7d78-4cfc-90e0-236381fd6e9c/github/main", token: "3f2958f6e4e7461c17694871029a66d6abfbcc34", queries });

export { client as c };
