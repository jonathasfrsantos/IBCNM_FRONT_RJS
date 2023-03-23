import React, { useState } from "react";
import { Form, Button,  Modal, ModalBody } from "react-bootstrap";

export function MainForm({show, close}) {
  const [lancamento, setLancamento] = useState({
    id: "",
    data: "",
    entrada: "",
    saida: "",
    historico: "",
    finalidade: "",
    bancoCaixa: "",
  });

  const [tipoMovimento, setTipoMovimento] = useState("");



  const handleChange = (e) => {
    setLancamento({ ...lancamento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLancamento(lancamento);
    console.log(lancamento);
  };

  return (
    <div>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title> Novo Lançamento </Modal.Title>
        </Modal.Header>
        <ModalBody>
        <Form.Group controlId="formGroupTipoMovimento">
        <Form.Label>ESCOLHA ENTRE ENTRADA OU SAÍDA</Form.Label>
        <div>
          <Form.Check
            inline
            label="Entrada"
            type="radio"
            name="tipoMovimento"
            value="entrada"
            checked={tipoMovimento === "entrada"}
            onChange={(e) => setTipoMovimento(e.target.value)}
          />
          <Form.Check
            inline
            label="Saída"
            type="radio"
            name="tipoMovimento"
            value="saida"
            checked={tipoMovimento === "saida"}
            onChange={(e) => setTipoMovimento(e.target.value)}
          />
        </div>
      </Form.Group>

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

        </ModalBody>
    </Modal>  
    </div>
  );
}
