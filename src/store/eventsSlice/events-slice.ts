import { EventType } from "@/lib/dbFunctions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [] as EventType[],
  },
  reducers: {
    addEvent(state, action: PayloadAction<EventType>) {
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
