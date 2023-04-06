import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import PedidoEditar from "./pages/pedido-editar/pedido-editar";
import Pedidos from "./pages/pedidos/pedidos";

//definindo as rotas
function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/pedidos" element={<Pedidos/>}> </Route>
            <Route path="/pedidos/novo" element={<PedidoEditar/>}> </Route>
        </Routes>
    </BrowserRouter>
}

export default Rotas;