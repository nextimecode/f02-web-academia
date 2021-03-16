import React from 'react'

const VideoConsultoria = () => {
    return (
        <section>
            <div className="container">
                <h1>Conheça um pouco mais sobre a nossa consultoria</h1>
                <div className="col-md-6 offset-md-3">
                    <div className="ratio ratio-16x9 justify-content-center">
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
        </section>
    )
}

export default VideoConsultoria
