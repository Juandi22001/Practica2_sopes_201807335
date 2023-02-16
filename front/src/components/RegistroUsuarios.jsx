import React, { useRef, useState, useEffect } from 'react';
import { Form,Row,Col,Button,Container} from 'react-bootstrap';




export const RegistroUsuarios = () => {
    const [ciudades, setCiudades] = useState([])


    useEffect(() => {
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







  //referencias para jalar los datos del usuario
  const nombre = useRef()     //nombre del usuario
  const usuario = useRef()    //nickname del usuario
  const nacimiento = useRef()    
  const correo = useRef()  
  const pass = useRef()    
  const confirmacionpass = useRef()  
  const rol = useRef()        
  const ciudad = useRef()       

  //metodo para mandar con el backend
  const NuevoUsuario= async () => {
      let nombre1 = nombre.current.value
      let usuario1 = usuario.current.value
      let nacimiento1 = nacimiento.current.value
      let correo1 = correo.current.value
      let pass1 = pass.current.value
      let confirmacionpass1 = confirmacionpass.current.value
      let rol1 = rol.current.value
      let ciudad1 = ciudad.current.value
      let newUsuario = {
                  rol: rol1,
                  nombre: nombre1,
                  usuario: usuario1,
                  nacimiento: nacimiento1,
                  correo: correo1,
                  pass: pass1,
                  confirmacionpass: confirmacionpass1,
                  ciudad: ciudad1,
              }
      console.log("rol: " + rol)
      console.log("nombre: " + nombre1)
      console.log("usuario: " + usuario1)
      console.log("nacimiento: " + nacimiento1)
      console.log("correo: " + correo1)
      console.log("password: " + pass1)
      console.log("confirmacion: " + confirmacionpass1)
      console.log("ciudad: " + ciudad1)
      console.log(newUsuario)

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var a = JSON.stringify({
          "usuarioNuevo": newUsuario
      });

      var requesOptions = {
          method: 'POST',
          headers: myHeaders,
          body: a,
          redirect: 'follow'
      };

      fetch("http://35.193.82.52:5000/registry", requesOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


  }
  
  return (
    <div>
        <center>
            <Container>



                <Row>
                    <Form.Label column lg={2}>
                    Rol
                    </Form.Label>
                    <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Select defaultValue="Choose..." ref={rol}>
                            <option>...</option>
                            <option value='0'>Admin</option>
                            <option value='1'>Aerolinea</option>
                            <option value='2'>Hotel</option>
                            <option value='3'>Autos</option>
                            <option value='4'>Turista</option>                            
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Nombre
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={nombre} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Usuario
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={usuario} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Fecha nacimiento
                    </Form.Label>
                    <Col>
                    <Form.Control placeholder ="yy-mm-dd"type="text" ref={nacimiento} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Correo
                    </Form.Label>
                    <Col>
                    <Form.Control type="text" ref={correo} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Password
                    </Form.Label>
                    <Col>
                    <Form.Control type="password" ref={pass}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                    Confirmacion password
                    </Form.Label>
                    <Col>
                    <Form.Control type="password" ref={confirmacionpass}/>
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
                        <Form.Select defaultValue="Choose..." ref={ciudad}>
                            {
                                ciudades.map((option,index) => {
                                    return (<option key={index} value={index + 1}>{option}</option>)
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>



            </Container>
            <br/><br/>
            <Button  onClick={NuevoUsuario} variant="outline-warning" size="lg">
                Registrar
            </Button>           
        
        </center>            
    </div>
  )
}
