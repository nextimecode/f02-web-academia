import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Head from 'next/head'

type Props = {
    children: unknown
}

const PageTemplate = ({ children }: Props) => {
    const listNavLinks = [
        {
            navLink: {
                href: '/',
                label: 'Home'
            }
        },
        {
            navLink: {
                href: '/comece',
                label: 'Começa Agora'
            }
        },
        {
            navLink: {
                href: '/planos',
                label: 'Planos'
            }
        },
        {
            navLink: {
                href: '/area-do-aluno',
                label: 'Área de Alunos'
            }
        }
    ]

    const urlLogo = 'assets/img/logos/logo.png'

    return (
        <>
            <Head>
                <title>Homepage</title>
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
                <header>
                    <Header
                        urlLogo={urlLogo}
                        width="60px"
                        height="60px"
                        listNavLinks={listNavLinks}
                    />
                </header>

                <main>
                    <div>{children}</div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default PageTemplate
