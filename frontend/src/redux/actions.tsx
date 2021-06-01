import {
  CHANGE_SEARCH,
  GET_EVENTS_PENDING,
  GET_EVENTS_FAILURE,
  GET_EVENTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REG_NEW_USER_SUCCESS,
  REG_NEW_USER_FAILURE,
  INPUT_CHANGE_SUCCESS,
  INPUT_CHANGE_ERROR,
} from "./constants";

import { store } from "./store";

import firebase from "../utils/firebase";
import { calcDaysPassed } from "../utils/dates";
import { navigate } from "@reach/router";

interface Istate {
  eventInputChange: object;
  inputChangeHandler: {
    displayName: string;
    email: string;
    password: string;
    passTwo: string;
    errorMessage: string | null;
  ***REMOVED***
  user: {
    user: object;
    displayName: string;
    userID: string;
  ***REMOVED***
}

//Action de pesquisa de Eventos
export const setEventInput = (
  event: React.MouseEvent<HTMLInputElement>
): object => ({
  type: CHANGE_SEARCH,
  payload: event.currentTarget,
});

//Obtem dados dos eventos
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

export const setAddEvent =
  (
    event: React.FormEvent<HTMLFormElement>,
    eventName: string,
    description: string,
    initialDate: string,
    finalDate: string
  ) =>
  () => {
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
  ***REMOVED***

// LOGIN DO USUARIO
export const setLoginUser =
  (event: React.FormEvent<HTMLFormElement>, email: string, password: string) =>
  (dispatch: Function) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged((FBUser) => {
          if (FBUser) {
            dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: {
                user: FBUser,
                displayName: FBUser.displayName,
                userID: FBUser.uid,
              },
            });
            navigate("/eventos");
          } else {
            dispatch({ type: LOGIN_USER_FAILURE, payload: null });
          }
        });
      })
      .catch((error) => (error.message != null ? alert(error.message) : ""));
  ***REMOVED***

// desloga o usuario
export const setUserLogout =
  (event: React.FormEvent<HTMLFormElement>) => (dispatch: Function) => {
    event.preventDefault();
    //limpa os campos do state de usuario
    dispatch({
      type: LOGOUT_USER,
      payload: null,
    });

    //log out do usuario
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/");
      });
  ***REMOVED***

// CADASTRO DO USUARIO
export const setRegNewUser =
  (
    event: React.FormEvent<HTMLFormElement>,
    displayName: string,
    email: string,
    password: string
  ) =>
  (dispatch: Function) => {
    event.preventDefault();
    //Cria o usuario no firebase usando email e password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        //registra o nome de usuario ao usuario criado
        firebase.auth().onAuthStateChanged((FBUser) => {
          FBUser?.updateProfile({ displayName: displayName }).then(() => {
            dispatch({
              type: REG_NEW_USER_SUCCESS,
              payload: {
                user: FBUser,
                displayName: FBUser.displayName,
                userID: FBUser.uid,
              },
            });
            //navega para a pagina de eventos
            navigate("/eventos");
          });
        });
      })
      .catch((error) => alert(error.message));
  ***REMOVED***

//altera o state do de input dos forms
export const setInputChangeHandler =
  (event: React.SyntheticEvent<HTMLInputElement>) => (dispatch: Function) => {
    //Declara  state apenas para verificação e validação
    const state: Istate | null = store.getState();
    const itemName = event.currentTarget.name;
    const itemValue = event.currentTarget.value;
    state.inputChangeHandler.password !== state.inputChangeHandler.passTwo
      ? dispatch({
          type: INPUT_CHANGE_ERROR,
          payload: "As senhas não são iguais",
        })
      : dispatch({
          type: INPUT_CHANGE_ERROR,
          payload: null,
        });

    dispatch({
      type: INPUT_CHANGE_SUCCESS,
      payload: { name: itemName, value: itemValue },
    });
  ***REMOVED***
