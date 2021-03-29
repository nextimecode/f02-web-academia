import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import TreinoTemplate from '../components/templates/treinoTemplate'

const cardsAcessos = [
    {
        card: {
            image: 'assets/img/training-woman.png',
            label: 'Planilhas completas',
            text:
                'Planilhas de treinos divididas por níveis – inciante / intermediário / avançado'
        }
    },
    {
        card: {
            image: 'assets/img/training-woman.png',
            label: 'Planilhas completas',
            text:
                'Planilhas de treinos divididas por níveis – inciante / intermediário / avançado'
        }
    },
    {
        card: {
            image: 'assets/img/training-woman.png',
            label: 'Planilhas completas',
            text:
                'Planilhas de treinos divididas por níveis – inciante / intermediário / avançado'
        }
    },
    {
        card: {
            image: 'assets/img/training-woman.png',
            label: 'Planilhas completas',
            text:
                'Planilhas de treinos divididas por níveis – inciante / intermediário / avançado'
        }
    },
    {
        card: {
            image: 'assets/img/training-woman.png',
            label: 'Planilhas completas',
            text:
                'Planilhas de treinos divididas por níveis – inciante / intermediário / avançado'
        }
    }
]

const carouselPhotos = [
    {
        photo: {
            src: 'assets/img/carouselPhotos/img01.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/img02.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/img03.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/img02.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/img03.jpg',
            alt: 'description'
        }
    }
]

const depoimentos = [
    {
        depoimento: {
            foto: 'assets/img/avatars/user.png',
            nome: 'Ana da Silva',
            profissao: 'Advogada',
            texto: 'Eu contratei o serviço e estou muito satisfeito.'
        }
    },
    {
        depoimento: {
            foto: 'assets/img/avatars/user.png',
            nome: 'Joana Felisbina',
            profissao: 'Engenheira',
            texto: 'Muito bom.'
        }
    },
    {
        depoimento: {
            foto: 'assets/img/avatars/user.png',
            nome: 'Maria Ferreira',
            profissao: 'Professora',
            texto: 'Gostei demais.'
        }
    }
]

const perguntasRespostas = [
    {
        question: 'Como funciona a consultoria?',
        answer:
            'A Consultoria SãoMiguelito consiste em um acompanhamento individual, onde prescrevo treinos sob medida de acordo com os seus objetivos. O programa de treinamento personalizado, pode incluir de 3 até 5 treinos (um para cada dia da semana que serão repetidos nas semanas seguintes). Os treinos são elaborados com base na sua avaliação física, que será realizada através de fotos atuais (opcional,mas de total importância para análise postural e verificação dos principais pontos a serem trabalhados), do questionário de anamnese e de fotos e / ou vídeos do seu local de treinamento. Você receberá por e-mail a planilha de treinamento no formato Excel. Vale ressaltar que todos os exercícios do seu treino possuem vídeos demonstrativos no Instagram exclusivo da Consultoria.'
    },
    {
        question: 'Em quanto tempo o treino fica pronto?',
        answer:
            'O prazo para a entrega do seu treino é de 10 dias úteis após a confirmação do pagamento, o preenchimento do questionário de anamnese e o envio das fotos de corpo e da academia.'
    },
    {
        question: 'Inclui dieta?',
        answer: 'Não. Não há prescrição de dietas nem suplementos.'
    },
    {
        question: 'Quais os trajes recomendados para avaliação?',
        answer:
            'Trajes Femininos: Biquini completo ou short de lycra acima do joelho e parte de cima do biquíni ou top. Não é possível fazer avaliação com calça, legging. Trajes Masculinos: Sem camisa e short acima do joelho ou sunga. As fotos devem ser tiradas de preferência em jejum e antes da prática de qualquer atividade física. As fotos podem ser tiradas do pescoço para baixo, não havendo a necessidade de mostrar o rosto. Este material não será divulgado, apenas será utilizado para realizar sua avaliação.'
    },
    {
        question:
            'Continuo com algumas dúvidas, como faço para esclarecê-las antes da aquisição?',
        answer:
            'Minha equipe de suporte estará à sua disposição para responder todas as suas dúvidas. Só acessar o ícone do WhatsApp dessa página.'
    },
    {
        question:
            'Como vou poder tirar as minhas dúvidas referentes ao treino recebido?',
        answer:
            'Junto com o programa de treinamento personalizado, você receberá o WhatsApp exclusivo para alunos da consultoria, onde falará diretamente comigo.'
    },
    {
        question: 'Quanto tempo dura a Consultoria?',
        answer:
            'Esse é o diferencial da Consultoria SãoMiguelito. A Consultoria não é mensal. O tempo para a troca fica a critério do aluno, pois isso é muito individual. Depende muito do seu objetivo, da sua assiduidade. Você sentirá a necessidade de troca, seja por ter atingido o objetivo ou querer mudar o estímulo. Caso você siga corretamente o treino proposto, recomendo a troca a partir da sexta semana. Mas isso determinaremos juntos. A consultoria não tem prazo de validade. O tempo que você permanecer com o programa de treinamento enviado, será o tempo que irei te acompanhar, auxiliando sobre o mesmo. Só quando você quiser alterar o programa, realiza-se um novo pagamento e seguimos com um novo plano, novos treinos, um novo estímulo!'
    },
    {
        question:
            'Treino em mais de um local. É possível elaborar a planilha para ser feito alguns dias em casa e outros na academia por exemplo?',
        answer:
            'Infelizmente não. É necessário escolher apenas 1 local para a elaboração do programa e em caso de treinoem casa é necessário ter o mínimo de matérias. * (Informar antes da aquisição os materiais disponíveis em casa para a aprovação)'
    },
    {
        question: 'Quais são as formas de pagamento?',
        answer:
            'Transferência, Ted ou Doc, Cartão de Crédito (via Paypal) e Depósito Bancário.'
    }
]

const TreinoMulheres: React.FC = () => {
    return (
        <PageTemplate title="Treino">
            <TreinoTemplate
                labelTituloLinha1="A mais completa plataforma de"
                labelTituloLinha2="treinos online"
                srcVideo="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1"
                buttonLabel="Alcance seus objetivos"
                buttonHref="/#"
                sectionConteudoTitle="terá acesso"
                sectionConteudoSubtitle="Confira tudo que você"
                cardsAcessos={cardsAcessos}
                treinosFuncionamTitle="Os treinos online realmente funcionam?"
                treinosFuncionamText="Sem dúvidas alguma, o Treino São Miguelito é
                                tanto para você que quer perder peso como também
                                para você que está em busca de massa muscular.
                                Todos os exercícios são explicados de 3
                                maneiras: um iniciante, outro intermediário e
                                outro avançado. Dessa forma, independente da sua
                                idade ou do seu condicionamento físico atual,
                                você vai conseguir fazer e alcançar seu
                                objetivo!"
                treinosFuncionamVideo1="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1"
                treinosFuncionamVideo2="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1"
                carouselPhotos={carouselPhotos}
                depoimentos={depoimentos}
                perguntasRespostasFaq={perguntasRespostas}
                cardPlanoTitle="Plano feminino"
                cardPlanoPreco={{ value: 40 }}
                cardPlanoImage="/assets/img/training-woman.png"
                cardPlanoLinkPage="/#"
                cardPlanoButtonLabel="Adquira já"
            />
        </PageTemplate>
    )
}

export default TreinoMulheres
