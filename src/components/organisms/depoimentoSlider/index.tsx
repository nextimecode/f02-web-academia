import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Depoimento from '../../molecules/depoimento'

type Props = {
    depoimentos: Record<string, any>
}

const DepoimentoSlider = ({ depoimentos }: Props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
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
        >
            {depoimentos.map((d, index) => (
                <Depoimento key={index} depoimento={d.depoimento}/>
            ))}
            
        </Carousel>
    )
}

export default DepoimentoSlider
