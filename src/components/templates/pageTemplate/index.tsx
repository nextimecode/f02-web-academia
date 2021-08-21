import React from 'react'
import Head from 'next/head'
import Header from '../../organisms/header'
import Footer from '../../organisms/footer'
import Button from '../../atoms/button'
import { HOTMART_COURSE_WOMEN } from '../../../pages/index'

type Props = {
    children: unknown
    title: string
}

const PageTemplate = ({ children, title }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Saira:wght@400;500;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div>
                <Header />

                <main>
                    <div>{children}</div>
                </main>
                <footer>
                    <Footer />
                </footer>
                <div className="btn-sticky">
                    <Button
                        label={'Compre Aqui!'}
                        href={HOTMART_COURSE_WOMEN}
                        target="_blank"
                        className={
                            'btn rounded btn-buy btn-buy-course text-uppercase fw-500'
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default PageTemplate
