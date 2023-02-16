


import { useState, useEffect } from "react"
import { useForm } from "../../hooks/useForm";
import { Usuario } from "../../hooks/useUsuario";
import { BARRA } from "../../components/navbar";
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
export const VerHotel = () => {

  const [ProductosFiltrados, setProductosFiltrados] = useState([])
  const { habitacion, CargandoVuelos, ReservarHabitacion } = Usuario()



  const { values, handleInputChange, reset } = useForm({

    NombreCiudad: '',
    NombrePais: '',
    Precio: 0,
    Categoria: '',
    Ubicacion: '',
    tipoBusqueda: '',
    Fecha:''









  });


  const Reservar = (idHabitacion) => {


    ReservarHabitacion(idHabitacion)

  }



  const FiltrarNombre = (e) => {


    e.preventDefault()

    console.log(habitacion)
    if (values.NombrePais !== '') {
      console.log("aca")

      let arregloFiltrado = habitacion.filter(item => item.nombrePais === values.NombrePais);
      setProductosFiltrados(arregloFiltrado)



    }
   else if (values.NombreCiudad !== '') {
      console.log("aca")

      let arregloFiltrado = habitacion.filter(item => item.nombreCiudad === values.NombreCiudad);
      setProductosFiltrados(arregloFiltrado)



    }

    else if (values.Fecha !== '') {
      console.log("aca")
      const fecha2 = new Date(values.Fecha)
 

     let arregloFiltrado= []

     for (let index = 0; index < habitacion.length; index++) {
      const element = habitacion[index];

      
      const fecha1 = new Date(element.fecha)
          if(fecha1.getDay()==fecha2.getDay() && fecha1.getMonth()==fecha2.getMonth()){

            arregloFiltrado.push(element)
          }


          setProductosFiltrados(arregloFiltrado)

     }





    //  let arregloFiltrado = habitacion.filter(item => item.nombreCiudad === values.NombreCiudad);
   //  setProductosFiltrados(arregloFiltrado)



    }



   else if (values.Precio !== '') {
      var isChecked = document.getElementById('check').checked;
      var isChecked2 = document.getElementById('check2').checked;

      if (isChecked) {

        let arregloFiltrado = habitacion.filter(item => item.precio <= values.Precio);


        setProductosFiltrados(arregloFiltrado)


      }
      if (isChecked2) {

        let arregloFiltrado = habitacion.filter(item => item.precio >= values.Precio);

        setProductosFiltrados(arregloFiltrado)

      }


    }



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
          Reservar Habitacion
        </Text>

        <div class="cards">


          <input name="NombreCiudad" value={values.NombreCiudad} onChange={handleInputChange} type="text" placeholder="Nombre Pais" onBlur={FiltrarNombre} />
          <input name="NombrePais" value={values.NombrePais} onChange={handleInputChange} type="text" placeholder="Nombre Ciudad" onBlur={FiltrarNombre} />
          <input name="Fecha" value={values.Fecha} onChange={handleInputChange} type="date" placeholder="Fecha" onBlur={FiltrarNombre} />

          <input name="Precio" value={values.Precio} onChange={handleInputChange} type="number" placeholder="Precio" onBlur={FiltrarNombre} />





        </div>
        <input type="checkbox" id="check" />
        <label for="cbox2">Menor</label>
        <input type="checkbox" id="check2" />
        <label for="cbox2">Mayor</label>

        <div class="cards" >

          {
            ProductosFiltrados.length > 0 &&
            (
              ProductosFiltrados.map((item, i) => (


                <>

                  <article class="card">
                    <header>

                      <h2>Hotel </h2>

                      <h2>{item.idHotel}</h2>

                    </header>

                    <div class="content">
                      <h2>Precio</h2>
                      <p>  {item.precio}</p>
                      <h2>fecha</h2>
                      <p>  {item.fecha}</p>

                      <h2>Ciudad</h2>
                      <p>  {item.nombreCiudad}</p>

                      <h2>Habitaciones Totales</h2>
                      <p>  {item.habitaciones_totales}</p>

                      <h2>Habitaciones disponibles</h2>
                      <p>  {item.habitaciones_disponbles}</p>


                    </div>
                    <button class="button" onClick={() => ReservarHabitacion(item.idHabitacion)}  >Reservar  </button>



                  </article>







                </>



              ))


            )
          }
        </div>

      </div>



    </>)
}