import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from '../../interface/interfaces';
import { ModalAction } from '../../interface/interfaces';

const initialState: ModalState = {
  roomMakeModal: false,
  waitingModal: false,
  majorCardModal: false,
  occupationCardModal: false,
  myCardModal: false,
  equipmentModal: false,
  gameStatusModal: false,
  resourceExchangeModal: false,
  foodSelectionModal: false,
  finalScoreModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state: ModalState, action: ModalAction) {
      state[action.payload] = true;
    },
    closeModal(state: ModalState, action: ModalAction) {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
