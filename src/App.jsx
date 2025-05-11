import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

const Home = () => <div style={{ padding: 20 }}>Benvenuto nella Home!</div>;
const Ordini = () => <div style={{ padding: 20 }}>I tuoi ordini appariranno qui.</div>;
const Contatti = () => <div style={{ padding: 20 }}>Contattaci: 123-456789</div>;

const Carrello = () => {
  const [items] = useState([]);
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontFamily: 'Comfortaa', fontWeight: "bold" }}>Il tuo carrello</h2>
      {items.length === 0 ? <p>Il carrello è vuoto.</p> : <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
    </div>
  );
};

const SplashScreen = () => (
  <div style={{
    backgroundColor: "rgb(141, 26, 20)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }}>
    <img src="/logo-danchi.png" alt="Danchi Logo" style={{ width: "60%", maxWidth: "300px" }} />
    <p style={{ color: "white", fontSize: "1.2rem", marginTop: "1rem", fontFamily: 'Comfortaa', fontWeight: "bold" }}>Pizzeria a domicilio</p>
    <Link to="/menu" style={{ marginTop: 40, backgroundColor: "white", color: "rgb(141, 26, 20)", padding: 10, borderRadius: 5, fontFamily: 'Lato' }}>Entra nel menù</Link>
  </div>
);

const DettaglioPizza = ({ nome }) => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "rgb(254, 208, 98)", minHeight: "100vh", padding: 20 }}>
      <h2 style={{ fontFamily: 'Comfortaa', fontWeight: "bold", color: 'rgb(141, 26, 20)' }}>{nome}</h2>
      <p style={{ fontFamily: 'Lato', color: 'rgb(43, 43, 43)' }}>Descrizione della pizza, ingredienti, prezzo, e opzioni di supplemento.</p>
      <button onClick={() => navigate(-1)} style={{ marginTop: 20, backgroundColor: 'rgb(141, 26, 20)', color: 'white', padding: 10, border: 'none', borderRadius: 5 }}>Torna al menu</button>
    </div>
  );
};

const Menu = () => {
  const [aperta, setAperta] = useState(null);
  const [carrello, setCarrello] = useState([]);
  const navigate = useNavigate();
  const menuData = {
    "CREA LA TUA PIZZA": ["Base margherita – 6.50 €", "Base rossa – 6.00 €"],
    "PIZZE ROSSE": ["Margherita – 6.50 €", "Diavola – 7.50 €"],
    "FRITTI": ["Patatine fritte – 3.00 €", "Nuggets – 3.00 €"]
  };
  const aggiungiAlCarrello = (pizza) => setCarrello([...carrello, pizza]);
  return (
    <div style={{ backgroundColor: "rgb(254, 208, 98)", minHeight: "100vh", padding: "1rem" }}>
      <h1 style={{ color: "white", backgroundColor: "rgb(141, 26, 20)", padding: "1rem", textAlign: "center", fontFamily: 'Comfortaa', fontWeight: "bold" }}>Menu</h1>
      {Object.entries(menuData).map(([categoria, pizze]) => (
        <div key={categoria}>
          <button onClick={() => setAperta(aperta === categoria ? null : categoria)} style={{
            display: "block", width: "100%", padding: "1rem", margin: "0.5rem 0",
            backgroundColor: "rgb(141, 26, 20)", color: "white", border: "none",
            borderRadius: "8px", fontSize: "1.2rem", fontFamily: 'Comfortaa', fontWeight: "bold"
          }}>{categoria}</button>
          {aperta === categoria && (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {pizze.map((pizza, idx) => (
                <li key={idx} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  backgroundColor: "white", color: "rgb(43, 43, 43)",
                  padding: "0.5rem", margin: "0.2rem 0", borderRadius: "4px",
                  fontFamily: 'Comfortaa', cursor: "pointer"
                }} onClick={() => navigate(`/pizza/${encodeURIComponent(pizza)}`)}>
                  {pizza}
                  <button onClick={(e) => { e.stopPropagation(); aggiungiAlCarrello(pizza); }} style={{ backgroundColor: "rgb(141, 26, 20)", color: "white", border: "none", borderRadius: "5px", padding: "0.3rem 0.7rem" }}>+</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ordini" element={<Ordini />} />
        <Route path="/carrello" element={<Carrello />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/pizza/:nome" element={<DettaglioPizza />} />
      </Routes>
    </Router>
  );
}

export default App;