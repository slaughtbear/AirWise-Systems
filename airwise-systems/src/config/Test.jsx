import FirebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const app = initializeApp(FirebaseConfig);
const db = getFirestore(app);
                        // Coleccion  || Documento
const docRef = doc(db, "sensorData", "xtmDzFD0wu364D643BJS");
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
