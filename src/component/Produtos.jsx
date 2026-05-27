import React, { useState } from "react";
import "./Produtos.css";

function Produtos({ dados, carregando }) {
  // Estado para controlar qual imagem está aberta no modal de alta prioridade (z-index)
  const [imagemAtiva, setImagemAtiva] = useState(null);

  // 📞 Número oficial do WhatsApp da Electro Vanguard (com o código de Moçambique 258)
  const WHATSAPP_NUMBER = "258864670088";

  // ⚡ LÓGICA DO BOTÃO PEDIR (Redirecionamento automático)
  const handlePedir = (nome, preco) => {
    const textoPreco = parseFloat(preco) > 0 ? `${preco} MT` : "Preço sob consulta";
    
    // Texto limpo e profissional estruturado com quebras de linha para o vendedor
    const mensagem = `Olá, Electro Vanguard! 👋\n\n` +
                     `Gostaria de solicitar informações / fazer o pedido do seguinte produto:\n\n` +
                     `🛒 *Produto:* ${nome}\n` +
                     `💰 *Valor:* ${textoPreco}\n\n` +
                     `Como posso proceder com o pagamento e detalhes da entrega?`;

    // Converte os caracteres especiais e espaços para o formato aceito em URLs
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o chat do WhatsApp numa nova aba (funciona nativamente em Mobile e Web)
    window.open(urlWhatsApp, "_blank");
  };

  if (carregando) {
    return (
      <div className="container-produtos" >
        <p className="titulo-seccao"><b>Venda de Produtos</b></p>
        <div className="loading-produtos">A carregar catálogo da Electro Vanguard...</div>
      </div>
    );
  }

  return (
    <div className="container-produtos" id="Produtos">
      <p className="titulo-seccao text-center"><b>Produtos a Venda</b></p>
      
      {/* Categoria Iluminação com Roll-X */}
      <div className="cat-iluminacao">
        {dados.map((produto, index) => {
          // Normalização das chaves do teu Google Sheets para evitar erros de digitação e espaços
          const nomeProd = produto["Nome"] || produto["nome"];
          const precoProd = produto["Preco"] || produto["preco"] || produto["Preço"];
          const descProd = produto["Descricao Curta"] || produto["DescricaoCurta"] || produto["descricao_curta"];
          let urlImagem = produto["Link Imagem"] || produto["LinkImagem"] || produto["link_imagem"];

          // 🎯 TRATAMENTO ADAPTATIVO DO CLOUDINARY
          if (urlImagem) {
            urlImagem = urlImagem.trim();
            if (!urlImagem.startsWith("http")) {
              if (urlImagem.startsWith("/")) {
                urlImagem = urlImagem.substring(1);
              }
              urlImagem = `https://res.cloudinary.com/${urlImagem}`;
            }
          }

          return (
            <div className="card-produto" key={index}>
              {/* Ao clicar na div da imagem, abre o Modal de zoom */}
              <div className="wrapper-imagem" onClick={() => urlImagem && setImagemAtiva(urlImagem)}>
                {urlImagem ? (
                  <img 
                    src={urlImagem} 
                    alt={nomeProd} 
                    loading="lazy"
                    onError={(e) => {
                      // Fallback caso algum link de imagem falhe ou quebre
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/150x100?text=Electro+Vanguard";
                    }}
                  />
                ) : (
                  <div className="sem-foto">Sem Imagem</div>
                )}
              </div>
              
              <div className="detalhes-produto">
                <h3 className="nome-produto">{nomeProd}</h3>
                <p className="descricao-produto">{descProd}</p>
              </div>
              
              <div className="preco-botao">
                <span className="preco-produto">
                  {parseFloat(precoProd) > 0 
                    ? `${precoProd} MT` 
                    : "Sob Consulta"}
                </span>
                
                {/* 🎯 Gatilho da ação de Pedido direto via Props do mapeamento */}
                <button 
                  className="btn-pedir"
                  onClick={() => handlePedir(nomeProd, precoProd)}
                >
                  Pedir
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🎯 MODAL DINÂMICO COM Z-INDEX SUPERIOR */}
      {imagemAtiva && (
        <div className="modal-zoom-overlay" onClick={() => setImagemAtiva(null)}>
          <div className="modal-zoom-conteudo">
            <span className="modal-zoom-fechar" onClick={() => setImagemAtiva(null)}>&times;</span>
            <img src={imagemAtiva} alt="Visualização do Produto" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Produtos;