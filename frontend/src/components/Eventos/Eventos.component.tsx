import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Evento from "./Evento.component";
import "./Eventos.styles.css";

//redux
import { connect } from "react-redux";
import { setEventInput, setAddEvent, getEvents } from "../../redux/actions";

interface EventosProps {
  eventInput: string;
  description: string;
  initialDate: string;
  finalDate: string;
  events: Array<object>;
  path: RouteComponentProps;
  onInputChange: Function;
  onAddEvent: Function;
  onGetEvents: Function;
}

interface EventosState {
  eventInputChange: {
    eventInput: string;
    description: string;
    initialDate: string;
    finalDate: string;
  ***REMOVED***
  events: { events: Array<object> ***REMOVED***
}

const Eventos = (props: EventosProps): JSX.Element => {
  const [modal, setModal] = useState(false);
  //destructuring dos props
  const {
    eventInput,
    description,
    initialDate,
    finalDate,
    events,
    onInputChange,
    onAddEvent,
    onGetEvents,
  } = props;

  useEffect((): void => {
    onGetEvents();
  }, []);
  // //filtra apenas os itens que contem o nome com os valores digitados
  // const searchFilter = (item: any) =>
  //   item.name.toLowerCase().match(eventInput.toLowerCase()) && true;

  // const filteredEvents: Array<Events> = events.filter(searchFilter)

  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModal(!modal);
  ***REMOVED***

  return (
    <div className="event-container">
      <div className="data-form event-form">
        <h1> Eventos</h1>
        <form className="add-event-form" id="event-form">
          <input
            type="search"
            title="Pesquisar ou adicionar evento"
            name="eventInput"
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              onInputChange(event)
            }
            required
          />
          <button
            className="btn"
            title="Adicionar"
            onClick={(e: React.MouseEvent) => {
              eventInput === ""
                ? alert("Digite o nome do evento")
                : toggleModal(e);
            }}
          >
            +
          </button>
        </form>
      </div>
      <div className={`data-form event-form modal ${modal ? "" : "hidden"}`}>
        <button className="btn--close-modal" onClick={toggleModal}>
          &times;
        </button>

        <form>
          <label>Descrição</label>
          <textarea
            title="Descrição"
            name="description"
            onChange={(event: React.SyntheticEvent<HTMLTextAreaElement>) =>
              onInputChange(event)
            }
          />

          <div>
            <label>Data Inicial</label>
            <input
              type="date"
              title="Data Inicial"
              name="initialDate"
              onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
                onInputChange(event)
              }
              required
            />
            <label>Data Final</label>
            <input
              type="date"
              title="Data Final"
              name="finalDate"
              onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
                onInputChange(event)
              }
              required
            />
          </div>
          <button
            className="btn"
            onClick={(event: React.MouseEvent) => {
              if (eventInput === "") {
                alert("Digite o nome do evento");
              } else {
                onAddEvent(
                  event,
                  eventInput,
                  description,
                  initialDate,
                  finalDate
                );
                toggleModal(event);
              }
            }}
          >
            Criar Evento
          </button>
        </form>
      </div>
      <div className="event-list-container flex-center">
        <div className="events-content">
          <div className="event-list"></div>
          {events?.map((evento: any) => (
            <Evento evento={evento} key={evento.eventID} />
          ))}
        </div>
      </div>
    </div>
  );
***REMOVED***

//repassa o state para o componente
const mapStateToProps = (state: EventosState) => {
  return {
    eventInput: state.eventInputChange.eventInput,
    description: state.eventInputChange.description,
    initialDate: state.eventInputChange.initialDate,
    finalDate: state.eventInputChange.finalDate,
    events: state.events.events,
  ***REMOVED***
***REMOVED***

//repassa o o dispatch das actions para o componente
//
const mapDispatchToProps = (dispatch: any) => {
  return {
    onInputChange: (event: React.MouseEvent<HTMLInputElement>) =>
      dispatch(setEventInput(event)),
    onAddEvent: (
      event: React.MouseEvent<HTMLFormElement>,
      eventInput: string,
      description: string,
      initialDate: string,
      finalDate: string
    ) =>
      dispatch(
        setAddEvent(event, eventInput, description, initialDate, finalDate)
      ),
    onGetEvents: () => dispatch(getEvents()),
  ***REMOVED***
***REMOVED***

export default connect(mapStateToProps, mapDispatchToProps)(Eventos);
