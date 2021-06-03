import React from "react";
import "./Eventos.styles.css";

interface EventosProps {
  props: {
    eventInput: string;
    description: string;
    initialDate: string;
    finalDate: string;
    events: Array<object>;
    addmodal: boolean;
    toggleAddModal: Function;
    onInputChange: Function;
    onEventInputClean: Function;
    onAddEvent: Function;
  ***REMOVED***
}

const AddEventModal = (props: EventosProps): JSX.Element => {
  const {
    eventInput,
    description,
    initialDate,
    finalDate,
    addmodal,
    toggleAddModal,
    onInputChange,
    onAddEvent,
    onEventInputClean,
  } = props.props;
  return (
    <div className={`data-form event-form modal ${addmodal ? "" : "hidden"}`}>
      <button
        className="btn--close-modal"
        onClick={(e: React.MouseEvent) => {
          onEventInputClean();
          toggleAddModal(e);
        }}
      >
        &times;
      </button>

      <form>
        <h1>Adicionar Evento</h1>
        <br />
        <label>Descrição</label>
        <textarea
          title="Descrição"
          name="description"
          value={description}
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
            value={initialDate}
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
            value={finalDate}
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              onInputChange(event)
            }
            required
          />
        </div>
        <button
          className="btn"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();

            if (eventInput === "") {
              alert("Digite o nome do evento");
            } else if (initialDate === "" || finalDate === "") {
              alert("As datas devem ser selecionadas");
            } else {
              onAddEvent(
                event,
                eventInput,
                description,
                initialDate,
                finalDate
              );
              toggleAddModal(event);
            }
          }}
        >
          Criar Evento
        </button>
      </form>
    </div>
  );
***REMOVED***

export default AddEventModal;
