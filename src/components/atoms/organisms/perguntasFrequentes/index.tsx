import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import { PerguntasRespostas } from '../../../types/types'
import './style.scss'

type Props = {
    perguntasRespostas: PerguntasRespostas[]
}

const PerguntasFrequentes = ({ perguntasRespostas }: Props) => {
    return (
        <div className="container">
            <Accordion>
                {perguntasRespostas.map((item, index) => {
                    return (
                        <Card className="bg-dark my-2 pointer" key={index}>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey={index.toString()}
                            >
                                <h5 className="my-2">{item.question}</h5>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index.toString()}>
                                <Card.Body>
                                    <p>{item.answer}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default PerguntasFrequentes
