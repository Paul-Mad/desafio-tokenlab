import {
  CHANGE_SEARCH,
  GET_EVENTS_PENDING,
  GET_EVENTS_FAILURE,
  GET_EVENTS_SUCCESS,
  AUTH_USER,
  AUTH_USER_FAILURE,
  REG_NEW_USER_SUCCESS,
  REG_NEW_USER_FAUILURE,
  INPUT_CHANGE_SUCCESS,
  INPUT_CHANGE_ERROR,
} from "./constants";

const initialStateSearch = { searchField: "" ***REMOVED***

interface Action {
  type: string;
  payload: any;
}

//Atualiza o state com a lista de Eventos pesquisados e enviados pela Action de pesquisa
export const searchEvents = (
  state = initialStateSearch,
  action: Action
): object => {
  switch (action.type) {
    case CHANGE_SEARCH:
      // retorna a copia do state atual mais o campo search com os novos dados da pesquisa, evitando mutabilidade
      return { ...state, searchField: action.payload ***REMOVED***
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
export const authUser = (state = initialStateUser, action: Action) => {
  switch (action.type) {
    //caso tenha usuario logado, retorna para o state os dados do usuario
    case AUTH_USER:
      return {
        ...state,
        user: action.payload.user,
        name: action.payload.displayName,
        userId: action.payload.userID,
      ***REMOVED***
    //caso nao possua usuario logado retora null para o state
    case AUTH_USER_FAILURE:
      return { ...state, user: action.payload ***REMOVED***

    default:
      return state;
  }
***REMOVED***

//getEvents thunk
const initialStateEvents = { isPending: false, events: [], error: "" ***REMOVED***

export const getEvents = (
  state = initialStateEvents,
  action: Action
): object => {
  switch (action.type) {
    //atualizao state para pendente (aguardando request)
    case GET_EVENTS_PENDING:
      return { ...state, isPending: true ***REMOVED***
    //request com sucesso, atualiza o state com os eventos
    case GET_EVENTS_SUCCESS:
      return { ...state, events: action.payload, isPending: false ***REMOVED***
    //caso de erro, atualiza o state no campo erro
    case GET_EVENTS_FAILURE:
      return { ...state, error: action.payload, isPending: false ***REMOVED***
    default:
      return state;
  }
***REMOVED***

//-------------------------Cadastro usuario-------------------

const initialStateReg = {
  displayName: "",
  email: "",
  passOne: "",
  passTwo: "",
  errorMessage: null,
***REMOVED***

//Altera o state dos inputs
export const inputChangeHandler = (
  state = initialStateReg,
  action: Action
): object => {
  switch (action.type) {
    case INPUT_CHANGE_SUCCESS:
      return { ...state, [action.payload.name]: action.payload.value ***REMOVED***
    case INPUT_CHANGE_ERROR:
      return { ...state, errorMessage: action.payload ***REMOVED***
    default:
      return state;
  }
***REMOVED***

//Registra o cadastro do usuario
export const user = (state = initialStateUser, action: Action): object => {
  switch (action.type) {
    case REG_NEW_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        displayName: action.payload.displayName,
        userID: action.payload.userID,
      ***REMOVED***

    default:
      return state;
  }
***REMOVED***
