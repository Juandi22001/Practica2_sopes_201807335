import React, { useRef } from 'react';
import { Form,Row,Col,Button,Container} from 'react-bootstrap';



import {BarraServicios} from '../../components/BarraServicios'


export const CrearHabitaciones = () => {
    let localusuario = JSON.parse(localStorage.getItem('usuario') || '[]');
  //referencias para jalar los datos de la habitacion
  const nombre = useRef()           //nombre del hotel
  const cantidad = useRef()          //cantidad de habitaciones
  const fecha = useRef()             //fecha de disponibilidad
  const precio = useRef()           //precio de las habitaciones

  //metodo para mandar con el backend
  const NuevaHabitacion = async () => {
      let hotel1 =localusuario.idUsuario
      let cantidad1 = cantidad.current.value
      let fecha1 = fecha.current.value
      let precio1 = precio.current.value
      let newHabitacion = {
                  hotel: hotel1,
                  cantidad: cantidad1,
                  fecha: fecha1,
                  precio: precio1,
              }
      console.log("hotel: " + hotel1)
      console.log("cantidad: " + cantidad1)
      console.log("fecha: " + fecha1)
      console.log("precio: " + precio1)
      console.log(newHabitacion)

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var a = JSON.stringify({
          "habitacionNueva": newHabitacion
      });

      var requesOptions = {
          method: 'POST',
          headers: myHeaders,
          body: a,
          redirect: 'follow'
      };

      fetch("http://35.193.82.52:5000/hotel/rooms", requesOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


  }
  
  return (
    <div>
        <BarraServicios/>
        <br/><br/>
        <center>
            <h1> Crear nuevas habitaciones</h1>
            <br/><br/>
            <Container>



                <Row>
                    <Form.Label column lg={2}>
                    Hotel
                    </Form.Label>
                    <Col>
                    <Form.Control placeholder={localusuario.idUsuario} type="text" ref={nombre} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Cantidad habitaciones
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={cantidad} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Fecha disponibilidad
                    </Form.Label>
                    <Col>
                    <Form.Control placeholder="yy-mm-dd" type="text" ref={fecha} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Precio
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={precio}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>



            </Container>
            <br/><br/>
            <Button  onClick={NuevaHabitacion} variant="outline-warning" size="lg">
                Crear habitaciones
            </Button>           
        
        </center>            
    </div>
  )
}
