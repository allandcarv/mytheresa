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

export function Movies() {
  const context = usePageTitle();

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
