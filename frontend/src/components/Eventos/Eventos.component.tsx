import React from "react";
import { RouteComponentProps } from "@reach/router";
import Evento from "./Evento.component";
import "./Eventos.styles.css";

//redux
import { connect } from "react-redux";
import { setSearchField } from "../../redux/actions";

interface EventosProps {
  searchField: string;
  path: RouteComponentProps;
  onSearchChange: Function;
}

interface EventosState {
  searchEvents: { searchField: string ***REMOVED***
}

const Eventos = (props: EventosProps): JSX.Element => {
  //destructuring dos props
  const { onSearchChange, searchField } = props;

  // //filtra apenas os itens que contem o nome com os valores digitados
  // const searchFilter = (item: any) =>
  //   item.name.toLowerCase().match(searchField.toLowerCase()) && true;

  // const filteredEvents: Array<Events> = events.filter(searchFilter)

  return (
    <div className="event-container">
      <div className="data-form event-form">
        <h1> Eventos</h1>
        <form className="add-event-form">
          <input
            type="search"
            title="Pesquisar ou adicionar evento"
            name="searchField"
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              onSearchChange(event)
            }
          />

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

//repassa o state para o componente
const mapStateToProps = (state: EventosState) => {
  return {
    searchField: state.searchEvents.searchField,
  ***REMOVED***
***REMOVED***

//repassa o o dispatch das actions para o componente
//
const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.currentTarget.value)),
  ***REMOVED***
***REMOVED***

export default connect(mapStateToProps, mapDispatchToProps)(Eventos);
