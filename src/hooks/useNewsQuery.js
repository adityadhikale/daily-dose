import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGNews } from '../api/gnews';
import { fetchNewsData } from '../api/newsdata';

export const useNewsQuery = ({ category, source, search }) => {
  const isGNews = source === 'gnews';
  const fetchFunction = isGNews ? fetchGNews : fetchNewsData;

  return useInfiniteQuery({
    queryKey: ['news', source, category, search],
    queryFn: ({ pageParam = 1 }) =>
      fetchFunction({ pageParam, category, search }),
    getNextPageParam: (lastPage) =>
      isGNews && lastPage.hasMore ? lastPage.nextPage : undefined,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    enabled: !!category && !!source,
    retry: 1,
  });
};
