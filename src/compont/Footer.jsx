import React from 'react'
import { PhoneOutlined, HeatMapOutlined} from "@ant-design/icons";

export default function Footer() {
  return (
    <div>


<footer className="Janela-footer">
        <div className="linha">
          <div>
            <h3 id="texto1-footer">Entre em contacto com a gente!</h3>
            
            <p id="texto2-footer">
              Entre em contacto com o Espelho Meu,
              <br /> queremos tirar as duvidas, ouvir suas criticas e sugestoes
            </p>

            <span id="texto2-footer">
              {" "}
              <PhoneOutlined className="icon1" /> (+244) 000-000-000
            </span>
            <br />
            <span id="texto2-footer">
              {" "}
              <HeatMapOutlined className="icon1" /> R. da Maxinde iepa
            </span>
          </div>
          {/* <div>
          <button id="butao2">
              <WhatsAppOutlined /> Entrar em conctato
            </button>
          </div> */}
        </div>
        <div className="copia-escrita">
          <p>© 2024 Eng. Silva - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
