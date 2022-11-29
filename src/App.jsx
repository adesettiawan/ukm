import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Beranda from "./pages/portal-polinela/Beranda";
import ProfilePolinela from "./pages/portal-polinela/ProfilePolinela";
import UkmPolinela from "./pages/portal-polinela/UkmPolinela";
import BerandaUkm from "./pages/portal-ukm/BerandaUkm";
import GaleriFotoUkm from "./pages/portal-ukm/GaleriFotoUkm";
import GaleriUkm from "./pages/portal-ukm/GaleriUkm";
import GaleriVideoUkm from "./pages/portal-ukm/GaleriVideoUkm";
import NewsUkm from "./pages/portal-ukm/NewsUkm";
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
                <Route path="/berita" element={<NewsUkm />} />
                <Route path="/galeri" element={<GaleriUkm />} />
                <Route path="/galeri/foto" element={<GaleriFotoUkm />} />
                <Route path="/galeri/video" element={<GaleriVideoUkm />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
