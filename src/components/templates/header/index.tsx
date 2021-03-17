import React from 'react'
import Menu from '../../organisms/menu'

const Header = () => {
    const urlLogo = 'assets/img/logos/logo.png'

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

    return <header><Menu urlLogo={urlLogo} listNavLinks={listNavLinks} /></header>
}

export default Header
