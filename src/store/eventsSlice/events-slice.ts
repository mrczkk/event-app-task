import { EventType } from "@/lib/dbFunctions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventsState {
  events: EventType[];
}

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
  } as EventsState,
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
