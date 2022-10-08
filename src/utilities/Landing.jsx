import Carousel from "react-bootstrap/Carousel";
import imgHero1 from "../assets/carusel-1.webp";
import imgHero2 from "../assets/carusel-2.webp";
import imgHero3 from "../assets/carusel-3.webp";
import imgHero4 from "../assets/carusel-4.webp";
import imgHero5 from "../assets/carusel-5.webp";

export const Landing = () => {
    return (
        <Carousel fade controls={false} indicators={false} className="mb-5 p-5">
            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-75 mx-auto"
                    src={imgHero1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-75 mx-auto"
                    src={imgHero2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-75 mx-auto"
                    src={imgHero3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-75 mx-auto"
                    src={imgHero4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-75 mx-auto"
                    src={imgHero5}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};
