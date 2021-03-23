import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { PhotoProps } from '../../../types/types'
import './style.scss'

type Props = {
    photos: Record<string, PhotoProps>[]
}

const PhotoSlider = ({ photos }: Props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 0
        }
    }

    return (
        <Carousel
            partialVisible={true}
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
            slidesToSlide={1}
        >
            {photos.map((p, index) => (
                <div key={index}>
                    <img
                        className="d-block w-100 px-1"
                        src={p.photo.src}
                        alt={p.photo.alt}
                    />
                </div>
            ))}
        </Carousel>
    )
}

export default PhotoSlider
