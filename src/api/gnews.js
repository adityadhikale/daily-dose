const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const fetchGNews = async ({ pageParam = 1, category, search }) => {
  const baseUrl = search
    ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(search)}`
    : `https://gnews.io/api/v4/top-headlines?topic=${category.toLowerCase()}`;

  const url = `${baseUrl}&lang=en&token=${GNEWS_API_KEY}&page=${pageParam}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    articles: data.articles,
    nextPage: pageParam + 1,
    hasMore: data.articles.length > 0,
  };
};

