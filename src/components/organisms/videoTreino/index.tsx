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
        <section className="py-5 mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <div className="text-center">
                                <Title label={labelTituloLinha1} />
                                <Title
                                    label={labelTituloLinha2}
                                    className="text-primary"
                                />
                                <div className="col-md-12 col-lg-6 offset-lg-3">
                                    <div className="ratio ratio-4x3">
                                        <Video src={srcVideo} />
                                    </div>
                                </div>

                                <Button label={buttonLabel} href={buttonHref} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoTreino
