import { eventsActions } from "./events-slice";
import { postEvent, getEvents, EventType } from "@/lib/dbFunctions.ts";

export const addNewEvent = (eventData: EventType) => {
  return async (dispatch) => {
    try {
      postEvent(eventData).then(() => {
        dispatch(eventsActions.addEvent(eventData));
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchEvents = () => {
  return async (dispatch) => {
    try {
      const response = await getEvents();
      dispatch(eventsActions.getEvents(response));
    } catch (error) {
      console.log(error);
    }
  };
};
