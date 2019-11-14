import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Orden from '../pages/orden';
import NotFound from '../components/NotFound';
import Recurso from '../pages/RecursoHumano';

function App() {

    return (
        // Este componente es el que contiene las rutas de los componentes y se encarga de renderiarlos
        <BrowserRouter>
            <Switch> 
                <Route exact path="/Inicio" component={Inicio} />
                <Route exact path="/OrdenTrabajo" component={Orden} />
                <Route exact path="/RecursoHumano" component={Recurso}/>
                <Route component={NotFound} />
            </Switch>

        </BrowserRouter>

    )

}
export default App 