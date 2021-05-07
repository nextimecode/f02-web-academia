import React from 'react'
import Head from 'next/head'
import Header from '../../organisms/header'
import Footer from '../../organisms/footer'
import Button from '../../atoms/button'
import { telefone } from '../../../pages/index'

type Props = {
    children: unknown
    title: string
    mensagem?: string
}

const PageTemplate = ({
    children,
    title,
    mensagem = 'Olá, gostaria de saber mais sobre os treinamentos.'
}: Props) => {
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
                    // href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap"
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
                        label="Dúvidas?"
                        prefixIcon="whatsapp"
                        href={`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`}
                        target="_blank"
                        style={{ backgroundColor: '#25D366', color: '#fff' }}
                    />
                </div>
            </div>
        </>
    )
}

export default PageTemplate
