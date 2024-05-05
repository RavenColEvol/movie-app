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
    initialData: () => {
      console.log('getting', movie_id, queryClient.getQueryData(['movie', movie_id]));
      return;
    }
  });

export const categoryOpts = (category: string) =>
  queryOptions({
    queryKey: [category],
    queryFn: () => fetchByCategory(category),
  });

export const similarMovieOpts = (movie_id: string) =>
  queryOptions({
    queryKey: ["similar", movie_id],
    queryFn: () => fetchSimilarMovieById(movie_id),
    select: (data) => {
      data.forEach((movie: any) =>
        queryClient.setQueryData(movieDetailOpts(movie.id).queryKey, movie)
      );
      return data;
    },
  });
