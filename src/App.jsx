import './App.css'
import Header from './components/Header'
import img1 from './images/masc.png'
import img2 from './images/masc2.png'
import { useRef, useEffect } from 'react'

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 } // 20% da div visível
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <>
    <div className="tint">
      <div className="container"> 
        <div className="yellow-card">
        <Header />
          
          
          <div className="content">
              <br />
            <h1 id='title'>Nunca foi tão tranquilo <span id='italic'> organizar</span> <br /> eventos inesquecíveis.</h1>
            <p id='subtitle'>Acreditamos que o  <span id='italicColor'>🙉 sucesso </span>pertence aos audaciosos. </p>
         
         <br />

      <div className="botoes">
            <button >Eu quero</button>
            <button >Valores</button>
      </div>

        
          </div>
        </div>
      </div></div>
      <div className="containerImg" ref={containerRef}>

        <div className="card">
          <div className="conteudoCard">
            <h1>Quem somos?</h1>
            <img src={img1} alt="" srcset="" />
              <p>
                Festfy é uma plataforma completa para venda de ingressos e controle de eventos, simplificando a gestão de entradas e público.
            </p>
        </div>
        </div>
        <div className="card">
          <div className="conteudoCard">
            <h1>Por que a gente?</h1>
              <div className="deita">

                <div className="titleImg">
                      <img src={img2} alt="" srcset="" />
                </div>

                <div className='Pdeitado'>
                    <p>Escolher o Festfy é garantir eficiência, segurança e praticidade na gestão de seus eventos.</p>
                </div>

              </div>

          </div>

        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App