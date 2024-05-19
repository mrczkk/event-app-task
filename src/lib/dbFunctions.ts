import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  eventCategory: string;
  eventDateTime: Date;
  location: string;
  phone: string;
  email: string;
}

export const postEvent = async (event: EventType) => {
  const db = getDatabase(app);
  try {
    await set(ref(db, "events/" + event.id), event);
  } catch (error) {
    console.error("Error adding document: ", error);
  } finally {
    console.log("Event added successfully", event);
  }
};
