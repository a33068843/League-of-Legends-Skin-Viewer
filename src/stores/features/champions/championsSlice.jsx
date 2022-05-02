import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasData: false,
  championList: {},
  championData: {},
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
    UPDATE_CHAMPION: (state, action) => {
      const championName = Object.keys(action.payload.data);
      const hasChampion = (item) => {
        return !!state.championData[item];
      };
      if (!hasChampion(championName)) {
        state.championData[championName] = action.payload.data;
      }
    },
  },
});

export const championsReducer = championsSlice.reducer;

export const { UPDATE_CHAMPIONS, UPDATE_CHAMPION } =
  championsSlice.actions;
