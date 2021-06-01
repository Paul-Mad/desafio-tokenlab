import React from "react";
import { BiEdit, BiTrash, BiMailSend } from "react-icons/bi";

import "./Evento.styles.css";

interface eventProps {
  evento: {
    eventID: string;
    eventName: string;
    description: string;
    initialDate: number;
    finalDate: number;
    days: number;
  ***REMOVED***
}

const Evento = ({ evento }: eventProps): JSX.Element => {
  const { eventName, description, initialDate, finalDate, days } = evento;

  const formatedInitialdate = new Date(initialDate).toLocaleDateString(
    "pt-BR",
    {
      timeZone: "UTC",
    }
  );

  const formatedFinalDate = new Date(finalDate).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  return (
    <div className="event flex-center">
      <div className="event-name" title="Nome  do Evento">
        {eventName}
      </div>
      <div className="event-description" title="Descrição">
        {description}
      </div>
      <div className="event-details flex-center" title="Detalhes">
        <div>Início: {formatedInitialdate}</div>
        <div>Fim: {formatedFinalDate}</div>
        <div> {days > 1 ? `${days} dias` : `${days} dia`}</div>
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
***REMOVED***

export default Evento;
