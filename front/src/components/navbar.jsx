import { Link } from 'react-router-dom';
import { Image } from "@nextui-org/react";
import { useLogin } from '../hooks/useLogin';
import { Container, Navbar,  Nav } from 'react-bootstrap'
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
export const BARRA = () => {
    const {Salir}=useLogin()
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                
            <Container>
            <Navbar.Brand href="#home"><Image src="https://github.com/Juandi22001/ImagenesAYD1/blob/main/registroLogo/16.png?raw=true" width={200} margin-left={200} maxDelay={10000} height={100} alt="efe?" /></Navbar.Brand>
            

            <Nav className="me-auto">
                <Nav.Link href="/Perfil">Perfil</Nav.Link>
             
                <Nav.Link href="/VerHotel">Reservar Habitacion</Nav.Link>
                <Nav.Link href="/VerAutos">Reservar AUTO</Nav.Link>
                <Nav.Link href="/VerVuelos">Reservar Vuelos</Nav.Link>
                <Nav.Link href="/VerReseña">Reseñas</Nav.Link>
                <Nav.Link href="/VerServicio">Servicios</Nav.Link>
                <Button color="primary"   onClick={() => Salir()}>
                                    Cerrar Sesion
                                </Button>
            </Nav>
           
                
                 </Container>
            </Navbar>
                </div>
    )
}