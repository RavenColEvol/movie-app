import { useEffect, CSSProperties } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";

import SimilarMovies from "./SimilarMovies";

import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config";
import Subtitle from "./Subtitle";
import { useParams } from "react-router-dom";
import { movieDetailOpts } from "./api/options";

export interface IMovie {
  id: number;
  original_language: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
  tagline: string;
  vote_average: number;
  runtime: number;
  status: boolean;
  overview: string;
  genres: { name: string }[];
}

export default function MovieDetail() {
  const params = useParams();
  const movie_id = params.movie_id!;
  const { isLoading, data, refetch } = useQuery(movieDetailOpts(movie_id));
  useEffect(() => {
    refetch();
  }, [movie_id, refetch]);

  const desktopSrc = {
    low: `${IMAGE_BASE_URL}${POSTER_SIZE}${data?.poster_path}`,
    high: `${IMAGE_BASE_URL}${BACKDROP_SIZE}${data?.poster_path}`,
  };
  const mobileSrc = {
    low: `${IMAGE_BASE_URL}${POSTER_SIZE}${data?.backdrop_path}`,
    high: `${IMAGE_BASE_URL}${BACKDROP_SIZE}${data?.backdrop_path}`,
  };

  return (
    <>
      <Helmet>
        <title>{isLoading ? "Loading..." : data.title}</title>
      </Helmet>
      {!isLoading && (
        <div className="mx-auto max-w-screen-lg">
          <div className="flex flex-col sm:flex-row mb-6">
            <div className="movie_detail--poster w-full sm:w-1/3 justify-start mb-4">
              <div
                style={
                  { "--data-url": `url(${desktopSrc.low})` } as CSSProperties
                }
                className="card__img--shadow md:w-64 max-w-full rounded-lg"
              >
                <img
                  style={
                    {
                      viewTransitionName: `poster-img-${movie_id}`,
                      "--data-url": `url(${desktopSrc.low})`,
                    } as CSSProperties
                  }
                  onLoad={(event) => {
                    event.currentTarget.src = desktopSrc.high;
                  }}
                  alt={data.title}
                  loading="eager"
                  src={desktopSrc.low}
                  className="rounded-lg md:w-64 max-w-full md:block hidden"
                />
              </div>
              <div
                style={
                  { "--data-url": `url(${desktopSrc.low})` } as CSSProperties
                }
                className="card__img--shadow rounded-lg"
              >
                <img
                  style={
                    {
                      viewTransitionName: `poster-img-${movie_id}`,
                      "--data-url": `url(${mobileSrc})`,
                    } as CSSProperties
                  }
                  onLoad={(event) => {
                    event.currentTarget.src = mobileSrc.high;
                  }}
                  loading="eager"
                  src={mobileSrc.low}
                  className="rounded-lg md:hidden block"
                  alt={data.title}
                />
              </div>
            </div>

            <div className="w-full sm:w-2/3 lg:pr-20 lg:pl-4 md:pl-8 px-2 md:pr-12">
              <h1
                style={{ viewTransitionName: `poster-title-${movie_id}` }}
                className="md:text-4xl text-2xl text-gray-800 tracking-wide uppercase font-light"
              >
                {data.title}
              </h1>
              <h2 className="text-gray-800 font-semibold mb-3 text-sm md:text-normal">
                {data.tagline}
              </h2>
              <div className="flex justify-between items-center mb-6">
                <div
                  className="stars"
                  style={
                    {
                      "--rating": data.vote_average,
                      viewTransitionName: `poster-rating-${movie_id}`,
                    } as CSSProperties
                  }
                ></div>
                <p className="text-gray-600 font-bold text-xs uppercase">
                  {data.runtime}min / {data.status}
                </p>
              </div>

              <div className="mb-6">
                <p className="uppercase text-gray-800 text-xs font-bold tracking-wide mb-2">
                  The genre
                </p>
                {data.genres?.map((genre: { name: string }) => (
                  <button
                    key={genre.name}
                    className="px-2 py-1 mr-1 mb-1 text-xs font-bold  mr-2 text-gray-800 bg-gray-200 rounded-full "
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
              <p className="uppercase text-gray-800 text-xs font-bold tracking-wide mb-2">
                The synopsis
              </p>
              <p className="text-sm text-gray-700">{data.overview}</p>
            </div>
          </div>
          <Subtitle className="uppercase ml-2">Recommended</Subtitle>

          <SimilarMovies movieId={movie_id} />
        </div>
      )}
    </>
  );
}
