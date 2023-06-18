import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4,
  },
};

export default function Scrollbar({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      containerClass="flex w-full gap-2"
      responsive={responsive}
      itemClass="mx-1"
    >
      {children}
    </Carousel>
  );
}
