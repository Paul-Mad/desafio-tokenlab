import {
  EVENT_INPUT_CHANGE,
  EVENT_INPUT_CLEAN,
  EVENT_INPUT_CHANGE_TO_EDIT,
  USER_INPUT_CHANGE_SUCCESS,
  USER_INPUT_CHANGE_ERROR,
} from "../constants";

import { store } from "../store";

interface Istate {
  eventInputChange: object;
  userInputChangeHandler: {
    displayName: string;
    email: string;
    password: string;
    passTwo: string;
    errorMessage: string | null;
  };
  user: {
    user: object;
    displayName: string;
    userID: string;
  };
}

//------------------------------------------ATUALIZA CAMPOS DE INPUT NO STATE

//Action de INPUTS de Eventos-------------------

export const setEventInputClean = () => ({ type: EVENT_INPUT_CLEAN });
export const setEventInput = (
  event: React.MouseEvent<HTMLInputElement>
): object => ({
  type: EVENT_INPUT_CHANGE,
  payload: event.currentTarget,
});

export const setEventEditInputs = (data: any) => ({
  type: EVENT_INPUT_CHANGE_TO_EDIT,
  payload: data,
});

//Action de input dos forms de usuario-------------------
export const setInputChangeHandler =
  (event: React.SyntheticEvent<HTMLInputElement>) => (dispatch: Function) => {
    const itemName = event.currentTarget.name;
    const itemValue = event.currentTarget.value;

    dispatch({
      type: USER_INPUT_CHANGE_SUCCESS,
      payload: { name: itemName, value: itemValue },
    });

    //Declara  state apenas para verificação e validação
    const state: Istate | null = store.getState();
    state.userInputChangeHandler.password !==
    state.userInputChangeHandler.passTwo
      ? dispatch({
          type: USER_INPUT_CHANGE_ERROR,
          payload: "As senhas não são iguais",
        })
      : dispatch({
          type: USER_INPUT_CHANGE_ERROR,
          payload: null,
        });
  };
