import {
  EVENT_INPUT_CHANGE,
  EVENT_INPUT_CHANGE_TO_EDIT,
  EVENT_INPUT_CLEAN,
  GET_EVENTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  USER_INPUT_CHANGE_SUCCESS,
  USER_INPUT_CHANGE_CLEAN,
  USER_INPUT_CHANGE_ERROR,
} from "./constants";
import { inputDateString } from "../utils/dates";

const initialStateEventInput = {
  eventInput: "",
  description: "",
  initialDate: "",
  finalDate: "",
***REMOVED***

interface Action {
  type: string;
  payload: any;
}

//Atualiza o state com a lista de Eventos pesquisados e enviados pela Action de pesquisa
export const eventInputChange = (
  state = initialStateEventInput,
  action: Action
): object => {
  switch (action.type) {
    case EVENT_INPUT_CHANGE:
      // retorna a copia do state atual mais o campo search com os novos dados da pesquisa, evitando mutabilidade
      return { ...state, [action.payload.name]: action.payload.value ***REMOVED***
    case EVENT_INPUT_CLEAN:
      //limpa os campos do input
      return {
        ...state,
        eventInput: "",
        description: "",
        initialDate: "",
        finalDate: "",
      ***REMOVED***
    case EVENT_INPUT_CHANGE_TO_EDIT:
      return {
        ...state,
        eventInput: action.payload.eventName,
        description: action.payload.description,
        initialDate: inputDateString(action.payload.initialDate),
        finalDate: inputDateString(action.payload.finalDate),
      ***REMOVED***
    default:
      return state;
  }
***REMOVED***

//authUser
const initialStateUser = {
  user: "",
  displayName: "",
  userID: "",
***REMOVED***

const initialStateEvents = {***REMOVED***

export const events = (state = initialStateEvents, action: Action): object => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: action.payload ***REMOVED***

    default:
      return state;
  }
***REMOVED***

//-------------------------USUARIO-------------------

const initialStateInput = {
  displayName: "",
  email: "",
  password: "",
  passTwo: "",
  errorMessage: null,
***REMOVED***

//Altera o state dos inputs
export const userInputChangeHandler = (
  state = initialStateInput,
  action: Action
): object => {
  switch (action.type) {
    case USER_INPUT_CHANGE_SUCCESS:
      return { ...state, [action.payload.name]: action.payload.value ***REMOVED***
    case USER_INPUT_CHANGE_ERROR:
      return { ...state, errorMessage: action.payload ***REMOVED***
    case USER_INPUT_CHANGE_CLEAN:
      return {
        ...state,
        ...initialStateInput,
      ***REMOVED***
    default:
      return state;
  }
***REMOVED***

//autentica o  usuario
export const user = (state = initialStateUser, action: Action): object => {
  switch (action.type) {
    //caso tenha usuario logado, retorna para o state os dados do usuario
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        displayName: action.payload.displayName,
        userID: action.payload.userID,
      ***REMOVED***
    //caso nao possua usuario logado retora null para o state
    case LOGIN_USER_FAILURE:
      return { ...state, user: action.payload ***REMOVED***

    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        displayName: null,
        userID: null,
      ***REMOVED***
    default:
      return state;
  }
***REMOVED***
