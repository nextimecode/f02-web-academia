import React from 'react'
import LazyLoad from 'react-lazyload';
import { PhotoProps } from '../../../types/types'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
import PhotoSlider from '../photoSlider'

type Props = {
    instagramPosts: Record<string, PhotoProps>[]
}

const RedesSociais = ({ instagramPosts }: Props) => {
    return (
        <section>
            <div className="container px-2 my-2">
                <Title label="Já me segue no Instagram?" />
                <Subhead label="Suporte diário para te ajudar nas dúvidas do treino Vinidias e no seu novo mundo fitness" />
                <LazyLoad offset={100}>
                    <PhotoSlider photos={instagramPosts} />
                </LazyLoad>
            </div>
        </section>
    )
}

export default RedesSociais
