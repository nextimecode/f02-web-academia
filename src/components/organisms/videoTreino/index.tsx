import React from 'react'
import Button from '../../atoms/button'
import Title from '../../atoms/title'
import Video from '../../atoms/video'

type Props = {
    labelTituloLinha1: string
    labelTituloLinha2: string
    srcVideo: string
    buttonLabel: string
    buttonHref: string
}

const VideoTreino = ({
    srcVideo,
    buttonLabel,
    buttonHref,
    labelTituloLinha1,
    labelTituloLinha2
}: Props) => {
    return (
        <section className="py-5" style={{ height: '75vh' }}>
            <div className="container">
                <div className="row" style={{ height: '75vh' }}>
                    <div className="col-md-12 d-flex">
                        <div className="align-middle m-auto justify-content-center text-center">
                            <Title label={labelTituloLinha1} />
                            <Title
                                label={labelTituloLinha2}
                                className="text-warning"
                            />

                            <div className="ratio ratio-16x9">
                                <Video src={srcVideo} />
                            </div>

                            <Button label={buttonLabel} href={buttonHref} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoTreino
