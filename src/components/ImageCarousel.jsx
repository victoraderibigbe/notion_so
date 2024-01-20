import { Carousel } from "flowbite-react";

const ImageCarousel = ({ images }) => {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96 carousel">
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-img"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
