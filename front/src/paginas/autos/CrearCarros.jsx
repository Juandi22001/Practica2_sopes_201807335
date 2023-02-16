import React, { useRef } from 'react';
import { Form,Row,Col,Button,Container} from 'react-bootstrap';



import {BarraServicios} from '../../components/BarraServicios'


export const CrearCarros = () => {
    let localusuario = JSON.parse(localStorage.getItem('usuario') || '[]');
  //referencias para jalar los datos del auto
  const nombre = useRef()           //nombre de la empresa de autos
  const marca = useRef()            //marca del auto
  const modelo = useRef()           //modelo del auto
  const year = useRef()             //año del auto
  const placa = useRef()            //placa del auto
  const precio = useRef()           //precio del auto

  //metodo para mandar con el backend
  const NuevoCarro = async () => {
      let auto1 = localusuario.idUsuario
      let marca1 = marca.current.value
      let modelo1 = modelo.current.value
      let year1 = year.current.value
      let placa1 = placa.current.value
      let precio1 = precio.current.value
      let newCarro = {
                  auto: auto1,
                  marca: marca1,
                  modelo: modelo1,
                  year: year1,
                  placa: placa1,
                  precio: precio1,
              }
      console.log("auto: " + auto1)
      console.log("marca: " + marca1)
      console.log("modelo: " + modelo1)
      console.log("año: " + year1)
      console.log("placa: " + placa1)
      console.log("precio: " + precio1)
      console.log(newCarro)

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var a = JSON.stringify({
          "carroNuevo": newCarro
      });

      var requesOptions = {
          method: 'POST',
          headers: myHeaders,
          body: a,
          redirect: 'follow'
      };

      fetch("http://35.193.82.52:5000/concesionaria/vehiculo", requesOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


  }
  
  return (
    <div>
        <BarraServicios/>
        <br/><br/>
        <center>
            <h1> Crear nuevo auto</h1>
            <br/><br/>
            <Container>



                <Row>
                    <Form.Label column lg={2}>
                    Empresa de autos
                    </Form.Label>
                    <Col>
                    <Form.Control placeholder={ localusuario.idUsuario} type="text" ref={nombre} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Marca
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={marca} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Modelo
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={modelo} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Año
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={year} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Placa
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={placa} />
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
            <Button  onClick={NuevoCarro} variant="outline-warning" size="lg">
                Crear auto
            </Button>           
        
        </center>            
    </div>
  )
}
