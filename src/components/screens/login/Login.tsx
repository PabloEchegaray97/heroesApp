import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export const Login = () => {
    return (
        <Form>
            <div>
                <span className="material-symbols-outlined">
                    group
                </span>
            </div>
            <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control name="user" type="text" placeholder="Usuario" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Mostrar contraseña"
            />
            <div>
                <Button variant="primary">Primary</Button>{' '}
            </div>

        </Form>
    )
}
