import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { ThemeSwitcher } from "@/app/_components/ThemeSwitcher";
import Logo from "@/app/_components/Logo";
import Search from "./Search";
import ProfileMenu from "./ProfileMenu";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["تخصص ها", "مراکز درمانی", "مشاوره آنلاین"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="mt-2 rounded-lg bg-gray-200 py-1 dark:bg-gray-600"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand>
          <Logo size="100px" type="logo-name" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex items-center justify-between space-x-1.5">
          <Search />
          <ThemeSwitcher />
          <ProfileMenu />
        </div>
      </NavbarContent>
      <NavbarMenu className="mt-4.5 mr-2 w-fit rounded-lg bg-gray-200 dark:bg-gray-600">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="sm"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
