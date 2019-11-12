import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Orden from '../pages/orden';
import NotFound from '../components/NotFound';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Inicio" component={Inicio} />
                <Route exact path="/OrdenTrabajo" component={Orden} />
                <Route component={NotFound} />
            </Switch>

        </BrowserRouter>

    )

}
export default App 