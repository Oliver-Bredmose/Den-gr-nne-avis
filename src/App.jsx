import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Forside from './Pages/Forside.jsx'
import Ketegoriside from './Pages/Ketegoriside.jsx'
import Loginside from './Pages/Loginside.jsx'
import OpretAnnonceSide from './Pages/OpretAnnonceSide.jsx'
import Productside from './Pages/Productside.jsx'
import Profil from './Pages/Profil.jsx'
import ProfilAnnonce from './Pages/ProfilAnnonce.jsx'
import Signupside from './Pages/signupside.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/kategori" element={<Ketegoriside />} />
        <Route path="/login" element={<Loginside />} />
        <Route path="/opret-annonce" element={<OpretAnnonceSide />} />
        <Route path="/produkt/:slug" element={<Productside />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/annonce" element={<ProfilAnnonce />} />
        <Route path="/opret-bruger" element={<Signupside />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App