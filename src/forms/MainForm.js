import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function MainForm() {
  const [lancamento, setLancamento] = useState({
    id: "",
    data: "",
    entrada: "",
    saida: "",
    historico: "",
    finalidade: "",
    bancoCaixa:""
  });

  const handleChange = (e) => {
    setLancamento({...lancamento, [e.target.name]: e.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLancamento(lancamento);
    console.log(lancamento);

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="form-container">
        <Form.Label>Data</Form.Label>
        <Form.Control
          type="date"
          placeholder="Data"
          value={lancamento.data}
          name="data"
          onChange={handleChange}
          
        />
      </Form.Group>
      <Form.Group controlId="formGroupEntrada">
        <Form.Label>Entrada</Form.Label>
        <Form.Control
          type="number"
          placeholder="Valor R$"
          value={lancamento.entrada}
          name="entrada"
          onChange={handleChange}
        />
      </Form.Group>
     
      <Form.Group controlId="formGroupHistorico">
        <Form.Label>Histórico</Form.Label>
        <Form.Control
          type="text"
          placeholder="Histórico"
          value={lancamento.historico}
          name="historico"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formGroupFinalidade">
        <Form.Label>Finalidade</Form.Label>
        <Form.Control
          type="text"
          placeholder="Finalidade"
          value={lancamento.finalidade}
          name="finalidade"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formGroupBancoCaixa">
        <Form.Label>Banco/Caixa</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira o banco ou caixa"
          value={lancamento.bancoCaixa}
          name="bancoCaixa"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
