import React from 'react';
//import Listadonombres from './components/listadodenombre';
//import Bienvenida  from './components/bienvenida';
// import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
// import Base from './rutas/base';
// import Inicio from './rutas/inicio';
import { BrowserRouter as Router, Routes,Link,Route } from 'react-router-dom';
import Usuarios from './ejemplorutas/usuarios'
import Datosusuario from './ejemplorutas/datosusuarios'

function App() {
  // return (
  //   <div  className="container">
  //       <Listadonombres></Listadonombres>
  //   </div>
  // );
  // return (
  //   <div  className="container">
  //       <h1>Propiedades de los components</h1>

  //       <Bienvenida nombre='manuel'/>
  //       <Bienvenida nombre='andres'/>
  //       <Bienvenida nombre='pablo'/>
  //       <Bienvenida nombre='jose'/>
  //       <Bienvenida nombre='francisca'/>
  //   </div>
  // );
  // return (
  //   <BrowserRouter>

  //     <Link to="/inicio">Inicio</Link>
  //     <Link to="/">Base</Link>


  //     <Routes>
  //       <Route path="/" element={<Base />}></Route>
  //       <Route path="/inicio/:nombre" element={<Inicio />}></Route>

  //     </Routes>
  //   </BrowserRouter>
  // );
  return (
    <Router>
       <Link to="/">Usuarios</Link>


       <Routes>
        <Route path='/' element={<Usuarios />}> </Route>
       </Routes>
       <Routes>
        <Route path='/usuarios/:id' element={<Datosusuario />}> </Route>
       </Routes>
    </Router>
  );
}

export default App;
