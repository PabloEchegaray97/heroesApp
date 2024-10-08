import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css'
import { FormEvent, useState } from 'react';
export const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }
    return (
        <div className={styles.containerLogin}>
            <div className={styles.containerForm}>
                <div>
                    <span className="material-symbols-outlined" style={{ fontSize: '10vh' }}>
                        group
                    </span>
                </div>
                <Form onSubmit={handleSubmitForm}>

                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control name="user" type="text" placeholder="Usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control name="password" type={showPass ? "text" : "password"} placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Check
                        onChange={() => {
                            setShowPass(!showPass)
                        }} 
                        type="switch"
                        id="custom-switch"
                        label="Mostrar contraseña"

                    />
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        <Button variant="primary">Primary</Button>{' '}
                    </div>

                </Form>
            </div>
        </div>
    )
}
