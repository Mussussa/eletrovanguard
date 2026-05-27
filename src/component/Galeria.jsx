import React, { useState } from "react";
import "./Galeria.css";

function Galeria() {
  // Lista com os teus links reais e corrigidos do Cloudinary
  const imagens = [
    "https://res.cloudinary.com/dweg8p9cy/image/upload/v1779914687/WhatsApp_Image_2026-05-25_at_15.20.03_dhnq9s.jpg",
    "https://res.cloudinary.com/dweg8p9cy/image/upload/v1779914686/WhatsApp_Image_2026-05-25_at_15.20.04_urhssk.jpg",
    "https://res.cloudinary.com/dweg8p9cy/image/upload/v1779914686/WhatsApp_Image_2026-05-25_at_15.20.06_eacbcs.jpg",
    "https://res.cloudinary.com/dweg8p9cy/image/upload/v1779914686/WhatsApp_Image_2026-05-25_at_15.20.05_1_aghlju.jpg",
    "https://res.cloudinary.com/dweg8p9cy/image/upload/v1779914686/WhatsApp_Image_2026-05-25_at_15.20.07_1_qb55zm.jpg"
  ];

  // Estado para saber qual foto está ativa em tamanho grande (começa com a primeira)
  const [fotoAtiva, setFotoAtiva] = useState(imagens[0]);

  return (
    <div className="galeria-wrapper">
      {/* 📸 PARTE 1: Visualização da foto ativa no centro */}
      <div className="foto-principal-container">
        <img 
          src={fotoAtiva} 
          alt="Destaque Galeria" 
          className="foto-principal"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400?text=Imagem+Indisponivel";
          }}
        />
      </div>

      {/* 🎞️ PARTE 2: Carrossel Horizontal de Miniaturas */}
      <div className="miniaturas-carrossel">
        {imagens.map((url, index) => (
          <div 
            key={index} 
            className={`miniatura-card ${fotoAtiva === url ? "ativa" : ""}`}
            onClick={() => setFotoAtiva(url)}
          >
            <img 
              src={url} 
              alt={`Miniatura ${index + 1}`} 
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/100x100?text=Erro";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;