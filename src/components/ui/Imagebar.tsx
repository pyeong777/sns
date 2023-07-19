import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

type Props = {
  username: string;
  images: string[];
  priority?: boolean;
};

export default function Imagebar({
  username,
  images,
  priority = false,
}: Props) {
  return (
    <>
      {images.length > 1 ? (
        <Carousel responsive={responsive} showDots={true} arrows={false}>
          {images.map((image, index) => (
            <Image
              className="object-cover w-full aspect-square"
              key={index}
              src={image}
              alt={`photo by ${username}`}
              width={500}
              height={500}
              priority={priority}
            />
          ))}
        </Carousel>
      ) : (
        images.map((image, index) => (
          <Image
            className="object-cover w-full aspect-square"
            key={index}
            src={image}
            alt={`photo by ${username}`}
            width={500}
            height={500}
            priority={priority}
          />
        ))
      )}
    </>
  );
}
