import type { Middleware, UnknownAction } from '@reduxjs/toolkit';

export const myLogger: Middleware = (store) => (next) => (action) => {
  console.log('dispatched an action', (action as UnknownAction).type);
  console.log('current state', store.getState());

  next(action);

  console.log('updated state is', store.getState());
};
