# SISTEMAS OPERATIVOS 1
##  Proyecto 1 

---

### Universidad de San Carlos de Guatemala
### Primer Semestre 2022
###  Juan Diego Alvarado Salguero

### Manual Tecnico


---

# Views

:round_pushpin: [Info](#id2)
:round_pushpin: [Kafka](#id3)

:round_pushpin: [Base de datos](#id4)
:round_pushpin: [Kubernetes](#id5)
:round_pushpin: [Servicio](#id6)

<br>
<br>



![2](https://github.com/solaresjuan98/sopes1-proyecto-1s2022/blob/main/Manuales/Imagenes/google_cloud.png)

## :beginner: Para el desarollo de este proyecto se hizo uso de la nube de google mejor conocida como GCP. En este proyecto se  hizo la  implementación de 2 modulos uno de ram y uno de procesos los cuales  se almacenaran en una base de datos    para así posteriormente mostrar todos los logs  que poco a poco se vayan almacenando con la ayuda de los diferentes servicios que presenta GCP  para así posteriormente  mostrar todos los logs de la base de datos  en un frontend  desarollado por react para también mostrarlo en un servicio de Google .   <a name="id2"></a>


## DockerVolumes
![3](https://github.com/solaresjuan98/sopes1-proyecto-1s2022/blob/main/Manuales/Imagenes/volumes.jpg)
## :beginner: Para almacenar   todo lo obtenido de los modelos kernel , con la ayuda de docker se crearon volumenes para asi almacenar toda la informacion guardada y asi posteriormente guardarlo en la base de datos. Para ello unicamente se creo un docker file para primero crear la imagen y para asi posteriormente correra con el siguiente comando "sudo  docker  run -d -v /proc/:/proc22/ -p 5000:5000 golang-backend"   con ese comando crearemos el volumen  y correremos el contenedor y lo mandaremos a la base de datos  <a name="id3"></a>

# docker file de golang
![3](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/imagen_golang.PNG)


![4](https://github.com/Juandi22001/Practica1Sopes/blob/main/Manuales/Img/mongo.png)

## :beginner: Para la base de datos  se uso  de la famosa base de datos no relacional  para ello no se croe un docker file en especifico   porque realmente no es algo que se tenga que modificar , por eso es que   que para correr la imagen de mongo unicamente tenemos que correr su contenedor para asi la informacion que venga de Cloud Functions solo sea almacenada <a name="id4"></a>



![5](https://github.com/solaresjuan98/sopes1-proyecto-1s2022/blob/main/Manuales/Imagenes/cloud_functions.png)
## :beginner: Para enviar toda la informacion  que se  recauda de los contenedores de docker , se utiliza cloud functions para ingresar toda la data en la base de datos  <a name="id5"></a>


![6](https://github.com/solaresjuan98/sopes1-proyecto-1s2022/blob/main/Manuales/Imagenes/load_balancer.png)
## :beginner:  Ahora para mandar las peticiones a la base de datos  utilizaremos la herramienta load balancer, se hizo uso de esta herramienta porque al nosotros   tener 2  maquinas corriendo en el mismo puerto  pero esto nb genera clonficto gracias a  que load balancer  se encarga de administrar las peticiones y enviarlas correctamente al  frontend <a name="id6"></a>


![7](https://github.com/solaresjuan98/sopes1-proyecto-1s2022/blob/main/Manuales/Imagenes/CloudRun.jpg)
## :beginner:  El frontend fue implementado con react  , pero para mayor facilidad se subio  a  cloud run  para asi   para acceder la aplicacion sin la nescesidad de tener react instalado <a name="id7"></a>
