import './App.css';
import Header from './components/Header/Header';
import img1 from './images/masc.png';
import img2 from './images/masc2.png';
import img3 from './images/masc3.png';
import video1 from './video/apresentacao.mp4';
import { useRef, useEffect } from 'react';

function App() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  // Efeito de animação ao rolar a página para cards E vídeo
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    // Observar tanto os cards quanto a seção do vídeo
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (videoSectionRef.current) observer.unobserve(videoSectionRef.current);
    };
  }, []);

  // Controle do vídeo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay bloqueado:', error);
        }
      };
      
      playVideo();
    }
  }, []);

  return (
    <>
      {/* 1. PRIMEIRO: Yellow Card */}
      <div className="container">
        <div className="yellow-card">
          <Header />
          <div className="content">
            <br />
            <h1 id="title">
              Agora está muito fácil <span id="italic"> organizar</span> <br /> eventos.
            </h1>
            <p id="subtitle">
              "O maior <span id="italicColor">risco </span>é não assumir nenhum<span id="italicColor"> risco</span>"<span id='autor'> ...Mark Zuckerberg</span>{' '}
            </p>
            <br />

            <div className="botoes">
              <button>Eu quero</button>
              <button>Valores</button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DEPOIS: Vídeo com efeito de entrada */}
      <div className="video-section" ref={videoSectionRef}>
        <div className="video-background">
          <video ref={videoRef} className="background-video" autoPlay muted loop playsInline>
            <source src={video1} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <div className="video-overlay"></div>
        </div>
      </div>

      {/* 3. POR ÚLTIMO: Cards com efeito de entrada */}
      <div className="cards-container">
        <div className="containerImg" ref={containerRef}>
          <div className="card">
            <div className="conteudoCard">
              <h1>Quem somos?</h1>
              <img src={img1} alt="" />
              <p>
                <span id="spanAmarelo">Festfy</span> é uma plataforma completa para venda de ingressos e controle de eventos,
                simplificando a gestão de entradas e público.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="conteudoCard">
              <h1>Por que a gente?</h1>
              <img src={img2} alt="" />
              <p>
                Escolher o <span id="spanAmarelo">Festfy</span> é garantir eficiência, segurança e praticidade na gestão de seus
                eventos.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="conteudoCard">
              <h1>
                Um <span id="spanAmarelo">Banana</span>
              </h1>
              <img src={img3} alt="" />
              <p>
                Se você não usar nosso sistema depois de entender como ele facilitará sua vida você é <span id="spanAmarelo">[olha o titulo]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;