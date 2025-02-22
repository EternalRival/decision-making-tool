import type { store } from './store';

declare global {
  export type RootState = ReturnType<typeof store.getState>;

  export type AppDispatch = typeof store.dispatch;
}
