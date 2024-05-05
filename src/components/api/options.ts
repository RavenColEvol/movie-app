import { queryOptions } from "@tanstack/react-query";
import {
  fetchByCategory,
  fetchMovieById,
  fetchSimilarMovieById,
} from "../hooks";
import { queryClient } from "../../App";

export const movieDetailOpts = (movie_id: string) =>
  queryOptions({
    queryKey: ["movie", movie_id],
    queryFn: () => fetchMovieById(movie_id),
    staleTime: Infinity
  });

export const categoryOpts = (category: string) =>
  queryOptions({
    queryKey: [category],
    queryFn: () => fetchByCategory(category),
    staleTime: Infinity
  });

export const similarMovieOpts = (movie_id: string) =>
  queryOptions({
    queryKey: ["similar", movie_id],
    queryFn: () => fetchSimilarMovieById(movie_id),
    staleTime: Infinity,
    select: (data) => {
      data.forEach((movie: any) =>
        queryClient.setQueryData(movieDetailOpts(movie.id).queryKey, movie)
      );
      return data;
    },
  });
