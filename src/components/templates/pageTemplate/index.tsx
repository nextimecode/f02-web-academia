import React from 'react'
import Head from 'next/head'
import WhatsApp from '../../organisms/whatsapp'
import Header from '../../organisms/header'
import Footer from '../../organisms/footer'

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
                    href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap"
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
                <WhatsApp />
            </div>
        </>
    )
}

export default PageTemplate
