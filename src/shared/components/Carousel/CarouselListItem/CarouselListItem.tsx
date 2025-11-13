import type { CarouselItem } from "../types/carousel-item";
import { Link } from "react-router-dom";

export function CarouselListItem({ imageUrl, title }: CarouselItem) {
  return (
    <li>
      <div>
        <Link to={title}>
          <p>{title}</p>
        </Link>
      </div>
    </li>
  );
}
