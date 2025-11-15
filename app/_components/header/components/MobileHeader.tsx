import { useState } from "react";
import NextLink from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Accordion,
  AccordionItem,
  Link,
} from "@heroui/react";

import { ThemeSwitcher } from "@/app/_components/ThemeSwitcher";
import Logo from "@/app/_components/Logo";
import Search from "./Search";
import ProfileMenu from "./ProfileMenu";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="mt-2 rounded-lg bg-gray-200 dark:bg-gray-600"
    >
      <NavbarContent className="space-x-3">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Logo type="logo-name" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex items-center justify-between space-x-1.5">
          <Search size="sm" iconSize="15px" />
          <ThemeSwitcher size="sm" iconSize="15px" />
          <ProfileMenu size="sm" iconSize="15px" />
        </div>
      </NavbarContent>
      <NavbarMenu className="mt-3 rounded-lg">
        <NavbarMenuItem>
          <Accordion variant="light">
            <AccordionItem key="1" title="تخصص ها">
              <div className="flex flex-col gap-2 ps-3">
                <Link as={NextLink} href="/">
                  قلب
                </Link>
                <Link as={NextLink} href="/">
                  مغز و اعصاب
                </Link>
              </div>
            </AccordionItem>
            <AccordionItem key="2" title="مراکز">
              <div className="flex flex-col gap-2 ps-3">
                <Link as={NextLink} href="/">
                  بیمارستان
                </Link>
                <Link as={NextLink} href="/">
                  مطب
                </Link>
                <Link as={NextLink} href="/">
                  کلینیک
                </Link>
              </div>
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
