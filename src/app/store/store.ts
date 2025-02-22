import { configureStore } from '@reduxjs/toolkit';
import { optionsSliceReducer, persistOptionsState } from '~/entities/option';
import { decisionPickerSliceReducer, persistDecisionPickerState } from '~/pages/decision-picker';

export const store = configureStore({
  reducer: {
    ...optionsSliceReducer,
    ...decisionPickerSliceReducer,
  },
});

persistOptionsState(() => store.getState().options);
persistDecisionPickerState(() => store.getState().decisionPicker);
