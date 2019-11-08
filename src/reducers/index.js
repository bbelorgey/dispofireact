import { CAPACITE, CALCULMENSUALITE } from '../actions';

// sate initial
const initialState = {
  neuf: true,
  mensualite: 50,
  duree: 2,
  taux: 0,
  assurance: 0,
  montant: 0,
  info: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAPACITE:
      return action;
    case CALCULMENSUALITE:
      return action;
    default:
      return state;
  }
}

export default reducer;