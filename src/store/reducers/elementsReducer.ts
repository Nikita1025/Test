import { createSlice } from '@reduxjs/toolkit';

interface CalcElement {
  id: number;
  value: string | number;
}

export interface CalcBlock {
  position: number;
  label: string;
  data: CalcElement[];
}

export interface Calc {
  id: number;
  data: CalcBlock[];
}

interface InitialState {
  calculators: Calc[];
}

const initialState: InitialState = {
  calculators: [
    {
      id: 1,
      data: [
        {
          position: 1,
          label: 'count',
          data: [{ id: 1, value: 0 }],
        },
        {
          position: 2,
          label: 'operationButtons',
          data: [
            { id: 1, value: '/' },
            { id: 2, value: 'x' },
            { id: 3, value: '-' },
            { id: 4, value: '+' },
          ],
        },
        {
          position: 3,
          label: 'numbers',
          data: [
            { id: 1, value: 9 },
            { id: 2, value: 8 },
            { id: 3, value: 7 },
            { id: 4, value: 6 },
            { id: 5, value: 5 },
            { id: 6, value: 4 },
            { id: 7, value: 3 },
            { id: 8, value: 2 },
            { id: 9, value: 1 },
            { id: 10, value: ',' },
            { id: 11, value: 0 },
          ],
        },
        {
          position: 4,
          label: 'result',
          data: [{ id: 1, value: '=' }],
        },
      ],
    },
    {
      id: 2,
      data: [] as CalcBlock[],
    },
  ],
};

const slice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    setCalcBlock: (state, action) => {
      state.calculators = action.payload;
    },
  },
});

export const elementsReducer = slice.reducer;
export const { setCalcBlock } = slice.actions;
