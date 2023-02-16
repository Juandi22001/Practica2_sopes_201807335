import { useState, useEffect } from "react"
import axios from 'axios';

export const Usuario = () => {

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
    const ReservarVuelos = async (id_vuelo) => {

        const usuario ={
            'userId':localusuario.idUsuario,'flightId':id_vuelo
       
       
           }

           console.log(usuario)
        await axios.post('http://35.193.82.52:5000/book', usuario )
        .then(response => {
            console.log(response)
     
     
     
     
       });
     




    }
    const ReservarVehiculo = async (id_vehiculo) => {

        const usuario ={
            'idUser':localusuario.idUsuario,'placa':id_vehiculo
       
       
           }

           console.log(usuario)
        await axios.post('http://35.193.82.52:5000/consesionaria/vehiculo/rentar', usuario )
        .then(response => {
            console.log(response)
     
     
     
     
       });
     




    }
    const ReservarHabitacion = async (id_habitacion) => {
console.log("Aca?")
        const usuario ={
            'idUsuario':localusuario.idUsuario,'idHabitacion':id_habitacion
       
       
           }

           console.log(usuario)
        await axios.post('http://35.193.82.52:5000/reservatio/set', usuario )
        .then(response => {
            console.log(response)
     
     
     
     
       });
     




    }

    const GetServicios = async () => {


      await axios.get('http://35.193.82.52:5000/services/'+localusuario.idUsuario)
      .then(response => {

   
        console.log("---",response)
        setCargandoservicio(true)
        setServicio(response.data)

     








      }).catch(error => {
        console.log(error)
      })

      ;

    }
    const GetTotal = async () => {
        /*
        const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
        */
    
    
    
    
        await axios.get('http://35.193.82.52:5000/filter')
          .then(response => {

       

            setCargandoVuelos(true)
            setVuelos(response.data.result.Vuelos)

            console.log(vuelos)

          setcargandoHabitacion(true)
            setHabitacion(response.data.result.Habitaciones)

 
            setcargandoVehiculos(true)
            setVehiculos(response.data.result.Vehiculos)
   





    
    
          }).catch(error => {
            console.log(error)
          })
    
          ;
    
      }
      useEffect(() => {

        GetTotal() 
     
   

    
      }, [cargandoVuelos]);
 return {vuelos,habitacion,Vehiculos,ReservarVuelos,ReservarHabitacion,ReservarVehiculo,usuario,localusuario}
}