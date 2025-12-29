// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const rawConfig = typeof window !== "undefined" ? window.__FIREBASE_CONFIG__ : undefined;
const firebaseConfig = typeof rawConfig === "string" ? JSON.parse(rawConfig) : rawConfig;

if (!firebaseConfig || !firebaseConfig.apiKey) {
  console.warn("Firebase config missing. Provide /firebase-config.js before loading the app.");
}

const app = firebaseConfig?.apiKey ? initializeApp(firebaseConfig) : null;
let analytics = null;
let db = null;

if (app) {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    console.warn("Analytics unavailable:", e);
  }
  db = getFirestore(app);
}

if (app && typeof window !== "undefined") {
  try {
    const isLocalhost = window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    if (isLocalhost) {
      window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    const siteKey = firebaseConfig?.appCheckSiteKey;
    if (siteKey) {
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(siteKey),
        isTokenAutoRefreshEnabled: true
      });
      console.log("App Check initialized");
    } else {
      console.warn("App Check site key missing; App Check is disabled.");
    }
  } catch (e) {
    console.warn("App Check initialization failed:", e);
  }
}

export { app, analytics, db };
