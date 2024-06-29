import React from "react";
import { GrMagic } from "react-icons/gr";
import { Link } from 'react-router-dom';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Acerca de",
    "Servicios",
    "Contacto",
  ];

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="work-sans-aesthetic"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.800)', backdropFilter: 'blur(6px)' }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
        <GrMagic className="text-purple-500"/>
          <p className="font-bold kanit-black text-inherit pl-3 text-white">AWS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white">
            Acerca de
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-purple-500" aria-current="page">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/login" className="text-purple-500">Iniciar sesión</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} to="/register" color="secondary" className="text-purple-400" variant="flat">
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu style={{ backgroundColor: 'rgba(0, 0, 0, 0.750)', backdropFilter: 'blur(5px)' }}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
export default Navbar;
