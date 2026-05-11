import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  neuf: true,
  mensualite: 50,
  duree: 2,
  taux: 0,
  assurance: 0,
  montant: 0,
  info: ''
};

const mortgageSlice = createSlice({
  name: 'mortgage',
  initialState,
  reducers: {
    updateFormulaire: (state, action) => ({ ...state, ...action.payload })
  }
});

export const { updateFormulaire } = mortgageSlice.actions;

export const store = configureStore({ reducer: mortgageSlice.reducer });
