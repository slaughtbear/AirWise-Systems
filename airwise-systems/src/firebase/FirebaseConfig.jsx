import { initializeApp } from 'firebase/app'; // Inicialización de un app de Firebase
import { getAuth } from "firebase/auth"; // Servicio de autenticación 
import { getFirestore } from 'firebase/firestore'; // Servicio de Firestore
import { getDatabase } from "firebase/database"; // Servicio de Base de Datos en tiempo real

// Objeto con las credenciales de la aplicación
const firebaseConfig = {
  apiKey: "AIzaSyDPHAdxKgOoJ-HkK6jba9J-XW_hZK8y47g",
  authDomain: "aws-db-e1c2d.firebaseapp.com",
  projectId: "aws-db-e1c2d",
  storageBucket: "aws-db-e1c2d.appspot.com",
  messagingSenderId: "640784192190",
  appId: "1:640784192190:web:1a0f89e08bcdc73f2d84ef",
  measurementId: "G-N4FB5W71S8",
  databaseURL: "https://aws-db-e1c2d-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };