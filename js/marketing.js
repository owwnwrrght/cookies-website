import { app } from "./firebaseConfig.js";
import { getFunctions, httpsCallable } from "firebase/functions";

export const submitLead = async (email, address) => {
  try {
    if (!app) {
      throw new Error("Firebase is not configured.");
    }
    const functions = getFunctions(app, "us-central1");
    const createLead = httpsCallable(functions, "createLead");
    await createLead({ email, address });
    return { success: true };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: e };
  }
};
