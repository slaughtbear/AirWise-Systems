import FirebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Modulo para la autenticación de usuarios

const app = initializeApp(FirebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Activación de la autenticación de usuarios
// Coleccion  || Documento
const docRef = doc(db, "sensorData", "yZbQ3SAFbkh0PU0sEY1S");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

function Test() {
  return <></>;
}

export default Test;
