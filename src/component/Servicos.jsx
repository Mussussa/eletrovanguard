import { useState, useEffect, useRef } from "react";
import "./servicos/css.css";

function Servicos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(1);
  const [isPausado, setIsPausado] = useState(false);
  const clicouManual = useRef(false);
  const scrollContainerRef = useRef(null);

  const dadosCategorias = {
    1: {
      items: [
        { nome: "Instalação Residencial", desc: "Montagem completa de quadros elétricos, disjuntores e cablagem segura." },
        { nome: "Instalação Industrial", desc: "Sistemas trifásicos, motores e infraestruturas elétricas de grande porte." },
        { nome: "Montagem de Cerca Elétrica", desc: "Montagem e eletrificação de segurança perimetral com alta voltagem." },
        { nome: "Montagem de Grupo Gerador", desc: "Cablagem, posicionamento e automação de sistemas de energia de emergência." }
      ]
    },
    2: {
      items: [
        { nome: "Montagem de Ar Condicionado", desc: "Instalação especializada de sistemas de ar condicionado split e industriais." },
        { nome: "Manutenção de Ar Condicionado", desc: "Limpeza profunda de filtros, higienização e recarga de gás refrigerante." },
        { nome: "Reparação de Freezers", desc: "Assistência técnica rápida a freezers, geleiras e arcas frigoríficas." },
        { nome: "Reparação de Fogões", desc: "Conserto de fogões elétricos, fornos industriais e placas de cozinha." },
        { nome: "Reparação de TVs", desc: "Manutenção de televisores LED e SmartTVs com falhas de imagem ou placa." }
      ]
    },
    3: {
      items: [
        { nome: "Câmaras de Segurança CCTV", desc: "Instalação de câmaras de vigilância com monitorização remota ao vivo pelo telemóvel." },
        { nome: "Configuração Wi-Fi", desc: "Estruturação de redes sem fios estáveis para cobrir toda a sua área." },
        { nome: "Manutenção de Cerca Elétrica", desc: "Reparação de linhas cortadas, substituição de isoladores e testes de disparo." },
        { nome: "Manutenção de Geradores", desc: "Revisão de motores de arranque, troca de filtros e testes de carga." }
      ]
    }
  };

  useEffect(() => {
    if (clicouManual.current || isPausado) return;

    const intervalo = setInterval(() => {
      setCategoriaAtiva((prev) => {
        if (prev === 1) return 2;
        if (prev === 2) return 3;
        return 1;
      });
    }, 10000);

    return () => clearInterval(intervalo);
  }, [isPausado]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [categoriaAtiva]);

  const lidarComCliqueBotao = (idCategoria) => {
    clicouManual.current = true; 
    setCategoriaAtiva(idCategoria);
  };

  return (
    /* ⚡ Ajustado de py-4 para py-2 para economizar altura vertical */
    <div className="servicos-container w-100 px-3 py-2">
      {/* ⚡ Reduzido a margem mb-3 para mb-2 */}
      <h3 className="section-title text-uppercase text-center fw-bold mb-2">Nossos Serviços</h3>
      
      {/* ⚡ Reduzido a margem mb-4 para mb-2 */}
      <div className="d-flex justify-content-between mb-2">
        <button 
          className={`btn-categoria ${categoriaAtiva === 1 ? "active" : ""}`}
          onClick={() => lidarComCliqueBotao(1)}
        >
          Instalações
        </button>
        <button 
          className={`btn-categoria ${categoriaAtiva === 2 ? "active" : ""}`}
          onClick={() => lidarComCliqueBotao(2)}
        >
          Reparações
        </button>
        <button 
          className={`btn-categoria ${categoriaAtiva === 3 ? "active" : ""}`}
          onClick={() => lidarComCliqueBotao(3)}
        >
          Segurança
        </button>
      </div>

      <div 
        className="cards-scroll-x" 
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPausado(true)}
        onMouseLeave={() => setIsPausado(false)}
        onTouchStart={() => setIsPausado(true)}
        onTouchEnd={() => setIsPausado(false)}
      >
        {dadosCategorias[categoriaAtiva].items.map((servico, index) => (
          <div className="card-servico shadow-sm" key={index}>
            <div className="card-badge">Serviço {index + 1}</div>
            <h5 className="fw-bold mt-1 mb-1">{servico.nome}</h5>
            <p className="m-0 text-muted">{servico.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicos;