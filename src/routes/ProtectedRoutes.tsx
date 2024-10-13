import { Route, Routes } from "react-router-dom"
import { Home } from "../components/screens/home/Home"
import { Header } from "../components/ui/header/Header"
import { Search } from "../components/screens/search/Search"
import { DcHeroes } from "../components/screens/dcHeroes/DcHeroes"
import { MarvelHeroes } from "../components/screens/marvelHeroes/MarvelHeroes"
import { HeroPage } from "../components/screens/heroPage/HeroPage"

export const ProtectedRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/dcHeroes" element={<DcHeroes />}></Route>
                <Route path="/marvelHeroes" element={<MarvelHeroes />}></Route>
                <Route path="/hero/:id" element={<HeroPage />}></Route>


            </Routes>
        </>
    )
}
