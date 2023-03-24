import { useState } from "react";
import { Table } from "react-bootstrap";

export function MainTable(){
    const [dataTable, setDataTable] = useState([]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Data</th>
          <th>Entrada</th>
          <th>Saída</th>
          <th>Histórico</th>
          <th>Banco/Caixa</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((itemTable, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{itemTable.data}</td>
            <td>{itemTable.entrada}</td>
            <td>{itemTable.saida}</td>
            <td>{itemTable.historico}</td>
            <td>{itemTable.bancoCaixa}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}








