// import Link from "next/link";

import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a8f0c91247msh962c310a92d4c24p19f880jsnc4513914c3f9",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = await data.titles;

  return (
    <>
      <section className={`${styles.movieSection}`}>
        <div className={styles.container}>
          <h1>Series Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
            a1
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
