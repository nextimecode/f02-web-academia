import React from 'react'
import Title from '../../atoms/title'
import Video from '../../atoms/video'

type Props = {
    treinosFuncionamTitle: string
    treinosFuncionamText: string
    treinosFuncionamVideo1: string
    treinosFuncionamVideo2: string
}

const TreinosFuncionam = ({
    treinosFuncionamTitle,
    treinosFuncionamText,
    treinosFuncionamVideo1,
    treinosFuncionamVideo2
}: Props) => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 d-flex">
                        <div className="justify-content-center align-middle m-auto">
                            <Title
                                label={treinosFuncionamTitle}
                                className="text-start"
                            />
                            <p>{treinosFuncionamText}</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="ratio ratio-16x9">
                            <Video src={treinosFuncionamVideo1} />
                        </div>
                        <div className="ratio ratio-16x9">
                            <Video src={treinosFuncionamVideo2} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TreinosFuncionam
