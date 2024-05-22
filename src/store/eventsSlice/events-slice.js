import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
  },
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload);
    },
    getEvents(state, action) {
      state.events = action.payload;
      return state;
    },
  },
});

export const eventsActions = eventsSlice.actions;
export default eventsSlice;
