import { useForm } from "../../hooks/useForm";

import { Image } from "@nextui-org/react";
import { BARRA } from "../../components/navbar";
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { Usuario } from "../../hooks/useUsuario";

export const Perfil = () => {

    const { setVisible, bindings } = useModal();

    const [selectedIndex, setSelectedIndex] = useState(1);
    const { usuario, localusuario } = Usuario()
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const { values, handleInputChange } = useForm({


        ruta: '',









    });

    useEffect(() => {



        console.log("usuario", localusuario)

    })

    return (
        <div >
            <BARRA></BARRA>

            <div >
               
                <Grid xs={16}justify="center" align="center" >




                    <Text
                        h1
                        size={80}
                        css={{
                            textGradient: "45deg, $blue50 -20%, $blue600 100%",
                        }}
                        weight="bold"
                    >
                        Bienvenido
                    </Text>





                </Grid>
            </div>
            <div class="cards">
                <div class="content">

                    <article class="card">
                        <Grid.Container justify="center" align="center" bordered={2}>



                            <Grid xs={8}>




                                <Text
                                    h1
                                    size={40}
                                    css={{
                                        textGradient: "45deg, $blue600 -20%, $blue600 100%",
                                    }}
                                    weight="bold"
                                >
                                    Nombre
                                </Text>





                            </Grid>


                            <Grid xs={8}>




                                <Text
                                    color="primary"
                                >
                                    {localusuario.nombre}
                                </Text>





                            </Grid>
                            <Grid xs={8}>




                                <Text
                                    h1
                                    size={30}
                                    css={{
                                        textGradient: "45deg, $blue600 -20%, $blue600 100%",
                                    }}
                                    weight="bold"
                                >
                                    Nacimiento
                                </Text>





                            </Grid>


                            <Grid xs={8}>




                                <Text
                                    color="primary"
                                >
                                    {localusuario.nacimiento}
                                </Text>





                            </Grid>
                            <Grid xs={8}>




                                <Text
                                    h1
                                    size={30}
                                    css={{
                                        textGradient: "45deg, $blue600 -20%, $blue600 100%",
                                    }}
                                    weight="bold"
                                >
                                    Email@
                                </Text>





                            </Grid>


                            <Grid xs={8}>




                                <Text
                                    color="primary"
                                >
                                    {localusuario.email}
                                </Text>





                            </Grid>



                        </Grid.Container>
                    </article>
                </div>
            </div>
        </div>

    )
}