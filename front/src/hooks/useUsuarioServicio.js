import { useState, useEffect } from "react"
import axios from 'axios';

export const UsuarioServicio = () => {

    let localusuario = JSON.parse(localStorage.getItem('usuario') || '[]');
    const [usuario, setUsuario] = useState(localusuario);

    const [vuelos, setVuelos] = useState([])
    const [cargandoVuelos, setCargandoVuelos] = useState(true)
    const [habitacion, setHabitacion] = useState([])


    const [cargandoHabitacion, setcargandoHabitacion] = useState(true)

    const [Vehiculos, setVehiculos] = useState([])


    const [cargandoVehiculos, setcargandoVehiculos] = useState(true)

    const [servicio, setServicio] = useState([])


    const [cargandoServcio, setCargandoservicio] = useState(true)

    const DarReseña = async (criterio,id_servicio,puntuacion,comentario) => {
        const fecha = new Date();
        console.log("fecha::",fecha.getDate())

        console.log("critero==",criterio,"id_Servicio",id_servicio,"puntuacion",puntuacion,"comentario",comentario)
        const usuario ={
            'criterio':criterio,'id':id_servicio,'puntuacion':puntuacion,'comentario':comentario,'fecha':"2022-04-22"
       
       
           }

           console.log(usuario)
        await axios.post('http://35.193.82.52:5000/review/set', usuario )
        .then(response => {
            console.log(response)
     
     
     
     
       });
     




    }
    const GetServicios = async () => {


      await axios.get('http://35.193.82.52:5000/services/'+localusuario.idUsuario)
      .then(response => {

   
       
        setCargandoservicio(true)
        setServicio(response.data.result)
      

     








      }).catch(error => {
        console.log(error)
      })

      ;

    }
   
      useEffect(() => {

    GetServicios()
     
   

    
      }, [cargandoVuelos]);
 return {vuelos,habitacion,Vehiculos,usuario,localusuario,servicio,DarReseña}
}