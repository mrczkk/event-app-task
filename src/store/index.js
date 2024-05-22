import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./eventsSlice/events-slice";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
  },
});

export default store;
