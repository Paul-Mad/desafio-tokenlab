import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Evento from "./Evento.component";
import AddEventModal from "./AddEventModal.component";
import EditEventModal from "./EditEventModal.component";
import "./Eventos.styles.css";

//redux
import { connect } from "react-redux";
import {
  setEventInput,
  setEventEditInputs,
  setEventInputClean,
} from "../../redux/actions/input.actions";
import {
  setAddEvent,
  setEditEvent,
  setRemoveEvent,
  getEvents,
} from "../../redux/actions/event.actions";

interface EventosProps {
  eventInput: string;
  description: string;
  initialDate: string;
  finalDate: string;
  events: Array<object>;
  path: RouteComponentProps;
  onInputChange: Function;
  onEventEditInputs: Function;
  onEventInputClean: Function;
  onAddEvent: Function;
  onEditEvent: Function;
  onGetEvents: Function;
  onRemoveEvent: Function;
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
  const [addmodal, setAddModal] = useState(false);
  const [editmodal, setEditModal] = useState(false);

  const [eventEditId, setEventEditId] = useState("");

  //destructuring dos props
  const {
    eventInput,
    events,
    onInputChange,
    onEventEditInputs,
    onEventInputClean,
    onEditEvent,
    onGetEvents,
    onRemoveEvent,
  } = props;

  //obtem os eventos sempre que o component
  useEffect((): void => {
    onGetEvents();
  }, []);

  //Abre e fecha a modal de criar evento
  const toggleAddModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddModal(!addmodal);
  ***REMOVED***

  //Abre e fecha a modal de criar evento
  const toggleEditModal = () => {
    setEditModal(!editmodal);
  ***REMOVED***

  //filtra a lista de eventos recebidos para a pesquisa
  const eventFilter = (evento: any) =>
    evento.eventName?.toLowerCase().match(eventInput?.toLowerCase()) && true;

  //recebe os eventos filtrados no input para serem listados
  const filteredEvents = events?.filter(eventFilter);

  //recebe o evento para ser editado

  const eventToEdit = (evento: any) => {
    onEventEditInputs(evento);
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
            value={eventInput}
            placeholder="Evento"
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              onInputChange(event)
            }
            required
          />
          <button
            className="btn"
            title="Adicionar"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              if (eventInput === "") {
                alert("Digite o nome do evento");
              } else if (
                events.find((item: any) => item.eventName === eventInput)
              ) {
                alert(` "${eventInput}" já existe`);
              } else {
                toggleAddModal(e);
              }
            }}
          >
            +
          </button>
        </form>
      </div>
      {/* todos os props do componente Evento são enviados para os componentes Modal, até mesmo os que não são usados aqui */}
      <AddEventModal
        props={{ ...props, addmodal, toggleAddModal, onEventInputClean }}
      />
      <EditEventModal
        props={{
          ...props,
          editmodal,
          toggleEditModal,
          eventEditId,
          onEditEvent,
          onEventInputClean,
        }}
      />
      <div className="event-list-container flex-center">
        <div className="events-content">
          <div className="event-list"></div>
          {filteredEvents?.map((evento: any) => (
            <Evento
              evento={evento}
              onRemoveEvent={onRemoveEvent}
              toggleEditModal={toggleEditModal}
              setEventEditId={setEventEditId}
              eventToEdit={eventToEdit}
              key={evento.eventID}
            />
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
    onEventInputClean: () => dispatch(setEventInputClean()),
    onEventEditInputs: (evento: object) => dispatch(setEventEditInputs(evento)),
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
    onEditEvent: (
      event: React.MouseEvent<HTMLFormElement>,
      eventEditId: string,
      eventInput: string,
      description: string,
      initialDate: string,
      finalDate: string
    ) =>
      dispatch(
        setEditEvent(
          event,
          eventEditId,
          eventInput,
          description,
          initialDate,
          finalDate
        )
      ),

    onGetEvents: () => dispatch(getEvents()),
    onRemoveEvent: (eventID: string) => dispatch(setRemoveEvent(eventID)),
  ***REMOVED***
***REMOVED***

export default connect(mapStateToProps, mapDispatchToProps)(Eventos);
