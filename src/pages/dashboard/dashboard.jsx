import Navbar from "../../components/navbar/navbar.jsx";
import Grafico from "../../components/grafico/grafico.jsx"
function Dashboard(){
    const dados_clientes = [
        ["Cliente","Vendas"],
        ["Microsoft",5200],
        ["IBM",4900],
        ["Apple",4200],
        ["Facebook",3210],
        ["Google",2140]

    ];
    const dados_vendas = [
        ["Mês","Vendas"],
        ["1",5200],
        ["2",4900],
        ["3",4200],
        ["4",3210],
        ["5",2140],
        ["6",5200],
        ["7",4900],
        ["8",4200],
        ["9",3210],
        ["10",2140],
        ["11",3210],
        ["12",2140]

    ];
    const dados_produto = [
        ["Produto","Vendas"],
        ["Celular",5200],
        ["Teclado",4900],
        ["Monitor",4200],
        ["HD",3210],
        ["Webcam",2140]
    ];
    const dados_cidade = [
        ["Cidade","Vendas"],
        ["Belo jardim",5200],
        ["Sanharó",4900],
        ["Pesqueira",4200]
    ];
    return <>
        <Navbar />
        <div className="container-fluid mt-page">
            <div className="ms-4 d-flex justify-content-between">
                <h2>Dashboard</h2>
                <button className="btn btn-primary me-4"><i className="fas fa-plus"></i>Atualizar</button>
            </div>
            <div className="row"> 
                <div className="col-md-6 p-5">
                    <Grafico titulo="Vendas por cliente (top 5)"
                             chartType="Bar"
                             dados={dados_clientes}
                             legenda={false}
                    />
                </div>
                <div className="col-md-6 p-5">
                    <Grafico titulo="Vendas anual"
                             chartType="Line"
                             dados={dados_vendas}
                             legenda={false}
                    />
                </div>
                <div className="col-md-6 p-5">
                    <Grafico titulo="Vendas por produto"
                             chartType="PieChart"
                             dados={dados_produto}
                             legenda={true}
                    />
                </div>
                <div className="col-md-6 p-5">
                    <Grafico titulo="Vendas por cidade"
                             chartType="BarChart"
                             dados={dados_cidade}
                    />
                </div>
            </div>
        </div>
    </>
}
export default Dashboard;