import React from 'react'
import './App.css';
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

//ADMINISTRADOR
import {CrearUsuario} from '../paginas/administrador/CrearUsuario'
import {PrincipalAdmin} from '../paginas/administrador/PrincipalAdmin'

//SERVICIOS
import {CrearVuelos} from '../paginas/aerolinea/CrearVuelos'
import {CrearCarros} from '../paginas/autos/CrearCarros'
import {CrearHabitaciones} from '../paginas/hotel/CrearHabitaciones'

//TURISTA
import { VerVuelos } from '../paginas/Usuario/VerVuelos';
import {VerHotel} from '../paginas/Usuario/VerHotel'
import { Login } from '../paginas/Login'
import { Perfil } from '../paginas/Usuario/Perfil'
import { VerAutos } from '../paginas/Usuario/VerAutos';
import { VerServicio } from '../paginas/Usuario/VerServicios';
import { VerReseña } from '../paginas/Usuario/VerReseña';
export const Rutas = () => {
    return(
        <Router>
            <Switch>    

            <Route exact path='/' component={()=> <Login/>}/>
            <Route exact path='/Perfil' component={()=> <Perfil/>}/>
            <Route exact path='/VerServicio' component={()=> <VerServicio/>}/>
            <Route exact path='/VerHotel' component={()=> <VerHotel/>}/>
            <Route exact path='/VerVuelos' component={()=> <VerVuelos/>}/>
            <Route exact path='/VerAutos' component={()=> <VerAutos/>}/>
            <Route exact path='/VerReseña' component={()=> <VerReseña/>}/>


                <Route exact path='/principal_admin' component={()=> <PrincipalAdmin/>}/>
                <Route exact path='/crear_usuario' component={()=> <CrearUsuario/>}/>
                <Route exact path='/crear_vuelos' component={()=> <CrearVuelos/>}/>
                <Route exact path='/crear_carrito' component={()=> <CrearCarros/>}/>
                <Route exact path='/crear_habitaciones' component={()=> <CrearHabitaciones/>}/>
                </Switch>
        </Router>
    )
}

