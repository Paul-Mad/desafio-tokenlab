import React from "react";
import { RouteComponentProps } from "@reach/router";
import Evento from "./Evento.component";
import "./Eventos.styles.css";

const Eventos = (props: RouteComponentProps) => {
  return (
    <div className="event-container">
      <div className="data-form event-form">
        <h1> Eventos</h1>
        <form className="add-event-form">
          <input type="text" title="Pesquisar ou adicionar evento" />

          <button className="btn" type="submit" title="Adicionar">
            +
          </button>
        </form>
      </div>
      <div className="event-list-container flex-center">
        <div className="events-content">
          <div className="event-list"></div>
          <Evento />
        </div>
      </div>
    </div>
  );
***REMOVED***

export default Eventos;
