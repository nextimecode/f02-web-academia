import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Menu from '../menu'

const Header = () => {
    const currentUrl = useRouter().pathname
    const homeUrl = currentUrl === '/' ? '#home' : '/'

    const urlLogo = 'assets/img/logos/logomarca.png'

    const listNavLinks = [
        {
            navLink: {
                href: homeUrl,
                label: 'Home'
            }
        },
        {
            navLink: {
                href: '#planos',
                label: 'Comece Agora'
            }
        },
        {
            navLink: {
                href: '/planos',
                label: 'Planos',
                items: [
                    {
                        navLink: {
                            href: '/treino-mulheres',
                            label: 'Treino para mulheres'
                        }
                    },
                    {
                        navLink: {
                            href: '/treino-homens',
                            label: 'Treino para homens'
                        }
                    },
                    {
                        navLink: {
                            href: '/consultoria',
                            label: 'Consultoria personalizada'
                        }
                    }
                ]
            }
        },
        {
            navLink: {
                href: 'https://app-vlc.hotmart.com/login',
                label: 'Área de Alunos'
            }
        }
    ]

    return (
        <header>
            <Menu urlLogo={urlLogo} listNavLinks={listNavLinks} />
        </header>
    )
}

export default Header
