import React from "react";
import { GrMagic } from "react-icons/gr";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

function NavDashboard() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Acerca de", "Servicios", "Contacto"];

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="work-sans-aesthetic"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.800)",
        backdropFilter: "blur(6px)",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <GrMagic className="text-purple-500" />
          <p className="font-bold kanit-black text-inherit pl-3 text-white">
            AWS
          </p>
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
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className="text-purple-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.750)', backdropFilter: 'blur(5px)' }}>
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="work-sans-aesthetic text-purple-500 font-extrabold">Conectado como</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Configuraciones</DropdownItem>
            <DropdownItem key="analytics">Analíticas</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.750)",
          backdropFilter: "blur(5px)",
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}

export default NavDashboard;
