import React from 'react'

import { Container, Navbar,  Nav } from 'react-bootstrap'
import { useLogin } from '../hooks/useLogin';
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
export const BarraServicios = () => {
    let localusuario = JSON.parse(localStorage.getItem('usuario') || '[]');
    const {Salir}=useLogin()
    return(
        <div>
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">  {localusuario.nombre}</Navbar.Brand>
            <Nav className="me-auto">
             
                <Button color="primary"   onClick={() => Salir()}>
                                    Cerrar Sesión
                                </Button>
                
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}