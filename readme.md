Basicamente primero definimos complemtame
estructura de todo el proyecto

Paso siguiente fue conectar la base de datos
y crear almenos un esquema para hacer pruebas

Despues hacemos la parte de implementar bycryps
crear y guardar token a la hora de registrarse o logearse
con jswontoken y ponerlo en una cookie

hacer logout tambien

hacer una funcion para la proteccion de rutas (se necesita biblioteca para leer cokies)
proteger rutas

en este caso ahora si creamos todas las rutas para las taks
Una vez terminado el crud añadimos validaciones!


****FRONTEND*******
Ahora si a usar react!!!
Algo importante esque estare usando tailwindecs, nota hacer este proyecto sin esas mcosas
primero configuramos tailwin 
descargamos y config reac router dom
{/*Definimos las rutas*/}
Para la validacion de los formularios usaremos
react-hook-form

Ahora usaremos axios para hacer peticiones a la api
ojo resolver problema cors

hacemos la peticion de registro yyy creamos un contexto
para tener toodos los datos del usuario a la mano 
tambien tener una propiedad de isAuthenticated
configuramos el register y login