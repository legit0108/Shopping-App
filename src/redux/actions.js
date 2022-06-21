export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM';
export const UPDATE_QTY = 'UPDATE_QTY';

// advantages of using a file for actions:
// 1) ADD_TO_CART , adD_to_CarT , ADD_to_CaRt problem resolved
// 2) instead of updating an action in every file , just update the value of its variable here in this file , if update is required