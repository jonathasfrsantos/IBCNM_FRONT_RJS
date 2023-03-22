import { Button } from "react-bootstrap";

export function AddNewFormBtn(){


    return (
        <div>
            <Button variant="primary" onClick={console.log("click")}>
                Novo Lançamento
            </Button>

        </div>
    )
}