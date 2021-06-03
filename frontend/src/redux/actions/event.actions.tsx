import {
  EVENT_INPUT_CLEAN,
  GET_EVENTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../constants";

import { store } from "../store";

import firebase from "../../utils/firebase";
import { calcDaysPassed } from "../../utils/dates";

interface Istate {
  eventInputChange: object;
  userInputChangeHandler: {
    displayName: string;
    email: string;
    password: string;
    passTwo: string;
    errorMessage: string | null;
  ***REMOVED***
  events: any;

  user: {
    user: object;
    displayName: string;
    userID: string;
  ***REMOVED***
}

//---------------------------------------------- EVENTOS--------------------------------------------------

// ADICIONAR EVENTO-------------------
export const setAddEvent =
  (
    event: React.FormEvent<HTMLFormElement>,
    eventName: string,
    description: string,
    initialDate: string,
    finalDate: string
  ) =>
  (dispatch: Function) => {
    //Declara  state para saber o usuario
    const state: Istate | null = store.getState();
    event.preventDefault();
    const ref = firebase.database().ref(`events/${state.user.userID}`);

    const newInitialDate = Date.parse(initialDate);
    const newFinalDate = Date.parse(finalDate);

    ref.push({
      eventName: eventName,
      description: description,
      initialDate: newInitialDate,
      finalDate: newFinalDate,
      days: calcDaysPassed(newInitialDate, newFinalDate),
    });
    dispatch({ type: EVENT_INPUT_CLEAN });
  ***REMOVED***

//EDITAR EVENTO-------------------
export const setEditEvent =
  (
    event: React.MouseEvent<HTMLFormElement>,
    eventEditId: string,
    eventName: string,
    description: string,
    initialDate: string,
    finalDate: string
  ) =>
  (dispatch: Function) => {
    event.preventDefault();
    //Declara  state para saber o usuario
    const state: Istate | null = store.getState();
    //obtem a ref do evendo passando o uid do usuario e o id do evento
    const ref = firebase
      .database()
      .ref(`events/${state.user.userID}/${eventEditId}`);

    const newInitialDate = Date.parse(initialDate);
    const newFinalDate = Date.parse(finalDate);

    //altera os dados do evento selecionado
    ref.update({
      eventName: eventName,
      description: description,
      initialDate: newInitialDate,
      finalDate: newFinalDate,
      days: calcDaysPassed(newInitialDate, newFinalDate),
    });
    dispatch({ type: EVENT_INPUT_CLEAN });
  ***REMOVED***

//REMOVE EVENTO-------------------
export const setRemoveEvent = (eventID: string) => () => {
  //Declara  state para saber o usuario
  const state: Istate | null = store.getState();
  //obtem a ref do evendo passando o uid do usuario e o id do evento
  const ref = firebase.database().ref(`events/${state.user.userID}/${eventID}`);
  ref.remove();
***REMOVED***

//OBTEM EVENTOS DO DATABASE-------------------
export const getEvents = () => async (dispatch: Function) => {
  //verifica o usuario logado no app
  firebase.auth().onAuthStateChanged((FBUser) => {
    if (FBUser) {
      //atualizao state como usuario logado
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid,
        },
      });
      // obtem os dados de eventos do usuario logado
      const eventRef = firebase.database().ref(`events/${FBUser.uid}`);

      eventRef.on("value", (snapshot) => {
        let events = snapshot.val();

        //cria a lista de eventos
        const eventList = [];
        for (let item in events) {
          eventList.push({
            eventID: item,
            eventName: events[item].eventName,
            description: events[item].description,
            initialDate: events[item].initialDate,
            finalDate: events[item].finalDate,
            days: events[item].days,
          });
        }

        //atualiza a lista de eventos no state
        dispatch({
          type: GET_EVENTS,
          payload: eventList,
        });
      });
    } else {
      dispatch({ type: LOGIN_USER_FAILURE, payload: null });
    }
  });
***REMOVED***
