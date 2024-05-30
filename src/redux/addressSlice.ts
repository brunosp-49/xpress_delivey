import {
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from './store';
import {
  Address,
  initialStateAddressInterface,
} from '../types';
import { toast } from 'react-toastify';

const initialState: initialStateAddressInterface =
  {
    addresses: [
      {
        address_id: '1',
        address_type: 1,
        address: 'dsfs',
        address_citizen_full_name: '',
        address_citizen_id: '',
        address_city: 'São Paulo',
        address_country: 'Brazil',
        address_lot_id: '',
        address_name: 'Casa',
        address_observations: '',
        address_planet: 'Earth',
        address_state: 'São Paulo',
        address_zip_code: '12227240',
      },
    ],
    selectedAddress: null,
  };

export const addressSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSelectedAddress: (
      state,
      action: PayloadAction<Address>
    ) => {
      state.selectedAddress = action.payload;
    },
    createAddress: (
      state,
      action: PayloadAction<{
        data: Address;
        mode: 'default' | 'normal';
      }>
    ) => {
      if (action.payload.mode === 'default') {
        state.addresses.unshift(
          action.payload.data
        );
      } else {
        state.addresses.push(action.payload.data);
      }
      toast.success(
        `Please fill the empty fields`
      );
    },
    updateAddress: (
      state,
      action: PayloadAction<{
        data: Address;
        addressId: string;
        mode: 'default' | 'normal';
      }>
    ) => {
      const index = state.addresses.findIndex(
        (address) =>
          address.address_id ===
          action.payload.addressId
      );

      if (action.payload.mode === 'normal') {
        if (index !== -1) {
          Object.assign(
            state.addresses[index],
            action.payload.data
          );
        }
      } else {
        state.addresses = state.addresses.filter(
          (address) =>
            address.address_id !== action.payload.addressId
        );
        state.addresses.unshift(
          action.payload.data
        );
      }
    },
    deleteAddress: (
      state,
      action: PayloadAction<string>
    ) => {
      state.addresses = state.addresses.filter(
        (address) =>
          address.address_id !== action.payload
      );
    },
  },
});

export const addresses = (state: RootState) =>
  state.reducer.address.addresses;
export const selectedAddress = (
  state: RootState
) => state.reducer.address.selectedAddress;

export const {
  createAddress,
  deleteAddress,
  updateAddress,
  setSelectedAddress,
} = addressSlice.actions;

export default addressSlice.reducer;
