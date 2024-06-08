import React from "react";
import { GrMagic } from "react-icons/gr";
import PropTypes from "prop-types";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

function Navbar({ parentRef }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Acerca de",
    "Servicios",
    "Contacto",
  ];

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      parentRef={parentRef}
      isBordered
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.750)', backdropFilter: 'blur(5px)' }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
        <GrMagic className="text-purple-500"/>
          <p className="font-bold text-inherit pl-3 text-white">AWS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            Acerca de
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-purple-500" href="#" aria-current="page">
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
          <Link className="text-purple-500" href="#">Iniciar sesión</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" className="text-purple-400" href="#" variant="flat">
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

Navbar.propTypes = {
  parentRef: PropTypes.object.isRequired,
};

export default Navbar;
