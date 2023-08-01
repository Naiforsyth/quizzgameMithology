import { Route, Routes } from "react-router-dom"
import { CategoryPage, HomePage } from "./pages"
import { Navbar } from "./components/Navbar"

export const AppRouter = () => {
    return (

    <>
        <Navbar />

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:category' element={<CategoryPage />} />

        </Routes>
    </>
    )
}
