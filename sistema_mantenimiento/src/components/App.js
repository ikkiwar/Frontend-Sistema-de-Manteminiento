import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Orden from "../pages/orden";
import Inventario from "../pages/Inventario";
import NotFound from "../components/NotFound";
import Recurso from "../pages/RecursoHumano";
import Calendario from "../pages/Calendario";
import NuevoRecurso from "../pages/NuevoRecurso";
import Procedimiento from "../pages/Procedimientos";

function App() {
  return (
    // Este componente es el que contiene las rutas de los componentes y se encarga de renderiarlos
    <BrowserRouter>
      <Switch>
        <Route exact path="/Inicio" component={Inicio} />
        <Route exact path="/OrdenTrabajo" component={Orden} />
        <Route exact path="/RecursoHumano" component={Recurso} />
        <Route exact path="/Inventario" component={Inventario} />
        <Route exact path="/Calendario" component={Calendario} />
        <Route exact path="/NuevoRecurso" component={NuevoRecurso} />
        <Route exact path="/Procedimiento" component={Procedimiento} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
