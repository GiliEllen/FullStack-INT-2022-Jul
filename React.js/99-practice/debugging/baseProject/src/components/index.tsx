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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null)

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
    url: "https://imdb8.p.rapidapi.com/",
    params: { q: "game" },
    headers: {
      "X-RapidAPI-Key": "325d20f695msh54d1f03594ba21cp1c5242jsn69f27e1c4036",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  const handleGetMovies = async () => {
    try {
      setError(null)
      setLoading(true)
      const response = await axios.request(options);
      setMovies(response.data.d);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };
  const handleGetMoviesSlow = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://hub.dummyapis.com/delay?seconds=10"
      );
      setDelay(data);
      const response = await axios.request(options);
      setMovies(response.data.d);
      setLoading(false);
      setError(null)
    } catch (error:any) {
      console.error(error)
      setError(error)
    }
  };
  const handleGetMoviesWrong = async () => {
    try {
      setLoading(true)
      const response = await axios.request(optionsWrong);
      console.log(response.data);
      if(response.data.error) {
        throw new Error("E1")
        
      }
      setMovies(response.data.d);
      setLoading(false)
    } catch (error:any) {
      console.error(error)
      setError(error)
    }
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  const getErrorView = () => {
    // setLoading(false)
    console.log("hi")
    return (
      <div>
        Oh no! Something went wrong. {error? error.message : null}
        <button onClick={handleGetMovies}>
          Try again
        </button>
      </div>
    )
  }

  return (
    <Container>
      <button onClick={handleGetMoviesSlow}>Slow get</button>
      <button onClick={handleGetMoviesWrong}>Wrong get</button>
      <button onClick={handleGetMovies}>Reload</button>
      <h1>Hot movies</h1>
      {/* {!loading && movies.length > 0 ? (
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
      )} */}
      {error? getErrorView() : !loading && movies.length > 0 ? (
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
    </Container>
  );
}
