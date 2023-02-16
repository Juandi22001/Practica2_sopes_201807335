


import { useState, useEffect } from "react"
import { useForm } from "../../hooks/useForm";
import { Usuario } from "../../hooks/useUsuario";
import { BARRA } from "../../components/navbar";
import { Input, Grid, Row, Button, Text, Modal, useModal,Spacer } from "@nextui-org/react";
export const VerAutos = () => {

const [ProductosFiltrados, setProductosFiltrados] = useState([])
const {Vehiculos,CargandoVuelos,ReservarVehiculo}=Usuario()



    const { values, handleInputChange, reset } = useForm({

        Marca: '',
        Precio: 0,
        Modelo: '',
        Ubicacion: '',
        tipoBusqueda: ''







    });


    const reservar = (idvuelo) => {


        ReservarVehiculo(idvuelo)

    }

   

    const FiltrarNombre = (e) => {
 

        e.preventDefault()
     
        console.log(Vehiculos)
        if (values.Marca !== '') {
            console.log("aca")

            let arregloFiltrado = Vehiculos.filter(item => item.marca === values.Marca);
            setProductosFiltrados(arregloFiltrado)
            


        }

        if (values.Modelo !== '') {
            console.log("aca")

            let arregloFiltrado = Vehiculos.filter(item => item.modelo === values.Modelo);
            setProductosFiltrados(arregloFiltrado)
            


        }


        

        if (values.Precio !== '') {
            var isChecked = document.getElementById('check').checked;
            var isChecked2 = document.getElementById('check2').checked;

            if (isChecked) {

                let arregloFiltrado = Vehiculos.filter(item => item.precio <= values.Precio);


                setProductosFiltrados(arregloFiltrado)
                
           
            }
            if (isChecked2) {

             let arregloFiltrado = Vehiculos.filter(item => item.precio >= values.Precio);

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
              textGradient: "45deg, $blue600 -20%, $blue600 100%",
            }}
            weight="bold"
          >
            Reservar Autos
          </Text>

            <div class= "cards">

        
                <input name="Marca" value={values.Marca} onChange={handleInputChange} type="text" placeholder="Marca" onBlur={FiltrarNombre} />

                <input name="Modelo" value={values.Modelo} onChange={handleInputChange} type="text" placeholder="Modelo" onBlur={FiltrarNombre} />

                <input name="Precio" value={values.Precio} onChange={handleInputChange} type="number" placeholder="Precio" onBlur={FiltrarNombre} />

             


             
            </div>
            <input type="checkbox" id="check" />
                <label for="cbox2">Menor</label>
                <input type="checkbox" id="check2" />
                <label for="cbox2">Mayor</label>
                
      
                <div class="cards">
                {
                    ProductosFiltrados.length > 0 &&
                    (
                        ProductosFiltrados.map((item, i) => (


                            <>
                                
                                    <article class="card">
                                        <header>
                                            
                                        <h2>Vehiculo</h2>
                                           
                                        
                                        </header>

                                        <div class="content">
                                            <h2>Precio</h2>
                                            <p>  {item.precio}</p>
                                            <h2>Marca</h2>
                                            <p>  {item.marca}</p>

                                            <h2>Modelo</h2>
                                            <p>  {item.modelo}</p>

                                            <h2>Año</h2>
                                            <p>  {item.year}</p>

                                        </div>
                                        <button class="button" onClick={() => reservar(item.idVehiculo)}  >Reservar Vehiculos </button>



                               
                                    </article>


                                




                            </>



                        ))


                    )
                }

</div>
            </div>
          
         

        </>)
}