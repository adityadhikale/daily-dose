const NEWSDATA_API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;

export const fetchNewsData = async ({ category, search }) => {
  const query = search || category || 'latest';
  const encodedQuery = encodeURIComponent(query.toLowerCase());

  const url = `https://newsdata.io/api/1/news?apikey=${NEWSDATA_API_KEY}&language=en&q=${encodedQuery}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    articles: data.results ?? [],
    hasMore: false, // disable infinite scroll
  };
};
