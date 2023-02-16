import React, { useRef, useState, useEffect } from 'react';
import { Form,Row,Col,Button,Container} from 'react-bootstrap';



import {BarraServicios} from '../../components/BarraServicios'


export const CrearVuelos = () => {
    let localusuario = JSON.parse(localStorage.getItem('usuario') || '[]');
    const [ciudades, setCiudades] = useState([])


    useEffect(() => {
        console.log(localusuario.idUsuario)
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            data: formdata,
            redirect: 'follow'
        };

        fetch("http://35.193.82.52:5000/ciudades", requestOptions)
        .then(response => response.json())
        .then(result => {
            setCiudades(result.ciudades.map(element => element.nombre))
        })
        .catch(error => console.log('error', error));

    },[])

  //referencias para jalar los datos del vuelo
  const nombre = useRef()           //nombre de la aerolinea
  const destino = useRef()          //destino del vuelo
  const asientos = useRef()         //asientos del vuelo
  const fecha = useRef()            //fecha del vuelo
  const precio = useRef()           //precio del vuelo

  //metodo para mandar con el backend
  const NuevoVuelo = async () => {
      let aerolinea1 = localusuario.idUsuario
      let destino1 = destino.current.value
      let asientos1 = asientos.current.value
      let fecha1 = fecha.current.value
      let precio1 = precio.current.value
      let newVuelo = {
                  aerolinea: aerolinea1,
                  destino: destino1,
                  asientos: asientos1,
                  fecha: fecha1,
                  precio: precio1,
              }
      console.log("aerolinea: " + aerolinea1)
      console.log("destino: " + destino1)
      console.log("asientos: " + asientos1)
      console.log("fecha: " + fecha1)
      console.log("precio: " + precio1)
      console.log(newVuelo)

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var a = JSON.stringify({
          "vueloNuevo": newVuelo
      });

      var requesOptions = {
          method: 'POST',
          headers: myHeaders,
          body: a,
          redirect: 'follow'
      };

      fetch("http://35.193.82.52:5000/aerolinea/vuelo/crear", requesOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


  }
  
  return (
    <div>
        <BarraServicios/>
        <br/><br/>
        <center>
            <h1> Crear nuevo vuelo</h1>
            <br/><br/>
            <Container>



                <Row>
                    <Form.Label column lg={2}>
                    Aerolinea
                    </Form.Label>
                    <Col>
                    <Form.Control  placeholder={localusuario.idUsuario} type="text" ref={nombre} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Ciudad
                    </Form.Label>
                    <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Select defaultValue="Choose..." ref={destino}>
                            {
                                ciudades.map((option,index) => {
                                    return (<option key={index} value={option}>{option}</option>)
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Cantidad asientos
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={asientos} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Fecha
                    </Form.Label>
                    <Col>
                    <Form.Control placeholder="dd/mm/yy" type="text" ref={fecha} />
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
            <Button  onClick={NuevoVuelo} variant="outline-warning" size="lg">
                Crear vuelo
            </Button>           
        
        </center>            
    </div>
  )
}
