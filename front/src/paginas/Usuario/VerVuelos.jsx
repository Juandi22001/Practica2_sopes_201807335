


import { useState, useEffect } from "react"
import { useForm } from "../../hooks/useForm";
import { Usuario } from "../../hooks/useUsuario";
import { BARRA } from "../../components/navbar";
import { Input, Grid, Row, Button, Text, Modal, useModal,Spacer } from "@nextui-org/react";
export const VerVuelos = () => {

const [ProductosFiltrados, setProductosFiltrados] = useState([])
const {vuelos,CargandoVuelos,ReservarVuelos}=Usuario()



    const { values, handleInputChange, reset } = useForm({

        Nombre: '',
        Precio: 0,
        Categoria: '',
        Ubicacion: '',
        tipoBusqueda: ''







    });


    const ReservarVuelo = (idvuelo) => {


ReservarVuelos(idvuelo)

    }

   

    const FiltrarNombre = (e) => {
 

        e.preventDefault()
     
        console.log(vuelos)
        if (values.Nombre !== '') {
            console.log("aca")

            let arregloFiltrado = vuelos.filter(item => item.nombreCiudad === values.Nombre);
            setProductosFiltrados(arregloFiltrado)
            


        }


        

        if (values.Precio !== '') {
            var isChecked = document.getElementById('check').checked;
            var isChecked2 = document.getElementById('check2').checked;

            if (isChecked) {

                let arregloFiltrado = vuelos.filter(item => item.precio <= values.Precio);


                setProductosFiltrados(arregloFiltrado)
                
           
            }
            if (isChecked2) {

             let arregloFiltrado = vuelos.filter(item => item.precio >= values.Precio);

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
            Ver Vuelos
          </Text>

            <div class= "cards">

        
                <input name="Nombre" value={values.Nombre} onChange={handleInputChange} type="text" placeholder="Nombre" onBlur={FiltrarNombre} />

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
                                            
                                        <h2>Asientos Disponibles</h2>
                                           
                                            <h2>{item.asientos_disponibles}</h2>
                                           
                                        </header>

                                        <div class="content">
                                            <h2>Precio</h2>
                                            <p>  {item.precio}</p>
                                            <h2>fecha</h2>
                                            <p>  {item.fecha}</p>

                                        </div>
                                        <button class="button" onClick={() => ReservarVuelo(item.idVuelo)}  >Reservar Vuelos </button>



                               
                                    </article>


                              



                            </>



                        ))


                    )
                }
  </div>


            </div>
          
         

        </>)
}