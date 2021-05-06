import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { PhotoProps } from '../../../../types/types'
import './style.scss'

import { instagramLink } from '../../../../pages/index'

type Props = {
    photos: Record<string, PhotoProps>[]
    showDots?: boolean
    draggable?: boolean
}

const PhotoSlider = ({ photos, showDots = true, draggable = false }: Props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1025 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 601 },
            items: 2,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            partialVisibilityGutter: 0
        }
    }

    return (
        <Carousel
            partialVisible={true}
            swipeable={true}
            draggable={draggable}
            showDots={showDots}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container m-4"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px px-2"
            transitionDuration={300}
            arrows={true}
            slidesToSlide={1}
        >
            {photos.map((p, index) => (
                <div key={index} style={{ height: '100%' }}>
                    <a href={instagramLink} target="_blank" rel="noreferrer">
                        <img
                            className="d-block w-100 px-1 m-auto insta-post"
                            src={p.photo.src}
                            alt={p.photo.alt}
                            height={'100%'}
                        />
                    </a>
                </div>
            ))}
        </Carousel>
    )
}

export default PhotoSlider
