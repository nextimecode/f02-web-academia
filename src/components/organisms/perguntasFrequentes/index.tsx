import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

const PerguntasFrequentes = () => {
    return (
        <div className="container">
            <Accordion>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h5 className="my-2">Como funciona a consultoria?</h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>
                                A Consultoria SãoMiguelito consiste em um
                                acompanhamento individual, onde prescrevo
                                treinos sob medida de acordo com os seus
                                objetivos. O programa de treinamento
                                personalizado, pode incluir de 3 até 5 treinos
                                (um para cada dia da semana que serão repetidos
                                nas semanas seguintes). Os treinos são
                                elaborados com base na sua avaliação física, que
                                será realizada através de fotos atuais
                                (opcional,mas de total importância para análise
                                postural e verificação dos principais pontos a
                                serem trabalhados), do questionário de anamnese
                                e de fotos e / ou vídeos do seu local de
                                treinamento. Você receberá por e-mail a planilha
                                de treinamento no formato Excel. Vale ressaltar
                                que todos os exercícios do seu treino possuem
                                vídeos demonstrativos no Instagram exclusivo da
                                Consultoria.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <h5 className="my-2">
                            Em quanto tempo o treino fica pronto?
                        </h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p>
                                O prazo para a entrega do seu treino é de 10
                                dias úteis após a confirmação do pagamento, o
                                preenchimento do questionário de anamnese e o
                                envio das fotos de corpo e da academia.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <h5 className="my-2">Inclui dieta?</h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p>
                                Não. Não há prescrição de dietas nem
                                suplementos.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        <h5 className="my-2">
                            Quais os trajes recomendados para avaliação?
                        </h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <p>
                                Trajes Femininos: Biquini completo ou short de
                                lycra acima do joelho e parte de cima do biquíni
                                ou top. Não é possível fazer avaliação com
                                calça, legging. Trajes Masculinos: Sem camisa e
                                short acima do joelho ou sunga. As fotos devem
                                ser tiradas de preferência em jejum e antes da
                                prática de qualquer atividade física. As fotos
                                podem ser tiradas do pescoço para baixo, não
                                havendo a necessidade de mostrar o rosto. Este
                                material não será divulgado, apenas será
                                utilizado para realizar sua avaliação.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        <h5 className="my-2">
                            Continuo com algumas dúvidas, como faço para
                            esclarecê-las antes da aquisição?
                        </h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <p>
                                Minha equipe de suporte estará à sua disposição
                                para responder todas as suas dúvidas. Só acessar
                                o ícone do WhatsApp dessa página.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        <h5 className="my-2">
                            Como vou poder tirar as minhas dúvidas referentes ao
                            treino recebido?
                        </h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <p>
                                Junto com o programa de treinamento
                                personalizado, você receberá o WhatsApp
                                exclusivo para alunos da consultoria, onde
                                falará diretamente comigo.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        <h5 className="my-2">
                            Quanto tempo dura a Consultoria?
                        </h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <p>
                                Esse é o diferencial da Consultoria
                                SãoMiguelito. A Consultoria não é mensal. O
                                tempo para a troca fica a critério do aluno,
                                pois isso é muito individual. Depende muito do
                                seu objetivo, da sua assiduidade. Você sentirá a
                                necessidade de troca, seja por ter atingido o
                                objetivo ou querer mudar o estímulo. Caso você
                                siga corretamente o treino proposto, recomendo a
                                troca a partir da sexta semana. Mas isso
                                determinaremos juntos. A consultoria não tem
                                prazo de validade. O tempo que você permanecer
                                com o programa de treinamento enviado, será o
                                tempo que irei te acompanhar, auxiliando sobre o
                                mesmo. Só quando você quiser alterar o programa,
                                realiza-se um novo pagamento e seguimos com um
                                novo plano, novos treinos, um novo estímulo!
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                        <h5 className="my-2">
                            Treino em mais de um local. É possível elaborar a
                            planilha para ser feito alguns dias em casa e outros
                            na academia por exemplo?
                        </h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            <p>
                                Infelizmente não. É necessário escolher apenas 1
                                local para a elaboração do programa e em caso de
                                treinoem casa é necessário ter o mínimo de
                                matérias. * (Informar antes da aquisição os
                                materiais disponíveis em casa para a aprovação)
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="bg-dark my-2">
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                        <h5 className="my-2">
                            Quais são as formas de pagamento?
                        </h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            <p>
                                Transferência, Ted ou Doc, Cartão de Crédito
                                (via Paypal) e Depósito Bancário.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default PerguntasFrequentes
