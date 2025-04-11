import { useNewsQuery } from '../hooks/useNewsQuery';
import NewsCard from './NewsCard';
import { useEffect, useRef } from 'react';

const NewsList = ({ category, source, search }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useNewsQuery({ category, source, search });

  const loaderRef = useRef();

  useEffect(() => {
    if (source !== "gnews") return; // disable observer for newsdata

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage, source]);

  if (status === 'loading') return <p className="text-center">Loading...</p>;
  if (status === 'error') return <p className="text-center">Error loading news.</p>;

  return (
    <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.pages?.flatMap((page, pageIndex) =>
        (page.articles ?? []).map((article, i) => (
          <NewsCard key={`${pageIndex}-${i}`} article={article} />
        ))
      )}

       {/* Fallback when no articles are found */}
       {data?.pages?.[0]?.articles?.length === 0 && (
      <p className="col-span-full text-center text-gray-500">No news found.</p>
    )}

        {/* Show loader only for GNews */}
      {source === "gnews" && (
        <div ref={loaderRef} className="h-10 text-center col-span-full">
          {isFetchingNextPage && <span>Loading more...</span>}
        </div>
      )}
    </div>
  );
};


export default NewsList;
