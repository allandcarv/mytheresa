import { CarouselListItem } from "../CarouselListItem/CarouselListItem";
import type { CarouselItem } from "../types/carousel-item";
import styles from "./CarouselList.module.css";

interface CarouselListProps {
  items: CarouselItem[];
}

export function CarouselList({ items }: CarouselListProps) {
  return (
    <ul className={styles["carousel"]}>
      {items.map((item, idx) => (
        <CarouselListItem
          key={idx}
          imageUrl={item.imageUrl}
          title={item.title}
        />
      ))}
    </ul>
  );
}
