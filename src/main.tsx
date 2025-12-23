import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import "./utils/i18n.js";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex-grow">
                    <Routes>
                        <Route path={"/"} element={<LandingPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    </StrictMode>,
)
