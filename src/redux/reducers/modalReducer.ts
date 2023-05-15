import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  majorCardModal: boolean;
  subCardModal: boolean;
  jobCardModal: boolean;
  gameStatusModal: boolean;
  resourceExchangeModal: boolean;
  foodSelectionModal: boolean;
  finalScoreBoardModal: boolean;
}

interface ModalAction {
  type: string;
  payload: keyof ModalState;
}

const initialState: ModalState = {
  majorCardModal: false,
  subCardModal: false,
  jobCardModal: false,
  gameStatusModal: false,
  resourceExchangeModal: false,
  foodSelectionModal: false,
  finalScoreBoardModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state: ModalState, action: ModalAction) {
      console.log(action.payload);
      state[action.payload] = true;
    },
    closeModal(state: ModalState, action: ModalAction) {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
