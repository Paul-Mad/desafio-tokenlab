import React from "react";
import { BiEdit, BiTrash, BiMailSend } from "react-icons/bi";

import "./Evento.styles.css";

const Evento = () => (
  <div className="event flex-center">
    <div className="event-name" title="Nome  do Evento">
      evento 2
    </div>
    <div className="event-description" title="Descrição">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem
      ipsa in veritatis
    </div>
    <div className="event-details flex-center" title="Detalhes">
      <div>Início: 01/05/2021</div>
      <div>Fim: 10/05/2021</div>
      <div> 9 dias</div>
    </div>
    <div className="event-actions flex-center">
      <button className="btn btn-edit" title="Editar">
        <BiEdit />
      </button>
      <button className="btn btn-remove" title="Remover">
        <BiTrash />
      </button>
      <button className="btn btn-invite" title="Convidar">
        <BiMailSend />
      </button>
    </div>
  </div>
);

export default Evento;
