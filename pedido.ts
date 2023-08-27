import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";

export class Pedido {
    Cliente: Cliente;
    Funcionario: Funcionario;
    Bicicleta: Bicicleta;
    NumeroPedido: number;
    Tempo: number;
    DataPedido: string;
    DataDevolucao: string;

    constructor(
        NumeroPedido: number,
        Cliente: Cliente,
        Funcionario: Funcionario,
        Bicicleta: Bicicleta,
        Tempo: number,
        DataPedido: string,
        DataDevolucao: string
    ) {
        this.NumeroPedido = NumeroPedido;
        this.Cliente = Cliente;
        this.Funcionario = Funcionario;
        this.Bicicleta = Bicicleta;
        this.Tempo = Tempo;
        this.DataPedido = DataPedido;
        this.DataDevolucao = DataDevolucao;
    }

    aluguel(valortotal: number) {
        this.Bicicleta.valor = this.Tempo * this.Bicicleta.valor;
        this.valortotal= this.Bicicleta.valor;
    }
}

