import React from 'react'
import { Container, Navbar,  Nav } from 'react-bootstrap'
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";

import { useLogin } from '../hooks/useLogin';
export const Barra = () => {
    
    const {Salir}=useLogin()
    return(
        <div>
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">ADMINISTRADOR</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/principal_admin">Principal</Nav.Link>
                <Nav.Link href="/crear_usuario">Crear Usuarios</Nav.Link>
                <Button color="primary"   onClick={() => Salir()}>
                                    Cerrar Sesion
                                </Button>
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}