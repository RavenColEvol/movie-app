import InfiniteScroll from "react-infinite-scroll-component";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import { useInfiniteQuery } from "@tanstack/react-query";
import Loader from "./Loader";
import MovieCard from "./MovieCard";
import { IMovie } from "./MovieDetail";
import { fetchMovies } from "./hooks";

interface Props {
  query: string;
}

function Result({ query }: Props) {
  const { fetchNextPage, hasNextPage, data, isLoading } =
    useInfiniteQuery({
      queryKey: ["movies", query],
      queryFn: ({ pageParam }) => fetchMovies(pageParam, query),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage.page === lastPage.total_pages) return;
        return lastPage.page + 1;
      },
      select: ({ pages }) => {
        const result: any[] = [];
        pages.forEach(({ results }) => result.push(...results));
        return result;
      },
    });

  if (isLoading) {
    return (
      <div className="grid row-auto grid-cols-12 md:col-gap-6 md:row-gap-3 lg:col-gap-12 lg:row-gap-4 md:mr-4 lg:mr-0">
        <Loader />
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={data!.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Loader />}
      style={{ overflow: "inherit" }}
      className="grid row-auto grid-cols-12 md:col-gap-6 md:row-gap-3 lg:col-gap-12 lg:row-gap-4 md:mr-4 lg:mr-0"
    >
      {data!.map((movie: IMovie) => (
        <MovieCard
          key={movie.id}
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
          title={movie.title}
          vote_average={movie.vote_average}
          id={movie.id}
          url={movie.id}
        />
      ))}
    </InfiniteScroll>
  );
}

export default Result;
