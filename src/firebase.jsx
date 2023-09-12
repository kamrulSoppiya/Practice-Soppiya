// import { initializeApp } from "firebase/app";

// const app = initializeApp({
//     apiKey: import.meta.env.REACT_APP_API_KEY,
//     authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
//     projectId: import.meta.env.REACT_APP_PROJECT_ID,
//     storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: import.meta.env.REACT_APP_APP_ID
// })

// export default app;

import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyAeZgn7dD_H72fs-sa5yUTj_yVtpmF_yko",
  authDomain: "fir-dev-dad2d.firebaseapp.com",
  projectId: "fir-dev-dad2d",
  storageBucket: "fir-dev-dad2d.appspot.com",
  messagingSenderId: "185085718609",
  appId: "1:185085718609:web:f16370fab5575b3b2a8870",
  databaseURL: "https://fir-dev-dad2d-default-rtdb.asia-southeast1.firebasedatabase.app",
});

// Initialize Firebase
export default app;
