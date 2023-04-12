import Navbar from "../../components/navbar/navbar.jsx";
import "./pedido-editar.css"
import {Link} from "react-router-dom";
import{useState} from "react";
import {v4 as uuidv4} from "uuid"
function PedidoEditar(){

    const lista_clientes = [
        {
            id_cliente: 1,
            nome: "Coders",
        },
        {
            id_cliente: 2,
            nome: "Mercado Central"
        }
    ];
    const lista_pagamento = [
        {
            id_pagamento: 1,
            cod: "30 Dias",
        },
        {
            id_cliente: 2,
            cod: "45 Dias"
        }
    ];
    const [produtos, setProdutos] = useState([
        {
            id_item: 1,
            id_produto: 1,
            descricao: "MONITOR DELL",
            qtd: 2,
            vl_uni: 510,
            vl_total: 1020
        },
        {
            id_item: 2,
            id_produto: 2,
            descricao: "HD SEAGATE 2TB",
            qtd: 2,
            vl_uni: 300,
            vl_total: 600
        }
    ]);
    
    const lista_produtos = [
        {
            id_item: 1,
            id_produto: 1,
            descricao: "MONITOR DELL"
        },
        {
            id_item: 2,
            id_produto: 2,
            descricao: "HD SEAGATE 2TB",
        }
    ];
    const valor_total = 5000;
    function AdicionarProduto(){
        const prod = {
            id_item: uuidv4(),
            id_produto: 0,
            descricao: "",
            qtd: 2,
            vl_uni: 0,
            vl_total: 0
        };
        setProdutos([...produtos, prod]);
    }
    function ExcluirProduto(id_item){
        const prod = [];
        produtos.map((p) => {
            if(p.id_item !== id_item){
                prod.push(p);
            }
        });
        setProdutos(prod);
    }
    return <>
        <Navbar />
        <div className="container-fluid mt-page form-pedido-editar">

            <div className="row col-lg-6 offset-lg-3">
                <div className="col-12 mb-4 mt-2">
                    <h2 className="d-inline">Novo Pedido</h2>
                </div>
                <div className="col-md-8 mb-4">
                    <label htmlFor="ImputNome" className="form-label">Cliente</label>
                    <div className="form-control mb-2">
                        <select name="clientes" id="clientes">
                        <option value="0">Selecione</option>
                        {
                            lista_clientes.map( c => {
                                return <option key={c.id_cliente} value={c.id_cliente}>{c.nome}</option>
                            })
                        }
                        </select>

                    </div>
                </div>
                <div className="col-md-4 mb-2">
                        <label htmlFor="dataVenda" className="form-label">Dt Venda</label>
                        <input type="text" className="form-control" id="dataVenda"></input>
                </div>
                <div className="col-md-8 mb-4">
                    <label htmlFor="ImputNome" className="form-label">Cod. Pagamento</label>
                    <div className="form-control mb-2">
                        <select name="pagamentos" id="pagamentos">
                        <option value="0">Selecione</option>
                        {
                            lista_pagamento.map( p => {
                                return <option key={p.id_pagamento} value={p.id_pagamento}>{p.cod}</option>
                            })
                        }
                        </select>

                    </div>
                </div>
                <div className="col-md-4 mb-2">
                        <label htmlFor="dataVenda" className="form-label">Previsão Entrega</label>
                        <input type="text" className="form-control" id="dataVenda"></input>
                </div>

                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Produto</th>
                                <th scope="col">Qtd</th>
                                <th scope="col">Valor unit</th>
                                <th scope="col">Valor Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                produtos.map((produto,index)=>{
                                    return <tr key={produto.id_item}>
                                        <td>
                                            <div className="form-control">

                                                <select name="produtos" id="produtos">
                                                    <option value="0">Selecione</option>
                                                    {
                                                        lista_produtos.map(p => {
                                                            return <option  key={p.id_produto} value={p.id_produto}>{p.descricao}</option>
                                                        })
                                                        
                                                    }
                                                </select>
                                            </div>
                                        </td>
                                        <td><input type="text" className="form-control"/></td>
                                        <td><input type="text" className="form-control"/></td>
                                        <td><input type="text" className="form-control" disabled/></td>
                                        <td><button type="button" className="btn btn-danger" onClick={(e) => ExcluirProduto(produto.id_item)}><i className="bi bi-trash3-fill"></i></button></td>
                                    
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    {
                        produtos.length === 0 ? <div className="no-item">
                            Nunhum produto cadastrado!
                            </div> : null
                    }
                </div>
                <div className="col-md-6 ">
                    <button type="button" className="btn btn-sm btn-primary" onClick={AdicionarProduto}>Adicionar produto</button>
                </div>
                <div className="col-md-6 text-end mb-5">
                    <span className="me-4">Total Pedido:</span>
                    <h>
                        {new Intl.NumberFormat('pt-BR',{style: 'currency' ,currency: 'BRL'}).format(valor_total)}
                    </h>

                </div>
                <div className="col-12">
                    <label htmlFor="inputObs" className="form-label">Observação</label>
                    <textarea type="text" className="form-control"></textarea>
                </div>
                <div className="col-12 mt-5">
                    <div>
                        <div className="d-flex justify-content-end">
                            <Link to="/pedidos" type="button" className="btn btn-outline-primary me-4">Cancelar</Link>
                            <button type="button" className="btn btn-success">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PedidoEditar;