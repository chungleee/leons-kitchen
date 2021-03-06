export let endpoint;
if (process.env.NODE_ENV !== "production") {
  endpoint = "http://localhost:3010";
} else {
  endpoint = "https://leons-kitchen.appspot.com";
}

export const JWT = "leon's kitchen jwtToken";
export const AUTH_ERROR = "AUTH_ERROR";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const CURRENT_USER = "CURRENT_USER";

export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

export const CREATE_FOOD_ITEM = "CREATE_FOOD_ITEM";
export const FETCH_FOOD_ITEMS = "FETCH_FOOD_ITEMS";
export const DELETE_FOOD_ITEM = "DELETE_FOOD_ITEM";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

export const CREATE_PAYMENT_INTENT = "CREATE_PAYMENT_INTENT";

export const CREATE_ORDER = "CREATE_ORDER";

export const ORDER_RECEIVED = "ORDER_RECEIVED";
export const ORDER_COMPLETE = "ORDER_COMPLETE";

export const FETCH_ORDERS = "FETCH_ORDERS";
