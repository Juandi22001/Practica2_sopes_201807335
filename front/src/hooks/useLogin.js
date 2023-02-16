import { useState, useEffect } from "react"
import axios from 'axios';
import Swal from 'sweetalert2'
export const useLogin = () => {


  const Salir = async () => {

  localStorage.removeItem('usuario')
  window.location.replace("http://35.193.82.52:3000/");

  }
  const Login = async (Usuario, Password) => {

    const usuario ={
     'username':Usuario,'password':Password


    }

    console.log(usuario)

   await axios.post('http://35.193.82.52:5000/login', usuario )
   .then(response => {



    if(response.data.status==-1){

      Swal.fire("Credenciales incorrectas", "Mensaje:", "error")

    }
  else {
    Swal.fire(" Login Correcto", "Bienvenido:", "success")
    const result=response.data.result
    
    console.log(response)
    if(result.rol==0){
      window.location.replace("http://35.193.82.52:3000/principal_admin");
      localStorage.setItem('usuario',JSON.stringify(result))


    }  if(result.rol==1){
      window.location.replace("http://35.193.82.52:3000/crear_vuelos");
      localStorage.setItem('usuario',JSON.stringify(result))


    }
    if(result.rol==2){
      window.location.replace("http://35.193.82.52:3000/crear_habitaciones");
      localStorage.setItem('usuario',JSON.stringify(result))


    }

    if(result.rol==3){
      window.location.replace("http://35.193.82.52:3000/crear_carrito");
      localStorage.setItem('usuario',JSON.stringify(result))


    }
    if(result.rol==4){
      window.location.replace("http://35.193.82.52:3000/Perfil");

      localStorage.setItem('usuario',JSON.stringify(result))

    }

  }

  });

  }

  const CrearUsuario = async (Nombre, USER,Password,ConfirmarPassword,EDAD,Telefono) => {
   

    console.log(Nombre, USER,Password,ConfirmarPassword,EDAD,Telefono)


    await axios.post('http://35.193.82.52:5000/addUser', {Nombre, USER,Password,ConfirmarPassword,EDAD,Telefono})
      .then(response => {
        console.log(response)
      });

  }



  return { Login,CrearUsuario ,Salir}
}