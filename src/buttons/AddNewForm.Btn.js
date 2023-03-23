import { useState } from "react";
import { Button } from "react-bootstrap";
import { MainForm } from "../forms/MainForm";

export function AddNewFormBtn() {
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => {
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm((prevState) => (prevState = true));
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShowForm}>
        Novo Lançamento
      </Button>
      <MainForm show={showForm} close={handleClose} />
    </div>
  );
}
