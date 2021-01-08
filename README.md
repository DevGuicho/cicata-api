# CICATA API

Esta API tiene tres rutas principales que tienen los metodos CRUD implementados
(Create, Read, Update, Delete) y una extra para hacer login y logup

Todas las rutas estan protegidas por lo que es necesario autenticar (hacer login o logup), el token es valido por 60 min, despues de este tiempo es necesario hacer login nuevamente. El token contiene el id (curp) del ususario 

## Routes

### Autenticación
#### Logup

  /api/auth/logup
  
Ruta para registrar un nuevo ususario

#### Login

  /api/auth/logup
  
Ruta para iniciar sesión dentro de la api

#### Usuarios
  /api/users
 
Ruta para metodos CRUD de usuarios

#### Solicitudes
  /api/requests
 
Ruta para metodos CRUD de solicitudes


#### Productos
  /api/products
 
Ruta para metodos CRUD de productos
