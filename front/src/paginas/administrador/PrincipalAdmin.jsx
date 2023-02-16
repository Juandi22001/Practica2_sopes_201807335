import React from 'react'
import { Spinner,Row,Col} from 'react-bootstrap';

import {Barra} from '../../components/Barra'


export const PrincipalAdmin = () => {
    return(
        <div>
            <Barra/>
            <br/><br/>
            <center>
                <Row>
                    <Col>
                        <Spinner animation="grow" variant="info" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1> ¡Bienvenido administrador!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Spinner animation="grow" variant="info" />
                    </Col>
                </Row>
            </center>
        </div>
    )
}
