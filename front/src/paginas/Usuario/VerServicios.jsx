


import { useState, useEffect } from "react"
import { useForm } from "../../hooks/useForm";
import { UsuarioServicio } from "../../hooks/useUsuarioServicio";
import { BARRA } from "../../components/navbar";
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer, Textarea } from "@nextui-org/react";
export const VerServicio = () => {

    const [ProductosFiltrados, setProductosFiltrados] = useState([])
    const { vuelos, CargandoVuelos, DarReseña, servicio } = UsuarioServicio()


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


    const Dar_reseña = (id_servicio, servicio) => {

       

        if(servicio=="Aereolinea"){

            DarReseña(1,id_servicio,values.puntuacion,values.comentario)
        }
        else if (servicio=="Hotel"){
            console.log("adentro de hotel")
            DarReseña(2,id_servicio,values.puntuacion,values.comentario)

        }
        else if(servicio=="Autos"){
            console.log("adentro de autos")
            DarReseña(3,id_servicio,values.puntuacion,values.comentario)


        }

       


    }


    const FiltarServicioHotel = (e) => {
        console.log(servicio)

        let arregloFiltrado = servicio.filter(item => item.servicio === "Hotel");
        setProductosFiltrados(arregloFiltrado)



    }
    const FiltarServicioAereolinea = (e) => {


        let arregloFiltrado = servicio.filter(item => item.servicio === "Aereolinea");
        setProductosFiltrados(arregloFiltrado)



    }
    const FiltarServicioVehiculo = (e) => {


        let arregloFiltrado = servicio.filter(item => item.servicio === "Autos");

        setProductosFiltrados(arregloFiltrado)



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
                    Ver Servicios
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
                                                Servicio
                                            </Text>

                                            <Text color="primary">{item.servicio}</Text>

                                        </header>

                                        <div class="content">

                                            <Text color="primary">{item.nombre}</Text>


                                        </div>
                                        <Textarea bordered id="comentario" name="comentario" value={values.comentario} onChange={handleInputChange}
                                            color="primary" placeholder="Escriba su reseña" rows={4} />
                                        <Input

                                            id="puntuacion" name="puntuacion" value={values.puntuacion} onChange={handleInputChange}
                                            label="Puntuacion"
                                            type="number"
                                        />

                                        <button class="button" onClick={() => Dar_reseña(item.idServicio, item.servicio)}  >Dar Reseña </button>




                                    </article>






                                </>




                            ))



                        )
                    }
                </div>

            </div>



        </>)
}