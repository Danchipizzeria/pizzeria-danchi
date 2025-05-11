import { useState } from "react";

const menuCategories = [
  "CREA LA TUA PIZZA",
  "PIZZE ROSSE",
  "PIZZE BIANCHE",
  "FOCACCE",
  "PIZZE DEL PERSONALE",
  "SPECIALITÀ",
  "FRITTI",
  "DOLCI",
  "BIBITE",
  "BIRRE",
];

const tabs = ["Menù", "Carrello", "Ordini", "Contatti"];

export default function App() {
  const [activeTab, setActiveTab] = useState("Menù");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff7cc" }}>
      <header style={{ backgroundColor: "#b91c1c", color: "white", textAlign: "center", padding: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}>
        Pizzeria Danchi
      </header>

      <main style={{ flex: 1, padding: "1rem" }}>
        {activeTab === "Menù" && (
          <div style={{ display: "grid", gap: "1rem" }}>
            {menuCategories.map((cat) => (
              <div key={cat} style={{ backgroundColor: "#fee2e2", padding: "1rem", fontWeight: "bold", color: "#7f1d1d" }}>
                {cat}
              </div>
            ))}
          </div>
        )}

        {activeTab !== "Menù" && (
          <div style={{ textAlign: "center", color: "#555", marginTop: "3rem" }}>
            <p style={{ fontSize: "1.25rem" }}>Pagina "{activeTab}" in costruzione</p>
          </div>
        )}
      </main>

      <footer style={{ backgroundColor: "#1f2937", color: "white", display: "flex", justifyContent: "space-around", padding: "0.75rem" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? "#d1d5db" : "transparent",
              border: "none",
              color: activeTab === tab ? "#000" : "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            {tab}
          </button>
        ))}
      </footer>
    </div>
  );
}
