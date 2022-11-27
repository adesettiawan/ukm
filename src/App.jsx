import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Beranda from "./pages/portal-polinela/Beranda";
import ProfilePolinela from "./pages/portal-polinela/ProfilePolinela";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/profile-polinela" element={<ProfilePolinela />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
