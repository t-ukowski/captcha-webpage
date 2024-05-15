"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentPath = usePathname();

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="bg-default-100"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-foreground"
        />
        <NavbarBrand>CAPTCHA</NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={currentPath === "/"} className="ml-1 mr-1">
          <Link href="/">Strona główna</Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath === "/study"} className="ml-1 mr-1">
          <Link href="/study">Badanie</Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath === "/info"} className="ml-1 mr-1">
          <Link isExternal href="/info">
            Informacje
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/">Strona główna</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/study">Badanie</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/info">Informacje</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
