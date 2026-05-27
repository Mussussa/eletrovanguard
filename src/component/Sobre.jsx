import React from "react";
import "./Sobre.css";

function Sobre() {
  // 📞 Linha oficial da Electro Vanguard (Moçambique)
  const WHATSAPP_NUMBER = "258864670088";
  const LINK_WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="sobre-container">
      {/* 📘 PARTE 1: HISTÓRIA & MISSÃO */}
      <div className="sobre-conteudo">
        <h2 className="sobre-titulo text-center">Sobre Nós</h2>
        <p className="sobre-texto">
          A <b>Electro Vanguard Multiservice</b> é uma empresa especializada em soluções elétricas 
          residenciais e industriais, sediada em Chimoio. Comprometemo-nos a entregar resultados 
          brilhantes através de serviços de alta qualidade e venda de materiais das melhores marcas do mercado.
        </p>

        <div className="sobre-cards-info">
          <div className="info-card">
            <span>🎯 <b>Missão</b></span>
            <p>Garantir segurança, eficiência energética e conforto com instalações elétricas e climatização de excelência.</p>
          </div>
          <div className="info-card">
            <span>⚡ <b>Lema</b></span>
            <p>"Soluções Elétricas, Resultados Brilhantes."</p>
          </div>
        </div>
      </div>

      <hr className="sobre-divisor" />

      {/* 📞 PARTE 2: CONTACTOS & REDES (Mobile-First de Conversão) */}
      <div className="sobre-contactos">
        <h3 className="contactos-titulo">Fale Connosco</h3>
        
        <div className="lista-contactos">
          {/* Botão de Chamada / WhatsApp Direto */}
          <a href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer" className="contacto-item whatsapp">
            <span className="icone">📞</span>
            <div className="contacto-texto">
              <span className="label">WhatsApp e Chamada</span>
              <span className="dado">+258 86 467 0088 / 84 467 0188</span>
            </div>
          </a>

          {/* Email Oficial */}
          <a href="mailto:electrovanguardmultiservicelda@gmail.com" className="contacto-item email">
            <span className="icone">✉️</span>
            <div className="contacto-texto">
              <span className="label">E-mail Oficial</span>
              <span className="dado">electrovanguardmultiservicelda@gmail.com</span>
            </div>
          </a>

          {/* Redes Sociais */}
          <a href="https://facebook.com/ELECTROVANGUARDMULTISERVICE" target="_blank" rel="noopener noreferrer" className="contacto-item rede-social">
            <span className="icone">🌐</span>
            <div className="contacto-texto">
              <span className="label">Facebook</span>
              <span className="dado">Electro Vanguard Multiservice E.I</span>
            </div>
          </a>

          <a href="https://instagram.com/electrovanguard_multiservice" target="_blank" rel="noopener noreferrer" className="contacto-item rede-social">
            <span className="icone">📸</span>
            <div className="contacto-texto">
              <span className="label">Instagram</span>
              <span className="dado">@electrovanguard_multiservice</span>
            </div>
          </a>

          {/* Localização Física baseada no panfleto */}
          <div className="contacto-item localizacao">
            <span className="icone">📍</span>
            <div className="contacto-texto">
              <span className="label">Endereço</span>
              <span className="dado">Chimoio - Centro hípico, Moçambique</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;