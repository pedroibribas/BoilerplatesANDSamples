import { createContext } from "react";

export const ClientContext = createContext({});

// Initial State
export const INITIAL_STATE = {
  client: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
};

// Actions
export const CLIENT_PENDING = "CLIENT_PENDING";
export const CLIENT_FULFILLED = "CLIENT_FULFILLED";
export const CLIENT_REJECTED = "CLIENT_REJECTED";
export const CLIENT_RESET = "CLIENT_RESET";

// Action creators
export const clientPending = () => ({
  type: CLIENT_PENDING
});

export const clientFulfilled = (client) => ({
  type: CLIENT_FULFILLED,
  payload: client
});

export const clientRejected = (message) => ({
  type: CLIENT_REJECTED,
  payload: message
});

export const clientReset = () => ({
  type: CLIENT_RESET,
});

// Reducer
export const clientReducer = (state, action) => {
  switch (action.type) {
    case CLIENT_PENDING:
      return {
        client: null,
        isLoading: true,
        isSuccess: false,
        isError: false,
        message: '',
      };

    case CLIENT_FULFILLED:
      return {
        client: action.payload,
        isSuccess: true,
        isLoading: false,
        isError: false,
        message: '',
      };

    case CLIENT_REJECTED:
      return {
        message: action.payload,
        client: null,
        isSuccess: false,
        isLoading: false,
        isError: true,
      };

    case CLIENT_RESET:
      return {
        client: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ''
      };

    default:
      return state;
  }
};
