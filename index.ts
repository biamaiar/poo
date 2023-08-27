import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";
import { Pedido } from "./pedido";

const bicicleta = new Bicicleta(1, 50);
const cliente = new Cliente("Joao da Silva", "99999999","40028922" );
const funcionario = new Funcionario("Joao Souza", 123);
const pedido = new Pedido(
  1,
  cliente,
  funcionario,
  bicicleta,
  4,
  "2023-08-26",
  "2023-08-30",
);

pedido.aluguel(4); 
console.log(pedido);
