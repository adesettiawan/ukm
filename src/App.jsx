import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Beranda from "./pages/portal-polinela/Beranda";
import ProfilePolinela from "./pages/portal-polinela/ProfilePolinela";
import UkmPolinela from "./pages/portal-polinela/UkmPolinela";
import BerandaUkm from "./pages/portal-ukm/BerandaUkm";
import ProfileUkm from "./pages/portal-ukm/ProfileUkm";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/profile-polinela" element={<ProfilePolinela />} />
                <Route path="/profile-ukm" element={<ProfileUkm />} />
                <Route path="/ukm-polinela" element={<UkmPolinela />} />
                <Route path="/beranda-ukm/:id" element={<BerandaUkm />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
