import { Container, Nav, Navbar, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../hooks/redux"
import { setLogOut } from "../../../redux/slices/auth"

export const Header = () => {
    const dispatch = useAppDispatch()
    const handleLogOut = () => {
        dispatch(setLogOut())
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >
                    <Link className="nav-link" to={"/"}>HeroesApp</Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavItem>
                        <Link className="nav-link" to={"/search"}>Buscar Heroe</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to={"/dcHeroes"}>DC Heroes</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to={"/marvelHeroes"}>Marvel Heroes</Link>
                    </NavItem>
                </Nav>
                <Navbar.Collapse className="justify-content-end gap-2">
                    <Navbar.Text>
                        Ingresado como: Admin
                    </Navbar.Text>
                    <NavItem>
                        <div onClick={handleLogOut} className="d-flex justify-content-center align-items-center">
                        <span 
                        style={{color:'white', cursor:'pointer'}} className="material-symbols-outlined">
                            logout
                        </span>
                        </div>
                    </NavItem>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
