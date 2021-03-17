import React from 'react'
import { Container } from 'react-bootstrap'
import Title from '../../atoms/title'

const BemVindo = () => {
    return (
        <section>
            <Container className="px-2 my-2">
                <Title label="Seja bem-vindo!" />
                <div className="row px-2 my-2">
                    <div className="col-md-12 col-lg-5 m-auto">
                        <p>
                            Para quem não me conhece, meu nome é João da Silva, 
                            mais conhecido como São Miguelito. Sou
                            formado em Educação Fisica e pós-graduado em
                            Fisiologia do Exercício.
                        </p>
                        <p>
                            Possuo 8 anos atuando como Personal Trainer e há 5
                            anos com o atendimento online. Preparei o melhor do
                            meu método de treinamento (o mesmo que utilizo
                            diariamente com as minhas alunas presenciais) para
                            ajudar você a alcançar sua melhor forma em qualquer
                            lugar mundo.
                        </p>
                        <p>
                            Já são mais de 4 mil atendimentos personalizados e
                            mais de 9 mil alunos na plataforma de treinos
                            online. Agora você não estará mais sozinha!
                        </p>
                    </div>
                    <div className="col-md-12 col-lg-7 d-flex justify-content-center m-auto">
                        <div className="ratio ratio-4x3">
                            <iframe
                                loading="lazy"
                                className="w-100 py-4"
                                title="Player de Vídeo youtube"
                                src="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1"
                                data-rocket-lazyload="fitvidscompatible"
                                data-ll-status="loaded"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BemVindo
