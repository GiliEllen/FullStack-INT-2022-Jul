import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import styled from "styled-components";
import axios from "axios";
import Spinner from "./Spinner";

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function HomePage(props: IHomePageProps) {
  const [movies, setMovies] = useState([]);
  const [delay, setDelay] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    // url: "https://imdb8.p.rapidapi.com/",
    params: { q: "game" },
    headers: {
      "X-RapidAPI-Key": "325d20f695msh54d1f03594ba21cp1c5242jsn69f27e1c4036",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const optionsWrong = {
    method: "GET",
    // url: "https://imdb8.p.rapidapi.com/auto-complete",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: "game" },
    headers: {
      "X-RapidAPI-Key": "325d20f695msh54d1f03594ba21cp1c5242jsn69f27e1c4036",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const handleGetMovies = async () => {
    try {
      const response = await axios.request(options);
      setMovies(response.data.d);
    } catch (error) {
      console.error(error);
    }
  };
  const handleGetMoviesSlow = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get(
        "https://hub.dummyapis.com/delay?seconds=10"
      );
      setDelay(data);
      const response = await axios.request(options);
      if (response.data.error) {
        throw new Error("E2");
      }
      setMovies(response.data.d);
      setLoading(false);
    } catch (error: any) {
      setError(error);
    }
  };
  const handleGetMoviesWrong = async () => {
    try {
      setLoading(true);
      const response = await axios.request(optionsWrong);
      if (response.data.error) {
        throw new Error("E1");
      }
      setLoading(false);
      setMovies(response.data.d);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetMoviesWrong();
  }, []);

  const getErrorView = () => {
    return (
      <div>
        somthing went wrong!
        <button onClick={handleGetMovies}>Try again</button>
      </div>
    );
  };

  return (
    <Container>
      <button onClick={handleGetMoviesSlow}>Slow get</button>
      <button onClick={handleGetMoviesWrong}>Wrong get</button>
      <button onClick={handleGetMoviesWrong}>Reload</button>
      <h1>Hot movies</h1>
      {error ? (
        getErrorView()
      ) : !loading && movies.length > 0 ? (
        movies.map((movie: any) => {
          return (
            <div key={movie.id}>
              <img style={{ width: "200px" }} src={movie.i.imageUrl} alt="" />
              <h2>{movie.l}</h2>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}

      {/* {movies.length > 0 ? (
        movies.map((movie: any) => {
          return (
            <div key={movie.id}>
              <img style={{ width: "200px" }} src={movie.i.imageUrl} alt="" />
              <h2>{movie.l}</h2>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
      {error ? getErrorView() : null} */}
    </Container>
  );
}
