import React from 'react'
import Video from '../../video'

const ConsultoriaVideo = () => {
    return (
        <section>
            <div className="container">
                <h1>Conheça um pouco mais sobre a nossa consultoria</h1>
                <div className="col-md-6 offset-md-3">
                    <div className="ratio ratio-4x3 justify-content-center">
                        <Video src="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsultoriaVideo
