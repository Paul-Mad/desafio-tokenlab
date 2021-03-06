import React from "react";
import "./Eventos.styles.css";

interface EventosProps {
  props: {
    eventInput: string;
    description: string;
    initialDate: string;
    finalDate: string;
    events: Array<object>;
    editmodal: boolean;
    eventEditId: string;
    toggleEditModal: Function;
    onInputChange: Function;
    onEditEvent: Function;
    onEventInputClean: Function;
  };
}

const EditEventModal = (props: EventosProps): JSX.Element => {
  const {
    eventInput,
    description,
    initialDate,
    finalDate,
    events,
    editmodal,
    eventEditId,
    toggleEditModal,
    onInputChange,
    onEditEvent,
    onEventInputClean,
  } = props.props;

  return (
    <div className={`data-form event-form modal ${editmodal ? "" : "hidden"}`}>
      <button
        className="btn--close-modal"
        onClick={(e: React.MouseEvent) => {
          onEventInputClean();
          toggleEditModal(e);
        }}
      >
        &times;
      </button>

      <form>
        <h1>Editar Evento </h1>
        <br />
        <label>Nome do evento</label>
        <input
          type="text"
          title="Nome do evento"
          name="eventInput"
          value={eventInput}
          onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
            onInputChange(event)
          }
          required
        />
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
            min="2021-06-03"
            max="2050-01-01"
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
            min="2021-06-03"
            max="2050-01-01"
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
            } else if (initialDate > finalDate) {
              alert("A data inicial não pode ser maior que a final");
            } else if (
              events.find(
                (item: any) =>
                  item.eventName === eventInput && item.eventID !== eventEditId //se o nome do evento for igual e o ID diferente, não permite edição
              )
            ) {
              alert(`Evento: ${eventInput} já existe`);
            } else {
              onEditEvent(
                event,
                eventEditId,
                eventInput,
                description,
                initialDate,
                finalDate
              );
              toggleEditModal(event);
            }
          }}
        >
          Editar Evento
        </button>
      </form>
    </div>
  );
};

export default EditEventModal;
