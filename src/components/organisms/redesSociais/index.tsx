import { Container } from 'next/app'
import React from 'react'
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
            <Container className="px-2 my-2">
                <Title label="Já me segue no Instagram?" />
                <Subhead label="Suporte diário para te ajudar nas dúvidas do treino Vinidias e no seu novo mundo fitness" />
                <PhotoSlider photos={instagramPosts} />
            </Container>
        </section>
    )
}

export default RedesSociais
