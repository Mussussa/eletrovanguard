import "./nav_bar/css.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white w-100 px-2 py-1">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Marca / Logo (Alinhado à esquerda com os teus dois textos empilhados) */}
        <a
          className="navbar-brand m-0"
          href="#"
          style={{ lineHeight: "1.9", fontSize: "16px" }}
        >
          <span
            className="fw-bold d-block fs-5 text-light m-0 liquid-text"
            data-text="ELETRO VANGUARD"
          >
            ELETRO VANGUARD
          </span>
          <span
            className="d-block small text-muted m-0"
            style={{ fontSize: "12px", letterSpacing: "1px" }}
          >
            MULTSERVICE Lda
          </span>
        </a>

        {/* Botão Hambúrguer (Aparece apenas no Telemóvel à direita) */}
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuVangard"
          aria-controls="menuVangard"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links do Menu (No telemóvel abrem em cascata para baixo) */}
        <div className="collapse navbar-collapse mt-2 mt-lg-0" id="menuVangard">
          <ul className="navbar-nav ms-auto gap-2 text-start pb-2 pb-lg-0">
            <li className="nav-item">
              {/* Adicionado o # na frente do ID correspondente */}
              <a className="nav-link active fw-semibold" href="#Hero">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Servicos">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Produtos">
                Produtos
              </a>
            </li>
            <li className="nav-item">
              {/* Aponta para #Sobre para fazer scroll até aos contactos */}
              <a className="nav-link" href="#Sobre">
                Sobre nós
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
