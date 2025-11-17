import type { CarouselItem } from "../../../../shared/components/Carousel/types/carousel-item";
import { CarouselList } from "../../../../shared/components/Carousel/CarouselList/CarouselList";
import { usePageTitle } from "../../../../shared/hooks/useLayoutContext";
import { useEffect } from "react";
import styles from "./Movies.module.css";

const DUMMY_DATA: CarouselItem[] = [
  { imageUrl: "#", title: "A" },
  { imageUrl: "#", title: "B" },
  { imageUrl: "#", title: "C" },
  { imageUrl: "#", title: "D" },
  { imageUrl: "#", title: "E" },
];

async function getMoviesByGenre() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&with_genres=${28}`
  );
  const data = await res.json();
  return data.results;
}

export function Movies() {
  const context = usePageTitle();

  getMoviesByGenre().then((movies) => {
    console.log(movies);
  });

  useEffect(() => {
    if (context?.setTitle) {
      context.setTitle("Movies");
    }
  });

  return (
    <section className={styles["movies__container"]}>
      <CarouselList items={DUMMY_DATA} />
      <CarouselList items={DUMMY_DATA} />
      <CarouselList items={DUMMY_DATA} />
    </section>
  );
}
