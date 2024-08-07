import { useState, useEffect } from "react";
import NavDashboard from "./Navbar/NavDashboard";
import { auth } from "../../firebase/FirebaseConfig"; // Servicio de autenticación de Firebase
import { onAuthStateChanged } from "firebase/auth"; // Servicio para obtener datos de usuarios de Firebase
import CardContainer from "./CardContainer/CardContainer";
import Header from "./Header/Header";
import { AreaChartSensors } from "./AreaChartSensors/AreaChartSensors";

function Dashboard() {
  const [user, setUser] = useState(null); // Estado para guardar el usuario logueado
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuario logueado, establecer estado con los datos del usuario
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        // No hay usuario logueado
        setUser(null);
      }
      setLoading(false); // Indica que ya se ha terminado de cargar el estado de autenticación
    });

    return () => unsubscribe(); // Limpia el suscriptor al desmontar el componente
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Muestra un indicador de carga mientras se determina el estado de autenticación
  }

  return (
    <div className="bg-stone-950">
      {user ? (
        <div className="bg-stone-950">
          {/*
                    <h1>Bienvenido, {user.displayName ? user.displayName : "Usuario"}!</h1>
                    <p>Tu ID único es: {user.uid}</p>
                    <p>Tu correo es: {user.email}</p>

                    */}
          <NavDashboard user={user} />
          <Header user={user}/>
          <CardContainer />
          <AreaChartSensors />
        </div>
      ) : (
        <div>
          <h1>No estás logueado</h1>
          {/* Aquí puedes construir la interfaz para usuarios no autenticados */}
        </div>
      )}
    </div>
  );
}

export default Dashboard;