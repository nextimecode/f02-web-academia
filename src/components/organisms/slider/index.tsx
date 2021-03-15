import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

type Props = {
    photos
}

const Slider = ({ photos }: Props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container m-4"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            transitionDuration={300}
            arrows={true}
            // slidesToSlide={1}
            // autoPlaySpeed={500}
            // autoPlay={true}
        >
            {photos.map((p, index) => (
                <div key={index}>
                    <img
                        className="d-block w-100"
                        src={p.photo.src}
                        alt={p.photo.alt}
                    />
                </div>
            ))}
        </Carousel>
    )
}

export default Slider
