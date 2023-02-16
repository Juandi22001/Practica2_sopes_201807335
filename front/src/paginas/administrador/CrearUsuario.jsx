import React from 'react'


import {Barra} from '../../components/Barra'
import {RegistroUsuarios} from '../../components/RegistroUsuarios'


export const CrearUsuario = () => {
    return(
        <div>
            <Barra/>
            <br/><br/>
            <center>
                <h1> Registrar servicios y turistas</h1>
            </center>
            <br/>
            <RegistroUsuarios/>
        </div>
    )
}
