import { useEffect, useState } from "react";
import { GrMagic } from "react-icons/gr";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { signOut } from "firebase/auth";
import Avvvatars from "avvvatars-react";
import { auth } from "../../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function NavDashboard() {
  const [username, setUsername] = useState(""); // Estado para almacenar el nombre de usuario
  const navigate = useNavigate(); // Crear una instancia de useNavigate

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Obtener el nombre de usuario al montar el componente
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUsername(user.displayName || user.email); // Asignar el nombre de usuario o correo electrónico si no hay nombre
    }
  }, []);

  return (
    <NextUINavbar
      isBordered
      className="work-sans-aesthetic"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.800)",
        backdropFilter: "blur(6px)",
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <GrMagic className="text-purple-500" />
          <p className="font-bold kanit-black text-inherit pl-3 text-white">
            AWS
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button className="transition-transform focus:outline-none">
              <Avvvatars value={username} size={40} />
            </button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="text-purple-300"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.750)",
              backdropFilter: "blur(5px)",
            }}
          >
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="work-sans-aesthetic text-purple-500 font-extrabold">
                Conectado como
              </p>
              <p className="font-semibold">{username}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUINavbar>
  );
}

export default NavDashboard;
