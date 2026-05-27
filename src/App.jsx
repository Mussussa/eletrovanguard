import { useState, useEffect } from "react";
import Papa from "papaparse"; // 1. Certifica-te de correr "npm install papaparse" no terminal
import NavBar from "./component/nav_bar";
import Hero from "./component/Hero";
import SERVICOS from "./component/Servicos";
import PRODUTOS from "./component/Produtos"; 
import GALERIA from "./component/Galeria";
import SOBRE_NOS from "./component/Sobre";
import "./App.css";

function App() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Extraímos o ID da tua folha e configuramos o link de exportação em CSV limpo
  const SPREADSHEET_ID = "1I0ezfeEhL9-NuZrpEvUBavpO-s97jgbASQr2CrdptII";
  const GOOGLE_SHEETS_CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv`;

  useEffect(() => {
    // 3. Fazemos o fetch do formato CSV (puro texto) para evitar bloqueios de CORS e HTML do Google
    fetch(GOOGLE_SHEETS_CSV_URL)
      .then((res) => res.text())
      .then((csvText) => {
        // 4. O PapaParse lê os cabeçalhos (Nome, Preco...) e converte em objetos JSON instantaneamente
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setListaProdutos(results.data);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
        // Fallback local seguro com imagens ativas que não caem (placehold.co)
        setListaProdutos([
          { Nome: "Projector LED CHNT (10W-200W)", Preco: "0.00", DescricaoCurta: "Iluminação potente IP65 ideal para jardins e armazéns.", LinkImagem: "https://placehold.co/150x100" },
          { Nome: "LED Slim Flood Light Philips", Preco: "0.00", DescricaoCurta: "Projector LED de alta eficiência energética.", LinkImagem: "https://placehold.co/150x100" },
          { Nome: "Plafonier LED HC420 Opple", Preco: "0.00", DescricaoCurta: "Iluminação de teto slim elegante e homogénea.", LinkImagem: "https://placehold.co/150x100" }
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="corpo">
        <div className="col">
          <div className="menu sticky-top ">
            <NavBar />
          </div>

          <section className="aprentacao " id="Hero">
            <div>
              <Hero />
            </div>
          </section>

          <section className="servico" id="Servicos">
            <div>
              <SERVICOS />
            </div>
          </section>

          {/* Secção Produtos mapeando os dados vindos diretamente do Sheets */}
          <section className="produtos" id="Produtos">
            <PRODUTOS dados={listaProdutos} carregando={loading} />
          </section>



          <section className="galeria">
            <GALERIA />
          </section>

          <section className="sobre container" id="Sobre">
            <SOBRE_NOS />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;