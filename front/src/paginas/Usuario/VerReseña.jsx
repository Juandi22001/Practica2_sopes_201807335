


import { useState, useEffect } from "react"
import { useForm } from "../../hooks/useForm";
import { UsuarioServicio } from "../../hooks/useUsuarioServicio";
import { Reseña } from "../../hooks/useReseña";

import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer, Textarea } from "@nextui-org/react";
import { BARRA } from "../../components/navbar";
export const VerReseña = () => {

    const [ProductosFiltrados, setProductosFiltrados] = useState([])
    const { reseña,GetReseña } = Reseña()


    const { values, handleInputChange, reset } = useForm({

        Nombre: '',
        Precio: 0,
        Categoria: '',
        Ubicacion: '',
        tipoBusqueda: '',
        comentario: '',
        puntuacion: 0,
        fecha: ''







    });


 


    const FiltarServicioHotel = (e) => {
        console.log(reseña)

        GetReseña(2)
        setProductosFiltrados(reseña)



    }
    const FiltarServicioAereolinea = (e) => {

        GetReseña(1)

        setProductosFiltrados(reseña)



    }
    const FiltarServicioVehiculo = (e) => {

        GetReseña(3)
        setProductosFiltrados(reseña)



    }


    return (

        <>
            <div >
                <BARRA></BARRA>
                <Text
                    h1
                    size={80}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $green600 100%",
                    }}
                    weight="bold"
                >
                    Ver Reseña
                </Text>

                <div class="cards">



                    <Button.Group color="primary" bordered >
                        <Button onClick={() => FiltarServicioHotel()} >Hoteles</Button>
                        <Button onClick={() => FiltarServicioAereolinea()}>Aereolinea</Button>
                        <Button onClick={() => FiltarServicioVehiculo()}>Vehiculos</Button>
                    </Button.Group>





                </div>


                <div class="cards" >
                    {
                        ProductosFiltrados.length > 0 &&
                        (
                            ProductosFiltrados.map((item, i) => (


                                <>

                                    <article class="card">
                                        <header>

                                            <Text
                                                h1
                                                size={20}
                                                css={{
                                                    textGradient: "45deg, $blue600 -20%, $green600 100%",
                                                }}
                                                weight="bold"
                                            >
                                                Puntuacion
                                            </Text>

                                            <Text color="primary">{item.puntuacion}</Text>

                                        </header>

                                        <div class="content">

                                            <Text color="primary">{item.comentario}</Text>


                                        </div>
                                      
                           


                                    </article>






                                </>




                            ))



                        )
                    }
                </div>

            </div>



        </>)
}