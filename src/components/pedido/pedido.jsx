import {Link} from "react-router-dom";

function Pedido(props){
    const dt_pedido = new Date(props.dt_pedido);
    return <tr>
        <td>{props.id_pedido}</td>
        <td>{props.cliente}</td>
        <td>{new Intl.DateTimeFormat('pt-BR',{dateStyle: 'short'}).format(dt_pedido)}</td>
        <td>{props.status_descricao}</td>
        <td>{new Intl.NumberFormat('pt-BR',{dateStyle: 'currency', currency: 'BRL'}).format(props.vl_total)}</td>
        <td>
        <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Opções
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#">Editar Pedido</Link></li>
                <li><Link className="dropdown-item" href="#">Excluir Pedido</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" href="#">Finalizar Pedido</Link></li>
                <li><Link className="dropdown-item" href="#">Reabrir Pedido</Link></li>
            </ul>
            </div>
        </td>

    </tr>
}
export default Pedido;