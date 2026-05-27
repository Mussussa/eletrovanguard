import instalarImg from "../assets/instalar.png";
import manutencaoImg from "../assets/manutecao.png";
import produtosImg from "../assets/produtos.png";

import "./hero/css.css";

function Hero() {
  return (
    <>
      {/* Container Pai com posição relativa para ancorar o texto e o botão cá dentro */}
      <div className="hero w-100" style={{ position: "relative", height: "40vh", overflow: "hidden" }}>
        
        {/* 1. O CARROSSEL (Apenas as imagens a rodar ao fundo) */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide w-100 h-100"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img src={instalarImg} className="d-block w-100 h-100" alt="Instalações" style={{ objectFit: "cover", objectPosition: "center center" }} />
            </div>
            <div className="carousel-item h-100">
              <img src={produtosImg} className="d-block w-100 h-100" alt="Produtos" style={{ objectFit: "cover", objectPosition: "center center" }} />
            </div>
            <div className="carousel-item h-100">
              <img src={manutencaoImg} className="d-block w-100 h-100" alt="Manutenção" style={{ objectFit: "cover", objectPosition: "center center" }} />
            </div>
          </div>

          {/* Setas de navegação */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>

        {/* 2. PROPRIEDADE FIXA: Bloco de Mensagem Único cravado no fundo da div com Z-INDEX */}
        <div
          className="text-start px-3 py-2"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            right: "80px", /* Abre espaço na direita para o botão do WhatsApp não cobrir o texto */
            background: "rgba(0, 0, 0, 0.75)", /* Fundo escuro para dar leitura sobre qualquer foto */
            borderRadius: "8px",
            zIndex: "10", /* Passa à frente das imagens */
            pointerEvents: "none" /* Permite clicar através do texto se necessário */
          }}
        >
          <h5 className="fw-bold text-uppercase m-0" style={{ color: "#c9570b", fontSize: "15px" }}>
            Electro Vanguard
          </h5>
          <p className="m-0 text-white" style={{ fontSize: "11px", lineHeight: "1.3" }}>
            Soluções elétricas especializadas, venda de material e reparações para sua casa ou empresa.
          </p>
        </div>

        {/* 3. BOTÃO FIXO DO WHATSAPP (No canto inferior direito do Hero) */}
        <a
          href="https://wa.me/258864670088"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center shadow"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            width: "50px",
            height: "50px",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            zIndex: "20", /* Acima de tudo para o clique ser imediato */
            color: "#fff",
            textDecoration: "none"
          }}
        >
          {/* Ícone simples em SVG para não precisares de instalar livrarias externas */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.907h.004c4.368 0 7.926-3.558 7.93-7.93a7.897 7.897 0 0 0-2.327-5.645zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.194-.588-1.379-.653-.185-.066-.32-.099-.455.101-.134.202-.52.654-.637.787-.117.135-.235.149-.437.05-.201-.1-.849-.313-1.616-.997-.597-.533-1.001-1.193-1.118-1.395-.118-.202-.012-.311.089-.412.092-.089.202-.234.302-.35.101-.117.135-.198.203-.33.067-.133.033-.252-.017-.353-.05-.101-.455-1.101-.623-1.507-.164-.399-.333-.345-.455-.351s-.25-.006-.385-.006a.75.75 0 0 0-.543.253c-.185.19-.706.69-.706 1.683 0 .993.723 1.952.823 2.083.101.134 1.422 2.17 3.447 3.04.481.207.856.33 1.15.424.484.153.924.132 1.272.08.388-.058 1.194-.488 1.362-.96.168-.472.168-.875.118-.96-.05-.085-.185-.135-.388-.236z"/>
          </svg>
        </a>

      </div>
    </>
  );
}

export default Hero;