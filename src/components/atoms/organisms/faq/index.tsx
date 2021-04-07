import React from 'react'
import Title from '../../title'
import PerguntasFrequentes from '../perguntasFrequentes'

const perguntasRespostas = [
    {
        question: 'Não tenho equipamento em casa. Posso adquirir a plataforma?',
        answer: `
        O que você não deve e não pode é ficar parada(o) corpo precisa de se exercitar se mexer; mais é claro que se você estiver um peso além do peso corporal.
        Ex: garrafas pets saco de arroz, feijão, mochila com peso dentro. Confesso que você irá conseguir manter o corpo bem definido.        
        `
    },
    {
        question: 'Como vou ter acesso aos treinos?',
        answer: `
            Após a compra confirmada você receberá um e-mail com o botão de login e senha para área de membros onde você terá acesso aos treinos.
        `
    },
    {
        question:
            'Os treinos são para hipertrofia, definição ou redução ou percentual de gordura?',
        answer:
            'Todos os treinos são voltados para o seu objetivo. O que irá determinar a hipertrofia muscular é as dietas; juntamente com o percentual de gordura e definição. Para perda de gordura emagrecimento terá treinos também para o seu objetivo.'
    },
    {
        question: 'Como vou poder tirar suas dúvidas?',
        answer:
            'Você terá acesso ao meu Instagram exclusivo e WhatsApp, lá você pode tirar todas as suas dúvidas.'
    },
    {
        question: 'Quanto tempo dura o plano?',
        answer: 'Este é um plano recorrente. Você cancela quando quiser.'
    },
    {
        question: 'Como faço para cancelar?',
        answer:
            'A consultoria pode ser cancelada via WhatsApp. Os planos comuns devem ser cancelados via Hotmart.'
    },
    {
        question: 'Todos os exercícios tem vídeos das execuções?',
        answer:
            'Sim, você terá acesso aos vídeos e a planilha caso você queira imprimir todos os exercícios prescritos por ordem. Ou salvar no seu celular.'
    },
    {
        question: 'Como vou saber o meu nível?',
        answer:
            'Você terá acesso a todos os níveis iniciante, intermediário e avançado; após examinar todos os níveis verá quais exercícios você tem conhecimento para executar. Tendo conhecimento e sabendo executar corretamente os exercícios você estará no seu nível certo.'
    },
    {
        question:
            'Vou receber também dieta, e plano alimentar ou sugestão, de suplementos?',
        answer:
            'Sim, na plataforma você terá como adquirir suplementos alimentares com a minha indicação e receberá bônus com nutricionista e nutróloga.'
    },
    {
        question: 'Como o pagamento é feito?',
        answer:
            'Aceitamos pagamentos por cartão de Crédito, cartão virtual caixa e boleto bancário. Lembre-se que na opção boleto, os bancos podem  demorar  até 72 horas para compensa o pagamento.'
    }
]

const Faq = () => {
    return (
        <section className="py-5">
            <Title label="Perguntas Frequentes" />
            <PerguntasFrequentes perguntasRespostas={perguntasRespostas} />
        </section>
    )
}

export default Faq
