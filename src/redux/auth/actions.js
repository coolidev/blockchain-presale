import {
  SET_ADDRESS,
  SET_NETWORKID,
  SET_ERROR,
  SESSION,
  SESSION_OUT,
} from '../actions';

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: { address }
});

export const sessionLogin = (address) => ({
  type: SESSION,
  payload: { address }
});

export const sessionLogout = () => ({
  type: SESSION_OUT,
  payload: null
});

export const setNetworkId = (networkId) => ({
  type: SET_NETWORKID,
  payload: { networkId }
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: { error }
});
