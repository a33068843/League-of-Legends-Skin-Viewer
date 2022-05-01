import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasData: false,
  championList: {},
};

const championsSlice = createSlice({
  name: 'champions',
  initialState,
  reducers: {
    UPDATE_CHAMPIONS: (state, action) => {
      state.championList = action.payload;

      const isEmpty = (item) => {
        return Object.keys(item).len === 0;
      };

      if (!isEmpty(state.championList)) {
        state.hasData = true;
      }
    },
  },
});

export const championsReducer = championsSlice.reducer;

export const { UPDATE_CHAMPIONS } = championsSlice.actions;
